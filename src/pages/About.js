import React from "react";
import SEO from "../components/SEO";
import "./About.css";

const About = () => {
  const values = [
    { title: "Technical Precision", text: "We believe that software should be as reliable as physical engineering. Our code is built for long-term stability." },
    { title: "Design Discipline", text: "Every pixel must serve a purpose. We reject fluff in favor of clarity and high-performance interfaces." },
    { title: "Radical Ownership", text: "You work directly with the builders. No layers of management, just direct execution and accountability." },
    { title: "Future Scaling", text: "We don't just build for today. We architect systems that allow your brand to grow without technical debt." }
  ];

  return (
    <>
      <SEO
        title="About Us - PixelNest Studio"
        description="Learn about the technical discipline and design philosophy behind PixelNest."
        url="https://pixelneststudios.tech/about"
      />
      
      <div className="about-page">
        <section className="about-hero">
          <div className="container">
            <span className="label-badge fade-in-up">The Studio</span>
            <h1 className="page-title fade-in-up">Design and engineering<br/><span className="gradient-text">for the next scale.</span></h1>
            <p className="page-subtitle fade-in-up">
              PixelNest is a boutique studio founded on the principles of industrial design applied to the digital world.
            </p>
          </div>
        </section>

        <section className="section about-story">
          <div className="container">
            <div className="story-layout">
              <div className="story-content">
                <span className="label-badge">Our Story</span>
                <h2>Bridging the gap between design and engineering.</h2>
                <p>
                  Started by Agnibha and Aarush, PixelNest was born out of a frustration with the widening gap between high-end design concepts and their technical execution.
                </p>
                <p>
                  We operate as a small, highly disciplined team that partners with a select number of companies each year. This allows us to focus on quality over volume, ensuring that every project we ship meets our industrial standard.
                </p>
              </div>
              <div className="glass-card story-metrics">
                <div className="stat-item">
                  <span className="stat-value">2024</span>
                  <span className="stat-label mono">ESTABLISHED</span>
                </div>
                <div className="stat-item">
                  <span className="stat-value">40+</span>
                  <span className="stat-label mono">PRODUCTS SHIPPED</span>
                </div>
                <div className="stat-item">
                  <span className="stat-value">100%</span>
                  <span className="stat-label mono">REMOTE / GLOBAL</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section about-values">
          <div className="container">
            <div className="section-header">
              <span className="label-badge">Philosophy</span>
              <h2 className="section-title">Core Values</h2>
            </div>
            <div className="values-grid">
              {values.map((v, i) => (
                <div key={i} className="value-card">
                  <span className="mono" style={{color: "var(--brand-primary)"}}>0{i+1}</span>
                  <h4>{v.title}</h4>
                  <p>{v.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section about-founders">
          <div className="container">
            <div className="section-header">
              <span className="label-badge">Leadership</span>
              <h2 className="section-title">The Founders</h2>
            </div>
            <div className="founders-grid">
              <div className="founder-card glass-card">
                <div className="founder-header">
                  <div className="founder-avatar">AM</div>
                  <div className="founder-info">
                    <h3>Agnibha Mukherjee</h3>
                    <p className="mono">Co-Founder & Tech Lead</p>
                  </div>
                </div>
                <p>
                  An expert in React and distributed systems, Agnibha ensures that every product built at PixelNest is fast, secure, and architected for enterprise-level scale.
                </p>
              </div>
              <div className="founder-card glass-card">
                <div className="founder-header">
                  <div className="founder-avatar secondary">AS</div>
                  <div className="founder-info">
                    <h3>Aarush Singh</h3>
                    <p className="mono">Co-Founder & Strategy Lead</p>
                  </div>
                </div>
                <p>
                  A product strategist with a background in conversion psychology and industrial design. Aarush leads the vision and UX systems for all studio projects.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
