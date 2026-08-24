import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';
import { REVIEWS, HOTEL_INFO } from '../data/hotelData';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-20 lg:py-28 bg-[#F5F2EB] text-[#1E293B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 lg:mb-18">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-[1px] w-6 bg-[#C5A880]"></span>
            <span className="text-[#C5A880] text-xs uppercase tracking-[0.2em] font-semibold">
              Guest Impressions
            </span>
            <span className="h-[1px] w-6 bg-[#C5A880]"></span>
          </div>
          <h2
            id="reviews-title"
            className="text-3xl sm:text-4xl lg:text-4xl font-serif text-[#0B1325] font-normal tracking-tight mb-4"
          >
            Memories from Our Guests
          </h2>
          <div className="flex items-center justify-center gap-2 text-sm text-slate-600">
            <div className="flex items-center text-[#C5A880]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#C5A880]" />
              ))}
            </div>
            <span className="font-semibold text-[#0B1325]">{HOTEL_INFO.rating} / 5.0</span>
            <span className="text-slate-400">·</span>
            <span>Based on {HOTEL_INFO.reviewCount.toLocaleString()} verified stays</span>
          </div>
        </div>

        {/* 3 Review Cards Grid (1 col mobile, 3 col desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              id={`review-card-${review.id}`}
              className="bg-white p-8 rounded-sm border border-slate-200 shadow-xs hover:shadow-md transition-shadow duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Top star rating & quote symbol */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center text-[#C5A880] gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#C5A880]" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-slate-200" />
                </div>

                {/* Natural review text */}
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6 font-light italic">
                  "{review.reviewText}"
                </p>
              </div>

              {/* Reviewer info */}
              <div className="pt-4 border-t border-slate-100">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-serif text-lg text-[#0B1325] font-semibold leading-snug">
                      {review.guestName}
                    </h4>
                    <p className="text-xs text-slate-500">
                      {review.guestOrigin} · <span className="text-slate-400">{review.roomStayed}</span>
                    </p>
                  </div>
                  {review.verified && (
                    <div className="flex items-center gap-1 text-[11px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100" title="Verified Guest Stay">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                      <span>Verified</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
