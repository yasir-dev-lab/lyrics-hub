import { Music, Heart } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative py-20 md:py-32 bg-neo-background border-b-4 border-black overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(#000 2px, transparent 2.5px)',
          backgroundSize: '30px 30px'
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            {/* Badge */}
            <div className="inline-block neo-badge bg-neo-secondary rotate-[-2deg]">
              <Music className="h-4 w-4 inline mr-2 stroke-[3px]" />
              Welcome to Lyrics Hub
            </div>

            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.85]">
              Your Personal
              <br />
              <span className="text-stroke block">Lyrics</span>
              <span className="bg-neo-accent text-white px-4 -rotate-1 inline-block mt-2 shadow-neo-sm">
                Collection
              </span>
            </h1>

            {/* Description */}
            <p className="text-xl md:text-2xl font-bold text-black/70 max-w-lg">
              Store, search, and organize your favorite song lyrics. 
              <span className="bg-neo-muted px-2">All offline.</span>
              <span className="bg-neo-secondary px-2 ml-2">No signup.</span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#songs"
                className="neo-btn neo-btn-primary text-base md:text-lg"
              >
                Browse Songs
              </a>
              <a
                href="#upload"
                className="neo-btn neo-btn-outline text-base md:text-lg"
              >
                <Heart className="h-5 w-5 inline mr-2 stroke-[3px]" />
                Add Yours
              </a>
            </div>
          </div>

          {/* Right Side - Decorative Elements */}
          <div className="relative hidden lg:block">
            {/* Main Card */}
            <div className="neo-card rounded-none p-8 rotate-2 hover:rotate-0 transition-transform duration-300">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-neo-accent border-2 border-black p-2">
                    <Music className="h-6 w-6 stroke-[3px]" />
                  </div>
                  <div>
                    <p className="font-black uppercase tracking-widest text-sm">Now Playing</p>
                    <p className="text-xl font-bold">Bohemian Rhapsody</p>
                  </div>
                </div>
                <div className="bg-neo-muted/30 border-2 border-black p-4">
                  <p className="font-medium text-sm whitespace-pre-line">
                    Is this the real life?
                    <br />
                    Is this just fantasy?
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Badge 1 */}
            <div className="absolute -top-6 -left-6 neo-badge bg-neo-accent text-white -rotate-6 animate-spin-slow">
              ★
            </div>

            {/* Floating Badge 2 */}
            <div className="absolute -bottom-4 -right-4 neo-badge bg-neo-secondary rotate-3">
              {new Date().getFullYear()}
            </div>

            {/* Background Number */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[200px] font-black text-black/5 select-none">
              ♫
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
