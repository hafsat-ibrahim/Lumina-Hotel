import React from 'react';
import { Wifi, Utensils, Waves, Bell, Presentation, Dumbbell } from 'lucide-react';
import { SERVICES } from '../data/hotelData';

export const ServicesSection: React.FC = () => {
  const getServiceIcon = (iconName: string) => {
    const props = { className: 'w-6 h-6 text-[#C5A880]' };
    switch (iconName) {
      case 'wifi':
        return <Wifi {...props} />;
      case 'utensils':
        return <Utensils {...props} />;
      case 'waves':
        return <Waves {...props} />;
      case 'bell':
        return <Bell {...props} />;
      case 'presentation':
        return <Presentation {...props} />;
      case 'dumbbell':
        return <Dumbbell {...props} />;
      default:
        return <Wifi {...props} />;
    }
  };

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#FAF8F5] text-[#1E293B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 lg:mb-18">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-[1px] w-6 bg-[#C5A880]"></span>
            <span className="text-[#C5A880] text-xs uppercase tracking-[0.2em] font-semibold">
              Hotel Amenities
            </span>
            <span className="h-[1px] w-6 bg-[#C5A880]"></span>
          </div>
          <h2
            id="services-title"
            className="text-3xl sm:text-4xl lg:text-4xl font-serif text-[#0B1325] font-normal tracking-tight mb-4"
          >
            Thoughtful Services &amp; Facilities
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Every convenience thoughtfully arranged to ensure a seamless, relaxing stay from arrival to departure.
          </p>
        </div>

        {/* 6 Services Grid (1 col mobile, 2 col tablet, 3 col desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              id={`service-item-${service.id}`}
              className="bg-white p-7 rounded-sm border border-slate-200/80 shadow-xs hover:border-[#C5A880]/50 hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-sm bg-[#0B1325] flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300">
                  {getServiceIcon(service.iconName)}
                </div>

                <div className="flex items-center justify-between gap-2 mb-2">
                  <h3 className="font-serif text-xl sm:text-2xl text-[#0B1325] font-normal">
                    {service.title}
                  </h3>
                  {service.highlight && (
                    <span className="text-[10px] uppercase font-semibold text-[#C5A880] tracking-wider bg-[#FAF8F5] px-2 py-0.5 rounded border border-slate-200">
                      {service.highlight}
                    </span>
                  )}
                </div>

                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
              </div>

              {service.hours && (
                <div className="pt-3 border-t border-slate-100 text-xs text-slate-400 font-light flex items-center justify-between">
                  <span>Schedule</span>
                  <span className="text-slate-600 font-medium">{service.hours}</span>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
