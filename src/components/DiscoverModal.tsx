import React from 'react';
import { X, Award, Shield, Sparkles, MapPin } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';

interface DiscoverModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBooking: () => void;
}

export const DiscoverModal: React.FC<DiscoverModalProps> = ({
  isOpen,
  onClose,
  onOpenBooking,
}) => {
  if (!isOpen) return null;

  return (
    <div
      id="discover-modal-overlay"
      className="fixed inset-0 z-50 bg-[#0B1325]/85 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="discover-modal-content"
        className="relative bg-white rounded-sm border border-slate-300 shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto text-[#1E293B] my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="relative bg-[#0B1325] text-white p-6 sm:p-8 border-b border-[#C5A880]/30">
          <button
            onClick={onClose}
            aria-label="Close story modal"
            className="absolute top-4 right-4 text-slate-400 hover:text-white p-2 rounded-sm transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <span className="text-[10px] tracking-[0.25em] text-[#C5A880] uppercase font-semibold block mb-1">
            Our Heritage &amp; Ethos
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl font-normal text-white">
            The Story of Lumina Hotel
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 font-light mt-1">
            Where authentic coastal warmth meets contemporary architectural elegance.
          </p>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="prose text-slate-600 text-sm sm:text-base leading-relaxed space-y-4">
            <p>
              Founded in 2008 on the tranquil shores of Marina Haven, Lumina Hotel was conceived as an antidote to impersonal mass hospitality. Our founders envisioned an intimate refuge where natural light, organic materials, and intuitive service harmonize to create a deeply restorative atmosphere.
            </p>
            <p>
              Every material throughout our 120 guest rooms and suites—from hand-honed travertine marble to sustainably harvested Mediterranean walnut—was chosen to evoke a sense of quiet permanence and mindful luxury.
            </p>
          </div>

          {/* Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-100">
            <div className="bg-[#FAF8F5] p-4 rounded-sm border border-slate-200">
              <Award className="w-5 h-5 text-[#C5A880] mb-2" />
              <h4 className="font-serif text-base text-[#0B1325] font-semibold mb-1">
                Culinary Heritage
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Farm-to-table coastal cuisine curated in collaboration with local organic growers and regional vintners.
              </p>
            </div>

            <div className="bg-[#FAF8F5] p-4 rounded-sm border border-slate-200">
              <Sparkles className="w-5 h-5 text-[#C5A880] mb-2" />
              <h4 className="font-serif text-base text-[#0B1325] font-semibold mb-1">
                Holistic Wellness
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Thermal infinity pools, personalized yoga sessions, and sound-insulated guest quarters.
              </p>
            </div>

            <div className="bg-[#FAF8F5] p-4 rounded-sm border border-slate-200">
              <Shield className="w-5 h-5 text-[#C5A880] mb-2" />
              <h4 className="font-serif text-base text-[#0B1325] font-semibold mb-1">
                Sustainable Care
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                100% single-use plastic free, solar-supplemented energy, and eco-certified organic amenities.
              </p>
            </div>
          </div>

          {/* Location highlight */}
          <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-sm border border-slate-200 text-xs text-slate-600">
            <MapPin className="w-4 h-4 text-[#C5A880] flex-shrink-0" />
            <span>Located at {HOTEL_INFO.address} · 25 minutes from the International Airport.</span>
          </div>

          {/* Bottom Action */}
          <div className="flex justify-end gap-3 pt-4 border-t border-slate-200">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 border border-slate-300 text-slate-700 text-xs font-semibold uppercase tracking-wider rounded-sm hover:bg-slate-50 transition-colors"
            >
              Close
            </button>
            <button
              type="button"
              onClick={() => {
                onClose();
                onOpenBooking();
              }}
              className="bg-[#0B1325] hover:bg-[#16213B] text-white px-6 py-2.5 rounded-sm text-xs font-semibold uppercase tracking-wider transition-colors"
            >
              Book Your Stay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
