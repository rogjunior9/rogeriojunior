import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="bg-black py-4 border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="relative h-[100px] overflow-hidden flex">
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
        <nav className="flex items-center gap-6 font-display uppercase tracking-wider">
          <Link
            to="/bio"
            className="text-gray-300 hover:text-accent transition-colors font-bold"
          >
            Bio
          </Link>
          <Link
            to="/servicos-aereos"
            className="text-gray-300 hover:text-accent transition-colors font-bold"
          >
            Serviços Aéreos
          </Link>
          <Link
            to="/servicos-digitais"
            className="text-gray-300 hover:text-accent transition-colors font-bold"
          >
            Serviços Digitais
          </Link>
          <Link
            to="/automacoes-ia"
            className="text-gray-300 hover:text-accent transition-colors font-bold hidden md:block"
          >
            Automações IA
          </Link>
        </nav>
        <a
          href="https://wa.me/5531983670777"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-accent hover:bg-yellow-600 text-black px-3 py-1.5 sm:px-4 sm:py-2 rounded-none uppercase font-bold font-display transition-colors tracking-wide text-xs sm:text-base"
          aria-label="Solicitar orçamento via WhatsApp"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WhatsApp"
            className="w-5 h-5 sm:w-6 sm:h-6"
            width="24"
            height="24"
          />
          <span className="hidden sm:inline">
            Solicite seu orçamento
          </span>
          <span className="inline sm:hidden">Orçamento</span>
        </a>
      </div>
    </header>
  );
};

export default Header;
