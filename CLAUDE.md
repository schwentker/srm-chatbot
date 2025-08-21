# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an SRM Corp AI chatbot application built with Next.js 15, React 19, and TypeScript. It's a static export site featuring an AI assistant interface for Strategic Resource Management services, with a Lab section showcasing interactive demos.

## Commands

### Development
- `npm run dev` - Start development server
- `npm run build` - Build production version (static export)
- `npm start` - Start production server
- `npm run lint` - Run ESLint

### Package Management
The project uses npm with package-lock.json. Use `npm install` to install dependencies.

## Architecture

### Tech Stack
- **Framework**: Next.js 15 with App Router
- **React**: v19 with TypeScript
- **Styling**: Tailwind CSS v4 with shadcn/ui components
- **UI Library**: Radix UI primitives with shadcn/ui
- **Icons**: Lucide React
- **Fonts**: Geist Sans and Mono

### Project Structure
```
app/                    # Next.js App Router pages
├── layout.tsx         # Root layout with Geist fonts
├── page.tsx           # Main chat interface
├── globals.css        # Global Tailwind styles
└── lab/               # Demo section
    ├── page.tsx       # Lab showcase page
    ├── margin-analysis/
    └── waived-fee-analysis/

components/
├── ui/                # shadcn/ui components (auto-generated)
└── theme-provider.tsx

lib/
└── utils.ts           # Tailwind merge utility (cn function)

hooks/                 # React hooks
public/images/         # Static assets
```

### Configuration Files
- `components.json` - shadcn/ui configuration (New York style, CSS variables)
- `next.config.js` - Static export configuration with trailing slashes
- `tsconfig.json` - TypeScript config with @ path mapping
- `postcss.config.mjs` - Tailwind CSS PostCSS setup

### Static Export Setup
The application is configured for static export:
- `output: 'export'` in next.config.js
- `trailingSlash: true` for proper routing
- `images.unoptimized: true` for static images

### Key Features
1. **Chat Interface**: Main landing page with AI assistant styling
2. **Lab Section**: Interactive demos for:
   - Margin Analysis (5-step agentic process demo)
   - Waived Fee Analysis (revenue leakage detection)
   - Future demos (vendor risk, digital transformation)
3. **Responsive Design**: Mobile-first with proper breakpoints
4. **Component Architecture**: shadcn/ui components with consistent styling

### State Management
- Uses React useState for local component state
- Next.js router for navigation between pages
- No external state management library

### Styling Patterns
- Tailwind utility classes with shadcn/ui design tokens
- CSS variables for theming support
- Consistent spacing and color schemes
- Responsive grid layouts for demo cards

### Navigation Structure
- Root (`/`) - Main chat interface
- `/lab` - Demo showcase page
- `/lab/margin-analysis` - Interactive 5-step demo
- `/lab/waived-fee-analysis` - Fee analysis demo (referenced but file not found)

When working with this codebase:
- Follow shadcn/ui component patterns
- Use the `cn()` utility for conditional classes
- Maintain the static export compatibility
- Keep the SRM Corp branding and styling consistent
- Use Lucide React for icons consistently