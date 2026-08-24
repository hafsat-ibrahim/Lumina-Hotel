import React from 'react';
import { Check, Eye, Calendar, Sparkles } from 'lucide-react';
import { ROOMS } from '../data/hotelData';
import { Room } from '../types';

interface RoomsSectionProps {
  onSelectRoomToBook: (roomId: string) => void;
  onViewRoomDetails: (room: Room) => void;
}

export const RoomsSection: React.FC<RoomsSectionProps> = ({
  onSelectRoomToBook,
  onViewRoomDetails,
}) => {
  return (
    <section id="rooms" className="py-20 lg:py-28 bg-[#F5F2EB] text-[#1E293B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 lg:mb-18">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-[1px] w-6 bg-[#C5A880]"></span>
            <span className="text-[#C5A880] text-xs uppercase tracking-[0.2em] font-semibold">
              Accommodations
            </span>
            <span className="h-[1px] w-6 bg-[#C5A880]"></span>
          </div>
          <h2
            id="rooms-title"
            className="text-3xl sm:text-4xl lg:text-4xl font-serif text-[#0B1325] font-normal tracking-tight mb-4"
          >
            Clean &amp; Comfortable Rooms
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            All rooms come with 24-hour light, hot water shower, air conditioning, free fast Wi-Fi, and clean comfortable beds.
          </p>
        </div>

        {/* 4 Room Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-10">
          {ROOMS.map((room) => (
            <div
              key={room.id}
              id={`room-card-${room.id}`}
              className="bg-white rounded-sm border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col overflow-hidden group"
            >
              {/* Room Image Container */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                <img
                  src={room.imageUrl}
                  alt={`${room.name} interior at Lumina Hotel`}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />

                {/* Price tag pill in Nigerian Naira */}
                <div className="absolute top-4 right-4 bg-[#0B1325]/90 backdrop-blur-xs text-white px-3.5 py-1.5 rounded-sm border border-[#C5A880]/30 shadow-md">
                  <span className="text-[11px] text-slate-300 font-light">From </span>
                  <span className="text-base font-serif font-bold text-[#C5A880]">₦{room.price.toLocaleString()}</span>
                  <span className="text-xs text-slate-300 font-light"> / night</span>
                </div>

                {/* Optional popular choice tag */}
                {room.featured && (
                  <div className="absolute top-4 left-4 bg-[#C5A880] text-[#0B1325] px-2.5 py-1 rounded-sm text-[10px] font-bold tracking-widest uppercase flex items-center gap-1 shadow">
                    <Sparkles className="w-3 h-3" />
                    <span>Most Popular</span>
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex flex-col flex-grow justify-between">
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-serif text-2xl text-[#0B1325] font-normal tracking-tight">
                      {room.name}
                    </h3>
                    <span className="text-xs text-slate-400 font-medium whitespace-nowrap pt-1">
                      {room.size}
                    </span>
                  </div>

                  <p className="text-slate-600 text-sm leading-relaxed mb-5 line-clamp-2">
                    {room.shortDescription}
                  </p>

                  {/* 2 to 4 Amenities */}
                  <div className="grid grid-cols-2 gap-2 mb-6 pt-4 border-t border-slate-100">
                    {room.amenities.map((amenity, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                        <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                        <span className="truncate">{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                  <button
                    id={`room-book-btn-${room.id}`}
                    type="button"
                    onClick={() => onSelectRoomToBook(room.id)}
                    className="flex-1 bg-[#0B1325] hover:bg-[#16213B] text-white py-3 px-4 rounded-sm text-xs font-semibold uppercase tracking-[0.14em] transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Calendar className="w-3.5 h-3.5 text-[#C5A880]" />
                    <span>Book Now</span>
                  </button>

                  <button
                    id={`room-details-btn-${room.id}`}
                    type="button"
                    onClick={() => onViewRoomDetails(room)}
                    className="bg-transparent hover:bg-slate-100 text-slate-700 hover:text-[#0B1325] py-3 px-4 rounded-sm text-xs font-medium uppercase tracking-[0.12em] border border-slate-300 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                    title="View full room details and gallery"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Details</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
