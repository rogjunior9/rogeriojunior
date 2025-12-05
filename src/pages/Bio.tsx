import { Link } from 'react-router-dom';
import { ArrowLeft, Coffee, Book, Laptop, Rocket, Heart } from 'lucide-react';

function Bio() {
  return (
    <div className="bg-black min-h-screen text-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <Link to="/" className="inline-flex items-center text-gray-300 hover:text-accent transition-colors mb-12 font-display uppercase tracking-wider font-bold">
          <ArrowLeft className="mr-2" size={20} />
          Voltar para Home
        </Link>

        <h1 className="text-5xl font-display font-bold uppercase mb-8 text-white">Minha Jornada</h1>

        <div className="prose prose-invert max-w-none">
          <div className="mb-16">
            <img
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&auto=format&fit=crop&q=60"
              alt="Workspace"
              className="w-full h-[400px] object-cover rounded-xl mb-8 border-2 border-zinc-800"
            />

            <div className="space-y-12">
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <Coffee className="text-accent" size={24} />
                  <h2 className="text-3xl font-display font-bold uppercase text-white m-0">O Início</h2>
                </div>
                <p className="text-gray-300 leading-relaxed font-sans text-lg font-light">
                  Minha jornada no mundo da programação começou com uma simples curiosidade sobre como os sites funcionam. O que começou como um hobby rapidamente se transformou em uma paixão que moldaria minha carreira.
                </p>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-4">
                  <Book className="text-accent" size={24} />
                  <h2 className="text-3xl font-display font-bold uppercase text-white m-0">Aprendizado & Crescimento</h2>
                </div>
                <p className="text-gray-300 leading-relaxed font-sans text-lg font-light">
                  Através de incontáveis horas de estudo, prática e projetos do mundo real, desenvolvi um profundo entendimento de tecnologias front-end e back-end. Acredito no aprendizado contínuo e em me manter atualizado com as últimas tendências do mercado.
                </p>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-4">
                  <Laptop className="text-accent" size={24} />
                  <h2 className="text-3xl font-display font-bold uppercase text-white m-0">Experiência Profissional</h2>
                </div>
                <p className="text-gray-300 leading-relaxed font-sans text-lg font-light">
                  Ao longo dos anos, tive o privilégio de trabalhar em diversos projetos em várias indústrias. De plataformas de e-commerce a soluções empresariais complexas, cada projeto adicionou experiência valiosa ao meu conjunto de habilidades.
                </p>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-4">
                  <Rocket className="text-accent" size={24} />
                  <h2 className="text-3xl font-display font-bold uppercase text-white m-0">Foco Atual</h2>
                </div>
                <p className="text-gray-300 leading-relaxed font-sans text-lg font-light">
                  Atualmente, estou focado em criar aplicações web escaláveis usando tecnologias modernas como React, Node.js e TypeScript. Tenho particular interesse em otimização de performance e criação de experiências excepcionais para o usuário.
                </p>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-4">
                  <Heart className="text-accent" size={24} />
                  <h2 className="text-3xl font-display font-bold uppercase text-white m-0">Além do Código</h2>
                </div>
                <p className="text-gray-300 leading-relaxed font-sans text-lg font-light">
                  Quando não estou codando, você me encontrará explorando novas tecnologias, contribuindo para projetos open-source ou compartilhando conhecimento através de mentoria e envolvimento com a comunidade. Acredito em retribuir à comunidade tech que tanto me deu.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bio;