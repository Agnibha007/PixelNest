import React, { useState } from "react";
import SEO from "../components/SEO";
import "./Contact.css";

const Contact = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact PixelNest",
    description:
      "Get in touch with PixelNest for web development services and digital solutions.",
    mainEntity: {
      "@type": "Organization",
      name: "PixelNest",
      email: "contact@pixelnest.com",
      telephone: "+91-98765-43210",
      address: {
        "@type": "PostalAddress",
        addressCountry: "IN",
      },
    },
  };
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you! We will get back to you soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <SEO
        title="Contact Us - Get Your Free Consultation | PixelNest Web Development"
        description="Ready to transform your digital presence? Contact PixelNest for a free consultation. Fast response, no obligation quotes. Let's build something exceptional together."
        keywords="contact PixelNest, web development consultation, free quote, get in touch, hire web developer"
        url="https://pixelnest.example.com/contact"
        structuredData={structuredData}
      />
      <div className="contact-page">
        <section className="page-hero">
          <div className="container">
            <h1 className="page-title fade-in-up">Get In Touch</h1>
            <p className="page-subtitle fade-in-up">
              Let's discuss how we can help your business grow
            </p>
          </div>
        </section>

        <section className="section contact-section">
          <div className="container">
            <div className="contact-grid">
              <div className="contact-info">
                <h2>Start Your Project</h2>
                <p>
                  Ready to transform your digital presence? Fill out the form
                  and we'll get back to you within 24 hours.
                </p>

                <div className="contact-methods">
                  <div className="contact-method">
                    <div className="method-icon">📧</div>
                    <div>
                      <h3>Email</h3>
                      <p>contact@pixelnest.com</p>
                    </div>
                  </div>
                  <div className="contact-method">
                    <div className="method-icon">📞</div>
                    <div>
                      <h3>Phone</h3>
                      <p>+91 98765 43210</p>
                    </div>
                  </div>
                  <div className="contact-method">
                    <div className="method-icon">📍</div>
                    <div>
                      <h3>Location</h3>
                      <p>Remote & On-site Available</p>
                    </div>
                  </div>
                </div>

                <div className="trust-badges">
                  <div className="badge">✓ Fast Response</div>
                  <div className="badge">✓ Free Consultation</div>
                  <div className="badge">✓ No Obligation Quote</div>
                </div>
              </div>

              <div className="glass-card contact-form-card">
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Project Details</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary btn-full">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
