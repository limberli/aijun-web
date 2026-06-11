import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { ArrowRight, Sparkles } from 'lucide-react'
import { Button } from '../components/Button'
import { RobotMascot } from '../components/RobotMascot'
import { GithubIcon, TelegramIcon } from '../components/BrandIcons'
import { fadeUp, staggerContainer, easeExpo } from '../lib/motion'

const GITHUB_URL = 'https://github.com/limberli/aijun'
const TELEGRAM_URL = 'https://t.me/ai_jun'
const DEMO_URL = 'https://github.com/limberli/aijun/tags'

const STAT_KEYS = [
  { value: '12k+', key: 'hero.stat1' },
  { value: '3.5×', key: 'hero.stat2' },
  { value: '480+', key: 'hero.stat3' },
] as const

export function Hero() {
  const { t } = useTranslation()

  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
        {/* Copy */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="flex flex-col items-start text-left"
        >
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-brand-cyan/25 bg-brand-cyan/[0.06] px-3.5 py-1.5 text-xs font-medium tracking-wide text-brand-100"
          >
            <Sparkles className="h-3.5 w-3.5 text-brand-cyan" />
            {t('hero.badge')}
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="mt-6 font-display text-[2.75rem] font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-[4.25rem]"
          >
            <span className="text-gradient text-glow">{t('hero.title1')}</span>
            <br />
            <span className="text-gradient-brand">{t('hero.title2')}</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-xl text-lg leading-relaxed text-slate-400 sm:text-xl"
          >
            {t('hero.subtitle')}
          </motion.p>

          <motion.div variants={fadeUp} className="mt-9 flex flex-wrap items-center gap-3">
            <Button href={GITHUB_URL} external variant="primary" size="lg" icon={<GithubIcon />}>
              {t('hero.ctaGithub')}
            </Button>
            <Button href={TELEGRAM_URL} external variant="secondary" size="lg" icon={<TelegramIcon />}>
              {t('hero.ctaTelegram')}
            </Button>
            <Button
              href={DEMO_URL}
              external
              variant="ghost"
              size="lg"
              iconRight={<ArrowRight />}
            >
              {t('hero.ctaDemo')}
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={fadeUp}
            className="mt-12 grid w-full max-w-lg grid-cols-3 gap-4 border-t border-white/10 pt-6"
          >
            {STAT_KEYS.map((stat) => (
              <div key={stat.key} className="flex flex-col gap-1">
                <span className="font-display text-2xl font-bold text-white sm:text-3xl">
                  {stat.value}
                </span>
                <span className="text-xs leading-snug text-slate-500">{t(stat.key)}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Robot illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, ease: easeExpo, delay: 0.15 }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          {/* Glow halo */}
          <div className="absolute left-1/2 top-1/2 -z-10 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-blue/20 blur-[80px]" />

          <div className="relative animate-float">
            <RobotMascot className="mx-auto w-[18rem] drop-shadow-[0_25px_60px_rgba(0,153,255,0.35)] sm:w-[22rem] lg:w-[26rem]" />
          </div>

          {/* Floating glass chips */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.6, ease: easeExpo }}
            className="absolute left-0 top-10 hidden rounded-2xl glass px-4 py-3 sm:block"
          >
            <div className="flex items-center gap-2.5">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand-cyan/15 text-brand-cyan">
                <Sparkles className="h-4 w-4" />
              </span>
              <div className="leading-tight">
                <p className="text-xs font-semibold text-white">24 test cases</p>
                <p className="text-[0.65rem] text-slate-400">generated in 1.2s</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9, duration: 0.6, ease: easeExpo }}
            className="absolute bottom-12 right-0 hidden rounded-2xl glass px-4 py-3 sm:block"
          >
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-cyan opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-brand-cyan" />
              </span>
              <div className="leading-tight">
                <p className="text-xs font-semibold text-white">3 edge cases found</p>
                <p className="text-[0.65rem] text-slate-400">high-risk paths</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
