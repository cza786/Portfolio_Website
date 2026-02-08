# Quick Setup Guide

## ✅ Project Successfully Created!

Your portfolio website is now running at: **http://localhost:5173**

## 🎯 Next Steps

### 1. View Your Portfolio
Open your web browser and navigate to:
```
http://localhost:5173
```

### 2. Customize Your Information

Edit `src/data/portfolioData.js` to update:

#### Personal Information
```javascript
export const personalInfo = {
  name: "Chand Zaib",
  email: "your.email@example.com",  // ← UPDATE THIS
  github: "https://github.com/yourusername",  // ← UPDATE THIS
  linkedin: "https://www.linkedin.com/in/yourusername",  // ← UPDATE THIS
  cvLink: "/path-to-cv.pdf",  // ← UPDATE THIS
  // ... rest of the info
};
```

### 3. Add Your Images

#### Profile Picture
1. Add your profile picture as `public/profile.jpg`
2. Or update the path in `portfolioData.js`:
   ```javascript
   profileImage: "/your-image-name.jpg"
   ```

#### Project Images
1. Create folder: `public/projects/`
2. Add project thumbnails
3. Create folder: `public/media/`
4. Add project screenshots and videos

#### CV/Resume
1. Add your CV PDF to `public/` folder
2. Update the `cvLink` in `portfolioData.js`

### 4. Add Your Projects

In `src/data/portfolioData.js`, add more projects to the `projects` array:

```javascript
{
  id: 3,  // Increment the ID
  title: "Your Project Name",
  category: "Web Development",  // or "Mobile Apps", "Data Science", etc.
  description: "Project description",
  technologies: ["React", "Node.js", "MongoDB"],
  features: [
    "Feature 1",
    "Feature 2",
    "Feature 3"
  ],
  thumbnail: "/projects/your-project.jpg",
  githubLink: "https://github.com/yourusername/project",
  liveLink: "https://your-project.com",
  mediaGallery: [
    { type: "image", url: "/media/project-1.jpg", caption: "Screenshot 1" },
    { type: "video", url: "/media/demo.mp4", caption: "Demo Video" }
  ]
}
```

### 5. Test Dark Mode
Click the sun/moon icon in the navbar to toggle between light and dark modes.

### 6. Navigate Through Pages
- Home
- About
- Skills
- Experience
- Projects
- Media
- Contact

## 🚀 Development Commands

```bash
# Start development server (already running)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📱 Responsive Design
The website is fully responsive. Test it by resizing your browser window or using browser DevTools (F12) to simulate mobile devices.

## 🎨 Customization Tips

### Change Colors
Edit `tailwind.config.js` to change the primary color scheme:
```javascript
colors: {
  primary: {
    // Change these values
    500: '#0ea5e9',
    600: '#0284c7',
    // ...
  }
}
```

### Add More Skills
Edit the `skills` object in `portfolioData.js`:
```javascript
programming: [
  { name: "Your Language", icon: "🔥" },
  // Add more...
]
```

### Update Experience
Add more experience entries to the `experience` array in `portfolioData.js`.

## 🐛 Troubleshooting

### Port Already in Use
If port 5173 is busy, Vite will automatically use the next available port.

### Images Not Showing
Make sure images are in the `public/` folder and paths start with `/`

### Dark Mode Not Persisting
Dark mode preference is saved in localStorage and will persist across sessions.

## 📝 Important Notes

1. **All data is centralized** in `src/data/portfolioData.js` for easy management
2. **Images go in public/** folder, not src/
3. **The website is future-proof** - just add data to arrays, no UI changes needed
4. **SEO is built-in** with proper meta tags in `index.html`

## 🎉 You're All Set!

Your professional portfolio is ready. Just customize the data and add your images!

---

Need help? Check the main README.md file for more details.
