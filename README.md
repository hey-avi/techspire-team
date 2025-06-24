
# TechSpire Team - Portfolio Showcase

[![Deploy to GitHub Pages](https://github.com/hey-avi/techspire-team/actions/workflows/deploy.yml/badge.svg)](https://github.com/hey-avi/techspire-team/actions/workflows/deploy.yml)

A professional sample showcase portfolio demonstrating modern web development techniques and team collaboration. This project serves as a template and demonstration of a responsive team portfolio website built with React, TypeScript, and Tailwind CSS.

## 📋 About This Project

This is a **sample showcase portfolio** created by Team Shivaay to demonstrate proficiency in modern web development technologies and best practices. The project features a clean, professional design with dark mode support, smooth animations, and responsive layouts suitable for team portfolios and professional showcases.

## 🚀 Key Features

- ⚡ **Modern Development Stack**: Built with Vite for optimal development experience
- 🎨 **Responsive Design**: Crafted with Tailwind CSS for seamless cross-device compatibility
- 🌓 **Theme Switching**: Elegant dark/light mode toggle functionality
- ✨ **Smooth Animations**: Enhanced user experience with Framer Motion
- 📱 **Mobile-First Approach**: Optimized for all screen sizes and devices
- 🎯 **Type Safety**: Full TypeScript implementation for robust code quality
- 🔄 **CI/CD Pipeline**: Automated deployments using GitHub Actions
- 🏗️ **Component Architecture**: Modular and maintainable code structure

## 🛠️ Technology Stack

| Technology | Purpose | Version |
|------------|---------|---------|
| **React** | Frontend Framework | ^18.x |
| **TypeScript** | Type Safety & Development | ^5.x |
| **Tailwind CSS** | Styling & Design System | ^3.x |
| **Framer Motion** | Animations & Transitions | ^11.x |
| **Vite** | Build Tool & Development Server | ^5.x |
| **GitHub Actions** | CI/CD & Deployment | Latest |

## 📦 Getting Started

### Prerequisites

Ensure you have the following installed on your development machine:
- **Node.js** (v18.0.0 or higher)
- **npm** (v8.0.0 or higher) or **yarn**
- **Git** for version control

### Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/hey-avi/techspire-team.git
   cd techspire-team
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   # or
   yarn build
   ```

5. **Preview production build:**
   ```bash
   npm run preview
   # or
   yarn preview
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

## 📂 Project Architecture

```
techspire-team/
├── public/                 # Static assets
│   └── images/            # Image resources
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── Contact/      # Contact section
│   │   ├── Hero/         # Hero section
│   │   ├── MemberProfile/# Team member profiles
│   │   ├── Navbar/       # Navigation component
│   │   ├── ProjectShowcase/ # Project displays
│   │   ├── Roadmap/      # Roadmap visualization
│   │   └── TeamSection/  # Team information
│   ├── context/          # React context providers
│   │   └── ThemeContext.tsx # Theme management
│   ├── styles/           # Global styles
│   │   └── index.css     # Main stylesheet
│   ├── types/            # TypeScript type definitions
│   │   ├── project.ts    # Project-related types
│   │   ├── roadmap.ts    # Roadmap types
│   │   ├── team.ts       # Team member types
│   │   └── theme.ts      # Theme types
│   ├── utils/            # Utility functions
│   │   └── constants.ts  # Application constants
│   ├── App.tsx           # Main application component
│   └── main.tsx          # Application entry point
├── .github/
│   └── workflows/        # GitHub Actions CI/CD
├── index.html            # HTML template
├── package.json          # Project dependencies
├── tailwind.config.js    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
├── vite.config.ts        # Vite build configuration
└── README.md             # Project documentation
```

## 🎨 Customization Guide

### Theme Configuration

Customize the visual theme in `tailwind.config.js`:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          500: '#3b82f6',
          900: '#1e3a8a',
        },
        // Add custom color palette
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        // Add custom fonts
      }
    }
  }
}
```

### Team Member Configuration

Update team information in the respective component files:

```typescript
// Example team member structure
interface TeamMember {
  name: string;
  role: string;
  email: string;
  bio: string;
  skills: string[];
  social: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
}
```

## 📱 Responsive Design Philosophy

The application follows a mobile-first responsive design approach with carefully crafted breakpoints:

| Breakpoint | Description | Range |
|------------|-------------|-------|
| **Mobile** | Small devices | 0 - 639px |
| **Tablet** | Medium devices | 640px - 1023px |
| **Desktop** | Large devices | 1024px - 1279px |
| **Large Desktop** | Extra large devices | 1280px+ |

All components are optimized for touch interactions and various screen densities.

## 🚀 Deployment & CI/CD

### Automated Deployment

The project features automated deployment to GitHub Pages using GitHub Actions. The workflow triggers on:
- Push to `main` branch
- Pull request merges
- Manual workflow dispatch

### Manual Deployment

For manual deployment or custom hosting:

```bash
# Build the project
npm run build

