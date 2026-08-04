import { ArrowLeft, CalendarDays, CheckCircle2, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const scheduleUrl =
  'https://calendar.google.com/calendar/appointments/schedules/AcZssZ1wJEgsi_F49ZtOEc2yo7HYnq60XD55WxS036R76IYCBHQESIwhtoKL-z_k2mgQnywWEv0-NQTF?gv=true';

const appointmentSteps = [
  'Escolha um dos horários disponíveis na agenda',
  'Preencha seus dados e conte brevemente o seu objetivo',
  'Receba a confirmação diretamente pelo Google Agenda',
];

function Agendamento() {
  return (
    <div className="min-h-screen bg-black text-white">
      <SEO
        title="Agende uma conversa"
        description="Agende uma conversa com Rogério Júnior para falar sobre marketing digital, tráfego pago, sites, automações com n8n e inteligência artificial."
        canonical="/agendamento"
        keywords="agendamento consultoria, marketing digital, tráfego pago, criação de sites, automação n8n, consultoria digital"
      />

      <div className="mx-auto max-w-7xl px-4 py-12 sm:py-16">
        <Link
          to="/"
          className="mb-10 inline-flex items-center font-display font-bold uppercase tracking-wider text-gray-300 transition-colors hover:text-accent"
        >
          <ArrowLeft className="mr-2" size={20} />
          Voltar para Home
        </Link>

        <section className="mx-auto mb-10 max-w-4xl text-center sm:mb-14">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-2 font-display text-sm font-bold uppercase tracking-widest text-accent">
            <CalendarDays size={18} />
            Escolha o melhor horário
          </div>
          <h1 className="mb-6 font-display text-4xl font-bold uppercase leading-tight text-white sm:text-5xl lg:text-6xl">
            Agende uma conversa
          </h1>
          <p className="mx-auto max-w-3xl text-lg font-light leading-relaxed text-gray-300 sm:text-xl">
            Reserve um horário para conversarmos sobre estratégias de marketing
            digital, sites, tráfego pago e automações que podem acelerar o seu
            negócio.
          </p>
        </section>

        <section
          className="mx-auto mb-8 grid max-w-5xl gap-4 md:grid-cols-3"
          aria-label="Como funciona o agendamento"
        >
          {appointmentSteps.map((step, index) => (
            <div
              key={step}
              className="flex items-start gap-3 rounded-xl border border-zinc-800 bg-zinc-900/70 p-5"
            >
              <div className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-accent/15 text-accent">
                <CheckCircle2 size={18} aria-hidden="true" />
              </div>
              <p className="text-sm leading-relaxed text-gray-300">
                <span className="sr-only">Passo {index + 1}: </span>
                {step}
              </p>
            </div>
          ))}
        </section>

        <section className="mx-auto max-w-6xl overflow-hidden rounded-2xl border border-zinc-700 bg-white shadow-[0_24px_80px_rgba(0,0,0,0.45)]">
          <iframe
            src={scheduleUrl}
            title="Agendamento com Rogério Júnior"
            width="100%"
            height="760"
            frameBorder="0"
            loading="lazy"
            className="block min-h-[720px] w-full bg-white md:min-h-[760px]"
          />
        </section>

        <p className="mt-6 text-center text-sm text-gray-400">
          Se a agenda não aparecer,{' '}
          <a
            href={scheduleUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-semibold text-accent transition-colors hover:text-white"
          >
            abra o agendamento em uma nova janela
            <ExternalLink size={14} aria-hidden="true" />
          </a>
          .
        </p>
      </div>
    </div>
  );
}

export default Agendamento;
