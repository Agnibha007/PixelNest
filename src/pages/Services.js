import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import { 
  Layers, 
  Cpu, 
  ArrowRight,
  Search,
  Zap
} from "lucide-react";
import "./Services.css";

const Services = () => {
  const serviceList = [
    {
      id: "01",
      title: "Product Strategy",
      description: "We partner with founders to define market opportunities, product roadmaps, and technical feasibility.",
      deliverables: ["Market Analysis", "Technical Roadmap", "MVP Definition"],
      icon: <Search size={24} strokeWidth={1.5} />
    },
    {
      id: "02",
      title: "Interface Design",
      description: "Creating precise, design-led systems that communicate trust and engineering quality.",
      deliverables: ["UI/UX Systems", "Prototyping", "Design Language"],
      icon: <Layers size={24} strokeWidth={1.5} />
    },
    {
      id: "03",
      title: "React Development",
      description: "Building fast, secure, and scalable front-end architectures using the latest ecosystem standards.",
      deliverables: ["Custom Components", "State Management", "API Integration"],
      icon: <Cpu size={24} strokeWidth={1.5} />
    },
    {
      id: "04",
      title: "Performance Engineering",
      description: "Optimizing every millisecond of the user journey to maximize conversion and search engine ranking.",
      deliverables: ["Core Web Vitals", "Asset Optimization", "Code Splitting"],
      icon: <Zap size={24} strokeWidth={1.5} />
    }
  ];

  const process = [
    { step: "01", title: "Discovery", description: "In-depth technical and business audit to align goals." },
    { step: "02", title: "Strategy", description: "Mapping out the optimal path from concept to deployment." },
    { step: "03", title: "Execution", description: "Disciplined design and engineering with weekly milestones." },
    { step: "04", title: "Optimization", description: "Rigorous testing and performance tuning pre-launch." }
  ];

  return (
    <>
      <SEO
        title="Capabilities - PixelNest"
        description="Premium digital product capabilities from strategy to full-stack engineering."
        url="https://pixelneststudios.tech/services"
      />
      
      <div className="services-page">
        <section className="services-hero">
          <div className="container">
            <span className="label-badge fade-in-up">Studio Expertise</span>
            <h1 className="page-title fade-in-up">Capabilities</h1>
            <p className="page-subtitle fade-in-up">
              We provide comprehensive digital solutions for ambitious brands who demand technical excellence and design discipline.
            </p>
          </div>
        </section>

        <section className="section capabilities-grid-section">
          <div className="container">
            <div className="capabilities-detailed-list">
              {serviceList.map((service, index) => (
                <div key={index} className="service-row">
                  <div className="service-icon-box">{service.icon}</div>
                  <div className="service-info">
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                  <div className="service-deliverables">
                    <span className="mono label">DELIVERABLES</span>
                    <ul>
                      {service.deliverables.map((d, i) => (
                        <li key={i}>{d}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section process-section">
          <div className="container">
            <div className="section-header">
              <span className="label-badge">Methodology</span>
              <h2 className="section-title">The Process</h2>
            </div>
            
            <div className="process-grid">
              {process.map((p, i) => (
                <div key={i} className="process-card glass-card">
                  <span className="process-step-num mono">{p.step}</span>
                  <h4>{p.title}</h4>
                  <p>{p.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section services-cta">
          <div className="container">
            <div className="cta-banner-industrial">
              <h2>Launch your project</h2>
              <p>Discuss your technical requirements with our engineering team.</p>
              <Link to="/contact" className="btn btn-primary">Start the conversation <ArrowRight size={16} /></Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;
