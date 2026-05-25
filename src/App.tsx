import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PageId } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Mission from './components/Mission';
import Jesus from './components/Jesus';
import Salvation from './components/Salvation';
import Grow from './components/Grow';
import Book from './components/Book';
import Blog from './components/Blog';
import Contact from './components/Contact';

export default function App() {
  const [activePage, setActivePage] = useState<PageId>('home');

  const renderActivePage = () => {
    switch (activePage) {
      case 'home':
        return <Home setActivePage={setActivePage} />;
      case 'mission':
        return <Mission setActivePage={setActivePage} />;
      case 'jesus':
        return <Jesus setActivePage={setActivePage} />;
      case 'salvation':
        return <Salvation />;
      case 'grow':
        return <Grow />;
      case 'book':
        return <Book />;
      case 'blog':
        return <Blog />;
      case 'contact':
        return <Contact />;
      default:
        return <Home setActivePage={setActivePage} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#0a0a06] text-white">
      {/* Dynamic Header */}
      <Header activePage={activePage} setActivePage={setActivePage} />

      {/* Main Container with Page Route Animations */}
      <main className="flex-grow pt-[74px] w-full max-w-full overflow-hidden flex flex-col">
        <AnimatePresence mode="wait">
          <motion.div
            key={activePage}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="w-full flex-grow flex flex-col"
          >
            {renderActivePage()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <Footer setActivePage={setActivePage} />
    </div>
  );
}
