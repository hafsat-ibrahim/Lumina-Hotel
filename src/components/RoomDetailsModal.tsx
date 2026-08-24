import React from 'react';
import { X, Bed, Users, Maximize, Compass, Check, Sparkles, Phone } from 'lucide-react';
import { Room } from '../types';
import { HOTEL_INFO } from '../data/hotelData';

interface RoomDetailsModalProps {
  room: Room | null;
  onClose: () => void;
  onBookRoom: (roomId: string) => void;
}

export const RoomDetailsModal: React.FC<RoomDetailsModalProps> = ({
  room,
  onClose,
  onBookRoom,
}) => {
  const [activeImageIdx, setActiveImageIdx] = React.useState(0);

  if (!room) return null;

  const images = room.galleryImages && room.galleryImages.length > 0
    ? room.galleryImages
    : [room.imageUrl];

  return (
    <div
      id="room-details-modal-overlay"
      className="fixed inset-0 z-50 bg-[#0B1325]/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="room-details-modal-content"
        className="relative bg-white rounded-sm border border-slate-300 shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto text-[#1E293B] my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          id="modal-close-btn"
          onClick={onClose}
          aria-label="Close details"
          className="absolute top-4 right-4 z-20 bg-[#0B1325]/80 hover:bg-[#0B1325] text-white p-2 rounded-full transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Gallery Hero Section */}
        <div className="relative aspect-[16/10] bg-slate-900 overflow-hidden">
          <img
            src={images[activeImageIdx]}
            alt={`${room.name} photo`}
            className="w-full h-full object-cover transition-opacity duration-300"
            referrerPolicy="no-referrer"
          />

          {/* Thumbnails row */}
          {images.length > 1 && (
            <div className="absolute bottom-3 left-3 flex gap-2 z-10">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIdx(idx)}
                  className={`w-12 h-8 rounded-xs overflow-hidden border-2 transition-all ${
                    activeImageIdx === idx ? 'border-[#C5A880] scale-105' : 'border-white/60 opacity-75'
                  }`}
                >
                  <img src={img} alt="thumb" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </button>
              ))}
            </div>
          )}

          {/* Image index counter */}
          <div className="absolute bottom-3 right-3 bg-[#0B1325]/80 text-slate-200 text-xs px-2.5 py-1 rounded-sm">
            {activeImageIdx + 1} / {images.length}
          </div>
        </div>

        {/* Room Header & Details Body */}
        <div className="p-6 sm:p-8">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-6 mb-6">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-[#C5A880] font-semibold block mb-1">
                Lumina Hotel Room
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#0B1325] font-normal">
                {room.name}
              </h3>
              <p className="text-slate-500 text-xs sm:text-sm mt-0.5">{room.tagline}</p>
            </div>

            <div className="text-left sm:text-right">
              <div className="text-xs text-slate-500 font-light">Price Per Night</div>
              <div className="font-serif text-2xl sm:text-3xl text-[#0B1325] font-bold">
                ₦{room.price.toLocaleString()} <span className="text-xs font-sans text-slate-400 font-normal">NGN</span>
              </div>
            </div>
          </div>

          {/* Quick Spec Pills */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
            <div className="bg-[#FAF8F5] border border-slate-200 p-3 rounded-sm text-center">
              <Maximize className="w-4 h-4 text-[#C5A880] mx-auto mb-1" />
              <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Room Size</span>
              <span className="text-xs font-semibold text-[#0B1325]">{room.size}</span>
            </div>
            <div className="bg-[#FAF8F5] border border-slate-200 p-3 rounded-sm text-center">
              <Users className="w-4 h-4 text-[#C5A880] mx-auto mb-1" />
              <span className="text-[10px] text-slate-400 uppercase tracking-wider block">People</span>
              <span className="text-xs font-semibold text-[#0B1325]">{room.occupancy}</span>
            </div>
            <div className="bg-[#FAF8F5] border border-slate-200 p-3 rounded-sm text-center">
              <Bed className="w-4 h-4 text-[#C5A880] mx-auto mb-1" />
              <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Bed Type</span>
              <span className="text-xs font-semibold text-[#0B1325]">{room.bedType}</span>
            </div>
            <div className="bg-[#FAF8F5] border border-slate-200 p-3 rounded-sm text-center">
              <Compass className="w-4 h-4 text-[#C5A880] mx-auto mb-1" />
              <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Window View</span>
              <span className="text-xs font-semibold text-[#0B1325]">{room.view}</span>
            </div>
          </div>

          {/* Full Narrative Description */}
          <div className="mb-6">
            <h4 className="font-serif text-lg text-[#0B1325] font-semibold mb-2">
              Room Description
            </h4>
            <p className="text-slate-600 text-sm leading-relaxed">
              {room.fullDescription}
            </p>
          </div>

          {/* Key Features & Amenities Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-[#FAF8F5] p-5 rounded-sm border border-slate-200 mb-8">
            <div>
              <h5 className="text-xs uppercase tracking-wider font-semibold text-[#0B1325] mb-3 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
                <span>Room Amenities</span>
              </h5>
              <ul className="space-y-2">
                {room.amenities.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs text-slate-700">
                    <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h5 className="text-xs uppercase tracking-wider font-semibold text-[#0B1325] mb-3 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
                <span>Special Features</span>
              </h5>
              <ul className="space-y-2">
                {room.keyFeatures.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs text-slate-700">
                    <Check className="w-3.5 h-3.5 text-[#C5A880] flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Booking Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-200">
            <a
              href={`tel:${HOTEL_INFO.phone}`}
              className="inline-flex items-center gap-2 text-xs text-slate-600 hover:text-[#C5A880] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>Call front desk: {HOTEL_INFO.phone}</span>
            </a>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                type="button"
                onClick={onClose}
                className="w-1/2 sm:w-auto border border-slate-300 hover:bg-slate-100 text-slate-700 px-5 py-3 rounded-sm text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
              >
                Close
              </button>
              <button
                id="modal-book-this-room-btn"
                type="button"
                onClick={() => {
                  onClose();
                  onBookRoom(room.id);
                }}
                className="w-1/2 sm:w-auto bg-[#0B1325] hover:bg-[#16213B] text-white px-7 py-3 rounded-sm text-xs font-semibold uppercase tracking-wider transition-colors shadow cursor-pointer"
              >
                Book This Room
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
