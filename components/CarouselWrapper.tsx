'use client';
import { useRef } from 'react';

export default function CarouselWrapper({ children }: { children: React.ReactNode }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = window.innerWidth < 640 ? 250 : 350; // Scroll width roughly matches card width
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative group w-full">
      {/* Left Arrow */}
      <button 
        onClick={() => scroll('left')}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 lg:-translate-x-5 z-20 bg-white rounded-full p-2.5 lg:p-3 shadow-[0_4px_20px_rgba(0,0,0,0.1)] border border-slate-100 text-primary-teal opacity-0 group-hover:opacity-100 transition-all hover:scale-110 hover:bg-teal-50 hidden sm:flex"
        aria-label="Geser ke kiri"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
      </button>

      {/* Scrollable Container */}
      <div 
        ref={scrollRef} 
        className="flex overflow-x-auto gap-6 lg:gap-8 pb-8 snap-x snap-mandatory scroll-smooth hide-scrollbar w-full pt-4"
      >
        {children}
      </div>

      {/* Right Arrow */}
      <button 
        onClick={() => scroll('right')}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 lg:translate-x-5 z-20 bg-white rounded-full p-2.5 lg:p-3 shadow-[0_4px_20px_rgba(0,0,0,0.1)] border border-slate-100 text-primary-teal opacity-0 group-hover:opacity-100 transition-all hover:scale-110 hover:bg-teal-50 hidden sm:flex"
        aria-label="Geser ke kanan"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
      </button>
    </div>
  );
}
