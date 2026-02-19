
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  ExternalLink, 
  ChevronRight, 
  Code, 
  Database, 
  Terminal, 
  Cpu,
  Trophy,
  ArrowRight,
  Menu,
  X,
  Download
} from 'lucide-react';
import { portfolioData, Project } from './portfolioData';

// --- Sub-components ---

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1.5 bg-brand-orange z-[100] origin-left"
      style={{ scaleX }}
    />
  );
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ['about', 'skills', 'projects', 'achievements', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      const offset = 100;
      window.scrollTo({
        top: element.offsetTop - offset,
        behavior: 'smooth'
      });
      setMobileMenuOpen(false);
    } else if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-700 ${isScrolled ? 'bg-brand-bg/95 backdrop-blur-3xl border-b border-brand-border/60 py-3 md:py-4' : 'bg-transparent py-6 md:py-10'}`}>
      <div className="max-w-7xl mx-auto px-5 md:px-10 flex justify-between items-center">
        <a 
          href="#" 
          onClick={(e) => scrollToSection(e, '#')}
          className="text-2xl md:text-3xl font-black tracking-tighter text-brand-text"
        >
          DK<span className="text-brand-orange">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          <div className="flex gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`relative text-[9px] md:text-[10px] font-black tracking-[0.3em] uppercase transition-colors py-2 whitespace-nowrap ${activeSection === link.href.replace('#', '') ? 'text-brand-orange' : 'text-brand-muted hover:text-brand-text'}`}
              >
                {link.name}
                {activeSection === link.href.replace('#', '') && (
                  <motion.div 
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brand-orange rounded-full"
                  />
                )}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, '#contact')}
            className="px-6 md:px-8 py-2 md:py-3 bg-brand-orange text-white text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] rounded-xl hover:bg-brand-hover hover:shadow-2xl hover:shadow-brand-orange/40 transition-all duration-500 transform hover:-translate-y-1 whitespace-nowrap"
          >
            Connect
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-brand-text hover:bg-brand-surface rounded-2xl transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed top-[80px] left-0 w-full bg-brand-surface border-b border-brand-border shadow-2xl overflow-hidden max-h-[calc(100vh-80px)]"
          >
            <div className="flex flex-col p-6 space-y-5 overflow-y-auto max-h-[calc(100vh-120px)]">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className={`text-base md:text-lg font-black uppercase tracking-wider transition-all duration-300 ${activeSection === link.href.replace('#', '') ? 'text-brand-orange translate-x-2' : 'text-brand-text hover:text-brand-orange hover:translate-x-1'}`}
                  onClick={(e) => scrollToSection(e, link.href)}
                  whileHover={{ x: 8 }}
                >
                  {link.name}
                </motion.a>
              ))}
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, '#contact')}
                className="mt-4 px-6 py-3 bg-brand-orange text-white text-sm font-black uppercase tracking-[0.15em] rounded-xl hover:bg-brand-hover transition-all duration-300 text-center"
              >
                Connect
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const SectionHeading: React.FC<{ children?: React.ReactNode; subtitle?: string }> = ({ children, subtitle }) => (
  <div className="mb-24">
    <motion.h2 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-4xl md:text-6xl font-black tracking-tighter text-brand-text mb-8"
    >
      {children}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-brand-muted max-w-3xl text-base md:text-lg leading-relaxed font-medium"
      >
        {subtitle}
      </motion.p>
    )}
    <motion.div 
      initial={{ width: 0 }}
      whileInView={{ width: '120px' }}
      viewport={{ once: true }}
      className="h-2 bg-brand-orange mt-12 rounded-full shadow-lg shadow-brand-orange/30"
    />
  </div>
);

const ProjectCard: React.FC<{ project: Project, index: number }> = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay: index * 0.15 }}
      className="group relative bg-brand-card border border-brand-border rounded-[2.5rem] overflow-hidden hover:border-brand-orange/60 transition-all duration-700 hover:-translate-y-3 flex flex-col shadow-2xl"
    >
      <div className="p-10 md:p-14 flex-1">
        <div className="flex flex-wrap gap-3 mb-10">
          {project.tech.map(t => (
            <span key={t} className="text-[10px] uppercase tracking-[0.2em] px-5 py-2 bg-brand-bg text-brand-muted border border-brand-border rounded-full font-black">
              {t}
            </span>
          ))}
        </div>
        
        <h3 className="text-2xl font-black text-brand-text mb-6 group-hover:text-brand-orange transition-colors tracking-tight">
          {project.title}
        </h3>
        
        <p className="text-brand-text/80 text-base md:text-lg mb-10 leading-relaxed italic border-l-4 border-brand-orange pl-6 font-medium">
          "{project.impactLine}"
        </p>

        <div className="space-y-8">
          <div>
            <h4 className="text-[10px] font-black text-brand-orange uppercase tracking-[0.3em] mb-3">Context</h4>
            <p className="text-brand-muted text-sm md:text-base leading-relaxed">{project.problem}</p>
          </div>
          <div>
            <h4 className="text-[10px] font-black text-brand-orange uppercase tracking-[0.3em] mb-3">Architecture</h4>
            <p className="text-brand-muted text-sm md:text-base leading-relaxed">{project.solution}</p>
          </div>
          <div>
            <h4 className="text-[10px] font-black text-brand-orange uppercase tracking-[0.3em] mb-3">Outcome</h4>
            <p className="text-brand-text text-base md:text-lg leading-relaxed font-black">{project.impact}</p>
          </div>
        </div>
      </div>

      <div className="px-10 md:px-14 pb-14 pt-4">
        {project.github && (
          <a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-lg font-black text-brand-text hover:text-brand-orange transition-all bg-brand-surface px-8 py-4 rounded-2xl border border-brand-border hover:border-brand-orange group/btn shadow-lg"
          >
            Audit Source <ArrowRight size={22} className="ml-3 group-hover/btn:translate-x-2 transition-transform" />
          </a>
        )}
      </div>
    </motion.div>
  );
};

const SkillIcon = ({ category }: { category: string }) => {
  const props = { className: "text-brand-orange", size: 36 };
  switch (category) {
    case 'Core Stack': return <Code {...props} />;
    case 'Backend & Systems': return <Database {...props} />;
    case 'Engineering Foundations': return <Terminal {...props} />;
    case 'Tools & AI': return <Cpu {...props} />;
    default: return <Code {...props} />;
  }
};

const App: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: 'smooth'
      });
    } else if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-brand-bg selection:bg-brand-orange selection:text-white">
      <ScrollProgress />
      <Navbar />

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-32 px-10 overflow-hidden">
        {/* Decorative background glow */}
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-brand-orange/5 blur-[180px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl w-full mx-auto relative z-10 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Left side - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "circOut" }}
            className="flex flex-col items-start text-left flex-1"
          >
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-brand-text tracking-[-0.05em] mb-8 leading-[0.85]">
              {portfolioData.profile.name}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-brand-text to-brand-muted/40">
                Software Engineer
              </span>
            </h1>
            
            <p className="text-base md:text-lg text-brand-muted max-w-xl leading-relaxed mb-10 font-medium">
              {portfolioData.profile.tagline}
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-6">
              <a 
                href="#projects" 
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full sm:w-auto px-12 py-6 bg-brand-orange text-white font-black text-lg rounded-2xl hover:bg-brand-hover hover:scale-[1.05] active:scale-95 transition-all shadow-2xl shadow-brand-orange/40 flex items-center justify-center gap-4"
              >
                Explore Systems <ArrowRight size={24} />
              </a>
              <a 
                href="/resume.pdf" 
                download="DKoushik-Resume.pdf"
                className="w-full sm:w-auto px-12 py-6 bg-brand-surface border-2 border-brand-orange text-brand-orange font-black text-lg rounded-2xl hover:bg-brand-orange/10 hover:scale-[1.05] active:scale-95 transition-all flex items-center justify-center gap-4"
              >
                Download Resume <Download size={24} />
              </a>
              <div className="flex items-center gap-6">
                {[
                  { icon: Github, href: portfolioData.profile.contact.github },
                  { icon: Linkedin, href: portfolioData.profile.contact.linkedin },
                  { icon: Mail, href: `mailto:${portfolioData.profile.contact.email}` }
                ].map((social, i) => (
                  <a 
                    key={i}
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-4 bg-brand-surface border border-brand-border rounded-xl text-brand-muted hover:text-brand-orange hover:border-brand-orange hover:shadow-lg transition-all transform hover:-translate-y-1"
                  >
                    <social.icon size={28} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right side - Profile Photo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 0.5, ease: "circOut" }}
            className="flex-1 flex items-center justify-end"
          >
            <div className="relative w-96 h-96 md:w-[420px] md:h-[420px]">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-40px] rounded-full border border-dashed border-brand-orange/20"
              />
              <div className="absolute inset-0 bg-brand-orange/10 blur-[80px] rounded-full" />
              <div className="relative w-full h-full rounded-full border-8 border-brand-surface bg-brand-card overflow-hidden flex items-center justify-center shadow-2xl group">
                <img 
                  src="/profile.png" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-56 px-10">
        <div className="max-w-7xl mx-auto">
          <SectionHeading subtitle="Focusing on modularity, high availability, and long-term system integrity.">
            The Professional Philosophy
          </SectionHeading>
          
          <div className="grid lg:grid-cols-2 gap-32 items-start">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-14"
            >
              <p className="text-2xl md:text-3xl text-brand-text leading-tight font-black tracking-tight">
                {portfolioData.profile.summary}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-16 pt-16 border-t-2 border-brand-border">
                {portfolioData.education.map((edu, i) => (
                  <div key={i} className="group">
                    <p className="text-[10px] font-black text-brand-orange uppercase tracking-[0.3em] mb-4">Scholastic</p>
                    <h4 className="text-lg text-brand-text font-black mb-3 tracking-tight">{edu.degree}</h4>
                    {edu.period && <p className="text-sm text-brand-muted font-black tracking-widest">{edu.period}</p>}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative p-12 md:p-16 bg-brand-surface border border-brand-border rounded-[3rem] shadow-3xl"
            >
              <h3 className="text-3xl font-black mb-16 flex items-center gap-6 tracking-tighter">
                <Trophy className="text-brand-orange" size={40} /> Industry Trajectory
              </h3>
              <div className="space-y-16">
                {portfolioData.internships.map((job, i) => (
                  <div key={i} className="relative pl-12 border-l-4 border-brand-border group">
                    <div className="absolute top-0 left-[-11px] w-5 h-5 rounded-full bg-brand-bg border-4 border-brand-border group-hover:bg-brand-orange group-hover:border-brand-orange transition-all duration-500" />
                    <p className="text-[10px] font-black text-brand-orange uppercase tracking-[0.3em] mb-4">{job.role}</p>
                    <h4 className="text-xl font-black text-brand-text mb-5 tracking-tight">{job.company}</h4>
                    <p className="text-brand-muted text-sm leading-relaxed font-medium">{job.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-56 px-10 bg-brand-surface/20">
        <div className="max-w-7xl mx-auto">
          <SectionHeading subtitle="A refined arsenal built for precision engineering and operational excellence.">
            Engineering Toolset
          </SectionHeading>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {portfolioData.skills.map((skillGroup, idx) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-12 bg-brand-card border border-brand-border rounded-[2.5rem] hover:border-brand-orange/50 transition-all duration-700 group shadow-2xl"
              >
                <div className="mb-10 p-5 w-fit bg-brand-surface rounded-[2rem] border border-brand-border group-hover:scale-110 group-hover:bg-brand-orange/10 transition-all duration-500">
                  <SkillIcon category={skillGroup.category} />
                </div>
                <h3 className="text-lg font-black mb-8 text-brand-text tracking-tight">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-3">
                  {skillGroup.items.map(skill => (
                    <span key={skill} className="px-5 py-2 bg-brand-bg text-brand-muted text-[11px] font-black uppercase tracking-widest rounded-xl border border-brand-border group-hover:text-brand-text group-hover:border-brand-text/30 transition-all">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-56 px-10">
        <div className="max-w-7xl mx-auto">
          <SectionHeading subtitle="Production-ready solutions addressing complex real-world inefficiencies.">
            Case Studies
          </SectionHeading>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {portfolioData.projects.map((project, idx) => (
              <ProjectCard key={project.id} project={project} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-56 px-10 bg-brand-surface/20">
        <div className="max-w-7xl mx-auto">
          <SectionHeading subtitle="Recognition of excellence in rapid engineering and competitive environments.">
            Accolades & Recognition
          </SectionHeading>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {portfolioData.achievements.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative p-12 bg-brand-card border border-brand-border rounded-[2.5rem] overflow-hidden group shadow-2xl"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/10 blur-[120px] group-hover:bg-brand-orange/25 transition-all duration-1000" />
                <div className="mb-10 inline-flex items-center justify-center p-6 bg-brand-orange/15 rounded-3xl group-hover:scale-110 transition-transform">
                  <Trophy className="text-brand-orange" size={42} />
                </div>
                <h3 className="text-xl font-black mb-6 text-brand-text group-hover:text-brand-orange transition-colors tracking-tighter">
                  {item.title}
                </h3>
                <p className="text-brand-muted text-sm leading-relaxed font-medium">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-64 px-10 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-brand-orange/10 to-transparent pointer-events-none" />
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-brand-text mb-16 leading-[0.8]">
              Let's Architect <br /> <span className="text-brand-orange">The Future.</span>
            </h2>
            <p className="text-lg md:text-xl text-brand-muted mb-20 max-w-3xl mx-auto leading-relaxed font-medium">
              Open for strategic collaborations and high-impact engineering roles.
            </p>

            <div className="flex flex-col md:flex-row justify-center gap-12 items-center">
              <a 
                href={`mailto:${portfolioData.profile.contact.email}`}
                className="w-full md:w-auto group px-14 py-8 bg-brand-orange text-white text-lg font-black rounded-[2rem] hover:bg-brand-hover hover:scale-[1.08] active:scale-95 transition-all flex items-center justify-center gap-6 shadow-[0_20px_60px_rgba(255,107,0,0.4)]"
              >
                <Mail size={32} /> Connect Directly
              </a>
              <div className="flex gap-8">
                {[
                  { icon: Linkedin, href: portfolioData.profile.contact.linkedin },
                  { icon: Github, href: portfolioData.profile.contact.github }
                ].map((social, i) => (
                  <a 
                    key={i}
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-8 bg-brand-surface border border-brand-border rounded-[2rem] text-brand-text hover:text-brand-orange hover:border-brand-orange hover:shadow-3xl transition-all transform hover:-translate-y-3"
                  >
                    <social.icon size={40} />
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-32 pt-20 border-t-2 border-brand-border/60 grid grid-cols-1 md:grid-cols-2 gap-16 text-left">
              <a 
                href={`tel:${portfolioData.profile.contact.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-8 group cursor-pointer bg-brand-surface/40 p-10 rounded-[2.5rem] border-2 border-transparent hover:border-brand-orange/40 transition-all shadow-2xl"
              >
                <div className="p-6 bg-brand-surface rounded-[1.5rem] group-hover:bg-brand-orange/25 transition-colors shadow-inner">
                  <Phone className="text-brand-orange" size={36} />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-black text-brand-muted tracking-[0.4em] mb-3">Mobile Audio</p>
                  <p className="text-lg font-black text-brand-text group-hover:text-brand-orange transition-colors">{portfolioData.profile.contact.phone}</p>
                </div>
              </a>
              <a 
                href={`mailto:${portfolioData.profile.contact.email}`}
                className="flex items-center gap-8 group cursor-pointer bg-brand-surface/40 p-10 rounded-[2.5rem] border-2 border-transparent hover:border-brand-orange/40 transition-all shadow-2xl overflow-hidden"
              >
                <div className="p-6 bg-brand-surface rounded-[1.5rem] group-hover:bg-brand-orange/25 transition-colors shadow-inner">
                  <Mail className="text-brand-orange" size={32} />
                </div>
                <div className="overflow-hidden">
                  <p className="text-[10px] uppercase font-black text-brand-muted tracking-[0.4em] mb-3">Secure Email</p>
                  <p className="text-lg font-black text-brand-text group-hover:text-brand-orange transition-colors truncate">{portfolioData.profile.contact.email}</p>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-10 border-t border-brand-border bg-brand-bg relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-14">
          <div className="text-4xl font-black tracking-tighter text-brand-text">
            DK<span className="text-brand-orange">.</span>
          </div>
          
          <p className="text-brand-muted text-base font-black tracking-[0.2em] text-center md:text-left uppercase">
            © {new Date().getFullYear()} D Koushik. <br className="md:hidden" />
            <span className="hidden md:inline"> | </span> 
            Engineered for Impact.
          </p>

          <div className="flex gap-14">
            {['About', 'Projects', 'Contact'].map(link => (
              <a 
                key={link}
                href={`#${link.toLowerCase()}`} 
                onClick={(e) => scrollToSection(e, `#${link.toLowerCase()}`)}
                className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-muted hover:text-brand-orange transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
