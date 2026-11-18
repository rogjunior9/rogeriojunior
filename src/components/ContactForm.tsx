import { FormEvent, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Send } from 'lucide-react';
import { trackLead } from '../lib/analytics';

type FormStatus = {
  type: 'success' | 'error' | null;
  message: string;
};

const inputClassName =
  'w-full px-4 py-3 bg-zinc-950 border border-zinc-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B91C1C] focus:border-transparent text-white placeholder-gray-500 font-medium';

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<FormStatus>({ type: null, message: '' });

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const service = String(formData.get('service') || 'Não informado');

    setIsSubmitting(true);
    setStatus({ type: null, message: '' });

    try {
      await emailjs.sendForm(
        'service_uf5yx34',
        'template_jxtm0up',
        form,
        'yyVe3w27Rqmrr-CK8'
      );

      setStatus({
        type: 'success',
        message: 'Recebi seu diagnóstico! Vou analisar seu cenário e responder em breve.',
      });
      form.reset();

      trackLead({
        source: 'formulario',
        location: 'formulario_contato',
        service,
      });
    } catch {
      setStatus({
        type: 'error',
        message: 'Não foi possível enviar agora. Me chame direto no WhatsApp.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-5 text-left" aria-label="Formulário de contato">
      <div>
        <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
          Seu nome
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          minLength={2}
          maxLength={100}
          autoComplete="name"
          className={inputClassName}
          placeholder="Como você se chama?"
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
            E-mail
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            maxLength={160}
            autoComplete="email"
            className={inputClassName}
            placeholder="seu@email.com"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
            WhatsApp
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            minLength={10}
            maxLength={30}
            autoComplete="tel"
            className={inputClassName}
            placeholder="(31) 99999-9999"
          />
        </div>
      </div>

      <div>
        <label htmlFor="service" className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
          Qual é a sua maior urgência hoje?
        </label>
        <select id="service" name="service" required className={inputClassName} defaultValue="">
          <option value="" disabled>
            Selecione uma opção
          </option>
          <option value="Tráfego pago">Atrair mais clientes com Tráfego Pago</option>
          <option value="Site ou landing page">Criar Site ou Landing Page de alta conversão</option>
          <option value="Automação com n8n ou IA">Automatizar atendimento com IA, AutoDM ou n8n</option>
          <option value="WhatsApp, chatbot ou CRM">Organizar funil comercial e CRM</option>
          <option value="Outro projeto">Estrutura completa (Tráfego + Página + Automação)</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
          Fale sobre o seu negócio
        </label>
        <textarea
          id="message"
          name="message"
          required
          minLength={10}
          maxLength={3000}
          rows={4}
          className={`${inputClassName} resize-none`}
          placeholder="O que você vende hoje e qual resultado quer alcançar nos próximos 90 dias?"
        />
      </div>

      <div className="absolute left-[-9999px]" aria-hidden="true">
        <label htmlFor="website">Não preencha este campo</label>
        <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      {status.message && (
        <div
          role="status"
          aria-live="polite"
          className={`p-4 rounded-lg text-sm font-medium ${
            status.type === 'success'
              ? 'bg-emerald-950/60 text-emerald-300 border border-emerald-700/50'
              : 'bg-red-950/60 text-red-300 border border-[#B91C1C]'
          }`}
        >
          {status.message}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[#B91C1C] hover:bg-[#991B1B] disabled:bg-zinc-800 disabled:text-gray-500 disabled:cursor-not-allowed text-white font-bold py-4 px-8 rounded-md transition-colors flex items-center justify-center gap-2 text-sm uppercase tracking-wider"
      >
        {isSubmitting ? (
          'Enviando...'
        ) : (
          <>
            Quero meu diagnóstico
            <Send size={18} />
          </>
        )}
      </button>
    </form>
  );
};

export default ContactForm;
