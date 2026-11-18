import { ArrowLeft, CalendarDays, CheckCircle2, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const scheduleUrl =
  'https://calendar.google.com/calendar/appointments/schedules/AcZssZ1wJEgsi_F49ZtOEc2yo7HYnq60XD55WxS036R76IYCBHQESIwhtoKL-z_k2mgQnywWEv0-NQTF?gv=true';

const appointmentSteps = [
  'Escolha um dos horários disponíveis na agenda abaixo',
  'Preencha seus dados e conte brevemente o seu momento atual',
  'Receba o link e a confirmação direto no seu Google Agenda',
];

function Agendamento() {
  return (
    <div className="min-h-screen bg-black text-white">
      <SEO
        title="Agende uma conversa estratégica"
        description="Agende um horário com Rogério Júnior para falar sobre tráfego pago, criação de páginas, CRM e automações com IA."
        canonical="/agendamento"
        keywords="agendamento consultoria, trafego pago, criacao de sites, automacao n8n, consultoria digital"
      />

      <div className="mx-auto max-w-7xl px-4 py-12 sm:py-16">
        <Link
          to="/"
          className="mb-10 inline-flex items-center text-xs font-extrabold uppercase tracking-wider text-gray-400 transition-colors hover:text-[#B91C1C]"
        >
          <ArrowLeft className="mr-2" size={16} />
          Voltar para Início
        </Link>

        <section className="mx-auto mb-10 max-w-4xl text-center sm:mb-14">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#B91C1C]/40 bg-[#B91C1C]/10 px-4 py-2 text-xs font-extrabold uppercase tracking-widest text-[#B91C1C]">
            <CalendarDays size={16} />
            Escolha o melhor horário
          </div>
          <h1 className="mb-5 text-4xl font-extrabold uppercase leading-tight tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl">
            Agende uma conversa
          </h1>
          <p className="mx-auto max-w-3xl text-lg font-medium leading-relaxed text-gray-300">
            Vamos conversar de forma direta sobre como estruturar seus anúncios, páginas e
            automações para gerar mais vendas com previsibilidade.
          </p>
        </section>

        <section
          className="mx-auto mb-8 grid max-w-5xl gap-4 md:grid-cols-3"
          aria-label="Como funciona o agendamento"
        >
          {appointmentSteps.map((step, index) => (
            <div
              key={step}
              className="flex items-start gap-3 rounded-xl border border-zinc-800 bg-zinc-950 p-5"
            >
              <div className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-[#B91C1C]/15 text-[#B91C1C]">
                <CheckCircle2 size={18} aria-hidden="true" />
              </div>
              <p className="text-sm font-medium leading-relaxed text-gray-300">
                <span className="sr-only">Passo {index + 1}: </span>
                {step}
              </p>
            </div>
          ))}
        </section>

        <section className="mx-auto max-w-6xl overflow-hidden rounded-2xl border border-zinc-800 bg-white shadow-[0_24px_80px_rgba(0,0,0,0.45)]">
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
          Se a agenda não carregar,{' '}
          <a
            href={scheduleUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-bold text-[#B91C1C] transition-colors hover:text-white"
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
