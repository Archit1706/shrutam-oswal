'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { personalInfo, experiences } from '@/data';

export default function Experience() {
    const [isVisible, setIsVisible] = useState(false);
    const [selectedExp, setSelectedExp] = useState(0);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <Link href="/" className="text-white font-bold text-xl hover:text-purple-400 transition-colors">
                            {personalInfo.name.split(' ')[0]}
                        </Link>
                        <div className="hidden md:flex items-center space-x-8">
                            <Link href="/" className="text-gray-300 hover:text-purple-400 transition-colors">Home</Link>
                            <Link href="/about" className="text-gray-300 hover:text-purple-400 transition-colors">About</Link>
                            <Link href="/experience" className="text-white hover:text-purple-400 transition-colors">Experience</Link>
                            <Link href="/projects" className="text-gray-300 hover:text-purple-400 transition-colors">Projects</Link>
                        </div>
                    </div>
                </div>
            </nav>

            <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Professional Experience</h1>
                        <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mb-8"></div>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            A journey through robotics, mechatronics, and process optimization
                        </p>
                    </div>

                    {/* Timeline View */}
                    <div className="relative">
                        {/* Vertical Timeline Line */}
                        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 via-pink-500 to-purple-500 opacity-30"></div>

                        {/* Experience Cards */}
                        <div className="space-y-12">
                            {experiences.map((exp, index) => (
                                <div
                                    key={index}
                                    className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                                        }`}
                                    style={{ transitionDelay: `${index * 200}ms` }}
                                >
                                    <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${index % 2 === 0 ? '' : 'md:flex-row-reverse'
                                        }`}>
                                        {/* Left Side - Company Info */}
                                        <div className={`${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12 md:col-start-2'}`}>
                                            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-400/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20">
                                                <div className="flex items-center justify-between mb-4">
                                                    <span className="text-4xl">{exp.icon}</span>
                                                    <span
                                                        className="px-3 py-1 rounded-full text-xs font-semibold text-white"
                                                        style={{ backgroundColor: exp.color }}
                                                    >
                                                        {exp.type}
                                                    </span>
                                                </div>
                                                <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                                                <p className="text-purple-300 font-semibold mb-1">{exp.company}</p>
                                                {exp.department && (
                                                    <p className="text-gray-400 text-sm mb-2">{exp.department}</p>
                                                )}
                                                <p className="text-gray-400 text-sm mb-2">{exp.location}</p>
                                                <p className="text-gray-400 text-sm font-semibold mb-4">{exp.duration}</p>
                                                <p className="text-gray-300 text-sm italic">{exp.description}</p>
                                            </div>
                                        </div>

                                        {/* Center Timeline Dot */}
                                        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-4 border-white/20" style={{ backgroundColor: exp.color, boxShadow: `0 0 20px ${exp.color}` }}></div>

                                        {/* Right Side - Details */}
                                        <div className={`${index % 2 === 0 ? 'md:pl-12 md:col-start-2' : 'md:pr-12'}`}>
                                            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-400/50 transition-all duration-300">
                                                {/* Responsibilities */}
                                                <div className="mb-6">
                                                    <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                                                        <span className="text-purple-400 mr-2">📋</span>
                                                        Key Responsibilities
                                                    </h4>
                                                    <ul className="space-y-2">
                                                        {exp.responsibilities.map((resp, rIndex) => (
                                                            <li key={rIndex} className="text-gray-300 text-sm flex items-start">
                                                                <span className="text-purple-400 mr-2 mt-1">▹</span>
                                                                <span>{resp}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>

                                                {/* Technologies */}
                                                <div className="mb-6">
                                                    <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                                                        <span className="text-purple-400 mr-2">🛠️</span>
                                                        Technologies Used
                                                    </h4>
                                                    <div className="flex flex-wrap gap-2">
                                                        {exp.technologies.map((tech, tIndex) => (
                                                            <span
                                                                key={tIndex}
                                                                className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-semibold border border-purple-400/30 hover:bg-purple-500/30 transition-colors"
                                                            >
                                                                {tech}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>

                                                {/* Achievements */}
                                                <div>
                                                    <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                                                        <span className="text-purple-400 mr-2">🎯</span>
                                                        Key Achievements
                                                    </h4>
                                                    <ul className="space-y-2">
                                                        {exp.achievements.map((achievement, aIndex) => (
                                                            <li key={aIndex} className="text-gray-300 text-sm flex items-start">
                                                                <span className="text-green-400 mr-2">✓</span>
                                                                <span className="font-semibold">{achievement}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Summary Stats */}
                    <div className={`mt-20 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                            <h2 className="text-2xl font-bold text-white mb-6 text-center">Career Highlights</h2>
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                                {[
                                    { number: '3+', label: 'Years Experience', icon: '⏱️' },
                                    { number: '65%', label: 'Quality Improvement', icon: '📈' },
                                    { number: '100%', label: 'Safety Compliance', icon: '✅' },
                                    { number: '35%', label: 'Performance Gains', icon: '🚀' }
                                ].map((stat, index) => (
                                    <div
                                        key={index}
                                        className="text-center bg-white/5 rounded-xl p-6 border border-white/10 hover:border-purple-400/50 transition-all duration-300 hover:scale-105"
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