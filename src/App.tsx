import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { RoomsSection } from './components/RoomsSection';
import { ServicesSection } from './components/ServicesSection';
import { WhyChooseSection } from './components/WhyChooseSection';
import { GallerySection } from './components/GallerySection';
import { ReviewsSection } from './components/ReviewsSection';
import { BookingCtaSection } from './components/BookingCtaSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { RoomDetailsModal } from './components/RoomDetailsModal';
import { DiscoverModal } from './components/DiscoverModal';
import { Room } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);
  const [bookingRoomId, setBookingRoomId] = useState<string | undefined>(undefined);
  const [bookingDates, setBookingDates] = useState<
    { checkIn: string; checkOut: string; guests: number } | undefined
  >(undefined);

  const [selectedRoomDetails, setSelectedRoomDetails] = useState<Room | null>(null);
  const [isDiscoverOpen, setIsDiscoverOpen] = useState<boolean>(false);

  // Active section tracking
  useEffect(() => {
    const handleScrollObserver = () => {
      const sections = ['home', 'about', 'rooms', 'services', 'gallery', 'reviews', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScrollObserver, { passive: true });
    return () => window.removeEventListener('scroll', handleScrollObserver);
  }, []);

  const handleOpenBooking = (
    roomId?: string,
    prefill?: { checkIn: string; checkOut: string; guests: number }
  ) => {
    setBookingRoomId(roomId);
    setBookingDates(prefill);
    setIsBookingOpen(true);
  };

  const handleExploreRooms = () => {
    const roomsEl = document.getElementById('rooms');
    if (roomsEl) {
      roomsEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1E293B] flex flex-col antialiased selection:bg-[#C5A880]/30 selection:text-[#0B1325]">
      {/* 1. Navigation */}
      <Navbar
        onOpenBooking={() => handleOpenBooking()}
        activeSection={activeSection}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 2. Hero Section */}
        <Hero
          onOpenBooking={handleOpenBooking}
          onExploreRooms={handleExploreRooms}
        />

        {/* 3. About Lumina Hotel */}
        <AboutSection
          onDiscoverMore={() => setIsDiscoverOpen(true)}
        />

        {/* 4. Rooms */}
        <RoomsSection
          onSelectRoomToBook={(roomId) => handleOpenBooking(roomId)}
          onViewRoomDetails={(room) => setSelectedRoomDetails(room)}
        />

        {/* 5. Services */}
        <ServicesSection />

        {/* 6. Why Choose Lumina */}
        <WhyChooseSection />

        {/* 7. Gallery */}
        <GallerySection />

        {/* 8. Guest Reviews */}
        <ReviewsSection />

        {/* 9. Booking CTA */}
        <BookingCtaSection
          onReserveClick={() => handleOpenBooking()}
        />

        {/* 10. Contact */}
        <ContactSection />
      </main>

      {/* 11. Footer */}
      <Footer
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Interactive Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialRoomId={bookingRoomId}
        initialDates={bookingDates}
      />

      {/* Room Details Modal */}
      <RoomDetailsModal
        room={selectedRoomDetails}
        onClose={() => setSelectedRoomDetails(null)}
        onBookThisRoom={(roomId) => handleOpenBooking(roomId)}
      />

      {/* Discover Story Modal */}
      <DiscoverModal
        isOpen={isDiscoverOpen}
        onClose={() => setIsDiscoverOpen(false)}
        onOpenBooking={() => handleOpenBooking()}
      />
    </div>
  );
}
