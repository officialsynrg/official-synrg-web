import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Infinity, Sparkles, X, ChevronLeft, ChevronRight, BookOpen } from 'lucide-react';
import { STORY_CONTENT, FULL_LORE } from '../data';

interface AboutProps {
  isDarkMode: boolean;
}

export default function About({ isDarkMode }: AboutProps) {
  const [isLoreOpen, setIsLoreOpen] = useState(false);
  const [activeChapterIndex, setActiveChapterIndex] = useState(0);

  const cards = [
    {
      id: 'philosophy',
      title: 'The Philosophy',
      subtitle: 'Name Synthesis',
      icon: <Infinity size={18} className="text-brand" />,
      text: STORY_CONTENT.philosophy,
    },
    {
      id: 'mythology',
      title: 'The Mythology',
      subtitle: 'Symphonic Lore',
      icon: <Sparkles size={18} className="text-brand" />,
      text: STORY_CONTENT.lore,
    }
  ];

  const activeChapter = FULL_LORE.chapters[activeChapterIndex];

  return (
    <section id="story" className="py-24 px-6 md:px-12 relative overflow-hidden">
      {/* Absolute decorative ambient glow */}
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-brand/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Column: Editorial Statement (4/12) */}
          <div className="lg:col-span-4 lg:sticky lg:top-32">
            <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-brand font-semibold block mb-2">
              Philosophic Blueprint
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-black tracking-tight uppercase mb-6">
              Our Story
            </h2>
            <div className="h-[2px] w-16 bg-brand mb-6" />
            
            <p className={`text-base font-display font-light leading-relaxed mb-6 italic ${
              isDarkMode ? 'text-neutral-300' : 'text-neutral-700'
            }`}>
              &ldquo;An expensive, uncompromising devotion to pure frequency and kinetic execution. We do not create content—we design sensory events.&rdquo;
            </p>

            <p className={`text-xs font-mono tracking-widest leading-relaxed opacity-55 uppercase`}>
              synergy + energy &bull; raw soul &amp; modular arrays
            </p>
          </div>

          {/* Right Column: Narrative Grid (8/12) */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            {cards.map((card, index) => {
              return (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`p-8 border rounded-2xl hover:shadow-xl transition-all duration-500 relative group flex flex-col justify-between min-h-[320px] ${
                    isDarkMode
                      ? 'border-neutral-900 bg-neutral-950/25 hover:border-brand/30 hover:bg-neutral-950/40'
                      : 'border-neutral-200 bg-neutral-50/40 hover:border-brand/30 hover:bg-neutral-50 shadow-sm'
                  }`}
                >
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      {/* Header line */}
                      <div className="flex items-center justify-between mb-6">
                        <div className={`p-3 rounded-md border ${
                          isDarkMode ? 'border-neutral-800 bg-neutral-900/50' : 'border-neutral-200 bg-neutral-100'
                        }`}>
                          {card.icon}
                        </div>
                        <span className="font-mono text-[10px] tracking-widest text-neutral-500 uppercase font-semibold">
                          0{index + 1}
                        </span>
                      </div>

                      <span className="text-[9px] font-mono tracking-widest text-brand uppercase font-bold block mb-1">
                        {card.subtitle}
                      </span>
                      <h3 className="text-xl font-display font-black uppercase mb-4">
                        {card.title}
                      </h3>
                      <p className={`text-xs leading-relaxed ${
                        isDarkMode ? 'text-neutral-400' : 'text-neutral-600'
                      }`}>
                        {card.text}
                      </p>
                    </div>

                    {card.id === 'mythology' && (
                      <div className="mt-6 pt-2">
                        <button
                          id="access-chronos-logs"
                          onClick={(e) => {
                            e.stopPropagation();
                            setIsLoreOpen(true);
                          }}
                          className="px-5 py-2.5 bg-brand hover:bg-brand-accent text-white font-mono text-[10px] tracking-widest uppercase rounded-full transition-all cursor-pointer flex items-center gap-2 group/btn shadow-lg shadow-brand/10"
                        >
                          <BookOpen size={12} />
                          Read Full Lore
                          <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Absolute subtle background lettering */}
                  <div className="absolute right-6 bottom-4 font-display font-black text-6xl tracking-tighter opacity-[0.02] group-hover:opacity-[0.04] group-hover:scale-105 transition-all duration-500 select-none pointer-events-none">
                    {card.title.split(' ')[card.title.split(' ').length - 1].toUpperCase()}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Cinematic Interactive Lore Reader Modal */}
      <AnimatePresence>
        {isLoreOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md overflow-hidden"
          >
            {/* Background glowing rings */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand/5 rounded-full blur-[100px] pointer-events-none" />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="relative w-full max-w-5xl h-[85vh] bg-neutral-950 border border-neutral-800 rounded-3xl overflow-hidden flex flex-col md:flex-row shadow-[0_0_50px_rgba(249,115,22,0.15)]"
            >
              {/* Close Button */}
              <button
                id="close-lore-modal"
                onClick={() => setIsLoreOpen(false)}
                className="absolute top-6 right-6 z-20 p-2.5 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700 transition-colors cursor-pointer"
              >
                <X size={18} />
              </button>

              {/* Sidebar: Chapter Index */}
              <div className="w-full md:w-80 border-r border-neutral-900 bg-neutral-950/60 p-8 flex flex-col h-1/3 md:h-full justify-between overflow-y-auto select-none">
                <div>
                  <div className="text-brand font-mono text-[10px] tracking-[0.25em] font-semibold uppercase mb-1">
                    Chronos Archives
                  </div>
                  <h3 className="font-display font-black text-3xl tracking-tighter italic mb-8 uppercase text-white">
                    {FULL_LORE.title}
                  </h3>

                  <div className="space-y-2">
                    {FULL_LORE.chapters.map((chapter, idx) => {
                      const isActive = idx === activeChapterIndex;
                      return (
                        <button
                          key={chapter.id}
                          onClick={() => setActiveChapterIndex(idx)}
                          className={`w-full text-left p-3.5 rounded-xl border transition-all duration-300 flex items-center gap-3 cursor-pointer ${
                            isActive
                              ? 'bg-neutral-900 border-neutral-800 text-brand shadow-sm shadow-brand/5'
                              : 'bg-transparent border-transparent text-neutral-500 hover:text-neutral-300'
                          }`}
                        >
                          <span className={`font-mono text-xs w-6 h-6 rounded-full flex items-center justify-center ${
                            isActive ? 'bg-brand text-white font-bold' : 'bg-neutral-900 text-neutral-600'
                          }`}>
                            {idx + 1}
                          </span>
                          <span className={`text-[11px] font-mono tracking-wider uppercase ${
                            isActive ? 'font-black' : 'font-medium'
                          }`}>
                            {chapter.title.substring(chapter.title.indexOf('.') + 1).trim()}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="hidden md:block pt-8 border-t border-neutral-900/80">
                  <div className="text-[10px] text-neutral-600 font-mono tracking-wider uppercase">
                    Author: {FULL_LORE.author}
                  </div>
                  <div className="text-[9px] text-neutral-700 font-mono mt-1">
                    RECONSTRUCTED TIMELINE RECORD &bull; CLASSIFIED
                  </div>
                </div>
              </div>

              {/* Content Panel: Reader Pane */}
              <div className="flex-1 flex flex-col h-2/3 md:h-full justify-between bg-neutral-900/10 p-8 md:p-12 overflow-y-auto relative">
                {/* Background watermarked text */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-display font-black text-neutral-900/10 select-none pointer-events-none tracking-tighter uppercase italic">
                  SYNRG
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeChapter.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="flex-1 flex flex-col justify-center max-w-2xl mx-auto z-10"
                  >
                    <div className="flex items-center gap-2 text-brand font-mono text-[10px] tracking-widest uppercase mb-2">
                      <span>Chapter 0{activeChapterIndex + 1} of 07</span>
                      <span>&bull;</span>
                      <span>Timeline log</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-display font-black tracking-tighter uppercase mb-8 text-white italic">
                      {activeChapter.title.substring(activeChapter.title.indexOf('.') + 1).trim()}
                    </h2>

                    <div className="space-y-6">
                      {activeChapter.paragraphs.map((para, pIdx) => (
                        <p
                          key={pIdx}
                          className="text-neutral-300 text-[13px] md:text-sm leading-relaxed font-light tracking-wide first-letter:text-brand first-letter:font-black first-letter:text-xl"
                        >
                          {para}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Footer Controls */}
                <div className="flex justify-between items-center pt-8 border-t border-neutral-900/80 mt-8 z-10">
                  <button
                    disabled={activeChapterIndex === 0}
                    onClick={() => setActiveChapterIndex(prev => prev - 1)}
                    className="px-4 py-2 border border-neutral-800 hover:border-neutral-700 disabled:opacity-20 text-neutral-400 hover:text-white rounded-full transition-all text-xs font-mono uppercase tracking-widest flex items-center gap-2 cursor-pointer"
                  >
                    <ChevronLeft size={14} />
                    Back
                  </button>

                  <span className="font-mono text-[11px] text-neutral-500">
                    {activeChapterIndex + 1} / 7
                  </span>

                  <button
                    disabled={activeChapterIndex === FULL_LORE.chapters.length - 1}
                    onClick={() => setActiveChapterIndex(prev => prev + 1)}
                    className="px-5 py-2.5 bg-brand hover:bg-brand-accent disabled:opacity-20 text-white rounded-full transition-all text-xs font-mono uppercase tracking-widest flex items-center gap-2 cursor-pointer shadow-lg shadow-brand/10"
                  >
                    Next
                    <ChevronRight size={14} />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

