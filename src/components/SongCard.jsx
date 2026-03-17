import { Music, Calendar, Disc, Trash2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function SongCard({ song, onDelete }) {
  const navigate = useNavigate();

  const handleView = () => {
    navigate(`/song/${song.id}`);
  };

  return (
    <div className="neo-card rounded-none p-6 relative group">
      {/* Genre Badge */}
      {song.genre && (
        <div className="absolute -top-3 -right-3 neo-badge bg-neo-accent text-white rotate-3 hover:rotate-12 transition-transform duration-200">
          {song.genre}
        </div>
      )}

      {/* Content */}
      <div className="space-y-4">
        {/* Header */}
        <div className="pr-8">
          <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight leading-none mb-2">
            {song.title}
          </h3>
          <p className="text-lg font-bold text-black/70">{song.artist}</p>
        </div>

        {/* Metadata */}
        <div className="flex flex-wrap gap-3 pt-2">
          {song.album && (
            <div className="flex items-center gap-2 text-sm font-bold">
              <Disc className="h-4 w-4 stroke-[3px]" />
              <span>{song.album}</span>
            </div>
          )}
          {song.year && (
            <div className="flex items-center gap-2 text-sm font-bold">
              <Calendar className="h-4 w-4 stroke-[3px]" />
              <span>{song.year}</span>
            </div>
          )}
        </div>

        {/* Lyrics Preview */}
        <div className="bg-neo-muted/20 border-2 border-black p-4 mt-4">
          <p className="font-medium text-sm line-clamp-3 whitespace-pre-line">
            {song.lyrics}
          </p>
        </div>

        {/* Actions */}
        <div className="flex gap-3 pt-4">
          <button
            onClick={handleView}
            className="neo-btn neo-btn-primary flex-1"
          >
            View Lyrics
          </button>
          <button
            onClick={() => onDelete(song.id)}
            className="neo-btn neo-btn-outline px-4"
            aria-label="Delete song"
          >
            <Trash2 className="h-5 w-5 stroke-[3px]" />
          </button>
        </div>
      </div>
    </div>
  );
}
