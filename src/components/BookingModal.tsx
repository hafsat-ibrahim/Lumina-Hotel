import React, { useState, useEffect } from 'react';
import { X, Calendar, Users, BedDouble, CheckCircle2, ShieldCheck, Printer, ArrowRight } from 'lucide-react';
import { ROOMS, HOTEL_INFO } from '../data/hotelData';
import { ReservationDetails } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedRoomId?: string;
  initialDates?: {
    checkIn: string;
    checkOut: string;
    guests: number;
  };
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preselectedRoomId,
  initialDates,
}) => {
  const todayStr = new Date().toISOString().split('T')[0];
  const tomorrowStr = (() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  })();

  const [selectedRoomId, setSelectedRoomId] = useState<string>(
    preselectedRoomId || ROOMS[0].id
  );
  const [checkIn, setCheckIn] = useState<string>(
    initialDates?.checkIn || todayStr
  );
  const [checkOut, setCheckOut] = useState<string>(
    initialDates?.checkOut || tomorrowStr
  );
  const [adults, setAdults] = useState<number>(initialDates?.guests || 1);
  const [children, setChildren] = useState<number>(0);
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [specialRequests, setSpecialRequests] = useState<string>('');

  const [isConfirmed, setIsConfirmed] = useState(false);
  const [confirmationData, setConfirmationData] = useState<ReservationDetails | null>(null);

  useEffect(() => {
    if (preselectedRoomId) {
      setSelectedRoomId(preselectedRoomId);
    }
  }, [preselectedRoomId]);

  if (!isOpen) return null;

  const currentRoom = ROOMS.find((r) => r.id === selectedRoomId) || ROOMS[0];

  // Calculate nights
  const checkInDate = new Date(checkIn);
  const checkOutDate = new Date(checkOut);
  const timeDiff = checkOutDate.getTime() - checkInDate.getTime();
  const calculatedNights = Math.max(1, Math.round(timeDiff / (1000 * 3600 * 24)));
  const subtotal = currentRoom.price * calculatedNights;
  const taxesAndFees = Math.round(subtotal * 0.075); // 7.5% Nigerian VAT
  const grandTotal = subtotal + taxesAndFees;

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const bookingRef = `LUM-${Math.floor(10000 + Math.random() * 90000)}`;

    const details: ReservationDetails = {
      roomId: currentRoom.id,
      roomName: currentRoom.name,
      checkIn,
      checkOut,
      adults,
      children,
      fullName,
      email,
      phone,
      specialRequests,
      totalNights: calculatedNights,
      totalPrice: grandTotal,
      bookingReference: bookingRef,
    };

    setConfirmationData(details);
    setIsConfirmed(true);
  };

  const handleResetAndClose = () => {
    setIsConfirmed(false);
    setConfirmationData(null);
    onClose();
  };

  return (
    <div
      id="booking-modal-overlay"
      className="fixed inset-0 z-50 bg-[#0B1325]/85 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="booking-modal-content"
        className="relative bg-white rounded-sm border border-slate-300 shadow-2xl max-w-3xl w-full max-h-[92vh] overflow-y-auto text-[#1E293B] my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 z-20 bg-[#0B1325] text-white p-5 sm:p-6 flex items-center justify-between border-b border-[#C5A880]/30">
          <div>
            <span className="text-[10px] tracking-[0.25em] text-[#C5A880] uppercase font-semibold block">
              Reservation Center · Jos North
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-normal text-white">
              {isConfirmed ? 'Reservation Confirmed' : 'Book a Room at Lumina Hotel'}
            </h3>
          </div>

          <button
            onClick={onClose}
            aria-label="Close booking modal"
            className="text-slate-400 hover:text-white p-2 rounded-sm hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-8">
          {isConfirmed && confirmationData ? (
            /* Confirmation View */
            <div className="text-center py-4">
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <span className="text-xs uppercase tracking-widest text-[#C5A880] font-semibold block mb-1">
                Booking Reference: <strong className="text-[#0B1325] text-sm">{confirmationData.bookingReference}</strong>
              </span>

              <h4 className="font-serif text-2xl sm:text-3xl text-[#0B1325] mb-2 font-normal">
                We look forward to welcoming you, {confirmationData.fullName}.
              </h4>

              <p className="text-sm text-slate-600 max-w-lg mx-auto mb-6">
                Your reservation details have been sent to <strong className="text-slate-800">{confirmationData.email}</strong>. Our front desk will contact you via phone at <strong className="text-slate-800">{confirmationData.phone}</strong> before your arrival.
              </p>

              {/* Summary Card */}
              <div className="bg-[#FAF8F5] border border-slate-200 rounded-sm p-6 max-w-md mx-auto text-left mb-6 text-xs sm:text-sm space-y-2.5">
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500">Reserved Room:</span>
                  <strong className="text-[#0B1325] font-serif text-base">{confirmationData.roomName}</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Check-in:</span>
                  <span className="text-slate-800 font-medium">{confirmationData.checkIn} (from {HOTEL_INFO.checkInTime})</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Check-out:</span>
                  <span className="text-slate-800 font-medium">{confirmationData.checkOut} (until {HOTEL_INFO.checkOutTime})</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Duration:</span>
                  <span className="text-slate-800 font-medium">{confirmationData.totalNights} Night(s)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Guests:</span>
                  <span className="text-slate-800 font-medium">{confirmationData.adults} Adult(s) {confirmationData.children > 0 ? `, ${confirmationData.children} Child(ren)` : ''}</span>
                </div>
                <div className="flex justify-between pt-3 border-t border-slate-200 text-sm font-semibold">
                  <span className="text-[#0B1325]">Total Amount (Naira):</span>
                  <span className="text-[#0B1325] font-serif text-base">₦{confirmationData.totalPrice.toLocaleString()} NGN</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-slate-300 hover:bg-slate-100 text-slate-700 px-5 py-2.5 rounded-sm text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  <Printer className="w-4 h-4" />
                  <span>Print Booking Slip</span>
                </button>

                <button
                  type="button"
                  onClick={handleResetAndClose}
                  className="w-full sm:w-auto bg-[#0B1325] hover:bg-[#16213B] text-white px-7 py-2.5 rounded-sm text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            /* Reservation Form */
            <form id="reservation-booking-form" onSubmit={handleBookingSubmit} className="space-y-6">
              
              {/* Step 1: Select Room */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#0B1325] font-semibold mb-2 flex items-center gap-1.5">
                  <BedDouble className="w-4 h-4 text-[#C5A880]" />
                  <span>1. Select Room</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {ROOMS.map((room) => {
                    const isSelected = room.id === selectedRoomId;
                    return (
                      <div
                        key={room.id}
                        onClick={() => setSelectedRoomId(room.id)}
                        className={`p-3.5 rounded-sm border cursor-pointer transition-all flex items-center justify-between ${
                          isSelected
                            ? 'border-[#C5A880] bg-[#FAF8F5] ring-1 ring-[#C5A880]'
                            : 'border-slate-200 hover:border-slate-300 bg-white'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <img
                            src={room.imageUrl}
                            alt={room.name}
                            className="w-12 h-12 rounded-sm object-cover flex-shrink-0"
                            referrerPolicy="no-referrer"
                          />
                          <div>
                            <h4 className="font-serif text-sm font-semibold text-[#0B1325]">
                              {room.name}
                            </h4>
                            <span className="text-[11px] text-slate-500">{room.size}</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="font-serif font-bold text-sm text-[#0B1325] block">
                            ₦{room.price.toLocaleString()}
                          </span>
                          <span className="text-[10px] text-slate-400">/ night</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Dates & Guests */}
              <div className="pt-2 border-t border-slate-100">
                <label className="block text-xs uppercase tracking-wider text-[#0B1325] font-semibold mb-2 flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-[#C5A880]" />
                  <span>2. Stay Dates &amp; Guests</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  <div>
                    <label htmlFor="modal-checkin" className="block text-[11px] text-slate-500 mb-1 font-medium">
                      Check-in Date
                    </label>
                    <input
                      type="date"
                      id="modal-checkin"
                      required
                      min={todayStr}
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                      className="w-full bg-[#FAF8F5] border border-slate-300 focus:border-[#C5A880] text-sm rounded-sm px-3 py-2 outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="modal-checkout" className="block text-[11px] text-slate-500 mb-1 font-medium">
                      Check-out Date
                    </label>
                    <input
                      type="date"
                      id="modal-checkout"
                      required
                      min={checkIn}
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                      className="w-full bg-[#FAF8F5] border border-slate-300 focus:border-[#C5A880] text-sm rounded-sm px-3 py-2 outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="modal-adults" className="block text-[11px] text-slate-500 mb-1 font-medium">
                      Adults
                    </label>
                    <select
                      id="modal-adults"
                      value={adults}
                      onChange={(e) => setAdults(Number(e.target.value))}
                      className="w-full bg-[#FAF8F5] border border-slate-300 focus:border-[#C5A880] text-sm rounded-sm px-3 py-2 outline-none"
                    >
                      <option value={1}>1 Adult</option>
                      <option value={2}>2 Adults</option>
                      <option value={3}>3 Adults</option>
                      <option value={4}>4 Adults</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="modal-children" className="block text-[11px] text-slate-500 mb-1 font-medium">
                      Children
                    </label>
                    <select
                      id="modal-children"
                      value={children}
                      onChange={(e) => setChildren(Number(e.target.value))}
                      className="w-full bg-[#FAF8F5] border border-slate-300 focus:border-[#C5A880] text-sm rounded-sm px-3 py-2 outline-none"
                    >
                      <option value={0}>0 Children</option>
                      <option value={1}>1 Child</option>
                      <option value={2}>2 Children</option>
                      <option value={3}>3 Children</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Step 3: Guest Details */}
              <div className="pt-2 border-t border-slate-100">
                <label className="block text-xs uppercase tracking-wider text-[#0B1325] font-semibold mb-2 flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-[#C5A880]" />
                  <span>3. Guest Contact Information</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label htmlFor="modal-fullname" className="block text-[11px] text-slate-500 mb-1 font-medium">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="modal-fullname"
                      required
                      placeholder="e.g. Fatima Yusuf"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full bg-[#FAF8F5] border border-slate-300 focus:border-[#C5A880] text-sm rounded-sm px-3 py-2 outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="modal-email" className="block text-[11px] text-slate-500 mb-1 font-medium">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="modal-email"
                      required
                      placeholder="e.g. user@gmail.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-[#FAF8F5] border border-slate-300 focus:border-[#C5A880] text-sm rounded-sm px-3 py-2 outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="modal-phone" className="block text-[11px] text-slate-500 mb-1 font-medium">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="modal-phone"
                      required
                      placeholder="08144338573"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-[#FAF8F5] border border-slate-300 focus:border-[#C5A880] text-sm rounded-sm px-3 py-2 outline-none"
                    />
                  </div>
                </div>

                <div className="mt-3">
                  <label htmlFor="modal-special-requests" className="block text-[11px] text-slate-500 mb-1 font-medium">
                    Special Requests (Airport pickup, quiet floor, dietary needs)
                  </label>
                  <input
                    type="text"
                    id="modal-special-requests"
                    placeholder="Optional special requests..."
                    value={specialRequests}
                    onChange={(e) => setSpecialRequests(e.target.value)}
                    className="w-full bg-[#FAF8F5] border border-slate-300 focus:border-[#C5A880] text-sm rounded-sm px-3 py-2 outline-none"
                  />
                </div>
              </div>

              {/* Price Calculation Box in Nigerian Naira */}
              <div className="bg-[#FAF8F5] border border-slate-200 rounded-sm p-4 text-xs space-y-1.5">
                <div className="flex justify-between text-slate-600">
                  <span>₦{currentRoom.price.toLocaleString()} × {calculatedNights} Night(s)</span>
                  <span>₦{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>VAT &amp; State Service Charge (7.5%)</span>
                  <span>₦{taxesAndFees.toLocaleString()}</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-slate-200 text-sm font-semibold text-[#0B1325]">
                  <span>Total Amount (Naira)</span>
                  <span className="font-serif text-base text-[#0B1325]">₦{grandTotal.toLocaleString()} NGN</span>
                </div>
              </div>

              {/* Submit & Guarantee */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <ShieldCheck className="w-4 h-4 text-[#C5A880] flex-shrink-0" />
                  <span>Free cancellation up to 24 hours before arrival.</span>
                </div>

                <button
                  id="modal-confirm-booking-btn"
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0B1325] hover:bg-[#16213B] text-white px-8 py-3.5 rounded-sm text-xs font-semibold uppercase tracking-[0.14em] transition-colors cursor-pointer shadow"
                >
                  <span>Confirm Reservation</span>
                  <ArrowRight className="w-4 h-4 text-[#C5A880]" />
                </button>
              </div>

            </form>
          )}
        </div>
      </div>
    </div>
  );
};
