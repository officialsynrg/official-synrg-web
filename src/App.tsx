/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Members from './components/Members';
import Discography from './components/Discography';
import Gallery from './components/Gallery';
import About from './components/About';
import News from './components/News';
import Contact from './components/Contact';
import MusicPlayer from './components/MusicPlayer';
import { SONGS } from './data';
import { Song } from './types';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [currentSong, setCurrentSong] = useState<Song>(SONGS[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Toggle theme class on document level
  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  // IntersectionObserver to highlight active navigation link automatically
  useEffect(() => {
    const sections = ['home', 'members', 'discography', 'gallery', 'story', 'news', 'contact'];
    
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -60% 0px', // trigger near center
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  // Handle playing song from any trigger
  const handlePlaySong = (song: Song) => {
    if (currentSong.id === song.id) {
      setIsPlaying((prev) => !prev);
    } else {
      setCurrentSong(song);
      setIsPlaying(true);
    }
  };

  // Skip to next song in the player list
  const handleNextSong = () => {
    const currentIndex = SONGS.findIndex((s) => s.id === currentSong.id);
    const nextIndex = (currentIndex + 1) % SONGS.length;
    setCurrentSong(SONGS[nextIndex]);
    setIsPlaying(true);
  };

  return (
    <div
      className={`min-h-screen font-sans transition-colors duration-1000 overflow-x-hidden ${
        isDarkMode
          ? 'bg-neutral-950 text-neutral-50 selection:bg-brand selection:text-white'
          : 'bg-white text-neutral-950 selection:bg-brand selection:text-white'
      }`}
    >
      {/* Dynamic Navigation */}
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} activeSection={activeSection} />

      {/* Sections content panels */}
      <main className="relative">
        {/* Dynamic section lines/borders separating sections elegantly */}
        <Hero isDarkMode={isDarkMode} />
        
        <div className={`h-[1px] w-full max-w-7xl mx-auto ${isDarkMode ? 'bg-neutral-900' : 'bg-neutral-100'}`} />
        <Members isDarkMode={isDarkMode} />
        
        <div className={`h-[1px] w-full max-w-7xl mx-auto ${isDarkMode ? 'bg-neutral-900' : 'bg-neutral-100'}`} />
        <Discography
          isDarkMode={isDarkMode}
          onPlaySong={handlePlaySong}
          currentPlayingSong={currentSong}
          isPlaying={isPlaying}
        />
        
        <div className={`h-[1px] w-full max-w-7xl mx-auto ${isDarkMode ? 'bg-neutral-900' : 'bg-neutral-100'}`} />
        <Gallery isDarkMode={isDarkMode} />
        
        <div className={`h-[1px] w-full max-w-7xl mx-auto ${isDarkMode ? 'bg-neutral-900' : 'bg-neutral-100'}`} />
        <About isDarkMode={isDarkMode} />
        
        <div className={`h-[1px] w-full max-w-7xl mx-auto ${isDarkMode ? 'bg-neutral-900' : 'bg-neutral-100'}`} />
        <News isDarkMode={isDarkMode} />
        
        <div className={`h-[1px] w-full max-w-7xl mx-auto ${isDarkMode ? 'bg-neutral-900' : 'bg-neutral-100'}`} />
        <Contact isDarkMode={isDarkMode} />
      </main>

      {/* Footer */}
      <footer
        className={`py-12 px-6 md:px-12 border-t text-center font-mono text-[10px] tracking-[0.2em] uppercase ${
          isDarkMode ? 'bg-black border-neutral-900 text-neutral-500' : 'bg-neutral-50 border-neutral-100 text-neutral-400'
        }`}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <span>&copy; 2026 SYNRG. ALL RIGHTS RESERVED.</span>
          <span className="flex items-center gap-2">
            DESIGNED &amp; ENGINEERED FOR HIGH AUDITORY FIDELITY
          </span>
        </div>
      </footer>

      {/* Persistent floating media deck */}
      <MusicPlayer
        isDarkMode={isDarkMode}
        currentSong={currentSong}
        onNextSong={handleNextSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />
    </div>
  );
}

