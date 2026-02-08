export const personalInfo = {
    name: "Chand Zaib",
    role: "Software Engineer | Full-Stack Developer | Data Science Enthusiast",
    degree: "BS Computer Science (2022–2026)",
    location: "Rawalpindi, Pakistan",
    email: "your.email@example.com", // Update with your email
    github: "https://github.com/yourusername", // Update with your GitHub
    linkedin: "https://www.linkedin.com/in/yourusername", // Update with your LinkedIn
    cvLink: "/path-to-cv.pdf", // Update with your CV path
    profileImage: "/profile.jpg", // Add your profile image to public folder
    bio: "Passionate Full-Stack Developer with expertise in building scalable web and mobile applications. Currently pursuing BS in Computer Science with a focus on software engineering, security, and machine learning. Freelancing since 2022, delivering real-world solutions to clients.",
    tagline: "Building innovative solutions with modern technologies"
};

export const skills = {
    programming: [
        { name: "C++", icon: "⚡" },
        { name: "Java", icon: "☕" },
        { name: "JavaScript", icon: "🟨" },
        { name: "PHP", icon: "🐘" },
        { name: "Python", icon: "🐍" },
        { name: "C#", icon: "💠" },
        { name: "Flutter", icon: "📱" },
        { name: "SQL", icon: "🗄️" }
    ],
    frameworks: [
        { name: "ReactJS", icon: "⚛️" },
        { name: ".NET", icon: "🔷" },
        { name: "FastAPI", icon: "⚡" },
        { name: "Django", icon: "🎸" },
        { name: "React Native", icon: "📱" },
        { name: "WordPress", icon: "📝" }
    ],
    databases: [
        { name: "MySQL", icon: "🐬" },
        { name: "MongoDB", icon: "🍃" },
        { name: "Firebase", icon: "🔥" },
        { name: "Supabase", icon: "⚡" }
    ],
    tools: [
        { name: "GitHub", icon: "🐙" },
        { name: "VS Code", icon: "💻" },
        { name: "Visual Studio", icon: "🔷" },
        { name: "Power BI", icon: "📊" },
        { name: "Tableau", icon: "📈" },
        { name: "Excel", icon: "📗" }
    ]
};

export const experience = [
    {
        id: 1,
        title: "Freelance Web Developer & Data Scientist",
        duration: "2022 – Present",
        location: "Remote",
        description: [
            "Developed and deployed full-stack web and mobile applications for diverse clients",
            "Performed data analysis and visualization using Python, Power BI, and Tableau",
            "Built real-world client-based projects with modern technologies",
            "Specialized in secure application development and database management"
        ]
    }
];

export const projects = [
    {
        id: 1,
        title: "Secure Gallery Application",
        category: "FYP",
        description: "A comprehensive secure gallery application featuring advanced encryption, biometric authentication, and intelligent image management using machine learning.",
        technologies: ["FastAPI", "React", "Machine Learning", "Cryptography", "Python"],
        features: [
            "AES-256 encryption for secure image storage",
            "Face recognition authentication",
            "Voice recognition security",
            "Duplicate image detection using ML",
            "Real-time image processing"
        ],
        thumbnail: "/projects/secure-gallery.jpg", // Add project images to public/projects/
        githubLink: "https://github.com/yourusername/secure-gallery",
        liveLink: "",
        mediaGallery: [
            { type: "image", url: "/media/secure-gallery-1.jpg", caption: "Dashboard" },
            { type: "image", url: "/media/secure-gallery-2.jpg", caption: "Face Recognition" },
            { type: "video", url: "/media/secure-gallery-demo.mp4", caption: "Demo Video" }
        ]
    },
    // Add more projects here following the same structure
    {
        id: 2,
        title: "E-Commerce Platform",
        category: "Web Development",
        description: "Full-featured e-commerce platform with payment integration and admin dashboard.",
        technologies: ["React", "Node.js", "MongoDB", "Stripe"],
        features: [
            "Product catalog with search and filters",
            "Shopping cart and checkout",
            "Payment gateway integration",
            "Admin dashboard for inventory management"
        ],
        thumbnail: "/projects/ecommerce.jpg",
        githubLink: "https://github.com/yourusername/ecommerce",
        liveLink: "https://demo.example.com",
        mediaGallery: [
            { type: "image", url: "/media/ecommerce-1.jpg", caption: "Homepage" },
            { type: "image", url: "/media/ecommerce-2.jpg", caption: "Product Page" }
        ]
    }
];

export const mediaCategories = [
    "All",
    "FYP",
    "Web Development",
    "Mobile Apps",
    "Data Science",
    "Other"
];

// Function to get all media from all projects
export const getAllMedia = () => {
    return projects.flatMap(project =>
        project.mediaGallery.map(media => ({
            ...media,
            projectTitle: project.title,
            projectId: project.id,
            category: project.category
        }))
    );
};

// Function to filter media by project
export const getMediaByProject = (projectId) => {
    const project = projects.find(p => p.id === projectId);
    return project ? project.mediaGallery : [];
};

// Function to filter media by category
export const getMediaByCategory = (category) => {
    if (category === "All") return getAllMedia();
    return projects
        .filter(p => p.category === category)
        .flatMap(project =>
            project.mediaGallery.map(media => ({
                ...media,
                projectTitle: project.title,
                projectId: project.id,
                category: project.category
            }))
        );
};
