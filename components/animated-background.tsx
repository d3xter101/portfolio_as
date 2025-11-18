'use client'

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
      {/* Animated gradient orbs with looping motion */}
      <div className="absolute top-0 -left-40 w-96 h-96 bg-blue-600/20 rounded-full mix-blend-screen filter blur-3xl opacity-40 animate-blob" />
      <div className="absolute top-1/3 -right-32 w-80 h-80 bg-cyan-500/15 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/15 rounded-full mix-blend-screen filter blur-3xl opacity-25 animate-blob animation-delay-4000" />
      <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-indigo-600/10 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-6000" />
      
      {/* Secondary looping background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full animate-pulse-slow opacity-20">
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent" />
        </div>
      </div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02] bg-grid" />
      
      {/* Radial gradient overlay for depth */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-slate-950/60" />
    </div>
  )
}
