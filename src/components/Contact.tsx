import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Globe, Send, CheckCircle, Instagram, Twitter, Youtube, ArrowRight } from 'lucide-react';

interface ContactProps {
  isDarkMode: boolean;
}

export default function Contact({ isDarkMode }: ContactProps) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    // Simulate premium transmission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  const socialLinks = [
    { name: 'Instagram', icon: <Instagram size={18} />, url: 'https://instagram.com/officialsynrg' },
    { name: 'YouTube', icon: <Youtube size={18} />, url: 'https://youtube.com/@officialsynrg' },
    { name: 'TikTok', icon: <Globe size={18} />, url: 'https://tiktok.com/@officialsynrg' }
  ];

  return (
    <section id="contact" className="py-24 px-6 md:px-12 relative overflow-hidden border-t border-neutral-900/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Direct channels and social grid (5/12) */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <div>
              <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-brand font-semibold block mb-2">
                Synchronization Node
              </span>
              <h2 className="text-4xl md:text-5xl font-display font-black tracking-tight uppercase mb-8">
                Connect
              </h2>

              <p className={`text-sm leading-relaxed mb-12 ${isDarkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
                For inquiries regarding global bookings, high-fashion editorials, live exhibitions, and collaborative synapsis, reach out directly through our channels.
              </p>

              {/* Administrative Channels */}
              <div className="flex flex-col gap-6 mb-12">
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-md border ${
                    isDarkMode ? 'border-neutral-800 bg-neutral-900/30' : 'border-neutral-200 bg-neutral-100/50'
                  }`}>
                    <Mail size={16} className="text-brand" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-mono tracking-widest uppercase opacity-40 mb-1">
                      Press &amp; Management
                    </span>
                    <a href="mailto:officialsynrg@gmail.com" className="font-display font-bold text-sm hover:text-brand transition-colors">
                      officialsynrg@gmail.com
                    </a>
                  </div>
                </div>

              </div>
            </div>

            {/* Social Accounts list */}
            <div>
              <h3 className="text-xs font-mono tracking-widest uppercase opacity-40 mb-4">
                Global Feed
              </h3>
              <div className="flex gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3.5 rounded-full border transition-all duration-300 flex items-center justify-center text-brand cursor-pointer hover:scale-105 ${
                      isDarkMode
                        ? 'border-neutral-800 bg-neutral-900/30 hover:bg-neutral-800 hover:border-neutral-700'
                        : 'border-neutral-200 bg-neutral-100 hover:bg-neutral-200 hover:border-neutral-300'
                    }`}
                    aria-label={link.name}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Contact form box (7/12) */}
          <div className="lg:col-span-7">
            <div className={`p-8 md:p-12 border rounded-3xl relative overflow-hidden ${
              isDarkMode ? 'bg-neutral-950/20 border-neutral-900' : 'bg-neutral-50/40 border-neutral-200 shadow-sm'
            }`}>
              
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="contact-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-6"
                  >
                    <h3 className="text-xl font-display font-black uppercase mb-2">
                      Send Transmission
                    </h3>

                    {/* Name Input */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="name" className="text-[10px] font-mono tracking-widest uppercase opacity-50">
                        Full Name / Agency
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={`w-full px-4 py-3 rounded border text-sm font-sans focus:outline-none focus:border-brand transition-colors bg-transparent ${
                          isDarkMode
                            ? 'border-neutral-800 text-white placeholder-neutral-600'
                            : 'border-neutral-200 text-black placeholder-neutral-400'
                        }`}
                      />
                    </div>

                    {/* Email Input */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="email" className="text-[10px] font-mono tracking-widest uppercase opacity-50">
                        Email Address
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        placeholder="john@agency.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full px-4 py-3 rounded border text-sm font-sans focus:outline-none focus:border-brand transition-colors bg-transparent ${
                          isDarkMode
                            ? 'border-neutral-800 text-white placeholder-neutral-600'
                            : 'border-neutral-200 text-black placeholder-neutral-400'
                        }`}
                      />
                    </div>

                    {/* Message Input */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="message" className="text-[10px] font-mono tracking-widest uppercase opacity-50">
                        Signal Content / Inquiries
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={5}
                        placeholder="Detail your request or conceptual proposal..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className={`w-full px-4 py-3 rounded border text-sm font-sans focus:outline-none focus:border-brand transition-colors resize-none bg-transparent ${
                          isDarkMode
                            ? 'border-neutral-800 text-white placeholder-neutral-600'
                            : 'border-neutral-200 text-black placeholder-neutral-400'
                        }`}
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      id="submit-transmission"
                      type="submit"
                      disabled={isSubmitting}
                      className="mt-4 px-8 py-4 bg-brand hover:bg-brand-accent disabled:opacity-50 text-white font-mono text-xs tracking-widest uppercase rounded-full flex items-center justify-center gap-3 transition-all cursor-pointer group"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                          Modulating Wave...
                        </>
                      ) : (
                        <>
                          Transmit Signal
                          <Send size={11} className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-screen"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center text-center py-12"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                      className="p-4 bg-brand/10 border border-brand/30 text-brand rounded-full mb-6"
                    >
                      <CheckCircle size={36} />
                    </motion.div>

                    <h3 className="text-2xl font-display font-black uppercase mb-4 tracking-tight">
                      Signal Transmitted
                    </h3>

                    <p className={`text-sm leading-relaxed max-w-sm mb-8 ${isDarkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
                      Thank you, <span className="font-semibold text-brand">{formData.name}</span>. Your inquiry has been routed directly to SYNRG admin hub. A representative will contact you shortly at <span className="underline">{formData.email}</span>.
                    </p>

                    <button
                      id="reset-form"
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({ name: '', email: '', message: '' });
                      }}
                      className={`px-6 py-2 border rounded-full font-mono text-[10px] tracking-widest uppercase flex items-center gap-2 cursor-pointer ${
                        isDarkMode
                          ? 'border-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-900'
                          : 'border-neutral-200 text-neutral-600 hover:text-black hover:bg-neutral-100'
                      }`}
                    >
                      Send New Signal
                      <ArrowRight size={10} />
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
