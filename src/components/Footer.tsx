import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer id="rodape" className="py-8 px-4 text-center text-gray-400 bg-black border-t border-zinc-800">
            <div className="max-w-7xl mx-auto flex flex-col items-center gap-4">
                <div className="flex flex-col items-center gap-1 text-sm text-gray-500 font-sans">
                    <p>Rogério Júnior - CNPJ 57.419.052/0001-14</p>
                    <p>Rua Terena, 77, Distrito Industrial de Ibirité, Ibirité/MG</p>
                </div>

                <div className="flex items-center gap-4 text-sm font-display uppercase tracking-wide">
                    <Link to="/termos" className="text-accent hover:text-white hover:underline transition-colors">
                        Termos e Condições
                    </Link>
                    <span className="text-gray-600">|</span>
                    <Link to="/politica-privacidade" className="text-accent hover:text-white hover:underline transition-colors">
                        Política de Privacidade
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
