import { PageId } from '../types';
import { Mail, Compass, Shield, BookOpen, MessageSquare } from 'lucide-react';

interface FooterProps {
  setActivePage: (page: PageId) => void;
}

export default function Footer({ setActivePage }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleNavigate = (page: PageId) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="app-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand/Identity */}
          <div className="footer-brand pr-4 flex flex-col items-start max-[480px]:items-center max-[480px]:text-center">
            <button onClick={() => handleNavigate('home')} className="flex items-center max-[480px]:justify-center gap-3 mb-4 text-left max-[480px]:text-center">
              <img
                src="https://lh3.googleusercontent.com/d/1QjF1MGPQQZc7rp4olum50i8PPQS74XBz"
                alt="Sent to Save Logo"
                className="h-12 w-auto object-contain block max-[480px]:mx-auto"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  if (target.src !== "https://drive.google.com/uc?export=view&id=1QjF1MGPQQZc7rp4olum50i8PPQS74XBz") {
                    target.src = "https://drive.google.com/uc?export=view&id=1QjF1MGPQQZc7rp4olum50i8PPQS74XBz";
                  }
                }}
              />
            </button>
            <p className="p-body text-xs text-[#ffffff]/50 leading-relaxed max-w-xs mt-1 max-[480px]:mx-auto">
              Jesus was sent to save us from our sins. Saved and redeemed, we are now sent to share Him with the world.
            </p>
          </div>

          {/* Column 1: Explore */}
          <div className="footer-col">
            <h4 className="font-label text-xs tracking-[3px] text-[#c8a84b] uppercase font-bold mb-4">The Foundation</h4>
            <ul className="space-y-2.5">
              <li>
                <button onClick={() => handleNavigate('mission')} className="hover:text-[#c8a84b] text-sm text-[#ffffff]/70 transition-colors">
                  Our Mission
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigate('jesus')} className="hover:text-[#c8a84b] text-sm text-[#ffffff]/70 transition-colors">
                  Who is Jesus?
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigate('salvation')} className="hover:text-[#c8a84b] text-sm text-[#ffffff]/70 transition-colors">
                  Salvation Plan
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigate('grow')} className="hover:text-[#c8a84b] text-sm text-[#ffffff]/70 transition-colors">
                  How to Grow
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: Resources */}
          <div className="footer-col">
            <h4 className="font-label text-xs tracking-[3px] text-[#c8a84b] uppercase font-bold mb-4">Resources</h4>
            <ul className="space-y-2.5">
              <li>
                <button onClick={() => handleNavigate('book')} className="hover:text-[#c8a84b] text-sm text-[#ffffff]/70 transition-colors">
                  "Sent to Save" Book
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigate('blog')} className="hover:text-[#c8a84b] text-sm text-[#ffffff]/70 transition-colors">
                  Articles & Theology
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigate('contact')} className="hover:text-[#c8a84b] text-sm text-[#ffffff]/70 transition-colors">
                  Prayer Request
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigate('contact')} className="hover:text-[#c8a84b] text-sm text-[#ffffff]/70 transition-colors">
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: The Gospel Call */}
          <div className="footer-col">
            <h4 className="font-label text-xs tracking-[3px] text-[#c8a84b] uppercase font-bold mb-4 font-serif">Daily Truth</h4>
            <div className="border border-[#c8a84b]/15 bg-[#111108] p-4 rounded text-xs leading-relaxed text-[#ffffff]/80 font-serif italic max-w-xs">
              "Go into all the world and proclaim the gospel to the whole creation."
              <span className="block mt-2 font-label text-[10px] tracking-[1.5px] uppercase text-[#c8a84b] not-italic font-bold">
                — Mark 16:15
              </span>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom border-t border-[#c8a84b]/10 pt-6 flex flex-col sm:flex-row justify-between items-center text-xs text-[#ffffff]/40">
          <p>© {currentYear} Sent to Save. All rights reserved. Made in faithful service to Jesus Christ.</p>
          <div className="social-links mt-4 sm:mt-0 flex gap-3">
            <a href="mailto:info@senttosave.org" className="social-link" title="Email Us" referrerPolicy="no-referrer">
              <Mail className="w-4 h-4" />
            </a>
            <button onClick={() => handleNavigate('contact')} className="social-link" title="Prayer Request">
              <MessageSquare className="w-4 h-4" />
            </button>
            <button onClick={() => handleNavigate('jesus')} className="social-link" title="Our Faith">
              <Compass className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
