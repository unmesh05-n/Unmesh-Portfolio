'use client';

import { motion } from 'framer-motion';
import { fadeUp, stagger, viewport } from '../lib/motion';
import { skillCategories } from '../data/skills';

export default function Skills() {
  return (
    <section id="skills" className="section-padding">
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
            ◎ &nbsp;Skills
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-display font-light text-4xl md:text-5xl text-text leading-tight"
          >
            Tools of the trade
          </motion.h2>
          <motion.p
            variants={fadeUp}
            custom={0.1}
            className="text-muted mt-4 max-w-lg font-ui font-light text-base"
          >
            A curated set of technologies I use to take products from idea to
            production — covering the full stack.
          </motion.p>
        </motion.div>

        {/* Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={stagger}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {skillCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.id}
              variants={fadeUp}
              custom={catIdx * 0.1}
              className="bg-bg-elevated border border-border rounded-sm p-6 flex flex-col gap-5 hover:border-accent/30 transition-all duration-300 group"
            >
              {/* Category header */}
              <div className="flex items-center gap-3">
                <span className="text-accent text-sm">{cat.icon}</span>
                <p className="font-mono text-xs tracking-widest uppercase text-accent">
                  {cat.label}
                </p>
              </div>

              {/* Divider */}
              <div className="w-full h-px bg-border group-hover:bg-accent/20 transition-colors duration-300" />

              {/* Skills list */}
              <ul className="flex flex-col gap-2.5">
                {cat.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-2.5 text-sm font-ui text-muted hover:text-text transition-colors duration-150"
                  >
                    <span className="w-1 h-1 rounded-full bg-border group-hover:bg-accent/40 transition-colors duration-300 shrink-0" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
