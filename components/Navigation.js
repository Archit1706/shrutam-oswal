'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { personalInfo, navigation } from '@/data/data';

export default function Navigation() {
    const pathname = usePathname();

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="text-white font-bold text-xl hover:text-purple-400 transition-colors group"
                    >
                        <span className="relative">
                            {personalInfo.name.split(' ')[0]}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"></span>
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-1">
                        {navigation.map((item, index) => {
                            const isActive = pathname === item.href;
                            return (
                                <Link
                                    key={index}
                                    href={item.href}
                                    className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 ${isActive
                                        ? 'text-white'
                                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                                        }`}
                                >
                                    <span className="relative z-10 flex items-center gap-2">
                                        <span className="text-lg">{item.icon}</span>
                                        {item.name}
                                    </span>
                                    {isActive && (
                                        <>
                                            <span className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg" />
                                            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500" />
                                        </>
                                    )}
                                </Link>
                            );
                        })}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        {/* This space is for the mobile menu button from MobileNav component */}
                    </div>
                </div>
            </div>
        </nav>
    );
}