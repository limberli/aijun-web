import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import {
  AlertTriangle,
  CheckCircle2,
  Cpu,
  FileText,
  ShieldAlert,
  Sparkles,
} from 'lucide-react'
import { Section, SectionHeading } from '../components/Section'
import { fadeUp, scaleIn, staggerContainer, viewportOnce } from '../lib/motion'

const TEST_CASES = [
  { key: 'tc1', status: 'pass' },
  { key: 'tc2', status: 'pass' },
  { key: 'tc3', status: 'pass' },
  { key: 'tc4', status: 'edge' },
] as const

const RISKS = [
  { key: 'riskItem1', level: 'high', pct: 86 },
  { key: 'riskItem2', level: 'medium', pct: 58 },
  { key: 'riskItem3', level: 'low', pct: 32 },
] as const

const EDGE_CASES = ['edge1', 'edge2', 'edge3'] as const

const riskColor: Record<string, string> = {
  high: 'from-rose-500 to-orange-400',
  medium: 'from-amber-400 to-yellow-300',
  low: 'from-brand-cyan to-brand-blue',
}
const riskBadge: Record<string, string> = {
  high: 'text-rose-300 bg-rose-500/15 border-rose-500/30',
  medium: 'text-amber-300 bg-amber-400/15 border-amber-400/30',
  low: 'text-brand-100 bg-brand-cyan/15 border-brand-cyan/30',
}
const riskLabelKey: Record<string, string> = {
  high: 'demo.riskHigh',
  medium: 'demo.riskMedium',
  low: 'demo.riskLow',
}

