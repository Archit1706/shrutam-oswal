import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Shrutam Oswal - Mechanical Engineer & Robotics Specialist",
  description: "Portfolio of Shrutam Oswal - Results-driven Mechanical Engineer specializing in robotics, mechatronics, and process optimization. Experience in CAD, FEA, ROS, and Six Sigma methodologies.",
  keywords: "Mechanical Engineering, Robotics, Mechatronics, Six Sigma, CAD, SolidWorks, ROS, Arduino, Python",
  authors: [{ name: "Shrutam Oswal" }],
  openGraph: {
    title: "Shrutam Oswal - Mechanical Engineer & Robotics Specialist",
    description: "Portfolio showcasing projects in mechatronics, mechanical design, and robotics",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-900`}
      >
        {children}
      </body>
    </html>
  );
}