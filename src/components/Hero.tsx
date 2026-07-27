import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Play, Users } from 'lucide-react';

interface HeroProps {
  isDarkMode: boolean;
}

export default function Hero({ isDarkMode }: HeroProps) {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 px-6 md:px-12"
    >
      {/* Background Graphic Elements - Abstract, Clean, Expensively Elegant */}
      <div className="absolute inset-0 z-0">
        <div
          className={`absolute inset-0 transition-opacity duration-1000 ${
            isDarkMode
              ? 'bg-[radial-gradient(ellipse_at_center,rgba(180,83,9,0.06)_0%,transparent_70%)]'
              : 'bg-[radial-gradient(ellipse_at_center,rgba(217,119,6,0.04)_0%,transparent_70%)]'
          }`}
        />
        {/* Subtle grid mesh */}
        <div
          className={`absolute inset-0 opacity-[0.03] ${
            isDarkMode ? 'bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)]' : 'bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)]'
          } bg-[size:4rem_4rem]`}
        />
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10 flex flex-col items-center">
        {/* Minimalist Sub-Tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-6 flex items-center gap-2"
        >
          <span className="h-[1px] w-8 bg-brand" />
          <span className="text-[10px] font-mono tracking-[0.4em] uppercase text-brand font-semibold">
            The Next-Gen Virtual Artists
          </span>
          <span className="h-[1px] w-8 bg-brand" />
        </motion.div>

        {/* Group Name Display */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-7xl sm:text-8xl md:text-9xl font-display font-black tracking-tighter leading-[0.85] mb-6 select-none uppercase italic"
        >
          WE ARE<br />
          <span className="text-brand">SYNRG.</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className={`max-w-2xl text-lg md:text-xl font-display font-light leading-relaxed tracking-wide mb-8 ${
            isDarkMode ? 'text-neutral-300' : 'text-neutral-700'
          }`}
        >
          Bringing your favorite global hits to life through a new virtual lens.
        </motion.p>

        {/* Short Premium Intro */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          className={`max-w-xl text-xs font-mono tracking-widest uppercase mb-12 leading-relaxed opacity-60`}
        >
          A borderless virtual collective of three distinct artists. Synchronizing powerful vocals, and cutting-edge digital performances.
        </motion.p>

        {/* Highlights Section */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          className={`grid grid-cols-2 gap-8 md:gap-16 max-w-xl mx-auto w-full p-6 md:p-8 border mb-12 rounded-lg bg-transparent ${
            isDarkMode ? 'border-neutral-900 bg-neutral-950/20' : 'border-neutral-200 bg-neutral-50/50'
          }`}
        >
          <div className="text-left border-r border-brand/20 pr-4">
            <span className="block font-display font-bold text-3xl md:text-4xl text-brand">
              03
            </span>
            <span className="block text-[10px] font-mono tracking-widest uppercase opacity-60 mt-1">
              Active Members
            </span>
          </div>
          <div className="text-left">
            <span className="block font-display font-bold text-sm md:text-sm tracking-wider text-current uppercase font-medium leading-normal">
              Virtual Sound &amp; Motion
            </span>
            <span className="block text-[10px] font-mono tracking-widest uppercase opacity-60 mt-2">
              Group Concept
            </span>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <button
            id="cta-listen-now"
            onClick={() => handleScrollTo('discography')}
            className="w-full sm:w-auto px-8 py-4 bg-brand hover:bg-brand-accent text-white font-mono text-xs tracking-widest uppercase rounded-full flex items-center justify-center gap-3 transition-colors duration-300 shadow-lg shadow-brand/10 group cursor-pointer"
          >
            <Play size={12} className="group-hover:scale-125 transition-transform" />
            Listen Now
          </button>
          <button
            id="cta-meet-members"
            onClick={() => handleScrollTo('members')}
            className={`w-full sm:w-auto px-8 py-4 border font-mono text-xs tracking-widest uppercase rounded-full flex items-center justify-center gap-3 transition-colors duration-300 group cursor-pointer ${
              isDarkMode
                ? 'border-neutral-800 text-white bg-neutral-900/30 hover:bg-neutral-900/80 hover:border-neutral-700'
                : 'border-neutral-200 text-black bg-neutral-50/50 hover:bg-neutral-100 hover:border-neutral-300'
            }`}
          >
            <Users size={12} />
            Meet The Members
            <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>

      {/* Decorative vertical down arrow scroll helper */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="text-[9px] font-mono tracking-[0.25em] uppercase opacity-40">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="w-[1px] h-10 bg-gradient-to-b from-brand to-transparent"
        />
      </div>
    </section>
  );
}
