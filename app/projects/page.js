'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { personalInfo, projects } from '@/data';

export default function Projects() {
    const [isVisible, setIsVisible] = useState(false);
    const [activeCategory, setActiveCategory] = useState('mechatronics');
    const [currentIndex, setCurrentIndex] = useState({ mechatronics: 0, mechanical: 0, robotics: 0 });

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const categories = [
        { key: 'mechatronics', label: 'Mechatronics', icon: '🤖', color: '#a855f7' },
        { key: 'mechanical', label: 'Mechanical', icon: '⚙️', color: '#ec4899' },
        { key: 'robotics', label: 'Robotics', icon: '🦾', color: '#6366f1' }
    ];

    const handleNext = (category) => {
        setCurrentIndex(prev => ({
            ...prev,
            [category]: (prev[category] + 1) % projects[category].length
        }));
    };

    const handlePrev = (category) => {
        setCurrentIndex(prev => ({
            ...prev,
            [category]: (prev[category] - 1 + projects[category].length) % projects[category].length
        }));
    };

    const currentProjects = projects[activeCategory];
    const currentProjectIndex = currentIndex[activeCategory];
    const currentProject = currentProjects[currentProjectIndex];

    return (
        <main className="min-h-screen bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <Link href="/" className="text-white font-bold text-xl hover:text-teal-400 transition-colors">
                            {personalInfo.name.split(' ')[0]}
                        </Link>
                        <div className="hidden md:flex items-center space-x-8">
                            <Link href="/" className="text-gray-300 hover:text-teal-400 transition-colors">Home</Link>
                            <Link href="/about" className="text-gray-300 hover:text-teal-400 transition-colors">About</Link>
                            <Link href="/experience" className="text-gray-300 hover:text-teal-400 transition-colors">Experience</Link>
                            <Link href="/projects" className="text-white hover:text-teal-400 transition-colors">Projects</Link>
                        </div>
                    </div>
                </div>
            </nav>

            <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Project Portfolio</h1>
                        <div className="h-1 w-24 bg-gradient-to-r from-teal-500 to-lime-500 rounded-full mx-auto mb-8"></div>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Explore my work across mechatronics, mechanical design, and robotics
                        </p>
                    </div>

                    {/* Category Selector */}
                    <div className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        {categories.map((cat) => (
                            <button
                                key={cat.key}
                                onClick={() => setActiveCategory(cat.key)}
                                className={`group relative px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 overflow-hidden ${activeCategory === cat.key
                                    ? 'text-white shadow-2xl scale-110'
                                    : 'text-gray-300 bg-white/5 hover:bg-white/10'
                                    }`}
                                style={{
                                    backgroundColor: activeCategory === cat.key ? cat.color : undefined,
                                    boxShadow: activeCategory === cat.key ? `0 0 40px ${cat.color}66` : undefined
                                }}
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    <span className="text-2xl">{cat.icon}</span>
                                    {cat.label}
                                    <span className="ml-2 text-sm opacity-75">({projects[cat.key].length})</span>
                                </span>
                                {activeCategory === cat.key && (
                                    <div
                                        className="absolute inset-0 opacity-50"
                                        style={{
                                            background: `radial-gradient(circle at center, ${cat.color}88 0%, transparent 70%)`
                                        }}
                                    />
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Project Carousel */}
                    <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 min-h-[600px]">
                            {/* Project Navigation */}
                            <div className="flex items-center justify-between mb-6">
                                <button
                                    onClick={() => handlePrev(activeCategory)}
                                    className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                                    aria-label="Previous project"
                                >
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>

                                <div className="text-center">
                                    <p className="text-teal-300 text-sm font-semibold mb-1">{currentProject.tier}</p>
                                    <p className="text-gray-400 text-sm">
                                        Project {currentProjectIndex + 1} of {currentProjects.length}
                                    </p>
                                </div>

                                <button
                                    onClick={() => handleNext(activeCategory)}
                                    className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                                    aria-label="Next project"
                                >
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>

                            {/* Project Content */}
                            <div className="space-y-6" key={`${activeCategory}-${currentProjectIndex}`}>
                                {/* Project Header */}
                                <div>
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="flex-1">
                                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                                                {currentProject.title}
                                            </h2>
                                            <p className="text-xl text-teal-300 font-semibold mb-3">
                                                {currentProject.subtitle}
                                            </p>
                                            <p className="text-gray-400 text-sm">
                                                {currentProject.duration}
                                            </p>
                                        </div>
                                        {currentProject.featured && (
                                            <span className="px-4 py-2 bg-yellow-500/20 text-yellow-300 rounded-full text-sm font-semibold border border-yellow-400/30">
                                                ⭐ Featured
                                            </span>
                                        )}
                                    </div>
                                    <p className="text-gray-300 leading-relaxed">
                                        {currentProject.context}
                                    </p>
                                </div>

                                {/* Project Sections */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {Object.entries(currentProject.sections).map(([sectionTitle, sectionContent], index) => (
                                        <div
                                            key={index}
                                            className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-teal-400/50 transition-all duration-300"
                                        >
                                            <h3 className="text-lg font-bold text-white mb-3 flex items-center">
                                                <span className="text-teal-400 mr-2">▸</span>
                                                {sectionTitle}
                                            </h3>
                                            <p className="text-gray-300 text-sm leading-relaxed">{sectionContent}</p>
                                        </div>
                                    ))}
                                </div>

                                {/* Technologies */}
                                <div>
                                    <h3 className="text-lg font-bold text-white mb-3 flex items-center">
                                        <span className="text-teal-400 mr-2">🛠️</span>
                                        Technologies & Tools
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {currentProject.technologies.map((tech, index) => (
                                            <span
                                                key={index}
                                                className="px-4 py-2 bg-teal-500/20 text-teal-300 rounded-full text-sm font-semibold border border-teal-400/30 hover:bg-teal-500/30 hover:scale-105 transition-all duration-300"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Metrics */}
                                {currentProject.metrics && Object.keys(currentProject.metrics).length > 0 && (
                                    <div>
                                        <h3 className="text-lg font-bold text-white mb-3 flex items-center">
                                            <span className="text-teal-400 mr-2">📊</span>
                                            Key Metrics
                                        </h3>
                                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                            {Object.entries(currentProject.metrics).map(([key, value], index) => (
                                                <div
                                                    key={index}
                                                    className="bg-white/5 rounded-xl p-4 border border-white/10 text-center hover:border-teal-400/50 transition-all duration-300 hover:scale-105"
                                                >
                                                    <p className="text-2xl font-bold text-white mb-1">{value}</p>
                                                    <p className="text-gray-400 text-xs">{key}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Achievements */}
                                <div>
                                    <h3 className="text-lg font-bold text-white mb-3 flex items-center">
                                        <span className="text-teal-400 mr-2">🎯</span>
                                        Key Achievements
                                    </h3>
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        {currentProject.achievements.map((achievement, index) => (
                                            <li
                                                key={index}
                                                className="bg-green-500/10 rounded-xl p-4 border border-green-400/30 text-gray-300 text-sm flex items-start hover:border-green-400/50 transition-all duration-300"
                                            >
                                                <span className="text-green-400 mr-2 mt-1">✓</span>
                                                <span>{achievement}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Project Indicators */}
                            <div className="flex justify-center gap-2 mt-8">
                                {currentProjects.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentIndex(prev => ({ ...prev, [activeCategory]: index }))}
                                        className={`h-2 rounded-full transition-all duration-300 ${index === currentProjectIndex
                                            ? 'w-8 bg-teal-500'
                                            : 'w-2 bg-white/20 hover:bg-white/40'
                                            }`}
                                        aria-label={`Go to project ${index + 1}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Summary Stats */}
                    <div className={`mt-12 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <div className="bg-gradient-to-r from-teal-500/10 to-lime-500/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                            <h2 className="text-2xl font-bold text-white mb-6 text-center">Portfolio Overview</h2>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                {[
                                    { number: Object.keys(projects).reduce((sum, key) => sum + projects[key].length, 0), label: 'Total Projects', icon: '📁' },
                                    { number: Object.keys(projects).reduce((sum, key) => sum + projects[key].filter(p => p.featured).length, 0), label: 'Featured Projects', icon: '⭐' },
                                    { number: '3', label: 'Domains', icon: '🎯' },
                                    { number: '50+', label: 'Technologies', icon: '🛠️' }
                                ].map((stat, index) => (
                                    <div
                                        key={index}
                                        className="text-center bg-white/5 rounded-xl p-6 border border-white/10 hover:border-teal-400/50 transition-all duration-300 hover:scale-105"
                                    >
                                        <div className="text-4xl mb-3">{stat.icon}</div>
                                        <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                                        <div className="text-gray-400 text-sm">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}