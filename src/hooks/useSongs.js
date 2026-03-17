import { useEffect, useState } from 'react';
import initialSongs from '../data/songs.json';

const STORAGE_KEY = 'lyrics-hub-songs';

export function useSongs() {
  const [songs, setSongs] = useState(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        return JSON.parse(stored);
      } catch {
        return initialSongs.songs;
      }
    }
    return initialSongs.songs;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(songs));
  }, [songs]);

  const addSong = (song) => {
    const newSong = {
      ...song,
      id: Date.now().toString(),
    };
    setSongs((prev) => [newSong, ...prev]);
  };

  const deleteSong = (id) => {
    setSongs((prev) => prev.filter((song) => song.id !== id));
  };

  const searchSongs = (query) => {
    if (!query.trim()) return songs;
    const lowerQuery = query.toLowerCase();
    return songs.filter(
      (song) =>
        song.title.toLowerCase().includes(lowerQuery) ||
        song.artist.toLowerCase().includes(lowerQuery) ||
        song.genre.toLowerCase().includes(lowerQuery) ||
        song.lyrics.toLowerCase().includes(lowerQuery)
    );
  };

  const getSongById = (id) => {
    return songs.find((song) => song.id === id);
  };

  const getGenres = () => {
    return [...new Set(songs.map((song) => song.genre))].sort();
  };

  const filterByGenre = (genre) => {
    if (!genre) return songs;
    return songs.filter((song) => song.genre === genre);
  };

  return {
    songs,
    addSong,
    deleteSong,
    searchSongs,
    getSongById,
    getGenres,
    filterByGenre,
  };
}
