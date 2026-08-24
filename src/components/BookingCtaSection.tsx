import React from 'react';
import { Calendar, Phone, ShieldCheck } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';

interface BookingCtaSectionProps {
  onReserveClick: () => void;
}

export const BookingCtaSection: React.FC<BookingCtaSectionProps> = ({ onReserveClick }) => {
  return (
    <section id="booking-cta" className="relative py-20 lg:py-24 bg-[#0B1325] text-white overflow-hidden">
      {/* Background with tasteful subtle texture / luxury image overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1600&q=80"
          alt="Lumina Luxury Suite Balcony Horizon"
          className="w-full h-full object-cover object-center opacity-15"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1325] via-[#0B1325]/95 to-[#0B1325]/90" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Subtle top accent */}
        <div className="inline-flex items-center gap-2 mb-4">
          <span className="h-[1px] w-6 bg-[#C5A880]"></span>
          <span className="text-[#C5A880] text-xs uppercase tracking-[0.25em] font-semibold">
            Reservations
          </span>
          <span className="h-[1px] w-6 bg-[#C5A880]"></span>
        </div>

        {/* Mandatory Headline */}
        <h2
          id="booking-cta-title"
          className="text-3xl sm:text-4xl md:text-5xl font-serif text-white font-normal tracking-tight leading-tight mb-4"
        >
          Your perfect stay starts here.
        </h2>

        {/* Mandatory Supporting Text */}
        <p
          id="booking-cta-text"
          className="text-base sm:text-lg text-slate-300 font-light max-w-xl mx-auto leading-relaxed mb-8"
        >
          Experience comfort, thoughtful service, and a stay designed around you.
        </p>

        {/* Action Button & Trust indicators */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <button
            id="cta-reserve-btn"
            type="button"
            onClick={onReserveClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#C5A880] hover:bg-[#B89758] text-[#0B1325] px-9 py-4 rounded-sm text-xs font-semibold uppercase tracking-[0.16em] transition-all shadow-lg hover:shadow-xl active:scale-[0.98] cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-[#0B1325]" />
            <span>Reserve Your Room</span>
          </button>

          <a
            id="cta-call-btn"
            href={`tel:${HOTEL_INFO.phone}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/10 text-white border border-slate-600 hover:border-slate-400 px-7 py-4 rounded-sm text-xs font-medium uppercase tracking-[0.14em] transition-colors cursor-pointer"
          >
            <Phone className="w-3.5 h-3.5 text-[#C5A880]" />
            <span>Call {HOTEL_INFO.phone}</span>
          </a>
        </div>

        {/* Guarantees */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-light">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-[#C5A880]" />
            Best Rate Guaranteed
          </span>
          <span className="text-slate-600">·</span>
          <span>Free Cancellation up to 48 Hours Before Arrival</span>
          <span className="text-slate-600">·</span>
          <span>No Hidden Booking Fees</span>
        </div>
      </div>
    </section>
  );
};
