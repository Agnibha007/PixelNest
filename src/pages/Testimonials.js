import React from "react";
import SEO from "../components/SEO";
import { 
  Layers, 
  ShieldCheck, 
  Zap,
  Activity,
  Code2,
  Accessibility
} from "lucide-react";
import "./Testimonials.css";

const Testimonials = () => {
  const labProjects = [
    {
      id: "LAB_01",
      name: "Nexus UI",
      type: "Design System / Component Library",
      description: "An internal exploration into high-performance, accessible UI components. Built to handle complex state transitions with zero layout shift.",
      objective: "To create a foundation for all PixelNest products that guarantees 100/100 accessibility and performance scores.",
      stack: "React, Tailwind, Framer Motion, Radix UI",
      status: "STABLE",
      icon: <Layers size={24} strokeWidth={1.5} />
    },
    {
      id: "LAB_02",
      name: "Vault Auth",
      type: "Security Protocol",
      description: "A passwordless authentication wrapper designed for maximum security and minimal friction. Implements WebAuthn standards for biometric login.",
      objective: "Eliminate credential-based vulnerabilities while providing a premium onboarding experience.",
      stack: "NextAuth, WebAuthn, TypeScript",
      status: "BETA",
      icon: <ShieldCheck size={24} strokeWidth={1.5} />
    },
    {
      id: "LAB_03",
      name: "Pulse Engine",
      type: "Real-time State Experiment",
      description: "A lightweight synchronization engine for real-time collaborative applications. Focused on optimistic updates and conflict resolution.",
      objective: "Provide sub-100ms synchronization across distributed clients without heavy backend overhead.",
      stack: "Socket.io, Zustand, Redis",
      status: "RESEARCH",
      icon: <Zap size={24} strokeWidth={1.5} />
    }
  ];

  return (
    <>
      <SEO
        title="Lab - PixelNest Engineering Repository"
        description="Explore the technical experiments, internal products, and engineering deep-dives from the PixelNest team."
        url="https://pixelneststudios.tech/testimonials"
      />
      
      <div className="testimonials-page">
        <section className="testimonials-hero">
          <div className="container">
            <span className="label-badge fade-in-up">The Repository</span>
            <h1 className="page-title fade-in-up">The <span className="gradient-text">Lab.</span></h1>
            <p className="page-subtitle fade-in-up">
              A collection of internal products, engineering experiments, and technical protocols developed at PixelNest.
            </p>
          </div>
        </section>

        <section className="section lab-grid-section">
          <div className="container">
            <div className="full-case-studies-list">
              {labProjects.map((project, i) => (
                <div key={i} className="case-study-row">
                  <div className="case-meta">
                    <div className="lab-icon-box">{project.icon}</div>
                    <span className="mono label">{project.id}</span>
                    <h3>{project.name}</h3>
                    <p className="mono" style={{color: "var(--brand-primary)"}}>{project.type}</p>
                    <div className="status-indicator mono">
                      <span className="dot"></span> STATUS: {project.status}
                    </div>
                  </div>
                  <div className="case-content">
                    <p className="lab-description">
                      {project.description}
                    </p>
                    <div className="lab-technical-details">
                      <div className="detail-item">
                        <span className="mono label">OBJECTIVE</span>
                        <p>{project.objective}</p>
                      </div>
                      <div className="detail-item">
                        <span className="mono label">STACK</span>
                        <p className="mono" style={{fontSize: '0.8rem', color: 'var(--text-muted)'}}>{project.stack}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section engineering-focus">
          <div className="container">
            <div className="section-header">
              <span className="label-badge">Commitment</span>
              <h2 className="section-title">Our Engineering Standard</h2>
            </div>
            <div className="faq-grid">
              <div className="faq-item">
                <span className="mono label">PERFORMANCE</span>
                <div className="standard-icon"><Activity size={20} color="var(--brand-primary)" /></div>
                <h4>Speed is a feature</h4>
                <p>We architect systems for sub-second interaction times. Performance isn't an afterthought; it's the foundation of every line of code we write.</p>
              </div>
              <div className="faq-item">
                <span className="mono label">STABILITY</span>
                <div className="standard-icon"><Code2 size={20} color="var(--brand-primary)" /></div>
                <h4>Type-safe architectures</h4>
                <p>By leveraging strict TypeScript and comprehensive testing suites, we ensure our products are resilient and easy to scale without breaking.</p>
              </div>
              <div className="faq-item">
                <span className="mono label">ACCESSIBILITY</span>
                <div className="standard-icon"><Accessibility size={20} color="var(--brand-primary)" /></div>
                <h4>Inclusive by design</h4>
                <p>We follow WCAG 2.1 guidelines meticulously. High-end design must be usable by everyone, regardless of their device or ability.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Testimonials;
