'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { personalInfo } from '@/data';

export default function Resume() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const handleDownload = () => {
        // Create a link element and trigger download
        const link = document.createElement('a');
        link.href = '/resume.pdf';
        link.download = `${personalInfo.name.replace(' ', '_')}_Resume.pdf`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handlePrint = () => {
        const iframe = document.getElementById('resume-iframe');
        if (iframe) {
            iframe.contentWindow.print();
        }
    };

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
                            <Link href="/projects" className="text-gray-300 hover:text-teal-400 transition-colors">Projects</Link>
                            <Link href="/resume" className="text-white hover:text-teal-400 transition-colors">Resume</Link>
                            <Link href="/contact" className="text-gray-300 hover:text-teal-400 transition-colors">Contact</Link>
                        </div>
                    </div>
                </div>
            </nav>

            <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Resume</h1>
                        <div className="h-1 w-24 bg-gradient-to-r from-teal-500 to-lime-500 rounded-full mx-auto mb-8"></div>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                            Download or view my professional resume
                        </p>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button
                                onClick={handleDownload}
                                className="group px-8 py-4 bg-gradient-to-r from-teal-500 to-lime-500 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-teal-500/50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                            >
                                <svg className="w-5 h-5 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                Download PDF
                            </button>
                            <button
                                onClick={handlePrint}
                                className="px-8 py-4 border-2 border-teal-400 text-teal-300 rounded-full font-semibold hover:bg-teal-400/10 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                                </svg>
                                Print
                            </button>
                        </div>
                    </div>

                    {/* Resume Viewer */}
                    <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10 hover:border-teal-400/50 transition-all duration-300 shadow-2xl">
                            <div className="relative w-full" style={{ paddingBottom: '141.4%' }}>
                                <iframe
                                    id="resume-iframe"
                                    src="/resume.pdf#toolbar=0&navpanes=0&scrollbar=1"
                                    className="absolute top-0 left-0 w-full h-full rounded-xl"
                                    style={{ border: 'none' }}
                                    title="Resume PDF Viewer"
                                />
                            </div>
                        </div>

                        {/* Fallback message */}
                        <div className="mt-6 text-center">
                            <p className="text-gray-400 text-sm">
                                Can't see the resume?
                                <button
                                    onClick={handleDownload}
                                    className="ml-2 text-teal-400 hover:text-teal-300 underline"
                                >
                                    Download it here
                                </button>
                            </p>
                        </div>
                    </div>

                    {/* Additional Info */}
                    <div className={`mt-12 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <div className="bg-gradient-to-r from-teal-500/10 to-lime-500/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                            <h2 className="text-2xl font-bold text-white mb-6 text-center">Quick Links</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <Link
                                    href="/about"
                                    className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-teal-400/50 transition-all duration-300 hover:scale-105 text-center group"
                                >
                                    <div className="text-4xl mb-3">🎓</div>
                                    <h3 className="text-lg font-semibold text-white mb-2">Education & Skills</h3>
                                    <p className="text-gray-400 text-sm">View my educational background and technical skills</p>
                                </Link>
                                <Link
                                    href="/experience"
                                    className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-teal-400/50 transition-all duration-300 hover:scale-105 text-center group"
                                >
                                    <div className="text-4xl mb-3">💼</div>
                                    <h3 className="text-lg font-semibold text-white mb-2">Work Experience</h3>
                                    <p className="text-gray-400 text-sm">Explore my professional journey and achievements</p>
                                </Link>
                                <Link
                                    href="/projects"
                                    className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-teal-400/50 transition-all duration-300 hover:scale-105 text-center group"
                                >
                                    <div className="text-4xl mb-3">🚀</div>
                                    <h3 className="text-lg font-semibold text-white mb-2">Project Portfolio</h3>
                                    <p className="text-gray-400 text-sm">See my work across mechatronics and robotics</p>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Contact CTA */}
                    <div className={`mt-12 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <div className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                            <h2 className="text-2xl font-bold text-white mb-4">Let's Connect</h2>
                            <p className="text-gray-300 mb-6">
                                Interested in working together? Feel free to reach out!
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <a
                                    href={`mailto:${personalInfo.email}`}
                                    className="px-6 py-3 bg-teal-500/20 text-teal-300 rounded-full font-semibold border border-teal-400/30 hover:bg-teal-500/30 transition-all duration-300 hover:scale-105 flex items-center gap-2"
                                >
                                    <span>✉</span>
                                    Email Me
                                </a>
                                <a
                                    href={personalInfo.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-6 py-3 bg-teal-500/20 text-teal-300 rounded-full font-semibold border border-teal-400/30 hover:bg-teal-500/30 transition-all duration-300 hover:scale-105 flex items-center gap-2"
                                >
                                    <span>in</span>
                                    LinkedIn
                                </a>
                                <a
                                    href={`tel:${personalInfo.phone}`}
                                    className="px-6 py-3 bg-teal-500/20 text-teal-300 rounded-full font-semibold border border-teal-400/30 hover:bg-teal-500/30 transition-all duration-300 hover:scale-105 flex items-center gap-2"
                                >
                                    <span>☎</span>
                                    Call Me
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}