import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: '🎨',
      title: 'Website Design & Development',
      description: 'Custom, high-performance websites built with modern technologies that represent your brand and drive conversions.',
      benefits: ['Responsive design across all devices', 'Fast loading speeds', 'SEO-optimized structure', 'Modern, professional aesthetics'],
      results: 'Increased credibility, higher conversion rates, and improved search rankings'
    },
    {
      icon: '⚛️',
      title: 'React Web Applications',
      description: 'Scalable, interactive web applications that deliver exceptional user experiences and handle complex business logic.',
      benefits: ['Component-based architecture', 'Real-time data updates', 'Smooth user interactions', 'Easy maintenance and scaling'],
      results: 'Enhanced user engagement, reduced bounce rates, and streamlined operations'
    },
    {
      icon: '✨',
      title: 'UI/UX Design',
      description: 'Intuitive interfaces designed with user psychology in mind, converting visitors into loyal customers.',
      benefits: ['User-centered design approach', 'Conversion-optimized layouts', 'Accessibility compliance', 'Brand consistency'],
      results: 'Better user satisfaction, increased conversions, and stronger brand identity'
    },
    {
      icon: '🔄',
      title: 'Business Website Revamps',
      description: 'Transform outdated websites into modern digital experiences that reflect your current business value.',
      benefits: ['Modern design refresh', 'Improved functionality', 'Better performance', 'Enhanced mobile experience'],
      results: 'Renewed brand perception, increased traffic, and improved customer trust'
    },
    {
      icon: '⚡',
      title: 'Performance Optimization',
      description: 'Lightning-fast load times that improve search rankings, user experience, and conversion rates.',
      benefits: ['Code optimization', 'Image compression', 'Caching strategies', 'CDN integration'],
      results: 'Higher search rankings, lower bounce rates, and increased revenue'
    },
    {
      icon: '🔍',
      title: 'SEO-Ready Website Architecture',
      description: 'Websites built from the ground up with search engine optimization best practices for maximum visibility.',
      benefits: ['Semantic HTML structure', 'Optimized meta tags', 'Fast Core Web Vitals', 'Mobile-first indexing'],
      results: 'Improved organic traffic, better search visibility, and qualified leads'
    }
  ];

  return (
    <div className="services-page">
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title fade-in-up">Our Services</h1>
          <p className="page-subtitle fade-in-up">Comprehensive digital solutions tailored to your business goals</p>
        </div>
      </section>

      <section className="section services-detailed">
        <div className="container">
          {services.map((service, index) => (
            <div key={index} className="service-detailed glass-card">
              <div className="service-header">
                <div className="service-icon-large">{service.icon}</div>
                <div>
                  <h2>{service.title}</h2>
                  <p className="service-description">{service.description}</p>
                </div>
              </div>
              <div className="service-content">
                <div className="service-benefits">
                  <h3>What You Get</h3>
                  <ul>
                    {service.benefits.map((benefit, i) => (
                      <li key={i}>✓ {benefit}</li>
                    ))}
                  </ul>
                </div>
                <div className="service-results">
                  <h3>Expected Results</h3>
                  <p>{service.results}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section process-section">
        <div className="container">
          <h2 className="section-title">Our Process</h2>
          <p className="section-subtitle">A proven methodology that delivers exceptional results</p>
          <div className="process-grid">
            <div className="process-step">
              <div className="step-number">01</div>
              <h3>Discovery</h3>
              <p>Understanding your business, goals, and target audience</p>
            </div>
            <div className="process-step">
              <div className="step-number">02</div>
              <h3>Strategy</h3>
              <p>Creating a roadmap aligned with your objectives</p>
            </div>
            <div className="process-step">
              <div className="step-number">03</div>
              <h3>Design</h3>
              <p>Crafting beautiful, conversion-focused interfaces</p>
            </div>
            <div className="process-step">
              <div className="step-number">04</div>
              <h3>Development</h3>
              <p>Building with clean, scalable, performant code</p>
            </div>
            <div className="process-step">
              <div className="step-number">05</div>
              <h3>Testing</h3>
              <p>Ensuring quality across all devices and browsers</p>
            </div>
            <div className="process-step">
              <div className="step-number">06</div>
              <h3>Launch</h3>
              <p>Deploying and monitoring for optimal performance</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Elevate Your Digital Presence?</h2>
            <p>Let's discuss how we can help your business grow</p>
            <Link to="/contact" className="btn btn-primary">Get Started Today</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
