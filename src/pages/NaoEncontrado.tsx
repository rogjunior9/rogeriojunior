import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

function NaoEncontrado() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-8xl sm:text-9xl font-extrabold mb-4 tracking-tighter text-white">
          4<span className="text-[#B91C1C]">0</span>4
        </h1>
        <p className="text-xl mb-6 text-gray-300 font-extrabold uppercase tracking-wider">
          Página não encontrada
        </p>
        <p className="text-gray-400 mb-8 max-w-md mx-auto text-sm font-medium">
          O endereço que você acessou não existe ou foi movido.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-[#B91C1C] hover:bg-[#991B1B] text-white font-extrabold py-3.5 px-7 rounded-md transition-colors text-xs uppercase tracking-wider"
        >
          <Home size={18} />
          Voltar para Início
        </Link>
      </div>
    </div>
  );
}

export default NaoEncontrado;
