import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getAllMedia, getMediaByCategory, mediaCategories, projects } from '../data/portfolioData';

const Media = () => {
    const [searchParams] = useSearchParams();
    const projectIdParam = searchParams.get('project');

    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedMedia, setSelectedMedia] = useState(null);
    const [mediaItems, setMediaItems] = useState([]);

    useEffect(() => {
        if (projectIdParam) {
            const project = projects.find(p => p.id === parseInt(projectIdParam));
            if (project) {
                setMediaItems(project.mediaGallery.map(media => ({
                    ...media,
                    projectTitle: project.title,
                    projectId: project.id,
                    category: project.category
                })));
                setSelectedCategory(project.category);
            }
        } else {
            setMediaItems(getAllMedia());
        }
    }, [projectIdParam]);

    useEffect(() => {
        if (!projectIdParam) {
            setMediaItems(getMediaByCategory(selectedCategory));
        }
    }, [selectedCategory, projectIdParam]);

    const openModal = (media) => {
        setSelectedMedia(media);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setSelectedMedia(null);
        document.body.style.overflow = 'unset';
    };

    return (
        <div className="min-h-screen pt-16">
            <section className="py-20 bg-gradient-to-br from-primary-50 via-white to-primary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16 animate-fadeIn">
                        <h1 className="section-title">Media Gallery</h1>
                        <p className="section-subtitle">
                            Project screenshots, demos, and walkthroughs
                        </p>
                    </div>

                    {/* Category Filter */}
                    {!projectIdParam && (
                        <div className="flex flex-wrap justify-center gap-4 mb-12">
                            {mediaCategories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setSelectedCategory(category)}
                                    className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${selectedCategory === category
                                            ? 'bg-primary-600 text-white shadow-lg'
                                            : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                                        }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    )}

                    {/* Media Grid */}
                    {mediaItems.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {mediaItems.map((media, index) => (
                                <div
                                    key={index}
                                    className="card overflow-hidden cursor-pointer group animate-fadeIn"
                                    style={{ animationDelay: `${index * 0.05}s` }}
                                    onClick={() => openModal(media)}
                                >
                                    <div className="relative aspect-video bg-gray-200 dark:bg-gray-700 overflow-hidden">
                                        {media.type === 'image' ? (
                                            <img
                                                src={media.url}
                                                alt={media.caption}
                                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                                onError={(e) => {
                                                    e.target.src = 'https://via.placeholder.com/400x300/0ea5e9/ffffff?text=Image';
                                                }}
                                            />
                                        ) : (
                                            <div className="relative w-full h-full">
                                                <video
                                                    src={media.url}
                                                    className="w-full h-full object-cover"
                                                    muted
                                                />
                                                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                                                    <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                                                    </svg>
                                                </div>
                                            </div>
                                        )}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                                            <div className="p-4 w-full">
                                                <p className="text-white font-medium text-sm">{media.caption}</p>
                                                <p className="text-gray-200 text-xs mt-1">{media.projectTitle}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-12">
                            <svg className="w-24 h-24 mx-auto text-gray-400 dark:text-gray-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <p className="text-gray-600 dark:text-gray-400 text-lg">
                                No media available for this category.
                            </p>
                            <p className="text-gray-500 dark:text-gray-500 text-sm mt-2">
                                Add media to your projects in the portfolioData.js file
                            </p>
                        </div>
                    )}
                </div>
            </section>

            {/* Modal */}
            {selectedMedia && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-90 animate-fadeIn"
                    onClick={closeModal}
                >
                    <button
                        onClick={closeModal}
                        className="absolute top-4 right-4 p-2 bg-white dark:bg-gray-800 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors z-10"
                        aria-label="Close modal"
                    >
                        <svg className="w-6 h-6 text-gray-900 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    <div className="max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
                        {selectedMedia.type === 'image' ? (
                            <img
                                src={selectedMedia.url}
                                alt={selectedMedia.caption}
                                className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
                                onError={(e) => {
                                    e.target.src = 'https://via.placeholder.com/800x600/0ea5e9/ffffff?text=Image+Not+Found';
                                }}
                            />
                        ) : (
                            <video
                                src={selectedMedia.url}
                                controls
                                autoPlay
                                className="w-full h-auto max-h-[85vh] rounded-lg"
                            />
                        )}
                        <div className="mt-4 text-center">
                            <p className="text-white text-lg font-semibold">{selectedMedia.caption}</p>
                            <p className="text-gray-300 text-sm mt-1">{selectedMedia.projectTitle}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Media;
