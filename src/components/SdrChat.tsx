import { useEffect, useMemo, useRef, useState } from 'react';
import type { FormEvent, KeyboardEvent } from 'react';
import {
  Bot,
  Loader2,
  MessageCircle,
  Minimize2,
  Send,
  Sparkles,
  X,
} from 'lucide-react';

type ChatRole = 'assistant' | 'user';

interface ChatMessage {
  id: string;
  role: ChatRole;
  content: string;
  createdAt: string;
  failed?: boolean;
}

interface WebhookResponse {
  reply?: unknown;
  response?: unknown;
  output?: unknown;
  message?: unknown;
  data?: {
    reply?: unknown;
    response?: unknown;
    output?: unknown;
    message?: unknown;
  };
}

const WEBHOOK_URL = import.meta.env.VITE_N8N_SDR_WEBHOOK_URL?.trim() || '';
const CHAT_STORAGE_KEY = 'rj_sdr_chat_v1';
const SESSION_STORAGE_KEY = 'rj_sdr_session_v1';
const MAX_MESSAGE_LENGTH = 1200;

const quickReplies = [
  'Quero atrair mais clientes',
  'Preciso de um site ou landing page',
  'Quero automatizar meu atendimento',
  'Quero melhorar meu tráfego pago',
];

function createId() {
  return (
    window.crypto?.randomUUID?.() ||
    `${Date.now()}-${Math.random().toString(36).slice(2)}`
  );
}

function getSessionId() {
  try {
    const current = localStorage.getItem(SESSION_STORAGE_KEY);
    if (current) return current;

    const next = createId();
    localStorage.setItem(SESSION_STORAGE_KEY, next);
    return next;
  } catch {
    return createId();
  }
}

function getInitialMessages(): ChatMessage[] {
  try {
    const stored = localStorage.getItem(CHAT_STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored) as ChatMessage[];
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed.slice(-30);
      }
    }
  } catch {
    // Um histórico inválido não deve impedir a abertura do atendimento.
  }

  return [
    {
      id: createId(),
      role: 'assistant',
      content:
        'Olá! Sou o assistente virtual do Rogério. Conte o que você precisa melhorar no seu negócio e eu vou ajudar a encontrar o melhor caminho.',
      createdAt: new Date().toISOString(),
    },
  ];
}

function getReply(data: WebhookResponse | string) {
  if (typeof data === 'string') return data.trim();

  const candidates = [
    data.reply,
    data.response,
    data.output,
    data.message,
    data.data?.reply,
    data.data?.response,
    data.data?.output,
    data.data?.message,
  ];

  const reply = candidates.find(
    (candidate): candidate is string =>
      typeof candidate === 'string' && candidate.trim().length > 0
  );

  return reply?.trim() || '';
}

function formatTime(value: string) {
  return new Intl.DateTimeFormat('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
  }).format(new Date(value));
}

