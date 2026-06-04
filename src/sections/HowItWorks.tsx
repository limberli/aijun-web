import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Brain, ListChecks, Rocket, Upload } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { Section, SectionHeading } from '../components/Section'
import { fadeUp, staggerContainer, viewportOnce } from '../lib/motion'

interface Step {
  id: string
  icon: LucideIcon
}

const STEPS: Step[] = [
  { id: 'step1', icon: Upload },
  { id: 'step2', icon: Brain },
  { id: 'step3', icon: ListChecks },
  { id: 'step4', icon: Rocket },
]

export function HowItWorks() {
  const { t } = useTranslation()

  return (
    <Section id="how-it-works">
      <SectionHeading
        eyebrow={t('howItWorks.eyebrow')}
        title={t('howItWorks.title')}
        subtitle={t('howItWorks.subtitle')}
      />

      <div className="relative mt-14">
        {/* Connecting line (desktop) */}
        <div className="pointer-events-none absolute left-0 right-0 top-[2.75rem] hidden h-px bg-gradient-to-r from-transparent via-brand-blue/40 to-transparent lg:block" />

        <motion.ol
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {STEPS.map(({ id, icon: Icon }, index) => (
            <motion.li key={id} variants={fadeUp} className="relative flex flex-col items-start">
              {/* Node */}
              <div className="relative mb-5 grid h-[5.5rem] w-[5.5rem] place-items-center">
                <div className="absolute inset-0 rounded-2xl bg-brand-cyan/10 blur-xl" />
                <div className="relative grid h-[5.5rem] w-[5.5rem] place-items-center rounded-2xl glass">
                  <Icon className="h-7 w-7 text-brand-cyan" />
                  <span className="absolute -right-2 -top-2 grid h-7 w-7 place-items-center rounded-full bg-gradient-to-br from-brand-cyan to-brand-blue font-display text-sm font-bold text-ink shadow-[0_0_16px_-2px_rgba(0,229,255,0.7)]">
                    {index + 1}
                  </span>
                </div>
              </div>

              <h3 className="font-display text-lg font-semibold text-white">
                {t(`howItWorks.steps.${id}.title`)}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                {t(`howItWorks.steps.${id}.description`)}
              </p>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </Section>
  )
}

export default HowItWorks
