import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Sparkles, AudioLines, Award, Compass, Heart } from 'lucide-react';
import { Member } from '../types';
import { MEMBERS } from '../data';

interface MembersProps {
  isDarkMode: boolean;
}

export default function Members({ isDarkMode }: MembersProps) {
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="members" className="py-24 px-6 md:px-12 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-brand font-semibold block mb-2">
              Collective Pillars
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-black tracking-tight uppercase">
              Meet the Members
            </h2>
          </div>
          <p className={`max-w-md text-sm leading-relaxed ${isDarkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
            Three distinct creative streams, locked into perfect physical and sonic resonance. Click any card to dive deep into their individual profiles.
          </p>
        </div>

        {/* Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {MEMBERS.map((member, index) => {
            const isHovered = hoveredId === member.id;
            return (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                onMouseEnter={() => setHoveredId(member.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`relative group h-[500px] rounded-2xl overflow-hidden border transition-all duration-500 flex flex-col justify-end cursor-pointer ${
                  isDarkMode
                    ? 'border-neutral-900 bg-neutral-950/40 hover:border-brand/40 hover:scale-[1.01]'
                    : 'border-neutral-200 bg-neutral-50/50 hover:border-brand/40 shadow-sm hover:scale-[1.01]'
                }`}
                onClick={() => setSelectedMember(member)}
              >
                {/* Background Image Portrait */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={member.imageUrl}
                    alt={member.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                  />
                  {/* Absolute overlays for premium atmospheric effect */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500`}
                  />
                  <div
                    className="absolute inset-0 bg-brand/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                </div>

                {/* Member Brief Info Container - Shifts up elegantly on hover */}
                <div className="relative z-10 p-8 flex flex-col justify-end h-full w-full">
                  <div className="transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    {/* Stage Name / Role */}
                    <span className="text-[10px] font-mono tracking-widest text-brand uppercase font-semibold block mb-1">
                      {member.role.split('&')[0].trim()}
                    </span>
                    <h3 className="text-3xl font-display font-extrabold tracking-tight text-white mb-2">
                      {member.name}
                    </h3>

                    {/* Personality Pill Tags (Hidden, revealed on hover) */}
                    <div className="flex flex-wrap gap-1.5 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75">
                      {member.personality.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 text-[8px] font-mono tracking-widest uppercase bg-brand/20 text-brand border border-brand/30 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                      <span className="px-2 py-0.5 text-[8px] font-mono tracking-widest uppercase bg-white/10 text-white rounded-full">
                        {member.mbti}
                      </span>
                    </div>

                    {/* Bio Snippet (Hidden, revealed on hover) */}
                    <p className="text-xs text-neutral-300 line-clamp-2 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 mb-6">
                      {member.bio}
                    </p>

                    {/* CTA link */}
                    <button
                      id={`view-member-${member.id}`}
                      className="text-[10px] font-mono tracking-widest text-white uppercase flex items-center gap-2 group/btn cursor-pointer py-1 relative self-start"
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        View Detail Page
                        <Compass size={11} className="group-hover/btn:rotate-45 transition-transform" />
                      </span>
                      <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-brand group-hover/btn:w-full transition-all duration-300" />
                    </button>
                  </div>
                </div>

                {/* Decorative index marker */}
                <span className="absolute top-6 right-6 font-mono text-[11px] tracking-widest text-white/30 group-hover:text-brand transition-colors duration-300">
                  0{index + 1}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Member Profile Detail Modal Page */}
      <AnimatePresence>
        {selectedMember && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Dark Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMember(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className={`relative w-full max-w-4xl rounded-xl overflow-hidden border z-10 my-8 shadow-2xl flex flex-col md:flex-row ${
                isDarkMode
                  ? 'bg-neutral-950 border-neutral-900 text-white'
                  : 'bg-white border-neutral-200 text-black'
              }`}
            >
              {/* Image Column */}
              <div className="md:w-5/12 h-[350px] md:h-auto min-h-[400px] relative">
                <img
                  src={selectedMember.imageUrl}
                  alt={selectedMember.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent md:bg-gradient-to-r md:from-transparent md:to-black/30" />

                {/* Absolute Quote badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 bg-black/40 backdrop-blur-md border border-white/10 rounded-sm">
                  <p className="text-xs text-brand font-mono tracking-widest uppercase mb-1">
                    Philosophic Creed
                  </p>
                  <p className="font-serif italic text-white text-xs leading-relaxed">
                    &ldquo;{selectedMember.quote}&rdquo;
                  </p>
                </div>
              </div>

              {/* Content Column */}
              <div className="md:w-7/12 p-8 md:p-12 flex flex-col justify-between overflow-y-auto max-h-[90vh] md:max-h-none">
                {/* Close Button */}
                <button
                  id="close-member-modal"
                  onClick={() => setSelectedMember(null)}
                  className={`absolute top-6 right-6 p-2 rounded-full border transition-colors cursor-pointer ${
                    isDarkMode
                      ? 'border-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-900'
                      : 'border-neutral-200 text-neutral-600 hover:text-black hover:bg-neutral-100'
                  }`}
                >
                  <X size={16} />
                </button>

                <div>
                  {/* Role Header */}
                  <span className="text-[10px] font-mono tracking-[0.25em] text-brand uppercase font-bold block mb-2">
                    {selectedMember.role}
                  </span>
                  <h3 className="text-4xl font-display font-black tracking-tight uppercase mb-4">
                    {selectedMember.name}
                  </h3>

                  {/* Personality Tag badging */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {selectedMember.personality.map((tag) => (
                      <span
                        key={tag}
                        className={`px-3 py-1 text-[9px] font-mono tracking-widest uppercase rounded-full flex items-center gap-1.5 border ${
                          isDarkMode
                            ? 'bg-neutral-900 border-neutral-800 text-brand'
                            : 'bg-neutral-100 border-neutral-200 text-brand'
                        }`}
                      >
                        <Sparkles size={10} />
                        {tag}
                      </span>
                    ))}
                    <span
                      className={`px-3 py-1 text-[9px] font-mono tracking-widest uppercase rounded-full flex items-center gap-1.5 border ${
                        isDarkMode
                          ? 'bg-neutral-900 border-neutral-800 text-white'
                          : 'bg-neutral-100 border-neutral-200 text-black'
                      }`}
                    >
                      MBTI: {selectedMember.mbti}
                    </span>
                  </div>

                  {/* Detailed Biography */}
                  <p className={`text-sm leading-relaxed mb-8 ${isDarkMode ? 'text-neutral-300' : 'text-neutral-700'}`}>
                    {selectedMember.bio}
                  </p>

                  {/* Spec sheets */}
                  <div className={`grid grid-cols-2 gap-6 p-6 rounded-lg mb-8 border ${
                    isDarkMode ? 'bg-neutral-900/40 border-neutral-900' : 'bg-neutral-50 border-neutral-200'
                  }`}>
                    <div>
                      <span className="block text-[10px] font-mono tracking-wider uppercase opacity-50 mb-1">
                        Voice Register
                      </span>
                      <span className="font-display font-semibold text-xs flex items-center gap-2">
                        <AudioLines size={12} className="text-brand" />
                        {selectedMember.voiceType}
                      </span>
                    </div>
                    <div>
                      <span className="block text-[10px] font-mono tracking-wider uppercase opacity-50 mb-1">
                        Birth Date
                      </span>
                      <span className="font-display font-semibold text-xs">
                        {selectedMember.birthdate}
                      </span>
                    </div>
                    <div className="col-span-2">
                      <span className="block text-[10px] font-mono tracking-wider uppercase opacity-50 mb-1">
                        Preferred Aesthetic
                      </span>
                      <span className="font-display text-xs text-brand font-medium">
                        {selectedMember.aesthetic}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Footer Credits */}
                <div className="flex items-center justify-between border-t border-neutral-800 pt-6 mt-4">
                  <span className="text-[10px] font-mono tracking-wider opacity-40 uppercase">
                    SYNRG OFFICIAL DOSSIER
                  </span>
                  <span className="text-[10px] font-mono tracking-widest text-brand uppercase font-semibold">
                    STATUS: SYNCED
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
