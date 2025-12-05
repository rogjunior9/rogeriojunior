import React, { useState, useEffect } from "react";
import {
  Linkedin,
  Mail,
  ChevronDown,
  Code2,
  Palette,
  Rocket,
  Camera,
  Instagram,
  Facebook,
  Youtube,
} from "lucide-react";

import ProjectCard from "../components/ProjectCard";
import SkillCard from "../components/SkillCard";
import ContactForm from "../components/ContactForm";

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
            Desenvolvedor Full Stack <span className="text-accent">•</span> Consultor Digital
          </p>
          <div className="flex gap-6 justify-center mb-12">
            <a
              href="https://instagram.com/rogjunior9"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              <Instagram size={24} />
            </a>
            <a
              href="https://facebook.com/orogjunior9"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              <Facebook size={24} />
            </a>
            <a
              href="https://linkedin.com/in/rogjunior9"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://www.youtube.com/channel/UCBiE7nRx7ZLVj_4hWBdpNqA"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              <Youtube size={24} />
            </a>
            <a
              href="mailto:contato@rogeriojunior.com.br"
              className="hover:text-accent transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
        <div className="absolute bottom-8 animate-bounce text-accent">
          <a href="#sobre-mim">
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
              <img
                src="/images/rj.jpg"
                alt="Perfil"
                className="rounded-lg shadow-2xl border-2 border-primary"
              />
            </div>
            <div className="space-y-4">
              <p className="text-gray-300 text-justify text-lg font-light leading-relaxed font-sans">
                Desenvolvedor No-code especialista em Bubble. Crio soluções web
                personalizadas e eficientes, agilizando o desenvolvimento e
                reduzindo custos. Experiência em WordPress e forte background em
                estratégia digital, garantindo resultados que impulsionam
                negócios.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <SkillCard
                  icon={<Code2 className="text-accent" />}
                  title="Desenvolvimento"
                  description="Full Stack"
                />
                <SkillCard
                  icon={<Palette className="text-accent" />}
                  title="Design"
                  description="UI/UX"
                />
                <SkillCard
                  icon={<Rocket className="text-accent" />}
                  title="Estratégia"
                  description="Crescimento"
                />
                <SkillCard
                  icon={<Camera className="text-accent" />}
                  title="Marketing"
                  description="Digital"
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
              id="carol-silva"
              title="Carol Silva Podologia"
              description="Site institucional moderno e responsivo para clínica de podologia, focado em conversão e agendamento."
              image="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800"
              tags={["Site Institucional", "Saúde", "Design"]}
              link="https://www.carolsilvapodologia.com.br"
              isHighlighted={highlightedCard === "carol-silva"}
            />
            <ProjectCard
              id="mg-solos"
              title="MG Solos"
              description="Site corporativo para empresa de engenharia de solos, transmitindo autoridade e confiança técnica."
              image="https://images.unsplash.com/photo-1581094794329-cdac82a6cc88?auto=format&fit=crop&q=80&w=800"
              tags={["Site Institucional", "Engenharia", "Corporativo"]}
              link="https://www.mgsolos.com.br"
              isHighlighted={highlightedCard === "mg-solos"}
            />
            <ProjectCard
              id="lista-mercado"
              title="Lista de Mercado"
              description="Um aplicativo pensado para que você pare de apanhar da esposa. Pare de esquecer do precisa ser comprado no mercado."
              image="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800"
              tags={["Bubble", "Full Stack", "Mercado"]}
              link="https://lista-de-mercado-40169.bubbleapps.io/version-test"
              isHighlighted={highlightedCard === "lista-mercado"}
            />
            <ProjectCard
              id="peladeiros"
              title="Peladeiros"
              description="Aplicativo gamificado para controle financeiro e sorteio de jogadores para peladas."
              image="https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&q=80&w=800"
              tags={["Bubble", "Esportes", "Futebol"]}
              link="https://peladeiros-41371.bubbleapps.io/version-test"
              isHighlighted={highlightedCard === "peladeiros"}
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
              id="motoristaapp"
              title="MotoristaApp"
              description="Um aplicativo moderno, pensado para motoristas de aplicativos controlarem seus ganhos"
              image="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=800"
              tags={["Bubble", "99", "Uber"]}
              link="https://motoristaapp-95911.bubbleapps.io/version-test"
              isHighlighted={highlightedCard === "motoristaapp"}
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
            Estou sempre aberto para discutir novos projetos e oportunidades.
          </p>
          <ContactForm />
        </div>
      </section>

      {/* Footer */}

    </div>
  );
}

export default Home;