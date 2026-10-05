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
  Download,
  Layers,
  ShieldCheck,
  Building2,
  CheckCircle2,
  Briefcase,
  Sparkles
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
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
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
    <nav className={`fixed top-0 w-full z-50 transition-all duration-700 ${isScrolled ? 'bg-brand-bg/95 backdrop-blur-3xl border-b border-brand-border/60 py-3 md:py-4' : 'bg-transparent py-4 sm:py-6 md:py-10'}`}>
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-10 flex justify-between items-center">
        <a 
          href="#" 
          onClick={(e) => scrollToSection(e, '#')}
          className="text-xl sm:text-2xl md:text-3xl font-black tracking-tighter text-brand-text"
        >
          DK<span className="text-brand-orange">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          <div className="flex gap-6 lg:gap-8">
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

          <div className="flex items-center gap-3">
            <a
              href="/D_Koushik_Resume.pdf"
              download="D_Koushik_Resume.pdf"
              className="px-4 lg:px-5 py-2 md:py-2.5 border border-brand-orange/60 hover:border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] rounded-xl transition-all duration-300 flex items-center gap-2"
            >
              <Download size={14} /> Resume
            </a>
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, '#contact')}
              className="px-6 lg:px-7 py-2 md:py-2.5 bg-brand-orange text-white text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] rounded-xl hover:bg-brand-hover hover:shadow-2xl hover:shadow-brand-orange/40 transition-all duration-500 transform hover:-translate-y-0.5 whitespace-nowrap"
            >
              Connect
            </a>
          </div>
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
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed top-20 left-0 w-full bg-brand-surface border-b border-brand-border shadow-2xl z-40"
            style={{ maxHeight: 'calc(100vh - 80px)', overflowY: 'auto' }}
          >
            <div className="flex flex-col p-6 space-y-5 pb-10">
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
              <div className="flex flex-col gap-3 pt-4 border-t border-brand-border">
                <a
                  href="/D_Koushik_Resume.pdf"
                  download="D_Koushik_Resume.pdf"
                  className="w-full px-6 py-3 bg-brand-bg border border-brand-orange text-brand-orange font-black text-sm uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 hover:bg-brand-orange hover:text-white transition-all"
                >
                  <Download size={18} /> Download Resume
                </a>
                <a
                  href="#contact"
                  onClick={(e) => scrollToSection(e, '#contact')}
                  className="w-full px-6 py-3 bg-brand-orange text-white text-sm font-black uppercase tracking-[0.15em] rounded-xl hover:bg-brand-hover transition-all duration-300 text-center"
                >
                  Connect
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const SectionHeading: React.FC<{ children?: React.ReactNode; subtitle?: string }> = ({ children, subtitle }) => (
  <div className="mb-16 sm:mb-20 md:mb-24">
    <motion.h2 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black tracking-tighter text-brand-text mb-6 sm:mb-8"
    >
      {children}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-brand-muted max-w-3xl text-sm sm:text-base md:text-lg leading-relaxed font-medium"
      >
        {subtitle}
      </motion.p>
    )}
    <motion.div 
      initial={{ width: 0 }}
      whileInView={{ width: '120px' }}
      viewport={{ once: true }}
      className="h-2 bg-brand-orange mt-8 sm:mt-10 md:mt-12 rounded-full shadow-lg shadow-brand-orange/30"
    />
  </div>
);

