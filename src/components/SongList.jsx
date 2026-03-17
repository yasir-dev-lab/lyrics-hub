import { useState } from 'react';
import { Search, Filter } from 'lucide-react';

// Import SongCard here to avoid circular dependency
import { SongCard } from './SongCard.jsx';

export function SongList({ songs, onDelete, onView, genres }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');

  const filteredSongs = songs.filter((song) => {
    const matchesSearch =
      !searchQuery ||
      song.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      song.artist.toLowerCase().includes(searchQuery.toLowerCase()) ||
      song.lyrics.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesGenre = !selectedGenre || song.genre === selectedGenre;

    return matchesSearch && matchesGenre;
  });

  return (
    <section id="songs" className="py-16 bg-neo-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-neo-accent border-4 border-black p-3 shadow-neo-sm -rotate-1">
              <Search className="h-6 w-6 stroke-[3px]" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight">
              Browse <span className="text-neo-secondary bg-black px-2">Songs</span>
            </h2>
          </div>
          <p className="text-lg font-bold text-black/70 max-w-2xl">
            Search through your collection of {songs.length} songs
          </p>
        </div>

        {/* Filters */}
        <div className="neo-card rounded-none p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Search Input */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 stroke-[3px] text-black/40" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by title, artist, or lyrics..."
                className="neo-input pl-12"
              />
            </div>

            {/* Genre Filter */}
            <div className="relative">
              <Filter className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 stroke-[3px] text-black/40" />
              <select
                value={selectedGenre}
                onChange={(e) => setSelectedGenre(e.target.value)}
                className="neo-input pl-12 appearance-none cursor-pointer"
              >
                <option value="">All Genres</option>
                {genres.map((genre) => (
                  <option key={genre} value={genre}>
                    {genre}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        {filteredSongs.length !== songs.length && (
          <div className="mb-6">
            <span className="neo-badge bg-neo-secondary">
              {filteredSongs.length} of {songs.length} songs
            </span>
          </div>
        )}

        {/* Songs Grid */}
        {filteredSongs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSongs.map((song) => (
              <SongCard
                key={song.id}
                song={song}
                onDelete={onDelete}
                onView={onView}
              />
            ))}
          </div>
        ) : (
          <div className="neo-card rounded-none p-12 text-center">
            <div className="inline-block bg-neo-muted border-4 border-black p-6 shadow-neo-md mb-4 -rotate-2">
              <Search className="h-12 w-12 stroke-[3px]" />
            </div>
            <h3 className="text-2xl font-black uppercase tracking-tight mb-2">
              No Songs Found
            </h3>
            <p className="font-bold text-black/70">
              Try adjusting your search or filters
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

