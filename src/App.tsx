import { BrowserRouter, Routes, Route, Navigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MyStory from './components/MyStory';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Footer from './components/Footer';
import CVViewer from './components/CVViewer';

function PortfolioLayout() {
  const { lang } = useParams();
  const { i18n } = useTranslation();

  useEffect(() => {
    if (lang && ['en', 'hu', 'de', 'jp', 'kr'].includes(lang)) {
      i18n.changeLanguage(lang);
    }
  }, [lang, i18n]);

  return (
    <div className="min-h-screen relative selection:bg-indigo-500/30">
      <Navbar />
      
      {/* Spacer for fixed navbar */}
      <div className="h-20"></div>
      
      <main className="w-full">
        <Hero />
        <MyStory />
        <Resume />
        <Projects />
      </main>
      
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter basename="/portfolio">
      <Routes>
        <Route path="/:lang/cv" element={<CVViewer />} />
        <Route path="/:lang" element={<PortfolioLayout />} />
        <Route path="/" element={<Navigate to="/en" replace />} />
        <Route path="*" element={<Navigate to="/en" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
