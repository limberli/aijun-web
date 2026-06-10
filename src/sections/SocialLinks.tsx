import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { ArrowUpRight } from 'lucide-react'
import type { ReactNode } from 'react'
import { Section, SectionHeading } from '../components/Section'
import { GithubIcon, LinkedInIcon, TelegramIcon } from '../components/BrandIcons'
import { fadeUp, staggerContainer, viewportOnce } from '../lib/motion'

interface Social {
  id: string
  href: string
  icon: ReactNode
  accent: string
}

const SOCIALS: Social[] = [
  {
    id: 'github',
    href: 'https://github.com/limberli/aijun',
    icon: <GithubIcon className="h-6 w-6" />,
    accent: 'group-hover:text-white',
  },
  {
    id: 'telegram',
    href: 'https://t.me/ai_jun',
    icon: <TelegramIcon className="h-6 w-6" />,
    accent: 'group-hover:text-[#27A7E7]',
  },
  {
    id: 'linkedin',
    href: 'https://www.linkedin.com/in/limberli',
    icon: <LinkedInIcon className="h-6 w-6" />,
    accent: 'group-hover:text-[#0A66C2]',
  },
]

export function SocialLinks() {
  const { t } = useTranslation()

  return (
    <Section id="community">
      <SectionHeading
        eyebrow={t('social.eyebrow')}
        title={t('social.title')}
        subtitle={t('social.subtitle')}
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-3"
      >
        {SOCIALS.map((s) => (
          <motion.a
            key={s.id}
            href={s.href}
            target={s.href.startsWith('http') ? '_blank' : undefined}
            rel={s.href.startsWith('http') ? 'noreferrer noopener' : undefined}
            variants={fadeUp}
            whileHover={{ y: -4 }}
            className="group relative flex items-center gap-4 overflow-hidden rounded-2xl glass p-5 transition-colors duration-300 hover:border-brand-cyan/30"
          >
            <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-brand-cyan/10 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
            <span
              className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-white/[0.04] text-slate-300 ring-1 ring-white/10 transition-colors duration-300 ${s.accent}`}
            >
              {s.icon}
            </span>
            <div className="min-w-0 flex-1">
              <h3 className="font-display text-base font-semibold text-white">
                {t(`social.${s.id}`)}
              </h3>
              <p className="truncate text-sm text-slate-400">{t(`social.${s.id}Desc`)}</p>
            </div>
            <ArrowUpRight className="h-5 w-5 shrink-0 text-slate-500 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand-cyan" />
          </motion.a>
        ))}
      </motion.div>
    </Section>
  )
}

export default SocialLinks
