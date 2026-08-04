import React, { useState, useEffect } from "react";
import { Linkedin, Mail, ChevronDown, Code2, Target, Workflow, Globe2, Instagram, Facebook, Youtube, X } from "lucide-react";

import ProjectCard from "../components/ProjectCard";
import SkillCard from "../components/SkillCard";
import ContactForm from "../components/ContactForm";
import SEO from "../components/SEO";

function Home() {
  const [gradientPosition, setGradientPosition] = useState({ x: 50, y: 50 });
  const [highlightedCard, setHighlightedCard] = useState<string | null>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setGradientPosition({ x, y });
  };

  useEffect(() => {
    const hash = window.location.hash.replace("#", ""); // Remove o "#" do hash
    if (hash) {
      setHighlightedCard(hash);

      // Remove o destaque após um tempo (opcional)
      setTimeout(() => setHighlightedCard(null), 3000); // Destaque dura 3 segundos
    }
  }, []);

  return (
    <div className="bg-black text-white min-h-screen">
      <SEO
        title="Expert em Marketing Digital & Desenvolvedor Full Stack em BH"
        description="Expert em marketing digital e desenvolvedor full stack em Belo Horizonte. Estratégia, tráfego pago, sites, landing pages, aplicativos e automações com n8n e IA."
        canonical="/"
        keywords="expert em marketing digital, desenvolvedor full stack, tráfego pago, criação de sites, n8n, automação, BH, Belo Horizonte"
      />
      {/* Hero Section */}
      <section
        className="h-[calc(100vh-4rem)] relative flex flex-col justify-center items-center px-4"
        onMouseMove={handleMouseMove}
      >
        <div className="max-w-10xl mx-auto text-center m-10 p-10">
          <h1
            className="font-display md:text-9xl text-6xl font-bold uppercase leading-none m-3 p-3 text-transparent bg-clip-text tracking-tighter transition-all duration-300"
            style={{
              backgroundImage: `radial-gradient(circle 200px at ${gradientPosition.x}% ${gradientPosition.y}%, #C5A059 , #010E80)`,
              WebkitBackgroundClip: "text",
            }}
          >
            Rogério Júnior
          </h1>
          <p className="text-xl md:text-2xl font-light tracking-wide text-gray-400 mb-8 font-sans">
            Desenvolvedor Full Stack <span className="text-accent">•</span> Expert em Marketing Digital
          </p>
          <div className="flex gap-6 justify-center mb-12">
            <a
              href="https://instagram.com/rogjunior9"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
              aria-label="Seguir no Instagram"
            >
              <Instagram size={24} />
            </a>
            <a
              href="https://facebook.com/orogjunior9"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
              aria-label="Seguir no Facebook"
            >
              <Facebook size={24} />
            </a>
            <a
              href="https://linkedin.com/in/rogjunior9"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
              aria-label="Conectar no LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://www.youtube.com/channel/UCBiE7nRx7ZLVj_4hWBdpNqA"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
              aria-label="Inscrever-se no YouTube"
            >
              <Youtube size={24} />
            </a>
            <a
              href="https://x.com/Rogjunior9"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
              aria-label="Seguir no X (Twitter)"
            >
              <X size={24} />
            </a>
            <a
              href="mailto:contato@rogeriojunior.com.br"
              className="hover:text-accent transition-colors"
              aria-label="Enviar e-mail"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
        <div className="absolute bottom-8 animate-bounce text-accent">
          <a href="#sobre-mim" aria-label="Rolar para seção Sobre Mim">
            <ChevronDown size={50} />
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre-mim" className="py-20 px-4 bg-zinc-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-display font-bold tracking-tight mb-8 text-white uppercase">
            Sobre Mim
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <picture>
                <source
                  type="image/webp"
                  srcSet="/images/rogerio-sobre-terno-2026-sm.webp 400w, /images/rogerio-sobre-terno-2026-md.webp 800w, /images/rogerio-sobre-terno-2026.webp 1100w"
                  sizes="(max-width: 640px) 100vw, 400px"
                />
                <img
                  src="/images/rogerio-sobre-terno-2026.jpg"
                  alt="Rogério Júnior - Expert em Marketing Digital e Desenvolvedor Full Stack"
                  className="w-full aspect-[4/5] object-cover object-top rounded-lg shadow-2xl border-2 border-primary"
                  width="400"
                  height="500"
                  loading="lazy"
                />
              </picture>
            </div>
            <div className="space-y-4">
              <p className="text-gray-300 text-justify text-lg font-light leading-relaxed font-sans">
                Uno marketing, tecnologia e automação para transformar presença
                digital em oportunidades reais de negócio. Planejo campanhas de
                tráfego, desenvolvo sites, landing pages e aplicativos, e conecto
                ferramentas com n8n, IA, APIs e CRMs para captar, qualificar e
                acompanhar leads com mais eficiência.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <SkillCard
                  icon={<Target className="text-accent" />}
                  title="Marketing"
                  description="Estratégia e Tráfego"
                />
                <SkillCard
                  icon={<Globe2 className="text-accent" />}
                  title="Sites"
                  description="WordPress e Landing Pages"
                />
                <SkillCard
                  icon={<Workflow className="text-accent" />}
                  title="Automação"
                  description="n8n e IA"
                />
                <SkillCard
                  icon={<Code2 className="text-accent" />}
                  title="Desenvolvimento"
                  description="Full Stack e No-code"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projetos" className="py-20 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-display font-bold tracking-tight mb-12 text-white uppercase">
            Projetos em Destaque
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <ProjectCard
              id="mg-solos"
              title="MG Solos"
              description="Site corporativo para empresa de engenharia de solos, transmitindo autoridade e confiança técnica."
              image="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800"
              tags={["Site Institucional", "Engenharia", "Corporativo"]}
              link="https://www.mgsolos.com.br"
              isHighlighted={highlightedCard === "mg-solos"}
            />
            <ProjectCard
              id="beth-tabuas"
              title="Beth Tábuas e Presentes"
              description="Landing page para cestas, tábuas e presentes personalizados, com apresentação clara dos produtos e contato direto para pedidos."
              image="/images/projects/beth-tabuas-hero.webp"
              tags={["Landing Page", "Presentes", "Conversão"]}
              link="https://rogeriojunior.com.br/beth/"
              isHighlighted={highlightedCard === "beth-tabuas"}
            />
            <ProjectCard
              id="donna-isa"
              title="Donna Isa"
              description="Site comercial para cestas de presente personalizadas em Santo André, com catálogo por ocasião e pedidos direcionados ao WhatsApp."
              image="/images/projects/donna-isa-hero.webp"
              tags={["Site Comercial", "Cestas", "WhatsApp"]}
              link="https://donnaisa.com.br/"
              isHighlighted={highlightedCard === "donna-isa"}
            />
            <ProjectCard
              id="andreia-rodrigues"
              title="Andreia Rodrigues Presentes"
              description="Site para cestas de café da manhã e presentes personalizados, com posicionamento elegante e foco em pedidos na Zona Sul do Rio de Janeiro."
              image="/images/projects/andreia-rodrigues-hero.webp"
              tags={["Landing Page", "Presentes", "Conversão"]}
              link="https://andreiarodriguescestas.com.br/"
              isHighlighted={highlightedCard === "andreia-rodrigues"}
            />
            <ProjectCard
              id="claudia-cestas"
              title="Cláudia Cestas Criativas"
              description="Site de vendas para cestas de café da manhã, tábuas de frios e presentes personalizados em Salvador, integrado ao atendimento pelo WhatsApp."
              image="/images/projects/claudia-cestas-hero.webp"
              tags={["Site Comercial", "Gastronomia", "WhatsApp"]}
              link="https://claudiacestascriativas.com.br/"
              isHighlighted={highlightedCard === "claudia-cestas"}
            />
            <ProjectCard
              id="cestas-kimara"
              title="Cestas Kimara"
              description="Landing page para cestas e presentes em Franca, com catálogo, diferenciais, depoimentos, FAQ e chamadas diretas para pedidos."
              image="/images/projects/cestas-kimara-hero.webp"
              tags={["Landing Page", "Cestas", "Conversão"]}
              link="https://www.cestaskimara.com.br/"
              isHighlighted={highlightedCard === "cestas-kimara"}
            />
            <ProjectCard
              id="ingles-com-renato"
              title="Inglês com Renato"
              description="Portal educacional automatizado que puxa os vídeos diretamente do canal do Renato no YouTube, mantendo o site atualizado com novos conteúdos de inglês."
              image="/images/projects/ingles-com-renato-hero.webp"
              tags={["WordPress", "YouTube", "Automação"]}
              link="https://inglescomrenato.com.br/"
              isHighlighted={highlightedCard === "ingles-com-renato"}
            />
            <ProjectCard
              id="merits"
              title="Merits - Avaliação de desempenho"
              description="Plataforma moderna para avaliação de desempenho de funcionários. Sistema multiempresarial."
              image="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=800"
              tags={["Bubble", "Full Stack", "RH"]}
              link="https://merits-11682.bubbleapps.io/version-test"
              isHighlighted={highlightedCard === "merits"}
            />
            <ProjectCard
              id="gerador-qrcode"
              title="Gerador de QR Code"
              description="Ferramenta gratuita para criar QR Codes personalizados. Escolha cores, tamanho e baixe em PNG ou SVG."
              image="/images/projects/gerador-qrcode-phone.webp"
              tags={["Ferramenta", "Gratuito", "QR Code"]}
              link="/gerador-qrcode"
              isHighlighted={highlightedCard === "gerador-qrcode"}
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 px-4 bg-zinc-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-display font-bold tracking-tight mb-8 text-white uppercase">
            Vamos Trabalhar Juntos
          </h2>
          <p className="text-xl text-gray-400 font-light mb-12 font-sans">
            Conte o que você quer vender, organizar ou automatizar. Eu ajudo a transformar a ideia em uma solução digital prática e orientada a resultados.
          </p>
          <ContactForm />
        </div>
      </section>

      {/* Footer */}

    </div>
  );
}

export default Home;
