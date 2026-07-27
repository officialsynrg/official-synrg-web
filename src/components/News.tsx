import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, ArrowUpRight, X, Megaphone, Sparkles, Trophy, Flame } from 'lucide-react';
import { NewsItem } from '../types';
import { NEWS } from '../data';

interface NewsProps {
  isDarkMode: boolean;
}

export default function News({ isDarkMode }: NewsProps) {
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);

  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case 'Event':
        return <Flame size={12} className="text-brand" />;
      case 'Achievement':
        return <Trophy size={12} className="text-brand" />;
      case 'Announcement':
        return <Megaphone size={12} className="text-brand" />;
      default:
        return <Sparkles size={12} className="text-brand" />;
    }
  };

  return (
    <section id="news" className="py-24 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-brand font-semibold block mb-2">
              Chronicle &amp; Momentum
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-black tracking-tight uppercase">
              News &amp; Updates
            </h2>
          </div>
          <p className={`max-w-md text-sm leading-relaxed ${isDarkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
            Stay wired to our timeline. Read full press releases, major milestone reports, and announcements from the SYNRG core.
          </p>
        </div>

        {/* News Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {NEWS.map((item, index) => {
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`p-8 border rounded-2xl hover:shadow-xl transition-all duration-500 flex flex-col justify-between min-h-[340px] cursor-pointer group ${
                  item.isImportant
                    ? isDarkMode
                      ? 'border-brand bg-brand/5 shadow-[0_0_20px_rgba(217,119,6,0.08)]'
                      : 'border-brand bg-brand/5 shadow-[0_0_20px_rgba(217,119,6,0.04)]'
                    : isDarkMode
                    ? 'border-neutral-900 bg-neutral-950/20 hover:border-neutral-800 hover:bg-neutral-950/40'
                    : 'border-neutral-200 bg-neutral-50/40 hover:border-neutral-300 hover:bg-neutral-50 shadow-sm'
                }`}
                onClick={() => setSelectedNews(item)}
              >
                <div>
                  {/* Category and Date Header line */}
                  <div className="flex items-center justify-between mb-6">
                    <span
                      className={`px-3 py-1 text-[8px] font-mono tracking-widest uppercase rounded-full border flex items-center gap-1.5 ${
                        isDarkMode ? 'bg-neutral-900 border-neutral-800' : 'bg-neutral-100 border-neutral-200'
                      }`}
                    >
                      {getCategoryIcon(item.category)}
                      {item.category}
                    </span>
                    <span className="text-[10px] font-mono opacity-50 flex items-center gap-1">
                      <Calendar size={10} />
                      {item.date}
                    </span>
                  </div>

                  {item.isImportant && (
                    <span className="text-[8px] font-mono tracking-[0.2em] text-brand uppercase font-bold block mb-2">
                      &bull; High Priority Update
                    </span>
                  )}

                  <h3 className="text-xl font-display font-black uppercase mb-4 tracking-tight leading-snug group-hover:text-brand transition-colors duration-300">
                    {item.title}
                  </h3>

                  <p className={`text-xs leading-relaxed line-clamp-4 ${
                    isDarkMode ? 'text-neutral-400' : 'text-neutral-600'
                  }`}>
                    {item.summary}
                  </p>
                </div>

                {/* Footer read trigger */}
                <div className="border-t border-neutral-800/40 pt-4 mt-6 flex items-center justify-between group-hover:border-neutral-700/60 transition-colors">
                  <span className="text-[9px] font-mono tracking-widest uppercase opacity-40">
                    Click to Open
                  </span>
                  <div className="p-2 rounded-full bg-brand/10 text-brand group-hover:bg-brand group-hover:text-white transition-all duration-300">
                    <ArrowUpRight size={14} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Full News Drawer Modal */}
      <AnimatePresence>
        {selectedNews && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedNews(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
            />

            {/* Content Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className={`relative w-full max-w-2xl rounded-xl border z-10 p-8 sm:p-12 shadow-2xl overflow-y-auto max-h-[85vh] ${
                isDarkMode
                  ? 'bg-neutral-950 border-neutral-900 text-white'
                  : 'bg-white border-neutral-200 text-black'
              }`}
            >
              <button
                id="close-news-modal"
                onClick={() => setSelectedNews(null)}
                className={`absolute top-6 right-6 p-2 rounded-full border transition-colors cursor-pointer ${
                  isDarkMode
                    ? 'border-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-900'
                    : 'border-neutral-200 text-neutral-600 hover:text-black hover:bg-neutral-100'
                }`}
              >
                <X size={14} />
              </button>

              <div className="mt-4">
                {/* Header info */}
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <span
                    className={`px-3 py-1 text-[9px] font-mono tracking-widest uppercase rounded-full border flex items-center gap-1.5 ${
                      isDarkMode ? 'bg-neutral-900 border-neutral-800' : 'bg-neutral-100 border-neutral-200'
                    }`}
                  >
                    {getCategoryIcon(selectedNews.category)}
                    {selectedNews.category}
                  </span>
                  <span className="text-xs font-mono opacity-50 flex items-center gap-1.5">
                    <Calendar size={12} />
                    {selectedNews.date}
                  </span>
                </div>

                <h3 className="text-3xl font-display font-black uppercase mb-6 tracking-tight leading-tight">
                  {selectedNews.title}
                </h3>

                {/* Important tag */}
                {selectedNews.isImportant && (
                  <div className="p-4 bg-brand/10 border border-brand/20 rounded-md mb-8">
                    <span className="text-[10px] font-mono tracking-widest text-brand font-bold uppercase block mb-1">
                      Press Priority Flag
                    </span>
                    <p className={`text-xs ${isDarkMode ? 'text-neutral-300' : 'text-neutral-700'}`}>
                      This is an official prioritized press release. Direct inquiries can be funneled through our media administration office.
                    </p>
                  </div>
                )}

                {/* Main Text Content */}
                <p className={`text-sm leading-relaxed whitespace-pre-wrap font-sans ${
                  isDarkMode ? 'text-neutral-300' : 'text-neutral-700'
                }`}>
                  {selectedNews.content}
                </p>
              </div>

              {/* Footer specs */}
              <div className="border-t border-neutral-800/40 pt-6 mt-8 flex items-center justify-between">
                <span className="text-[9px] font-mono opacity-40 uppercase">
                  SYNRG COMMUNICATIONS &copy; 2026
                </span>
                <span className="text-[9px] font-mono tracking-widest text-brand uppercase font-bold">
                  STATUS: RELEASED
                </span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
