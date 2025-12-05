/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { Send } from "lucide-react";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({
    type: null,
    message: "",
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: null, message: "" });

    try {
      await emailjs.sendForm(
        "service_uf5yx34",
        "template_jxtm0up",
        e.currentTarget,
        "yyVe3w27Rqmrr-CK8"
      );

      setStatus({
        type: "success",
        message: "Obrigado! Entraremos em contato em breve.",
      });
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      setStatus({
        type: "error",
        message: "Ops! Algo deu errado. Por favor, tente novamente mais tarde.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-6">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-300 mb-2"
        >
          Nome
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
          placeholder="Seu nome"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-300 mb-2"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
          placeholder="seu@email.com"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-300 mb-2"
        >
          Mensagem
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white resize-none"
          placeholder="Sua mensagem..."
        />
      </div>

      {status.message && (
        <div
          className={`p-4 rounded-lg ${
            status.type === "success"
              ? "bg-green-500/10 text-green-400"
              : "bg-red-500/10 text-red-400"
          }`}
        >
          {status.message}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 disabled:cursor-not-allowed text-white font-bold py-3 px-8 rounded-full transition-colors flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          "Enviando..."
        ) : (
          <>
            Enviar Mensagem
            <Send size={20} />
          </>
        )}
      </button>
    </form>
  );
};

export default ContactForm;
