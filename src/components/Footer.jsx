import { Music } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-neo-secondary border-t-4 border-black py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="bg-white border-4 border-black p-3 shadow-neo-sm rotate-1">
              <Music className="h-6 w-6 stroke-[3px]" />
            </div>
            <div>
              <p className="text-xl font-black uppercase tracking-tighter">
                Lyrics<span className="text-neo-accent">Hub</span>
              </p>
              <p className="text-xs font-bold uppercase tracking-widest text-black/60">
                Made with React
              </p>
            </div>
          </div>

          {/* Info */}
          <div className="text-center md:text-right">
            <p className="font-bold text-sm uppercase tracking-widest">
              Neo-Brutalist Design
            </p>
            <p className="text-black/70 font-medium mt-1">
              A learning project built with React & Tailwind CSS
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t-4 border-black mt-8 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-bold text-sm">
              © {new Date().getFullYear()} Lyrics Hub. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <span className="neo-badge bg-white text-xs">
                Local Storage
              </span>
              <span className="neo-badge bg-neo-accent text-white text-xs">
                No Backend
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
