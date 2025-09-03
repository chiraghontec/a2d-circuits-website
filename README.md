# 🔧 A2D Circuits Website

> A modern, responsive website for A2D Circuits built with Next.js, TypeScript, and Tailwind CSS.

[![Next.js](https://img.shields.io/badge/Next.js-14.0.4-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=for-the-badge)](CONTRIBUTING.md)

## 🌟 Overview

A2D Circuits website is a modern, high-performance web application showcasing electronic circuit solutions. Built with cutting-edge technologies, it provides an excellent user experience across all devices while maintaining optimal performance and SEO standards.

## ✨ Key Features

### 🎨 Design & User Experience
- **Responsive Design**: Mobile-first approach ensuring perfect display on all devices
- **Modern UI/UX**: Clean, professional interface with intuitive navigation
- **Interactive Elements**: Engaging user interactions and smooth animations
- **Accessibility**: WCAG compliant design for inclusive user experience
- **Brand Consistency**: Consistent use of A2D brand colors and typography

### ⚡ Performance & SEO
- **Server-Side Rendering**: Next.js SSR for improved loading times and SEO
- **Image Optimization**: Automatic image optimization with Next.js Image component
- **Core Web Vitals**: Optimized for Google's Core Web Vitals metrics
- **SEO Optimized**: Meta tags, structured data, and search engine friendly URLs

### 🛠️ Technical Excellence
- **Type Safety**: Full TypeScript implementation for robust code
- **Component Architecture**: Reusable, maintainable component library
- **Code Quality**: ESLint, Prettier, and automated testing
- **Modern CSS**: Tailwind CSS with custom design system

## 🏗️ Tech Stack

| Category | Technology | Version | Purpose |
|----------|------------|---------|---------|
| **Framework** | Next.js | 14.0.4 | React framework with SSR |
| **Language** | TypeScript | 5.0+ | Type-safe JavaScript |
| **Styling** | Tailwind CSS | 3.0+ | Utility-first CSS framework |
| **Icons** | Heroicons | 2.0+ | Beautiful hand-crafted SVG icons |
| **Image Optimization** | Next.js Image | Built-in | Automatic image optimization |
| **Development** | ESLint + Prettier | Latest | Code quality and formatting |

## 📄 Site Pages

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | `index.tsx` | Landing page with hero, featured products, and contact |
| `/product/[id]` | `product/[id].tsx` | Dynamic product detail pages |
| `/product-example` | `product-example.tsx` | Demo product page template |
| `/products` | `products.tsx` | Product catalog with search and filtering |
| `/about` | `about.tsx` | Company information, team, and timeline |
| `/contact` | `contact.tsx` | Contact form and business information |

## 🚀 Quick Start

### Prerequisites

- **Node.js**: 18.0 or later
- **Package Manager**: npm, yarn, or pnpm
- **Git**: For version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR_ORG/a2d-circuits-website.git
   cd a2d-circuits-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### 📋 Available Scripts

| Command | Description | Usage |
|---------|-------------|-------|
| `dev` | Start development server | `npm run dev` |
| `build` | Build for production | `npm run build` |
| `start` | Start production server | `npm run start` |
| `lint` | Run ESLint | `npm run lint` |
| `lint:fix` | Fix ESLint issues | `npm run lint:fix` |
| `type-check` | Run TypeScript checks | `npm run type-check` |

## 📁 Project Architecture

```
a2d-circuits-website/
├── 📂 .github/                 # GitHub templates and workflows
│   ├── 📂 ISSUE_TEMPLATE/     # Issue templates
│   └── 📄 pull_request_template.md
├── 📂 public/                  # Static assets
│   ├── 🖼️ a2d-logo.png       # Company logo
│   └── 📄 favicon.ico         # Site favicon
├── 📂 src/                     # Source code
│   ├── 📂 components/         # Reusable UI components
│   │   ├── 🧩 Header.tsx     # Navigation header
│   │   ├── 🧩 Footer.tsx     # Site footer
│   │   └── 🧩 Layout.tsx     # Page layout wrapper
│   ├── 📂 pages/             # Next.js pages (routing)
│   │   ├── 🏠 index.tsx      # Home/Landing page
│   │   ├── 📦 products.tsx   # Products catalog
│   │   ├── ℹ️ about.tsx      # About company
│   │   ├── 📞 contact.tsx    # Contact page
│   │   └── ⚙️ _app.tsx       # App configuration
│   ├── 📂 styles/            # Styling files
│   │   └── 🎨 globals.css    # Global styles + Tailwind
│   └── 📂 types/             # TypeScript type definitions
├── 📄 .gitignore             # Git ignore rules
├── 📄 .eslintrc.json         # ESLint configuration
├── 📄 CONTRIBUTING.md        # Contribution guidelines
├── 📄 README.md              # Project documentation
├── 📄 next.config.js         # Next.js configuration
├── 📄 package.json           # Dependencies and scripts
├── 📄 tailwind.config.js     # Tailwind CSS configuration
└── 📄 tsconfig.json          # TypeScript configuration
```

## 🎨 Design System

### 🌈 Brand Colors

```css
:root {
  --color-primary: #ff6b35;     /* A2D Orange */
  --color-black: #1a1a1a;       /* Deep Black */
  --color-blue: #2e86ab;        /* A2D Blue */
  --color-warm-white: #fafafa;  /* Background */
  --color-charcoal: #333333;    /* Dark Gray */
  --color-light-gray: #e5e5e5;  /* Light Gray */
}
```

### 📝 Typography

- **Primary Font**: Inter (Google Fonts)
- **Headings**: Bold weight (700) with increased letter spacing
- **Body Text**: Regular weight (400) with optimized line height (1.6)
- **Code**: Monospace for technical content

### 🎭 Component Guidelines

- **Buttons**: Consistent padding, rounded corners, hover states
- **Cards**: Shadow elevation, rounded borders, consistent spacing
- **Forms**: Clear labels, validation states, accessibility features
- **Navigation**: Clear hierarchy, active states, mobile responsiveness

## 🤝 Contributing

We welcome contributions from the team! Here's how to get involved:

### 🔄 Development Workflow

1. **Read Guidelines**: Check our [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines
2. **Create Branch**: `git checkout -b feature/your-feature-name`
3. **Make Changes**: Follow our coding standards and conventions
4. **Test Changes**: Ensure all tests pass and functionality works
5. **Submit PR**: Create a pull request using our template

### 📋 Code Standards

- **TypeScript**: Strict mode enabled, proper type definitions
- **ESLint**: Follow configured rules, no warnings allowed
- **Prettier**: Consistent code formatting
- **Conventional Commits**: Use semantic commit messages

### 🧪 Testing Guidelines

- Write unit tests for utility functions
- Test component rendering and interactions
- Ensure responsive design works across devices
- Validate accessibility features

## 🚀 Deployment

### 🌐 Production Deployment

**Recommended Platforms:**
- [Vercel](https://vercel.com) (Optimized for Next.js)
- [Netlify](https://netlify.com) (Static site generation)
- [AWS Amplify](https://aws.amazon.com/amplify/)

### 🔧 Build Process

```bash
# Build for production
npm run build

# Start production server
npm run start

# Static export (if needed)
npm run build && npm run export
```

### 🌍 Environment Variables

Create `.env.local` for local development:
```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_CONTACT_EMAIL=contact@a2dcircuits.com
```

## 📊 Performance Metrics

- **Lighthouse Score**: 95+ across all categories
- **Core Web Vitals**: Green for LCP, FID, and CLS
- **Bundle Size**: Optimized with Next.js automatic splitting
- **Image Optimization**: WebP format with responsive sizing

## 🔒 Security

- **Dependencies**: Regularly updated and security-scanned
- **Environment Variables**: Sensitive data properly protected
- **Input Validation**: All forms include proper validation
- **CSP Headers**: Content Security Policy implemented

## 📞 Support & Contact

### 🆘 Getting Help

- **Documentation**: Check this README and [CONTRIBUTING.md](CONTRIBUTING.md)
- **Issues**: Create a [GitHub issue](https://github.com/YOUR_ORG/a2d-circuits-website/issues)
- **Discussions**: Use [GitHub Discussions](https://github.com/YOUR_ORG/a2d-circuits-website/discussions)

### 👥 Team Communication

- **Development Team**: dev-team@a2dcircuits.com
- **Project Lead**: [Your Name] - [email]
- **Design Team**: design@a2dcircuits.com

## 📄 License

This project is proprietary to A2D Circuits. All rights reserved.

## 🙏 Acknowledgments

- **Next.js Team**: For the amazing React framework
- **Tailwind CSS**: For the utility-first CSS framework
- **Vercel**: For hosting and deployment platform
- **Contributors**: All team members who have contributed to this project

---

<div align="center">

**Built with ❤️ by the A2D Circuits Team**

[🌐 Visit Website](https://a2dcircuits.com) • [📧 Contact Us](mailto:contact@a2dcircuits.com) • [🐛 Report Bug](https://github.com/YOUR_ORG/a2d-circuits-website/issues)

</div>
