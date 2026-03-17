import { useState } from 'react';
import { Upload, Plus } from 'lucide-react';

export function UploadForm({ onUpload }) {
  const [formData, setFormData] = useState({
    title: '',
    artist: '',
    album: '',
    year: '',
    genre: '',
    lyrics: '',
  });
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.artist || !formData.lyrics) return;

    onUpload({
      ...formData,
      year: parseInt(formData.year) || new Date().getFullYear(),
    });

    setFormData({
      title: '',
      artist: '',
      album: '',
      year: '',
      genre: '',
      lyrics: '',
    });
    setIsExpanded(false);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="upload" className="py-16 bg-neo-muted/20 border-b-4 border-black">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-neo-secondary border-4 border-black p-3 shadow-neo-sm rotate-2">
              <Upload className="h-6 w-6 stroke-[3px]" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight">
              Upload Your <span className="text-neo-accent">Lyrics</span>
            </h2>
          </div>
          <p className="text-lg font-bold text-black/70 max-w-2xl">
            Add your favorite songs to your personal collection. All data is stored locally in your browser.
          </p>
        </div>

        {/* Upload Card */}
        <div className="neo-card rounded-none p-6 md:p-8 max-w-3xl">
          {!isExpanded ? (
            <button
              onClick={() => setIsExpanded(true)}
              className="w-full neo-btn neo-btn-secondary flex items-center justify-center gap-3 text-lg"
            >
              <Plus className="h-6 w-6 stroke-[3px]" />
              Add New Song
            </button>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Title & Artist Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-black uppercase tracking-widest text-sm mb-2">
                    Song Title *
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="Enter song title..."
                    className="neo-input"
                    required
                  />
                </div>
                <div>
                  <label className="block font-black uppercase tracking-widest text-sm mb-2">
                    Artist *
                  </label>
                  <input
                    type="text"
                    name="artist"
                    value={formData.artist}
                    onChange={handleChange}
                    placeholder="Enter artist name..."
                    className="neo-input"
                    required
                  />
                </div>
              </div>

              {/* Album & Year Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-black uppercase tracking-widest text-sm mb-2">
                    Album
                  </label>
                  <input
                    type="text"
                    name="album"
                    value={formData.album}
                    onChange={handleChange}
                    placeholder="Enter album name..."
                    className="neo-input"
                  />
                </div>
                <div>
                  <label className="block font-black uppercase tracking-widest text-sm mb-2">
                    Year
                  </label>
                  <input
                    type="number"
                    name="year"
                    value={formData.year}
                    onChange={handleChange}
                    placeholder="e.g., 1985"
                    className="neo-input"
                    min="1900"
                    max={new Date().getFullYear()}
                  />
                </div>
              </div>

              {/* Genre */}
              <div>
                <label className="block font-black uppercase tracking-widest text-sm mb-2">
                  Genre
                </label>
                <input
                  type="text"
                  name="genre"
                  value={formData.genre}
                  onChange={handleChange}
                  placeholder="e.g., Rock, Pop, Jazz..."
                  className="neo-input"
                />
              </div>

              {/* Lyrics */}
              <div>
                <label className="block font-black uppercase tracking-widest text-sm mb-2">
                  Lyrics *
                </label>
                <textarea
                  name="lyrics"
                  value={formData.lyrics}
                  onChange={handleChange}
                  placeholder="Paste your lyrics here...&#10;&#10;Use line breaks for verses"
                  className="neo-input h-48 resize-y"
                  required
                />
              </div>

              {/* Actions */}
              <div className="flex gap-4 pt-4">
                <button
                  type="submit"
                  className="neo-btn neo-btn-primary flex-1 md:flex-none"
                >
                  Save Song
                </button>
                <button
                  type="button"
                  onClick={() => setIsExpanded(false)}
                  className="neo-btn neo-btn-outline"
                >
                  Cancel
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
