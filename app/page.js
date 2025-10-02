'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { personalInfo, socialLinks, technologies } from '@/data';
import DNAStrand from '@/components/DNAStrand';
import MobileNav from '@/components/MobileNav';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900 overflow-hidden relative">
      {/* Animated Background Orbs */}
      <div className="fixed inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl animate-pulse-glow"
          style={{ transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)` }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-lime-500/20 rounded-full blur-3xl animate-pulse-glow"
          style={{
            transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`,
            animationDelay: '1.5s'
          }}
        />
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
        ? 'bg-slate-900/80 backdrop-blur-xl border-b border-white/10 shadow-2xl'
        : 'bg-transparent'
        }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link
              href="/"
              className="group text-white font-bold text-xl transition-all duration-300 hover:scale-105"
            >
              <span className="relative">
                {personalInfo.name.split(' ')[0]}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-500 to-lime-500 group-hover:w-full transition-all duration-500" />
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {[
                { name: 'Home', href: '/' },
                { name: 'About', href: '/about' },
                { name: 'Experience', href: '/experience' },
                { name: 'Projects', href: '/projects' },
                { name: 'Resume', href: '/resume' },
                { name: 'Contact', href: '/contact' }
              ].map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="group relative px-6 py-2 rounded-xl text-gray-300 hover:text-white transition-all duration-300 hover:scale-105"
                >
                  <span className="relative z-10">{item.name}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-500/0 to-lime-500/0 group-hover:from-teal-500/10 group-hover:to-lime-500/10 rounded-xl transition-all duration-300" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <MobileNav />

      {/* Hero Section */}
      <div className="relative w-full min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Left Side - Content */}
            <div className="relative z-10 space-y-8">

              {/* Greeting Badge */}
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-teal-500/10 to-lime-500/10 border border-teal-400/30 backdrop-blur-sm transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <span className="w-2 h-2 bg-teal-500 rounded-full animate-pulse" />
                <span className="text-teal-300 text-sm font-medium">Welcome to my portfolio</span>
              </div>

              {/* Name */}
              <div className={`space-y-4 transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight">
                  {personalInfo.name.split(' ').map((word, index) => (
                    <span key={index} className="inline-block animate-slide-in-up" style={{ animationDelay: `${index * 100 + 200}ms` }}>
                      {word}{' '}
                    </span>
                  ))}
                </h1>
                <div className="h-1.5 w-32 bg-gradient-to-r from-teal-500 to-lime-500 rounded-full animate-scale-in" style={{ animationDelay: '400ms' }} />
              </div>

              {/* Tagline */}
              <div className={`space-y-4 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <p className="text-2xl sm:text-3xl lg:text-4xl font-light">
                  <span className="gradient-text font-semibold">
                    {personalInfo.tagline}
                  </span>
                </p>
                <p className="text-lg sm:text-xl text-gray-300 max-w-xl leading-relaxed">
                  {personalInfo.subtitle}
                </p>
              </div>

              {/* Social Links */}
              <div className={`flex flex-wrap gap-3 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative"
                    aria-label={social.name}
                    style={{ animationDelay: `${index * 50 + 500}ms` }}
                  >
                    <div className="w-14 h-14 bg-gradient-to-br from-white/5 to-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/10 hover:border-teal-400/50 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-teal-500/30">
                      <span className="text-white text-lg font-semibold group-hover:scale-110 transition-transform duration-300">
                        {social.display}
                      </span>
                    </div>

                    {/* Animated tooltip */}
                    <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 px-3 py-1.5 bg-slate-900 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap border border-white/20 group-hover:-translate-y-1">
                      <span className="text-xs text-white font-medium">{social.name}</span>
                      <div className="absolute top-[-4px] left-1/2 transform -translate-x-1/2 w-2 h-2 bg-slate-900 border-l border-t border-white/20 rotate-45" />
                    </div>
                  </a>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <Link
                  href="/projects"
                  className="group relative px-8 py-4 bg-gradient-to-r from-teal-500 to-lime-500 text-white rounded-2xl font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-teal-500/50"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    View Projects
                    <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-lime-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>

                <Link
                  href="/experience"
                  className="group relative px-8 py-4 border-2 border-teal-400 text-teal-300 rounded-2xl font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:text-white"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Experience
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-500/0 to-lime-500/0 group-hover:from-teal-500/20 group-hover:to-lime-500/20 transition-all duration-300" />
                </Link>
              </div>
            </div>

            {/* Right Side - DNA Strand */}
            <div className={`relative flex items-center justify-center transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
              <DNAStrand technologies={technologies} />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden lg:block">
          <div className="flex flex-col items-center gap-2">
            <span className="text-gray-400 text-xs font-medium">Scroll Down</span>
            <div className="w-6 h-10 border-2 border-teal-400 rounded-full flex items-start justify-center p-2">
              <div className="w-1.5 h-3 bg-teal-400 rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats Section */}
      <div className="relative py-20 lg:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">

          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              <span className="gradient-text">By The Numbers</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Measurable impact across multiple domains
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                number: '15+',
                label: 'Projects Completed',
                icon: '🚀',
                color: 'from-teal-500 to-cyan-500',
                description: 'Across mechatronics, mechanical, and robotics'
              },
              {
                number: '3+',
                label: 'Years Experience',
                icon: '💼',
                color: 'from-lime-500 to-green-500',
                description: 'Professional engineering roles'
              },
              {
                number: '65%',
                label: 'Quality Improvement',
                icon: '📈',
                color: 'from-purple-500 to-pink-500',
                description: 'Defect reduction in Six Sigma project'
              }
            ].map((stat, index) => (
              <div
                key={index}
                className="group relative glass rounded-3xl p-8 hover:scale-105 transition-all duration-500 card-hover overflow-hidden"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                {/* Content */}
                <div className="relative z-10">
                  <div className="text-6xl mb-4 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                    {stat.icon}
                  </div>
                  <div className="text-5xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-teal-400 group-hover:to-lime-400 transition-all duration-500">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 font-semibold mb-2">{stat.label}</div>
                  <div className="text-gray-500 text-sm">{stat.description}</div>
                </div>

                {/* Decorative Corner */}
                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${stat.color} opacity-20 blur-2xl group-hover:opacity-40 transition-opacity duration-500`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}