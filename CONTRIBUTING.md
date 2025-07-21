# Contributing to a2d Circuits Website

Thank you for your interest in contributing to the a2d Circuits website! This document provides guidelines and information for contributors.

## 🤝 Code of Conduct

We are committed to providing a welcoming and inclusive environment for all contributors. Please be respectful and professional in all interactions.

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager
- Git
- Basic knowledge of React, Next.js, and TypeScript

### Setup Development Environment

1. **Fork the repository** on GitHub
2. **Clone your fork**
   ```bash
   git clone https://github.com/YOUR_USERNAME/a2d-circuits-website.git
   cd a2d-circuits-website
   ```
3. **Add upstream remote**
   ```bash
   git remote add upstream https://github.com/ORIGINAL_OWNER/a2d-circuits-website.git
   ```
4. **Install dependencies**
   ```bash
   npm install
   ```
5. **Start development server**
   ```bash
   npm run dev
   ```

## 🔄 Development Workflow

### 1. Create a Feature Branch
Always create a new branch for your work:
```bash
git checkout main
git pull upstream main
git checkout -b feature/your-feature-name
```

### 2. Make Your Changes
- Follow the existing code style and conventions
- Write clear, descriptive commit messages
- Add tests if applicable
- Update documentation as needed

### 3. Commit Your Changes
We use [Conventional Commits](https://conventionalcommits.org/):
```bash
git add .
git commit -m "feat: add new product filter functionality"
```

#### Commit Types:
- `feat:` - New features
- `fix:` - Bug fixes
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, etc.)
- `refactor:` - Code refactoring
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks

### 4. Push and Create Pull Request
```bash
git push origin feature/your-feature-name
```

Then create a Pull Request on GitHub using our PR template.

## 📋 Pull Request Process

### Before Submitting
- [ ] Code follows project style guidelines
- [ ] Self-review of code completed
- [ ] Tests pass locally
- [ ] Documentation updated if needed
- [ ] Commit messages follow conventional format

### PR Requirements
1. **Clear title** describing the change
2. **Detailed description** using our template
3. **Link related issues** if applicable
4. **Screenshots** for UI changes
5. **Test plan** description

### Review Process
- PRs require at least 1 approval from team members
- Address all feedback before merging
- Keep PRs focused and reasonably sized
- Maintain clean commit history

## 🎨 Code Style Guidelines

### TypeScript/React
- Use functional components with hooks
- Prefer TypeScript interfaces over types
- Use descriptive variable and function names
- Follow React best practices

### CSS/Tailwind
- Use Tailwind CSS utility classes
- Follow mobile-first responsive design
- Maintain consistent spacing and colors
- Use CSS custom properties for brand colors

### File Organization
```
src/
├── components/     # Reusable UI components
├── pages/         # Next.js pages
├── styles/        # Global styles
└── types/         # TypeScript type definitions
```

## 🐛 Reporting Issues

### Bug Reports
Use the bug report template and include:
- Clear description of the issue
- Steps to reproduce
- Expected vs actual behavior
- Browser/OS information
- Screenshots if applicable

### Feature Requests
Use the feature request template and include:
- Clear description of the feature
- Use case and motivation
- Possible implementation approach
- Alternative solutions considered

## 🧪 Testing

### Running Tests
```bash
npm run test          # Run tests
npm run test:watch    # Run tests in watch mode
npm run test:coverage # Generate coverage report
```

### Writing Tests
- Write unit tests for utility functions
- Add integration tests for components
- Include E2E tests for critical user flows
- Maintain good test coverage

## 🚀 Deployment

### Development
- Changes to feature branches trigger preview deployments
- Review deployments before merging

### Production
- Only main branch deploys to production
- All PRs must be reviewed and approved
- Automated deployment via Vercel/Netlify

## 📞 Getting Help

### Communication Channels
- **GitHub Issues**: For bugs and feature requests
- **GitHub Discussions**: For questions and general discussion
- **Email**: dev-team@a2dcircuits.com

### Development Questions
- Check existing documentation first
- Search closed issues for similar problems
- Ask in GitHub Discussions
- Tag relevant team members in issues

## 🎯 Areas for Contribution

### High Priority
- [ ] Product search and filtering improvements
- [ ] Performance optimizations
- [ ] Accessibility enhancements
- [ ] Mobile UX improvements

### Medium Priority
- [ ] Additional product pages
- [ ] Blog functionality
- [ ] Customer testimonials
- [ ] Newsletter integration

### Low Priority
- [ ] Animation enhancements
- [ ] Additional language support
- [ ] Advanced analytics
- [ ] Social media integration

## 📝 Documentation

### Code Documentation
- Add JSDoc comments for functions and components
- Document complex logic and business rules
- Keep README and CONTRIBUTING files updated

### Component Documentation
- Document component props and usage
- Include examples in component files
- Maintain style guide for UI components

## 🔒 Security

### Reporting Security Issues
- **DO NOT** create public issues for security vulnerabilities
- Email security@a2dcircuits.com with details
- Use responsible disclosure practices

### Security Best Practices
- Keep dependencies updated
- Follow security linting rules
- Sanitize user inputs
- Use environment variables for sensitive data

## 📄 License

By contributing, you agree that your contributions will be licensed under the same license as the project.

## 🙏 Recognition

Contributors will be recognized in:
- GitHub contributors list
- Release notes for significant contributions
- Team acknowledgments

---

Thank you for contributing to a2d Circuits! 🚀
