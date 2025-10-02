// "use client";
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import { portfolio } from '@/data';

// const navItems = [
//     { name: 'Home', href: '/' },
//     { name: 'About', href: '/about' },
//     { name: 'Experience', href: '/experience' },
//     { name: 'Projects', href: '/projects' },
// ];

// export default function Navbar() {
//     const pathname = usePathname();
//     const isActive = (href) => pathname === href;

//     return (
//         <nav className="sticky top-0 z-50 p-4 backdrop-blur-md bg-background/80 shadow-md">
//             <div className="max-w-7xl mx-auto flex justify-between items-center">
//                 <Link href="/" className="text-xl font-bold text-foreground transition-smooth hover:text-cyan-500">
//                     {portfolio.name.split(' ')[0]}
//                 </Link>
//                 <div className="flex space-x-4">
//                     {navItems.map((item) => (
//                         <Link
//                             key={item.name}
//                             href={item.href}
//                             className={`text-sm md:text-base font-medium transition-smooth ${isActive(item.href)
//                                 ? 'text-cyan-500 border-b-2 border-cyan-500'
//                                 : 'text-foreground hover:text-cyan-500 hover:border-b-2 hover:border-cyan-500/50'
//                                 }`}
//                         >
//                             {item.name}
//                         </Link>
//                     ))}
//                 </div>
//             </div>
//         </nav>
//     );
// }