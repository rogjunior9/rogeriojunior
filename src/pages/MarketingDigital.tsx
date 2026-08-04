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
    title: 'Tráfego Pago',
    description:
      'Campanhas no Meta Ads e Google Ads planejadas para atrair o público certo e gerar oportunidades comerciais, não apenas cliques.',
    items: [
      'Planejamento e estrutura de campanhas',
      'Segmentação e criativos orientados à conversão',
      'Otimização de orçamento e custo por lead',
      'Remarketing e acompanhamento de resultados',
    ],
  },
  {
    icon: Globe2,
    title: 'Sites e Landing Pages',
    description:
      'Páginas rápidas, responsivas e preparadas para apresentar sua oferta com clareza e transformar visitas em contatos e vendas.',
    items: [
      'Sites institucionais e páginas de captura',
      'WordPress, desenvolvimento sob medida e no-code',
      'Integração com WhatsApp, formulários e CRM',
      'SEO técnico e mensuração de conversões',
    ],
  },
  {
    icon: Workflow,
    title: 'Automações com n8n e IA',
    description:
      'Fluxos que conectam ferramentas, eliminam tarefas repetitivas e fazem as informações avançarem automaticamente pelo seu processo comercial.',
    items: [
      'Integrações entre CRM, planilhas e formulários',
      'Webhooks, APIs e tratamento de dados',
      'Qualificação e distribuição automática de leads',
      'Agentes e processamento de dados com IA',
    ],
  },
  {
    icon: MessageSquare,
    title: 'WhatsApp, Chatbots e CRM',
    description:
      'Jornadas de atendimento que respondem mais rápido, organizam contatos e ajudam sua equipe a priorizar quem tem real potencial de compra.',
    items: [
      'Automação de atendimento e follow-up',
      'ManyChat e fluxos para Instagram e WhatsApp',
      'Organização de funil, etapas e etiquetas no CRM',
      'Integração com Opa Suite e ferramentas existentes',
    ],
  },
  {
    icon: Share2,
    title: 'Conteúdo e Presença Digital',
    description:
      'Direção estratégica para comunicar melhor sua proposta, fortalecer a marca e manter uma presença coerente nos canais digitais.',
    items: [
      'Posicionamento e planejamento de conteúdo',
      'Direção de campanhas e peças comerciais',
      'Estratégia para redes sociais',
      'Páginas, ofertas e chamadas para ação',
    ],
  },
  {
    icon: BarChart3,
    title: 'Estratégia e Mensuração',
    description:
      'Diagnóstico do caminho entre anúncio, atendimento e venda para descobrir gargalos e tomar decisões com dados mais confiáveis.',
    items: [
      'Mapeamento de funil e jornada do cliente',
      'Google Analytics, pixels e eventos de conversão',
      'Painéis e relatórios objetivos',
      'Plano de melhoria contínua',
    ],
  },
];

function MarketingDigital() {
  return (
    <div className="bg-black text-white min-h-screen">
      <SEO
        title="Marketing Digital, Tráfego Pago, Sites e Automação"
        description="Estratégia de marketing digital com tráfego pago, sites, landing pages, CRM, WhatsApp e automações com n8n e IA para gerar e organizar oportunidades de venda."
        canonical="/marketing-digital"
        keywords="marketing digital, tráfego pago, meta ads, google ads, criação de sites, landing page, n8n, automação, whatsapp, crm, belo horizonte"
      />

      <div className="max-w-7xl mx-auto px-4 py-16">
        <Link
          to="/"
          className="inline-flex items-center text-gray-300 hover:text-accent transition-colors mb-12 font-display uppercase tracking-wider font-bold"
        >
          <ArrowLeft className="mr-2" size={20} />
          Voltar para Home
        </Link>

        <div className="text-center mb-20">
          <span className="inline-block text-accent font-display font-bold uppercase tracking-[0.2em] text-sm mb-4">
            Estratégia, execução e tecnologia
          </span>
          <h1 className="text-5xl md:text-6xl font-display font-bold uppercase mb-6 text-white">
            Marketing Digital
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto font-sans font-light leading-relaxed">
            Eu conecto tráfego, páginas, atendimento, dados e automação para que sua presença digital gere oportunidades reais e seu processo comercial funcione com mais clareza e eficiência.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map(({ icon: Icon, title, description, items }) => (
            <article
              key={title}
              className="bg-zinc-900 rounded-xl p-8 hover:-translate-y-1 transition-transform border border-zinc-800"
            >
              <Icon className="text-accent mb-6" size={40} />
              <h2 className="text-2xl font-display font-bold uppercase mb-4 text-white">
                {title}
              </h2>
              <p className="text-gray-400 mb-6 font-sans font-light leading-relaxed">
                {description}
              </p>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle className="text-accent flex-shrink-0 mt-1" size={16} />
                    <span className="text-gray-300 font-sans font-light">{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <section className="mb-20 border-y border-zinc-800 py-14">
          <div className="grid md:grid-cols-3 gap-10 text-center">
            <div>
              <Target className="text-accent mx-auto mb-4" size={34} />
              <h2 className="font-display font-bold uppercase text-xl mb-2">Foco no negócio</h2>
              <p className="text-gray-400 font-light">A tecnologia entra para resolver um objetivo comercial claro.</p>
            </div>
            <div>
              <Workflow className="text-accent mx-auto mb-4" size={34} />
              <h2 className="font-display font-bold uppercase text-xl mb-2">Solução integrada</h2>
              <p className="text-gray-400 font-light">Anúncio, página, atendimento e CRM trabalham como uma jornada única.</p>
            </div>
            <div>
              <Zap className="text-accent mx-auto mb-4" size={34} />
              <h2 className="font-display font-bold uppercase text-xl mb-2">Execução prática</h2>
              <p className="text-gray-400 font-light">Menos complicação e uma entrega pensada para entrar em operação.</p>
            </div>
          </div>
        </section>

        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-display font-bold uppercase text-center mb-8 text-white">
            Vamos encontrar a melhor solução?
          </h2>
          <p className="text-gray-400 text-center mb-12 font-sans font-light">
            Conte o seu objetivo e o principal desafio atual. Eu avalio o cenário e indico o caminho mais direto para avançar.
          </p>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default MarketingDigital;
