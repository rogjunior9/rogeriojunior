import { FormEvent, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Send } from 'lucide-react';
import { trackLead } from '../lib/analytics';

type FormStatus = {
  type: 'success' | 'error' | null;
  message: string;
};

const inputClassName =
  'w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent text-white';

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
        message: 'Mensagem enviada! Recebi seus dados e entrarei em contato em breve.',
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
        message: 'Não foi possível enviar agora. Tente novamente ou fale comigo pelo WhatsApp.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-6" aria-label="Formulário de contato">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
          Nome
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
          placeholder="Seu nome"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
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
        <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
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

      <div>
        <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
          Como posso ajudar?
        </label>
        <select id="service" name="service" required className={inputClassName} defaultValue="">
          <option value="" disabled>
            Selecione uma opção
          </option>
          <option value="Tráfego pago">Tráfego pago</option>
          <option value="Site ou landing page">Site ou landing page</option>
          <option value="Automação com n8n ou IA">Automação com n8n ou IA</option>
          <option value="WhatsApp, chatbot ou CRM">WhatsApp, chatbot ou CRM</option>
          <option value="Outro projeto">Outro projeto</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
          Conte um pouco sobre o seu objetivo
        </label>
        <textarea
          id="message"
          name="message"
          required
          minLength={10}
          maxLength={3000}
          rows={5}
          className={`${inputClassName} resize-none`}
          placeholder="O que você deseja vender, melhorar ou automatizar?"
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
          className={`p-4 rounded-lg ${
            status.type === 'success'
              ? 'bg-green-500/10 text-green-400 border border-green-500/20'
              : 'bg-red-500/10 text-red-400 border border-red-500/20'
          }`}
        >
          {status.message}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-accent hover:bg-yellow-600 disabled:bg-zinc-700 disabled:text-gray-400 disabled:cursor-not-allowed text-black font-bold py-3 px-8 rounded-full transition-colors flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          'Enviando...'
        ) : (
          <>
            Solicitar contato
            <Send size={20} />
          </>
        )}
      </button>
    </form>
  );
};

export default ContactForm;