# The built files will be in the 'dist' directory
# Deploy these files to your preferred hosting service
```

### Environment Variables

For custom deployments, you may need to configure:

```env
# .env (optional)
VITE_APP_TITLE=Your Team Name
VITE_BASE_URL=your-domain.com
```

## 🤝 Development Guidelines

### Contributing

We welcome contributions to improve this showcase portfolio. Please follow these guidelines:

1. **Fork the repository** and create your feature branch:
   ```bash
   git checkout -b feature/enhancement-name
   ```

2. **Follow coding standards:**
   - Use TypeScript for type safety
   - Follow the existing code style and conventions
   - Write meaningful commit messages
   - Add appropriate comments for complex logic

3. **Test your changes:**
   - Ensure the build process completes successfully
   - Test responsive design across different devices
   - Verify dark/light mode functionality

4. **Submit your changes:**
   ```bash
   git commit -m 'Add: Brief description of changes'
   git push origin feature/enhancement-name
   ```

5. **Create a Pull Request** with a detailed description of your changes

### Code Quality Standards

- **ESLint**: Follow the configured linting rules
- **Prettier**: Code formatting is automatically handled
- **TypeScript**: Maintain strict type checking
- **Component Structure**: Keep components focused and reusable

## 📄 License

This project is proprietary software owned by Team Shivaay. All rights reserved. See the [LICENSE](LICENSE) file for complete terms and conditions.

## 🔄 Project Status

**Current Version:** 2.0.0  
**Last Updated:** June 24, 2025  
**Status:** Active Development  

## 👥 Team Shivaay

This project is developed and maintained by **Team Shivaay**:

| Team Member | Role | Contact |
|-------------|------|---------|
| **Avinash Meena** | Lead Developer & Project Manager | [avinash.meena2023@glbajajgroup.org](mailto:avinash.meena2023@glbajajgroup.org) |
| **Neha Kumari** | Frontend Developer & UI Designer | [neha.kumari2023@glbajajgroup.org](mailto:neha.kumari2023@glbajajgroup.org) |
| **Deepak Verma** | Full-Stack Developer & DevOps | [deepak.verma2023@glbajajgroup.org](mailto:deepak.verma2023@glbajajgroup.org) |

### 📧 Contact Information

For inquiries, collaboration opportunities, or support regarding this project, please contact any team member using the email addresses provided above.

## 🙏 Acknowledgments & Credits

We extend our gratitude to the following technologies and communities:

- **[React Team](https://reactjs.org/)** - For the exceptional frontend framework
- **[Tailwind CSS](https://tailwindcss.com/)** - For the utility-first CSS framework
- **[Framer Motion](https://www.framer.com/motion/)** - For smooth animations and transitions
- **[Vite](https://vitejs.dev/)** - For the lightning-fast build tool
- **[TypeScript](https://www.typescriptlang.org/)** - For enhanced developer experience
- **Open Source Community** - For continuous inspiration and learning

---

<div align="center">

**Built with ❤️ by Team Shivaay**

*This project serves as a demonstration of modern web development practices and team collaboration skills.*

</div>
