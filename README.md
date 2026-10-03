# Riyajul Saha — Portfolio Website

Personal portfolio website of **Riyajul Saha**, Software Engineer & Product Builder. Built with modern full-stack web technologies to deliver a fast, responsive, and accessible experience.

## Tech Stack

- **Framework**: [TanStack Start](https://tanstack.com/start) with [TanStack Router](https://tanstack.com/router)
- **UI Library**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vite.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Server Engine**: [Nitro](https://nitro.build/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations & Primitives**: Radix UI, Embla Carousel

## Getting Started

### Prerequisites

- Node.js (version 20 or higher recommended)
- npm

### Installation

```bash
# Clone repository
git clone https://github.com/riyajul-saha/myPortfolio.git

# Navigate into directory
cd myPortfolio

# Install dependencies
npm install
```

### Development

Start the local development server:

```bash
npm run dev
```

Visit `http://localhost:8080` in your browser.

### Production Build

Build the project for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

### Deployment

This project is configured for deployment on [Vercel](https://vercel.com):

1. **Via Vercel Dashboard (Recommended)**:
   - Push your code to GitHub.
   - Import your repository into [Vercel](https://vercel.com/new).
   - Vercel will automatically detect the **TanStack Start** framework via `vercel.json` and configure the build settings (`npm run build`).
   - Click **Deploy**.

2. **Via Vercel CLI**:
   ```bash
   npx vercel
   ```

### Code Quality

```bash
# Run ESLint
npm run lint

# Format code with Prettier
npm run format
```

## Project Structure

```
├── public/              # Static assets, fonts, icons, manifest
├── src/
│   ├── assets/          # Project visual assets
│   ├── components/      # UI components & site sections
│   ├── data/            # Portfolio data (profile, projects, skills)
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Utility functions
│   ├── routes/          # TanStack Start file-based routes
│   ├── router.tsx       # Router configuration
│   ├── server.ts        # Server entry
│   ├── start.ts         # TanStack Start instance configuration
│   └── styles.css       # Tailwind CSS & global styles
├── vite.config.ts       # Vite configuration
└── package.json
```

## License

MIT
