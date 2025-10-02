'use client';

import { useState, useEffect } from 'react';

export default function DNAStrand({ technologies }) {
    const [offset, setOffset] = useState(0);
    const [hoveredTech, setHoveredTech] = useState(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setOffset(prev => (prev + 0.3) % 100);
        }, 30);
        return () => clearInterval(interval);
    }, []);

    const getPosition = (index, total) => {
        const spacing = 100 / (total + 1);
        const baseY = spacing * (index + 1) + offset;
        const normalizedY = baseY % 100;

        const angle = (normalizedY / 100) * Math.PI * 4;
        const x = Math.cos(angle) * 120;
        const z = Math.sin(angle) * 120;

        return { x, y: normalizedY, z, angle };
    };

    return (
        <div className="relative w-full h-[600px] flex items-center justify-center" style={{ perspective: '1500px' }}>
            <div className="relative w-full max-w-md h-full">

                {/* SVG for DNA Helix */}
                <svg
                    className="absolute inset-0 w-full h-full pointer-events-none"
                    style={{
                        filter: 'drop-shadow(0 0 20px rgba(20, 184, 166, 0.4)) drop-shadow(0 0 40px rgba(132, 204, 22, 0.3))',
                        transform: 'translateZ(0)'
                    }}
                >

                    {/* Connecting rungs with enhanced styling */}
                    {[...Array(50)].map((_, i) => {
                        const y = (i / 50) * 100;
                        const angle = ((y + offset) / 100) * Math.PI * 4;
                        const xOffset = Math.cos(angle) * 25;
                        const opacity = 0.1 + Math.abs(Math.sin((y / 100) * Math.PI * 2)) * 0.15;

                        return (
                            <g key={`rung-${i}`}>
                                <line
                                    x1={`${50 + xOffset}%`}
                                    y1={`${y}%`}
                                    x2={`${50 - xOffset}%`}
                                    y2={`${y}%`}
                                    stroke={`rgba(${i % 2 ? '20, 184, 166' : '132, 204, 22'}, ${opacity})`}
                                    strokeWidth="2"
                                    className="transition-all duration-200"
                                    filter="url(#glow)"
                                />
                            </g>
                        );
                    })}

                    {/* Left DNA strand */}
                    <path
                        d={Array.from({ length: 100 }, (_, i) => {
                            const y = i;
                            const angle = ((y + offset) / 100) * Math.PI * 4;
                            const x = 50 + Math.cos(angle) * 25;
                            return i === 0 ? `M ${x} ${y}` : `L ${x} ${y}`;
                        }).join(' ')}
                        fill="none"
                        stroke="url(#strand-gradient-1)"
                        strokeWidth="5"
                        strokeLinecap="round"
                        filter="url(#glow)"
                        className="transition-all duration-200"
                    />

                    {/* Right DNA strand */}
                    <path
                        d={Array.from({ length: 100 }, (_, i) => {
                            const y = i;
                            const angle = ((y + offset) / 100) * Math.PI * 4;
                            const x = 50 - Math.cos(angle) * 25;
                            return i === 0 ? `M ${x} ${y}` : `L ${x} ${y}`;
                        }).join(' ')}
                        fill="none"
                        stroke="url(#strand-gradient-2)"
                        strokeWidth="5"
                        strokeLinecap="round"
                        filter="url(#glow)"
                        className="transition-all duration-200"
                    />

                    {/* Enhanced glowing dots */}
                    {[0, 16.67, 33.33, 50, 66.67, 83.33, 100].map((y, idx) => {
                        const angle = ((y + offset) / 100) * Math.PI * 4;
                        const xOffset = Math.cos(angle) * 25;

                        return (
                            <g key={`glow-${idx}`} filter="url(#glow)">
                                <circle
                                    cx={`${50 + xOffset}%`}
                                    cy={`${y}%`}
                                    r="5"
                                    fill="#14b8a6"
                                    opacity="0.9"
                                >
                                    <animate
                                        attributeName="r"
                                        values="5;7;5"
                                        dur="2s"
                                        repeatCount="indefinite"
                                    />
                                    <animate
                                        attributeName="opacity"
                                        values="0.7;1;0.7"
                                        dur="2s"
                                        repeatCount="indefinite"
                                    />
                                </circle>
                                <circle
                                    cx={`${50 - xOffset}%`}
                                    cy={`${y}%`}
                                    r="5"
                                    fill="#84cc16"
                                    opacity="0.9"
                                >
                                    <animate
                                        attributeName="r"
                                        values="5;7;5"
                                        dur="2s"
                                        begin="0.5s"
                                        repeatCount="indefinite"
                                    />
                                    <animate
                                        attributeName="opacity"
                                        values="0.7;1;0.7"
                                        dur="2s"
                                        begin="0.5s"
                                        repeatCount="indefinite"
                                    />
                                </circle>
                            </g>
                        );
                    })}
                </svg>

                {/* Technology Badges */}
                {technologies && technologies.map((tech, index) => {
                    const pos = getPosition(index, technologies.length);
                    const scale = 0.5 + (pos.z + 120) / 240 * 0.8;
                    const opacity = 0.3 + (pos.z + 120) / 240 * 0.7;
                    const blur = Math.max(0, 2 - (pos.z + 120) / 280 * 2);
                    const isHovered = hoveredTech === index;

                    return (
                        <div
                            key={`${tech.name}-${index}`}
                            className="absolute left-1/2 transition-all duration-200 ease-out"
                            style={{
                                top: `${pos.y}%`,
                                transform: `translate(-50%, -50%) translateX(${pos.x}px) scale(${isHovered ? scale * 1.3 : scale})`,
                                opacity: isHovered ? 1 : opacity,
                                zIndex: isHovered ? 9999 : Math.round(pos.z + 120),
                                filter: `blur(${isHovered ? 0 : blur}px)`
                            }}
                            onMouseEnter={() => setHoveredTech(index)}
                            onMouseLeave={() => setHoveredTech(null)}
                        >
                            <div
                                className={`group relative p-4 rounded-3xl backdrop-blur-md border-2 transition-all duration-300 cursor-pointer ${isHovered ? 'shadow-2xl' : 'shadow-lg'
                                    }`}
                                style={{
                                    backgroundColor: `${tech.color}${isHovered ? '30' : '15'}`,
                                    borderColor: `${tech.color}${isHovered ? '80' : '50'}`,
                                    boxShadow: isHovered
                                        ? `0 8px 40px ${tech.color}60, 0 0 30px ${tech.color}50, 0 0 60px ${tech.color}30`
                                        : `0 4px 20px ${tech.color}40, 0 0 15px ${tech.color}30`
                                }}
                            >
                                {/* Logo */}
                                <div className={`w-10 h-10 flex items-center justify-center relative transition-all duration-300 ${isHovered ? 'scale-110' : ''}`}>
                                    <img
                                        src={tech.logo}
                                        alt={tech.name}
                                        className="max-w-full max-h-full object-contain transition-all duration-300"
                                        style={{
                                            filter: 'brightness(0) invert(1)',
                                            opacity: isHovered ? 1 : 0.9
                                        }}
                                    />
                                </div>

                                {/* Animated glow effect */}
                                <div
                                    className={`absolute inset-0 rounded-3xl transition-opacity duration-300 pointer-events-none ${isHovered ? 'opacity-100' : 'opacity-0'}`}
                                    style={{
                                        background: `radial-gradient(circle at center, ${tech.color}80 0%, transparent 70%)`,
                                        filter: 'blur(15px)'
                                    }}
                                />

                                {/* Tooltip */}
                                <div
                                    className={`absolute -bottom-16 left-1/2 transform -translate-x-1/2 transition-all duration-300 pointer-events-none z-[10000] ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                                        }`}
                                >
                                    <div className="bg-slate-900/95 backdrop-blur-xl px-4 py-3 rounded-2xl border border-white/20 shadow-2xl whitespace-nowrap">
                                        <p className="text-white text-sm font-bold mb-1">{tech.name}</p>
                                        <p className="text-teal-300 text-xs font-medium">{tech.category}</p>

                                        {/* Arrow */}
                                        <div
                                            className="absolute top-[-6px] left-1/2 transform -translate-x-1/2 w-3 h-3 bg-slate-900 border-l border-t border-white/20 rotate-45"
                                        />
                                    </div>
                                </div>

                                {/* Particle effect on hover */}
                                {isHovered && (
                                    <>
                                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-teal-400 rounded-full animate-ping" />
                                        <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-lime-400 rounded-full animate-ping" style={{ animationDelay: '0.3s' }} />
                                    </>
                                )}
                            </div>
                        </div>
                    );
                })}

                {/* Center glow effects */}
                <div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 h-56 rounded-full pointer-events-none animate-pulse-glow"
                    style={{
                        background: 'radial-gradient(circle, rgba(20, 184, 166, 0.3) 0%, transparent 70%)',
                        filter: 'blur(50px)'
                    }}
                />
                <div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full pointer-events-none animate-pulse-glow"
                    style={{
                        background: 'radial-gradient(circle, rgba(132, 204, 22, 0.2) 0%, transparent 70%)',
                        filter: 'blur(60px)',
                        animationDelay: '1s'
                    }}
                />
            </div>
        </div>
    );
}