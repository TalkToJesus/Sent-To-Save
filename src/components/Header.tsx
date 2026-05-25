import { useState, useEffect } from 'react';
import { Menu, X, Flame } from 'lucide-react';
import { PageId } from '../types';

interface HeaderProps {
  activePage: PageId;
  setActivePage: (page: PageId) => void;
}

export default function Header({ activePage, setActivePage }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'mission', label: 'Mission' },
    { id: 'jesus', label: 'Jesus' },
    { id: 'salvation', label: 'Salvation' },
    { id: 'grow', label: 'Grow' },
    { id: 'book', label: 'The Book' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavigate = (page: PageId) => {
    setActivePage(page);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <nav id="app-nav" className={`nav ${scrolled ? 'bg-[#0a0a06]/95 shadow-lg shadow-[#000]/40' : ''}`}>
        <div className="nav-inner">
          <button onClick={() => handleNavigate('home')} className="nav-logo focus:outline-none flex items-center" id="logo-button">
            <img
              src="https://lh3.googleusercontent.com/d/1QjF1MGPQQZc7rp4olum50i8PPQS74XBz"
              alt="Sent to Save"
              className="h-10 sm:h-12 w-auto object-contain block transition-transform duration-200 hover:scale-[1.02]"
              referrerPolicy="no-referrer"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                if (target.src !== "https://drive.google.com/uc?export=view&id=1QjF1MGPQQZc7rp4olum50i8PPQS74XBz") {
                  target.src = "https://drive.google.com/uc?export=view&id=1QjF1MGPQQZc7rp4olum50i8PPQS74XBz";
                }
              }}
            />
          </button>

          <ul className="nav-links">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  id={`nav-link-${item.id}`}
                  onClick={() => handleNavigate(item.id)}
                  className={`nav-link uppercase tracking-[1.5px] font-ui ${activePage === item.id ? 'active font-bold text-[#c8a84b]' : ''}`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          <button id="nav-cta-action" onClick={() => handleNavigate('salvation')} className="nav-cta font-bold hover:bg-[#c8a84b] hover:text-[#0a0a06]">
            START HERE
          </button>

          <button
            id="mobile-nav-toggle"
            onClick={() => setIsOpen(!isOpen)}
            className="nav-toggle"
            aria-label="Toggle navigation menu"
          >
            <Menu />
          </button>
        </div>
      </nav>

      {/* Slide-out Mobile Drawer */}
      <div id="nav-overlay-bg" className={`nav-overlay ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(false)} />
      <div id="mobile-nav-drawer" className={`nav-drawer ${isOpen ? 'open' : ''}`}>
        <button id="mobile-nav-drawer-close" onClick={() => setIsOpen(false)} className="nav-drawer-close">
          <X className="w-6 h-6 text-[#c8a84b]" />
        </button>
        
        <div className="flex flex-col h-full gap-4 items-center text-center">
          <div className="flex justify-center items-center w-full mb-6 border-b border-[#c8a84b]/10 pb-5">
            <img
              src="https://lh3.googleusercontent.com/d/1QjF1MGPQQZc7rp4olum50i8PPQS74XBz"
              alt="Sent to Save"
              className="h-10 w-auto object-contain block mx-auto"
              referrerPolicy="no-referrer"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                if (target.src !== "https://drive.google.com/uc?export=view&id=1QjF1MGPQQZc7rp4olum50i8PPQS74XBz") {
                  target.src = "https://drive.google.com/uc?export=view&id=1QjF1MGPQQZc7rp4olum50i8PPQS74XBz";
                }
              }}
            />
          </div>

          <ul className="w-full">
            {menuItems.map((item) => (
              <li key={item.id} className="text-center">
                <button
                  id={`drawer-link-${item.id}`}
                  onClick={() => handleNavigate(item.id)}
                  className={`nav-link text-center w-full block py-4 ${activePage === item.id ? 'active font-bold text-[#c8a84b]' : ''}`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          <button
            id="drawer-cta-action"
            onClick={() => handleNavigate('salvation')}
            className="nav-cta mt-6 w-full text-center font-bold bg-[#c8a84b] text-[#0a0a06] hover:bg-[#ffe082] transition-colors"
          >
            START HERE
          </button>
        </div>
      </div>
    </>
  );
}
