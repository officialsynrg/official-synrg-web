import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Maximize2, X, ChevronLeft, ChevronRight, Award, Camera, Film } from 'lucide-react';
import { GalleryItem } from '../types';
import { GALLERY_ITEMS } from '../data';

interface GalleryProps {
  isDarkMode: boolean;
}

export default function Gallery({ isDarkMode }: GalleryProps) {
  const [filter, setFilter] = useState<'All' | 'Competition' | 'Behind the Scenes' | 'Shoots'>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = ['All', 'Competition', 'Behind the Scenes', 'Shoots'] as const;

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (filter === 'All') return true;
    return item.category === filter;
  });

  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case 'Competition':
        return <Award size={12} className="text-brand" />;
      case 'Behind the Scenes':
        return <Camera size={12} className="text-brand" />;
      default:
        return <Film size={12} className="text-brand" />;
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <section id="gallery" className="py-24 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-brand font-semibold block mb-2">
              Visual Narrative
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-black tracking-tight uppercase">
              Aesthetic Archive
            </h2>
          </div>

          {/* Filter badging pills */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                id={`gallery-filter-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 font-mono text-[9px] tracking-widest uppercase rounded-full transition-all cursor-pointer border ${
                  filter === cat
                    ? 'bg-brand text-white border-brand'
                    : isDarkMode
                    ? 'bg-neutral-900/50 border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700'
                    : 'bg-neutral-100 border-neutral-200 text-neutral-600 hover:text-black hover:border-neutral-300'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry / Grid Canvas Layout */}
        <motion.div
          layout
          className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                key={item.id}
                onClick={() => setLightboxIndex(index)}
                className={`break-inside-avoid relative rounded-2xl overflow-hidden border group cursor-pointer ${
                  isDarkMode
                    ? 'bg-neutral-950 border-neutral-900 hover:border-brand/40'
                    : 'bg-white border-neutral-200 hover:border-brand/40 shadow-sm'
                }`}
              >
                {/* Image */}
                <div className="overflow-hidden bg-neutral-950">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-auto object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:scale-102 group-hover:brightness-100 transition-all duration-700 ease-out"
                    style={{ maxHeight: '500px' }}
                  />
                </div>

                {/* Info Hover Cover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end">
                  <div className="flex items-center gap-1.5 mb-2">
                    {getCategoryIcon(item.category)}
                    <span className="text-[8px] font-mono tracking-widest text-brand uppercase font-semibold">
                      {item.category}
                    </span>
                  </div>
                  <h4 className="text-white font-display font-bold text-xs tracking-wide leading-relaxed pr-8">
                    {item.title}
                  </h4>
                  <Maximize2 size={14} className="text-white/60 absolute bottom-6 right-6 group-hover:scale-110 transition-transform" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Overlay */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLightboxIndex(null)}
              className="absolute inset-0 bg-black/95 backdrop-blur-sm"
            />

            {/* Carousel Content Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative max-w-5xl w-full z-10 flex flex-col items-center gap-4"
            >
              {/* Close button */}
              <button
                id="close-lightbox"
                onClick={() => setLightboxIndex(null)}
                className="absolute -top-12 right-0 md:right-4 p-2 rounded-full border border-white/20 text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              >
                <X size={16} />
              </button>

              {/* Prev/Next arrows on large screens */}
              <button
                id="prev-lightbox-desktop"
                onClick={handlePrev}
                className="hidden md:flex absolute left-4 p-4 rounded-full border border-white/10 text-white/60 hover:text-white hover:bg-white/5 transition-all -translate-x-12 cursor-pointer"
              >
                <ChevronLeft size={24} />
              </button>

              <button
                id="next-lightbox-desktop"
                onClick={handleNext}
                className="hidden md:flex absolute right-4 p-4 rounded-full border border-white/10 text-white/60 hover:text-white hover:bg-white/5 transition-all translate-x-12 cursor-pointer"
              >
                <ChevronRight size={24} />
              </button>

              {/* Core Image Slide */}
              <div className="relative max-h-[75vh] max-w-full rounded-lg overflow-hidden border border-neutral-800 bg-neutral-950 flex items-center justify-center shadow-2xl">
                <img
                  src={filteredItems[lightboxIndex].imageUrl}
                  alt={filteredItems[lightboxIndex].title}
                  referrerPolicy="no-referrer"
                  className="max-h-[75vh] max-w-full object-contain"
                />

                {/* Mobile arrows */}
                <div className="absolute inset-x-4 flex items-center justify-between md:hidden">
                  <button
                    id="prev-lightbox-mobile"
                    onClick={handlePrev}
                    className="p-3 rounded-full bg-black/60 border border-white/10 text-white/80 cursor-pointer"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <button
                    id="next-lightbox-mobile"
                    onClick={handleNext}
                    className="p-3 rounded-full bg-black/60 border border-white/10 text-white/80 cursor-pointer"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>

              {/* Descriptive caption panel */}
              <div className="w-full text-center px-6 max-w-xl">
                <span className="text-[9px] font-mono tracking-widest text-brand uppercase font-bold">
                  {filteredItems[lightboxIndex].category} &bull; {lightboxIndex + 1} of {filteredItems.length}
                </span>
                <p className="text-sm font-display text-white mt-1.5 leading-relaxed font-medium">
                  {filteredItems[lightboxIndex].title}
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
