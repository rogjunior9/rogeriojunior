import { useEffect, useState, Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { X, Loader2 } from 'lucide-react';
import Header from './components/Header';
import Footer from './components/Footer';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'));
const Bio = lazy(() => import('./pages/Bio'));
const ServicosDigitais = lazy(() => import('./pages/ServicosDigitais'));
const ServicosAereos = lazy(() => import('./pages/ServicosAereos'));
const AutomacoesIA = lazy(() => import('./pages/AutomacoesIA'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsAndConditions = lazy(() => import('./pages/TermsAndConditions'));
const NaoEncontrado = lazy(() => import('./pages/NaoEncontrado'));

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    gtag?: (...args: any[]) => void;
  }
}

function App() {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hasConsented = localStorage.getItem('cookieConsent');
      if (!hasConsented) {
        setShowConsent(true);
      }
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setShowConsent(false);

    // Ativar consentimento para Google Analytics/Ads
    if (window.gtag) {
      window.gtag('consent', 'update', {
        ad_storage: 'granted',
        analytics_storage: 'granted',
      });
    }
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'false');
    setShowConsent(false);

    // Manter cookies desativados
    if (window.gtag) {
      window.gtag('consent', 'update', {
        ad_storage: 'denied',
        analytics_storage: 'denied',
      });
    }
  };

  const LoadingFallback = () => (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <Loader2 className="w-8 h-8 text-blue-500 animate-spin" />
    </div>
  );

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Header />
      <main className="flex-grow">
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bio" element={<Bio />} />
            <Route path="/servicos-digitais" element={<ServicosDigitais />} />
            <Route path="/servicos-aereos" element={<ServicosAereos />} />
            <Route path="/automacoes-ia" element={<AutomacoesIA />} />
            <Route path="/politica-privacidade" element={<PrivacyPolicy />} />
            <Route path="/termos" element={<TermsAndConditions />} />
            <Route path="*" element={<NaoEncontrado />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />

      {showConsent && (
        <div className="fixed bottom-0 left-0 right-0 bg-zinc-900 border-t border-zinc-800 p-4 shadow-lg">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-300 text-center sm:text-left">
              Este site utiliza cookies para melhorar sua experiência.
              Ao continuar, você concorda com nossa{' '}
              <a href="/politica-privacidade" className="text-blue-400 hover:text-blue-300">
                Política de Privacidade
              </a>.
            </p>
            <div className="flex gap-4">
              <button
                onClick={handleAccept}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                Aceitar
              </button>
              <button
                onClick={handleDecline}
                className="bg-gray-700 hover:bg-gray-800 text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                Recusar
              </button>
              <button
                onClick={() => setShowConsent(false)}
                className="text-gray-400 hover:text-white"
              >
                <X size={24} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;