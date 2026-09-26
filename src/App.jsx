import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ToastNotification from './components/ToastNotification';
import MagazineModal from './components/MagazineModal';
import MagazineReader from './components/MagazineReader';
import WelcomeIntro from './components/WelcomeIntro';

import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import Magazine from './pages/Magazine';
import GetInvolved from './pages/GetInvolved';

import { MAGAZINE_EDITIONS } from './data/magazineData';

export default function App() {
  const [currentPath, setCurrentPath] = useState('home');
  const [toast, setToast] = useState(null);
  const [activeModalEdition, setActiveModalEdition] = useState(null);
  const [activeReaderEditionIndex, setActiveReaderEditionIndex] = useState(null);
  const [showIntro, setShowIntro] = useState(true);

  // Sync with browser hash router
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#/', '').replace('#', '');
      if (['home', 'about', 'programs', 'magazine', 'get-involved'].includes(hash)) {
        setCurrentPath(hash);
      } else {
        setCurrentPath('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (path) => {
    setCurrentPath(path);
    window.location.hash = `#/${path}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const showToast = (title, message) => {
    setToast({ title, message });
  };

  const openMagazineModal = (index = 0) => {
    setActiveModalEdition(MAGAZINE_EDITIONS[index] || MAGAZINE_EDITIONS[0]);
  };

  const closeMagazineModal = () => {
    setActiveModalEdition(null);
  };

  const openMagazineReader = (index = 0) => {
    setActiveReaderEditionIndex(index);
  };

  const closeMagazineReader = () => {
    setActiveReaderEditionIndex(null);
  };

  const handleReplayIntro = () => {
    setShowIntro(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-purple-50/40 text-onyx-900 selection:bg-gold-400/30 selection:text-purple-950">
      
      {/* Welcome Opening Animation (IRMEJA Style) */}
      {showIntro && (
        <WelcomeIntro onComplete={() => setShowIntro(false)} />
      )}

      {/* Top Navbar */}
      <Navbar 
        currentPath={currentPath} 
        navigateTo={navigateTo} 
        openMagazineModal={openMagazineModal}
        openMagazineReader={openMagazineReader}
      />

      {/* Main Page View Renderer */}
      <main className="flex-grow">
        {currentPath === 'home' && (
          <Home 
            navigateTo={navigateTo} 
            openMagazineModal={openMagazineModal}
            openMagazineReader={openMagazineReader}
            showToast={showToast} 
          />
        )}
        {currentPath === 'about' && (
          <About 
            navigateTo={navigateTo} 
          />
        )}
        {currentPath === 'programs' && (
          <Programs 
            navigateTo={navigateTo} 
            showToast={showToast} 
          />
        )}
        {currentPath === 'magazine' && (
          <Magazine 
            openMagazineModal={openMagazineModal}
            openMagazineReader={openMagazineReader}
            showToast={showToast} 
          />
        )}
        {currentPath === 'get-involved' && (
          <GetInvolved 
            showToast={showToast} 
          />
        )}
      </main>

      {/* Footer */}
      <Footer 
        navigateTo={navigateTo} 
        showToast={showToast} 
        openMagazineModal={openMagazineModal}
        openMagazineReader={openMagazineReader}
      />

      {/* Interactive PDF & Download Modal */}
      {activeModalEdition && (
        <MagazineModal 
          edition={activeModalEdition} 
          onClose={closeMagazineModal} 
          showToast={showToast}
          onOpenReader={(ed) => {
            const idx = MAGAZINE_EDITIONS.findIndex(e => e.id === ed.id);
            openMagazineReader(idx >= 0 ? idx : 0);
          }}
        />
      )}

      {/* Online Interactive Magazine Reader */}
      {activeReaderEditionIndex !== null && (
        <MagazineReader
          initialEditionIndex={activeReaderEditionIndex}
          onClose={closeMagazineReader}
          showToast={showToast}
        />
      )}

      {/* Toast Notification */}
      <ToastNotification 
        toast={toast} 
        onClose={() => setToast(null)} 
      />
    </div>
  );
}

