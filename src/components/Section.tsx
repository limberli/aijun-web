import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { fadeUp, staggerContainer, viewportOnce } from '../lib/motion'

interface SectionProps {
  id?: string
  children: ReactNode
  className?: string
}

/** Page section: consistent max-width, padding and vertical rhythm. */
export function Section({ id, children, className }: SectionProps) {
  return (
    <section id={id} className={`relative scroll-mt-24 py-20 sm:py-28 ${className ?? ''}`}>
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">{children}</div>
    </section>
  )
}

interface SectionHeadingProps {
  eyebrow: string
  title: ReactNode
  subtitle?: string
  align?: 'center' | 'left'
  className?: string
}

/** Eyebrow + heading + subtitle block with a scroll-triggered stagger. */
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className,
}: SectionHeadingProps) {
  const alignment =
    align === 'center' ? 'mx-auto max-w-2xl text-center items-center' : 'max-w-2xl text-left items-start'

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className={`flex flex-col gap-4 ${alignment} ${className ?? ''}`}
    >
      <motion.span
        variants={fadeUp}
        className="inline-flex items-center gap-2 self-start rounded-full border border-brand-cyan/25 bg-brand-cyan/[0.06] px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-brand-100"
        style={align === 'center' ? { alignSelf: 'center' } : undefined}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-brand-cyan shadow-[0_0_8px_2px_rgba(0,229,255,0.7)]" />
        {eyebrow}
      </motion.span>
      <motion.h2
        variants={fadeUp}
        className="font-display text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl md:text-[2.75rem]"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p variants={fadeUp} className="text-base leading-relaxed text-slate-400 sm:text-lg">
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  )
}

export default Section
