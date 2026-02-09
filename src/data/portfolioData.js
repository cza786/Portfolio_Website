import profileImg from '../assets/DP.jpg';
import cv from '../assets/cv.pdf';
import sc from '../assets/download.jfif';
import CE from '../assets/Currency_Exchanger.png'
export const personalInfo = {
    name: "Chand Zaib",
    role: "Bachlor's in Computer Science | Full-Stack Developer | Data Science Enthusiast",
    degree: "BS Computer Science (2022–2026)",
    location: "Rawalpindi, Pakistan",
    email: "chandcza786@gmail.com", // Update with your email
    github: "https://github.com/cza786", // Update with your GitHub
    linkedin: "https://www.linkedin.com/in/chand-zaib-a1570737b/?skipRedirect=true", // Update with your LinkedIn
    cvLink: cv, // Update with your CV path
    profileImage: profileImg,
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
            "Encryption for secure image storage",
            "Face recognition authentication",
            "Upload encrypted & decrypted images at <span>Supabase</span> database Using SHA-256 algorithm",
            "Duplicate image detection using ML",
            "Vault Encryption for secure image storage"
        ],
        thumbnail: sc, // Add project images to public/projects/
        githubLink: "https://github.com/cza786/Project_FYP-SECURE_Gallery-",
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
        title: "currency Exchanger",
        category: "Web Development",
        description: "A currency exchanger website that allows users to exchange currencies.",
        technologies: ["React", "Node.js", "MongoDB", "Stripe"],
        features: [
            "Product catalog with search and filters",
            "Shopping cart and checkout",
            "Payment gateway integration",
            "Admin dashboard for inventory management"
        ],
        thumbnail: CE,
        githubLink: "https://github.com/cza786/React_js_Projects/tree/main/Currency_Converter",
        liveLink: "https://vercel.com/chand-zaibs-projects/currencyconvertor",
        mediaGallery: [
            { type: "image", url: "CE", caption: "Homepage" },
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
