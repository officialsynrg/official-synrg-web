import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, Music } from 'lucide-react';

interface NavbarProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
  activeSection: string;
}

export default function Navbar({ isDarkMode, toggleTheme, activeSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'members', label: 'Members' },
    { id: 'discography', label: 'Discography' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'story', label: 'Story' },
    { id: 'news', label: 'News' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleScrollTo = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav
      id="main-nav"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${
        scrolled
          ? isDarkMode
            ? 'bg-black/95 backdrop-blur-md border-neutral-900 py-3'
            : 'bg-white/95 backdrop-blur-md border-neutral-100 py-3'
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo / Brand */}
        <button
          id="logo-button"
          onClick={() => handleScrollTo('home')}
          className="flex items-center gap-3 group text-left cursor-pointer"
        >
          <div className="relative flex items-center justify-center w-9 h-9 border border-brand bg-transparent overflow-hidden rounded-xs">
            <span className="font-display font-black text-lg tracking-tighter text-brand group-hover:scale-110 transition-transform duration-300">
              S
            </span>
            <div className="absolute inset-0 bg-brand/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </div>
          <div>
            <span className="block font-display font-black text-2xl tracking-tighter italic leading-none text-brand">
              SYNRG.
            </span>
            <span className="block text-[8px] font-mono tracking-[0.3em] uppercase opacity-50 mt-1">
              OFFICIAL WEBSITE
            </span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          <div className="flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => handleScrollTo(item.id)}
                  className={`px-4 py-2 text-xs font-mono tracking-widest uppercase transition-all duration-300 relative cursor-pointer ${
                    isActive
                      ? isDarkMode
                        ? 'text-brand font-medium'
                        : 'text-brand font-medium'
                      : isDarkMode
                      ? 'text-neutral-400 hover:text-white'
                      : 'text-neutral-600 hover:text-black'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-4 right-4 h-[1px] bg-brand" />
                  )}
                </button>
              );
            })}
          </div>

          <div className="h-4 w-[1px] bg-neutral-800" />

          {/* Theme Toggle Button */}
          <button
            id="theme-toggle"
            onClick={toggleTheme}
            className={`p-2 rounded-full border transition-all duration-300 cursor-pointer ${
              isDarkMode
                ? 'border-neutral-800 bg-neutral-900/50 hover:bg-neutral-800 text-brand'
                : 'border-neutral-200 bg-neutral-100 hover:bg-neutral-200 text-brand'
            }`}
            aria-label="Toggle Theme"
          >
            {isDarkMode ? <Sun size={15} /> : <Moon size={15} />}
          </button>
        </div>

        {/* Mobile Navigation controls */}
        <div className="flex items-center gap-4 lg:hidden">
          {/* Theme Toggle for Mobile */}
          <button
            id="theme-toggle-mobile"
            onClick={toggleTheme}
            className={`p-2 rounded-full border transition-all duration-300 cursor-pointer ${
              isDarkMode
                ? 'border-neutral-800 bg-neutral-900/50 text-brand hover:bg-neutral-800'
                : 'border-neutral-200 bg-neutral-100 text-brand hover:bg-neutral-200'
            }`}
          >
            {isDarkMode ? <Sun size={14} /> : <Moon size={14} />}
          </button>

          <button
            id="mobile-menu-toggle"
            onClick={() => setIsOpen(!isOpen)}
            className={`p-2 rounded-md border transition-all cursor-pointer ${
              isDarkMode
                ? 'border-neutral-800 text-white hover:bg-neutral-900'
                : 'border-neutral-200 text-black hover:bg-neutral-100'
            }`}
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        id="mobile-drawer"
        className={`fixed inset-y-0 right-0 w-full sm:w-80 z-40 lg:hidden transform transition-transform duration-500 ease-out border-l flex flex-col justify-between ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } ${
          isDarkMode
            ? 'bg-black/98 border-neutral-900 text-white'
            : 'bg-white/98 border-neutral-200 text-black'
        }`}
        style={{ top: '60px', height: 'calc(100vh - 60px)' }}
      >
        <div className="px-6 py-8 flex flex-col gap-2 overflow-y-auto">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                id={`nav-link-mobile-${item.id}`}
                onClick={() => handleScrollTo(item.id)}
                className={`w-full text-left py-4 text-sm font-mono tracking-widest uppercase border-b transition-colors cursor-pointer ${
                  isActive
                    ? isDarkMode
                      ? 'text-brand border-neutral-800 pl-2'
                      : 'text-brand border-neutral-100 pl-2'
                    : isDarkMode
                    ? 'text-neutral-400 border-neutral-900 hover:text-white'
                    : 'text-neutral-600 border-neutral-100 hover:text-black'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        <div
          className={`p-6 border-t font-mono text-[10px] tracking-wider text-center opacity-50 ${
            isDarkMode ? 'border-neutral-900' : 'border-neutral-100'
          }`}
        >
          SYNRG OFFICIAL PORTAL &copy; 2026
        </div>
      </div>
    </nav>
  );
}
