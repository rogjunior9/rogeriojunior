import React, { useState } from 'react';
import { X, Mail, Lock, LogIn, UserPlus, Chrome, Phone, User } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: (userData: { id: string; name: string; email: string }) => void;
  onGuestSubmit: (data: {name: string; email: string; phone: string}) => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, onLogin, onGuestSubmit }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [isGuest, setIsGuest] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    if (isGuest) {
      onGuestSubmit({ name, email, phone });
      return;
    }

    try {
      // Simulate authentication - Replace with actual authentication later
      const userData = {
        id: Math.random().toString(36).substring(7),
        name: name || email.split('@')[0],
        email
      };
      onLogin(userData);
    } catch (error: any) {
      setError('Email ou senha inválidos');
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setError('');
    setIsLoading(true);

    try {
      // Simulate Google authentication - Replace with actual Google auth later
      const userData = {
        id: Math.random().toString(36).substring(7),
        name: 'Google User',
        email: 'google.user@example.com'
      };
      onLogin(userData);
    } catch (error: any) {
      setError('Erro ao fazer login com o Google. Tente novamente.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="bg-zinc-900 p-8 rounded-xl w-full max-w-md relative animate-fade-in">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-white"
        >
          <X size={24} />
        </button>

        <h2 className="text-2xl font-bold mb-6 text-center">
          {isGuest ? 'Comprar como Visitante' : isLogin ? 'Entrar' : 'Criar Conta'}
        </h2>

        {!isGuest && (
          <>
            <button
              onClick={handleGoogleLogin}
              disabled={isLoading}
              className="w-full bg-white text-black font-medium py-3 px-4 rounded-lg mb-6 flex items-center justify-center gap-2 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Chrome size={20} />
              Continuar com Google
            </button>

            <div className="relative mb-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-700"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-zinc-900 text-gray-400">ou</span>
              </div>
            </div>
          </>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {(isGuest || !isLogin) && (
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                Nome
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full bg-zinc-800 border border-zinc-700 rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Seu nome completo"
                />
              </div>
            </div>
          )}

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
              Email
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-zinc-800 border border-zinc-700 rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="seu@email.com"
              />
            </div>
          </div>

          {isGuest && (
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
                Telefone
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="tel"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  className="w-full bg-zinc-800 border border-zinc-700 rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="(00) 00000-0000"
                />
              </div>
            </div>
          )}

          {!isGuest && (
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">
                Senha
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full bg-zinc-800 border border-zinc-700 rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="••••••••"
                  minLength={6}
                />
              </div>
            </div>
          )}

          {error && (
            <div className="bg-red-500/10 text-red-400 p-3 rounded-lg text-sm">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 disabled:cursor-not-allowed text-white font-medium py-3 px-4 rounded-lg flex items-center justify-center gap-2"
          >
            {isLoading ? (
              'Processando...'
            ) : (
              <>
                {isGuest ? (
                  'Continuar como Visitante'
                ) : (
                  <>
                    {isLogin ? <LogIn size={20} /> : <UserPlus size={20} />}
                    {isLogin ? 'Entrar' : 'Criar Conta'}
                  </>
                )}
              </>
            )}
          </button>
        </form>

        <div className="mt-4 text-center text-gray-400">
          {isGuest ? (
            <button
              onClick={() => setIsGuest(false)}
              className="text-blue-400 hover:text-blue-300"
            >
              Fazer login ou criar conta
            </button>
          ) : (
            <>
              <p>
                {isLogin ? 'Ainda não tem uma conta?' : 'Já tem uma conta?'}{' '}
                <button
                  onClick={() => {
                    setIsLogin(!isLogin);
                    setError('');
                  }}
                  className="text-blue-400 hover:text-blue-300"
                >
                  {isLogin ? 'Criar conta' : 'Entrar'}
                </button>
              </p>
              <button
                onClick={() => {
                  setIsGuest(true);
                  setError('');
                }}
                className="text-blue-400 hover:text-blue-300 mt-2"
              >
                Continuar como visitante
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthModal;