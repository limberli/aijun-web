import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Check, CircleDashed } from 'lucide-react'
import { Section, SectionHeading } from '../components/Section'
import { fadeUp, staggerContainer, viewportOnce } from '../lib/motion'

const CURRENT = ['item1', 'item2', 'item3'] as const
const UPCOMING = ['item1', 'item2', 'item3', 'item4'] as const

interface Item {
  label: string
  shipped: boolean
}

export function Roadmap() {
  const { t } = useTranslation()

  const items: Item[] = [
    ...CURRENT.map((k) => ({ label: t(`roadmap.current.${k}`), shipped: true })),
    ...UPCOMING.map((k) => ({ label: t(`roadmap.upcoming.${k}`), shipped: false })),
  ]
  const firstUpcomingIndex = CURRENT.length

  return (
    <Section id="roadmap">
      <SectionHeading
        eyebrow={t('roadmap.eyebrow')}
        title={t('roadmap.title')}
        subtitle={t('roadmap.subtitle')}
      />

      <motion.ol
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="relative mx-auto mt-14 max-w-2xl"
      >
        {/* Vertical line */}
        <div className="absolute bottom-2 left-[1.45rem] top-2 w-px bg-gradient-to-b from-brand-cyan/60 via-brand-blue/30 to-white/5" />

        {items.map((item, i) => (
          <motion.li key={`${item.label}-${i}`} variants={fadeUp} className="relative pb-8 pl-16 last:pb-0">
            {/* Phase label */}
            {(i === 0 || i === firstUpcomingIndex) && (
              <span
                className={`mb-4 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.15em] ${
                  item.shipped
                    ? 'border-brand-cyan/30 bg-brand-cyan/10 text-brand-100'
                    : 'border-white/15 bg-white/[0.04] text-slate-400'
                }`}
              >
                {item.shipped ? t('roadmap.currentLabel') : t('roadmap.upcomingLabel')}
              </span>
            )}

            {/* Node */}
            <span
              className={`absolute left-0 grid h-12 w-12 place-items-center rounded-full border ${
                item.shipped
                  ? 'border-brand-cyan/40 bg-brand-cyan/15 text-brand-cyan shadow-[0_0_20px_-4px_rgba(0,229,255,0.7)]'
                  : 'border-white/15 bg-surface text-slate-400'
              }`}
              style={{ top: i === 0 || i === firstUpcomingIndex ? '2.75rem' : '0' }}
            >
              {item.shipped ? <Check className="h-5 w-5" /> : <CircleDashed className="h-5 w-5" />}
            </span>

            {/* Card */}
            <div
              className={`rounded-xl border p-4 transition-colors duration-300 ${
                item.shipped
                  ? 'border-brand-cyan/20 bg-brand-cyan/[0.04]'
                  : 'glass hover:border-white/20'
              }`}
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="font-display text-base font-semibold text-white">{item.label}</h3>
                <span
                  className={`shrink-0 text-[0.65rem] font-medium uppercase tracking-wide ${
                    item.shipped ? 'text-brand-100' : 'text-slate-500'
                  }`}
                >
                  {item.shipped ? t('roadmap.currentLabel') : t('roadmap.upcomingLabel')}
                </span>
              </div>
            </div>
          </motion.li>
        ))}
      </motion.ol>
    </Section>
  )
}

export default Roadmap
