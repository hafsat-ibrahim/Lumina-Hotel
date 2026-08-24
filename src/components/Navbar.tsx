import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';

interface NavbarProps {
  onOpenBooking: (roomId?: string) => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Rooms', href: '#rooms' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        id="main-navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0B1325]/95 backdrop-blur-md shadow-md py-3 border-b border-[#C5A880]/20'
            : 'bg-gradient-to-b from-[#0B1325]/85 via-[#0B1325]/50 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <a
              id="nav-logo"
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#C5A880] rounded px-1"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-sm border border-[#C5A880] flex items-center justify-center bg-[#0B1325] text-[#C5A880] font-serif text-xl sm:text-2xl font-bold tracking-widest transition-transform duration-300 group-hover:scale-105 shadow-sm">
                L
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl sm:text-2xl tracking-[0.18em] text-white font-semibold uppercase leading-tight">
                  Lumina
                </span>
                <span className="text-[10px] tracking-[0.3em] text-[#C5A880] font-light uppercase">
                  Hotel &amp; Suites
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav id="desktop-nav" className="hidden lg:flex items-center space-x-7" aria-label="Main Navigation">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    id={`nav-link-${link.name.toLowerCase()}`}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`text-sm tracking-wider uppercase transition-colors duration-200 py-1 border-b-2 font-medium ${
                      isActive
                        ? 'text-[#C5A880] border-[#C5A880]'
                        : 'text-slate-200 hover:text-white border-transparent hover:border-[#C5A880]/50'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </nav>

            {/* Right Action: Book Now & Direct Phone */}
            <div className="hidden sm:flex items-center gap-4">
              <a
                id="nav-phone-link"
                href={`tel:${HOTEL_INFO.phone}`}
                className="hidden xl:flex items-center gap-2 text-xs tracking-wider text-slate-300 hover:text-[#C5A880] transition-colors"
                title="Call Hotel Reservations"
              >
                <Phone className="w-3.5 h-3.5 text-[#C5A880]" />
                <span>{HOTEL_INFO.phone}</span>
              </a>

              <button
                id="nav-book-now-button"
                onClick={() => onOpenBooking()}
                type="button"
                className="inline-flex items-center gap-2 bg-[#C5A880] hover:bg-[#B89758] text-[#0B1325] px-5 py-2.5 rounded-sm text-xs uppercase tracking-[0.15em] font-semibold transition-all duration-200 shadow-sm hover:shadow active:scale-[0.98] cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#C5A880]"
              >
                <Calendar className="w-3.5 h-3.5 text-[#0B1325]" />
                <span>Book Now</span>
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                id="nav-mobile-book-btn"
                onClick={() => onOpenBooking()}
                type="button"
                className="sm:hidden inline-flex items-center bg-[#C5A880] text-[#0B1325] px-3 py-1.5 rounded-sm text-[11px] uppercase tracking-wider font-semibold"
              >
                Book
              </button>

              <button
                id="mobile-menu-toggle"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                type="button"
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle navigation menu"
                className="p-2.5 rounded-sm text-slate-200 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-[#C5A880]"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-overlay"
          className="fixed inset-0 z-40 bg-[#0B1325]/80 backdrop-blur-sm lg:hidden transition-opacity"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            id="mobile-menu-content"
            className="fixed top-[65px] left-0 right-0 bg-[#0B1325] border-b border-[#C5A880]/30 shadow-2xl p-6 transition-transform"
            onClick={(e) => e.stopPropagation()}
          >
            <nav className="flex flex-col space-y-4" aria-label="Mobile Navigation">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  id={`mobile-nav-link-${link.name.toLowerCase()}`}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-base tracking-widest uppercase font-medium text-slate-100 hover:text-[#C5A880] py-2 border-b border-slate-800 flex items-center justify-between transition-colors"
                >
                  <span>{link.name}</span>
                  <span className="text-[#C5A880] text-xs">→</span>
                </a>
              ))}
            </nav>

            <div className="mt-6 pt-4 border-t border-slate-800 flex flex-col gap-3">
              <button
                id="mobile-menu-book-cta"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 bg-[#C5A880] hover:bg-[#B89758] text-[#0B1325] text-center font-semibold text-xs tracking-widest uppercase rounded-sm transition-colors"
              >
                Book Your Stay
              </button>
              <a
                id="mobile-menu-phone"
                href={`tel:${HOTEL_INFO.phone}`}
                className="flex items-center justify-center gap-2 text-xs text-slate-300 hover:text-white py-2"
              >
                <Phone className="w-3.5 h-3.5 text-[#C5A880]" />
                <span>{HOTEL_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
