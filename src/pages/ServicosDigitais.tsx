import { Link } from 'react-router-dom';
import { ArrowLeft, FileText, Target, Share2, Trophy, Zap, Users, BarChart, CheckCircle } from 'lucide-react';
import ContactForm from '../components/ContactForm';

function ServicosDigitais() {
  return (
    <div className="bg-black text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <Link to="/" className="inline-flex items-center text-gray-300 hover:text-accent transition-colors mb-12 font-display uppercase tracking-wider font-bold">
          <ArrowLeft className="mr-2" size={20} />
          Voltar para Home
        </Link>

        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl font-display font-bold uppercase mb-6 text-white">
            Serviços Digitais
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-sans font-light">
            Transforme sua presença digital e impulsione sua carreira com nossos serviços especializados em marketing digital e desenvolvimento profissional.
          </p>
        </div>

        {/* Services Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {/* Resume Writing */}
          <div className="bg-zinc-900 rounded-xl p-8 hover:scale-[1.02] transition-transform border border-zinc-800">
            <FileText className="text-accent mb-6" size={40} />
            <h2 className="text-2xl font-display font-bold uppercase mb-4 text-white">Elaboração de Currículos</h2>
            <p className="text-gray-400 mb-6 font-sans font-light">
              Destaque-se no mercado de trabalho com um currículo profissional, estratégico e otimizado para ATS.
            </p>
            <ul className="space-y-3">
              {[
                'Formato moderno e profissional',
                'Otimização para sistemas ATS',
                'Destaque de conquistas-chave',
                'Revisão profissional',
                'Versões em PT e EN'
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <CheckCircle className="text-accent flex-shrink-0" size={16} />
                  <span className="text-gray-300 font-sans font-light">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Paid Traffic */}
          <div className="bg-zinc-900 rounded-xl p-8 hover:scale-[1.02] transition-transform border border-zinc-800">
            <Target className="text-accent mb-6" size={40} />
            <h2 className="text-2xl font-display font-bold uppercase mb-4 text-white">Tráfego Pago</h2>
            <p className="text-gray-400 mb-6 font-sans font-light">
              Alcance seu público-alvo e maximize seu ROI com campanhas estratégicas de publicidade digital.
            </p>
            <ul className="space-y-3">
              {[
                'Gestão de campanhas',
                'Segmentação avançada',
                'Otimização contínua',
                'Relatórios detalhados',
                'Meta Ads e Google Ads'
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <CheckCircle className="text-accent flex-shrink-0" size={16} />
                  <span className="text-gray-300 font-sans font-light">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media Management */}
          <div className="bg-zinc-900 rounded-xl p-8 hover:scale-[1.02] transition-transform border border-zinc-800">
            <Share2 className="text-accent mb-6" size={40} />
            <h2 className="text-2xl font-display font-bold uppercase mb-4 text-white">Gestão de Redes Sociais</h2>
            <p className="text-gray-400 mb-6 font-sans font-light">
              Construa uma presença digital forte e engajante com estratégias personalizadas de conteúdo.
            </p>
            <ul className="space-y-3">
              {[
                'Planejamento estratégico',
                'Criação de conteúdo',
                'Design de posts',
                'Gestão de comunidade',
                'Análise de métricas'
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <CheckCircle className="text-accent flex-shrink-0" size={16} />
                  <span className="text-gray-300 font-sans font-light">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-display font-bold uppercase text-center mb-12 text-white">Por que escolher nossos serviços?</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <Trophy className="text-accent mx-auto mb-4" size={32} />
              <h3 className="font-display font-bold uppercase mb-2 text-white">Experiência Comprovada</h3>
              <p className="text-gray-400 font-sans font-light">Anos de experiência em marketing digital e desenvolvimento profissional.</p>
            </div>
            <div className="text-center">
              <Zap className="text-accent mx-auto mb-4" size={32} />
              <h3 className="font-display font-bold uppercase mb-2 text-white">Resultados Rápidos</h3>
              <p className="text-gray-400 font-sans font-light">Estratégias otimizadas para alcançar seus objetivos no menor tempo possível.</p>
            </div>
            <div className="text-center">
              <Users className="text-accent mx-auto mb-4" size={32} />
              <h3 className="font-display font-bold uppercase mb-2 text-white">Atendimento Personalizado</h3>
              <p className="text-gray-400 font-sans font-light">Soluções sob medida para suas necessidades específicas.</p>
            </div>
            <div className="text-center">
              <BarChart className="text-accent mx-auto mb-4" size={32} />
              <h3 className="font-display font-bold uppercase mb-2 text-white">Métricas Claras</h3>
              <p className="text-gray-400 font-sans font-light">Acompanhamento detalhado do desempenho de suas campanhas.</p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-display font-bold uppercase text-center mb-8 text-white">Vamos Começar?</h2>
          <p className="text-gray-400 text-center mb-12 font-sans font-light">
            Entre em contato para uma consulta gratuita e descubra como podemos impulsionar sua presença digital.
          </p>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default ServicosDigitais;