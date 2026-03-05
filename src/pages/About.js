import React from "react";
import SEO from "../components/SEO";
import "./About.css";

const About = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About PixelNest",
    description:
      "Learn about PixelNest's mission, vision, and the team behind premium web development solutions.",
    mainEntity: {
      "@type": "Organization",
      name: "PixelNest",
      founders: [
        {
          "@type": "Person",
          name: "Agnibha Mukherjee",
          jobTitle: "Co-Founder",
        },
        {
          "@type": "Person",
          name: "Aarush Singh",
          jobTitle: "Founder",
        },
      ],
    },
  };

  return (
    <>
      <SEO
        title="About PixelNest - Our Mission, Vision & Team | Premium Web Development"
        description="Discover PixelNest's story, meet our expert team, and learn how we're transforming businesses through innovative web development and digital solutions."
        keywords="about PixelNest, web development team, digital agency, our mission, company values, leadership team"
        url="https://pixelneststudios.tech/about"
        structuredData={structuredData}
      />
      <div className="about-page">
        <section className="page-hero">
          <div className="container">
            <h1 className="page-title fade-in-up">About PixelNest</h1>
            <p className="page-subtitle fade-in-up">
              Innovating digital solutions that drive business growth
            </p>
          </div>
        </section>

        <section className="section mission-vision">
          <div className="container">
            <div className="mv-grid">
              <div className="glass-card mv-card">
                <div className="mv-icon">🎯</div>
                <h2>Our Mission</h2>
                <p>
                  To empower businesses with cutting-edge digital solutions that
                  transform their online presence and drive measurable growth.
                  We build technology that creates real business impact.
                </p>
              </div>
              <div className="glass-card mv-card">
                <div className="mv-icon">🚀</div>
                <h2>Our Vision</h2>
                <p>
                  To become the leading digital innovation partner for
                  businesses seeking excellence in web development, delivering
                  world-class solutions that set new industry standards.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section story-section">
          <div className="container">
            <h2 className="section-title">Our Story</h2>
            <div className="story-content">
              <p>
                PixelNest was founded with a clear vision: to bridge the gap
                between innovative technology and business growth. We recognized
                that many businesses struggle with outdated digital presence
                that fails to represent their true value.
              </p>
              <p>
                Our journey began with a commitment to excellence in web
                development and digital solutions. We combine technical
                expertise with strategic thinking to deliver solutions that
                don't just look good—they drive results.
              </p>
              <p>
                Today, we work with businesses across industries, helping them
                establish credibility, increase conversions, and achieve
                sustainable growth through premium digital experiences.
              </p>
            </div>
          </div>
        </section>

        <section className="section team-section">
          <div className="container">
            <h2 className="section-title">Leadership Team</h2>
            <p className="section-subtitle">
              Meet the innovators driving PixelNest forward
            </p>
            <div className="team-grid">
              <div className="glass-card team-card">
                <div className="team-image">AM</div>
                <h3>Agnibha Mukherjee</h3>
                <p className="team-role">Co-Founder</p>
                <p className="team-bio">
                  Visionary technologist with a passion for building digital
                  solutions that create real business impact. Agnibha leads the
                  technical development of PixelNest, ensuring every project is
                  built with cutting-edge technology and exceptional code
                  quality.
                </p>
                <div className="expertise-tags">
                  <span>Full-Stack Development</span>
                  <span>System Architecture</span>
                  <span>React Development</span>
                  <span>Performance Optimization</span>
                </div>
              </div>
              <div className="glass-card team-card">
                <div className="team-image">AS</div>
                <h3>Aarush Singh</h3>
                <p className="team-role">Founder</p>
                <p className="team-bio">
                  Strategic leader focused on business growth and building
                  strong client relationships. Aarush oversees business
                  operations and client success, ensuring PixelNest delivers
                  exceptional value and drives measurable results for every
                  client.
                </p>
                <div className="expertise-tags">
                  <span>Business Development</span>
                  <span>Client Relations</span>
                  <span>Product Strategy</span>
                  <span>Operations Management</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section values-section">
          <div className="container">
            <h2 className="section-title">Our Values</h2>
            <div className="values-grid">
              <div className="value-card">
                <h3>💡 Innovation</h3>
                <p>
                  Constantly pushing boundaries with cutting-edge technology
                </p>
              </div>
              <div className="value-card">
                <h3>🎯 Results-Driven</h3>
                <p>
                  Every decision focused on delivering measurable business
                  impact
                </p>
              </div>
              <div className="value-card">
                <h3>⚡ Excellence</h3>
                <p>Uncompromising commitment to quality in every project</p>
              </div>
              <div className="value-card">
                <h3>🤝 Partnership</h3>
                <p>
                  Building long-term relationships based on trust and success
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
