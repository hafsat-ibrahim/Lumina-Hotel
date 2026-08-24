import React from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook, Linkedin, Twitter, ArrowUp } from 'lucide-react';
import { HOTEL_INFO, SERVICES } from '../data/hotelData';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Lumina', href: '#about' },
    { name: 'Rooms & Suites', href: '#rooms' },
    { name: 'Services & Facilities', href: '#services' },
    { name: 'Visual Gallery', href: '#gallery' },
    { name: 'Guest Reviews', href: '#reviews' },
    { name: 'Contact & Location', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="main-footer" className="bg-[#0B1325] text-slate-300 pt-16 pb-12 border-t border-[#C5A880]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Footer Grid on Desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          
          {/* Column 1: Lumina Hotel Brand & Description (4 cols) */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-sm border border-[#C5A880] flex items-center justify-center bg-[#0B1325] text-[#C5A880] font-serif text-xl font-bold tracking-widest">
                L
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl tracking-[0.18em] text-white font-semibold uppercase leading-tight">
                  Lumina
                </span>
                <span className="text-[9px] tracking-[0.3em] text-[#C5A880] font-light uppercase">
                  Hotel &amp; Suites
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed mb-6 font-light max-w-sm">
              A peaceful luxury hotel located in Filling Sukwa, Jos North, Plateau State, Nigeria. We offer clean rooms, 24/7 electricity, tasty Nigerian food, and warm hospitality.
            </p>

            {/* Social Media Icons */}
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Lumina Hotel Instagram"
                className="w-9 h-9 rounded-sm bg-[#16213B] text-slate-300 hover:text-[#C5A880] hover:bg-[#1C2C4E] flex items-center justify-center transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Lumina Hotel Facebook"
                className="w-9 h-9 rounded-sm bg-[#16213B] text-slate-300 hover:text-[#C5A880] hover:bg-[#1C2C4E] flex items-center justify-center transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Lumina Hotel LinkedIn"
                className="w-9 h-9 rounded-sm bg-[#16213B] text-slate-300 hover:text-[#C5A880] hover:bg-[#1C2C4E] flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Lumina Hotel Twitter"
                className="w-9 h-9 rounded-sm bg-[#16213B] text-slate-300 hover:text-[#C5A880] hover:bg-[#1C2C4E] flex items-center justify-center transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-semibold text-white uppercase tracking-[0.2em] mb-4 border-l-2 border-[#C5A880] pl-2.5">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="hover:text-[#C5A880] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-[0.2em] mb-4 border-l-2 border-[#C5A880] pl-2.5">
              Hotel Amenities
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              {SERVICES.map((s) => (
                <li key={s.id} className="flex items-center gap-1.5">
                  <span className="text-[#C5A880]">•</span>
                  <span>{s.title}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Address (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-[0.2em] mb-4 border-l-2 border-[#C5A880] pl-2.5">
              Location &amp; Inquiries
            </h4>
            <div className="space-y-3 text-xs text-slate-400 font-light">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C5A880] flex-shrink-0 mt-0.5" />
                <p className="leading-relaxed text-slate-300">
                  {HOTEL_INFO.address}
                </p>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C5A880] flex-shrink-0" />
                <a href={`tel:${HOTEL_INFO.phone}`} className="text-slate-300 hover:text-white font-medium">
                  {HOTEL_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C5A880] flex-shrink-0" />
                <a href={`mailto:${HOTEL_INFO.email}`} className="text-slate-300 hover:text-white break-all">
                  {HOTEL_INFO.email}
                </a>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={onOpenBooking}
                  className="w-full bg-[#C5A880] hover:bg-[#B89758] text-[#0B1325] py-2.5 px-4 rounded-sm text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Book a Room Online
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-light">
          <p>© {new Date().getFullYear()} {HOTEL_INFO.name}, Jos North, Plateau State, Nigeria. All rights reserved.</p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-slate-400 hover:text-[#C5A880] transition-colors cursor-pointer text-xs"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
