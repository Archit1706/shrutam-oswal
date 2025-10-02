'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { personalInfo, socialLinks, technologies } from '@/data';
import DNAStrand from '@/components/DNAStrand';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900 overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <span className="text-white font-bold text-xl">{personalInfo.name.split(' ')[0]}</span>
            </div>
            <div className="hidden md:block">
              <div className="flex items-center space-x-8">
                <Link href="/" className="text-white hover:text-teal-400 transition-colors">Home</Link>
                <Link href="/about" className="text-gray-300 hover:text-teal-400 transition-colors">About</Link>
                <Link href="/experience" className="text-gray-300 hover:text-teal-400 transition-colors">Experience</Link>
                <Link href="/projects" className="text-gray-300 hover:text-teal-400 transition-colors">Projects</Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with DNA Strand */}
      <div className="relative w-full min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Name and Tagline */}
            <div className={`z-10 space-y-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="space-y-4">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
                  {personalInfo.name}
                </h1>
                <div className="h-1 w-24 bg-gradient-to-r from-teal-500 to-lime-500 rounded-full"></div>
              </div>

              <p className={`text-2xl sm:text-3xl text-teal-300 font-light transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                {personalInfo.tagline}
              </p>

              <p className={`text-lg text-gray-300 max-w-xl transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                {personalInfo.subtitle}
              </p>

              {/* Social Links */}
              <div className={`flex gap-4 pt-4 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative"
                    aria-label={social.name}
                  >
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 group-hover:scale-110">
                      <span className="text-white text-lg font-semibold">{social.display}</span>
                    </div>
                    <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      {social.name}
                    </span>
                  </a>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className={`flex flex-col sm:flex-row gap-4 pt-6 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <Link
                  href="/projects"
                  className="px-8 py-3 bg-gradient-to-r from-teal-500 to-lime-500 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-teal-500/50 transition-all duration-300 hover:scale-105 text-center"
                >
                  View Projects
                </Link>
                <Link
                  href="/experience"
                  className="px-8 py-3 border-2 border-teal-400 text-teal-300 rounded-full font-semibold hover:bg-teal-400/10 transition-all duration-300 hover:scale-105 text-center"
                >
                  Experience
                </Link>
              </div>
            </div>

            {/* Right Side - DNA Strand */}
            <div className={`flex items-center justify-center transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
              <DNAStrand technologies={technologies} />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-teal-400 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-teal-400 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Quick Stats Section */}
      <div className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: '15+', label: 'Projects Completed', icon: '🚀' },
              { number: '3+', label: 'Years Experience', icon: '💼' },
              { number: '65%', label: 'Quality Improvement', icon: '📈' }
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-teal-400/50 transition-all duration-300 hover:scale-105"
              >
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}