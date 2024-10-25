import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Praveen Prasad - Top Software Developer & Founder of Duoph Technologies in Kerala",
  description: "Explore the portfolio of Praveen Prasad, an accomplished software developer and founder of Duoph Technologies. Specializing in full-stack development, modern web technologies, and innovative solutions for businesses worldwide.",
  keywords: "Praveen Prasad, Software Developer, Full-Stack Developer, Ponnai, Kerala, Best Software Developer in Kerala, Top Developer in Kerala, Duoph Technologies, Web Development, JavaScript, React, Node.js, Next.js, Firebase, Supabase, MySQL, TypeScript, Portfolio, Innovative Solutions, Tech Expert"
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {




  return (
    <html lang="en">
      <head>

        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

      </head>
      <body className={`${poppins.className}`}>
        <Toaster />
        {children}
      </body>
    </html>
  );
}

