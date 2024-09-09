"use client"

import React from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import { RiGithubFill, RiLinkedinFill, RiTwitterFill, RiInstagramFill, RiWhatsappFill } from 'react-icons/ri';
import Link from 'next/link';
import toast from 'react-hot-toast';
import { FaReact, FaNodeJs, FaPython, FaDocker, FaAws, FaLaravel, FaAngular, FaJs, FaPhp, FaWordpress, FaFigma, FaGitAlt } from 'react-icons/fa';
import { SiNextdotjs, SiDjango, SiMongodb, SiPostgresql, SiFirebase, SiSupabase, SiMysql, SiKubernetes, SiJest, SiMocha, SiSelenium, SiVercel, SiNetlify, SiFlutter, SiTypescript } from 'react-icons/si';
import { useRouter } from 'next/navigation';

const skillsData = [
  { name: "React", icon: <FaReact /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "Angular", icon: <FaAngular /> },
  { name: "React Native", icon: <FaReact /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Django", icon: <SiDjango /> },
  { name: "Express.js", icon: <FaNodeJs /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "PostgreSQL", icon: <SiPostgresql /> },
  { name: "Supabase", icon: <SiSupabase /> },
  { name: "Firebase", icon: <SiFirebase /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "Docker", icon: <FaDocker /> },
  { name: "Kubernetes", icon: <SiKubernetes /> },
  { name: "AWS", icon: <FaAws /> },
  { name: "Figma", icon: <FaFigma /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "PHP", icon: <FaPhp /> },
  { name: "Python", icon: <FaPython /> },
  { name: "WordPress", icon: <FaWordpress /> },
  { name: "Git", icon: <FaGitAlt /> }
];

const Home = () => {

  const router = useRouter()

  const handleCopyEmail = () => {
    try {
      navigator.clipboard.writeText("hadhirasal22@gmail.com");
      toast.success("Email copied to clipboard", {
        duration: 4000,
        position: 'top-center',
        style: {
          background: 'linear-gradient(to right, #6e6e6e, #4e4e4e, #2e2e2e)',
          color: '#ffffff',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
          fontSize: '16px',
          display: 'flex',
          alignItems: 'center',
          border: '1px solid #4e4e4e', 
        },
      });
    } catch (error) {
      console.log("Error copying email:", error);
    }
  }

  return (
    <div className="mx-auto">
      <Head>
        <title>Praveen Prasad- Software Developer & Co-Founder of Duoph Technologies & Mail Motion</title>
        <meta name="description" content="Praveen Prasad is a skilled full-stack developer and the founder of Duoph Technologies, building amazing digital experiences." />
        <meta name="keywords" content="Praveen Prasad, full-stack developer, web developer, software engineer, React, Node.js, Next.js, Duoph Technologies" />
        <meta name="author" content="Praveen Prasad" />
        <link rel="canonical" href="https://praveenprasad.in/" />
        <meta property="og:title" content="Praveen Prasad - Full-Stack Developer & Founder of Duoph Technologies" />
        <meta property="og:description" content="Praveen Prasad is a skilled full-stack developer and the founder of Duoph Technologies, building amazing digital experiences." />
        {/* <meta property="og:image" content="/praveen.jpeg" /> */}
        <meta property="og:url" content="https://hadirazal.in/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Praveen Prasad - Full-Stack Developer & Founder of Duoph Technologies" />
        <meta name="twitter:description" content="Praveen Prasad is a skilled full-stack developer and the founder of Duoph Technologies, building amazing digital experiences." />
        <meta name="twitter:image" content="/praveen.jpeg" />
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Praveen Prasad",
            "jobTitle": "Full-Stack Developer",
            "email": "hadhirasal22@gmail.com",
            "image": "/hadi2.jpg",
            "url": "https://hadirazal.in",
            "sameAs": [
              "https://github.com/hadi-razal",
              "https://www.linkedin.com/in/hadi-razal-690b22228/",
              "https://twitter.com/Hadi_Razal",
              "https://www.instagram.com/hadi_razal/"
            ]
          }
          `}
        </script>
      </Head>

      <header className="flex flex-col items-center justify-center py-10 px-5 md:px-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="hero flex flex-col md:flex-row items-center justify-center"
        >
          <div className="image-container rounded-full mb-5 md:mb-0 md:mr-10 w-[290px] h-[290px] overflow-hidden flex items-center justify-center">
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              src="/praveen.jpeg"
              alt="Praveen Prasad - Full-Stack Developer"
              className="rounded-full w-full h-full object-cover"
            />
          </div>

          <div className="text-container text-center md:text-left">
            <motion.h1
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-4xl md:text-5xl font-bold text-gray-800"
            >
              Praveen Prasad
            </motion.h1>
            <motion.h2
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="text-2xl md:text-3xl text-gray-600 mt-2"
            >
              Full-Stack Developer & Founder of Duoph Technologies
            </motion.h2>
            <motion.h6
              onClick={handleCopyEmail}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.9 }}
              className="text-gray-600 mt-2 cursor-pointer"
            >
              praveenprasad2510@gmail.com
            </motion.h6>
          </div>
        </motion.div>



        <motion.button
          onClick={() => router.push("/aiChat")}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="relative inline-flex items-center justify-center px-6 py-3 font-medium text-white bg-gradient-to-r from-gray-500 via-gray-600 to-gray-700 border border-transparent rounded-lg overflow-hidden group shadow-lg hover:shadow-2xl transition-shadow duration-300 mt-5"
        >
          {/* Glowing effect */}
          <span className="absolute inset-0 bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 rounded-full opacity-50 transform scale-125 group-hover:scale-150 transition-transform duration-500 ease-in-out blur-sm group-hover:blur-md group-hover:shadow-2xl"></span>

          {/* Pulsing text */}
          <span className="relative z-10">
            <motion.span
              initial={{ scale: 1 }}
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
              className="relative text-lg"
            >
              Chat With AI
            </motion.span>
          </span>
        </motion.button>



      </header>

      <main className='flex flex-col items-center justify-center gap-3'>
        <section className="about px-3 md:px-10  w-full">
          <motion.h3
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-gray-800"
          >
            About Me
          </motion.h3>
          <motion.p
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="text-lg text-gray-600 mt-5"
          >
            I am a passionate Full-Stack developer and the co-founder of Duoph Technologies, a company based in Kochi, Kerala that provides services worldwide. My expertise spans modern web technologies, including frontend frameworks like React, Next.js, Angular, and React Native, and backend development with Node.js, Django, and Express.js. I excel in designing intuitive user interfaces and optimizing user experiences, leveraging my skills in UI/UX design and proficiency in Figma and Photoshop.

            Additionally, I specialize in database management using MongoDB, PostgreSQL, Supabase, Firebase, and MySQL, and I am proficient in DevOps practices with Docker, Kubernetes, and AWS. I ensure robust application performance through rigorous testing with Jest, Mocha, and Selenium, and streamline deployment using platforms like Vercel and Netlify.

            Driven by a passion for innovation and a commitment to excellence, I thrive in collaborative environments where I
            can leverage my skills to build amazing digital experiences. As the founder of Duoph Technologies, I lead my team to deliver cutting-edge software solutions, ensuring that our clients receive top-notch service and outstanding results.
          </motion.p>
        </section>

        <section className="skills px-3 md:px-10  w-full py-5">
          <motion.h3
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-gray-800"
          >
            Skills
          </motion.h3>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="skills-grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 mt-5"
          >
            {skillsData.map((skill, index) => (
              <div key={index} className="skill-item flex flex-col items-center">
                <div className="skill-icon text-4xl text-blue-500 mb-2">
                  {skill.icon}
                </div>
                <div className="skill-name text-gray-700 font-medium">
                  {skill.name}
                </div>
              </div>
            ))}
          </motion.div>
        </section>

        <section className="px-3 md:px-10 w-full pb-10">
          <motion.h3
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-gray-800"
          >
            My SaaS
          </motion.h3>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className=" px-4 py-4 rounded-lg shadow-lg"
          >
            <div className="flex flex-col md:flex-row items-center">
              {/* <div className="image-container rounded-full mb-4 md:mb-0 md:mr-6 w-[100px] h-[100px] overflow-hidden flex items-center justify-center">
                <motion.img
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                  src="/image.jpg"
                  alt="Praveen Prasad - Full-Stack Developer"
                  className="rounded-full w-full h-full object-cover"
                />
              </div> */}
              <div>
                <h4 className="text-2xl font-bold text-gray-800">Mail Motion</h4>
                <p className="text-gray-600 mt-1">
                  Mail Motion is an advanced AI-powered marketing tool designed specifically for business owners. It simplifies the process of promoting your products or services online by leveraging cutting-edge technology to automate and optimize your marketing efforts. With Mail Motion, you can easily create targeted email campaigns, generate compelling content, and analyze performance metrics—all from a single, intuitive platform.
                </p>
                <p className="text-gray-600 mt-2">
                  Whether you are a small business looking to expand your reach or a larger enterprise aiming to streamline your marketing strategy, Mail Motion offers a cost-effective solution to enhance your online presence. Its user-friendly interface and intelligent algorithms ensure that your marketing efforts are both efficient and effective, helping you achieve better results with minimal effort.
                </p>
              </div>

            </div>
          </motion.div>

        </section>


      </main>

      <footer className="px-5 md:px-20 py-10 pb-10 bg-gray-800 text-white">
        <div className="footer-content flex flex-col md:flex-row justify-between items-center">
          <div className="social-links flex space-x-4 mb-5 md:mb-0">
            <Link target="_blank" href="https://github.com/praveen-prasad2">
              <p className="text-2xl"><RiGithubFill /></p>
            </Link>
            <Link target="_blank" href="https://www.linkedin.com/in/praveen-prasad-14764b231/">
              <p className="text-2xl"><RiLinkedinFill /></p>
            </Link>
            <Link target="_blank" href="https://x.com/uglymallu">
              <p className="text-2xl"><RiTwitterFill /></p>
            </Link>
            <Link target="_blank" href="https://www.instagram.com/praveen_prasaad">
              <p className="text-2xl"><RiInstagramFill /></p>
            </Link>
            <Link target="_blank" href="https://wa.me/918589920409">
              <p className="text-2xl"><RiWhatsappFill /></p>
            </Link>
          </div>
          <div className="footer-text text-center md:text-left">
            <p>&copy; 2024 Praveen Prasad. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;