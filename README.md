# Raghav Productions - Cinematic Production House Website

A modern, professional, and fully responsive website for a video production and creative media studio. Built with React, TypeScript, and Tailwind CSS, featuring a dark cinematic theme with gold accents.

## Features

### Pages
- **Home**: Full-screen hero, services preview, portfolio showcase, testimonials, and call-to-action
- **About**: Company story, mission & vision, team members, and statistics
- **Services**: Detailed descriptions of all 5 services with features and imagery
- **Portfolio**: Filterable gallery with category filters and popup modal preview
- **Contact**: Working contact form, contact information, social links, and Google Maps integration

### Services Offered
1. Video Editing
2. Social Media Content Creation
3. Podcast Production
4. Graphic Design
5. Website Design

### Design Features
- Dark cinematic theme (black + gold/orange accents)
- Smooth scrolling navigation
- Responsive mobile-first design
- Interactive hover effects and animations
- Sticky navbar with scroll effect
- Professional typography and spacing
- Portfolio filter system
- Modal popup for portfolio items
- Gradient buttons and cards
- Social media integration

## Tech Stack

- **React 18** - Modern UI library
- **TypeScript** - Type-safe code
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first styling
- **React Router** - Client-side routing
- **Lucide React** - Beautiful icons
- **PostCSS & Autoprefixer** - CSS processing

## Project Structure

```
project/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx          # Sticky navigation with mobile menu
│   │   └── Footer.tsx          # Professional footer with links
│   ├── pages/
│   │   ├── Home.tsx            # Homepage with hero and sections
│   │   ├── About.tsx           # About page with team
│   │   ├── Services.tsx        # Detailed services page
│   │   ├── Portfolio.tsx       # Filterable portfolio gallery
│   │   └── Contact.tsx         # Contact form and info
│   ├── App.tsx                 # Main app with routing
│   ├── main.tsx               # Entry point
│   └── index.css              # Global styles and animations
├── public/                    # Static assets
├── index.html                 # HTML template
├── package.json               # Dependencies
├── tailwind.config.js         # Tailwind configuration
├── tsconfig.json              # TypeScript configuration
└── vite.config.ts             # Vite configuration
```

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

The website will be available at `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run typecheck` - Type check with TypeScript

## Customization Guide

### Change Colors
Edit the gradient colors in `tailwind.config.js` or directly in components:
- Current: `from-amber-500 to-orange-600`
- Replace with your brand colors

### Update Content

**Company Name**: Search and replace "Raghav Productions" throughout the codebase

**Contact Information**: Update in `src/components/Footer.tsx` and `src/pages/Contact.tsx`:
- Phone number
- Email addresses
- Office address
- Social media links

**Portfolio Items**: Edit the `portfolioItems` array in `src/pages/Portfolio.tsx`

**Services**: Modify the `services` array in `src/pages/Home.tsx` and `src/pages/Services.tsx`

**Team Members**: Update the `team` array in `src/pages/About.tsx`

**Images**: All images are from Pexels. Replace with your own by updating the image URLs

### Add New Pages
1. Create a new component in `src/pages/`
2. Add route in `src/App.tsx`
3. Add navigation link in `src/components/Navbar.tsx`

## Deployment Options

### Option 1: Vercel (Recommended)
1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy with one click

### Option 2: Netlify
1. Push your code to GitHub
2. Visit [netlify.com](https://netlify.com)
3. Import your repository
4. Build command: `npm run build`
5. Publish directory: `dist`

### Option 3: GitHub Pages
1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to `package.json`:
```json
"homepage": "https://yourusername.github.io/repository-name",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

3. Deploy:
```bash
npm run deploy
```

### Option 4: Traditional Hosting (cPanel, etc.)
1. Build the project:
```bash
npm run build
```

2. Upload the contents of the `dist` folder to your hosting server

3. Configure your server to serve `index.html` for all routes

## Performance Optimizations

- Lazy loading for images
- Code splitting with React Router
- Optimized production build with Vite
- Minified CSS and JavaScript
- Tree-shaking for smaller bundle size

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Future Enhancements

- Add backend integration for contact form
- Implement CMS for easy content management
- Add video player for portfolio items
- Integrate blog section
- Add client login portal
- Implement analytics tracking
- Add multilingual support

## License

This project is available for commercial use.

## Support

For questions or support, contact:
- Email: info@raghavproductions.com
- Phone: +91 98765 43210

---

**Built with passion for cinematic storytelling** ⭐
