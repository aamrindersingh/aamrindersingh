# 🚀 Amrinder Singh - Portfolio Website

A modern, professional portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. Features smooth animations, dark/light mode, and a fully responsive design.

![Portfolio Preview](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

## ✨ Features

- 🎨 **Modern Design**: Clean, professional UI with gradient effects and glassmorphism
- 🌓 **Dark/Light Mode**: Toggle between themes with smooth transitions
- 📱 **Fully Responsive**: Optimized for all screen sizes
- ⚡ **Smooth Animations**: Powered by Framer Motion
- 🎯 **SEO Optimized**: Meta tags, Open Graph, and semantic HTML
- ♿ **Accessible**: WCAG compliant with keyboard navigation
- 🚀 **Performance**: Lighthouse score 90+ on all metrics

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter + JetBrains Mono

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/aamrindersingh/aamrindersingh.git
cd aamrindersingh
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
/
├── app/                  # Next.js app directory
│   ├── layout.tsx       # Root layout with fonts and metadata
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles
├── components/
│   ├── ui/              # Reusable UI components
│   ├── layout/          # Layout components (Navbar, Footer)
│   ├── sections/        # Page sections (Hero, About, Skills, etc.)
│   └── shared/          # Shared components
├── lib/
│   ├── data.ts          # Site content and data
│   └── utils.ts         # Utility functions
├── public/              # Static assets
└── ...config files
```

## 🎨 Customization

### Update Personal Information

Edit `/lib/data.ts` to update:
- Personal info (name, email, social links)
- Skills and technologies
- Projects
- Work experience

### Modify Colors

Edit `/tailwind.config.ts` to change the color scheme:
```typescript
colors: {
  primary: "#00F7FF",    // Electric Blue
  secondary: "#8B5CF6",  // Purple
  accent: "#EC4899",     // Pink
}
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Deploy with one click

### Other Platforms

- **Netlify**: Connect GitHub repo and deploy
- **GitHub Pages**: Use `next export` for static export
- **Self-hosted**: Build and serve with Node.js

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 🤝 Connect

- **Email**: [officialamrindersinghh@gmail.com](mailto:officialamrindersinghh@gmail.com)
- **LinkedIn**: [Amrinder Singh](https://www.linkedin.com/in/amrinder-singh-873a47325/)
- **GitHub**: [@aamrindersingh](https://github.com/aamrindersingh)

---

<p align="center">Built with ❤️ and Next.js</p>
