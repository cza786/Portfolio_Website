import profileImg from '../assets/DP.jpg';
import cv from '../assets/Chand_Zaib.pdf';
import sc from '../assets/secure_gallery/secure.jfif';
import CE from '../assets/currency_exchanger/Currency_Exchanger.jpeg'

import sv from '../assets/secure_gallery/vault.jpeg';
import v from '../assets/secure_gallery/Data_at_cloud.jpeg';
import ep from '../assets/secure_gallery/encryption_Process.jpeg';
import ei from '../assets/secure_gallery/encrypted_vault.jpeg';
import dd from '../assets/secure_gallery/Duplicate.jpeg';
import dt from '../assets/secure_gallery/threshold.jpeg';
import fr from '../assets/secure_gallery/face-recognition.jpeg';
import au from '../assets/secure_gallery/Auth_cloud.jpeg';
import all from '../assets/secure_gallery/All.jpeg';
import fol from '../assets/secure_gallery/folders.jpeg';

import add_Wallet from '../assets/expense_tracker/add_Wallet.jpeg';
import profile from '../assets/expense_tracker/profile.jpeg';
import edit_transaction from '../assets/expense_tracker/edit_trasaction.jpeg';
import Total_Wallet from '../assets/expense_tracker/Total_Wallet.jpeg';
import Wallets_list from '../assets/expense_tracker/Wallets_list.jpeg';
import added from '../assets/expense_tracker/added.jpeg';


export const personalInfo = {
    name: "Chand Zaib",
    role: "Bachlor's in Computer Science | Full-Stack Developer | Data Science Enthusiast",
    degree: "BS Computer Science (2022–2026)",
    location: "Rawalpindi, Pakistan",
    email: "chandcza786@gmail.com",
    github: "https://github.com/cza786",
    linkedin: "https://www.linkedin.com/in/chand-zaib-a1570737b/?skipRedirect=true",
    cvLink: cv,
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
        technologies: ["Flutter", "Firebase", "Machine Learning", "Supabase"],
        features: [
            "Encryption for secure image storage",
            "Face recognition authentication",
            "Upload encrypted & decrypted images at Supabase database Using SHA-256 algorithm",
            "Duplicate image detection using ML",
            "Vault Encryption for secure image storage"
        ],
        thumbnail: sc, // Add project images to public/projects/
        githubLink: "https://github.com/cza786/Project_FYP-SECURE_Gallery-",
        liveLink: "",
        mediaGallery: [
            { type: "image", url: sc, caption: "Dashboard" },
            { type: "image", url: fr, caption: "Face Recognition" },
            { type: "image", url: sv, caption: "Security Vault" },
            { type: "image", url: v, caption: "Cloud Vault" },
            { type: "image", url: ep, caption: "Encryption Process" },
            { type: "image", url: ei, caption: "Encrypted images" },
            { type: "image", url: dd, caption: "Duplicate Detection" },
            { type: "image", url: dt, caption: "Duplicate using threshold" },
            { type: "image", url: au, caption: "Authentication of Cloud Vault" },
            { type: "image", url: all, caption: "All Photos" },
            { type: "image", url: fol, caption: "Folders" }

        ]
    },
    // Add more projects here following the same structure
    {
        id: 2,
        title: "currency Exchanger",
        category: "Web Development",
        description: "A currency exchanger website that allows users to exchange currencies.",
        technologies: ["React.js", "Tailwind CSS"],
        features: [
            "Real-time currency exchange rates",
            "User-friendly interface",
            "Responsive design for all devices"
        ],
        thumbnail: CE,
        githubLink: "https://github.com/cza786/React_js_Projects/tree/main/Currency_Converter",
        liveLink: "https://vercel.com/chand-zaibs-projects/currencyconvertor",
        mediaGallery: [
            { type: "image", url: CE, caption: "Homepage" },

        ]
    },

    // Expense traker mobile app 
    {
        id: 3,
        title: "Expense Traker",
        category: "Mobile Apps",
        description: "An expense traker mobile app that allows users to track their expenses.",
        technologies: ["Flutter", "Firebase"],
        features: [
            "Real-time expense tracking",
            "User-friendly interface",
            "Responsive design for all devices"
        ],
        thumbnail: add_Wallet,
        githubLink: "https://github.com/cza786/Expense_Tracker_App",

        mediaGallery: [
            { type: "image", url: add_Wallet, caption: "Homepage" },
            { type: "image", url: profile, caption: "Profile" },
            { type: "image", url: edit_transaction, caption: "Edit Trasaction" },
            { type: "image", url: Total_Wallet, caption: "Total Wallet" },
            { type: "image", url: Wallets_list, caption: "Wallets List" },
            { type: "image", url: added, caption: "Added Successfully" }
        ]
    }
];


// Expense traker mobile app 

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
