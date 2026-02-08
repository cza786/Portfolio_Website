import { Link } from 'react-router-dom';
import { personalInfo } from '../data/portfolioData';

const Home = () => {
    return (
        <div className="min-h-screen pt-16">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-primary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        {/* Text Content */}
                        <div className="animate-slideInLeft">
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                                <span className="text-gray-900 dark:text-white">Hi, I'm </span>
                                <span className="bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
                                    {personalInfo.name}
                                </span>
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-4 font-medium">
                                {personalInfo.role}
                            </p>
                            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                                {personalInfo.tagline}
                            </p>

                            {/* CTA Buttons */}
                            <div className="flex flex-wrap gap-4">
                                <a
                                    href={personalInfo.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-primary inline-flex items-center space-x-2"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                    </svg>
                                    <span>GitHub</span>
                                </a>
                                <a
                                    href={personalInfo.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-primary inline-flex items-center space-x-2"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                    <span>LinkedIn</span>
                                </a>
                                <a
                                    href={personalInfo.cvLink}
                                    download
                                    className="btn-secondary inline-flex items-center space-x-2"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                    <span>Download CV</span>
                                </a>
                            </div>
                        </div>

                        {/* Profile Image */}
                        <div className="animate-slideInRight flex justify-center">
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-400 rounded-full blur-2xl opacity-30 animate-pulse"></div>
                                <img
                                    src={personalInfo.profileImage}
                                    alt={personalInfo.name}
                                    className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full object-cover shadow-2xl border-4 border-white dark:border-gray-700"
                                    onError={(e) => {
                                        e.target.src = 'https://via.placeholder.com/400x400/0ea5e9/ffffff?text=' + personalInfo.name.split(' ').map(n => n[0]).join('');
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-72 h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
            </section>

            {/* Quick Stats Section */}
            <section className="py-16 bg-white dark:bg-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="card p-8 text-center">
                            <div className="text-4xl font-bold text-primary-600 mb-2">4+</div>
                            <div className="text-gray-600 dark:text-gray-400">Years of Study</div>
                        </div>
                        <div className="card p-8 text-center">
                            <div className="text-4xl font-bold text-primary-600 mb-2">3+</div>
                            <div className="text-gray-600 dark:text-gray-400">Years Freelancing</div>
                        </div>
                        <div className="card p-8 text-center">
                            <div className="text-4xl font-bold text-primary-600 mb-2">15+</div>
                            <div className="text-gray-600 dark:text-gray-400">Technologies</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Section */}
            <section className="py-20 bg-gray-50 dark:bg-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="section-title">What I Do</h2>
                        <p className="section-subtitle">
                            Specialized in building modern, scalable applications
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="card p-8 text-center">
                            <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Full-Stack Development</h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                Building end-to-end web and mobile applications with modern frameworks and best practices
                            </p>
                        </div>

                        <div className="card p-8 text-center">
                            <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Security & Encryption</h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                Implementing robust security measures and encryption for data protection
                            </p>
                        </div>

                        <div className="card p-8 text-center">
                            <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Data Science</h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                Data analysis, visualization, and machine learning for intelligent solutions
                            </p>
                        </div>
                    </div>

                    <div className="text-center mt-12">
                        <Link to="/projects" className="btn-primary">
                            View My Projects
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
