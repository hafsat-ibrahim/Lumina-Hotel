import React, { useState } from 'react';
import { Calendar, Users, ChevronRight, BedDouble } from 'lucide-react';
import { ROOMS } from '../data/hotelData';

interface HeroProps {
  onOpenBooking: (roomId?: string, prefill?: { checkIn: string; checkOut: string; guests: number }) => void;
  onExploreRooms: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onExploreRooms }) => {
  // Quick booking bar state
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 2);

  const formatDate = (date: Date) => date.toISOString().split('T')[0];

  const [checkIn, setCheckIn] = useState(formatDate(today));
  const [checkOut, setCheckOut] = useState(formatDate(tomorrow));
  const [guests, setGuests] = useState(2);
  const [selectedRoomId, setSelectedRoomId] = useState(ROOMS[0].id);

  const handleQuickBookSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenBooking(selectedRoomId, {
      checkIn,
      checkOut,
      guests,
    });
  };

  return (
    <section id="home" className="relative min-h-[90vh] lg:min-h-screen flex flex-col justify-between pt-24 pb-12 overflow-hidden">
      {/* Background realistic luxury hotel photo with subtle gradient overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=2000&q=85"
          alt="Lumina Hotel Luxury Exterior and Coastal Ocean View"
          className="w-full h-full object-cover object-center transform scale-100 transition-transform duration-1000"
          referrerPolicy="no-referrer"
        />
        {/* Soft, balanced luxury overlays (deep navy tint for readability without washing out the photo) */}
        <div className="absolute inset-0 bg-[#0B1325]/50 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1325] via-transparent to-[#0B1325]/60" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto text-center">
        <div className="max-w-3xl mx-auto">
          {/* Subtle gold line & crest */}
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="h-[1px] w-8 sm:w-12 bg-[#C5A880]"></span>
            <span className="text-[#C5A880] text-xs sm:text-sm tracking-[0.2em] uppercase font-semibold">
              Lumina Hotel · Filling Sukwa, Jos North
            </span>
            <span className="h-[1px] w-8 sm:w-12 bg-[#C5A880]"></span>
          </div>

          {/* Main Headline */}
          <h1
            id="hero-headline"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-white tracking-tight leading-[1.15] mb-4 font-normal"
          >
            Luxury, Comfort &amp; Warm Nigerian Hospitality
          </h1>

          {/* Short Natural Supporting Text in Simple English */}
          <p
            id="hero-supporting-text"
            className="text-base sm:text-lg text-slate-200 font-light max-w-xl mx-auto leading-relaxed mb-8 tracking-wide"
          >
            Enjoy clean and comfortable rooms, 24/7 uninterrupted power, delicious local and continental food, and the cool weather of Jos.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 sm:mb-12">
            <button
              id="hero-book-btn"
              onClick={() => onOpenBooking()}
              type="button"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#C5A880] hover:bg-[#B89758] text-[#0B1325] px-8 py-3.5 rounded-sm text-xs font-semibold uppercase tracking-[0.16em] transition-all duration-200 shadow-lg hover:shadow-xl active:scale-[0.98] cursor-pointer"
            >
              <span>Book Your Stay</span>
              <ChevronRight className="w-4 h-4" />
            </button>

            <button
              id="hero-explore-rooms-btn"
              onClick={onExploreRooms}
              type="button"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/10 text-white border border-white/60 hover:border-white px-8 py-3.5 rounded-sm text-xs font-medium uppercase tracking-[0.16em] transition-all duration-200 backdrop-blur-xs cursor-pointer"
            >
              <span>Explore Rooms</span>
            </button>
          </div>
        </div>
      </div>

      {/* Interactive Quick Reservation / Availability Bar */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <form
          id="hero-quick-booking-form"
          onSubmit={handleQuickBookSubmit}
          className="bg-[#0B1325]/90 backdrop-blur-md border border-[#C5A880]/30 rounded-sm p-4 sm:p-5 shadow-2xl"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
            {/* Check In */}
            <div>
              <label htmlFor="quick-checkin" className="block text-[11px] uppercase tracking-wider text-[#C5A880] font-medium mb-1.5 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                <span>Check In</span>
              </label>
              <input
                type="date"
                id="quick-checkin"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-full bg-[#16213B] border border-slate-700 focus:border-[#C5A880] text-slate-100 text-sm rounded-sm px-3 py-2.5 outline-none transition-colors"
                required
              />
            </div>

            {/* Check Out */}
            <div>
              <label htmlFor="quick-checkout" className="block text-[11px] uppercase tracking-wider text-[#C5A880] font-medium mb-1.5 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                <span>Check Out</span>
              </label>
              <input
                type="date"
                id="quick-checkout"
                value={checkOut}
                min={checkIn}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-full bg-[#16213B] border border-slate-700 focus:border-[#C5A880] text-slate-100 text-sm rounded-sm px-3 py-2.5 outline-none transition-colors"
                required
              />
            </div>

            {/* Guests & Room */}
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label htmlFor="quick-guests" className="block text-[11px] uppercase tracking-wider text-[#C5A880] font-medium mb-1.5 flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5" />
                  <span>Guests</span>
                </label>
                <select
                  id="quick-guests"
                  value={guests}
                  onChange={(e) => setGuests(Number(e.target.value))}
                  className="w-full bg-[#16213B] border border-slate-700 focus:border-[#C5A880] text-slate-100 text-sm rounded-sm px-2.5 py-2.5 outline-none transition-colors"
                >
                  <option value={1} className="bg-[#0B1325]">1 Guest</option>
                  <option value={2} className="bg-[#0B1325]">2 Guests</option>
                  <option value={3} className="bg-[#0B1325]">3 Guests</option>
                  <option value={4} className="bg-[#0B1325]">4+ Guests</option>
                </select>
              </div>

              <div>
                <label htmlFor="quick-room" className="block text-[11px] uppercase tracking-wider text-[#C5A880] font-medium mb-1.5 flex items-center gap-1.5">
                  <BedDouble className="w-3.5 h-3.5" />
                  <span>Room</span>
                </label>
                <select
                  id="quick-room"
                  value={selectedRoomId}
                  onChange={(e) => setSelectedRoomId(e.target.value)}
                  className="w-full bg-[#16213B] border border-slate-700 focus:border-[#C5A880] text-slate-100 text-sm rounded-sm px-2 py-2.5 outline-none transition-colors truncate"
                >
                  {ROOMS.map((room) => (
                    <option key={room.id} value={room.id} className="bg-[#0B1325]">
                      {room.name} - ₦{room.price.toLocaleString()}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Check Availability CTA */}
            <div>
              <button
                type="submit"
                id="quick-availability-btn"
                className="w-full bg-[#C5A880] hover:bg-[#B89758] text-[#0B1325] py-2.5 px-4 rounded-sm text-xs font-semibold uppercase tracking-[0.14em] transition-colors cursor-pointer flex items-center justify-center gap-1.5 h-[42px]"
              >
                <span>Check Availability</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};
