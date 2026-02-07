#!/bin/bash

echo "🚀 Starting deployment process..."

# Build the project
echo "📦 Building project..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo "📁 Build output is in the 'dist' folder"
    echo ""
    echo "Deployment options:"
    echo "1. Vercel: Run 'vercel --prod'"
    echo "2. Netlify: Run 'netlify deploy --prod --dir=dist'"
    echo "3. GitHub Pages: Push 'dist' folder to gh-pages branch"
    echo "4. Manual: Upload 'dist' folder to your hosting provider"
else
    echo "❌ Build failed. Please check the errors above."
    exit 1
fi
