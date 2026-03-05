import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import "./Home.css";

const Home = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    mainEntity: {
      "@type": "Organization",
      name: "PixelNest",
      url: "https://pixelnest.example.com",
      logo: "https://pixelnest.example.com/pixelnest.png",
      description: "Premium web development and digital solutions",
      offers: {
        "@type": "AggregateOffer",
        offerCount: "6",
        itemOffered: [
          {
            "@type": "Service",
            name: "Website Design & Development",
            description: "Custom, high-performance websites",
          },
          {
            "@type": "Service",
            name: "React Web Applications",
            description: "Scalable, interactive web apps",
          },
          {
            "@type": "Service",
            name: "UI/UX Design",
            description: "Intuitive interfaces that convert visitors",
          },
          {
            "@type": "Service",
            name: "Performance Optimization",
            description: "Lightning-fast load times",
          },
        ],
      },
    },
  };
  const services = [
    {
      title: "Website Design & Development",
      description:
        "Custom, high-performance websites built with modern technologies",
      icon: "🎨",
    },
    {
      title: "React Web Applications",
      description:
        "Scalable, interactive web apps that deliver exceptional user experiences",
      icon: "⚛️",
    },
    {
      title: "UI/UX Design",
      description: "Intuitive interfaces that convert visitors into customers",
      icon: "✨",
    },
    {
      title: "Performance Optimization",
      description:
        "Lightning-fast load times that improve rankings and conversions",
      icon: "⚡",
    },
  ];

  const whyChoose = [
    {
      title: "Modern Technology Stack",
      description: "Built with cutting-edge tools for maximum performance",
    },
    {
      title: "SEO-Ready Architecture",
      description: "Optimized for search engines from day one",
    },
    {
      title: "Mobile-First Design",
      description: "Perfect experience on every device",
    },
    {
      title: "Conversion Focused",
      description: "Every element designed to drive results",
    },
  ];

  const testimonials = [
    {
      name: "Dr. Priya Sharma",
      role: "Clinic Owner",
      text: "PixelNest transformed our outdated website into a modern platform that significantly increased patient enquiries.",
      rating: 5,
    },
    {
      name: "Rajesh Kumar",
      role: "Startup Founder",
      text: "The design quality and performance optimisation exceeded expectations. Highly professional team.",
      rating: 5,
    },
  ];

  return (
    <>
      <SEO
        title="PixelNest - Premium Web Development & Digital Solutions"
        description="Transform your business with premium web development services. Custom websites, React applications, UI/UX design, and SEO optimization. Get a free consultation today."
        keywords="web development, react development, UI/UX design, website design, SEO optimization, digital solutions, custom websites, performance optimization"
        url="https://pixelnest.example.com/"
        structuredData={structuredData}
      />
      <div className="home">
        <section className="hero">
          <div className="hero-bg"></div>
          <div className="container hero-container">
            <div className="hero-content fade-in-up">
              <h1 className="hero-title">
                Building Digital Experiences
                <br />
                <span className="gradient-text">That Grow Businesses</span>
              </h1>
              <p className="hero-subtitle">
                Premium web development and digital solutions that drive
                measurable growth, establish credibility, and create powerful
                online presence.
              </p>
              <div className="hero-cta">
                <Link to="/contact" className="btn btn-primary">
                  Get Started
                </Link>
                <Link to="/services" className="btn btn-secondary">
                  Our Services
                </Link>
              </div>
            </div>
            <div className="hero-visual floating">
              <div className="visual-circle circle-1"></div>
              <div className="visual-circle circle-2"></div>
              <div className="visual-circle circle-3"></div>
            </div>
          </div>
        </section>

        <section className="section services-preview">
          <div className="container">
            <h2 className="section-title">Our Services</h2>
            <p className="section-subtitle">
              Comprehensive digital solutions tailored to your business goals
            </p>
            <div className="services-grid">
              {services.map((service, index) => (
                <div key={index} className="glass-card service-card">
                  <div className="service-icon">{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              ))}
            </div>
            <div className="text-center" style={{ marginTop: "3rem" }}>
              <Link to="/services" className="btn btn-primary">
                View All Services
              </Link>
            </div>
          </div>
        </section>

        <section className="section why-choose">
          <div className="container">
            <h2 className="section-title">Why Choose PixelNest</h2>
            <p className="section-subtitle">
              We combine innovation, expertise, and results-driven strategies
            </p>
            <div className="why-grid">
              {whyChoose.map((item, index) => (
                <div key={index} className="why-card">
                  <div className="why-number">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section testimonials-preview">
          <div className="container">
            <h2 className="section-title">Client Success Stories</h2>
            <p className="section-subtitle">
              Real results from businesses we've helped transform
            </p>
            <div className="testimonials-grid">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="glass-card testimonial-card">
                  <div className="stars">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i}>⭐</span>
                    ))}
                  </div>
                  <p className="testimonial-text">"{testimonial.text}"</p>
                  <div className="testimonial-author">
                    <strong>{testimonial.name}</strong>
                    <span>{testimonial.role}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center" style={{ marginTop: "3rem" }}>
              <Link to="/testimonials" className="btn btn-secondary">
                Read More Reviews
              </Link>
            </div>
          </div>
        </section>

        <section className="section founder-credibility">
          <div className="container">
            <h2 className="section-title">Leadership</h2>
            <p className="section-subtitle">
              Driven by innovation and commitment to excellence
            </p>
            <div className="founders-grid">
              <div className="glass-card founder-card">
                <div className="founder-image">AM</div>
                <h3>Agnibha Mukherjee</h3>
                <p className="founder-role">Co-Founder</p>
                <p className="founder-bio">
                  Visionary technologist with a passion for building digital
                  solutions that create real business impact.
                </p>
                <div className="expertise-tags">
                  <span>Full-Stack Development</span>
                  <span>System Architecture</span>
                  <span>React Development</span>
                </div>
              </div>
              <div className="glass-card founder-card">
                <div className="founder-image">AS</div>
                <h3>Aarush Singh</h3>
                <p className="founder-role">Founder</p>
                <p className="founder-bio">
                  Strategic leader focused on business growth and building
                  strong client relationships.
                </p>
                <div className="expertise-tags">
                  <span>Business Development</span>
                  <span>Client Relations</span>
                  <span>Product Strategy</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="cta-banner">
          <div className="container">
            <div className="cta-content">
              <h2>Ready to Transform Your Digital Presence?</h2>
              <p>Let's build something exceptional together</p>
              <Link to="/contact" className="btn btn-primary">
                Start Your Project
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