export default function SdrChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [showTeaser, setShowTeaser] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>(getInitialMessages);
  const [draft, setDraft] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState('');
  const sessionId = useMemo(getSessionId, []);
  const listRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const hasVisitorMessages = messages.some((message) => message.role === 'user');

  useEffect(() => {
    const timer = window.setTimeout(() => {
      if (!isOpen) setShowTeaser(true);
    }, 6000);

    return () => window.clearTimeout(timer);
  }, [isOpen]);

  useEffect(() => {
    try {
      localStorage.setItem(CHAT_STORAGE_KEY, JSON.stringify(messages.slice(-30)));
    } catch {
      // O atendimento continua funcionando mesmo sem armazenamento local.
    }
  }, [messages]);

  useEffect(() => {
    if (!isOpen) return;

    window.setTimeout(() => inputRef.current?.focus(), 120);
    listRef.current?.scrollTo({
      top: listRef.current.scrollHeight,
      behavior: 'smooth',
    });
  }, [isOpen, messages, isSending]);

  useEffect(() => {
    const handleEscape = (event: globalThis.KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  const openChat = () => {
    setIsOpen(true);
    setShowTeaser(false);

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'sdr_chat_open',
      chat_session_id: sessionId,
      page_path: window.location.pathname,
    });
  };

  const sendMessage = async (rawMessage: string) => {
    const content = rawMessage.trim().slice(0, MAX_MESSAGE_LENGTH);
    if (!content || isSending) return;

    const userMessage: ChatMessage = {
      id: createId(),
      role: 'user',
      content,
      createdAt: new Date().toISOString(),
    };

    const conversation = [...messages, userMessage];
    setMessages(conversation);
    setDraft('');
    setStatus('Enviando mensagem');
    setIsSending(true);

    if (!hasVisitorMessages) {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'sdr_chat_started',
        chat_session_id: sessionId,
        page_path: window.location.pathname,
      });
    }

    if (!WEBHOOK_URL) {
      window.setTimeout(() => {
        setMessages((current) => [
          ...current,
          {
            id: createId(),
            role: 'assistant',
            content:
              'A integração do atendimento está em configuração. Assim que o webhook for conectado, suas mensagens serão respondidas por aqui.',
            createdAt: new Date().toISOString(),
          },
        ]);
        setIsSending(false);
        setStatus('');
      }, 650);
      return;
    }

    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 30000);
    const urlParams = new URLSearchParams(window.location.search);

    try {
      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        mode: 'cors',
        credentials: 'omit',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          event: 'sdr_message',
          schema_version: '1.0',
          channel: 'website',
          session_id: sessionId,
          message_id: userMessage.id,
          message: userMessage.content,
          sent_at: userMessage.createdAt,
          history: conversation.slice(-20).map((message) => ({
            role: message.role,
            content: message.content,
            created_at: message.createdAt,
          })),
          visitor: {
            language: navigator.language,
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
          },
          context: {
            page_url: window.location.href,
            page_path: window.location.pathname,
            page_title: document.title,
            referrer: document.referrer || null,
            utm_source: urlParams.get('utm_source'),
            utm_medium: urlParams.get('utm_medium'),
            utm_campaign: urlParams.get('utm_campaign'),
            utm_content: urlParams.get('utm_content'),
            utm_term: urlParams.get('utm_term'),
          },
        }),
        signal: controller.signal,
      });

      if (!response.ok) {
        throw new Error(`Webhook respondeu com status ${response.status}`);
      }

      const contentType = response.headers.get('content-type') || '';
      const responseData = contentType.includes('application/json')
        ? ((await response.json()) as WebhookResponse)
        : await response.text();
      const reply = getReply(responseData);

      if (!reply) {
        throw new Error('O webhook não retornou uma resposta reconhecida');
      }

      setMessages((current) => [
        ...current,
        {
          id: createId(),
          role: 'assistant',
          content: reply,
          createdAt: new Date().toISOString(),
        },
      ]);
    } catch (error) {
      const isTimeout =
        error instanceof DOMException && error.name === 'AbortError';

      setMessages((current) => [
        ...current,
        {
          id: createId(),
          role: 'assistant',
          content: isTimeout
            ? 'O atendimento demorou mais do que o esperado. Tente enviar novamente em alguns instantes.'
            : 'Não consegui conectar ao atendimento agora. Tente novamente ou fale diretamente com o Rogério pelo WhatsApp.',
          createdAt: new Date().toISOString(),
          failed: true,
        },
      ]);
    } finally {
      window.clearTimeout(timeout);
      setIsSending(false);
      setStatus('');
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    void sendMessage(draft);
  };

  const handleInputKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      void sendMessage(draft);
    }
  };

  return (
    <>
      {isOpen && (
        <aside
          className="fixed inset-x-0 bottom-0 z-[90] flex h-[min(720px,92dvh)] flex-col overflow-hidden rounded-t-3xl border border-zinc-700 bg-zinc-950 shadow-[0_28px_90px_rgba(0,0,0,0.65)] sm:inset-x-auto sm:bottom-6 sm:right-6 sm:h-[min(650px,calc(100dvh-48px))] sm:w-[390px] sm:rounded-3xl"
          role="dialog"
          aria-label="Atendimento virtual"
        >
          <header className="relative overflow-hidden border-b border-white/10 bg-gradient-to-br from-emerald-500 via-emerald-600 to-emerald-800 px-5 py-4">
            <div className="absolute -right-10 -top-12 h-32 w-32 rounded-full bg-white/10 blur-2xl" />
            <div className="relative flex items-center gap-3">
              <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-black/25 ring-1 ring-white/20">
                <Bot className="h-6 w-6 text-white" aria-hidden="true" />
                <span className="absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 rounded-full border-2 border-emerald-600 bg-lime-300" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <h2 className="truncate font-display text-lg font-bold uppercase tracking-wide text-white">
                    Assistente do Rogério
                  </h2>
                  <Sparkles className="h-4 w-4 text-emerald-100" aria-hidden="true" />
                </div>
                <p className="text-xs font-medium text-emerald-50/90">
                  SDR virtual • disponível agora
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="rounded-xl p-2 text-white/80 transition hover:bg-black/15 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/70"
                aria-label="Minimizar atendimento"
              >
                <Minimize2 className="h-5 w-5" />
              </button>
            </div>
          </header>

          <div
            ref={listRef}
            className="flex-1 space-y-4 overflow-y-auto bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.08),_transparent_36%)] px-4 py-5"
            aria-live="polite"
          >
            <div className="mx-auto w-fit rounded-full border border-zinc-800 bg-zinc-900/80 px-3 py-1 text-[11px] font-medium text-zinc-400">
              Atendimento seguro pelo site
            </div>

            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[86%] rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-sm ${
                    message.role === 'user'
                      ? 'rounded-br-md bg-emerald-500 text-black'
                      : message.failed
                        ? 'rounded-bl-md border border-amber-700/40 bg-amber-950/50 text-amber-50'
                        : 'rounded-bl-md border border-zinc-800 bg-zinc-900 text-zinc-100'
                  }`}
                >
                  <p className="whitespace-pre-wrap break-words">{message.content}</p>
                  <span
                    className={`mt-1.5 block text-right text-[10px] ${
                      message.role === 'user' ? 'text-emerald-950/70' : 'text-zinc-500'
                    }`}
                  >
                    {formatTime(message.createdAt)}
                  </span>
                </div>
              </div>
            ))}

            {!hasVisitorMessages && (
              <div className="grid gap-2 pt-1">
                {quickReplies.map((reply) => (
                  <button
                    key={reply}
                    type="button"
                    onClick={() => void sendMessage(reply)}
                    disabled={isSending}
                    className="rounded-xl border border-emerald-500/30 bg-emerald-500/5 px-3 py-2.5 text-left text-xs font-medium text-emerald-100 transition hover:border-emerald-400/70 hover:bg-emerald-500/10 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {reply}
                  </button>
                ))}
              </div>
            )}

            {isSending && (
              <div className="flex justify-start">
                <div className="flex items-center gap-2 rounded-2xl rounded-bl-md border border-zinc-800 bg-zinc-900 px-4 py-3 text-sm text-zinc-400">
                  <Loader2 className="h-4 w-4 animate-spin text-emerald-400" />
                  Analisando sua mensagem...
                </div>
              </div>
            )}
          </div>

          <footer className="border-t border-zinc-800 bg-zinc-950 p-3">
            <form onSubmit={handleSubmit} className="flex items-end gap-2">
              <label htmlFor="sdr-chat-message" className="sr-only">
                Escreva sua mensagem
              </label>
              <textarea
                ref={inputRef}
                id="sdr-chat-message"
                value={draft}
                onChange={(event) =>
                  setDraft(event.target.value.slice(0, MAX_MESSAGE_LENGTH))
                }
                onKeyDown={handleInputKeyDown}
                rows={1}
                placeholder="Digite sua mensagem..."
                disabled={isSending}
                className="max-h-28 min-h-11 flex-1 resize-none rounded-2xl border border-zinc-700 bg-zinc-900 px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-500 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 disabled:opacity-60"
              />
              <button
                type="submit"
                disabled={!draft.trim() || isSending}
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-emerald-500 text-black transition hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:ring-offset-2 focus:ring-offset-zinc-950 disabled:cursor-not-allowed disabled:opacity-40"
                aria-label="Enviar mensagem"
              >
                {isSending ? (
                  <Loader2 className="h-5 w-5 animate-spin" />
                ) : (
                  <Send className="h-5 w-5" />
                )}
              </button>
            </form>
            <div className="mt-2 flex items-center justify-between gap-3 px-1 text-[10px] text-zinc-500">
              <span>{status || `${draft.length}/${MAX_MESSAGE_LENGTH}`}</span>
              <a
                href="/politica-privacidade"
                className="transition hover:text-zinc-300"
              >
                Privacidade
              </a>
            </div>
          </footer>
        </aside>
      )}

      {!isOpen && (
        <div className="fixed bottom-5 right-4 z-[89] flex items-end gap-3 sm:bottom-6 sm:right-6">
          {showTeaser && (
            <div className="relative max-w-[260px] rounded-2xl border border-zinc-700 bg-zinc-950 p-4 pr-9 text-sm text-zinc-100 shadow-2xl">
              <button
                type="button"
                onClick={() => setShowTeaser(false)}
                className="absolute right-2 top-2 rounded-md p-1 text-zinc-500 transition hover:bg-zinc-800 hover:text-white"
                aria-label="Fechar mensagem do atendimento"
              >
                <X className="h-3.5 w-3.5" />
              </button>
              <p className="font-semibold text-white">Posso ajudar?</p>
              <p className="mt-1 text-xs leading-relaxed text-zinc-400">
                Conte seu objetivo e descubra a melhor solução para o seu negócio.
              </p>
            </div>
          )}

          <button
            type="button"
            onClick={openChat}
            className="group relative flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-black shadow-[0_14px_38px_rgba(16,185,129,0.4)] transition hover:scale-105 hover:bg-emerald-400 focus:outline-none focus:ring-4 focus:ring-emerald-400/30"
            aria-label="Abrir atendimento virtual"
          >
            <MessageCircle className="h-7 w-7 transition group-hover:scale-110" />
            <span className="absolute right-0 top-0 h-4 w-4 rounded-full border-2 border-black bg-lime-300" />
          </button>
        </div>
      )}
    </>
  );
}
