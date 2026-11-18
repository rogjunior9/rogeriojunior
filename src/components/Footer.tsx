import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      id="rodape"
      className="py-12 px-4 bg-black text-gray-400 border-t border-zinc-800"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3 text-center md:text-left">
          <img
            src="/images/avatar-dark.png"
            alt="RJ"
            className="w-10 h-10 rounded-full border border-zinc-800"
            width="40"
            height="40"
          />
          <div>
            <div className="font-extrabold text-lg tracking-[-0.03em] text-white">
              rogério<span className="text-[#B91C1C]">júnior.</span>
            </div>
            <p className="text-xs text-gray-500">
              CNPJ 57.419.052/0001-14 · Ibirité / Belo Horizonte — MG
            </p>
          </div>
        </div>

        <nav
          aria-label="Links do rodapé"
          className="flex flex-wrap items-center justify-center gap-5 text-xs font-bold uppercase tracking-wider"
        >
          <Link to="/projetos" className="text-gray-300 hover:text-[#B91C1C] transition-colors">
            Apps &amp; Projetos
          </Link>
          <Link to="/gerador-qrcode" className="text-gray-300 hover:text-[#B91C1C] transition-colors">
            Gerador QR Code
          </Link>
          <Link to="/termos" className="text-gray-400 hover:text-white transition-colors">
            Termos
          </Link>
          <Link
            to="/politica-privacidade"
            className="text-gray-400 hover:text-white transition-colors"
          >
            Privacidade
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
