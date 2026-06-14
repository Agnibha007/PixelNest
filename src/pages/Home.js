import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import { 
  Rocket, 
  Layers, 
  Cpu, 
  Activity,
  ArrowRight,
  FlaskConical,
  Smartphone,
  Gauge
} from "lucide-react";
import "./Home.css";

const Home = () => {
  const [showStickyCTA, setShowStickyCTA] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowStickyCTA(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    mainEntity: {
      "@type": "Organization",
      name: "PixelNest",
      url: "https://pixelneststudios.tech",
      description: "Premium digital product studio focused on engineering excellence.",
    },
  };

  const capabilities = [
    {
      id: "01",
      title: "Product Strategy",
      description: "Defining technical and business roadmaps to ensure your product survives and scales.",
      icon: <Rocket size={24} strokeWidth={1.5} color="var(--brand-primary)" />
    },
    {
      id: "02",
      title: "Interface Design",
      description: "Precise, conversion-led UI systems that balance industrial discipline with high-end aesthetics.",
      icon: <Layers size={24} strokeWidth={1.5} color="var(--brand-primary)" />
    },
    {
      id: "03",
      title: "Full Stack Development",
      description: "Production-grade codebases built with React and modern architectures, optimized for speed.",
      icon: <Cpu size={24} strokeWidth={1.5} color="var(--brand-primary)" />
    },
    {
      id: "04",
      title: "Performance Engineering",
      description: "Technical audits and core web vital enhancements that turn sluggish platforms into velocity assets.",
      icon: <Activity size={24} strokeWidth={1.5} color="var(--brand-primary)" />
    },
  ];

  const labPreviews = [
    {
      id: "LAB_01",
      name: "Nexus UI",
      description: "An internal design system experiment focused on extreme accessibility and performance.",
      tech: "React + Tailwind",
      icon: <Layers size={28} strokeWidth={1.5} />
    },
    {
      id: "LAB_02",
      name: "Vault Auth",
      description: "A secure, passwordless authentication protocol developed for our internal tools.",
      tech: "NextAuth + WebAuthn",
      icon: <Cpu size={28} strokeWidth={1.5} />
    },
  ];

  const principles = [
    { label: "Performance", value: "98+", icon: <Gauge size={28} strokeWidth={1.5} /> },
    { label: "Accessibility", value: "100", icon: <Smartphone size={28} strokeWidth={1.5} /> },
    { label: "Architecture", value: "Clean", icon: <Cpu size={28} strokeWidth={1.5} /> },
    { label: "Execution", value: "Fixed", icon: <Rocket size={28} strokeWidth={1.5} /> },
  ];

  return (
    <>
      <SEO
        title="PixelNest - Premium Digital Design & Engineering Studio"
        description="We design and engineer high-performance digital products. Focused on technical excellence and industrial precision."
        url="https://pixelneststudios.tech/"
        structuredData={structuredData}
      />
      
      <div className="home-page">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="container hero-container">
            <div className="hero-content">
              <span className="label-badge fade-in-up">AVAILABLE_FOR_Q4_2026</span>
              <h1 className="hero-title fade-in-up delay-1">
                Engineering <br />
                <span className="gradient-text">digital experiences</span> <br />
                that scale.
              </h1>
              <p className="hero-subtitle fade-in-up delay-2">
                PixelNest partners with ambitious brands to design, develop, and scale high-performing digital products with industrial precision.
              </p>
              <div className="hero-cta fade-in-up delay-3">
                <Link to="/contact" className="btn btn-primary">
                  Start a Project <ArrowRight size={18} />
                </Link>
                <Link to="/testimonials" className="btn btn-secondary hide-mobile">
                  Explore the Lab <FlaskConical size={18} />
                </Link>
              </div>
            </div>

            {/* Reverted Premium Project Showcase */}
            <div className="hero-showcase fade-in-up delay-3">
              <div className="showcase-frame">
                <div className="showcase-header">
                  <div className="showcase-dots"><span></span><span></span><span></span></div>
                  <div className="showcase-tab mono">internal_experiment_08.px</div>
                </div>
                <div className="showcase-body">
                  <div className="showcase-ui-elements">
                    <div className="ui-card-mini">
                      <span className="mono">CORE_VITALS</span>
                      <div className="val">99/100</div>
                      <div className="bar"><div className="fill" style={{width: '99%'}}></div></div>
                    </div>
                    <div className="ui-card-mini accent">
                      <span className="mono">SYSTEM_LOAD</span>
                      <div className="val">Optimal</div>
                      <div className="card-circles"><span></span><span></span><span></span></div>
                    </div>
                  </div>
                  <div className="showcase-mockup-content">
                    <div className="mock-nav"></div>
                    <div className="mock-hero">
                      <div className="mock-line-lg"></div>
                      <div className="mock-line-md"></div>
                    </div>
                    <div className="mock-grid">
                      <div className="mock-box"></div>
                      <div className="mock-box"></div>
                      <div className="mock-box"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Engineering Principles Section */}
        <section className="metrics-section">
          <div className="container">
            <div className="metrics-grid">
              {principles.map((p, i) => (
                <div key={i} className="metric-card glass-card fade-in-up">
                  <div className="metric-icon">{p.icon}</div>
                  <span className="metric-value">{p.value}</span>
                  <span className="metric-label">{p.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="section capabilities-section">
          <div className="container">
            <div className="section-header">
              <span className="label-badge">Expertise</span>
              <h2 className="section-title">Capabilities</h2>
            </div>
            <div className="capabilities-grid">
              {capabilities.map((cap, index) => (
                <div key={index} className="capability-item border-top">
                  <div className="cap-icon-box">{cap.icon}</div>
                  <div className="cap-content">
                    <h3>{cap.title}</h3>
                    <p>{cap.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Lab Preview */}
        <section className="section lab-preview-section">
          <div className="container">
            <div className="section-header">
              <span className="label-badge">R&D</span>
              <h2 className="section-title">The Lab</h2>
            </div>
            <div className="lab-grid">
              {labPreviews.map((lab, i) => (
                <div key={i} className="glass-card lab-preview-card">
                  <div className="lab-icon-box">{lab.icon}</div>
                  <h3>{lab.name}</h3>
                  <p style={{marginBottom: 'var(--sp-4)'}}>{lab.description}</p>
                  <span className="mono label-badge">{lab.tech}</span>
                </div>
              ))}
            </div>
            <div className="text-center" style={{marginTop: 'var(--sp-12)'}}>
              <Link to="/testimonials" className="btn btn-secondary">Enter the Repository <FlaskConical size={16} /></Link>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="section final-cta-section">
          <div className="container">
            <div className="cta-premium-box glass-card">
              <h2>Build your next platform.</h2>
              <p>Discuss your technical requirements with our engineering team.</p>
              <div className="cta-actions">
                <Link to="/contact" className="btn btn-primary">Start the conversation <ArrowRight size={16} /></Link>
              </div>
            </div>
          </div>
        </section>

        {/* Sticky Mobile CTA */}
        <div className={`sticky-mobile-cta ${showStickyCTA ? 'visible' : ''}`}>
          <div className="container">
            <Link to="/contact" className="btn btn-primary btn-full">
              Start Project <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
