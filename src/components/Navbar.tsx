import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Menu, X } from 'lucide-react'
import { GithubIcon } from './BrandIcons'
import { Logo } from './Logo'
import { Button } from './Button'
import { LanguageToggle } from './LanguageToggle'
import { easeExpo } from '../lib/motion'

const GITHUB_URL = 'https://github.com/limberli/aijun'

const NAV_LINKS = [
  { id: 'features', key: 'nav.features' },
  { id: 'how-it-works', key: 'nav.howItWorks' },
  { id: 'demo', key: 'nav.demo' },
  { id: 'roadmap', key: 'nav.roadmap' },
] as const

export function Navbar() {
  const { t } = useTranslation()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <motion.nav
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: easeExpo }}
        className={`mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5 transition-all duration-300 sm:px-8 ${
          scrolled
            ? 'mt-2 rounded-2xl border border-white/10 bg-ink/70 backdrop-blur-xl sm:w-[calc(100%-2rem)]'
            : 'border border-transparent bg-transparent'
        }`}
      >
        <a href="#top" className="shrink-0" aria-label="AI JUN home">
          <Logo />
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="rounded-lg px-3 py-2 text-sm font-medium text-slate-300 transition-colors duration-200 hover:bg-white/[0.06] hover:text-white"
            >
              {t(link.key)}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <LanguageToggle />
          <div className="hidden sm:block">
            <Button
              href={GITHUB_URL}
              external
              variant="secondary"
              size="md"
              icon={<GithubIcon />}
            >
              {t('nav.github')}
            </Button>
          </div>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Toggle navigation menu"
            className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-white lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 top-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-ink/80 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ y: -16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -16, opacity: 0 }}
              transition={{ duration: 0.3, ease: easeExpo }}
              className="absolute inset-x-3 top-20 rounded-2xl border border-white/10 bg-surface/95 p-3 backdrop-blur-xl"
            >
              <div className="flex flex-col">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-4 py-3 text-base font-medium text-slate-200 transition-colors hover:bg-white/[0.06] hover:text-white"
                  >
                    {t(link.key)}
                  </a>
                ))}
              </div>
              <div className="mt-2 border-t border-white/10 pt-3">
                <Button
                  href={GITHUB_URL}
                  external
                  variant="secondary"
                  size="lg"
                  icon={<GithubIcon />}
                  className="w-full"
                >
                  {t('nav.github')}
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar
