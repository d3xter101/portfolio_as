'use client'

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Animated gradient orbs with looping motion */}
      <div className="absolute top-0 -left-40 w-96 h-96 bg-blue-600/30 rounded-full mix-blend-normal filter blur-3xl opacity-60 animate-blob" />
      <div className="absolute top-1/3 -right-32 w-80 h-80 bg-cyan-500/25 rounded-full mix-blend-normal filter blur-3xl opacity-50 animate-blob animation-delay-2000" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/25 rounded-full mix-blend-normal filter blur-3xl opacity-45 animate-blob animation-delay-4000" />
      <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-indigo-600/20 rounded-full mix-blend-normal filter blur-3xl opacity-40 animate-blob animation-delay-6000" />
      
      {/* Moving bubbles */}
      <div className="absolute top-[10%] left-[5%] w-32 h-32 bg-blue-400/20 rounded-full blur-2xl animate-float opacity-60" style={{ animationDuration: '8s' }} />
      <div className="absolute top-[60%] left-[15%] w-24 h-24 bg-cyan-400/20 rounded-full blur-2xl animate-float opacity-50" style={{ animationDuration: '10s', animationDelay: '1s' }} />
      <div className="absolute top-[30%] right-[10%] w-40 h-40 bg-indigo-400/20 rounded-full blur-2xl animate-float opacity-55" style={{ animationDuration: '12s', animationDelay: '2s' }} />
      <div className="absolute top-[80%] right-[25%] w-28 h-28 bg-blue-500/20 rounded-full blur-2xl animate-float opacity-45" style={{ animationDuration: '9s', animationDelay: '3s' }} />
      <div className="absolute top-[45%] left-[40%] w-36 h-36 bg-cyan-500/20 rounded-full blur-2xl animate-float opacity-50" style={{ animationDuration: '11s', animationDelay: '1.5s' }} />
      <div className="absolute top-[20%] right-[35%] w-20 h-20 bg-blue-300/25 rounded-full blur-xl animate-float opacity-55" style={{ animationDuration: '7s', animationDelay: '2.5s' }} />
      <div className="absolute bottom-[15%] left-[60%] w-32 h-32 bg-indigo-300/20 rounded-full blur-2xl animate-float opacity-45" style={{ animationDuration: '10s', animationDelay: '0.5s' }} />
      <div className="absolute top-[70%] left-[70%] w-24 h-24 bg-cyan-600/20 rounded-full blur-xl animate-float opacity-50" style={{ animationDuration: '8.5s', animationDelay: '3.5s' }} />
      
      {/* Secondary looping background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full animate-pulse-slow opacity-30">
          <div className="absolute inset-0 bg-linear-to-t from-blue-900/40 to-transparent" />
        </div>
      </div>
    </div>
  )
}
