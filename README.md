# Polymorph Flux - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## Features

### 🎯 Core Sections
- **Hero Section** - Eye-catching introduction with animated elements
- **About Section** - Professional background and skills
- **Timeline Section** - Career journey and milestones
- **Works Section (THE DART)** - Showcase of innovative products and solutions
- **Affiliate Marketing Section** - Partnership opportunities and commission programs
- **Contact Section** - Get in touch and collaboration opportunities

### 🚀 THE DART - Product Showcase
- **Modern UI Design** - Redesigned with sleek cards and enhanced visual appeal
- **Product Statistics** - Download counts, revenue tracking, and ratings
- **Owner-Only Features** - Secure product management system
  - Toggle owner mode for administrative access
  - Add new products with comprehensive forms
  - Edit existing products (edit buttons visible in owner mode)
  - Real-time product updates

### 💰 Affiliate Marketing
- **Multiple Programs** - Technology, Services, and Enterprise solutions
- **Competitive Commissions** - 10-30% commission rates
- **Dedicated Support** - Marketing materials and personalized assistance
- **Recurring Revenue** - Sustainable income opportunities

### 🔐 Owner Authentication
- **Simple Toggle** - Click "Owner Mode" button to enable/disable
- **Local Storage** - Status persists across browser sessions
- **Secure Access** - Only visible to authenticated owners
- **Easy Management** - Intuitive product upload interface

## Technology Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS + Framer Motion
- **UI Components**: Shadcn/ui component library
- **Routing**: React Router DOM
- **State Management**: React Hooks
- **Animations**: Framer Motion

## Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

## Owner Features

### Enabling Owner Mode
1. Navigate to "THE DART" section
2. Click the "Owner Mode: OFF" button to enable
3. The button will turn green and show "Owner Mode: ON"
4. Additional controls will appear

### Adding New Products
1. Ensure owner mode is enabled
2. Click "Add Product" button
3. Fill out the comprehensive form:
   - Product name and category
   - Description and pricing
   - Features (comma-separated)
   - Product link
4. Submit to add to the portfolio

### Product Management
- All products are displayed with enhanced cards
- Download counts and revenue tracking
- Rating system and feature tags
- Responsive grid layout

## Customization

### Adding New Sections
1. Create component in `src/components/`
2. Import in `src/pages/Index.tsx`
3. Add to navigation in `src/components/Navigation.tsx`

### Styling
- Uses Tailwind CSS for consistent design
- Custom color schemes in `tailwind.config.ts`
- Responsive breakpoints for all devices

### Content Management
- Product data stored in component state
- Easy to modify product information
- Owner can add/remove products dynamically

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is private and proprietary.

---

Built with ❤️ using modern web technologies
