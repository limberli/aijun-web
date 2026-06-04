import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Bug, FileSearch, Sparkles, Workflow } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { Section, SectionHeading } from '../components/Section'
import { fadeUp, staggerContainer, viewportOnce } from '../lib/motion'

interface Feature {
  id: string
  icon: LucideIcon
}

const FEATURES: Feature[] = [
  { id: 'testCases', icon: Sparkles },
  { id: 'requirements', icon: FileSearch },
  { id: 'edgeCases', icon: Bug },
  { id: 'automation', icon: Workflow },
]

export function Features() {
  const { t } = useTranslation()

  return (
    <Section id="features">
      <SectionHeading
        eyebrow={t('features.eyebrow')}
        title={t('features.title')}
        subtitle={t('features.subtitle')}
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
      >
        {FEATURES.map(({ id, icon: Icon }) => (
          <motion.article
            key={id}
            variants={fadeUp}
            className="group relative overflow-hidden rounded-2xl glass p-6 transition-colors duration-300 hover:border-brand-cyan/30"
          >
            {/* Hover glow */}
            <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-brand-cyan/10 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />

            <span className="relative grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-brand-cyan/20 to-brand-blue/10 text-brand-cyan ring-1 ring-white/10 transition-transform duration-300 group-hover:scale-105">
              <Icon className="h-6 w-6" />
            </span>

            <h3 className="relative mt-5 font-display text-lg font-semibold text-white">
              {t(`features.items.${id}.title`)}
            </h3>
            <p className="relative mt-2.5 text-sm leading-relaxed text-slate-400">
              {t(`features.items.${id}.description`)}
            </p>
          </motion.article>
        ))}
      </motion.div>
    </Section>
  )
}

export default Features
