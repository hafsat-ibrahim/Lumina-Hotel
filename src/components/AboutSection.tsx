import React from 'react';
import { Award, Star, Compass } from 'lucide-react';

interface AboutSectionProps {
  onDiscoverMore: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onDiscoverMore }) => {
  const highlights = [
    {
      icon: Award,
      value: '18+',
      label: 'Years of Hospitality',
    },
    {
      icon: Star,
      value: '120',
      label: 'Comfortable Rooms',
    },
    {
      icon: Compass,
      value: '99.4%',
      label: 'Guest Satisfaction',
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-[#FAF8F5] text-[#1E293B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Column 1: Image with architectural accent frame */}
          <div className="lg:col-span-6 relative order-2 lg:order-1">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Subtle gold border accent */}
              <div className="absolute -top-4 -left-4 w-full h-full border border-[#C5A880]/40 rounded-sm -z-0 hidden sm:block"></div>
              
              {/* High-quality realistic hotel interior/lobby image */}
              <div className="relative z-10 overflow-hidden rounded-sm shadow-xl aspect-[4/3] sm:aspect-[16/11]">
                <img
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=85"
                  alt="Lumina Hotel Luxury Lobby and Lounge Architecture"
                  className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Floating luxury badge */}
              <div className="absolute -bottom-6 -right-4 sm:right-6 z-20 bg-[#0B1325] text-white p-4 sm:p-5 rounded-sm border border-[#C5A880]/30 shadow-2xl max-w-[210px]">
                <div className="flex items-center gap-1.5 text-[#C5A880] mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#C5A880]" />
                  ))}
                </div>
                <p className="text-xs text-slate-200 font-medium">Top Hotel in Jos North, Plateau State</p>
              </div>
            </div>
          </div>

          {/* Column 2: Short professional description & key metrics */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="h-[1px] w-6 bg-[#C5A880]"></span>
                <span className="text-[#C5A880] text-xs uppercase tracking-[0.2em] font-semibold">
                  About Lumina Hotel
                </span>
              </div>

              <h2
                id="about-title"
                className="text-3xl sm:text-4xl lg:text-4xl font-serif text-[#0B1325] font-normal leading-tight mb-5"
              >
                Comfort, Peace &amp; True Nigerian Hospitality in Jos
              </h2>

              <p className="text-slate-600 text-base leading-relaxed mb-4">
                Located at Filling Sukwa, Jos North, Plateau State, Lumina Hotel offers guests a quiet, clean, and secure place to stay.
              </p>

              <p className="text-slate-600 text-base leading-relaxed mb-8">
                We provide 24-hour constant electricity, hot and cold water, tasty Nigerian and continental food, fast free Wi-Fi, and friendly customer care.
              </p>

              {/* 3 Supporting Information items */}
              <div className="grid grid-cols-3 gap-4 pt-4 pb-8 border-y border-slate-200 mb-8">
                {highlights.map((item, idx) => (
                  <div key={idx} className="text-center sm:text-left">
                    <span className="block font-serif text-2xl sm:text-3xl text-[#0B1325] font-semibold mb-1 text-[#0B1325]">
                      {item.value}
                    </span>
                    <span className="block text-xs text-slate-500 font-medium uppercase tracking-wider leading-snug">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Discover More Button */}
              <button
                id="about-discover-more-btn"
                type="button"
                onClick={onDiscoverMore}
                className="inline-flex items-center justify-center gap-2 bg-[#0B1325] hover:bg-[#16213B] text-white px-7 py-3.5 rounded-sm text-xs font-semibold uppercase tracking-[0.16em] transition-colors shadow-sm cursor-pointer"
              >
                <span>Discover More</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
