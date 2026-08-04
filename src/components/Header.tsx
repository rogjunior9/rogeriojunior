import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="bg-black py-4 border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-between items-center gap-y-3">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="relative h-[72px] sm:h-[84px] lg:h-[100px] overflow-hidden flex">
            <picture>
              <source
                type="image/webp"
                srcSet="/images/logo-rj-sm.webp 400w, /images/logo-rj-md.webp 800w, /images/logo-rj.webp 1200w"
                sizes="(max-width: 640px) 200px, 300px"
              />
              <img
                src="/images/logo-rj.png"
                alt="Logo Rogério Júnior"
                className="h-full w-auto object-contain"
                width="300"
                height="100"
              />
            </picture>
          </div>
        </Link>
        <nav className="order-3 flex w-full items-center justify-center gap-4 border-t border-zinc-800 pt-3 text-xs font-display uppercase tracking-wider lg:order-none lg:w-auto lg:gap-6 lg:border-0 lg:pt-0 lg:text-base" aria-label="Navegação principal">
          <Link
            to="/marketing-digital"
            className="text-gray-300 hover:text-accent transition-colors font-bold"
          >
            Marketing Digital
          </Link>
          <Link
            to="/automacoes-ia"
            className="text-gray-300 hover:text-accent transition-colors font-bold"
          >
            Automações IA
          </Link>
          <Link
            to="/agendamento"
            className="text-gray-300 hover:text-accent transition-colors font-bold"
          >
            Agendamento
          </Link>
        </nav>
        <a
          href="https://wa.me/5531983670777"
          target="_blank"
          rel="noopener noreferrer"
          data-lead-location="cabecalho_orcamento"
          className="group flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-black px-4 py-2.5 sm:px-5 sm:py-3 rounded-full uppercase font-bold font-display transition-all duration-200 tracking-wide text-xs sm:text-sm shadow-[0_0_0_1px_rgba(255,255,255,0.14),0_8px_24px_rgba(37,211,102,0.22)] hover:-translate-y-0.5 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.22),0_10px_30px_rgba(37,211,102,0.34)]"
          aria-label="Fale com o Rogério pelo WhatsApp"
        >
          <img
            src="/whatsapp.svg"
            alt=""
            className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:scale-110"
            width="24"
            height="24"
          />
          <span className="hidden sm:inline">Fale com o Rogério</span>
          <span className="inline sm:hidden">Fale com Rogério</span>
        </a>
      </div>
    </header>
  );
};

export default Header;
