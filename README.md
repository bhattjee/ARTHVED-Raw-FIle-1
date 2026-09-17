# ARTHVED - Pop Shiva Vibrations

A modern spiritual web application that presents ancient Hindu stotras (sacred verses) through a vibrant Pop Art aesthetic. This project bridges traditional wisdom with contemporary design, making spiritual content accessible and visually engaging for the digital age.

## 🎨 Project Overview

ARTHVED is a devotional platform dedicated to showcasing sacred stotras for various Hindu deities including:
- **Lord Shiva** (शिव जी) - Shiva Tandava Stotram, Mahamrityunjaya Mantra
- **Mata Ji** (माता जी) - Durga Chalisa, Lalita Sahasranama
- **Hanuman Ji** (हनुमान जी) - Hanuman Chalisa
- **Lord Ganesha** (गणेश जी) - Ganesh Aarti

Each stotra is presented with:
- Original Sanskrit text
- English translation
- Hindi translation (हिंदी अर्थ)
- Audio playback support
- Downloadable PDF versions

## 🛠️ Tech Stack

- **Framework**: React 18.3.1 with TypeScript
- **Build Tool**: Vite 5.4.1
- **Styling**: Tailwind CSS 3.4.11
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Routing**: React Router DOM 6.26.2
- **State Management**: TanStack Query (React Query) 5.56.2
- **Icons**: Lucide React 0.462.0
- **Form Handling**: React Hook Form 7.53.0 with Zod validation

## 📁 Project Structure

```
pop-shiva-vibrations/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── ui/              # shadcn/ui components
│   │   ├── Header.tsx       # Navigation header
│   │   ├── Footer.tsx       # Footer component
│   │   ├── HeroSection.tsx  # Hero section
│   │   ├── StotraCard.tsx   # Individual stotra display
│   │   └── StotraGrid.tsx   # Grid layout for stotras
│   ├── pages/               # Page components
│   │   ├── Home.tsx         # Landing page
│   │   ├── Stotras.tsx      # Stotras listing page
│   │   ├── Festivals.tsx    # Festival information
│   │   ├── About.tsx        # About page
│   │   └── NotFound.tsx     # 404 page
│   ├── assets/              # Static assets (images)
│   ├── hooks/               # Custom React hooks
│   ├── lib/                 # Utility functions
│   ├── App.tsx              # Main app component
│   └── main.tsx             # Entry point
├── public/                  # Public static files
└── package.json             # Dependencies
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm, yarn, or bun

### Installation

```bash
# Clone the repository
git clone <YOUR_GIT_URL>
cd pop-shiva-vibrations

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:8080`

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run build:dev` - Build in development mode
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## 🎨 Design Features

- **Pop Art Aesthetic**: Vibrant colors, comic-style borders, halftone patterns
- **Custom Typography**: Comic-style fonts for headings
- **Responsive Design**: Mobile-first approach with hamburger menu
- **Smooth Animations**: CSS animations for interactive elements
- **Dark Theme**: Deep blue background with orange and yellow accents

## 📄 Pages

1. **Home** (`/`) - Hero section with call-to-action and feature highlights
2. **Stotras** (`/stotras`) - Browse stotras by deity category
3. **Festivals** (`/festivals`) - Hindu festival calendar and information
4. **About** (`/about`) - Mission and project information

## 🔒 Security & Sensitive Data

**Security Audit Results**: ✅ CLEAN

- No API keys or secrets found in source code
- No hardcoded credentials
- No environment configuration files (.env) present
- No authentication tokens or private keys
- No database connection strings
- Only placeholder URLs detected (e.g., Spotify example URL)

The application is a static frontend with no backend dependencies or sensitive data exposure.

## 🌐 Deployment

This project can be deployed to any static hosting service:

- **Vercel**: `vercel deploy`
- **Netlify**: Connect repository and deploy
- **GitHub Pages**: Configure in repository settings
- **Lovable**: Use the integrated deployment feature

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

This is a personal project. For contributions or questions, please contact the repository owner.