const ProjectCard: React.FC<{ project: Project, index: number }> = ({ project, index }) => {
  const isCompany = project.category === 'company';

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay: index * 0.1 }}
      className={`group relative bg-brand-card border ${isCompany ? 'border-brand-orange/40 hover:border-brand-orange' : 'border-brand-border hover:border-brand-orange/60'} rounded-[2.5rem] overflow-hidden transition-all duration-700 hover:-translate-y-2 flex flex-col shadow-2xl`}
    >
      {isCompany && (
        <div className="absolute top-0 right-0 w-72 h-72 bg-brand-orange/10 blur-[90px] pointer-events-none group-hover:bg-brand-orange/20 transition-all duration-700" />
      )}

      <div className="p-6 sm:p-10 md:p-12 flex-1 relative z-10">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <div className="flex flex-wrap gap-2">
            {project.tech.map(t => (
              <span key={t} className="text-[10px] uppercase tracking-[0.2em] px-3.5 py-1.5 bg-brand-bg text-brand-muted border border-brand-border rounded-full font-black">
                {t}
              </span>
            ))}
          </div>

          {project.badge && (
            <span className={`text-[10px] uppercase tracking-[0.2em] px-3.5 py-1.5 rounded-full font-black flex items-center gap-1.5 ${isCompany ? 'bg-brand-orange/15 text-brand-orange border border-brand-orange/40' : 'bg-brand-surface text-brand-text border border-brand-border'}`}>
              {isCompany ? <ShieldCheck size={13} className="text-brand-orange" /> : <Sparkles size={13} className="text-brand-orange" />}
              {project.badge}
            </span>
          )}
        </div>
        
        <h3 className="text-xl sm:text-2xl font-black text-brand-text mb-4 group-hover:text-brand-orange transition-colors tracking-tight">
          {project.title}
        </h3>
        
        <p className="text-brand-text/85 text-sm sm:text-base mb-8 leading-relaxed italic border-l-4 border-brand-orange pl-5 font-medium">
          "{project.impactLine}"
        </p>

        <div className="space-y-6">
          <div>
            <h4 className="text-[10px] font-black text-brand-orange uppercase tracking-[0.3em] mb-2">Context & Challenge</h4>
            <p className="text-brand-muted text-xs sm:text-sm leading-relaxed">{project.problem}</p>
          </div>
          <div>
            <h4 className="text-[10px] font-black text-brand-orange uppercase tracking-[0.3em] mb-2">Engineered Architecture</h4>
            <p className="text-brand-muted text-xs sm:text-sm leading-relaxed">{project.solution}</p>
          </div>

          {project.keyFeatures && project.keyFeatures.length > 0 && (
            <div>
              <h4 className="text-[10px] font-black text-brand-orange uppercase tracking-[0.3em] mb-2.5">Key Capabilities</h4>
              <ul className="space-y-2">
                {project.keyFeatures.map((feature, i) => (
                  <li key={i} className="text-brand-muted text-xs sm:text-sm leading-relaxed flex items-start gap-2">
                    <span className="text-brand-orange mt-0.5 flex-shrink-0">▹</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div>
            <h4 className="text-[10px] font-black text-brand-orange uppercase tracking-[0.3em] mb-2">Business Outcome & Impact</h4>
            <p className="text-brand-text text-sm sm:text-base leading-relaxed font-bold">{project.impact}</p>
          </div>
        </div>
      </div>

      <div className="px-6 sm:px-10 md:px-12 pb-8 md:pb-10 pt-4 relative z-10 flex flex-wrap items-center gap-4 border-t border-brand-border/40">
        {project.github ? (
          <a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-xs sm:text-sm font-black text-brand-text hover:text-brand-orange transition-all bg-brand-surface px-6 py-3 rounded-xl border border-brand-border hover:border-brand-orange group/btn shadow-md"
          >
            Audit Source <ArrowRight size={18} className="ml-2.5 group-hover/btn:translate-x-1.5 transition-transform" />
          </a>
        ) : isCompany ? (
          <div className="inline-flex items-center text-xs font-black text-brand-muted bg-brand-surface px-5 py-2.5 rounded-xl border border-brand-border/80">
            <Building2 size={16} className="text-brand-orange mr-2" />
            Enterprise Handled Platform • Kalpanaaa
          </div>
        ) : null}
      </div>
    </motion.div>
  );
};

const SkillIcon = ({ category }: { category: string }) => {
  const props = { className: "text-brand-orange", size: 36 };
  switch (category) {
    case 'Programming Languages': return <Code {...props} />;
    case 'Frontend & Interactive': return <Layers {...props} />;
    case 'Enterprise & Systems': return <Database {...props} />;
    case 'AI, Biometrics & Tools': return <Cpu {...props} />;
    default: return <Code {...props} />;
  }
};

const App: React.FC = () => {
  const [projectFilter, setProjectFilter] = useState<'all' | 'company' | 'engineering'>('all');

  const filteredProjects = portfolioData.projects.filter(project => {
    if (projectFilter === 'all') return true;
    return project.category === projectFilter;
  });

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
      <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-20 sm:pt-32 sm:pb-32 px-5 sm:px-8 md:px-10 overflow-hidden">
        {/* Decorative background glow */}
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-brand-orange/5 blur-[180px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl w-full mx-auto relative z-10 flex flex-col lg:flex-row items-center gap-10 sm:gap-14 md:gap-16 lg:gap-20">
          {/* Left side - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "circOut" }}
            className="flex flex-col items-start text-left flex-1 w-full"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-surface rounded-full border border-brand-border/80 mb-6">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] uppercase font-black tracking-[0.25em] text-brand-muted">
                Available for Engineering & PM Roles
              </span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-brand-text tracking-[-0.03em] sm:tracking-[-0.05em] mb-6 sm:mb-8 leading-tight sm:leading-[0.95] md:leading-[0.9]">
              {portfolioData.profile.name}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-brand-text to-brand-muted/50 mt-1">
                {portfolioData.profile.title}
              </span>
            </h1>
            
            <p className="text-sm sm:text-base md:text-lg text-brand-muted max-w-xl leading-relaxed mb-8 sm:mb-10 font-medium">
              {portfolioData.profile.tagline}
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5 w-full sm:w-auto">
              <a 
                href="#projects" 
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 sm:px-10 py-4 sm:py-5 bg-brand-orange text-white font-black text-base rounded-2xl hover:bg-brand-hover hover:scale-[1.04] active:scale-95 transition-all shadow-2xl shadow-brand-orange/40 flex items-center justify-center gap-3"
              >
                Explore Systems <ArrowRight size={20} />
              </a>

              <a 
                href="/D_Koushik_Resume.pdf" 
                download="D_Koushik_Resume.pdf"
                className="px-8 sm:px-10 py-4 sm:py-5 bg-brand-surface border-2 border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white font-black text-base rounded-2xl hover:scale-[1.04] active:scale-95 transition-all flex items-center justify-center gap-3 shadow-xl group"
              >
                Download Resume <Download size={20} className="group-hover:translate-y-0.5 transition-transform" />
              </a>

              <div className="flex items-center justify-center gap-3 mt-2 sm:mt-0">
                {[
                  { icon: Github, href: portfolioData.profile.contact.github, label: "GitHub" },
                  { icon: Linkedin, href: portfolioData.profile.contact.linkedin, label: "LinkedIn" },
                  { icon: Mail, href: `mailto:${portfolioData.profile.contact.email}`, label: "Email" }
                ].map((social, i) => (
                  <a 
                    key={i}
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label={social.label}
                    className="p-3.5 bg-brand-surface border border-brand-border rounded-xl text-brand-muted hover:text-brand-orange hover:border-brand-orange hover:shadow-lg transition-all transform hover:-translate-y-1"
                  >
                    <social.icon size={22} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right side - Profile Photo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 0.3, ease: "circOut" }}
            className="flex-1 flex items-center justify-center lg:justify-end w-full"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[420px] lg:h-[420px]">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-30px] sm:inset-[-40px] rounded-full border border-dashed border-brand-orange/20"
              />
              <div className="absolute inset-0 bg-brand-orange/10 blur-[80px] rounded-full" />
              <div className="relative w-full h-full rounded-full border-8 border-brand-surface bg-brand-card overflow-hidden flex items-center justify-center shadow-2xl group">
                <img 
                  src="/profile.png" 
                  alt="D Koushik" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 sm:py-32 md:py-44 px-5 sm:px-8 md:px-10">
        <div className="max-w-7xl mx-auto">
          <SectionHeading subtitle="Architecting dependable systems with high operational availability, modular design, and robust security.">
            The Professional Philosophy
          </SectionHeading>
          
          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 md:gap-20 lg:gap-24 items-start">
            {/* Left Column: Summary & Disciplines */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8 sm:space-y-10"
            >
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-brand-text leading-relaxed font-bold tracking-tight">
                {portfolioData.profile.summary}
              </p>

              <div className="pt-6 border-t-2 border-brand-border">
                <h3 className="text-xs uppercase font-black text-brand-orange tracking-[0.3em] mb-6">
                  Core Engineering Disciplines
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {portfolioData.pillars.map((pillar, i) => (
                    <div key={i} className="p-5 bg-brand-surface/60 rounded-2xl border border-brand-border/70 hover:border-brand-orange/50 transition-all">
                      <p className="text-[10px] font-black text-brand-orange uppercase tracking-[0.25em] mb-2">{pillar.area}</p>
                      <h4 className="text-sm sm:text-base text-brand-text font-black mb-2 tracking-tight">{pillar.title}</h4>
                      <p className="text-xs text-brand-muted leading-relaxed font-medium">{pillar.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Column: Industry Trajectory & Experience */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative p-6 sm:p-10 md:p-12 bg-brand-surface border border-brand-border rounded-[2rem] sm:rounded-[2.5rem] shadow-3xl"
            >
              <div className="flex items-center justify-between mb-8 sm:mb-12">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-black flex items-center gap-3 tracking-tighter text-brand-text">
                  <Briefcase className="text-brand-orange flex-shrink-0" size={28} /> Industry Trajectory
                </h3>
                <span className="text-[9px] uppercase font-black tracking-widest px-3 py-1 bg-brand-orange/15 text-brand-orange rounded-full border border-brand-orange/40">
                  Experience
                </span>
              </div>

              <div className="space-y-12">
                {portfolioData.internships.map((job, i) => {
                  const isCurrent = job.badge === 'Current Role';
                  return (
                    <div key={i} className="relative pl-8 sm:pl-10 border-l-2 border-brand-border group">
                      <div className={`absolute top-0 left-[-7px] w-3.5 h-3.5 rounded-full ${isCurrent ? 'bg-brand-orange ring-4 ring-brand-orange/20' : 'bg-brand-bg border-2 border-brand-border group-hover:bg-brand-orange group-hover:border-brand-orange'} transition-all duration-300`} />
                      
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <p className="text-[10px] font-black text-brand-orange uppercase tracking-[0.3em]">{job.role}</p>
                        {job.period && (
                          <span className="text-[10px] font-bold text-brand-muted/80 tracking-wider uppercase">
                            {job.period}
                          </span>
                        )}
                      </div>

                      <h4 className="text-lg sm:text-xl font-black text-brand-text mb-3 tracking-tight flex items-center gap-2">
                        {job.company}
                        {job.badge && (
                          <span className={`text-[9px] uppercase tracking-wider px-2.5 py-0.5 rounded-md font-black ${isCurrent ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30' : 'bg-brand-bg text-brand-muted border border-brand-border'}`}>
                            {job.badge}
                          </span>
                        )}
                      </h4>

                      <p className="text-brand-muted text-xs sm:text-sm leading-relaxed font-medium mb-4">{job.description}</p>

                      {job.highlights && job.highlights.length > 0 && (
                        <ul className="space-y-2 mt-3 pt-3 border-t border-brand-border/40">
                          {job.highlights.map((h, idx) => (
                            <li key={idx} className="text-xs text-brand-muted/90 flex items-start gap-2 leading-relaxed">
                              <span className="text-brand-orange font-bold mt-0.5">▹</span>
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Trajectory Card Download Resume Action */}
              <div className="mt-10 pt-6 border-t border-brand-border/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <p className="text-[10px] uppercase font-black text-brand-muted tracking-[0.25em]">Verified Employment History</p>
                  <p className="text-xs sm:text-sm font-bold text-brand-text">Download complete updated curriculum vitae</p>
                </div>
                <a 
                  href="/D_Koushik_Resume.pdf" 
                  download="D_Koushik_Resume.pdf"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-orange/15 hover:bg-brand-orange text-brand-orange hover:text-white rounded-xl text-xs font-black uppercase tracking-wider transition-all duration-300 border border-brand-orange/40 hover:border-brand-orange"
                >
                  <Download size={14} /> Download CV
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 sm:py-32 md:py-44 px-5 sm:px-8 md:px-10 bg-brand-surface/20">
        <div className="max-w-7xl mx-auto">
          <SectionHeading subtitle="A refined arsenal built for precision engineering, enterprise architectures, and operational excellence.">
            Engineering Toolset
          </SectionHeading>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
            {portfolioData.skills.map((skillGroup, idx) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 sm:p-10 bg-brand-card border border-brand-border rounded-[2.5rem] hover:border-brand-orange/50 transition-all duration-700 group shadow-2xl flex flex-col justify-between"
              >
                <div>
                  <div className="mb-8 p-4 w-fit bg-brand-surface rounded-[1.75rem] border border-brand-border group-hover:scale-110 group-hover:bg-brand-orange/10 transition-all duration-500">
                    <SkillIcon category={skillGroup.category} />
                  </div>
                  <h3 className="text-base sm:text-lg font-black mb-6 text-brand-text tracking-tight">{skillGroup.category}</h3>
                  <div className="flex flex-wrap gap-2.5">
                    {skillGroup.items.map(skill => (
                      <span key={skill} className="px-3.5 py-1.5 bg-brand-bg text-brand-muted text-[10px] sm:text-[11px] font-black uppercase tracking-widest rounded-xl border border-brand-border group-hover:text-brand-text group-hover:border-brand-text/30 transition-all">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 sm:py-32 md:py-44 px-5 sm:px-8 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 sm:mb-16">
            <SectionHeading subtitle="Production-grade platforms and software systems engineered for enterprise scale and real-world impact.">
              Enterprise & Scalable Systems
            </SectionHeading>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-3 mb-12 sm:mb-16">
            <button
              onClick={() => setProjectFilter('all')}
              className={`px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all ${projectFilter === 'all' ? 'bg-brand-orange text-white shadow-lg shadow-brand-orange/30' : 'bg-brand-surface text-brand-muted hover:text-brand-text border border-brand-border'}`}
            >
              All Systems ({portfolioData.projects.length})
            </button>
            <button
              onClick={() => setProjectFilter('company')}
              className={`px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all flex items-center gap-2 ${projectFilter === 'company' ? 'bg-brand-orange text-white shadow-lg shadow-brand-orange/30' : 'bg-brand-surface text-brand-muted hover:text-brand-text border border-brand-border'}`}
            >
              <ShieldCheck size={14} /> Handled Company Projects ({portfolioData.projects.filter(p => p.category === 'company').length})
            </button>
            <button
              onClick={() => setProjectFilter('engineering')}
              className={`px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all ${projectFilter === 'engineering' ? 'bg-brand-orange text-white shadow-lg shadow-brand-orange/30' : 'bg-brand-surface text-brand-muted hover:text-brand-text border border-brand-border'}`}
            >
              Flagship Engineering ({portfolioData.projects.filter(p => p.category === 'engineering').length})
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-14">
            {filteredProjects.map((project, idx) => (
              <ProjectCard key={project.id} project={project} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-24 sm:py-32 md:py-44 px-5 sm:px-8 md:px-10 bg-brand-surface/20">
        <div className="max-w-7xl mx-auto">
          <SectionHeading subtitle="Competitive engineering accolades, hackathon victories, and high-intensity problem solving recognition.">
            Accolades & Recognition
          </SectionHeading>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {portfolioData.achievements.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative p-8 sm:p-10 bg-brand-card border border-brand-border rounded-[2.5rem] overflow-hidden group shadow-2xl flex flex-col justify-between"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/10 blur-[120px] group-hover:bg-brand-orange/25 transition-all duration-1000" />
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <div className="inline-flex items-center justify-center p-4 bg-brand-orange/15 rounded-2xl group-hover:scale-110 transition-transform">
                      <Trophy className="text-brand-orange" size={28} />
                    </div>
                    {item.badge && (
                      <span className="text-[9px] uppercase tracking-widest px-3 py-1 bg-brand-orange/15 text-brand-orange border border-brand-orange/40 rounded-full font-black">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-black mb-4 text-brand-text group-hover:text-brand-orange transition-colors tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-brand-muted text-xs sm:text-sm leading-relaxed font-medium">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-28 sm:py-36 md:py-48 px-5 sm:px-8 md:px-10 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-brand-orange/10 to-transparent pointer-events-none" />
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tighter text-brand-text mb-8 sm:mb-12 leading-tight">
              Let's Architect <br /> <span className="text-brand-orange">The Future.</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-brand-muted mb-12 sm:mb-16 max-w-3xl mx-auto leading-relaxed font-medium">
              Open for strategic engineering collaborations, technical project leadership, and high-impact software engineering roles.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-5 sm:gap-6 items-center">
              <a 
                href={`mailto:${portfolioData.profile.contact.email}`}
                className="w-full sm:w-auto group px-8 sm:px-10 py-5 sm:py-6 bg-brand-orange text-white text-sm sm:text-base font-black rounded-2xl hover:bg-brand-hover hover:scale-[1.05] active:scale-95 transition-all flex items-center justify-center gap-3 shadow-[0_20px_60px_rgba(255,107,0,0.4)]"
              >
                <Mail size={20} /> Connect Directly
              </a>

              <a 
                href="/D_Koushik_Resume.pdf" 
                download="D_Koushik_Resume.pdf"
                className="w-full sm:w-auto group px-8 sm:px-10 py-5 sm:py-6 bg-brand-surface border-2 border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white text-sm sm:text-base font-black rounded-2xl hover:scale-[1.05] active:scale-95 transition-all flex items-center justify-center gap-3 shadow-xl"
              >
                <Download size={20} /> Download Resume
              </a>

              <div className="flex gap-4">
                {[
                  { icon: Linkedin, href: portfolioData.profile.contact.linkedin, label: "LinkedIn" },
                  { icon: Github, href: portfolioData.profile.contact.github, label: "GitHub" }
                ].map((social, i) => (
                  <a 
                    key={i}
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="p-5 bg-brand-surface border border-brand-border rounded-2xl text-brand-text hover:text-brand-orange hover:border-brand-orange hover:shadow-2xl transition-all transform hover:-translate-y-1"
                  >
                    <social.icon size={24} />
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-16 sm:mt-20 md:mt-24 pt-10 sm:pt-14 border-t-2 border-brand-border/60 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 text-left">
              <a 
                href={`tel:${portfolioData.profile.contact.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-4 sm:gap-6 group cursor-pointer bg-brand-surface/40 p-6 sm:p-8 rounded-2xl border-2 border-transparent hover:border-brand-orange/40 transition-all shadow-2xl"
              >
                <div className="p-3 sm:p-4 bg-brand-surface rounded-xl group-hover:bg-brand-orange/25 transition-colors shadow-inner flex-shrink-0">
                  <Phone className="text-brand-orange w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] uppercase font-black text-brand-muted tracking-[0.4em] mb-1.5">Direct Line</p>
                  <p className="text-sm sm:text-base md:text-lg font-black text-brand-text group-hover:text-brand-orange transition-colors break-all">{portfolioData.profile.contact.phone}</p>
                </div>
              </a>
              <a 
                href={`mailto:${portfolioData.profile.contact.email}`}
                className="flex items-center gap-4 sm:gap-6 group cursor-pointer bg-brand-surface/40 p-6 sm:p-8 rounded-2xl border-2 border-transparent hover:border-brand-orange/40 transition-all shadow-2xl overflow-hidden"
              >
                <div className="p-3 sm:p-4 bg-brand-surface rounded-xl group-hover:bg-brand-orange/25 transition-colors shadow-inner flex-shrink-0">
                  <Mail className="text-brand-orange w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] uppercase font-black text-brand-muted tracking-[0.4em] mb-1.5">Official Email</p>
                  <p className="text-xs sm:text-sm md:text-base font-black text-brand-text group-hover:text-brand-orange transition-colors truncate">{portfolioData.profile.contact.email}</p>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 sm:py-16 px-5 sm:px-8 md:px-10 border-t border-brand-border bg-brand-bg relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 sm:gap-8">
          <div className="text-2xl sm:text-3xl font-black tracking-tighter text-brand-text">
            DK<span className="text-brand-orange">.</span>
          </div>
          
          <p className="text-brand-muted text-xs sm:text-sm font-black tracking-[0.2em] text-center md:text-left uppercase">
            © {new Date().getFullYear()} D Koushik. <br className="md:hidden" />
            <span className="hidden md:inline"> | </span> 
            Software Engineer & Project Manager.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8">
            {['About', 'Skills', 'Projects', 'Achievements', 'Contact'].map(link => (
              <a 
                key={link}
                href={`#${link.toLowerCase()}`} 
                onClick={(e) => scrollToSection(e, `#${link.toLowerCase()}`)}
                className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.3em] text-brand-muted hover:text-brand-orange transition-colors"
              >
                {link}
              </a>
            ))}
            <a 
              href="/D_Koushik_Resume.pdf" 
              download="D_Koushik_Resume.pdf"
              className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.3em] text-brand-orange hover:text-brand-hover transition-colors flex items-center gap-1"
            >
              <Download size={12} /> Resume
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
