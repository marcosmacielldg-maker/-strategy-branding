import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
import Navbar from './components/Navbar';
// import Home from './components/Home';
// import ProjectDetail from './components/ProjectDetail';
import Footer from './components/Footer';
import BottomNav from './components/BottomNav';
import { sendServerEvent } from './lib/pixel';

// Lazy Load Routes
const Home = React.lazy(() => import('./components/Home'));
const ProjectDetail = React.lazy(() => import('./components/ProjectDetail'));
const ServiceDetail = React.lazy(() => import('./components/ServiceDetail'));
const DiagnosisWizard = React.lazy(() => import('./components/Diagnosis/DiagnosisWizard'));
import { Loader2 } from 'lucide-react';

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-brand-black">
    <Loader2 className="w-8 h-8 text-brand-green animate-spin" />
  </div>
);

import { LanguageProvider } from './lib/i18n';
// import ServiceDetail from './components/ServiceDetail';

const App: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    sendServerEvent('PageView');
  }, [location]);

  return (
    <LanguageProvider>
      <React.Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={
            <>
              <Navbar />
              <Home />
            </>
          } />

          <Route path="/project/:id" element={<ProjectDetail />} />
          <Route path="/diagnostico" element={<DiagnosisWizard />} />
        </Routes>
      </React.Suspense>

      <Footer />

      {/* Floating WhatsApp Button */}
      <a
        href="https://api.whatsapp.com/send?phone=5511948635387&text=Ol%C3%A1%2C%20vim%20pelo%20site!"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-24 right-6 z-50 flex items-center justify-center group lg:bottom-6"
        aria-label="Fale conosco no WhatsApp"
      >
        {/* Pulsing Effect Layer */}
        <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-30 animate-ping duration-[2000ms]" />

        {/* Button Layer */}
        <div className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-xl shadow-[#25D366]/40 transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1">
          <MessageCircle className="w-7 h-7 text-white fill-white" strokeWidth={1.5} />
        </div>
      </a>

      {/* Mobile Bottom Navigation */}
      <BottomNav />
    </LanguageProvider>
  );
};

export default App;