import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  BarChart3,
  CheckCircle,
  Globe2,
  MessageSquare,
  Share2,
  Target,
  Workflow,
  Zap,
} from 'lucide-react';
import ContactForm from '../components/ContactForm';
import SEO from '../components/SEO';

const services = [
  {
    icon: Target,
    title: 'Tráfego Pago de Intenção',
    description:
      'Campanhas no Meta Ads e Google Ads desenhadas para atrair quem está pronto para comprar, reduzindo o desperdício com cliques curiosos.',
    items: [
      'Estrutura de campanhas por nível de consciência',
      'Segmentação precisa e criativos que vendem',
      'Otimização diária de custo por oportunidade',
      'Remarketing cirúrgico e acompanhamento de ROI',
    ],
  },
  {
    icon: Globe2,
    title: 'Sites & Landing Pages',
    description:
      'Páginas rápidas, diretas ao ponto e escritas para convencer. Cada bloco pensado para conduzir o visitante até o WhatsApp ou checkout.',
    items: [
      'Copy persuasiva e hierarquia clara de oferta',
      'Desenvolvimento sob medida em React ou WordPress',
      'Integração nativa com WhatsApp, formulários e CRM',
      'SEO técnico e carregamento instantâneo no celular',
    ],
  },
  {
    icon: Workflow,
    title: 'Automações com n8n e IA',
    description:
      'Fluxos invisíveis que conectam anúncios, páginas e ferramentas, fazendo o lead avançar sem trabalho manual repetitivo.',
    items: [
      'Integrações entre CRM, planilhas e formulários',
      'Webhooks, APIs e distribuição automática de leads',
      'Qualificação inicial em segundos via IA',
      'Alertas instantâneos para a equipe comercial',
    ],
  },
  {
    icon: MessageSquare,
    title: 'Direct, WhatsApp & CRM',
    description:
      'Atendimento que responde na hora. Do comentário no Instagram à mensagem no WhatsApp, tudo registrado e organizado por etapa.',
    items: [
      'RJ AutoDM para comentários e Stories do Instagram',
      'Agentes de IA para qualificação no WhatsApp',
      'Organização de funil, tags e follow-up no CRM',
      'Velocidade de resposta que multiplica a conversão',
    ],
  },
  {
    icon: Share2,
    title: 'Posicionamento & Conteúdo',
    description:
      'Comunicação direta e consistente para construir autoridade, gerar demanda orgânica e potencializar o desempenho dos anúncios pagos.',
    items: [
      'Posicionamento claro de oferta e diferenciais',
      'Roteiros de criativos e peças comerciais',
      'Direção estratégica para Instagram e YouTube',
      'Páginas e chamadas para ação alinhadas ao funil',
    ],
  },
  {
    icon: BarChart3,
    title: 'Tracking & Dados Reais',
    description:
      'Decisão sem achismo. Medição do clique até o fechamento para você saber qual campanha traz lucro e qual deve ser cortada.',
    items: [
      'Google Tag Manager, GA4 e Pixel/API de Conversões',
      'Mapeamento de gargalos entre clique e venda',
      'Painéis objetivos focados no que importa',
      'Ciclo semanal de testes e melhoria contínua',
    ],
  },
];

function MarketingDigital() {
  return (
    <div className="bg-black text-white min-h-screen">
      <SEO
        title="Tráfego Pago, Landing Pages e Estrutura Comercial"
        description="Estrutura completa de marketing digital: anúncios no Google Ads e Meta Ads, landing pages de alta conversão, tracking e automação comercial."
        canonical="/marketing-digital"
        keywords="trafego pago, meta ads, google ads, landing page alta conversao, tracking, automacao n8n, whatsapp, crm"
      />

      <div className="max-w-7xl mx-auto px-4 py-14 sm:py-20">
        <Link
          to="/"
          className="inline-flex items-center text-gray-400 hover:text-[#B91C1C] transition-colors mb-10 text-xs font-extrabold uppercase tracking-wider"
        >
          <ArrowLeft className="mr-2" size={16} />
          Voltar para Início
        </Link>

        <div className="max-w-4xl mb-16">
          <span className="inline-block text-[#B91C1C] font-extrabold uppercase tracking-widest text-xs mb-3">
            Tráfego · Página · Processo Comercial
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold uppercase tracking-[-0.03em] leading-[1.02] mb-6 text-white">
            Tráfego que gera venda, não apenas clique barato.
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 font-medium leading-relaxed">
            Não adianta jogar gasolina (anúncio) num motor quebrado (página lenta e atendimento demorado).
            Eu estruturo a jornada inteira — do anúncio ao fechamento — para cada real investido voltar em oportunidade real.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {services.map(({ icon: Icon, title, description, items }) => (
            <article
              key={title}
              className="bg-zinc-950 rounded-xl p-8 border border-zinc-800 hover:border-[#B91C1C] transition-colors"
            >
              <div className="inline-flex p-3 rounded-lg bg-[#B91C1C]/10 text-[#B91C1C] mb-6">
                <Icon size={28} />
              </div>
              <h2 className="text-xl font-extrabold uppercase tracking-tight mb-3 text-white">
                {title}
              </h2>
              <p className="text-gray-400 mb-6 text-sm font-medium leading-relaxed">
                {description}
              </p>
              <ul className="space-y-3 border-t border-zinc-900 pt-5">
                {items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <CheckCircle className="text-[#B91C1C] flex-shrink-0 mt-0.5" size={16} />
                    <span className="text-gray-300 text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <section className="mb-20 bg-[#FAFAFA] text-black rounded-2xl p-8 sm:p-12 border border-[#E5E7EB]">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <Target className="text-[#B91C1C] mb-4" size={30} />
              <h2 className="font-extrabold uppercase text-lg mb-2">Foco no lucro</h2>
              <p className="text-[#4A5568] text-sm font-medium">
                Métrica de vaidade não paga boleto. O alvo é custo por oportunidade e receita gerada.
              </p>
            </div>
            <div>
              <Workflow className="text-[#B91C1C] mb-4" size={30} />
              <h2 className="font-extrabold uppercase text-lg mb-2">Tudo conectado</h2>
              <p className="text-[#4A5568] text-sm font-medium">
                Anúncio, página, automação de resposta e CRM falando a mesma língua.
              </p>
            </div>
            <div>
              <Zap className="text-[#B91C1C] mb-4" size={30} />
              <h2 className="font-extrabold uppercase text-lg mb-2">Sem enrolação</h2>
              <p className="text-[#4A5568] text-sm font-medium">
                Implementação prática para entrar no ar rápido e otimizar com dados reais.
              </p>
            </div>
          </div>
        </section>

        <div className="max-w-2xl mx-auto text-center">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#B91C1C]">
            Diagnóstico gratuito
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold uppercase mb-4 text-white">
            Qual peça está travando seu crescimento?
          </h2>
          <p className="text-gray-400 mb-10 text-base font-medium">
            Me conte seu cenário atual e eu indico o caminho mais direto para destravar vendas.
          </p>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default MarketingDigital;
