import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Mail, Github, Linkedin, Download, Menu, X, ExternalLink, Code, Rocket, Award, ChevronDown, Twitter, BookOpen, Moon, Sun } from "lucide-react";
import './App.css'
export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [darkMode, setDarkMode] = useState(true);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  const projects = [
    {
      title: "Blockchain Document Verifier",
      desc: "A Vite + React app that hashes documents and stores verification metadata on a private chain. Features real-time verification status and IPFS integration.",
      tech: ["React", "Vite", "Web3", "IPFS", "Solidity"],
      link: "https://github.com/parthpatel16/fakeChain",
      img: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=1400&q=80",
      featured: true,
    },
    {
      title: "CyberGuard AI",
      desc: "Hackathon-winning cyber-safety assistant that inspects URLs, emails, and files. Uses ML models to detect phishing attempts and malware.",
      tech: ["Python", "FastAPI", "React", "TensorFlow", "ML"],
      link: "https://github.com/parthpatel16/CyberBot",
      img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1400&q=80",
      featured: true,
    },
    {
      title: "AttendancePro",
      desc: "Real-time attendance management system with CSV import/export, analytics dashboard, and automated notifications.",
      tech: ["React", "Tailwind", "Node.js", "MongoDB"],
      link: "https://github.com/parthpatel16",
      img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=80",
    },
    {
      title: "E-Commerce Platform",
      desc: "Full-stack MERN e-commerce solution with payment integration, inventory management, and admin dashboard.",
      tech: ["React", "Express", "MongoDB", "Stripe"],
      link: "",
      img: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=1400&q=80",
    },
  ];

  const allSkills = [
    "React", "JavaScript", "TypeScript", "Tailwind CSS", "Next.js", "Framer Motion",
    "Node.js", "Express", "MongoDB",  "REST APIs", "GraphQL",
   "Solidity", "Smart Contracts", 
    "Git", "Docker", "AWS", "Vercel", "Netlify", "Figma", "Python", "FastAPI"
  ];

  const achievements = [
    { icon: Award, title: "Hackathon Winner", desc: "1st Place - CyberGuard AI" },
    { icon: Code, title: "Open Source", desc: "2 contributions" },
    { icon: Rocket, title: "Projects Deployed", desc: "4+ live applications" },
  ];

  const experience = [
    {
      title: "Full-Stack Blockchain Engineer",
      company: "Freelance",
      period: "Current",
      description: "Building smart wallet infrastructure and blockchain applications",
      tech: ["React.js", "Node.js", "Docker", "Next.js"]
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "projects", "skills", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Message sent!\n\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`);
    setFormData({ name: "", email: "", message: "" });
  };

  // Comprehensive theme configuration
  const themeConfig = darkMode ? {
    // Dark Theme
    mainBg: "bg-slate-950",
    sectionBg: "bg-slate-900/30",
    cardBg: "bg-slate-900/50",
    solidCard: "bg-slate-900",
    headerBg: "bg-slate-900/80",
    
    // Text colors
    textPrimary: "text-slate-100",
    textSecondary: "text-slate-400",
    textMuted: "text-slate-500",
    
    // Borders
    border: "border-slate-800",
    borderHover: "hover:border-violet-500/50",
    
    // Buttons
    primaryBtn: "bg-gradient-to-r from-violet-600 to-purple-600",
    primaryBtnHover: "hover:from-violet-700 hover:to-purple-700",
    primaryBtnText: "text-white",
    
    secondaryBtn: "bg-slate-800 border border-slate-700",
    secondaryBtnHover: "hover:bg-slate-700 hover:border-slate-600",
    secondaryBtnText: "text-slate-100",
    
    // Input fields
    inputBg: "bg-slate-800",
    inputBorder: "border-slate-700",
    inputFocus: "focus:border-violet-500",
    inputText: "text-slate-100",
    inputPlaceholder: "placeholder:text-slate-500",
    
    // Accent colors
    accent: "text-violet-500",
    accentHover: "hover:text-violet-400",
    
    // Shadows
    shadow: "shadow-lg shadow-slate-950/50",
    shadowMd: "shadow-md shadow-slate-900/50",
    
    // Special effects
    gradient: "bg-gradient-to-t from-slate-950 via-transparent to-transparent",
    gridBg: "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
    skillFadeLeft: "bg-gradient-to-r from-slate-900/30 to-transparent",
    skillFadeRight: "bg-gradient-to-l from-slate-900/30 to-transparent"
  } : {
    // Light Theme
    mainBg: "bg-white",
    sectionBg: "bg-slate-50",
    cardBg: "bg-white",
    solidCard: "bg-white",
    headerBg: "bg-white/90",
    
    // Text colors
    textPrimary: "text-slate-900",
    textSecondary: "text-slate-600",
    textMuted: "text-slate-500",
    
    // Borders
    border: "border-slate-200",
    borderHover: "hover:border-violet-500/50",
    
    // Buttons
    primaryBtn: "bg-gradient-to-r from-violet-600 to-purple-600",
    primaryBtnHover: "hover:from-violet-700 hover:to-purple-700",
    primaryBtnText: "text-white",
    
    secondaryBtn: "bg-slate-900 border border-slate-800",
    secondaryBtnHover: "hover:bg-slate-800 hover:border-slate-700",
    secondaryBtnText: "text-white",
    
    // Input fields
    inputBg: "bg-slate-50",
    inputBorder: "border-slate-300",
    inputFocus: "focus:border-violet-500",
    inputText: "text-slate-900",
    inputPlaceholder: "placeholder:text-slate-400",
    
    // Accent colors
    accent: "text-violet-600",
    accentHover: "hover:text-violet-700",
    
    // Shadows
    shadow: "shadow-lg shadow-slate-200/50",
    shadowMd: "shadow-md shadow-slate-200/30",
    
    // Special effects
    gradient: "bg-gradient-to-t from-white via-transparent to-transparent",
    gridBg: "linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)",
    skillFadeLeft: "bg-gradient-to-r from-slate-50 to-transparent",
    skillFadeRight: "bg-gradient-to-l from-slate-50 to-transparent"
  };

  const theme = themeConfig;

  return (
    <div className={`min-h-screen ${theme.mainBg} ${theme.textPrimary} transition-colors duration-300`}>
      {/* Grid Background */}
      <div className="fixed inset-0 pointer-events-none opacity-40" style={{
        backgroundImage: theme.gridBg,
        backgroundSize: '50px 50px'
      }} />

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500 origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-40 ${theme.headerBg} backdrop-blur-md border-b ${theme.border}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <img 
              src="./parth photo.jpg" 
              alt="Profile" 
              className="w-10 h-10 rounded-xl object-cover ring-2 ring-violet-500/20"
            />
            <div>
              <h1 className={`text-base sm:text-lg font-bold ${theme.textPrimary}`}>Parth</h1>
              <p className={`text-xs ${theme.textSecondary}`}>Full-Stack Engineer</p>
            </div>
          </motion.div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-6 lg:gap-8 text-sm items-center">
            {["home", "projects", "skills", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`capitalize font-medium transition-all ${
                  activeSection === item 
                    ? "text-violet-600" 
                    : `${theme.textSecondary} hover:text-violet-600`
                }`}
              >
                {item}
              </button>
            ))}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2.5 rounded-lg ${darkMode ? 'bg-slate-800 hover:bg-slate-700 text-slate-300' : 'bg-slate-100 hover:bg-slate-200 text-slate-700'} transition-all`}
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <a
              href="./Parth Resume.pdf"
              className="px-4 py-2.5 rounded-lg bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 transition-all flex items-center gap-2 text-white font-medium shadow-md shadow-violet-500/20"
            >
              <Download size={16} /> Resume
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 ${theme.textPrimary} hover:bg-violet-500/10 rounded-lg transition-all`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`md:hidden ${theme.solidCard} border-t ${theme.border} px-6 py-4 shadow-lg`}
          >
            <nav className="flex flex-col gap-4">
              {["home", "projects", "skills", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`text-left capitalize font-medium py-2 px-3 rounded-lg transition-all ${
                    activeSection === item
                      ? "text-violet-600 bg-violet-500/10"
                      : `${theme.textSecondary} hover:text-violet-600 hover:bg-violet-500/5`
                  }`}
                >
                  {item}
                </button>
              ))}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="text-left flex items-center gap-3 py-2 px-3 rounded-lg text-violet-600 hover:bg-violet-500/10 transition-all font-medium"
              >
                {darkMode ? <Sun size={18} /> : <Moon size={18} />} Toggle Theme
              </button>
              <a 
                href="./Parth Resume.pdf" 
                className="flex items-center gap-3 py-2 px-3 rounded-lg bg-gradient-to-r from-violet-600 to-purple-600 text-white hover:from-violet-700 hover:to-purple-700 transition-all font-medium shadow-md"
              >
                <Download size={18} /> Download Resume
              </a>
            </nav>
          </motion.div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-2"
              >
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className={`text-sm ${theme.textSecondary}`}>Available for opportunities</span>
              </motion.div>

              <div>
                <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-bold ${theme.textPrimary} mb-4`}>
                  Hi, I'm <span className="bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500 bg-clip-text text-transparent">Parth</span>
                </h2>
                <p className={`text-lg sm:text-xl ${theme.textSecondary} mb-2`}>20, Parth | Full Stack Engineer</p>
              </div>

              <p className={`text-base sm:text-lg ${theme.textSecondary} leading-relaxed`}>
                I’m a MERN Stack Full Stack Developer who builds end-to-end applications with modern UI, secure APIs, and optimized databases.
                I focus on writing clean code, reusable components, and scalable backend services.
                I deliver powerful full-stack apps with real-world performance and usability.
              </p>

              <div className="flex flex-wrap gap-4 items-center">
                <button
                  onClick={() => scrollToSection("projects")}
                  className={`group px-6 py-3 rounded-lg ${theme.primaryBtn} ${theme.primaryBtnHover} transition-all flex items-center gap-2 ${theme.primaryBtnText} font-semibold ${theme.shadowMd}`}
                >
                  View My Work
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className={`px-6 py-3 rounded-lg ${theme.secondaryBtn} ${theme.secondaryBtnHover} ${theme.secondaryBtnText} transition-all font-semibold`}
                >
                  Get in Touch
                </button>
              </div>

              <div className="flex items-center gap-4 pt-4">
                <a
                  href="https://x.com/parthp16625"
                  className={`p-3 rounded-lg ${theme.inputBg} ${theme.accentHover} transition-all border ${theme.border}`}
                  aria-label="Twitter"
                >
                  <Twitter size={20} />
                </a>
                <a
                  href="https://github.com/parthpatel16"
                  className={`p-3 rounded-lg ${theme.inputBg} ${theme.accentHover} transition-all border ${theme.border}`}
                  aria-label="Github"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/parthpatel-ld16"
                  className={`p-3 rounded-lg ${theme.inputBg} ${theme.accentHover} transition-all border ${theme.border}`}
                  aria-label="LinkedIn"
                >
                  <Linkedin  size={20} />
                </a>
              </div>
            </motion.div>

            <motion.div
              style={{ opacity, scale }}
              className="relative"
            >
              <div className={`relative rounded-2xl overflow-hidden ${theme.shadow} border ${theme.border}`}>
                <img
                  src="parth photo.jpg" 
                  alt="Profile"
                  className="w-full h-[400px] sm:h-[500px] object-cover"
                />
                <div className={`absolute inset-0 ${theme.gradient}`} />
              </div>

              {/* Floating Stats */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className={`absolute -left-4 top-1/4 ${theme.cardBg} backdrop-blur-md rounded-xl p-4 border ${theme.border}`}
              >
                <p className="text-3xl font-bold text-violet-500">15+</p>
                <p className={`text-sm ${theme.textSecondary}`}>Projects</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
                className={`absolute -right-4 bottom-1/4 ${theme.cardBg} backdrop-blur-md rounded-xl p-4 border ${theme.border}`}
              >
                <p className="text-3xl font-bold text-violet-500">2+</p>
                <p className={`text-sm ${theme.textSecondary}`}>Years Exp</p>
              </motion.div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block"
          >
            <ChevronDown size={32} className={theme.textMuted} />
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section className={`py-12 sm:py-20 px-4 sm:px-6 lg:px-8 ${theme.sectionBg}`}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h3 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent mb-4">Experience</h3>
            <p className={`${theme.textSecondary} text-base sm:text-lg`}>Here's a timeline of my professional journey, showcasing my roles and contributions in blockchain and full-stack development.</p>
          </motion.div>

          <div className="space-y-6">
            {experience.map((exp, i) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`p-6 rounded-xl ${theme.cardBg} border ${theme.border} ${theme.borderHover} transition-all ${theme.shadowMd}`}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-violet-500/10 border border-violet-500/20">
                    <Code size={24} className="text-violet-500" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h4 className={`text-xl font-bold ${theme.textPrimary}`}>{exp.title}</h4>
                      <span className={`text-sm ${theme.textSecondary}`}>{exp.company}</span>
                    </div>
                    <p className={`text-sm ${theme.textSecondary} mb-3`}>{exp.period}</p>
                    <p className={`${theme.textSecondary} mb-4`}>{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((tech) => (
                        <span key={tech} className={`px-3 py-1 text-xs rounded-full ${theme.inputBg} ${theme.textSecondary} border ${theme.border}`}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {achievements.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`p-6 rounded-xl ${theme.solidCard} border ${theme.border} ${theme.borderHover} transition-all ${theme.shadowMd}`}
              >
                <item.icon size={32} className="text-violet-500 mb-4" />
                <h3 className={`text-xl font-bold ${theme.textPrimary} mb-2`}>{item.title}</h3>
                <p className={theme.textSecondary}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-12 sm:py-20 px-4 sm:px-6 lg:px-8 ${theme.sectionBg}`}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h3 className={`text-3xl sm:text-4xl font-bold ${theme.textPrimary} mb-4`}>Featured Projects</h3>
            <p className={`${theme.textSecondary} text-base sm:text-lg`}>Building innovative solutions that make a difference</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            {projects.map((project, i) => (
              <motion.a
                key={project.title}
                href={project.link}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className={`group relative rounded-2xl overflow-hidden ${theme.cardBg} border ${theme.border} ${theme.borderHover} transition-all ${theme.shadow}`}
              >
                <div className="relative h-48 sm:h-64 overflow-hidden">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 ${theme.gradient}`} />
                  {project.featured && (
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-violet-500 text-xs font-bold text-white">
                      Featured
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className={`text-xl sm:text-2xl font-bold ${theme.textPrimary} group-hover:text-violet-500 transition-colors`}>
                      {project.title}
                    </h4>
                    <ExternalLink size={20} className={`${theme.textSecondary} group-hover:text-violet-500 transition-colors`} />
                  </div>

                  <p className={`${theme.textSecondary} mb-4 text-sm sm:text-base`}>{project.desc}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className={`px-3 py-1 text-xs rounded-full ${theme.inputBg} ${theme.textSecondary} border ${theme.border}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section with Animated Scrolling Bar */}
      <section id="skills" className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent mb-4">Skills & Technologies</h3>
            <p className={`${theme.textSecondary} text-base sm:text-lg`}>Tools I use to bring ideas to life</p>
          </motion.div>

          {/* Animated Horizontal Scrolling Skills */}
          <div className="relative mb-12">
            <div className="flex overflow-hidden">
              <motion.div
                className="flex gap-4 py-8"
                animate={{
                  x: [0, -1920],
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 40,
                    ease: "linear",
                  },
                }}
              >
                {[...allSkills, ...allSkills].map((skill, index) => (
                  <div
                    key={index}
                    className={`px-6 py-3 rounded-full ${theme.solidCard} border ${theme.border} whitespace-nowrap text-sm font-medium ${theme.textPrimary} hover:border-violet-500 transition-all flex-shrink-0 ${theme.shadowMd}`}
                  >
                    {skill}
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-6 sm:gap-8"
          >
            <div className={`p-6 rounded-xl ${theme.solidCard} border ${theme.border} ${theme.shadowMd}`}>
              <h4 className={`text-xl font-bold ${theme.textPrimary} mb-4`}>Experience</h4>
              <ul className={`space-y-3 ${theme.textSecondary} text-sm sm:text-base`}>
                <li>• 2+ years building scalable web applications</li>
                <li>• Won multiple hackathons including CyberGuard AI</li>
                <li>• Contributed to 10+ open-source projects</li>
                <li>• Deployed 15+ production applications</li>
              </ul>
            </div>

            <div className={`p-6 rounded-xl ${theme.solidCard} border ${theme.border} ${theme.shadowMd}`}>
              <h4 className={`text-xl font-bold ${theme.textPrimary} mb-4`}>Education</h4>
              <p className={`text-base sm:text-lg font-semibold ${theme.textPrimary} mb-2`}>B.Tech in Computer Science</p>
              <p className={`${theme.textSecondary} mb-3`}>Expected 2027</p>
              <p className={`${theme.textSecondary} text-sm sm:text-base`}>
                Relevant Coursework: Data Structures, Operating Systems, Computer Networks, 
                Database Management, Web Development
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-12 sm:py-20 px-4 sm:px-6 lg:px-8 ${theme.sectionBg}`}>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className={`text-3xl sm:text-4xl font-bold ${theme.textPrimary} mb-4`}>Let's Work Together</h3>
            <p className={`${theme.textSecondary} text-base sm:text-lg`}>Have a project in mind? Let's make it happen</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`p-6 sm:p-8 rounded-2xl ${theme.cardBg} border ${theme.border} ${theme.shadow}`}
            >
              <h4 className={`text-xl sm:text-2xl font-bold ${theme.textPrimary} mb-6`}>Send a Message</h4>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={`w-full px-4 py-3 rounded-lg ${theme.inputBg} border ${theme.inputBorder} ${theme.inputFocus} focus:outline-none transition-all ${theme.inputText} ${theme.inputPlaceholder}`}
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={`w-full px-4 py-3 rounded-lg ${theme.inputBg} border ${theme.inputBorder} ${theme.inputFocus} focus:outline-none transition-all ${theme.inputText} ${theme.inputPlaceholder}`}
                />
                <textarea
                  rows={5}
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={`w-full px-4 py-3 rounded-lg ${theme.inputBg} border ${theme.inputBorder} ${theme.inputFocus} focus:outline-none transition-all resize-none ${theme.inputText} ${theme.inputPlaceholder}`}
                />
                <button
                  onClick={handleSubmit}
                  className={`w-full px-6 py-3 rounded-lg ${theme.primaryBtn} ${theme.primaryBtnHover} transition-all flex items-center justify-center gap-2 font-semibold ${theme.primaryBtnText} ${theme.shadowMd}`}
                >
                  Send Message
                  <ArrowRight size={18} />
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className={`p-6 rounded-xl ${theme.cardBg} border ${theme.border} ${theme.shadowMd}`}>
                <Mail className="text-violet-500 mb-3" size={24} />
                <p className={`text-sm ${theme.textSecondary} mb-1`}>Email</p>
                <a href="mailto:parthp16625@gmail.com" className={`text-base sm:text-lg font-semibold ${theme.textPrimary} hover:text-violet-500 transition-colors`}>
                  parthp16625@gmail.com
                </a>
              </div>

              <div className={`p-6 rounded-xl ${theme.cardBg} border ${theme.border} ${theme.shadowMd}`}>
                <div className="text-violet-500 mb-3 text-2xl">📍</div>
                <p className={`text-sm ${theme.textSecondary} mb-1`}>Location</p>
                <p className={`text-base sm:text-lg font-semibold ${theme.textPrimary}`}>Ahmedabad, India</p>
              </div>

              <div className={`p-6 rounded-xl ${theme.cardBg} border ${theme.border} ${theme.shadowMd}`}>
                <Rocket className="text-violet-500 mb-3" size={24} />
                <p className={`text-sm ${theme.textSecondary} mb-1`}>Availability</p>
                <p className={`text-base sm:text-lg font-semibold ${theme.textPrimary}`}>Open for Internships & Freelance</p>
                <p className={`text-sm ${theme.textSecondary} mt-2`}>Available from December 2025</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 border-t ${theme.border} px-4 sm:px-6 lg:px-8`}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className={`${theme.textSecondary} text-sm text-center sm:text-left`}>
              © {new Date().getFullYear()} Parth. Built with React + Tailwind + Framer Motion
            </p>
            <div className="flex items-center gap-4">
              <a href="https://x.com/parthp16625" className={`${theme.textSecondary} hover:text-violet-500 transition-colors`}>
                <Twitter size={20} />
              </a>
              <a href="https://github.com/parthpatel16" className={`${theme.textSecondary} hover:text-violet-500 transition-colors`}>
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/parthpatel-ld16" className={`${theme.textSecondary} hover:text-violet-500 transition-colors`}>
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}