import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import { Header, Hero, UploadForm, SongList, Footer } from './components';
import { SongDetail } from './components/SongDetail';
import { useSongs } from './hooks/useSongs';

function HomePage() {
  const { songs, addSong, deleteSong, getGenres } = useSongs();
  
  const handleUpload = (songData) => {
    addSong(songData);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this song?')) {
      deleteSong(id);
    }
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
          genres={getGenres()}
        />
      </main>
      <Footer />
    </div>
  );
}

function SongDetailPage() {
  const { id } = useParams();
  const { getSongById, deleteSong } = useSongs();
  const song = getSongById(id);
  
  if (!song) {
    return (
      <div className="min-h-screen bg-neo-background flex items-center justify-center">
        <div className="neo-card rounded-none p-12 text-center">
          <h2 className="text-4xl font-black uppercase tracking-tight mb-4">
            Song Not Found
          </h2>
          <a href="/" className="neo-btn neo-btn-primary">
            Back to Home
          </a>
        </div>
      </div>
    );
  }
  
  return <SongDetail song={song} onDelete={deleteSong} />;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/song/:id" element={<SongDetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
