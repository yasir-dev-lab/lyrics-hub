# Lyrics Hub 🎵

A **neo-brutalist** styled song lyrics web application built with React. This is a learning project that demonstrates modern React patterns, local storage persistence, and bold design aesthetics.

![Neo-Brutalism Design](https://img.shields.io/badge/Design-Neo--Brutalism-FF6B6B?style=for-the-badge&logo=figma&logoColor=white)
![React](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.x-38B2AC?style=for-the-badge&logo=tailwindcss&logoColor=white)

## ✨ Features

- **📝 Upload Lyrics** - Add your own songs with title, artist, album, year, genre, and full lyrics
- **🔍 Search & Filter** - Find songs by title, artist, lyrics content, or filter by genre
- **💾 Local Storage** - All your uploaded songs persist in browser local storage
- **📱 Responsive Design** - Looks great on mobile, tablet, and desktop
- **🎨 Neo-Brutalist UI** - Bold colors, thick borders, hard shadows, and playful interactions
- **🗑️ Delete Songs** - Remove songs from your collection
- **📄 Full-Page Song View** - Dedicated page for reading lyrics with immersive layout

## 🎨 Design Philosophy

This project embraces **Neo-Brutalism** — a rebellious design movement that rejects polished corporate aesthetics in favor of:

- **Unapologetic Visibility** — Thick black borders (`border-4` everywhere)
- **Hard Shadows** — Solid offset shadows with zero blur (`shadow-[8px_8px_0px_0px_#000]`)
- **High Saturation Colors** — Hot red, vivid yellow, soft violet on cream background
- **Mechanical Interactions** — Buttons press down, cards lift up, everything feels tactile
- **Organized Chaos** — Slight rotations, overlapping elements, asymmetric layouts
- **Typography as Texture** — Space Grotesk at 900 weight, all caps, tight tracking

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd lyrics-hub
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   
   Navigate to `http://localhost:5173`

## 📁 Project Structure

```
lyrics-hub/
├── src/
│   ├── components/
│   │   ├── Header.jsx        # Navigation header
│   │   ├── Hero.jsx          # Hero section with marquee
│   │   ├── UploadForm.jsx    # Song upload form
│   │   ├── SongList.jsx      # Searchable song grid
│   │   ├── SongCard.jsx      # Individual song card
│   │   ├── SongDetail.jsx    # Full-page song view
│   │   ├── Footer.jsx        # Site footer
│   │   └── index.js          # Component exports
│   ├── hooks/
│   │   └── useSongs.js       # Custom hook for song management
│   ├── data/
│   │   └── songs.json        # Initial mock song data
│   ├── App.jsx               # Main app with routing
│   ├── main.jsx              # Entry point
│   └── index.css             # Global styles & Tailwind
├── index.html
├── tailwind.config.js        # Tailwind configuration
├── vite.config.js            # Vite configuration
└── package.json
```

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **React 18** | UI framework with hooks |
| **Vite** | Build tool & dev server |
| **TailwindCSS** | Utility-first styling |
| **React Router** | Client-side routing |
| **Lucide React** | Icon library |
| **Local Storage API** | Data persistence |

## 🎯 Key Components

### `useSongs` Hook
Custom React hook that manages all song-related operations:
- Load initial data from JSON
- Sync with localStorage
- Add, delete, search, and filter songs
- Extract unique genres

### `SongCard` Component
Displays individual songs in the grid with:
- Rotated genre badge
- Title, artist, metadata (album, year)
- Lyrics preview (clamped to 3 lines)
- View and delete actions

### `SongDetail` Page
Full-page immersive lyrics view:
- Sticky navigation header
- Large typography for title/artist
- Scrollable lyrics container
- Delete action
- Back navigation

### `UploadForm` Component
Form for adding new songs:
- All fields with neo-brutalist styling
- Focus states with background color change
- Validation and submission handling

## 🎨 Design Tokens

### Colors
```javascript
{
  background: '#FFFDF5',  // Cream/off-white canvas
  foreground: '#000000',  // Pure black ink
  accent: '#FF6B6B',      // Hot red for primary actions
  secondary: '#FFD93D',   // Vivid yellow for highlights
  muted: '#C4B5FD'        // Soft violet for depth
}
```

### Typography
- **Font Family**: Space Grotesk (Google Fonts)
- **Weights**: Only 700 (Bold) and 900 (Black)
- **Scale**: text-4xl to text-9xl for headings

### Shadows
```javascript
{
  'neo-sm': '4px 4px 0px 0px #000',
  'neo-md': '8px 8px 0px 0px #000',
  'neo-lg': '12px 12px 0px 0px #000',
  'neo-xl': '16px 16px 0px 0px #000'
}
```

## 🔌 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## 📦 Mock Data

The app ships with 8 classic songs in `src/data/songs.json`:
- Bohemian Rhapsody - Queen
- Imagine - John Lennon
- Smells Like Teen Spirit - Nirvana
- Hotel California - Eagles
- Billie Jean - Michael Jackson
- Sweet Child O' Mine - Guns N' Roses
- Like a Rolling Stone - Bob Dylan
- Purple Haze - Jimi Hendrix

## 💾 Data Persistence

All user-uploaded songs are stored in browser **localStorage** under the key `lyrics-hub-songs`. Data persists across sessions but is cleared if:
- User clears browser data
- User switches browsers/devices
- Incognito/private mode is used

## 🎭 Interaction Details

### Button States
- **Default**: Colored background with hard shadow
- **Hover**: Slightly darker background
- **Active**: Translates down-right to cover shadow (mechanical "click" effect)

### Card Hover
- **Default**: `shadow-neo-md`
- **Hover**: Translates up 4px, shadow grows to `shadow-neo-lg`

### Badge Rotation
- **Default**: `rotate-3` (3 degrees)
- **Hover**: `rotate-12` (12 degrees)

## ♿ Accessibility

- High contrast ratios (WCAG AA compliant)
- Keyboard navigation support
- Focus indicators with thick rings
- Semantic HTML structure
- ARIA labels on icon buttons
- Reduced motion support via `prefers-reduced-motion`

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 Learning Outcomes

This project demonstrates:
- ✅ React component composition
- ✅ Custom hooks for state management
- ✅ LocalStorage integration
- ✅ React Router for SPA navigation
- ✅ TailwindCSS utility patterns
- ✅ Neo-brutalist design implementation
- ✅ Responsive design techniques
- ✅ Form handling and validation
- ✅ Search and filter functionality

## 🤝 Contributing

This is a learning project, but feel free to:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

MIT License - Feel free to use this project for learning!

## 🙏 Acknowledgments

- Design inspiration: Neo-brutalism movement
- Icons: [Lucide React](https://lucide.dev/)
- Font: [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk)
- Initial songs: Classic rock and pop legends

---

**Built with 💖 and lots of `border-4 border-black`**
