"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Mail,
  Phone,
  ArrowRight,
  Code,
  Server,
  Palette,
  Smartphone,
  Globe,
  Database,
  Zap,
  ChevronRight,
  ExternalLink,
  MessageCircle,
  MapPin,
  Calendar
} from "lucide-react";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [isHoveringInteractive, setIsHoveringInteractive] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Fluid animation setup
  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Fluid animation variables
   interface Point {
  x: number;
  y: number;
  vx: number;
  vy: number;
  origX: number;
  origY: number;
  radius: number;
}

const points: Point[] = [];

    const numPoints = 6;
    const viscosity = 20;
    const mouseDist = 70;
    const damping = 0.05;
    const showIndicators = false;

    // Mouse position
    const mouse = { x: 0, y: 0, vx: 0, vy: 0 };

    // Handle window resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initPoints();
    };

    // Initialize points
    const initPoints = () => {
      points.length = 0;
      
      const width = canvas.width;
      const height = canvas.height;
      const centerX = width / 2;
      const centerY = height / 2;
      
      for (let i = 0; i < numPoints; i++) {
        points.push({
          x: centerX + Math.cos(i * Math.PI * 2 / numPoints) * 100,
          y: centerY + Math.sin(i * Math.PI * 2 / numPoints) * 100,
          vx: 0,
          vy: 0,
          origX: centerX + Math.cos(i * Math.PI * 2 / numPoints) * 100,
          origY: centerY + Math.sin(i * Math.PI * 2 / numPoints) * 100,
          radius: 5 + Math.random() * 10
        });
      }
    };

    // Animation loop
    const animate = () => {
      if (!ctx) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < numPoints; i++) {
        const point = points[i];
        
        // Calculate distance to mouse
        const dx = mouse.x - point.x;
        const dy = mouse.y - point.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        // Apply force from mouse
        if (dist < mouseDist) {
          const angle = Math.atan2(dy, dx);
          const force = (mouseDist - dist) / mouseDist;
          
          point.vx += force * Math.cos(angle) * 0.1;
          point.vy += force * Math.sin(angle) * 0.1;
        }
        
        // Apply spring force to return to original position
        const dx2 = point.origX - point.x;
        const dy2 = point.origY - point.y;
        
        point.vx += dx2 * damping;
        point.vy += dy2 * damping;
        
        // Apply viscosity
        point.vx *= viscosity / (viscosity + 1);
        point.vy *= viscosity / (viscosity + 1);
        
        // Update position
        point.x += point.vx;
        point.y += point.vy;
      }
      
      // Draw fluid shape
      ctx.fillStyle = 'rgba(30, 10, 60, 0.15)';
      ctx.strokeStyle = 'rgba(120, 80, 200, 0.2)';
      ctx.lineWidth = 2;
      
      ctx.beginPath();
      ctx.moveTo(points[0].x, points[0].y);
      
      for (let i = 1; i < numPoints; i++) {
        const p = points[i];
        const pPrev = points[i - 1];
        const cx = (pPrev.x + p.x) / 2;
        const cy = (pPrev.y + p.y) / 2;
        
        ctx.quadraticCurveTo(pPrev.x, pPrev.y, cx, cy);
      }
      
      const pFirst = points[0];
      const pLast = points[numPoints - 1];
      const cx = (pLast.x + pFirst.x) / 2;
      const cy = (pLast.y + pFirst.y) / 2;
      
      ctx.quadraticCurveTo(pLast.x, pLast.y, cx, cy);
      ctx.quadraticCurveTo(pFirst.x, pFirst.y, points[0].x, points[0].y);
      
      ctx.fill();
      ctx.stroke();
      
      // Draw indicators if enabled
      if (showIndicators) {
        ctx.fillStyle = 'red';
        for (let i = 0; i < numPoints; i++) {
          const p = points[i];
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      
      requestAnimationFrame(animate);
    };

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      setIsHoveringInteractive(true);
    };

    // Mouse leave handler
    const handleMouseLeave = () => {
      mouse.x = canvas.width / 2;
      mouse.y = canvas.height / 2;
      setIsHoveringInteractive(false);
    };

    // Initialize and start animation
    initPoints();
    animate();

    // Event listeners
    window.addEventListener('resize', handleResize);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Modern tech skills
  const skills = {
    "Frontend": {
      icon: <Code className="w-5 h-5" />,
      color: "from-purple-500 to-indigo-500",
      items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Three.js","GSAP",]
    },
    "Backend": {
      icon: <Server className="w-5 h-5" />,
      color: "from-blue-500 to-cyan-500",
      items: ["Node.js", "Express", "GraphQL", "PostgreSQL", "MongoDB", "Docker"]
    },
    "Design": {
      icon: <Palette className="w-5 h-5" />,
      color: "from-pink-500 to-rose-500",
      items: ["Figma", "UI/UX", "Prototyping", "Motion Design", "Design Systems", "Accessibility"]
    },
    "CMS": {
      icon: <Zap className="w-5 h-5" />,
      color: "from-amber-500 to-yellow-500",
      items: ["Wordpress", "Shopify","Wix","WebFlow","WooCommerce"]
    }
  };

  // Projects data
  const projects = [
    {
      title: "Product Share",
      description: "Advanced product discovery and sharing platform with integrated analytics, user feedback systems, and AI-powered recommendations for digital stores.",
      tags: ["Next.js", "AI", "Tailwind","Razorpay"],
      gradient: "from-purple-600 to-indigo-600"
    },
    {
      title: "Smart Home OS",
      description: "Centralized control system for IoT devices with real-time analytics",
      tags: ["React", "Node.js", "IoT"],
      gradient: "from-blue-600 to-cyan-600"
    },
    {
      title: "AR Commerce",
      description: "Augmented reality shopping experience for retail",
      tags: ["React Native", "ARKit", "3D"],
      gradient: "from-pink-600 to-rose-600"
    },
    {
      title: "Health Analytics",
      description: "Data visualization platform for healthcare providers",
      tags: ["D3.js", "TypeScript", "MongoDB"],
      gradient: "from-amber-600 to-yellow-600"
    }
  ];

  // Navigation items
  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "work", label: "Work" },
    { id: "contact", label: "Contact" }
  ];

  // Scroll to section
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  return (
    <div className="relative bg-gray-950 text-gray-100 min-h-screen overflow-hidden">
      {/* Fluid background animation */}
      <canvas 
        ref={canvasRef} 
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
      />
      
      {/* Subtle grid overlay */}
      <div className="fixed inset-0 opacity-5 [background-image:linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[length:24px_24px] pointer-events-none z-0" />
      
      {/* Main content */}
      <div className="relative z-10">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-6 py-3">
            <div className="flex justify-between items-center">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-2"
              >
                
                <span className="text-lg font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                  Praveen Prasad
                </span>
              </motion.div>
              
              <div className="hidden md:flex items-center gap-1">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    onMouseEnter={() => setIsHoveringInteractive(true)}
                    onMouseLeave={() => setIsHoveringInteractive(false)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      activeSection === item.id 
                        ? "text-purple-300 bg-gray-800/50" 
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
              
              <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                onClick={() => scrollToSection("contact")}
                onMouseEnter={() => setIsHoveringInteractive(true)}
                onMouseLeave={() => setIsHoveringInteractive(false)}
                className="px-4 py-2 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg text-sm font-medium hover:shadow-lg hover:shadow-purple-500/20 transition-all"
              >
                Contact Me
              </motion.button>
            </div>
          </div>
        </nav>
        
        {/* Hero section */}
        <section id="hero" className="min-h-screen flex items-center justify-center px-6 pt-20 pb-16">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <div className="relative w-32 h-32 mx-auto mb-8">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 p-1 animate-[spin_6s_linear_infinite]">
                  <div className="h-full w-full rounded-full bg-gray-950"></div>
                </div>
                <img
                  src="/praveen.jpeg"
                  alt="Praveen Prasad"
                  className="relative w-full h-full rounded-full object-cover border-4 border-gray-900"
                />
              </div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-4xl md:text-6xl font-bold mb-4"
              >
                <span className="bg-gradient-to-r from-purple-300 to-indigo-300 bg-clip-text text-transparent">
                  Praveen Prasad
                </span>
              </motion.h1>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-xl md:text-2xl text-gray-400 mb-6"
              >
                Software Developer & Entrepreneur
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-gray-500 max-w-2xl mx-auto text-lg"
              >
                Creating elegant solutions at the intersection of design and technology. 
                Focused on building intuitive, performant digital experiences.
              </motion.p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <button
                onClick={() => scrollToSection("work")}
                onMouseEnter={() => setIsHoveringInteractive(true)}
                onMouseLeave={() => setIsHoveringInteractive(false)}
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all"
              >
                View My Work
                <ArrowRight className="w-4 h-4" />
              </button>
              
              <a
                href="https://github.com/praveen-prasad2"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setIsHoveringInteractive(true)}
                onMouseLeave={() => setIsHoveringInteractive(false)}
                className="flex items-center gap-2 px-6 py-3 border border-gray-800 rounded-lg font-medium hover:bg-gray-900/50 transition-all"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
            </motion.div>
          </div>
        </section>
        
        {/* About section */}
        <section id="about" className="py-20 px-6 bg-gray-950/50 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                About <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">Me</span>
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto rounded-full" />
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold mb-6 text-purple-300">
                  Crafting Digital Experiences
                </h3>
                <p className="text-gray-400 mb-4">
                  I specialize in designing and building digital products that are both beautiful and functional. 
                  With a background spanning design and development, I bridge the gap between aesthetics and 
                  technical implementation.
                </p>
                <p className="text-gray-400 mb-4">
                  My approach combines user-centered design principles with modern web technologies to create 
                  experiences that are intuitive, accessible, and performant across all devices.
                </p>
                <p className="text-gray-400">
                  Currently focused on exploring the intersection of design and emerging technologies like 
                  augmented reality, machine learning, and Web3 applications.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="p-6 bg-gray-900/50 rounded-xl border border-gray-800">
                  <div className="flex items-center mb-4">
                    <MapPin className="w-5 h-5 text-purple-400 mr-3" />
                    <span className="text-gray-400">Based in Malappuram, Kerala</span>
                  </div>
                  <div className="flex items-center mb-4">
                    <Calendar className="w-5 h-5 text-indigo-400 mr-3" />
                    <span className="text-gray-400">2+ Years Experience</span>
                  </div>
                  <div className="flex items-center">
                    <Code className="w-5 h-5 text-blue-400 mr-3" />
                    <span className="text-gray-400">50+ Projects Completed</span>
                  </div>
                </div>
                
                <div className="p-6 bg-gradient-to-br from-purple-500/10 to-indigo-500/10 rounded-xl border border-purple-500/20">
                  <h4 className="font-semibold mb-4 text-purple-300">Development Philosophy</h4>
                  <ul className="space-y-2 text-gray-400">
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-purple-500 mr-3" />
                      Problem-First, Tech-Second
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-indigo-500 mr-3" />
                     Simple Code, Scalable Systems
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-blue-500 mr-3" />
                      Built for Performance and Results
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-cyan-500 mr-3" />
                     Product-Driven Engineering
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Skills section */}
        <section id="skills" className="py-20 px-6 bg-gray-900/50 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                My <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">Skills</span>
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto rounded-full" />
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {Object.entries(skills).map(([category, data], index) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.8 }}
                  viewport={{ once: true }}
                  onMouseEnter={() => setIsHoveringInteractive(true)}
                  onMouseLeave={() => setIsHoveringInteractive(false)}
                  className="group"
                >
                  <div className="h-full p-6 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-purple-500/30 transition-all">
                    <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${data.color} mb-4`}>
                      {data.icon}
                    </div>
                    
                    <h3 className="text-lg font-semibold mb-4">{category}</h3>
                    
                    <ul className="space-y-2">
                      {data.items.map((skill) => (
                        <li key={skill} className="flex items-center">
                          <ChevronRight className="w-4 h-4 text-purple-400 mr-2" />
                          <span className="text-gray-400">{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Work section */}
        <section id="work" className="py-20 px-6 bg-gray-950/50 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Selected <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">Work</span>
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto rounded-full" />
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.8 }}
                  viewport={{ once: true }}
                  onMouseEnter={() => setIsHoveringInteractive(true)}
                  onMouseLeave={() => setIsHoveringInteractive(false)}
                  className="group"
                >
                  <div className="h-full p-6 bg-gradient-to-br from-gray-900 to-gray-900/50 rounded-xl border border-gray-800 hover:border-purple-500/30 transition-all relative overflow-hidden">
                    <div className={`absolute -z-10 inset-0 opacity-10 group-hover:opacity-20 bg-gradient-to-br ${project.gradient} transition-opacity`} />
                    
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-gray-400 mb-4">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 bg-gray-800/50 rounded-full text-xs text-gray-400 border border-gray-700">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <button className="mt-6 flex items-center gap-2 text-sm text-purple-300 hover:text-purple-200 transition-colors">
                      View Case Study
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Contact section */}
        <section id="contact" className="py-20 px-6 bg-gray-900/50 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Let's <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">Connect</span>
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto rounded-full" />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-8"
            >
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-purple-300">Get In Touch</h3>
                <p className="text-gray-400">
                  Interested in working together or have a project in mind? 
                  I'm always open to discussing new opportunities and collaborations.
                </p>
                
                <div className="space-y-4">
                  <a
                    href="mailto:work.praveenprasad@gmail.com"
                    onMouseEnter={() => setIsHoveringInteractive(true)}
                    onMouseLeave={() => setIsHoveringInteractive(false)}
                    className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
                  >
                    <Mail className="w-5 h-5 text-purple-400" />
                    work.praveenprasad@gmail.com
                  </a>
                  <a
                    href="tel:+918589920409"
                    onMouseEnter={() => setIsHoveringInteractive(true)}
                    onMouseLeave={() => setIsHoveringInteractive(false)}
                    className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
                  >
                    <Phone className="w-5 h-5 text-purple-400" />
                    +91 8589920409
                  </a>
                  
                  
                  <div className="flex gap-4 pt-4">
                    {[
                      { icon: <Github className="w-5 h-5" />, url: "https://github.com/praveen-prasad2" },
                      { icon: <Linkedin className="w-5 h-5" />, url: "https://www.linkedin.com/in/praveen-prasad-14764b231/" },
                      { icon: <Twitter className="w-5 h-5" />, url: "https://x.com/praveen_prasaad" },
                      { icon: <Instagram className="w-5 h-5" />, url: "https://www.instagram.com/praveen_prasaad/" }
                   
                    ].map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        onMouseEnter={() => setIsHoveringInteractive(true)}
                        onMouseLeave={() => setIsHoveringInteractive(false)}
                        className="p-3 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-purple-500/30 hover:bg-gray-700/50 transition-all"
                      >
                        {social.icon}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
              
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent text-white placeholder-gray-500"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent text-white placeholder-gray-500"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent text-white placeholder-gray-500"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  onMouseEnter={() => setIsHoveringInteractive(true)}
                  onMouseLeave={() => setIsHoveringInteractive(false)}
                  className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </section>
        
        {/* Footer */}
        <footer className="py-8 px-6 border-t border-gray-800">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center gap-2 mb-4 md:mb-0">
                
                <span className="text-sm font-medium bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                  Praveen Prasad
                </span>
              </div>
              
              <p className="text-xs text-gray-500">
                © {new Date().getFullYear()} Praveen Prasad |  All rights reserved. 
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Portfolio;