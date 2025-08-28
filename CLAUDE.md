# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15.3.5 startup template project using React 19 and TypeScript. The project is configured with Tailwind CSS 4 and includes motion animations using the "motion" library.

## Development Commands

- **Development**: `pnpm dev` (starts Next.js dev server with Turbopack)
- **Build**: `pnpm build` 
- **Production**: `pnpm start`
- **Lint**: `pnpm lint`

Note: This project uses pnpm as the package manager (version 10.9.0).

## Architecture

### Project Structure
- `app/` - Next.js App Router directory
  - `layout.tsx` - Root layout with Geist font configuration
  - `page.tsx` - Home page (renders Header component)
  - `components/` - React components
    - `header.tsx` - Main header with Logo, Navbar, and LoginButton components
  - `globals.css` - Global styles

### Key Technologies
- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS 4 with PostCSS
- **Animations**: Motion library for React animations
- **Icons**: Lucide React for icons
- **Fonts**: Geist Sans and Geist Mono from Google Fonts

### TypeScript Configuration
- Path alias `@/*` maps to root directory
- Strict mode enabled
- ES2017 target with modern module resolution

### Component Architecture
The header component demonstrates the project's component structure:
- Functional components using hooks (useState)
- Motion animations with layoutId for smooth transitions
- Tailwind classes for styling with responsive design
- Component composition pattern (Logo, Navbar, LoginButton)

### Styling Approach
- Uses Tailwind utility classes exclusively
- Dark theme colors (neutral palette)
- Hover animations and transitions
- Responsive design patterns