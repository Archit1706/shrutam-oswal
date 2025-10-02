'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { personalInfo, navigation, socialLinks } from '@/data';

export default function MobileNav() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    return (
        <>
            {/* Mobile Menu Button - Fixed Position */}
            <button
                onClick={toggleMenu}
                className={`md:hidden fixed top-4 right-4 z-[100] w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 ${isOpen
                    ? 'bg-gradient-to-br from-teal-500 to-lime-500 shadow-2xl shadow-teal-500/50 rotate-90'
                    : isScrolled
                        ? 'bg-slate-800/80 backdrop-blur-xl border border-white/10 shadow-xl'
                        : 'bg-slate-800/60 backdrop-blur-md border border-white/10'
                    }`}
                aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
                <div className="w-6 h-6 relative flex flex-col justify-center items-center">
                    <span
                        className={`absolute w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${isOpen ? 'rotate-45' : '-translate-y-2'
                            }`}
                    />
                    <span
                        className={`absolute w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${isOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
                            }`}
                    />
                    <span
                        className={`absolute w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${isOpen ? '-rotate-45' : 'translate-y-2'
                            }`}
                    />
                </div>
            </button>

            {/* Mobile Menu Overlay & Content */}
            <div
                className={`md:hidden fixed inset-0 z-[90] transition-all duration-500 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    }`}
            >
                {/* Animated Backdrop with Gradient */}
                <div
                    onClick={closeMenu}
                    className={`absolute inset-0 transition-all duration-500 ${isOpen ? 'backdrop-blur-xl' : 'backdrop-blur-none'
                        }`}
                    style={{
                        background: isOpen
                            ? 'linear-gradient(135deg, rgba(15, 23, 42, 0.95), rgba(15, 118, 110, 0.9), rgba(20, 184, 166, 0.95))'
                            : 'transparent'
                    }}
                />

                {/* Menu Content */}
                <div
                    className={`absolute top-0 right-0 h-full w-[85vw] max-w-sm transition-all duration-500 ${isOpen ? 'translate-x-0' : 'translate-x-full'
                        }`}
                    style={{
                        background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.98), rgba(30, 41, 59, 0.98))',
                        backdropFilter: 'blur(20px)',
                        borderLeft: '1px solid rgba(255, 255, 255, 0.1)',
                        boxShadow: '-20px 0 60px rgba(0, 0, 0, 0.5)'
                    }}
                >
                    {/* Decorative Gradient Orbs */}
                    <div className="absolute top-20 right-10 w-32 h-32 bg-teal-500/20 rounded-full blur-3xl animate-pulse-glow" />
                    <div className="absolute bottom-40 left-10 w-40 h-40 bg-lime-500/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />

                    {/* Header */}
                    <div className="relative p-8 border-b border-white/10">
                        <div className={`transition-all duration-700 ${isOpen ? 'animate-slide-in-right' : 'opacity-0'}`}>
                            <h2 className="text-3xl font-bold mb-2">
                                <span className="gradient-text">{personalInfo.name}</span>
                            </h2>
                            <p className="text-teal-300 text-sm font-medium">{personalInfo.title}</p>
                            <p className="text-gray-400 text-xs mt-1">{personalInfo.tagline}</p>
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <nav className="relative p-6 overflow-y-auto max-h-[60vh]">
                        <ul className="space-y-2">
                            {navigation.map((item, index) => {
                                const isActive = pathname === item.href;
                                return (
                                    <li
                                        key={index}
                                        className={`transition-all duration-500 ${isOpen ? 'animate-slide-in-right' : 'opacity-0'
                                            }`}
                                        style={{ animationDelay: `${index * 100 + 200}ms` }}
                                    >
                                        <Link
                                            href={item.href}
                                            onClick={closeMenu}
                                            className={`group relative flex items-center gap-4 px-5 py-4 rounded-2xl overflow-hidden transition-all duration-300 ${isActive
                                                ? 'bg-gradient-to-r from-teal-500/20 to-lime-500/20 shadow-lg shadow-teal-500/10'
                                                : 'hover:bg-white/5'
                                                }`}
                                        >
                                            {/* Background Gradient on Hover */}
                                            <div className={`absolute inset-0 bg-gradient-to-r from-teal-500/10 to-lime-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${isActive ? 'opacity-100' : ''}`} />

                                            {/* Icon */}
                                            <div className={`relative z-10 text-3xl transform transition-all duration-300 ${isActive ? 'scale-110' : 'group-hover:scale-110 group-hover:rotate-12'
                                                }`}>
                                                {item.icon}
                                            </div>

                                            {/* Text */}
                                            <span className={`relative z-10 font-semibold text-lg transition-colors duration-300 ${isActive ? 'text-white' : 'text-gray-300 group-hover:text-white'
                                                }`}>
                                                {item.name}
                                            </span>

                                            {/* Active Indicator */}
                                            {isActive && (
                                                <div className="relative z-10 ml-auto flex items-center gap-2">
                                                    <span className="w-2 h-2 bg-teal-500 rounded-full animate-pulse" />
                                                    <span className="w-1.5 h-1.5 bg-lime-500 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }} />
                                                </div>
                                            )}

                                            {/* Hover Arrow */}
                                            {!isActive && (
                                                <div className="relative z-10 ml-auto opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                                                    <svg className="w-5 h-5 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                    </svg>
                                                </div>
                                            )}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>

                    {/* Social Links */}
                    <div className="relative px-6 py-4 border-t border-white/10">
                        <p className={`text-gray-400 text-xs font-semibold mb-3 uppercase tracking-wider transition-all duration-700 ${isOpen ? 'animate-slide-in-right' : 'opacity-0'}`} style={{ animationDelay: '600ms' }}>
                            Connect
                        </p>
                        <div className={`flex gap-3 transition-all duration-700 ${isOpen ? 'animate-slide-in-right' : 'opacity-0'}`} style={{ animationDelay: '700ms' }}>
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group relative w-12 h-12 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center hover:bg-gradient-to-br hover:from-teal-500/20 hover:to-lime-500/20 transition-all duration-300 hover:scale-110 hover:border-teal-400/50"
                                    aria-label={social.name}
                                >
                                    <span className="text-white text-sm font-bold group-hover:scale-110 transition-transform duration-300">
                                        {social.display}
                                    </span>

                                    {/* Tooltip */}
                                    <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-slate-900 px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-50 text-xs text-white border border-white/20">
                                        {social.name}
                                        <div className="absolute bottom-[-4px] left-1/2 transform -translate-x-1/2 w-2 h-2 bg-slate-900 border-r border-b border-white/20 rotate-45" />
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="relative px-6 pb-8 border-t border-white/10 mt-auto">
                        <div className={`space-y-3 mt-4 transition-all duration-700 ${isOpen ? 'animate-slide-in-right' : 'opacity-0'}`} style={{ animationDelay: '800ms' }}>
                            <a
                                href={`mailto:${personalInfo.email}`}
                                className="group flex items-center gap-3 text-gray-300 hover:text-teal-400 transition-all duration-300 text-sm"
                            >
                                <div className="w-8 h-8 bg-teal-500/10 rounded-lg flex items-center justify-center group-hover:bg-teal-500/20 transition-colors duration-300">
                                    <span className="text-base">✉</span>
                                </div>
                                <span className="flex-1 truncate">{personalInfo.email}</span>
                            </a>
                            <a
                                href={`tel:${personalInfo.phone}`}
                                className="group flex items-center gap-3 text-gray-300 hover:text-lime-400 transition-all duration-300 text-sm"
                            >
                                <div className="w-8 h-8 bg-lime-500/10 rounded-lg flex items-center justify-center group-hover:bg-lime-500/20 transition-colors duration-300">
                                    <span className="text-base">☎</span>
                                </div>
                                <span>{personalInfo.phone}</span>
                            </a>
                            <div className="flex items-center gap-3 text-gray-400 text-sm">
                                <div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center">
                                    <span className="text-base">📍</span>
                                </div>
                                <span>{personalInfo.location}</span>
                            </div>
                        </div>
                    </div>

                    {/* Decorative Bottom Border */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 to-lime-500" />
                </div>
            </div>
        </>
    );
}