export function ProductDemo() {
  const { t } = useTranslation()

  return (
    <Section id="demo">
      <SectionHeading
        eyebrow={t('demo.eyebrow')}
        title={t('demo.title')}
        subtitle={t('demo.subtitle')}
      />

      <motion.div
        variants={scaleIn}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="relative mt-14"
      >
        {/* Ambient glow under the window */}
        <div className="absolute inset-x-8 -top-6 bottom-0 -z-10 rounded-[2rem] bg-brand-blue/20 blur-[60px]" />

        <div className="overflow-hidden rounded-2xl border border-white/10 bg-surface/80 shadow-[0_40px_120px_-30px_rgba(0,153,255,0.45)] backdrop-blur-xl sm:rounded-3xl">
          {/* Window chrome */}
          <div className="flex items-center gap-3 border-b border-white/10 bg-white/[0.03] px-4 py-3 sm:px-5">
            <div className="flex items-center gap-1.5">
              <span className="h-3 w-3 rounded-full bg-rose-400/80" />
              <span className="h-3 w-3 rounded-full bg-amber-400/80" />
              <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
            </div>
            <div className="mx-auto flex items-center gap-2 rounded-lg bg-white/[0.04] px-3 py-1 text-xs text-slate-400">
              <Cpu className="h-3.5 w-3.5 text-brand-cyan" />
              <span className="font-mono">{t('demo.windowTitle')}</span>
            </div>
            <span className="hidden items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-1 text-[0.65rem] font-medium text-emerald-300 sm:inline-flex">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              live
            </span>
          </div>

          {/* Dashboard body */}
          <div className="grid grid-cols-1 gap-4 p-4 sm:p-5 lg:grid-cols-[0.9fr_1.1fr]">
            {/* Left column */}
            <div className="flex flex-col gap-4">
              {/* Requirements */}
              <Panel icon={<FileText className="h-4 w-4" />} title={t('demo.panelRequirements')}>
                <div className="flex items-center justify-between gap-2 rounded-lg bg-ink/60 px-3 py-2">
                  <span className="flex items-center gap-2 font-mono text-xs text-slate-300">
                    <FileText className="h-3.5 w-3.5 text-brand-cyan" />
                    {t('demo.requirementName')}
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full border border-brand-cyan/30 bg-brand-cyan/10 px-2 py-0.5 text-[0.65rem] font-medium text-brand-100">
                    <Sparkles className="h-3 w-3" />
                    {t('demo.analyzed')}
                  </span>
                </div>
                <p className="mt-2.5 text-xs leading-relaxed text-slate-400">
                  {t('demo.requirementBody')}
                </p>
              </Panel>

              {/* Risk analysis */}
              <Panel icon={<ShieldAlert className="h-4 w-4" />} title={t('demo.panelRisk')}>
                <ul className="flex flex-col gap-3">
                  {RISKS.map((risk) => (
                    <li key={risk.key}>
                      <div className="flex items-center justify-between gap-2">
                        <span className="truncate text-xs text-slate-300">{t(`demo.${risk.key}`)}</span>
                        <span
                          className={`shrink-0 rounded-full border px-2 py-0.5 text-[0.6rem] font-semibold uppercase tracking-wide ${riskBadge[risk.level]}`}
                        >
                          {t(riskLabelKey[risk.level])}
                        </span>
                      </div>
                      <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-white/10">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${risk.pct}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                          className={`h-full rounded-full bg-gradient-to-r ${riskColor[risk.level]}`}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </Panel>
            </div>

            {/* Right column */}
            <div className="flex flex-col gap-4">
              {/* Test cases */}
              <Panel icon={<CheckCircle2 className="h-4 w-4" />} title={t('demo.panelTestCases')}>
                <motion.ul
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="show"
                  viewport={viewportOnce}
                  className="flex flex-col gap-2"
                >
                  {TEST_CASES.map((tc, i) => (
                    <motion.li
                      key={tc.key}
                      variants={fadeUp}
                      className="flex items-center gap-3 rounded-lg bg-ink/50 px-3 py-2.5 ring-1 ring-white/5"
                    >
                      <span className="font-mono text-[0.65rem] text-slate-500">
                        TC-{String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="flex-1 text-xs text-slate-200">{t(`demo.testCases.${tc.key}`)}</span>
                      {tc.status === 'pass' ? (
                        <span className="inline-flex items-center gap-1 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2 py-0.5 text-[0.6rem] font-semibold text-emerald-300">
                          <CheckCircle2 className="h-3 w-3" />
                          {t('demo.statusPass')}
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 rounded-full border border-amber-400/30 bg-amber-400/10 px-2 py-0.5 text-[0.6rem] font-semibold text-amber-300">
                          <AlertTriangle className="h-3 w-3" />
                          {t('demo.statusEdge')}
                        </span>
                      )}
                    </motion.li>
                  ))}
                </motion.ul>
              </Panel>

              {/* Edge cases */}
              <Panel icon={<AlertTriangle className="h-4 w-4" />} title={t('demo.panelEdge')}>
                <ul className="flex flex-col gap-2">
                  {EDGE_CASES.map((key) => (
                    <li key={key} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-300 shadow-[0_0_8px_1px_rgba(252,211,77,0.6)]" />
                      {t(`demo.${key}`)}
                    </li>
                  ))}
                </ul>
              </Panel>
            </div>
          </div>

          {/* Footer stat bar */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-white/10 bg-white/[0.03] px-5 py-3 text-xs">
            <span className="flex items-center gap-2 text-slate-300">
              <span className="font-display text-base font-bold text-brand-cyan">92%</span>
              {t('demo.coverage')}
            </span>
            <span className="flex items-center gap-2 text-slate-400">
              <span className="font-display text-base font-bold text-white">24</span>
              {t('demo.casesLabel')}
            </span>
            <span className="flex items-center gap-2 text-slate-400">
              <span className="font-display text-base font-bold text-white">3</span>
              {t('demo.risksLabel')}
            </span>
          </div>
        </div>
      </motion.div>
    </Section>
  )
}

function Panel({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.02] p-3.5 sm:p-4">
      <div className="mb-3 flex items-center gap-2 text-slate-300">
        <span className="grid h-7 w-7 place-items-center rounded-lg bg-brand-cyan/10 text-brand-cyan">
          {icon}
        </span>
        <h3 className="text-sm font-semibold text-white">{title}</h3>
      </div>
      {children}
    </div>
  )
}

export default ProductDemo
