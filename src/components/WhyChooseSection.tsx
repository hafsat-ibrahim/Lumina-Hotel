import React from 'react';
import { BedDouble, HeartHandshake, Sparkles, ShieldCheck } from 'lucide-react';
import { WHY_CHOOSE_REASONS } from '../data/hotelData';

export const WhyChooseSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    const props = { className: 'w-6 h-6 text-[#0B1325]' };
    switch (iconName) {
      case 'bed-double':
        return <BedDouble {...props} />;
      case 'heart-handshake':
        return <HeartHandshake {...props} />;
      case 'sparkles':
        return <Sparkles {...props} />;
      case 'shield-check':
        return <ShieldCheck {...props} />;
      default:
        return <Sparkles {...props} />;
    }
  };

  return (
    <section id="why-choose" className="py-20 lg:py-28 bg-[#0B1325] text-white relative overflow-hidden">
      {/* Subtle architectural background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A880]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#16213B]/40 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 lg:mb-18">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-[1px] w-6 bg-[#C5A880]"></span>
            <span className="text-[#C5A880] text-xs uppercase tracking-[0.2em] font-semibold">
              The Lumina Difference
            </span>
            <span className="h-[1px] w-6 bg-[#C5A880]"></span>
          </div>
          <h2
            id="why-choose-title"
            className="text-3xl sm:text-4xl lg:text-4xl font-serif text-white font-normal tracking-tight mb-4"
          >
            Why Choose Lumina
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Crafted for tranquility and genuine hospitality, every element is designed to ensure a memorable stay.
          </p>
        </div>

        {/* 4 Pillars Grid (1 col mobile, 2 col tablet, 4 col desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {WHY_CHOOSE_REASONS.map((item, index) => (
            <div
              key={item.id}
              id={`why-choose-card-${item.id}`}
              className="bg-[#121B30] p-7 rounded-sm border border-[#C5A880]/20 hover:border-[#C5A880]/50 transition-all duration-300 flex flex-col justify-start"
            >
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-sm bg-[#C5A880] flex items-center justify-center shadow">
                  {getIcon(item.iconName)}
                </div>
                <span className="text-xs font-serif text-[#C5A880]/60 font-semibold">
                  0{index + 1}
                </span>
              </div>

              <h3 className="font-serif text-xl text-white font-normal mb-3">
                {item.title}
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed font-light">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
