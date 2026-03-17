import { useState } from 'react';
import { Header, Hero, UploadForm, SongList, SongModal, Footer } from './components';
import { useSongs } from './hooks/useSongs';

function App() {
  const { songs, addSong, deleteSong, getGenres } = useSongs();
  const [selectedSong, setSelectedSong] = useState(null);

  const handleUpload = (songData) => {
    addSong(songData);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this song?')) {
      deleteSong(id);
    }
  };

  const handleView = (song) => {
    setSelectedSong(song);
  };

  const handleCloseModal = () => {
    setSelectedSong(null);
  };

  return (
    <div className="min-h-screen bg-neo-background">
      <Header />
      <main>
        <Hero />
        <UploadForm onUpload={handleUpload} />
        <SongList
          songs={songs}
          onDelete={handleDelete}
          onView={handleView}
          genres={getGenres()}
        />
      </main>
      <Footer />
      
      {/* Song Detail Modal */}
      {selectedSong && (
        <SongModal song={selectedSong} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default App;
