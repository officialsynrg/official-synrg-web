import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Pause, Volume2, VolumeX, Maximize2, Minimize2, Music4, SkipForward, ChevronUp, ChevronDown } from 'lucide-react';
import { Song } from '../types';

interface MusicPlayerProps {
  isDarkMode: boolean;
  currentSong: Song;
  onNextSong?: () => void;
  isPlaying: boolean;
  setIsPlaying: (isPlaying: boolean) => void;
}

export default function MusicPlayer({ isDarkMode, currentSong, onNextSong, isPlaying, setIsPlaying }: MusicPlayerProps) {
  const [volume, setVolume] = useState(0.8);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isExpanded, setIsExpanded] = useState(true);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Sync state when song change
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = currentSong.audioUrl;
      audioRef.current.load();
      if (isPlaying) {
        audioRef.current.play().catch((err) => {
          console.log('Autoplay blocked:', err);
          setIsPlaying(false);
        });
      }
    }
  }, [currentSong]);

  // Sync state with isPlaying prop from external triggers (e.g. clicking "Play Track" in Discography)
  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch((err) => {
          console.log('Play failed:', err);
          setIsPlaying(false);
        });
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  // Volume synchronization
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleScrub = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    setCurrentTime(time);
    if (audioRef.current) {
      audioRef.current.currentTime = time;
    }
  };

  const handleAudioEnded = () => {
    if (onNextSong) {
      onNextSong();
    } else {
      setIsPlaying(false);
      setCurrentTime(0);
    }
  };

  const formatTime = (time: number) => {
    if (isNaN(time)) return '0:00';
    const mins = Math.floor(time / 60);
    const secs = Math.floor(time % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 max-w-sm w-[calc(100vw-3rem)] sm:w-80">
      {/* Real HTML5 Audio Element */}
      <audio
        ref={audioRef}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleAudioEnded}
      />

      <AnimatePresence mode="wait">
        {isExpanded ? (
          <motion.div
            key="expanded-player"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            className={`p-5 rounded-xl border shadow-2xl backdrop-blur-lg flex flex-col gap-4 relative overflow-hidden ${
              isDarkMode
                ? 'bg-neutral-950/90 border-neutral-800 text-white shadow-black/40'
                : 'bg-white/90 border-neutral-200 text-black shadow-neutral-200'
            }`}
          >
            {/* Absolute accent indicator */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-brand" />

            {/* Header controls */}
            <div className="flex items-center justify-between">
              <span className="text-[9px] font-mono tracking-widest text-brand uppercase font-bold flex items-center gap-1.5">
                <Music4 size={10} className={isPlaying ? 'animate-pulse' : ''} />
                Now Playing
              </span>

              <button
                id="minimize-player"
                onClick={() => setIsExpanded(false)}
                className={`p-1.5 rounded-full border transition-colors cursor-pointer ${
                  isDarkMode
                    ? 'border-neutral-800 hover:bg-neutral-900 text-neutral-400 hover:text-white'
                    : 'border-neutral-200 hover:bg-neutral-100 text-neutral-600 hover:text-black'
                }`}
                title="Minimize player"
              >
                <ChevronDown size={12} />
              </button>
            </div>

            {/* Song cover details */}
            <div className="flex items-center gap-4">
              <div className="relative w-14 h-14 rounded-md overflow-hidden border border-neutral-800/40 flex-shrink-0">
                <img
                  src={currentSong.coverUrl}
                  alt={currentSong.title}
                  referrerPolicy="no-referrer"
                  className={`w-full h-full object-cover ${isPlaying ? 'scale-105' : 'scale-100'} transition-transform duration-700`}
                />
                {/* Floating graphic lines overlay */}
                {isPlaying && (
                  <div className="absolute inset-0 bg-brand/10 flex items-center justify-center">
                    <div className="flex gap-0.5 items-end h-6">
                      <div className="w-[2px] h-3 bg-brand rounded-full animate-[bounce_0.8s_infinite_100ms]" />
                      <div className="w-[2px] h-5 bg-brand rounded-full animate-[bounce_0.8s_infinite_300ms]" />
                      <div className="w-[2px] h-4 bg-brand rounded-full animate-[bounce_0.8s_infinite_500ms]" />
                    </div>
                  </div>
                )}
              </div>
              <div className="overflow-hidden">
                <h4 className="font-display font-extrabold text-sm truncate leading-tight uppercase">
                  {currentSong.title.split('(')[0].trim()}
                </h4>
                <p className="text-[10px] font-mono tracking-wider opacity-60 mt-1 uppercase">
                  SYNRG &bull; {currentSong.type}
                </p>
              </div>
            </div>

            {/* Slider bar progress scrubbing */}
            <div className="flex flex-col gap-1.5">
              <input
                id="player-scrubber"
                type="range"
                min={0}
                max={duration || 100}
                value={currentTime}
                onChange={handleScrub}
                className="w-full h-1 bg-brand/20 accent-brand rounded-full cursor-pointer appearance-none outline-none focus:outline-none"
              />
              <div className="flex justify-between items-center text-[9px] font-mono opacity-50">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration)}</span>
              </div>
            </div>

            {/* Core player mechanics controllers */}
            <div className="flex items-center justify-between gap-4 mt-1">
              {/* Volume controller */}
              <div className="flex items-center gap-2 group/volume w-24">
                <button
                  id="toggle-mute"
                  onClick={() => setIsMuted(!isMuted)}
                  className="opacity-60 hover:opacity-100 transition-opacity cursor-pointer text-brand"
                >
                  {isMuted || volume === 0 ? <VolumeX size={14} /> : <Volume2 size={14} />}
                </button>
                <input
                  id="volume-slider"
                  type="range"
                  min={0}
                  max={1}
                  step={0.05}
                  value={isMuted ? 0 : volume}
                  onChange={(e) => {
                    setVolume(parseFloat(e.target.value));
                    setIsMuted(false);
                  }}
                  className="w-16 h-1 bg-neutral-800 accent-brand rounded-full cursor-pointer appearance-none outline-none group-hover/volume:bg-neutral-700 transition-colors"
                />
              </div>

              {/* Main Play/Pause */}
              <div className="flex items-center gap-3">
                <button
                  id="player-toggle-play"
                  onClick={handlePlayPause}
                  className="w-10 h-10 rounded-full bg-brand hover:bg-brand-accent text-white flex items-center justify-center shadow-lg hover:scale-105 transition-all cursor-pointer"
                >
                  {isPlaying ? <Pause size={14} fill="currentColor" /> : <Play size={14} fill="currentColor" className="ml-0.5" />}
                </button>

                {onNextSong && (
                  <button
                    id="player-skip-next"
                    onClick={onNextSong}
                    className={`p-2 rounded-full border transition-colors cursor-pointer ${
                      isDarkMode
                        ? 'border-neutral-800 hover:bg-neutral-900 text-neutral-400 hover:text-white'
                        : 'border-neutral-200 hover:bg-neutral-100 text-neutral-600 hover:text-black'
                    }`}
                    title="Skip to next track"
                  >
                    <SkipForward size={12} />
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.button
            key="minimized-player"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            onClick={() => setIsExpanded(true)}
            id="expand-player"
            className={`p-4 rounded-full border shadow-2xl flex items-center gap-3 cursor-pointer group select-none relative ${
              isDarkMode
                ? 'bg-neutral-950 border-neutral-800 text-white hover:border-brand/40 shadow-black/50'
                : 'bg-white border-neutral-200 text-black hover:border-brand/40 shadow-neutral-200'
            }`}
          >
            {/* Pulsing play indicators when playing */}
            {isPlaying && (
              <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-brand"></span>
              </span>
            )}

            <div className="w-8 h-8 rounded-full bg-brand text-white flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform flex-shrink-0">
              {isPlaying ? (
                <div className="flex gap-0.5 items-end h-3">
                  <div className="w-[1.5px] h-2 bg-white rounded-full animate-[bounce_0.8s_infinite_100ms]" />
                  <div className="w-[1.5px] h-3 bg-white rounded-full animate-[bounce_0.8s_infinite_300ms]" />
                  <div className="w-[1.5px] h-2.5 bg-white rounded-full animate-[bounce_0.8s_infinite_500ms]" />
                </div>
              ) : (
                <Music4 size={12} />
              )}
            </div>

            <div className="text-left max-w-28 overflow-hidden hidden sm:block">
              <span className="block text-[8px] font-mono uppercase opacity-55 tracking-wider leading-none">
                {isPlaying ? 'Playing' : 'Audio Player'}
              </span>
              <span className="block text-[10px] font-display font-black uppercase truncate mt-0.5 max-w-28">
                {currentSong.title.split('(')[0].trim()}
              </span>
            </div>

            <ChevronUp size={12} className="opacity-40 group-hover:opacity-100 transition-opacity ml-1" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
