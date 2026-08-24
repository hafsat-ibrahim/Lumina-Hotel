import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, Navigation } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: 'General Question',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate sending message
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        subject: 'General Question',
        message: '',
      });
    }, 600);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#FAF8F5] text-[#1E293B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 lg:mb-18">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-[1px] w-6 bg-[#C5A880]"></span>
            <span className="text-[#C5A880] text-xs uppercase tracking-[0.2em] font-semibold">
              Get in Touch
            </span>
            <span className="h-[1px] w-6 bg-[#C5A880]"></span>
          </div>
          <h2
            id="contact-title"
            className="text-3xl sm:text-4xl lg:text-4xl font-serif text-[#0B1325] font-normal tracking-tight mb-4"
          >
            Contact &amp; Location
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Our team is always available 24/7 to answer your calls, assist with room bookings, and welcome you to Jos.
          </p>
        </div>

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Column 1: Contact Information & Map */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Info Card */}
            <div className="bg-white p-6 sm:p-8 rounded-sm border border-slate-200 shadow-xs space-y-6">
              <h3 className="font-serif text-2xl text-[#0B1325] font-normal border-b border-slate-100 pb-3">
                Lumina Hotel
              </h3>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-sm bg-[#0B1325] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-[#C5A880]" />
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-wider text-[#C5A880] font-semibold mb-1">
                    Hotel Address
                  </span>
                  <p className="text-slate-700 text-sm font-medium leading-relaxed">
                    {HOTEL_INFO.address}
                  </p>
                  <p className="text-slate-500 text-xs mt-0.5">
                    Plateau State, Nigeria
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-sm bg-[#0B1325] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Phone className="w-4 h-4 text-[#C5A880]" />
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-wider text-[#C5A880] font-semibold mb-1">
                    Phone / WhatsApp Call
                  </span>
                  <a
                    href={`tel:${HOTEL_INFO.phone}`}
                    className="text-slate-800 hover:text-[#C5A880] text-sm font-semibold transition-colors block"
                  >
                    {HOTEL_INFO.phone}
                  </a>
                  <a
                    href={`tel:${HOTEL_INFO.internationalPhone}`}
                    className="text-slate-500 hover:text-[#C5A880] text-xs transition-colors block mt-0.5"
                  >
                    {HOTEL_INFO.internationalPhone} (International)
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-sm bg-[#0B1325] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Mail className="w-4 h-4 text-[#C5A880]" />
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-wider text-[#C5A880] font-semibold mb-1">
                    Email Address
                  </span>
                  <a
                    href={`mailto:${HOTEL_INFO.email}`}
                    className="text-slate-700 hover:text-[#C5A880] text-sm break-all font-medium transition-colors block"
                  >
                    {HOTEL_INFO.email}
                  </a>
                </div>
              </div>

              {/* Hotel Availability */}
              <div className="flex items-start gap-4 pt-2 border-t border-slate-100">
                <div className="w-10 h-10 rounded-sm bg-[#FAF8F5] border border-slate-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Clock className="w-4 h-4 text-[#0B1325]" />
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-wider text-[#0B1325] font-semibold mb-1">
                    Check-in &amp; Check-out Times
                  </span>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    Check-in: <strong className="text-slate-800">{HOTEL_INFO.checkInTime}</strong> · Check-out: <strong className="text-slate-800">{HOTEL_INFO.checkOutTime}</strong>
                  </p>
                  <p className="text-slate-500 text-[11px] mt-0.5">
                    Reception &amp; Security: Open 24 Hours Everyday
                  </p>
                </div>
              </div>
            </div>

            {/* Map Card */}
            <div className="relative bg-slate-900 rounded-sm overflow-hidden border border-slate-200 shadow-xs aspect-[16/9]">
              <img
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80"
                alt="Map view near Filling Sukwa Jos North Plateau State Nigeria"
                className="w-full h-full object-cover opacity-65 mix-blend-luminosity"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-[#0B1325]/45" />

              {/* Pin marker overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                <div className="w-10 h-10 rounded-full bg-[#C5A880] text-[#0B1325] flex items-center justify-center shadow-lg mb-2">
                  <MapPin className="w-5 h-5 fill-[#0B1325]" />
                </div>
                <div className="bg-[#0B1325]/90 backdrop-blur-xs text-white px-3 py-1.5 rounded-sm border border-[#C5A880]/40 text-xs font-medium">
                  <strong className="text-[#C5A880]">Lumina Hotel</strong> · Filling Sukwa, Jos North, Plateau State
                </div>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('Filling Sukwa Jos North Plateau State Nigeria')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1 text-[11px] text-slate-200 hover:text-white bg-white/10 px-2.5 py-1 rounded transition-colors"
                >
                  <Navigation className="w-3 h-3 text-[#C5A880]" />
                  <span>Open on Google Maps</span>
                </a>
              </div>
            </div>

          </div>

          {/* Column 2: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-6 sm:p-10 rounded-sm border border-slate-200 shadow-xs">
              <h3 className="font-serif text-2xl text-[#0B1325] font-normal mb-2">
                Send Us a Message
              </h3>
              <p className="text-slate-500 text-xs sm:text-sm mb-6">
                Fill the form below and we will respond quickly to your request or booking inquiry.
              </p>

              {isSubmitted ? (
                <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-sm text-center">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto mb-3" />
                  <h4 className="font-serif text-xl text-emerald-900 font-semibold mb-1">
                    Thank You! Your Message is Received
                  </h4>
                  <p className="text-sm text-emerald-700 max-w-md mx-auto mb-4">
                    Our hotel front desk at Lumina Hotel will call or email you shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setIsSubmitted(false)}
                    className="text-xs uppercase tracking-wider font-semibold text-[#0B1325] hover:text-[#C5A880] underline cursor-pointer"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form id="hotel-contact-form" onSubmit={handleSubmit} className="space-y-4">
                  {/* Full Name */}
                  <div>
                    <label htmlFor="contact-fullName" className="block text-xs uppercase tracking-wider text-slate-700 font-semibold mb-1.5">
                      Your Full Name <span className="text-rose-600">*</span>
                    </label>
                    <input
                      type="text"
                      id="contact-fullName"
                      required
                      placeholder="e.g. Musa Abubakar or Grace Okon"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-[#FAF8F5] border border-slate-300 focus:border-[#C5A880] text-[#0B1325] text-sm rounded-sm px-4 py-3 outline-none transition-colors"
                    />
                  </div>

                  {/* Email & Phone grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-email" className="block text-xs uppercase tracking-wider text-slate-700 font-semibold mb-1.5">
                        Email Address <span className="text-rose-600">*</span>
                      </label>
                      <input
                        type="email"
                        id="contact-email"
                        required
                        placeholder="e.g. yourname@gmail.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#FAF8F5] border border-slate-300 focus:border-[#C5A880] text-[#0B1325] text-sm rounded-sm px-4 py-3 outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-phone" className="block text-xs uppercase tracking-wider text-slate-700 font-semibold mb-1.5">
                        Phone Number <span className="text-rose-600">*</span>
                      </label>
                      <input
                        type="tel"
                        id="contact-phone"
                        required
                        placeholder="08144338573"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[#FAF8F5] border border-slate-300 focus:border-[#C5A880] text-[#0B1325] text-sm rounded-sm px-4 py-3 outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="contact-subject" className="block text-xs uppercase tracking-wider text-slate-700 font-semibold mb-1.5">
                      Reason for Contact
                    </label>
                    <select
                      id="contact-subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-[#FAF8F5] border border-slate-300 focus:border-[#C5A880] text-[#0B1325] text-sm rounded-sm px-4 py-3 outline-none transition-colors"
                    >
                      <option value="Room Booking">Room Booking</option>
                      <option value="Event & Wedding Hall Booking">Event &amp; Wedding Hall Booking</option>
                      <option value="Restaurant & Food Orders">Restaurant &amp; Food Orders</option>
                      <option value="Airport Pickup">Airport Pickup / Transportation</option>
                      <option value="General Question">General Question</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="contact-message" className="block text-xs uppercase tracking-wider text-slate-700 font-semibold mb-1.5">
                      Your Message <span className="text-rose-600">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={5}
                      placeholder="Please write your question, arrival date, or room request here..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[#FAF8F5] border border-slate-300 focus:border-[#C5A880] text-[#0B1325] text-sm rounded-sm px-4 py-3 outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    id="contact-submit-btn"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0B1325] hover:bg-[#16213B] text-white px-8 py-3.5 rounded-sm text-xs font-semibold uppercase tracking-[0.16em] transition-colors shadow-sm cursor-pointer disabled:opacity-70"
                  >
                    <Send className="w-3.5 h-3.5 text-[#C5A880]" />
                    <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
