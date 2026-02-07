# Nandhakumar Manikandasamy - Portfolio Website

A modern, responsive portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion. Features a blog section, AI chat assistant, dark mode, and smooth animations.

![Portfolio Preview](https://via.placeholder.com/800x400?text=Portfolio+Preview)

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

## 🌐 Deployment Options

### Option 1: Vercel (Recommended)

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com).

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Or connect your GitHub repository** to Vercel for automatic deployments on every push.

**Why Vercel?**
- Zero configuration
- Automatic HTTPS
- Global CDN
- Preview deployments for pull requests
- Analytics included

### Option 2: GitHub Pages

1. **Update `next.config.js`**
   ```javascript
   const nextConfig = {
     output: 'export',
     distDir: 'dist',
     basePath: '/your-repo-name', // Add this for GitHub Pages
   }
   ```

2. **Build and deploy**
   ```bash
   npm run build
   ```

3. **Push to GitHub** and enable GitHub Pages in repository settings, pointing to the `dist` folder.

### Option 3: Netlify

1. **Install Netlify CLI**
   ```bash
   npm i -g netlify-cli
   ```

2. **Deploy**
   ```bash
   netlify deploy --prod --dir=dist
   ```

3. **Or connect your GitHub repository** to Netlify for continuous deployment.

### Option 4: AWS S3 + CloudFront

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Upload `dist` folder to S3 bucket** configured for static website hosting

3. **Set up CloudFront** CDN for global distribution and HTTPS

### Option 5: Docker

Create a `Dockerfile`:

```dockerfile
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

Build and run:
```bash
docker build -t nandha-portfolio .
docker run -p 3000:80 nandha-portfolio
```

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

### Styling

- **Colors**: Edit CSS variables in `app/globals.css`
- **Tailwind**: Modify `tailwind.config.ts` for custom colors, fonts, animations
- **Components**: Update component styles in `components/ui/`

### AI Chat Integration

The chat component currently uses predefined responses. To add AI:

1. **Get OpenAI API key** from [OpenAI](https://openai.com)

2. **Add to `.env.local`**
   ```
   OPENAI_API_KEY=sk-your-key-here
   ```

3. **Update API route** in `app/api/chat/route.ts` to call OpenAI API

4. **Update ChatComponent** to use the API instead of predefined responses

## 🔧 Troubleshooting

### Build Errors

**Error: `Cannot find module`**
- Run `npm install` to ensure all dependencies are installed
- Check that `tsconfig.json` paths are correct

**Error: `Image optimization`**
- Static export doesn't support Next.js Image Optimization
- Set `unoptimized: true` in `next.config.js` (already done)

### Development Issues

**Hot reload not working**
- Check that your Node.js version is 18.17+
- Try clearing `.next` folder: `rm -rf .next`

**Tailwind styles not applying**
- Ensure `tailwind.config.ts` content paths are correct
- Check that `globals.css` imports Tailwind directives

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contact

- **Email**: samynandhakumar82@gmail.com
- **LinkedIn**: [linkedin.com/in/nandhakumarm](https://linkedin.com/in/nandhakumarm)
- **GitHub**: [github.com/nandhakumar](https://github.com/nandhakumar)

---

Built with ❤️ using Next.js and Tailwind CSS
