'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeUp, stagger, scaleIn, viewport } from '../lib/motion';
import { projects } from '../data/projects';

/* ── Single project card ──────────────────────────────────────────────── */
function ProjectCard({ project, index }) {
  const [expanded, setExpanded] = useState(false);
  const { title, category, tagline, problem, solution, outcome, tech, links, accent } = project;

  return (
    <motion.article
      variants={scaleIn}
      custom={index * 0.1}
      className="group relative bg-bg-elevated border border-border hover:border-accent/30 rounded-sm overflow-hidden transition-all duration-300"
      style={{ '--card-accent': accent }}
    >
      {/* Top accent bar */}
      <div
        className="absolute top-0 left-0 right-0 h-px transition-all duration-300 opacity-0 group-hover:opacity-100"
        style={{ background: `linear-gradient(90deg, transparent, ${accent}, transparent)` }}
      />

      <div className="p-8 md:p-10">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="font-mono text-xs text-tertiary">{project.index}</span>
              <span
                className="font-mono text-[10px] tracking-widest uppercase px-2 py-0.5 rounded-full border"
                style={{ color: accent, borderColor: `${accent}40`, background: `${accent}10` }}
              >
                {category}
              </span>
            </div>
            <h3 className="font-display text-2xl md:text-3xl font-light text-text">
              {title}
            </h3>
            <p className="text-muted text-sm mt-1 font-ui">{tagline}</p>
          </div>

          {/* Expand toggle */}
          <button
            onClick={() => setExpanded((p) => !p)}
            className="shrink-0 mt-1 w-8 h-8 flex items-center justify-center border border-border text-muted hover:border-accent hover:text-accent transition-all duration-200 rounded-sm font-mono text-sm"
            aria-label={expanded ? 'Collapse' : 'Expand'}
          >
            {expanded ? '−' : '+'}
          </button>
        </div>

        {/* Always visible: Problem */}
        <div className="mb-5">
          <p className="section-label mb-2">Problem</p>
          <p className="text-muted font-ui font-light text-sm leading-relaxed">{problem}</p>
        </div>

        {/* Expanded: Solution + Outcome */}
        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{   opacity: 0, height: 0    }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="pt-2 flex flex-col gap-6">
                {/* Solution */}
                <div>
                  <p className="section-label mb-2">Solution</p>
                  <p className="text-muted font-ui font-light text-sm leading-relaxed">{solution}</p>
                </div>

                {/* Outcome */}
                <div>
                  <p className="section-label mb-3">Outcome</p>
                  <ul className="flex flex-col gap-2">
                    {outcome.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm font-ui">
                        <span style={{ color: accent }} className="shrink-0 mt-0.5 text-xs">▸</span>
                        <span className="text-muted font-light">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer: Tech + Links */}
        <div className={`flex flex-wrap items-center justify-between gap-4 ${expanded ? 'mt-8 pt-6 border-t border-border' : 'mt-6 pt-4 border-t border-border/50'}`}>
          <div className="flex flex-wrap gap-2">
            {tech.map((t) => (
              <span
                key={t}
                className="font-mono text-[10px] tracking-wider px-2 py-1 bg-bg-subtle text-tertiary border border-border/60 rounded-sm"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {links.github && (
              <a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[10px] tracking-widest uppercase text-muted hover:text-accent transition-colors hover-line"
              >
                GitHub ↗
              </a>
            )}
            {links.live && (
              <a
                href={links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[10px] tracking-widest uppercase text-muted hover:text-accent transition-colors hover-line"
              >
                Live ↗
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

/* ── Section ──────────────────────────────────────────────────────────── */
export default function Projects() {
  return (
    <section id="projects" className="section-padding">
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
            ◈ &nbsp;Case Studies
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-display font-light text-4xl md:text-5xl text-text leading-tight"
          >
            Problems I&apos;ve solved
          </motion.h2>
          <motion.p
            variants={fadeUp}
            custom={0.1}
            className="text-muted mt-4 max-w-lg font-ui font-light text-base"
          >
            Each project started with a real problem. Click{' '}
            <span className="text-accent font-mono text-sm">+</span> on any card to
            see the full case study.
          </motion.p>
        </motion.div>

        {/* Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={stagger}
          className="grid grid-cols-1 lg:grid-cols-2 gap-5"
        >
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
