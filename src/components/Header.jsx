import { Music, Upload, Search, Trash2 } from 'lucide-react';

export function Header() {
  return (
    <header className="border-b-4 border-black bg-neo-background">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="bg-neo-accent border-4 border-black p-3 shadow-neo-sm rotate-[-2deg]">
              <Music className="h-8 w-8 stroke-[3px]" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-black uppercase tracking-tighter leading-none">
                Lyrics<span className="text-neo-accent">Hub</span>
              </h1>
              <p className="text-sm font-bold uppercase tracking-widest text-black/60">
                Your Song Lyrics Collection
              </p>
            </div>
          </div>

          {/* Navigation Badges */}
          <nav className="hidden md:flex items-center gap-4">
            <a
              href="#songs"
              className="neo-badge bg-white hover:bg-neo-secondary transition-colors duration-100"
            >
              Browse Songs
            </a>
            <a
              href="#upload"
              className="neo-badge bg-neo-secondary hover:bg-neo-accent hover:text-white transition-colors duration-100"
            >
              <Upload className="h-4 w-4 inline mr-2 stroke-[3px]" />
              Upload
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
