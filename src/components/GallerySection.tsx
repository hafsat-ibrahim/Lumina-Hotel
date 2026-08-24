import React, { useState } from 'react';
import { Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/hotelData';
import { GalleryItem } from '../types';

export const GallerySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'exterior', label: 'Exterior' },
    { id: 'lobby', label: 'Lobby' },
    { id: 'guest-room', label: 'Guest Room' },
    { id: 'restaurant', label: 'Restaurant' },
    { id: 'swimming-pool', label: 'Swimming Pool' },
    { id: 'event-space', label: 'Event Space' },
  ];

  const filteredItems = selectedCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  const openLightbox = (item: GalleryItem) => {
    const index = GALLERY_ITEMS.findIndex((g) => g.id === item.id);
    setLightboxIndex(index !== -1 ? index : 0);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev! > 0 ? prev! - 1 : GALLERY_ITEMS.length - 1));
    }
  };

  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev! < GALLERY_ITEMS.length - 1 ? prev! + 1 : 0));
    }
  };

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-[#FAF8F5] text-[#1E293B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-[1px] w-6 bg-[#C5A880]"></span>
            <span className="text-[#C5A880] text-xs uppercase tracking-[0.2em] font-semibold">
              Visual Tour
            </span>
            <span className="h-[1px] w-6 bg-[#C5A880]"></span>
          </div>
          <h2
            id="gallery-title"
            className="text-3xl sm:text-4xl lg:text-4xl font-serif text-[#0B1325] font-normal tracking-tight mb-4"
          >
            Hotel Gallery
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Take a visual stroll through our seaside architecture, tranquil suites, gourmet dining rooms, and wellness grounds.
          </p>
        </div>

        {/* Category Filter Pills (Scrollable on small screens) */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 mb-8 gap-2 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              id={`gallery-filter-${cat.id}`}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-sm text-xs uppercase tracking-wider font-medium whitespace-nowrap transition-colors cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#0B1325] text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:text-[#0B1325] hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Responsive Photo Grid (1 col mobile, 2 col tablet, 3 col desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              id={`gallery-card-${item.id}`}
              onClick={() => openLightbox(item)}
              className="group relative aspect-[4/3] rounded-sm overflow-hidden bg-slate-900 cursor-pointer shadow-xs hover:shadow-lg transition-all duration-300 border border-slate-200"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />

              {/* Hover overlay caption */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1325]/90 via-[#0B1325]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                <span className="text-[10px] uppercase font-semibold text-[#C5A880] tracking-widest mb-1">
                  {item.categoryLabel}
                </span>
                <h3 className="font-serif text-lg text-white font-normal mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-300 line-clamp-1">
                  {item.caption}
                </p>
                <div className="absolute top-4 right-4 text-white bg-[#0B1325]/60 p-2 rounded-sm">
                  <Maximize2 className="w-4 h-4 text-[#C5A880]" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          id="gallery-lightbox-modal"
          onClick={closeLightbox}
          className="fixed inset-0 z-50 bg-[#0B1325]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            aria-label="Close Lightbox"
            className="absolute top-5 right-5 text-white/80 hover:text-white p-2.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-20"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev button */}
          <button
            onClick={showPrev}
            aria-label="Previous Image"
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-3 rounded-full bg-black/40 hover:bg-black/70 transition-colors z-20"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next button */}
          <button
            onClick={showNext}
            aria-label="Next Image"
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-3 rounded-full bg-black/40 hover:bg-black/70 transition-colors z-20"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image & Caption Box */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-4xl max-h-[85vh] flex flex-col items-center justify-center"
          >
            <div className="relative overflow-hidden rounded-sm border border-slate-700 shadow-2xl max-h-[70vh]">
              <img
                src={GALLERY_ITEMS[lightboxIndex].imageUrl}
                alt={GALLERY_ITEMS[lightboxIndex].title}
                className="w-full h-full object-contain max-h-[70vh]"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <div className="mt-4 text-center text-white max-w-xl">
              <span className="text-xs uppercase tracking-widest text-[#C5A880] font-semibold block mb-1">
                {GALLERY_ITEMS[lightboxIndex].categoryLabel} ({lightboxIndex + 1} / {GALLERY_ITEMS.length})
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-normal mb-1">
                {GALLERY_ITEMS[lightboxIndex].title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 font-light">
                {GALLERY_ITEMS[lightboxIndex].caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
