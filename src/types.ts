export interface Room {
  id: string;
  name: string;
  tagline: string;
  price: number;
  size: string;
  occupancy: string;
  bedType: string;
  view: string;
  shortDescription: string;
  fullDescription: string;
  amenities: string[];
  keyFeatures: string[];
  imageUrl: string;
  galleryImages: string[];
  featured?: boolean;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: 'wifi' | 'utensils' | 'waves' | 'bell' | 'presentation' | 'dumbbell';
  hours?: string;
  highlight?: string;
}

export interface WhyChooseReason {
  id: string;
  title: string;
  description: string;
  iconName: 'bed-double' | 'shield-check' | 'sparkles' | 'heart-handshake';
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'all' | 'exterior' | 'lobby' | 'guest-room' | 'restaurant' | 'swimming-pool' | 'event-space';
  categoryLabel: string;
  imageUrl: string;
  caption: string;
}

export interface Review {
  id: string;
  guestName: string;
  guestOrigin: string;
  stayDate: string;
  roomStayed: string;
  rating: number;
  reviewText: string;
  verified: boolean;
}

export interface ReservationDetails {
  roomId: string;
  roomName: string;
  checkIn: string;
  checkOut: string;
  adults: number;
  children: number;
  fullName: string;
  email: string;
  phone: string;
  specialRequests?: string;
  totalNights: number;
  totalPrice: number;
  bookingReference?: string;
}
