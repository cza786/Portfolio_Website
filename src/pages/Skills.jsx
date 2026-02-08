import { skills } from '../data/portfolioData';

const Skills = () => {
    const SkillCard = ({ skill }) => (
        <div className="card p-6 text-center group">
            <div className="text-4xl mb-3 transform group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white">{skill.name}</h3>
        </div>
    );

    return (
        <div className="min-h-screen pt-16">
            <section className="py-20 bg-gradient-to-br from-primary-50 via-white to-primary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16 animate-fadeIn">
                        <h1 className="section-title">My Skills</h1>
                        <p className="section-subtitle">
                            Technologies and tools I work with
                        </p>
                    </div>

                    {/* Programming Languages */}
                    <div className="mb-16 animate-fadeIn">
                        <div className="flex items-center mb-8">
                            <div className="flex-grow h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent"></div>
                            <h2 className="px-6 text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                                Programming Languages
                            </h2>
                            <div className="flex-grow h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent"></div>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
                            {skills.programming.map((skill, index) => (
                                <SkillCard key={index} skill={skill} />
                            ))}
                        </div>
                    </div>

                    {/* Frameworks */}
                    <div className="mb-16 animate-fadeIn" style={{ animationDelay: '0.1s' }}>
                        <div className="flex items-center mb-8">
                            <div className="flex-grow h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent"></div>
                            <h2 className="px-6 text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                                Frameworks & Libraries
                            </h2>
                            <div className="flex-grow h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent"></div>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                            {skills.frameworks.map((skill, index) => (
                                <SkillCard key={index} skill={skill} />
                            ))}
                        </div>
                    </div>

                    {/* Databases */}
                    <div className="mb-16 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
                        <div className="flex items-center mb-8">
                            <div className="flex-grow h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent"></div>
                            <h2 className="px-6 text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                                Databases
                            </h2>
                            <div className="flex-grow h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent"></div>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {skills.databases.map((skill, index) => (
                                <SkillCard key={index} skill={skill} />
                            ))}
                        </div>
                    </div>

                    {/* Tools */}
                    <div className="animate-fadeIn" style={{ animationDelay: '0.3s' }}>
                        <div className="flex items-center mb-8">
                            <div className="flex-grow h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent"></div>
                            <h2 className="px-6 text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                                Tools & Technologies
                            </h2>
                            <div className="flex-grow h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent"></div>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                            {skills.tools.map((skill, index) => (
                                <SkillCard key={index} skill={skill} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Additional Skills Section */}
            <section className="py-20 bg-white dark:bg-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
                        Core Competencies
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="card p-8">
                            <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mb-4">
                                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Web Development</h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                Building responsive, modern web applications with React, Vue, and backend frameworks
                            </p>
                        </div>

                        <div className="card p-8">
                            <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mb-4">
                                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Mobile Development</h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                Creating cross-platform mobile apps using Flutter and React Native
                            </p>
                        </div>

                        <div className="card p-8">
                            <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mb-4">
                                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Database Management</h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                Designing and optimizing databases with MySQL, MongoDB, and cloud solutions
                            </p>
                        </div>

                        <div className="card p-8">
                            <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mb-4">
                                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Security & Encryption</h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                Implementing secure authentication, encryption, and data protection measures
                            </p>
                        </div>

                        <div className="card p-8">
                            <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mb-4">
                                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Data Analysis</h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                Analyzing and visualizing data using Python, Power BI, and Tableau
                            </p>
                        </div>

                        <div className="card p-8">
                            <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mb-4">
                                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Machine Learning</h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                Developing ML models for face recognition, image processing, and intelligent systems
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Skills;
