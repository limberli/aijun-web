/**
 * Fixed, full-page ambient background: faint animated grid plus slowly drifting
 * neon gradient blobs. Sits behind all content (pointer-events: none).
 */
export function AnimatedBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-ink"
    >
      {/* Animated grid */}
      <div className="absolute inset-0 bg-grid [animation:var(--animate-grid-pan)]" />

      {/* Radial vignette to fade grid at edges */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(120% 90% at 50% -10%, rgba(0,153,255,0.12), transparent 55%), radial-gradient(100% 100% at 50% 50%, transparent 35%, rgba(10,16,32,0.85) 100%)',
        }}
      />

      {/* Drifting neon blobs */}
      <div
        className="absolute -left-32 top-10 h-[34rem] w-[34rem] rounded-full opacity-50 animate-float-slow"
        style={{
          background: 'radial-gradient(circle, rgba(0,229,255,0.30), transparent 65%)',
          filter: 'blur(60px)',
        }}
      />
      <div
        className="absolute -right-24 top-1/3 h-[30rem] w-[30rem] rounded-full opacity-40 animate-float"
        style={{
          background: 'radial-gradient(circle, rgba(0,153,255,0.32), transparent 65%)',
          filter: 'blur(70px)',
        }}
      />
      <div
        className="absolute bottom-0 left-1/3 h-[26rem] w-[26rem] rounded-full opacity-30 animate-float-slow"
        style={{
          background: 'radial-gradient(circle, rgba(0,229,255,0.22), transparent 65%)',
          filter: 'blur(80px)',
        }}
      />
    </div>
  )
}

export default AnimatedBackground
