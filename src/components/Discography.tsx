import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, FileText, Calendar, Music4, ExternalLink, ArrowRight, X } from 'lucide-react';
import { Song } from '../types';
import { SONGS } from '../data';

interface DiscographyProps {
  isDarkMode: boolean;
  onPlaySong: (song: Song) => void;
  currentPlayingSong: Song | null;
  isPlaying: boolean;
}

export default function Discography({ isDarkMode, onPlaySong, currentPlayingSong, isPlaying }: DiscographyProps) {
  const [selectedLyricsSong, setSelectedLyricsSong] = useState<Song | null>(null);

  const videoPerformances = [
    {
      id: 'perf-until-i-found-you',
      title: "SYNRG - X (FULL COVER, IMPROVISED) 《 REBELLE'S COVER EVENT : THE REBELS 》",
      platform: 'YouTube',
      thumbnail: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&q=80&w=600',
      duration: '3:05',
      embedUrl: 'https://www.youtube.com/embed/UGDsxuU1Qm4'
    }
  ];

  const platforms = [
    { name: 'Spotify', url: 'https://spotify.com' },
    { name: 'Apple Music', url: 'https://music.apple.com' },
    { name: 'YouTube Music', url: 'https://music.youtube.com' },
    { name: 'SoundCloud', url: 'https://soundcloud.com' }
  ];

  return (
    <section id="discography" className="py-24 px-6 md:px-12 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-brand font-semibold block mb-2">
              Symphonic Architecture
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-black tracking-tight uppercase">
              Discography &amp; Media
            </h2>
          </div>
          <p className={`max-w-md text-sm leading-relaxed ${isDarkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
            Explore our architectural soundscapes. Click play to feed any track directly to the global master audio controller, or read the narrative lyrics.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Discography List (7/12) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <h3 className="text-xs font-mono tracking-widest uppercase opacity-40 mb-2">
              Official Releases
            </h3>

            {SONGS.map((song) => {
              const isActive = currentPlayingSong?.id === song.id;
              return (
                <div
                  key={song.id}
                  className={`p-6 border rounded-2xl transition-all duration-500 flex flex-col sm:flex-row gap-6 items-center ${
                    isActive
                      ? isDarkMode
                        ? 'border-brand bg-brand/5 shadow-[0_0_20px_rgba(217,119,6,0.1)]'
                        : 'border-brand bg-brand/5 shadow-[0_0_20px_rgba(217,119,6,0.05)]'
                      : isDarkMode
                      ? 'border-neutral-900 bg-neutral-950/20 hover:border-neutral-800 hover:bg-neutral-950/40'
                      : 'border-neutral-200 bg-neutral-50/30 hover:border-neutral-300 hover:bg-neutral-100/50 shadow-sm'
                  }`}
                >
                  {/* Cover Art Container */}
                  <div className="w-24 h-24 rounded-md overflow-hidden relative flex-shrink-0 group border border-neutral-800">
                    <img
                      src={song.coverUrl}
                      alt={song.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Hover Play Button */}
                    <button
                      id={`discography-play-overlay-${song.id}`}
                      onClick={() => onPlaySong(song)}
                      className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer text-brand"
                    >
                      <Play size={20} fill="currentColor" />
                    </button>
                  </div>

                  {/* Info Column */}
                  <div className="flex-grow text-center sm:text-left">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2 justify-center sm:justify-start">
                      <span className="px-2 py-0.5 text-[8px] font-mono tracking-widest uppercase bg-brand/10 text-brand border border-brand/20 rounded-sm self-center sm:self-auto">
                        {song.type}
                      </span>
                      <span className="text-[10px] font-mono opacity-50 flex items-center gap-1 justify-center sm:justify-start">
                        <Calendar size={10} />
                        {song.releaseDate}
                      </span>
                    </div>

                    <h4 className="text-xl font-display font-extrabold tracking-tight mb-2">
                      {song.title}
                    </h4>

                    <p className={`text-xs leading-relaxed mb-4 line-clamp-2 ${isDarkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
                      {song.description}
                    </p>

                    {/* Action buttons */}
                    <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4">
                      <button
                        id={`discography-play-${song.id}`}
                        onClick={() => onPlaySong(song)}
                        className={`px-4 py-2 rounded-full text-[10px] font-mono tracking-widest uppercase flex items-center gap-2 transition-all cursor-pointer ${
                          isActive && isPlaying
                            ? 'bg-brand text-white font-semibold'
                            : isDarkMode
                            ? 'bg-neutral-900 border border-neutral-800 text-white hover:bg-neutral-800 hover:border-neutral-700'
                            : 'bg-white border border-neutral-200 text-black hover:bg-neutral-100 hover:border-neutral-300'
                        }`}
                      >
                        <Play size={10} fill={(isActive && isPlaying) ? 'currentColor' : 'none'} />
                        {isActive && isPlaying ? 'Now Playing' : 'Play Track'}
                      </button>

                      <button
                        id={`discography-lyrics-${song.id}`}
                        onClick={() => setSelectedLyricsSong(song)}
                        className={`px-4 py-2 border rounded-full text-[10px] font-mono tracking-widest uppercase flex items-center gap-2 transition-colors cursor-pointer ${
                          isDarkMode
                            ? 'border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700'
                            : 'border-neutral-200 text-neutral-600 hover:text-black hover:border-neutral-300'
                        }`}
                      >
                        <FileText size={10} />
                        Lyrics
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Embedded content & platforms (5/12) */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            {/* Stream Links */}
            <div>
              <h3 className="text-xs font-mono tracking-widest uppercase opacity-40 mb-4">
                Stream Platforms
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {platforms.map((platform) => (
                  <a
                    key={platform.name}
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-4 border rounded-md text-xs font-mono tracking-wider flex items-center justify-between transition-all duration-300 group ${
                      isDarkMode
                        ? 'border-neutral-900 bg-neutral-950/20 hover:border-neutral-800 hover:bg-neutral-950/50 hover:text-white'
                        : 'border-neutral-200 bg-neutral-50/40 hover:border-neutral-300 hover:bg-neutral-100 hover:text-black'
                    }`}
                  >
                    <span>{platform.name}</span>
                    <ExternalLink size={12} className="opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all text-brand" />
                  </a>
                ))}
              </div>
            </div>

            {/* Video Embedded section */}
            <div>
              <h3 className="text-xs font-mono tracking-widest uppercase opacity-40 mb-4">
                Live Sessions &amp; Visuals
              </h3>
              <div className="flex flex-col gap-4">
                {videoPerformances.map((perf) => (
                  <div
                    key={perf.id}
                    className={`p-4 border rounded-md transition-all duration-300 ${
                      isDarkMode ? 'border-neutral-900 bg-neutral-950/10' : 'border-neutral-200 bg-neutral-50/20'
                    }`}
                  >
                    <div className="relative aspect-video rounded overflow-hidden mb-3 border border-neutral-800 bg-neutral-950">
                      {/* Embedded YouTube Player */}
                      <iframe
                        src={perf.embedUrl}
                        title={perf.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full border-0 absolute inset-0"
                      />
                    </div>
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <span className="text-[9px] font-mono tracking-wider text-brand uppercase font-semibold">
                          {perf.platform} &bull; {perf.duration}
                        </span>
                        <h5 className="font-display font-bold text-xs mt-1">
                          {perf.title}
                        </h5>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lyrics Modal */}
      <AnimatePresence>
        {selectedLyricsSong && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedLyricsSong(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
            />

            {/* Lyric Content box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className={`relative w-full max-w-lg rounded-xl border z-10 p-8 shadow-2xl max-h-[80vh] flex flex-col justify-between ${
                isDarkMode
                  ? 'bg-neutral-950 border-neutral-900 text-white'
                  : 'bg-white border-neutral-200 text-black'
              }`}
            >
              <button
                id="close-lyrics-modal"
                onClick={() => setSelectedLyricsSong(null)}
                className={`absolute top-6 right-6 p-2 rounded-full border transition-colors cursor-pointer ${
                  isDarkMode
                    ? 'border-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-900'
                    : 'border-neutral-200 text-neutral-600 hover:text-black hover:bg-neutral-100'
                }`}
              >
                <X size={14} />
              </button>

              <div className="overflow-y-auto pr-2 mt-4">
                <span className="text-[10px] font-mono tracking-widest text-brand uppercase font-bold block mb-1">
                  Lyrics Sheet &bull; {selectedLyricsSong.type}
                </span>
                <h4 className="text-2xl font-display font-black uppercase mb-6 tracking-tight">
                  {selectedLyricsSong.title}
                </h4>

                <pre className={`font-mono text-xs leading-relaxed whitespace-pre-wrap ${
                  isDarkMode ? 'text-neutral-300' : 'text-neutral-700'
                }`}>
                  {selectedLyricsSong.lyrics}
                </pre>
              </div>

              <div className="border-t border-neutral-800/40 pt-6 mt-6 flex items-center justify-between">
                <span className="text-[9px] font-mono opacity-40 uppercase">
                  Duration: {selectedLyricsSong.duration}
                </span>
                <button
                  id={`play-from-lyrics-${selectedLyricsSong.id}`}
                  onClick={() => {
                    onPlaySong(selectedLyricsSong);
                    setSelectedLyricsSong(null);
                  }}
                  className="px-4 py-2 bg-brand hover:bg-brand-accent text-white font-mono text-[9px] tracking-widest uppercase rounded-sm flex items-center gap-2 cursor-pointer"
                >
                  <Play size={9} fill="currentColor" />
                  Play This Track
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
