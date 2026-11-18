import { Link } from 'react-router-dom';
import { ArrowLeft, Bot, Cpu, MessageSquare, Zap, BarChart, CheckCircle, Workflow } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import SEO from '../components/SEO';

function AutomacoesIA() {
  return (
    <div className="bg-black text-white min-h-screen">
      <SEO
        title="Automações com IA — n8n, AutoDM, WhatsApp e CRM"
        description="Pare de perder leads por demora no atendimento. Agentes de IA no WhatsApp, automações com n8n e DM automática no Instagram e Facebook."
        canonical="/automacoes-ia"
        keywords="automacao IA, n8n, autodm instagram, chatbot whatsapp, agente ia vendas, crm whatsapp"
      />
      <div className="max-w-7xl mx-auto px-4 py-14 sm:py-20">
        <Link
          to="/"
          className="inline-flex items-center text-gray-400 hover:text-[#B91C1C] transition-colors mb-10 text-xs font-extrabold uppercase tracking-wider"
        >
          <ArrowLeft className="mr-2" size={16} />
          Voltar para Início
        </Link>

        {/* Hero Section */}
        <div className="max-w-4xl mb-16">
          <span className="inline-block text-[#B91C1C] font-extrabold uppercase tracking-widest text-xs mb-3">
            Velocidade &amp; Escala Operacional
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold uppercase tracking-[-0.03em] leading-[1.02] mb-6 text-white">
            Lead que espera 15 minutos compra do concorrente.
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 font-medium leading-relaxed">
            Estruture seu atendimento e operação com <strong className="text-white">n8n</strong>,{' '}
            <strong className="text-white">Agentes de IA no WhatsApp</strong> e{' '}
            <strong className="text-white">Automação de Direct no Instagram</strong> para qualificar e responder em segundos, 24 horas por dia.
          </p>
        </div>

        {/* Services Section */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          <div className="bg-zinc-950 rounded-xl p-8 border border-zinc-800 hover:border-[#B91C1C] transition-colors">
            <div className="inline-flex p-3 rounded-lg bg-[#B91C1C]/10 text-[#B91C1C] mb-6">
              <Workflow size={32} />
            </div>
            <h2 className="text-2xl font-extrabold uppercase mb-3 text-white">
              Fluxos &amp; Integrações (n8n + APIs)
            </h2>
            <p className="text-gray-400 mb-6 text-sm font-medium leading-relaxed">
              Elimine planilhas manuais e tarefas repetitivas conectando anúncios, formulários, CRM, WhatsApp e sistemas internos.
            </p>
            <ul className="space-y-3 border-t border-zinc-900 pt-5">
              {[
                'Integração imediata entre Meta Lead Ads, site e CRM',
                'Distribuição automática e follow-up no WhatsApp',
                'Processamento inteligente de dados e áudios com IA',
                'Webhooks, APIs personalizadas e relatórios automáticos',
                'Zero perda de contato entre marketing e vendas',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2.5">
                  <CheckCircle className="text-[#B91C1C] flex-shrink-0" size={16} />
                  <span className="text-gray-300 text-sm font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-zinc-950 rounded-xl p-8 border border-zinc-800 hover:border-[#B91C1C] transition-colors">
            <div className="inline-flex p-3 rounded-lg bg-[#B91C1C]/10 text-[#B91C1C] mb-6">
              <MessageSquare size={32} />
            </div>
            <h2 className="text-2xl font-extrabold uppercase mb-3 text-white">
              Agentes de IA &amp; AutoDM (IG / WhatsApp)
            </h2>
            <p className="text-gray-400 mb-6 text-sm font-medium leading-relaxed">
              Atendimento inteligente 24/7 que entende contexto, responde comentários no Instagram pelo Direct e agenda reuniões automaticamente.
            </p>
            <ul className="space-y-3 border-t border-zinc-900 pt-5">
              {[
                'Automação de DM por palavra-chave (Comentários e Stories)',
                'SDR com IA no WhatsApp para qualificação imediata',
                'Agendamento direto na agenda e registro no CRM',
                'Transbordo organizado para atendimento humano',
                'Recuperação automática de leads que pararam de responder',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2.5">
                  <CheckCircle className="text-[#B91C1C] flex-shrink-0" size={16} />
                  <span className="text-gray-300 text-sm font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-20 bg-[#FAFAFA] text-black rounded-2xl p-8 sm:p-12 border border-[#E5E7EB]">
          <h2 className="text-2xl sm:text-3xl font-extrabold uppercase text-center mb-10">
            O que muda quando você automatiza
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <Zap className="text-[#B91C1C] mb-3" size={28} />
              <h3 className="font-extrabold uppercase mb-2 text-base">Resposta imediata</h3>
              <p className="text-[#4A5568] text-sm font-medium">
                Quem comenta ou chama é atendido em segundos, no pico do interesse.
              </p>
            </div>
            <div>
              <Bot className="text-[#B91C1C] mb-3" size={28} />
              <h3 className="font-extrabold uppercase mb-2 text-base">IA com contexto</h3>
              <p className="text-[#4A5568] text-sm font-medium">
                Conversa natural conectada à sua base de conhecimento e regras reais.
              </p>
            </div>
            <div>
              <Cpu className="text-[#B91C1C] mb-3" size={28} />
              <h3 className="font-extrabold uppercase mb-2 text-base">Escala sem inchar time</h3>
              <p className="text-[#4A5568] text-sm font-medium">
                Atenda centenas de pessoas simultaneamente mantendo padrão de qualidade.
              </p>
            </div>
            <div>
              <BarChart className="text-[#B91C1C] mb-3" size={28} />
              <h3 className="font-extrabold uppercase mb-2 text-base">Mais conversão no funil</h3>
              <p className="text-[#4A5568] text-sm font-medium">
                Seu time comercial só entra quando o cliente já está qualificado.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#B91C1C]">
            Implementação sob medida
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold uppercase mb-4 text-white">
            Qual processo você quer automatizar primeiro?
          </h2>
          <p className="text-gray-400 mb-10 text-base font-medium">
            Descreva o seu fluxo atual e veja como conectar IA, WhatsApp, Instagram e CRM sem complicação.
          </p>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default AutomacoesIA;
