'use client';

import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { fadeUp, fadeIn, viewport } from '../lib/motion';

/* Dynamic import — isolates Three.js from SSR entirely */
const Hero3D = dynamic(() => import('./Hero3D'), {
  ssr: false,
  loading: () => <HeroStaticBg />,
});

/* Static fallback (CSS-only) shown during 3D load or if JS disabled */
function HeroStaticBg() {
  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(rgba(201,169,110,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(201,169,110,0.06) 1px, transparent 1px)
          `,
          backgroundSize: '64px 64px',
        }}
      />
      {/* Radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10"
        style={{ background: 'radial-gradient(circle, #c9a96e 0%, transparent 70%)' }}
      />
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* 3D background */}
      <Hero3D />

      {/* Vignette overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 30%, #09090b 90%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32">
        {/* Label */}
        <motion.p
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          custom={0.1}
          className="section-label mb-8"
        >
          ◈ &nbsp;Available for work
        </motion.p>

        {/* Name */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.2}
          className="font-display font-light text-6xl md:text-8xl lg:text-[7rem] leading-none tracking-tight mb-4"
        >
          Unmesh
          <br />
          <span className="text-gradient italic">Nikumbh</span>
        </motion.h1>

        {/* Title */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.35}
          className="font-mono text-xs tracking-[0.25em] uppercase text-accent mt-6 mb-6"
        >
          AI / ML · Full Stack Developer
        </motion.p>

        {/* Tagline */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.45}
          className="text-muted text-lg md:text-xl font-ui font-light max-w-xl leading-relaxed mb-12"
        >
          Building production-ready applications that solve{' '}
          <em className="text-text not-italic">real-world problems</em> — from
          ML pipelines to full-stack systems.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.55}
          className="flex flex-wrap gap-4"
        >
          <button
            onClick={() =>
              document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
            }
            className="px-7 py-3.5 bg-accent text-bg font-mono text-xs tracking-widest uppercase font-medium hover:bg-accent-light transition-colors duration-200 rounded-sm"
          >
            View Work
          </button>
          <button
            onClick={() =>
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
            }
            className="px-7 py-3.5 border border-border text-text font-mono text-xs tracking-widest uppercase hover:border-accent hover:text-accent transition-all duration-200 rounded-sm"
          >
            Contact
          </button>
          <a
            href="/resume.pdf"
            download="Unmesh_Nikumbh_Resume.pdf"
            className="inline-flex items-center gap-2 px-7 py-3.5 border border-border text-text font-mono text-xs tracking-widest uppercase hover:border-accent hover:text-accent transition-all duration-200 rounded-sm"
          >
            {/* Download icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Resume
          </a>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          custom={1.0}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="font-mono text-[10px] tracking-widest uppercase text-tertiary">
            scroll
          </span>
          <div className="w-px h-10 bg-gradient-to-b from-border to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
