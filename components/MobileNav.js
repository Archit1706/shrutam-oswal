'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { personalInfo, navigation } from '@/data/data';

export default function MobileNav() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    return (
        <>
            {/* Mobile Menu Button */}
            <button
                onClick={toggleMenu}
                className="md:hidden fixed top-4 right-4 z-50 w-12 h-12 bg-teal-500/20 backdrop-blur-md rounded-full flex items-center justify-center border border-teal-400/30 hover:bg-teal-500/30 transition-all duration-300"
                aria-label="Toggle menu"
            >
                <div className="w-6 h-5 relative flex flex-col justify-between">
                    <span
                        className={`w-full h-0.5 bg-white rounded transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''
                            }`}
                    />
                    <span
                        className={`w-full h-0.5 bg-white rounded transition-all duration-300 ${isOpen ? 'opacity-0' : ''
                            }`}
                    />
                    <span
                        className={`w-full h-0.5 bg-white rounded transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''
                            }`}
                    />
                </div>
            </button>

            {/* Mobile Menu Overlay */}
            <div
                className={`md:hidden fixed inset-0 z-40 transition-all duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    }`}
            >
                {/* Backdrop */}
                <div
                    onClick={closeMenu}
                    className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                />

                {/* Menu Content */}
                <div
                    className={`absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900 border-l border-white/10 shadow-2xl transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'
                        }`}
                >
                    {/* Header */}
                    <div className="p-6 border-b border-white/10">
                        <h2 className="text-2xl font-bold text-white mb-1">
                            {personalInfo.name}
                        </h2>
                        <p className="text-teal-300 text-sm">{personalInfo.title}</p>
                    </div>

                    {/* Navigation Links */}
                    <nav className="p-6">
                        <ul className="space-y-2">
                            {navigation.map((item, index) => {
                                const isActive = pathname === item.href;
                                return (
                                    <li
                                        key={index}
                                        style={{ animationDelay: `${index * 50}ms` }}
                                        className={`transition-all duration-300 ${isOpen ? 'animate-slide-in-right' : ''
                                            }`}
                                    >
                                        <Link
                                            href={item.href}
                                            onClick={closeMenu}
                                            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${isActive
                                                ? 'bg-teal-500/20 text-white border border-teal-400/30'
                                                : 'text-gray-300 hover:bg-white/5 hover:text-white'
                                                }`}
                                        >
                                            <span className="text-2xl">{item.icon}</span>
                                            <span className="font-semibold">{item.name}</span>
                                            {isActive && (
                                                <span className="ml-auto w-2 h-2 bg-teal-500 rounded-full animate-pulse" />
                                            )}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>

                    {/* Contact Info */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-white/10 bg-black/20">
                        <div className="space-y-3">
                            <a
                                href={`mailto:${personalInfo.email}`}
                                className="flex items-center gap-2 text-gray-300 hover:text-teal-400 transition-colors text-sm"
                            >
                                <span>✉</span>
                                {personalInfo.email}
                            </a>
                            <a
                                href={`tel:${personalInfo.phone}`}
                                className="flex items-center gap-2 text-gray-300 hover:text-teal-400 transition-colors text-sm"
                            >
                                <span>☎</span>
                                {personalInfo.phone}
                            </a>
                            <p className="flex items-center gap-2 text-gray-300 text-sm">
                                <span>📍</span>
                                {personalInfo.location}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}