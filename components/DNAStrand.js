'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function DNAStrand({ technologies }) {
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setOffset(prev => (prev + 0.5) % 100);
        }, 30);
        return () => clearInterval(interval);
    }, []);

    const getPosition = (index, total) => {
        // Vertical positioning with helix effect
        const spacing = 100 / (total + 1);
        const baseY = spacing * (index + 1) + offset;
        const normalizedY = baseY % 100;

        // Create horizontal oscillation (helix effect)
        const angle = (normalizedY / 100) * Math.PI * 4; // 2 complete spirals
        const x = Math.cos(angle) * 120; // Horizontal distance from center
        const z = Math.sin(angle) * 120; // Depth effect

        return { x, y: normalizedY, z, angle };
    };

    return (
        <div className="relative w-full h-[600px] flex items-center justify-center" style={{ perspective: '1200px' }}>
            <div className="relative w-full max-w-md h-full">
                {/* SVG for Vertical DNA Helix Structure */}
                <svg
                    className="absolute inset-0 w-full h-full pointer-events-none"
                    style={{
                        filter: 'drop-shadow(0 0 30px rgba(168, 85, 247, 0.6))',
                        transform: 'translateZ(0)'
                    }}
                >
                    <defs>
                        <linearGradient id="strand-gradient-1" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#a855f7" stopOpacity="0.8" />
                            <stop offset="50%" stopColor="#ec4899" stopOpacity="0.8" />
                            <stop offset="100%" stopColor="#a855f7" stopOpacity="0.8" />
                        </linearGradient>
                        <linearGradient id="strand-gradient-2" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#6366f1" stopOpacity="0.8" />
                            <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.8" />
                            <stop offset="100%" stopColor="#6366f1" stopOpacity="0.8" />
                        </linearGradient>
                    </defs>

                    {/* Connecting rungs between strands (horizontal lines) */}
                    {[...Array(40)].map((_, i) => {
                        const y = (i / 40) * 100;
                        const angle = ((y + offset) / 100) * Math.PI * 4;
                        const xOffset = Math.cos(angle) * 25;

                        return (
                            <line
                                key={`rung-${i}`}
                                x1={`${50 + xOffset}%`}
                                y1={`${y}%`}
                                x2={`${50 - xOffset}%`}
                                y2={`${y}%`}
                                stroke="rgba(168, 85, 247, 0.15)"
                                strokeWidth="1.5"
                                className="transition-all duration-100"
                            />
                        );
                    })}

                    {/* Left DNA strand - vertical helix */}
                    <path
                        d={Array.from({ length: 100 }, (_, i) => {
                            const y = i;
                            const angle = ((y + offset) / 100) * Math.PI * 4;
                            const x = 50 + Math.cos(angle) * 25;
                            return i === 0 ? `M ${x} ${y}` : `L ${x} ${y}`;
                        }).join(' ')}
                        fill="none"
                        stroke="url(#strand-gradient-1)"
                        strokeWidth="4"
                        strokeLinecap="round"
                        className="transition-all duration-100"
                    />

                    {/* Right DNA strand - vertical helix */}
                    <path
                        d={Array.from({ length: 100 }, (_, i) => {
                            const y = i;
                            const angle = ((y + offset) / 100) * Math.PI * 4;
                            const x = 50 - Math.cos(angle) * 25;
                            return i === 0 ? `M ${x} ${y}` : `L ${x} ${y}`;
                        }).join(' ')}
                        fill="none"
                        stroke="url(#strand-gradient-2)"
                        strokeWidth="4"
                        strokeLinecap="round"
                        className="transition-all duration-100"
                    />

                    {/* Glowing dots at regular intervals */}
                    {[0, 20, 40, 60, 80, 100].map((y, idx) => {
                        const angle = ((y + offset) / 100) * Math.PI * 4;
                        const xOffset = Math.cos(angle) * 25;

                        return (
                            <g key={`glow-${idx}`}>
                                <circle
                                    cx={`${50 + xOffset}%`}
                                    cy={`${y}%`}
                                    r="4"
                                    fill="#a855f7"
                                    opacity="0.8"
                                >
                                    <animate
                                        attributeName="r"
                                        values="4;6;4"
                                        dur="2s"
                                        repeatCount="indefinite"
                                    />
                                    <animate
                                        attributeName="opacity"
                                        values="0.8;1;0.8"
                                        dur="2s"
                                        repeatCount="indefinite"
                                    />
                                </circle>
                                <circle
                                    cx={`${50 - xOffset}%`}
                                    cy={`${y}%`}
                                    r="4"
                                    fill="#6366f1"
                                    opacity="0.8"
                                >
                                    <animate
                                        attributeName="r"
                                        values="4;6;4"
                                        dur="2s"
                                        begin="0.5s"
                                        repeatCount="indefinite"
                                    />
                                    <animate
                                        attributeName="opacity"
                                        values="0.8;1;0.8"
                                        dur="2s"
                                        begin="0.5s"
                                        repeatCount="indefinite"
                                    />
                                </circle>
                            </g>
                        );
                    })}
                </svg>

                {/* Technology Logo Badges moving vertically */}
                {technologies && technologies.map((tech, index) => {
                    const pos = getPosition(index, technologies.length);

                    // Calculate scale and opacity based on z-position (depth)
                    const scale = 0.5 + (pos.z + 120) / 240 * 0.7; // Scale from 0.5 to 1.2
                    const opacity = 0.3 + (pos.z + 120) / 240 * 0.7; // Opacity from 0.3 to 1.0
                    const blur = Math.max(0, 2 - (pos.z + 120) / 280 * 2); // Blur effect for depth

                    return (
                        <div
                            key={`${tech.name}-${index}`}
                            className="absolute left-1/2 transition-all duration-100 ease-linear"
                            style={{
                                top: `${pos.y}%`,
                                transform: `translate(-50%, -50%) translateX(${pos.x}px) scale(${scale})`,
                                opacity: opacity,
                                zIndex: Math.round(pos.z + 120),
                                filter: `blur(${blur}px)`
                            }}
                        >
                            <div
                                className="group relative p-3 rounded-2xl backdrop-blur-sm border-2 transition-all duration-300 hover:scale-125 cursor-default"
                                style={{
                                    backgroundColor: `${tech.color}15`,
                                    borderColor: `${tech.color}50`,
                                    boxShadow: `0 4px 30px ${tech.color}40, 0 0 20px ${tech.color}30`
                                }}
                            >
                                {/* Technology Logo */}
                                <div className="w-16 h-16 flex items-center justify-center relative">
                                    <img
                                        src={tech.logo}
                                        alt={tech.name}
                                        className="max-w-full max-h-full object-contain"
                                        style={{
                                            filter: 'brightness(0) invert(1)',
                                            mixBlendMode: 'normal'
                                        }}
                                    />
                                </div>

                                {/* Glow effect on hover */}
                                <div
                                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                                    style={{
                                        background: `radial-gradient(circle at center, ${tech.color}66 0%, transparent 70%)`,
                                        filter: 'blur(12px)'
                                    }}
                                />

                                {/* Name tooltip on hover */}
                                <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-black/90 px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-50">
                                    <p className="text-white text-xs font-semibold">{tech.name}</p>
                                    <p className="text-gray-400 text-[10px]">{tech.category}</p>
                                </div>
                            </div>
                        </div>
                    );
                })}

                {/* Center glow effect */}
                <div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full pointer-events-none"
                    style={{
                        background: 'radial-gradient(circle, rgba(168, 85, 247, 0.3) 0%, transparent 70%)',
                        filter: 'blur(40px)',
                        animation: 'pulse 3s ease-in-out infinite'
                    }}
                />
            </div>

            <style jsx>{`
        @keyframes pulse {
          0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.3; }
          50% { transform: translate(-50%, -50%) scale(1.2); opacity: 0.5; }
        }
      `}</style>
        </div>
    );
}