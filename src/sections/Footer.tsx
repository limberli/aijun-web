import { useTranslation } from 'react-i18next'
import { Logo } from '../components/Logo'
import { GithubIcon, LinkedInIcon, TelegramIcon } from '../components/BrandIcons'

const GITHUB_URL = 'https://github.com/limberli/aijun'

const PRODUCT_LINKS = [
  { id: 'features', key: 'nav.features' },
  { id: 'how-it-works', key: 'nav.howItWorks' },
  { id: 'demo', key: 'nav.demo' },
  { id: 'roadmap', key: 'nav.roadmap' },
] as const

const SOCIAL_LINKS = [
  { href: GITHUB_URL, label: 'GitHub', icon: <GithubIcon className="h-4 w-4" />, external: true },
  { href: '#', label: 'Telegram', icon: <TelegramIcon className="h-4 w-4" />, external: false },
  { href: '#', label: 'LinkedIn', icon: <LinkedInIcon className="h-4 w-4" />, external: false },
] as const

export function Footer() {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  return (
    <footer className="relative mt-10 border-t border-white/10 bg-ink/60 backdrop-blur-sm">
      {/* Top glow line */}
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-brand-cyan/50 to-transparent" />

      <div className="mx-auto w-full max-w-7xl px-5 py-14 sm:px-8">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
          {/* Brand */}
          <div className="col-span-2">
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
              {t('footer.builtWith')}
            </p>
            <div className="mt-5 flex items-center gap-2.5">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.external ? '_blank' : undefined}
                  rel={s.external ? 'noreferrer noopener' : undefined}
                  aria-label={s.label}
                  className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/[0.03] text-slate-400 transition-colors duration-200 hover:border-brand-cyan/30 hover:text-brand-cyan"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
              {t('footer.product')}
            </h4>
            <ul className="mt-4 space-y-2.5">
              {PRODUCT_LINKS.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className="text-sm text-slate-400 transition-colors duration-200 hover:text-white"
                  >
                    {t(link.key)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
              {t('footer.community')}
            </h4>
            <ul className="mt-4 space-y-2.5">
              {SOCIAL_LINKS.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target={s.external ? '_blank' : undefined}
                    rel={s.external ? 'noreferrer noopener' : undefined}
                    className="text-sm text-slate-400 transition-colors duration-200 hover:text-white"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center">
          <p className="text-sm text-slate-400">
            <span className="font-display font-semibold text-white">AI JUN</span> —{' '}
            {t('footer.tagline')}
          </p>
          <p className="text-xs text-slate-500">
            © {year} AI JUN. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
