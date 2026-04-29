'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'About',    href: '#about'    },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills',   href: '#skills'   },
  { label: 'Contact',  href: '#contact'  },
];

const GMAIL_URL =
  "https://mail.google.com/mail/?view=cm&fs=1&to=nikumbhunmesh05@gmail.com&su=Let's%20Connect&body=Hi%20Unmesh,%0A%0AI%20came%20across%20your%20portfolio...";

export default function Navbar() {
  const [scrolled,      setScrolled]     = useState(false);
  const [mobileOpen,    setMobileOpen]   = useState(false);
  const [activeSection, setActive]       = useState('');
  const [hireOpen,      setHireOpen]     = useState(false);
  const popoverRef = useRef(null);

  /* ── Scroll detection ──────────────────────────────────────────── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* ── Active section detection ──────────────────────────────────── */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' },
    );
    navLinks.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  /* ── Close popover on outside click ───────────────────────────── */
  useEffect(() => {
    if (!hireOpen) return;
    function handleOutside(e) {
      if (popoverRef.current && !popoverRef.current.contains(e.target)) {
        setHireOpen(false);
      }
    }
    document.addEventListener('mousedown', handleOutside);
    return () => document.removeEventListener('mousedown', handleOutside);
  }, [hireOpen]);

  const handleLink = (href) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0,   opacity: 1  }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`
          fixed top-0 left-0 right-0 z-50 transition-all duration-300
          ${scrolled
            ? 'bg-bg/80 backdrop-blur-xl border-b border-border'
            : 'bg-transparent'}
        `}
      >
        <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="font-display text-xl font-medium text-text hover:text-accent transition-colors"
          >
            UN<span className="text-accent">.</span>
          </button>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map(({ label, href }) => {
              const id = href.replace('#', '');
              return (
                <li key={href}>
                  <button
                    onClick={() => handleLink(href)}
                    className={`
                      font-mono text-xs tracking-widest uppercase transition-colors relative
                      ${activeSection === id
                        ? 'text-accent'
                        : 'text-muted hover:text-text'}
                    `}
                  >
                    {label}
                    {activeSection === id && (
                      <motion.span
                        layoutId="nav-dot"
                        className="absolute -bottom-1 left-0 right-0 h-px bg-accent"
                      />
                    )}
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Desktop — Hire Me with popover */}
          <div ref={popoverRef} className="hidden md:block relative">
            <button
              onClick={() => setHireOpen((p) => !p)}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono tracking-widest uppercase border border-accent/40 text-accent hover:bg-accent hover:text-bg transition-all duration-200 rounded-sm"
            >
              Hire Me
            </button>

            {/* Popover */}
            <div
              className={`
                absolute right-0 top-[calc(100%+10px)] z-50
                w-52 rounded-xl border border-white/10 bg-[#111] shadow-xl
                transition-all duration-200 origin-top-right
                ${hireOpen
                  ? 'opacity-100 scale-100 pointer-events-auto'
                  : 'opacity-0 scale-95 pointer-events-none'}
              `}
            >
              <div className="p-1.5 flex flex-col gap-0.5">
                {/* Email Me */}
                <a
                  href={GMAIL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setHireOpen(false)}
                  className="flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-sm font-ui text-white/80 hover:text-white hover:bg-white/[0.06] transition-colors duration-150"
                >
                  <span className="text-base">✉︎</span>
                  Email Me
                </a>

                {/* Call Me */}
                <a
                  href="tel:+919834909075"
                  onClick={() => setHireOpen(false)}
                  className="flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-sm font-ui text-white/80 hover:text-white hover:bg-white/[0.06] transition-colors duration-150"
                >
                  <span className="text-base">📞</span>
                  Call Me
                </a>
              </div>
            </div>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen((p) => !p)}
            className="md:hidden w-8 h-8 flex flex-col justify-center gap-[5px] group"
            aria-label="Toggle menu"
          >
            <span className={`block h-px bg-text transition-all duration-200 ${mobileOpen ? 'w-6 translate-y-[6px] rotate-45' : 'w-6'}`} />
            <span className={`block h-px bg-text transition-all duration-200 ${mobileOpen ? 'opacity-0 w-0'              : 'w-4'}`} />
            <span className={`block h-px bg-text transition-all duration-200 ${mobileOpen ? 'w-6 -translate-y-[6px] -rotate-45' : 'w-6'}`} />
          </button>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1,  y: 0    }}
            exit={{    opacity: 0,  y: -10  }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 bg-bg-elevated border-b border-border p-6 flex flex-col gap-6 md:hidden"
          >
            {navLinks.map(({ label, href }) => (
              <button
                key={href}
                onClick={() => handleLink(href)}
                className="font-mono text-sm tracking-widest uppercase text-muted hover:text-accent transition-colors text-left"
              >
                {label}
              </button>
            ))}

            {/* Mobile Hire Me options — always expanded, no popover needed */}
            <div className="flex flex-col gap-2 pt-2 border-t border-border">
              <p className="font-mono text-[10px] tracking-widest uppercase text-tertiary mb-1">
                Hire Me
              </p>
              <a
                href={GMAIL_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-3 text-sm font-ui text-muted hover:text-accent transition-colors"
              >
                <span>✉︎</span> Email Me
              </a>
              <a
                href="tel:+919834909075"
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-3 text-sm font-ui text-muted hover:text-accent transition-colors"
              >
                <span>📞</span> Call Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
