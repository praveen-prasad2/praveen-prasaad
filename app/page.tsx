"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import {
  RiGithubFill,
  RiLinkedinFill,
  RiTwitterFill,
  RiInstagramFill,
  RiWhatsappFill,
} from "react-icons/ri";
import Link from "next/link";
import toast from "react-hot-toast";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDocker,
  FaAws,
  FaAngular,
  FaJs,
  FaPhp,
  FaWordpress,
  FaFigma,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiDjango,
  SiMongodb,
  SiPostgresql,
  SiFirebase,
  SiSupabase,
  SiMysql,
  SiKubernetes,
  SiVercel,
  SiNetlify,
  SiTypescript,
} from "react-icons/si";
import { useRouter } from "next/navigation";

const skillsData = [
  { name: "React", icon: <FaReact /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "Angular", icon: <FaAngular /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Django", icon: <SiDjango /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "PostgreSQL", icon: <SiPostgresql /> },
  { name: "Docker", icon: <FaDocker /> },
  { name: "AWS", icon: <FaAws /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "Python", icon: <FaPython /> },

  { name: "Git", icon: <FaGitAlt /> },
];

const Home = () => {
  const router = useRouter();
  const [activeSection, setActiveSection] = useState("about");

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("hadhirasal22@gmail.com");
    toast.success("Email copied to clipboard", {
      duration: 4000,
      position: "top-center",
      style: {
        background: "linear-gradient(to right, #2e2e2e, #1e1e1e)",
        color: "#ffffff",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
        fontSize: "16px",
        border: "1px solid #3e3e3e",
      },
    });
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 to-black text-white min-h-screen">
      <Head>
        <title>Praveen Prasad</title>
        <meta
          name="description"
          content="Hadi Razal is a skilled full-stack developer and founder of Duoph Technologies, crafting exceptional digital experiences."
        />
      </Head>

      <header className="py-6 px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-between items-center">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold"
          >
            Praveen.
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex space-x-4"
          >
            {["about", "skills", "projects"].map((item) => (
              <button
                key={item}
                onClick={() => setActiveSection(item)}
                className={`capitalize ${
                  activeSection === item ? "text-blue-400" : "text-gray-400"
                } hover:text-blue-300 transition-colors`}
              >
                {item}
              </button>
            ))}
          </motion.div>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <motion.img
            src="/praveen.jpeg"
            alt="Praveen Prasad"
            sizes="center"
            className="w-40 h-40 rounded-full  mx-auto mb-6 border-4 border-blue-400"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
          <h1 className="text-4xl sm:text-5xl font-bold mb-2">
            Praveen Prasad
          </h1>
          <h2 className="text-2xl text-blue-400 mb-4">
            Full-Stack Developer & Innovator
          </h2>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Crafting cutting-edge digital solutions at Duoph Technologies.
            Passionate about pushing the boundaries of web development and user
            experience.
          </p>
          <motion.button
            onClick={() => router.push("https://wa.me/+918589920409")}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-full transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Connect With Me
          </motion.button>
        </motion.section>

        {activeSection === "about" && (
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h3 className="text-3xl font-bold mb-6">About Me</h3>
            <p className="text-gray-300 leading-relaxed">
              As the co-Founder & lead developer at Duoph Technologies, I
              spearhead innovative projects that push the boundaries of web
              development. My expertise spans the full stack, from crafting
              intuitive user interfaces with React and Angular to building
              robust backend systems with Node.js and Django. I&apos;m
              passionate about creating seamless, high-performance applications
              that not only meet but exceed client expectations. My approach
              combines technical excellence with a keen eye for design, ensuring
              that every project I touch is both functionally powerful and
              visually stunning. When I&apos;m not coding, you&apos;ll find me
              exploring the latest in tech, mentoring aspiring developers, or
              working on Mail Motion, my AI-powered marketing SaaS that&apos;s
              revolutionizing how businesses approach online promotion.
            </p>
          </motion.section>
        )}

        {activeSection === "skills" && (
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h3 className="text-3xl font-bold mb-6">Skills & Technologies</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {skillsData.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="flex flex-col items-center p-4 bg-gray-800 rounded-lg shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <div className="text-4xl mb-2 text-blue-400">
                    {skill.icon}
                  </div>
                  <div className="text-sm">{skill.name}</div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        {activeSection === "projects" && (
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h3 className="text-3xl font-bold mb-6">Featured Project</h3>
            <div className="bg-gray-800 rounded-lg p-6 shadow-xl">
              <h4 className="text-2xl font-bold text-blue-400 mb-2">
                Mail Motion
              </h4>
              <p className="text-gray-300 mb-4">
                An AI-powered marketing SaaS that revolutionizes how businesses
                approach online promotion. Mail Motion simplifies email
                campaigns, content generation, and performance analysis, making
                advanced marketing accessible to businesses of all sizes.
              </p>
              <ul className="list-disc list-inside text-gray-400 mb-4">
                <li>Automated email campaign creation</li>
                <li>AI-driven content generation</li>
                <li>Comprehensive analytics dashboard</li>
                <li>Seamless integration with CRM tools</li>
              </ul>
              <Link href="https://github.com/praveen-prasad2" passHref>
                <motion.button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-full transition-colors duration-300 shadow-lg hover:shadow-xl">
                  View on GitHub
                </motion.button>
              </Link>
            </div>
          </motion.section>
        )}
      </main>

      <footer className="bg-gray-800 py-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400">
          <p className="mb-4">© 2024 Praveen Prasad. All rights reserved.</p>
          <div className="flex justify-center space-x-4">
            <Link href="https://github.com/praveen-prasad2" passHref>
              <RiGithubFill className="w-6 h-6 text-white hover:text-blue-400 transition-colors duration-200" />
            </Link>
            <Link href="https://www.linkedin.com/in/praveen-prasad-14764b231/" passHref>
              <RiLinkedinFill className="w-6 h-6 text-white hover:text-blue-400 transition-colors duration-200" />
            </Link>
            <Link href="https://x.com/uglymallu" passHref>
              <RiTwitterFill className="w-6 h-6 text-white hover:text-blue-400 transition-colors duration-200" />
            </Link>
            <Link href="https://www.instagram.com/praveen_prasaad" passHref>
              <RiInstagramFill className="w-6 h-6 text-white hover:text-blue-400 transition-colors duration-200" />
            </Link>
            <a
              href="https://wa.me/+918589920409"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RiWhatsappFill className="w-6 h-6 text-white hover:text-blue-400 transition-colors duration-200" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
