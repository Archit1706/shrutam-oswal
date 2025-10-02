// import Link from 'next/link';
// import { portfolio } from '@/data';
// // Assume react-icons are used. User would need to install them.
// // import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

// export default function Footer() {
//     return (
//         <footer className="w-full border-t border-foreground/10 py-6 mt-20">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-sm text-foreground/70">
//                 <p className="mb-4 md:mb-0">
//                     © {new Date().getFullYear()} {portfolio.name}. All rights reserved.
//                 </p>
//                 <div className="flex space-x-6">
//                     {portfolio.socials.map((social) => (
//                         <Link
//                             key={social.name}
//                             href={social.url}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="transition-smooth hover:text-cyan-500"
//                         >
//                             {/* This is where a social icon component would go, e.g., <FaLinkedin /> */}
//                             {social.name}
//                         </Link>
//                     ))}
//                 </div>
//             </div>
//         </footer>
//     );
// }