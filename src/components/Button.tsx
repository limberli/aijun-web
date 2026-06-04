import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost'
type Size = 'md' | 'lg'

interface BaseProps {
  children: ReactNode
  variant?: Variant
  size?: Size
  icon?: ReactNode
  iconRight?: ReactNode
  className?: string
  disabled?: boolean
}

interface ButtonAsLink extends BaseProps {
  href: string
  external?: boolean
  onClick?: never
  type?: never
}

interface ButtonAsButton extends BaseProps {
  href?: never
  external?: never
  onClick?: () => void
  type?: 'button' | 'submit'
}

type ButtonProps = ButtonAsLink | ButtonAsButton

const base =
  'group relative inline-flex items-center justify-center gap-2 rounded-xl font-medium tracking-tight whitespace-nowrap transition-[transform,box-shadow,background-color,border-color] duration-200 ease-[var(--ease-expo)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan/70 focus-visible:ring-offset-2 focus-visible:ring-offset-ink disabled:cursor-not-allowed disabled:opacity-50'

const sizes: Record<Size, string> = {
  md: 'h-11 px-5 text-sm',
  lg: 'h-12 px-6 text-[0.95rem]',
}

const variants: Record<Variant, string> = {
  primary:
    'text-ink bg-gradient-to-r from-brand-cyan to-brand-blue shadow-[0_8px_30px_-8px_rgba(0,229,255,0.6)] hover:shadow-[0_10px_40px_-6px_rgba(0,229,255,0.75)] font-semibold',
  secondary:
    'text-white glass hover:border-white/20 hover:bg-white/[0.08]',
  ghost:
    'text-slate-300 hover:text-white hover:bg-white/[0.06] border border-transparent hover:border-white/10',
}

export function Button(props: ButtonProps) {
  const {
    children,
    variant = 'primary',
    size = 'md',
    icon,
    iconRight,
    className,
    disabled,
  } = props

  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className ?? ''}`

  const inner = (
    <>
      {icon && <span className="shrink-0 [&_svg]:h-[1.15em] [&_svg]:w-[1.15em]">{icon}</span>}
      <span>{children}</span>
      {iconRight && (
        <span className="shrink-0 transition-transform duration-200 ease-[var(--ease-expo)] group-hover:translate-x-0.5 [&_svg]:h-[1.15em] [&_svg]:w-[1.15em]">
          {iconRight}
        </span>
      )}
    </>
  )

  const motionProps = disabled
    ? {}
    : { whileHover: { scale: 1.02 }, whileTap: { scale: 0.97 } }

  if ('href' in props && props.href) {
    if (disabled) {
      return (
        <span className={classes} aria-disabled="true">
          {inner}
        </span>
      )
    }
    return (
      <motion.a
        href={props.href}
        target={props.external ? '_blank' : undefined}
        rel={props.external ? 'noreferrer noopener' : undefined}
        className={classes}
        {...motionProps}
      >
        {inner}
      </motion.a>
    )
  }

  return (
    <motion.button
      type={props.type ?? 'button'}
      onClick={props.onClick}
      disabled={disabled}
      className={classes}
      {...motionProps}
    >
      {inner}
    </motion.button>
  )
}

export default Button
