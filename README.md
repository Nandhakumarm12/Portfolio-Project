# Nandhakumar Manikandasamy - Portfolio Website

A modern, responsive portfolio website built with Next.js 14, TypeScript, Tailwind CSS

## ✨ Features

- **Modern Tech Stack**: Next.js 14, React 18, TypeScript, Tailwind CSS
- **Responsive Design**: Mobile-first approach with smooth animations
- **Dark Mode**: Built-in theme switching with next-themes
- **Blog System**: MDX-based blog with markdown support
- **AI Chat Assistant**: Interactive chat to learn about my experience
- **SEO Optimized**: Meta tags, Open Graph, and structured data
- **Performance**: Optimized images, lazy loading, and code splitting
- **Analytics**: Vercel Analytics and Speed Insights integration

## 🛠️ Tech Stack

### Frontend
- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/) + Custom components
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)

### Backend & APIs
- **API Routes**: Next.js API Routes
- **AI Integration**: Ready for OpenAI/Anthropic API integration
- **Static Generation**: Static Site Generation (SSG) for optimal performance

### Development Tools
- **Linting**: ESLint with Next.js config
- **Type Checking**: TypeScript strict mode
- **Build Output**: Static export for easy deployment

## 📁 Project Structure

```
nandha-portfolio/
├── app/                    # Next.js 14 app directory
│   ├── api/               # API routes
│   ├── blog/              # Blog pages
│   ├── sections/          # Page sections (Hero, About, etc.)
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # UI components (Button, Card, etc.)
│   ├── ChatComponent.tsx # AI chat widget
│   ├── Navigation.tsx    # Header navigation
│   └── Footer.tsx        # Footer
├── lib/                   # Utility functions
│   ├── data.ts           # Portfolio data
│   └── utils.ts          # Helper functions
├── types/                 # TypeScript types
├── content/               # Content files
│   └── blogs/            # Blog posts
├── public/               # Static assets
│   └── images/           # Images
├── next.config.js        # Next.js configuration
├── tailwind.config.ts    # Tailwind configuration
└── package.json          # Dependencies
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18.17 or later
- npm or yarn or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/nandha-portfolio.git
   cd nandha-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables (optional)**
   ```bash
   cp .env.example .env.local
   ```
   Edit `.env.local` and add your OpenAI API key if you want AI chat features.

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open [http://localhost:3000](http://localhost:3000)** in your browser

### Building for Production

```bash
npm run build
```

This creates a static export in the `dist` folder, ready for deployment.

## 📝 Customization

### Updating Content

Edit `lib/data.ts` to update:
- Personal information
- Experience
- Education
- Skills
- Projects
- Blog posts

### Adding New Blog Posts

Add new blog post objects to the `blogPosts` array in `lib/data.ts`:

```typescript
{
  slug: "your-post-slug",
  title: "Your Post Title",
  excerpt: "Brief description...",
  content: `# Markdown content here...`,
  date: "2024-01-15",
  readingTime: "5 min read",
  tags: ["AI", "Technology"],
  featured: true
}
```
