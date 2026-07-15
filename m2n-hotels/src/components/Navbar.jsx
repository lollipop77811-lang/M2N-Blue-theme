import { useState, useEffect } from 'react';

export default function Navbar() {
  const [visible, setVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="h-20"></div>
      <div
        className={`fixed top-0 left-0 right-0 bg-glass backdrop-blur-md border-b border-accent transition-all duration-600 ease-smooth ${
          visible ? 'translate-y-0' : '-translate-y-full'
        }`}
        style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
      >
        <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">
          <a
            className="font-heading text-lg font-bold tracking-[8px] text-primary uppercase"
            href="/"
          >
            M2N
          </a>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-12">
            <a
              className="font-heading text-xs font-semibold tracking-[4px] uppercase transition-colors duration-300 text-primary"
              href="/"
            >
              HOME
            </a>
            <a
              className="font-heading text-xs font-semibold tracking-[4px] uppercase transition-colors duration-300 text-muted hover:text-primary"
              href="/rooms"
            >
              ROOMS & SUITES
            </a>
            <a
              className="font-heading text-xs font-semibold tracking-[4px] uppercase transition-colors duration-300 text-muted hover:text-primary"
              href="/dining"
            >
              DINING
            </a>
            <a
              className="font-heading text-xs font-semibold tracking-[4px] uppercase transition-colors duration-300 text-muted hover:text-primary"
              href="/lawns"
            >
              LAWNS & BANQUET
            </a>
            <a
              className="font-heading text-xs font-semibold tracking-[4px] uppercase transition-colors duration-300 text-muted hover:text-primary"
              href="/contact"
            >
              CONTACT
            </a>
          </div>

          <button className="hidden md:block bg-primary text-background px-6 py-3 font-heading text-xs font-semibold tracking-[4px] uppercase hover:bg-surface transition-colors duration-300">
            BOOK NOW
          </button>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span
              className={`w-6 h-0.5 bg-primary transition-transform duration-300 ${
                menuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-primary transition-opacity duration-300 ${
                menuOpen ? 'opacity-0' : ''
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-primary transition-transform duration-300 ${
                menuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            ></span>
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden bg-background border-t border-accent transition-all duration-300 overflow-hidden ${
            menuOpen ? 'max-h-96' : 'max-h-0'
          }`}
        >
          <div className="px-8 py-6 flex flex-col gap-4">
            <a className="font-heading text-xs font-semibold tracking-[4px] uppercase text-primary" href="/">
              HOME
            </a>
            <a className="font-heading text-xs font-semibold tracking-[4px] uppercase text-muted hover:text-primary transition-colors" href="/rooms">
              ROOMS & SUITES
            </a>
            <a className="font-heading text-xs font-semibold tracking-[4px] uppercase text-muted hover:text-primary transition-colors" href="/dining">
              DINING
            </a>
            <a className="font-heading text-xs font-semibold tracking-[4px] uppercase text-muted hover:text-primary transition-colors" href="/lawns">
              LAWNS & BANQUET
            </a>
            <a className="font-heading text-xs font-semibold tracking-[4px] uppercase text-muted hover:text-primary transition-colors" href="/contact">
              CONTACT
            </a>
            <button className="bg-primary text-background px-6 py-3 font-heading text-xs font-semibold tracking-[4px] uppercase hover:bg-surface transition-colors duration-300 w-fit">
              BOOK NOW
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
