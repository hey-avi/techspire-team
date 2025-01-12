```markdown
# TechSpire Team Portfolio

[![Deploy to GitHub Pages](https://github.com/hey-avi/techspire-team/actions/workflows/deploy.yml/badge.svg)](https://github.com/hey-avi/techspire-team/actions/workflows/deploy.yml)

A modern, responsive team portfolio website built with React, TypeScript, and Tailwind CSS. Features dark mode support and smooth animations.

## 🌟 Live Demo

Visit our website: [TechSpire Team](https://hey-avi.github.io/techspire-team/)

## 🚀 Features

- ⚡ Built with Vite for lightning-fast development
- 🎨 Responsive design with Tailwind CSS
- 🌓 Dark/Light mode toggle
- ✨ Smooth animations using Framer Motion
- 📱 Mobile-friendly interface
- 🎯 TypeScript for type safety
- 🔄 Automatic deployments to GitHub Pages

## 🛠️ Tech Stack

- React
- TypeScript
- Tailwind CSS
- Framer Motion
- Vite
- GitHub Actions

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/hey-avi/techspire-team.git
```

2. Install dependencies:
```bash
cd techspire-team
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_APP_TITLE=TechSpire Team
```

### TypeScript Configuration

The project uses two TypeScript configuration files:
- `tsconfig.json` - Main TypeScript configuration
- `tsconfig.node.json` - Configuration for Vite and Node.js

## 📂 Project Structure

```
techspire-team/
├── src/
│   ├── assets/
│   ├── components/
│   ├── context/
│   ├── data/
│   └── App.tsx
├── public/
├── .github/
│   └── workflows/
├── index.html
└── package.json
```

## 🎨 Customization

### Tailwind Theme

You can customize the theme in `tailwind.config.js`:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {...},
        // Add your custom colors
      }
    }
  }
}
```

### Adding Team Members

Update the team members data in `src/data/team.ts`:

```typescript
export const teamMembers = [
  {
    name: "Team Member",
    role: "Position",
    // Add member details
  }
]
```

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: 0-640px
- Tablet: 640px-1024px
- Desktop: 1024px+

## 🚀 Deployment

The project automatically deploys to GitHub Pages using GitHub Actions when changes are pushed to the main branch.

To deploy manually:
```bash
npm run deploy
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔄 Last Updated

Last updated: January 12, 2025

## 👥 Authors

- [@hey-avi](https://github.com/hey-avi)

## 🙏 Acknowledgments

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Vite](https://vitejs.dev/)
```

This README.md includes:
1. Project overview and features
2. Installation instructions
3. Tech stack details
4. Project structure
5. Customization guidance
6. Deployment information
7. Contributing guidelines
8. Up-to-date timestamp
9. Your GitHub username as the author

Would you like me to:
1. Add any specific features or sections?
2. Modify any existing sections?
3. Add more detailed technical information?
4. Include any specific deployment instructions?
