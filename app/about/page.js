'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { personalInfo, education, skills, certifications, awards } from '@/data';

export default function About() {
    const [isVisible, setIsVisible] = useState(false);
    const [activeSkillCategory, setActiveSkillCategory] = useState(Object.keys(skills)[0]);

    useEffect(() => {
        setIsVisible(true);
    }, []);

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
                            <Link href="/about" className="text-white hover:text-teal-400 transition-colors">About</Link>
                            <Link href="/experience" className="text-gray-300 hover:text-teal-400 transition-colors">Experience</Link>
                            <Link href="/projects" className="text-gray-300 hover:text-teal-400 transition-colors">Projects</Link>
                        </div>
                    </div>
                </div>
            </nav>

            <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">About Me</h1>
                        <div className="h-1 w-24 bg-gradient-to-r from-teal-500 to-lime-500 rounded-full mx-auto mb-8"></div>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            {personalInfo.summary}
                        </p>
                    </div>

                    {/* Education Section */}
                    <section className={`mb-20 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
                            <span className="text-4xl mr-3">🎓</span>
                            Education
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {education.map((edu, index) => (
                                <div
                                    key={index}
                                    className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-teal-400/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-teal-500/20"
                                >
                                    <div className="flex items-start justify-between mb-4">
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-1">{edu.degree}</h3>
                                            <p className="text-teal-300 font-semibold">{edu.field}</p>
                                        </div>
                                        <span className="text-3xl">{edu.icon}</span>
                                    </div>
                                    <p className="text-gray-300 font-semibold mb-2">{edu.institution}</p>
                                    <p className="text-gray-400 text-sm mb-2">{edu.location}</p>
                                    <p className="text-gray-400 text-sm mb-3">{edu.duration}</p>
                                    {edu.gpa && (
                                        <p className="text-teal-300 font-semibold mb-3">GPA: {edu.gpa}</p>
                                    )}
                                    <ul className="space-y-2">
                                        {edu.highlights.map((highlight, hIndex) => (
                                            <li key={hIndex} className="text-gray-300 text-sm flex items-start">
                                                <span className="text-teal-400 mr-2">▹</span>
                                                <span>{highlight}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Skills Section */}
                    <section className={`mb-20 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
                            <span className="text-4xl mr-3">⚡</span>
                            Technical Skills
                        </h2>

                        {/* Skill Category Tabs */}
                        <div className="flex flex-wrap gap-3 mb-6">
                            {Object.keys(skills).map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setActiveSkillCategory(category)}
                                    className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${activeSkillCategory === category
                                        ? 'bg-gradient-to-r from-teal-500 to-lime-500 text-white shadow-lg shadow-teal-500/50'
                                        : 'bg-white/5 text-gray-300 hover:bg-white/10'
                                        }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>

                        {/* Skills Grid */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                            {skills[activeSkillCategory].map((skill, index) => (
                                <div
                                    key={index}
                                    className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-teal-400/50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-teal-500/20 text-center"
                                    style={{ animationDelay: `${index * 50}ms` }}
                                >
                                    <p className="text-white font-semibold text-sm">{skill}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Certifications & Awards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Certifications */}
                        <section className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                                <span className="text-4xl mr-3">📜</span>
                                Certifications
                            </h2>
                            <div className="space-y-4">
                                {certifications.map((cert, index) => (
                                    <div
                                        key={index}
                                        className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-teal-400/50 transition-all duration-300 hover:scale-105"
                                    >
                                        <h3 className="text-lg font-bold text-white mb-2">{cert.name}</h3>
                                        <p className="text-teal-300 font-semibold mb-1">{cert.issuer}</p>
                                        <p className="text-gray-400 text-sm mb-3">{cert.date}</p>
                                        <p className="text-gray-300 text-sm">{cert.description}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Awards */}
                        <section className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                                <span className="text-4xl mr-3">🏆</span>
                                Awards & Recognition
                            </h2>
                            <div className="space-y-4">
                                {awards.map((award, index) => (
                                    <div
                                        key={index}
                                        className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-teal-400/50 transition-all duration-300 hover:scale-105"
                                    >
                                        <h3 className="text-lg font-bold text-white mb-2">{award.title}</h3>
                                        <p className="text-teal-300 font-semibold mb-1">{award.organization}</p>
                                        <p className="text-gray-400 text-sm mb-3">{award.year}</p>
                                        <p className="text-gray-300 text-sm">{award.description}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* Contact Info */}
                    <section className={`mt-20 bg-gradient-to-r from-teal-500/10 to-lime-500/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <h2 className="text-2xl font-bold text-white mb-6">Get In Touch</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="flex items-center space-x-3">
                                <div className="w-12 h-12 bg-teal-500/20 rounded-full flex items-center justify-center">
                                    <span className="text-xl">📧</span>
                                </div>
                                <div>
                                    <p className="text-gray-400 text-sm">Email</p>
                                    <a href={`mailto:${personalInfo.email}`} className="text-white hover:text-teal-400 transition-colors">
                                        {personalInfo.email}
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="w-12 h-12 bg-teal-500/20 rounded-full flex items-center justify-center">
                                    <span className="text-xl">📱</span>
                                </div>
                                <div>
                                    <p className="text-gray-400 text-sm">Phone</p>
                                    <a href={`tel:${personalInfo.phone}`} className="text-white hover:text-teal-400 transition-colors">
                                        {personalInfo.phone}
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="w-12 h-12 bg-teal-500/20 rounded-full flex items-center justify-center">
                                    <span className="text-xl">📍</span>
                                </div>
                                <div>
                                    <p className="text-gray-400 text-sm">Location</p>
                                    <p className="text-white">{personalInfo.location}</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
}