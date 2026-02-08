import { personalInfo } from '../data/portfolioData';

const About = () => {
    return (
        <div className="min-h-screen pt-16">
            <section className="py-20 bg-gradient-to-br from-primary-50 via-white to-primary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12 animate-fadeIn">
                        <h1 className="section-title">About Me</h1>
                        <p className="section-subtitle">
                            Get to know more about my journey and passion
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        {/* Profile Image */}
                        <div className="animate-slideInLeft flex justify-center">
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-400 rounded-2xl blur-2xl opacity-30"></div>
                                <img
                                    src={personalInfo.profileImage}
                                    alt={personalInfo.name}
                                    className="relative w-full max-w-md rounded-2xl shadow-2xl border-4 border-white dark:border-gray-700 object-cover"
                                    onError={(e) => {
                                        e.target.src = 'https://via.placeholder.com/500x600/0ea5e9/ffffff?text=' + personalInfo.name.split(' ').map(n => n[0]).join('');
                                    }}
                                />
                            </div>
                        </div>

                        {/* About Content */}
                        <div className="animate-slideInRight space-y-6">
                            <div className="card p-8">
                                <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                                    {personalInfo.name}
                                </h2>
                                <p className="text-xl text-primary-600 dark:text-primary-400 font-semibold mb-4">
                                    {personalInfo.role}
                                </p>
                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                                    {personalInfo.bio}
                                </p>

                                <div className="space-y-4">
                                    <div className="flex items-start space-x-3">
                                        <svg className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                        </svg>
                                        <div>
                                            <h3 className="font-semibold text-gray-900 dark:text-white">Education</h3>
                                            <p className="text-gray-600 dark:text-gray-400">{personalInfo.degree}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-3">
                                        <svg className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        <div>
                                            <h3 className="font-semibold text-gray-900 dark:text-white">Location</h3>
                                            <p className="text-gray-600 dark:text-gray-400">{personalInfo.location}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-3">
                                        <svg className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                        <div>
                                            <h3 className="font-semibold text-gray-900 dark:text-white">Experience</h3>
                                            <p className="text-gray-600 dark:text-gray-400">Freelancing since 2022</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Professional Journey */}
            <section className="py-20 bg-white dark:bg-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
                        My Professional Journey
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="card p-8">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mr-4">
                                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Academic Excellence</h3>
                            </div>
                            <p className="text-gray-600 dark:text-gray-400">
                                Currently pursuing BS in Computer Science (2022-2026), focusing on software engineering,
                                security, and machine learning. Building a strong foundation in computer science fundamentals
                                while applying knowledge to real-world projects.
                            </p>
                        </div>

                        <div className="card p-8">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mr-4">
                                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Freelance Experience</h3>
                            </div>
                            <p className="text-gray-600 dark:text-gray-400">
                                Started freelancing in 2022, delivering web and mobile applications to clients worldwide.
                                Specialized in full-stack development, data analysis, and creating secure, scalable solutions
                                for diverse business needs.
                            </p>
                        </div>

                        <div className="card p-8">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mr-4">
                                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Technical Expertise</h3>
                            </div>
                            <p className="text-gray-600 dark:text-gray-400">
                                Proficient in modern web technologies including React, FastAPI, Django, and .NET.
                                Experienced in building responsive UIs, RESTful APIs, and database design with both
                                SQL and NoSQL databases.
                            </p>
                        </div>

                        <div className="card p-8">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mr-4">
                                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Innovation Focus</h3>
                            </div>
                            <p className="text-gray-600 dark:text-gray-400">
                                Passionate about integrating machine learning and AI into applications. Working on projects
                                involving face recognition, voice authentication, and intelligent data processing to create
                                next-generation solutions.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
