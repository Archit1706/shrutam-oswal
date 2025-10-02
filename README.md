# Shrutam Oswal - Portfolio Website

A modern, responsive portfolio website built with Next.js 15, featuring smooth animations, an interactive DNA strand visualization, and a comprehensive showcase of projects across mechatronics, mechanical engineering, and robotics domains.

## ✨ Features

-   🎨 **Modern Design**: Gradient backgrounds, glassmorphism effects, and smooth animations
-   🧬 **Interactive DNA Strand**: 3D rotating visualization displaying technical skills
-   📱 **Fully Responsive**: Optimized for all screen sizes from mobile to desktop
-   🎭 **Smooth Transitions**: Page transitions and component animations for enhanced UX
-   🎯 **Project Carousel**: Navigate through projects in three domains
-   💼 **Professional Experience Timeline**: Visual timeline with detailed achievements
-   📊 **Skills Categorization**: Interactive skill display by category
-   ♿ **Accessible**: WCAG compliant with keyboard navigation support
-   🚀 **Performance Optimized**: Fast loading with Next.js App Router

## 🛠️ Tech Stack

-   **Framework**: Next.js 15.5.4
-   **React**: 19.1.0
-   **Styling**: Tailwind CSS 4
-   **Fonts**: Geist Sans & Geist Mono
-   **Build Tool**: Turbopack

## 📁 Project Structure

```
shrutam-oswal/
├── app/
│   ├── about/
│   │   └── page.js          # About page with education & skills
│   ├── experience/
│   │   └── page.js          # Professional experience timeline
│   ├── projects/
│   │   └── page.js          # Project carousel by domain
│   ├── globals.css          # Global styles & animations
│   ├── layout.js            # Root layout with metadata
│   └── page.js              # Home page with DNA strand
├── components/
│   ├── DNAStrand.js         # Interactive 3D DNA visualization
│   └── MobileNav.js         # Mobile navigation menu
├── data/
│   └── data.js              # All static content (SINGLE SOURCE OF TRUTH)
├── public/                  # Static assets
├── package.json
├── next.config.mjs
├── tailwind.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites

-   Node.js 18.18.0 or higher
-   npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository** (or use your existing project)

    ```bash
    git clone <your-repo-url>
    cd shrutam-oswal
    ```

2. **Install dependencies**

    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

3. **Run the development server**

    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm run start
```

## 📝 Content Management

All content is managed through a single `data/data.js` file for easy updates. Simply modify the data objects to update:

-   Personal information
-   Social links
-   Technologies and skills
-   Education history
-   Professional experience
-   Projects (across all domains)
-   Certifications
-   Awards

### Example: Adding a New Project

```javascript
// In data/data.js
export const projects = {
    mechatronics: [
        {
            id: 1,
            title: "Your New Project",
            subtitle: "Project Subtitle",
            duration: "2024",
            tier: "Core Experience",
            category: "Mechatronics",
            context: "Project description...",
            sections: {
                "Section 1": "Details...",
                "Section 2": "More details...",
            },
            technologies: ["Tech1", "Tech2"],
            metrics: {
                "Metric 1": "Value 1",
            },
            achievements: ["Achievement 1", "Achievement 2"],
            featured: true,
            color: "#a855f7",
        },
        // ... more projects
    ],
};
```

## 🎨 Customization

### Colors

The portfolio uses a teal/lime gradient theme. To customize colors, update:

1. **CSS Variables** in `app/globals.css`:

    ```css
    :root {
        --teal: #a855f7;
        --lime: #ec4899;
    }
    ```

2. **Tailwind Configuration** for theme colors

### Animations

All animations are defined in `app/globals.css`. You can:

-   Adjust animation duration
-   Modify easing functions
-   Add new keyframe animations

### DNA Strand

Customize the DNA strand in `components/DNAStrand.js`:

-   Adjust rotation speed
-   Modify radius and positioning
-   Change colors and effects

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:

-   **Mobile**: < 768px
-   **Tablet**: 768px - 1024px
-   **Desktop**: > 1024px

Mobile navigation automatically activates on smaller screens.

## ⚡ Performance

-   **Fast Refresh**: Instant feedback during development
-   **Image Optimization**: Automatic image optimization with Next.js
-   **Code Splitting**: Automatic code splitting for faster loads
-   **CSS Optimization**: Tailwind purges unused styles in production

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Deploy with one click

### Other Platforms

The portfolio can be deployed to any platform supporting Next.js:

-   Netlify
-   AWS Amplify
-   Digital Ocean
-   Your own server

## 🔧 Development Tips

1. **Hot Reload**: Changes to components auto-refresh
2. **Data Updates**: Modify `data/data.js` for content changes
3. **Styling**: Use Tailwind utility classes for quick styling
4. **Components**: Keep components in `components/` directory
5. **Pages**: Add new routes in `app/` directory

## 📄 File Descriptions

### Key Files

-   **`data/data.js`**: Single source of truth for all content
-   **`app/page.js`**: Home page with hero section and DNA strand
-   **`app/about/page.js`**: Education, skills, and certifications
-   **`app/experience/page.js`**: Professional experience timeline
-   **`app/projects/page.js`**: Project showcase with carousel
-   **`components/DNAStrand.js`**: Interactive 3D skill visualization
-   **`components/MobileNav.js`**: Responsive mobile menu
-   **`app/globals.css`**: Global styles, animations, and utilities

## 🐛 Troubleshooting

### Port Already in Use

```bash
# Use a different port
npm run dev -- -p 3001
```

### Build Errors

```bash
# Clear cache and reinstall
rm -rf .next node_modules
npm install
npm run dev
```

### Styling Issues

-   Ensure Tailwind is properly configured
-   Check for conflicting CSS
-   Verify PostCSS setup

## 📚 Resources

-   [Next.js Documentation](https://nextjs.org/docs)
-   [Tailwind CSS Documentation](https://tailwindcss.com/docs)
-   [React Documentation](https://react.dev)

## 🤝 Contributing

This is a personal portfolio, but suggestions are welcome! Feel free to:

1. Fork the repository
2. Create a feature branch
3. Submit a pull request

## 📧 Contact

**Shrutam Oswal**

-   Email: oswalshrutam@outlook.com
-   Phone: +1 (773) 842-8096
-   Location: Chicago, IL, USA
-   LinkedIn: [linkedin.com/in/shrutam](https://linkedin.com/in/shrutam)

## 📄 License

This project is created for personal use. Feel free to use it as inspiration for your own portfolio!

## 🙏 Acknowledgments

-   Next.js team for the amazing framework
-   Tailwind CSS for the utility-first CSS
-   Vercel for deployment platform

---

**Built with ❤️ using Next.js and Tailwind CSS**
