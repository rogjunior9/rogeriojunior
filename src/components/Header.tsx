import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const navItems = [
  { to: "/", label: "Início" },
  { to: "/marketing-digital", label: "Tráfego & Estrutura" },
  { to: "/automacoes-ia", label: "Automações & IA" },
  { to: "/projetos", label: "Apps & Projetos" },
  { to: "/agendamento", label: "Agendamento" },
];

const Header: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <header className="sticky top-0 z-40 bg-black/95 backdrop-blur border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-wrap justify-between items-center gap-y-3 gap-x-4">
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src="/images/avatar-dark.png"
            alt="Monograma RJ"
            className="h-11 w-11 rounded-full border border-zinc-800 object-cover transition-transform group-hover:scale-105"
            width="44"
            height="44"
          />
          <span className="font-extrabold text-xl sm:text-2xl tracking-[-0.03em] text-white">
            rogério<span className="text-[#B91C1C]">júnior.</span>
          </span>
        </Link>

        <nav
          className="order-3 flex w-full flex-wrap items-center justify-center gap-x-5 gap-y-2 border-t border-zinc-800 pt-3 text-xs font-bold uppercase tracking-wider lg:order-none lg:w-auto lg:border-0 lg:pt-0 lg:text-[13px]"
          aria-label="Navegação principal"
        >
          {navItems.map((item) => {
            const isActive = pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`transition-colors ${
                  isActive ? "text-[#B91C1C]" : "text-gray-300 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <a
          href="https://wa.me/5531983670777"
          target="_blank"
          rel="noopener noreferrer"
          data-lead-location="cabecalho_orcamento"
          className="inline-flex items-center gap-2 bg-[#B91C1C] hover:bg-[#991B1B] text-white px-4 py-2.5 sm:px-5 sm:py-3 rounded-md font-bold transition-colors text-xs sm:text-sm tracking-tight"
          aria-label="Falar com Rogério no WhatsApp"
        >
          <span>Falar com Rogério</span>
          <ArrowUpRight size={16} aria-hidden="true" />
        </a>
      </div>
    </header>
  );
};

export default Header;
