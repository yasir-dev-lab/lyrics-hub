import { X } from 'lucide-react';

export function SongModal({ song, onClose }) {
  if (!song) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-bg-black/50">
      <div 
        className="neo-card rounded-none bg-neo-background w-full max-w-3xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-neo-background border-b-4 border-black p-6 flex items-start justify-between gap-4">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight leading-none mb-2">
              {song.title}
            </h2>
            <p className="text-xl font-bold text-black/70">{song.artist}</p>
          </div>
          <button
            onClick={onClose}
            className="neo-btn neo-btn-outline px-4 shrink-0"
            aria-label="Close modal"
          >
            <X className="h-6 w-6 stroke-[3px]" />
          </button>
        </div>

        {/* Metadata Bar */}
        {(song.album || song.year || song.genre) && (
          <div className="bg-neo-secondary/30 border-b-4 border-black p-4">
            <div className="flex flex-wrap gap-4 text-sm font-bold uppercase tracking-widest">
              {song.genre && (
                <span className="neo-badge bg-neo-accent text-white text-xs">
                  {song.genre}
                </span>
              )}
              {song.album && (
                <span className="flex items-center gap-2">
                  <span className="text-black/60">ALBUM:</span>
                  {song.album}
                </span>
              )}
              {song.year && (
                <span className="flex items-center gap-2">
                  <span className="text-black/60">YEAR:</span>
                  {song.year}
                </span>
              )}
            </div>
          </div>
        )}

        {/* Lyrics */}
        <div className="p-6 md:p-8">
          <div className="bg-white border-4 border-black p-6 md:p-8 shadow-neo-sm">
            <pre className="whitespace-pre-wrap font-medium text-lg leading-relaxed">
              {song.lyrics}
            </pre>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t-4 border-black p-6 bg-neo-muted/20">
          <button
            onClick={onClose}
            className="neo-btn neo-btn-primary w-full"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
