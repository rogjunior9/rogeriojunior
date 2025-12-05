import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="bg-black py-4 border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="relative h-[100px] overflow-hidden flex">
            <img
              src="/images/logo-rj.png"
              alt="logo Rogério Júnior"
              className="h-full w-auto object-contain"
            />
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
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WhatsApp Business"
            className="w-5 h-5 sm:w-6 sm:h-6"
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
