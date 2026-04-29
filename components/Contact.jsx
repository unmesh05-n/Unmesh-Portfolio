'use client';

import { motion } from 'framer-motion';
import { fadeUp, fadeIn, stagger, viewport } from '../lib/motion';
import { contact } from '../data/contact';

export default function Contact() {
  return (
    <section id="contact" className="section-padding">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={stagger}
          className="mb-16"
        >
          <motion.p variants={fadeUp} className="section-label mb-4">
            ◉ &nbsp;Contact
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-display font-light text-4xl md:text-6xl text-text leading-tight max-w-2xl"
          >
            Let&apos;s build something that matters.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            custom={0.1}
            className="text-muted mt-5 max-w-lg font-ui font-light text-base leading-relaxed"
          >
            I&apos;m currently open to new opportunities. If you have a hard problem
            that needs solving, I&apos;d love to hear about it.
          </motion.p>
        </motion.div>

        {/* Main CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={stagger}
          className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start"
        >
          {/* Email CTA */}
          <motion.div variants={fadeUp} className="flex flex-col gap-5">
            <p className="font-mono text-xs tracking-widest uppercase text-tertiary">
              Primary contact
            </p>
            <a
              href={`mailto:${contact.email}`}
              className="group inline-flex items-center gap-3 font-display text-2xl md:text-3xl font-light text-text hover:text-accent transition-colors duration-200"
            >
              {contact.email}
              <span className="text-accent text-lg opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-200">
                ↗
              </span>
            </a>

            {/* Available for */}
            <div className="flex flex-col gap-2 mt-2">
              <p className="font-mono text-[10px] tracking-widest uppercase text-tertiary mb-1">
                Available for
              </p>
              {contact.availableFor.map((item) => (
                <p key={item} className="flex items-center gap-2.5 text-sm font-ui text-muted">
                  <span className="text-accent text-xs">▸</span>
                  {item}
                </p>
              ))}
            </div>
          </motion.div>

          {/* Links */}
          <motion.div variants={fadeUp} custom={0.1} className="flex flex-col gap-5">
            <p className="font-mono text-xs tracking-widest uppercase text-tertiary">
              Elsewhere
            </p>
            <div className="flex flex-col gap-4">
              {contact.links.map((link, i) => (
                <motion.a
                  key={link.id}
                  href={link.url}
                  target={link.id !== 'email' ? '_blank' : undefined}
                  rel={link.id !== 'email' ? 'noopener noreferrer' : undefined}
                  variants={fadeIn}
                  custom={i * 0.08}
                  className="group flex items-center gap-4 border border-border hover:border-accent/40 rounded-sm px-5 py-4 transition-all duration-200 hover:bg-bg-subtle"
                >
                  <div className="flex flex-col gap-0.5">
                    <p className="font-mono text-xs tracking-widest uppercase text-muted group-hover:text-accent transition-colors duration-200">
                      {link.label}
                    </p>
                    <p className="font-ui text-sm text-text">{link.handle}</p>
                  </div>
                  <span className="ml-auto text-tertiary group-hover:text-accent transition-colors duration-200 text-sm">
                    ↗
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeIn}
          custom={0.3}
          className="mt-24 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="font-mono text-xs text-tertiary">
            © {new Date().getFullYear()} Unmesh Nikumbh. Designed &amp; built with care.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="font-mono text-xs tracking-widest uppercase text-tertiary hover:text-accent transition-colors duration-200"
          >
            Back to top ↑
          </button>
        </motion.div>

      </div>
    </section>
  );
}
