import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { LANGUAGES } from '../i18n/config'

/**
 * EN | RU segmented toggle. The active pill slides between options with a
 * shared-layout animation. Choice is persisted to localStorage by the i18n
 * config's languageChanged handler.
 */
export function LanguageToggle({ className }: { className?: string }) {
  const { i18n, t } = useTranslation()
  const current = i18n.language?.startsWith('ru') ? 'ru' : 'en'

  return (
    <div
      role="group"
      aria-label={t('nav.languageLabel')}
      className={`relative inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] p-0.5 ${className ?? ''}`}
    >
      {LANGUAGES.map((lng) => {
        const active = current === lng
        return (
          <button
            key={lng}
            type="button"
            onClick={() => i18n.changeLanguage(lng)}
            aria-pressed={active}
            className={`relative z-10 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide transition-colors duration-200 ${
              active ? 'text-ink' : 'text-slate-400 hover:text-white'
            }`}
          >
            {active && (
              <motion.span
                layoutId="lang-pill"
                transition={{ type: 'spring', stiffness: 320, damping: 30 }}
                className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-brand-cyan to-brand-blue shadow-[0_0_18px_-4px_rgba(0,229,255,0.8)]"
              />
            )}
            {lng}
          </button>
        )
      })}
    </div>
  )
}

export default LanguageToggle
