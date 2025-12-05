import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

function NaoEncontrado() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-9xl font-display font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500">
          404
        </h1>
        <p className="text-2xl mb-8 text-gray-400 font-display uppercase tracking-widest">Ops! Página não encontrada</p>
        <p className="text-gray-500 mb-8 max-w-md mx-auto font-sans font-light">
          A página que você está procurando não existe ou foi movida para outro endereço.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-accent hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-none transition-colors font-display uppercase tracking-wider"
        >
          <Home size={20} />
          Voltar para Home
        </Link>
      </div>
    </div>
  );
}

export default NaoEncontrado;