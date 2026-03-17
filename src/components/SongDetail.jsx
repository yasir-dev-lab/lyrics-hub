import { ArrowLeft, Music, Calendar, Disc } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function SongDetail({ song, onDelete }) {
  const navigate = useNavigate();

  if (!song) return null;

  const handleBack = () => {
    navigate('/');
  };

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this song?')) {
      onDelete(song.id);
      navigate('/');
    }
  };

  return (
    <div className="min-h-screen bg-neo-background">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-neo-background border-b-4 border-black">
        <div className="container mx-auto px-4 py-4">
          <button
            onClick={handleBack}
            className="neo-btn neo-btn-outline flex items-center gap-2"
          >
            <ArrowLeft className="h-5 w-5 stroke-[3px]" />
            <span>Back</span>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          {/* Song Header Card */}
          <div className="neo-card rounded-none p-6 md:p-8 mb-8">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
              {/* Title & Artist */}
              <div className="flex-1">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-neo-accent border-4 border-black p-4 shadow-neo-sm -rotate-2 hidden sm:block">
                    <Music className="h-8 w-8 stroke-[3px] text-white" />
                  </div>
                  <div>
                    <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight leading-none mb-2">
                      {song.title}
                    </h1>
                    <p className="text-2xl md:text-3xl font-bold text-black/70">
                      {song.artist}
                    </p>
                  </div>
                </div>

                {/* Metadata */}
                {(song.album || song.year || song.genre) && (
                  <div className="flex flex-wrap gap-4 pt-4">
                    {song.genre && (
                      <span className="neo-badge bg-neo-secondary text-xs">
                        {song.genre}
                      </span>
                    )}
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
                )}
              </div>

              {/* Delete Button */}
              <button
                onClick={handleDelete}
                className="neo-btn neo-btn-outline px-6 shrink-0"
              >
                Delete Song
              </button>
            </div>
          </div>

          {/* Lyrics Container */}
          <div className="neo-card rounded-none overflow-hidden">
            {/* Lyrics Header */}
            <div className="bg-neo-muted/30 border-b-4 border-black p-4 md:p-6">
              <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight">
                Lyrics
              </h2>
            </div>

            {/* Lyrics Content */}
            <div className="p-6 md:p-8">
              <div className="bg-white border-4 border-black p-6 md:p-8 shadow-neo-sm min-h-[400px]">
                <pre className="whitespace-pre-wrap font-medium text-lg md:text-xl leading-relaxed">
                  {song.lyrics}
                </pre>
              </div>
            </div>

            {/* Footer Actions */}
            <div className="border-t-4 border-black p-6 bg-neo-secondary/20">
              <button
                onClick={handleBack}
                className="neo-btn neo-btn-primary w-full md:w-auto"
              >
                Back to Songs
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
