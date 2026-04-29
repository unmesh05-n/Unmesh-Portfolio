'use client';

import { motion } from 'framer-motion';
import { fadeUp, stagger, viewport } from '../lib/motion';
import { about } from '../data/about';

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 lg:gap-24 items-start">

          {/* Left — label + highlights */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={stagger}
          >
            <motion.p variants={fadeUp} className="section-label mb-10">
              ◉ &nbsp;About
            </motion.p>

            <div className="flex flex-col gap-8">
              {about.highlights.map(({ value, label }, i) => (
                <motion.div
                  key={label}
                  variants={fadeUp}
                  custom={i * 0.1}
                  className="border-l-2 border-accent pl-5"
                >
                  <p className="font-display text-4xl font-light text-text">
                    {value}
                  </p>
                  <p className="font-mono text-xs tracking-widest uppercase text-muted mt-1">
                    {label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — text */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={stagger}
            className="flex flex-col gap-6"
          >
            <motion.h2
              variants={fadeUp}
              className="font-display font-light text-4xl md:text-5xl leading-tight text-text"
            >
              {about.headline}
            </motion.h2>

            <div className="w-12 h-px bg-accent" />

            {about.paragraphs.map((para, i) => (
              <motion.p
                key={i}
                variants={fadeUp}
                custom={i * 0.1 + 0.1}
                className="text-muted font-ui font-light text-base md:text-lg leading-[1.8]"
              >
                {para}
              </motion.p>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
