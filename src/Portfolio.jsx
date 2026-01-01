import React, { useEffect, useRef, useState } from "react";
import {
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code2,
  Database,
  Server,
  Zap,
  Download,
  Phone,
  MapPin,
  Calendar,
  Award,
  Briefcase,
  GraduationCap,
} from "lucide-react";

const Portfolio = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const heroRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const cursorRef = useRef(null);
  const cursorDotRef = useRef(null);

  // Your Personal Information - UPDATE THESE
  const personalInfo = {
    name: "Waqas Shah",
    title: "Junior Full Stack Developer",
    email: "waqasshah9040@gmail.com",
    phone: "+92 321 8636730",
    location: "Lahore, Pakistan",
    github: "https://github.com/Waqas7281",
    linkedin:
      "https://linkedin.com/in/https://www.linkedin.com/in/waqas-ali-shah-76a69b22a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    image: "/port1.jpeg", // Replace with your image URL
  };

  const experience = [
    {
      title: "Senior Full Stack Developer",
      company: "Tech Company",
      period: "2025 - Present",
      description:
        "Leading development of scalable web applications using React, NestJS, and PostgreSQL",
    },
    {
      title: "Full Stack Developer",
      company: "Startup Inc",
      period: "2024 - 2025",
      description:
        "Built and maintained multiple client projects using MERN stack",
    },
    {
      title: "Frontend Developer",
      company: "Digital Agency",
      period: "2023 - 2024",
      description:
        "Created responsive and interactive user interfaces with React and GSAP",
    },
  ];

  const education = [
    {
      degree: "Bachelor of Computer Science",
      institution: "University South Asia",
      period: "2022 - 2026",
      description: "Specialized in Software Engineering and Web Technologies",
    },
  ];

  const certifications = [
    "AWS Certified Developer",
    "MongoDB Certified Developer",
    "Meta Frontend Developer Professional",
    "Advanced React & Redux",
  ];

  const skills = {
    frontend: [
      { name: "JavaScript", level: 90, icon: "🟨" },
      { name: "React.js", level: 90, icon: "⚛️" },
      { name: "TypeScript", level: 70, icon: "🔷" },
      { name: "GSAP", level: 85, icon: "🎬" },
      { name: "HTML/CSS", level: 95, icon: "🎨" },
    ],
    backend: [
      { name: "Node.js", level: 75, icon: "🟢" },
      { name: "NestJS", level: 70, icon: "🔴" },
      { name: "PostgreSQL", level: 75, icon: "🐘" },
      { name: "MongoDB", level: 80, icon: "🍃" },
      { name: "REST APIs", level: 85, icon: "🔌" },
    ],
  };

  const projects = [
    {
      title: "E-Commerce Platform",
      desc: "Full-stack e-commerce with Built Authentication and Location Fetching",
      tech: ["React", "Express", "PostgreSQL", "TypeScript"],
      color: "from-purple-500 to-pink-500",
      github: "#",
      live: "",
      features: ["REST API", "JWT Auth"],
    },
    {
     
      title: "Rapid Road Assist",
      desc: "Real-time roadside assistance app with Services",
      tech: ["React", "Node.js", "MongoDB"],
      color: "from-blue-500 to-cyan-500",
      github: "#",
      live: "https://rapidroadassist.vercel.app/",
      features: [
        "Real-time Messaging",
        "File Upload",
        "Group Chat",
        "Encryption",
      ],
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcWc65a3TPEOwtFfttiN6Jx6Uk1lx4gdFhTw&s",
      title: "Analytics Dashboard",
      desc: "Interactive data visualization with real-time updates and custom reports",
      tech: ["React", "GSAP", "Node.js"],
      color: "from-green-500 to-emerald-500",
      github: "#",
      live: "#",
      features: [
        "Data Visualization",
        "Real-time Updates",
        "Export Reports",
        "Custom Charts",
      ],
    },
    {
      
      title: "Task Management System",
      desc: "Collaborative project management with kanban boards and time tracking",
      tech: ["React", "NestJS", "PostgreSQL", "Redis", "WebSocket"],
      color: "from-orange-500 to-red-500",
      github: "#",
      live: "#",
      features: [
        "Kanban Board",
        "Time Tracking",
        "Team Collaboration",
        "Notifications",
      ],
    },
    {
    
      title: "Dehlize.com",
      desc: "Full-featured E-commerce platform with user accounts and payment integration",
      tech: ["React", "Node.js", "MongoDB"],
      color: "from-pink-500 to-rose-500",
      github: "#",
      live: "#",
      features: [
        "Social Features",
        "Image Upload",
        "Real-time Feed",
        "User Profiles",
      ],
    },
  ];

  const testimonials = [
    {
      name: "John Doe",
      role: "CEO, Tech Startup",
      content:
        "Exceptional developer! Delivered our project ahead of schedule with outstanding quality.",
      rating: 5,
    },
    {
      name: "Sarah Smith",
      role: "Project Manager, Digital Agency",
      content:
        "Great communication skills and technical expertise. A pleasure to work with!",
      rating: 5,
    },
    {
      name: "Mike Johnson",
      role: "CTO, E-commerce Company",
      content:
        "Built a scalable solution that handles thousands of users. Highly recommended!",
      rating: 5,
    },
  ];

  // Custom cursor effect
  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;

    const moveCursor = (e) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
      cursorDot.style.left = e.clientX + "px";
      cursorDot.style.top = e.clientY + "px";
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  // Hero animation
  useEffect(() => {
    // Floating letter animation
    const letters = document.querySelectorAll(".hero-letter");

    letters.forEach((letter, i) => {
      letter.style.animation = `float 3s ease-in-out ${i * 0.1}s infinite`;
    });

    // Parallax effect (DESKTOP ONLY)
    const handleScroll = () => {
      // ❌ Disable parallax on mobile
      if (window.innerWidth < 768) return;

      const scrolled = window.scrollY;
      const hero = heroRef.current;

      if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Skills animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const bars = entry.target.querySelectorAll(".skill-bar");
            bars.forEach((bar, i) => {
              setTimeout(() => {
                bar.style.width = bar.dataset.level + "%";
              }, i * 100);
            });
          }
        });
      },
      { threshold: 0.5 }
    );

    if (skillsRef.current) observer.observe(skillsRef.current);
    return () => observer.disconnect();
  }, []);

  // Projects stagger animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll(".project-card");
            cards.forEach((card, i) => {
              setTimeout(() => {
                card.style.opacity = "1";
                card.style.transform = "translateY(0) scale(1)";
              }, i * 150);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (projectsRef.current) observer.observe(projectsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white min-h-screen overflow-x-hidden">
      {/* Custom Cursor */}
      <div
        ref={cursorRef}
        className="fixed w-8 h-8 border-2 border-cyan-400 rounded-full pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 transition-all duration-100 hidden md:block"
      />
      <div
        ref={cursorDotRef}
        className="fixed w-2 h-2 bg-cyan-400 rounded-full pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 hidden md:block"
      />

      {/* Floating particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out ${
                Math.random() * 2
              }s infinite`,
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-lg z-40 border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              {"<Dev />"}
            </div>

            <div className="hidden md:flex space-x-8">
              {[
                "Home",
                "About",
                "Skills",
                "Experience",
                "Projects",
                "Testimonials",
                "Contact",
              ].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-cyan-400 transition-all duration-300 relative group"
                  onClick={() => setActiveSection(item.toLowerCase())}
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </div>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden"
            >
              {menuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-slate-800/95 backdrop-blur-lg">
            {[
              "Home",
              "About",
              "Skills",
              "Experience",
              "Projects",
              "Testimonials",
              "Contact",
            ].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block px-4 py-3 hover:bg-cyan-500/10 border-l-4 border-transparent hover:border-cyan-400 transition-all"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        ref={heroRef}
        className="min-h-screen flex items-center justify-center relative pt-16"
      >
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div className="order-2 md:order-1 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500 animate-pulse" />
              <div className="relative">
                <div className="w-100 h-100 md:w-80 md:h-80  rounded-full overflow-hidden border-4 border-cyan-400 shadow-2xl shadow-cyan-500/50 group-hover:scale-105 transition-transform duration-500">
                  <img
                    src={personalInfo.image}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover mt-[0px]"
                  />
                </div>
                {/* Floating badges */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-cyan-500 to-purple-500 p-3 rounded-full animate-bounce shadow-lg">
                  <Code2 className="w-6 h-6 text-white" />
                </div>
                <div
                  className="absolute -bottom-4 -left-4 bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-full animate-bounce shadow-lg"
                  style={{ animationDelay: "0.5s" }}
                >
                  <Zap className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          </div>

          {/* Right: Text Content */}
          <div className="order-1 md:order-2 text-center md:text-left z-10">
            <div className="mb-4">
              <span className="text-cyan-400 text-lg font-semibold">
                Hello, I'm
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              {personalInfo.name.split("").map((letter, i) => (
                <span
                  key={i}
                  className="hero-letter inline-block"
                  style={{
                    background:
                      "linear-gradient(45deg, #06b6d4, #a855f7, #06b6d4)",
                    backgroundSize: "200% 200%",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    animation: `gradient 3s ease infinite`,
                    animationDelay: `${i * 0.1}s`,
                  }}
                >
                  {letter === " " ? "\u00A0" : letter}
                </span>
              ))}
            </h1>

            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-purple-400">
              {personalInfo.title}
            </h2>

            <p className="text-lg text-slate-300 mb-4 flex items-center justify-center md:justify-start gap-2">
              <MapPin className="w-5 h-5 text-cyan-400" />
              {personalInfo.location}
            </p>

            <p className="text-xl text-cyan-300 mb-8">
              Specialized in building scalable web applications with modern
              technologies
            </p>

            <div className="flex gap-4 justify-center md:justify-start flex-wrap mb-6">
              <a
                href="#contact"
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full font-semibold hover:scale-110 transition-transform duration-300 shadow-lg shadow-cyan-500/50 flex items-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Hire Me
              </a>
              <button className="px-8 py-3 border-2 border-cyan-400 rounded-full font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center gap-2">
                <Download className="w-5 h-5" />
                Download CV
              </button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="text-center p-4 bg-slate-800/50 rounded-xl border border-cyan-500/20">
                <div className="text-3xl font-bold text-cyan-400">10+</div>
                <div className="text-sm text-slate-400">Projects</div>
              </div>
              <div className="text-center p-4 bg-slate-800/50 rounded-xl border border-purple-500/20">
                <div className="text-3xl font-bold text-purple-400">3+</div>
                <div className="text-sm text-slate-400">Years Exp</div>
              </div>
              <div className="text-center p-4 bg-slate-800/50 rounded-xl border border-pink-500/20">
                <div className="text-3xl font-bold text-pink-400">10+</div>
                <div className="text-sm text-slate-400">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-lg text-slate-300 leading-relaxed">
                I'm a passionate Full Stack Developer with expertise in building
                modern, scalable web applications. With a strong foundation in
                both frontend and backend technologies, I create seamless
                digital experiences that solve real-world problems.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                My journey in web development started with a curiosity about how
                websites work, and it has evolved into a deep passion for
                creating beautiful, functional, and user-friendly applications.
                I constantly learn and adapt to new technologies to deliver the
                best solutions.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="flex items-start gap-3">
                  <Mail className="w-6 h-6 text-cyan-400 mt-1" />
                  <div>
                    <div className="text-sm text-slate-400">Email</div>
                    <div className="text-slate-200">{personalInfo.email}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-6 h-6 text-purple-400 mt-1" />
                  <div>
                    <div className="text-sm text-slate-400">Phone</div>
                    <div className="text-slate-200">{personalInfo.phone}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-slate-800/50 backdrop-blur-lg p-6 rounded-2xl border border-cyan-500/20">
                <div className="flex items-center gap-3 mb-4">
                  <Award className="w-6 h-6 text-cyan-400" />
                  <h3 className="text-xl font-bold">Certifications</h3>
                </div>
                <ul className="space-y-3">
                  {certifications.map((cert, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-slate-300"
                    >
                      <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                      {cert}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-4">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-cyan-400 transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105"
                >
                  <Github className="w-6 h-6" />
                  GitHub
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-purple-400 transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105"
                >
                  <Linkedin className="w-6 h-6" />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience & Education Section */}
      <section id="experience" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Experience & Education
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Experience */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <Briefcase className="w-8 h-8 text-cyan-400" />
                <h3 className="text-3xl font-bold">Work Experience</h3>
              </div>
              <div className="space-y-6">
                {experience.map((exp, i) => (
                  <div
                    key={i}
                    className="relative pl-8 pb-8 border-l-2 border-cyan-500/30 hover:border-cyan-500 transition-all duration-300 group"
                  >
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-cyan-400 rounded-full group-hover:scale-150 transition-transform duration-300" />
                    <div className="bg-slate-800/50 backdrop-blur-lg p-6 rounded-xl border border-slate-700 group-hover:border-cyan-500/50 transition-all duration-300 group-hover:scale-105">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="text-xl font-bold text-cyan-400">
                          {exp.title}
                        </h4>
                        <span className="text-sm text-slate-400 flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-purple-400 font-semibold mb-3">
                        {exp.company}
                      </p>
                      <p className="text-slate-300">{exp.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <GraduationCap className="w-8 h-8 text-purple-400" />
                <h3 className="text-3xl font-bold">Education</h3>
              </div>
              <div className="space-y-6">
                {education.map((edu, i) => (
                  <div
                    key={i}
                    className="relative pl-8 pb-8 border-l-2 border-purple-500/30 hover:border-purple-500 transition-all duration-300 group"
                  >
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-purple-400 rounded-full group-hover:scale-150 transition-transform duration-300" />
                    <div className="bg-slate-800/50 backdrop-blur-lg p-6 rounded-xl border border-slate-700 group-hover:border-purple-500/50 transition-all duration-300 group-hover:scale-105">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="text-xl font-bold text-purple-400">
                          {edu.degree}
                        </h4>
                        <span className="text-sm text-slate-400 flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {edu.period}
                        </span>
                      </div>
                      <p className="text-cyan-400 font-semibold mb-3">
                        {edu.institution}
                      </p>
                      <p className="text-slate-300">{edu.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" ref={skillsRef} className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Frontend Skills */}
            <div className="bg-slate-800/50 backdrop-blur-lg p-8 rounded-2xl border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-3 mb-6">
                <Code2 className="w-8 h-8 text-cyan-400" />
                <h3 className="text-2xl font-bold text-cyan-400">Frontend</h3>
              </div>
              {skills.frontend.map((skill, i) => (
                <div key={i} className="mb-6">
                  <div className="flex justify-between mb-2">
                    <span className="flex items-center gap-2">
                      <span className="text-2xl">{skill.icon}</span>
                      {skill.name}
                    </span>
                    <span className="text-cyan-400">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                    <div
                      className="skill-bar h-full bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full transition-all duration-1000 ease-out"
                      data-level={skill.level}
                      style={{ width: "0%" }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Backend Skills */}
            <div className="bg-slate-800/50 backdrop-blur-lg p-8 rounded-2xl border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-3 mb-6">
                <Server className="w-8 h-8 text-purple-400" />
                <h3 className="text-2xl font-bold text-purple-400">Backend</h3>
              </div>
              {skills.backend.map((skill, i) => (
                <div key={i} className="mb-6">
                  <div className="flex justify-between mb-2">
                    <span className="flex items-center gap-2">
                      <span className="text-2xl">{skill.icon}</span>
                      {skill.name}
                    </span>
                    <span className="text-purple-400">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                    <div
                      className="skill-bar h-full bg-gradient-to-r from-purple-400 to-pink-500 rounded-full transition-all duration-1000 ease-out"
                      data-level={skill.level}
                      style={{ width: "0%" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        ref={projectsRef}
        className="py-20 px-4 bg-slate-900/50"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-center text-slate-400 mb-16 text-lg">
            Here are some of my recent works that showcase my skills and
            experience
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <div
                key={i}
                className="project-card bg-slate-800/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-slate-700 hover:border-cyan-500 transition-all duration-500 opacity-0 translate-y-20 scale-95 group cursor-pointer"
              >
                <div
                  className={`h-48 bg-gradient-to-br  flex items-center justify-center relative overflow-hidden`}
                >
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    onError={(e) => {
                      e.target.style.display = "none"; // Hide broken image
                      e.target.nextSibling.style.display = "flex"; // Show fallback icon
                    }}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 mb-4 text-sm">{project.desc}</p>

                  {/* Features */}
                  <div className="mb-4 space-y-1">
                    {project.features.map((feature, j) => (
                      <div
                        key={j}
                        className="flex items-center gap-2 text-xs text-slate-500"
                      >
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, j) => (
                      <span
                        key={j}
                        className="px-3 py-1 bg-slate-700/50 rounded-full text-xs text-cyan-400 border border-cyan-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4 pt-4 border-t border-slate-700">
                    <a
                      href={project.live}
                      className="flex-1 flex items-center justify-center gap-2 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg text-sm font-semibold hover:scale-105 transition-transform"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live
                    </a>
                    <a
                      href={project.github}
                      className="flex-1 flex items-center justify-center gap-2 py-2 border border-purple-400 rounded-lg text-sm font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Client Testimonials
          </h2>
          <p className="text-center text-slate-400 mb-16 text-lg">
            What my clients say about working with me
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <div
                key={i}
                className="bg-slate-800/50 backdrop-blur-lg p-6 rounded-2xl border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <span key={j} className="text-yellow-400 text-xl">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-slate-300 mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center text-xl font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-cyan-400">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-slate-400">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-center text-slate-400 mb-12 text-lg">
            Have a project in mind? Let's work together to bring your ideas to
            life!
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

              <div className="space-y-4">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-400">Email</div>
                    <div className="text-slate-200">{personalInfo.email}</div>
                  </div>
                </a>

                <a
                  href={`tel:${personalInfo.phone}`}
                  className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-purple-500 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-400">Phone</div>
                    <div className="text-slate-200">{personalInfo.phone}</div>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-xl border border-slate-700">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-400">Location</div>
                    <div className="text-slate-200">
                      {personalInfo.location}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 bg-slate-800/50 border border-slate-700 rounded-lg hover:border-cyan-400 hover:bg-cyan-400/10 transition-all"
                >
                  <Github className="w-5 h-5" />
                  GitHub
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 bg-slate-800/50 border border-slate-700 rounded-lg hover:border-purple-400 hover:bg-purple-400/10 transition-all"
                >
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <form
                className="space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  alert(
                    "Form submitted! (This is a demo - connect to your backend)"
                  );
                }}
              >
                <div>
                  <label className="block text-sm font-semibold mb-2 text-slate-300">
                    Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:border-cyan-400 focus:outline-none transition-colors text-white"
                    placeholder="Your Name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-slate-300">
                    Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:border-cyan-400 focus:outline-none transition-colors text-white"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-slate-300">
                    Message
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    rows="6"
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:border-cyan-400 focus:outline-none transition-colors text-white resize-none"
                    placeholder="Tell me about your project..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg font-semibold hover:scale-105 transition-transform duration-300 shadow-lg shadow-cyan-500/30"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-4">
                {"<Dev />"}
              </h3>
              <p className="text-slate-400">
                Building modern, scalable web applications with passion and
                precision.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4 text-cyan-400">
                Quick Links
              </h4>
              <div className="space-y-2">
                {["Home", "About", "Skills", "Projects", "Contact"].map(
                  (item) => (
                    <a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      className="block text-slate-400 hover:text-cyan-400 transition-colors"
                    >
                      {item}
                    </a>
                  )
                )}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4 text-purple-400">
                Connect
              </h4>
              <div className="flex gap-4">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-cyan-500 transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-purple-500 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-pink-500 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="text-center pt-8 border-t border-slate-800">
            <p className="text-slate-400">
              © {new Date().getFullYear()} {personalInfo.name}. Built with
              React, TailwindCSS & GSAP
            </p>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        * {
          cursor: none;
        }

        a, button {
          cursor: pointer;
        }

        @media (max-width: 768px) {
          * {
            cursor: auto;
          }
        }
      `}</style>
    </div>
  );
};

export default Portfolio;
