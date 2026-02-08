# Portfolio Website - Chand Zaib

A modern, professional portfolio website built with React, Vite, and Tailwind CSS.

## 🚀 Features

- **Responsive Design**: Fully responsive across all devices
- **Dark/Light Mode**: Toggle between dark and light themes
- **Single Page Application**: Smooth navigation with React Router
- **Modern UI**: Clean, professional design with smooth animations
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Scalable Architecture**: Easy to add new projects and content

## 📁 Project Structure

```
Portfolio_Website/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       # Navigation with dark mode toggle
│   │   └── Footer.jsx       # Footer with social links
│   ├── pages/
│   │   ├── Home.jsx         # Landing page
│   │   ├── About.jsx        # About me page
│   │   ├── Skills.jsx       # Skills showcase
│   │   ├── Experience.jsx   # Work experience
│   │   ├── Projects.jsx     # Projects portfolio
│   │   ├── Media.jsx        # Media gallery
│   │   └── Contact.jsx      # Contact form
│   ├── data/
│   │   └── portfolioData.js # Centralized data management
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
├── public/                  # Static assets
├── index.html              # HTML template
└── package.json            # Dependencies

```

## 🛠️ Technologies Used

- **React 18**: UI library
- **Vite**: Build tool and dev server
- **React Router**: Client-side routing
- **Tailwind CSS v4**: Utility-first CSS framework (configured with PostCSS plugin)
- **JavaScript ES6+**: Modern JavaScript

## 📝 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173`

## 🎨 Customization

### Update Personal Information

Edit `src/data/portfolioData.js` to update:
- Personal info (name, email, links)
- Skills
- Experience
- Projects
- Media gallery

### Add Profile Picture

1. Add your profile picture to `public/profile.jpg`
2. Update the `profileImage` path in `portfolioData.js`

### Add Project Images

1. Add project thumbnails to `public/projects/`
2. Add media files to `public/media/`
3. Update project data in `portfolioData.js`

### Update CV

1. Add your CV PDF to `public/`
2. Update the `cvLink` in `portfolioData.js`

## 📦 Building for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## 🚀 Deployment

You can deploy this website to:
- **Vercel**: `vercel deploy`
- **Netlify**: Drag and drop the `dist` folder
- **GitHub Pages**: Use `gh-pages` package
- **Any static hosting service**

## 🎯 Future Enhancements

- [ ] Add blog section
- [ ] Integrate contact form with backend
- [ ] Add testimonials section
- [ ] Implement project filtering by technology
- [ ] Add loading animations
- [ ] Integrate analytics

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Chand Zaib**
- GitHub: [Update with your GitHub URL]
- LinkedIn: [Update with your LinkedIn URL]
- Email: [Update with your email]

---

Built with ❤️ using React and Tailwind CSS
