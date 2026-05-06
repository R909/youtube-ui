export default function HeroSection({ totalItems }) {
  return (
    <div className="relative overflow-hidden py-10 mb-8">
      {/* Background glow orbs */}
      <div
        className="absolute top-0 left-1/4 w-72 h-72 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(108,99,255,0.12) 0%, transparent 70%)',
          transform: 'translate(-50%, -50%)',
          filter: 'blur(40px)',
        }}
      />
      <div
        className="absolute top-0 right-1/4 w-72 h-72 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(255,77,109,0.1) 0%, transparent 70%)',
          transform: 'translate(50%, -50%)',
          filter: 'blur(40px)',
        }}
      />

      <div className="relative text-center">
        {/* Eyebrow label */}
        <div className="inline-flex items-center gap-2 mb-4">
          <div
            className="w-1.5 h-1.5 rounded-full animate-pulse"
            style={{ background: '#ff4d6d' }}
          />
          <span className="text-[10px] uppercase tracking-[0.2em] text-muted font-semibold">
            Live Feed
          </span>
          <div
            className="w-1.5 h-1.5 rounded-full animate-pulse"
            style={{ background: '#ff4d6d', animationDelay: '0.5s' }}
          />
        </div>

        {/* Main heading */}
        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-none mb-4"
          style={{ fontFamily: 'Syne, sans-serif', letterSpacing: '-0.03em' }}
        >
          <span className="gradient-text">Explore</span>{' '}
          <span className="text-light">Videos</span>
        </h1>

        {/* Subtext */}
        <p className="text-sm text-muted max-w-md mx-auto leading-relaxed">
          Browse{' '}
          <span className="text-light font-semibold">{totalItems.toLocaleString()}</span>{' '}
          curated tech tutorials, deep-dives, and coding content — all in one place.
        </p>

        {/* Decorative line */}
        <div className="flex items-center justify-center gap-3 mt-6">
          <div className="h-px w-16" style={{ background: 'linear-gradient(to right, transparent, #2e2e48)' }} />
          <div className="w-1.5 h-1.5 rounded-full bg-accent" />
          <div className="h-px w-16" style={{ background: 'linear-gradient(to left, transparent, #2e2e48)' }} />
        </div>
      </div>
    </div>
  )
}
