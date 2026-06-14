import React, { useState, useEffect } from "react";
import SEO from "../components/SEO";
import { sanitizeString, validateEmail } from "../utils/security";
import { 
  Monitor, 
  BrainCircuit, 
  MessageCircle, 
  PhoneCall, 
  CloudCog, 
  Blocks,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Mail
} from "lucide-react";
import "./Contact.css";

const services = [
  {
    id: "web",
    title: "Website Design & Development",
    desc: "Redesign, performance, and new builds.",
    options: ["New Website", "Redesign", "Landing Page", "Performance Optimization"],
    icon: <Monitor size={24} strokeWidth={1.5} />
  },
  {
    id: "ai",
    title: "AI Automation",
    desc: "Workflow automation and business AI.",
    options: ["AI Assistants", "Workflow Automation", "Business AI Integrations"],
    icon: <BrainCircuit size={24} strokeWidth={1.5} />
  },
  {
    id: "whatsapp",
    title: "WhatsApp Automation",
    desc: "Chatbots and lead capture systems.",
    options: ["Chatbots", "Customer Support Bots", "Lead Capture Systems"],
    icon: <MessageCircle size={24} strokeWidth={1.5} />
  },
  {
    id: "voice",
    title: "Voice AI Systems",
    desc: "Calling bots and appointment agents.",
    options: ["Calling Bots", "Appointment Agents", "Customer Communication"],
    icon: <PhoneCall size={24} strokeWidth={1.5} />
  },
  {
    id: "infra",
    title: "Business Infrastructure",
    desc: "Email setup and cloud configuration.",
    options: ["Professional Email Setup", "Domains & Analytics", "Cloud Configuration"],
    icon: <CloudCog size={24} strokeWidth={1.5} />
  },
  {
    id: "custom",
    title: "Custom Solution",
    desc: "Unique technical requirements.",
    options: ["Unique Technical Requirement"],
    icon: <Blocks size={24} strokeWidth={1.5} />
  }
];

const Contact = () => {
  const [step, setStep] = useState(1);
  const [isDirect, setIsDirect] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    timeline: "Standard (1-2 months)",
    message: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Auto scroll to top on step change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [step, isDirect]);

  const toggleOption = (option) => {
    setSelectedOptions(prev => 
      prev.includes(option) ? prev.filter(o => o !== option) : [...prev, option]
    );
  };

  const handleNext = () => {
    if (step === 1 && !selectedService) {
      setError("Select a primary service to continue.");
      return;
    }
    setError("");
    setStep(prev => prev + 1);
  };

  const handleBack = () => {
    setError("");
    setStep(prev => prev - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    if (!validateEmail(formData.email)) {
      setError("Enter a valid work email.");
      return;
    }

    setError("");
    setIsSubmitting(true);

    const submissionData = {
      type: isDirect ? "Direct Inquiry" : "Configured Project",
      service: selectedService ? selectedService.title : "Direct",
      requirements: selectedOptions,
      details: {
        name: sanitizeString(formData.name),
        email: formData.email,
        company: sanitizeString(formData.company),
        timeline: formData.timeline,
        message: sanitizeString(formData.message)
      }
    };

    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log("Transmission Submission:", submissionData);
      setSuccess(true);
    } catch (err) {
      setError("Connection error. Try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (success) {
    return (
      <div className="contact-page">
        <section className="section">
          <div className="container text-center">
            <div className="glass-card success-card">
              <CheckCircle2 size={48} strokeWidth={1.5} color="var(--brand-primary)" style={{marginBottom: 'var(--sp-4)'}} />
              <h2 className="section-title">Transmission Sent.</h2>
              <p className="section-subtitle">We've received your brief. A specialist will review your requirements and reach out via email within 24 hours.</p>
              <button onClick={() => window.location.reload()} className="btn btn-secondary">Create New brief</button>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <>
      <SEO title="Configurator - PixelNest" description="Configure your digital product requirements." />
      
      <div className="contact-page">
        <section className="contact-hero text-center">
          <div className="container">
            {!isDirect && (
              <div className="configurator-progress">
                <span className="mono">0{step} / 03</span>
                <div className="progress-bar-mobile">
                  <div className="progress-fill" style={{ width: `${(step / 3) * 100}%` }}></div>
                </div>
              </div>
            )}
            <h1 className="page-title">{isDirect ? "Direct Inquiry." : "Project Configurator."}</h1>
            <p className="page-subtitle">{isDirect ? "Send us a direct message." : `STEP 0${step} / 03`}</p>
          </div>
        </section>

        <section className="section configurator-section">
          <div className="container">
            <div className="configurator-container centered-content">
              {error && <div className="config-error mono">{error}</div>}

              {isDirect ? (
                <div className="config-step-mobile fade-in">
                  <form onSubmit={handleSubmit} className="mobile-industrial-form">
                    <div className="mobile-form-group">
                      <label className="mono">FULL NAME</label>
                      <input 
                        type="text" 
                        required 
                        placeholder="John Doe" 
                        autoComplete="name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    <div className="mobile-form-group">
                      <label className="mono">WORK EMAIL</label>
                      <input 
                        type="email" 
                        required 
                        placeholder="john@company.com" 
                        autoComplete="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                    <div className="mobile-form-group">
                      <label className="mono">MESSAGE</label>
                      <textarea 
                        rows="6" 
                        placeholder="How can we help you?"
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        required
                      ></textarea>
                    </div>
                    <div className="config-actions">
                      <button type="button" onClick={() => setIsDirect(false)} className="btn btn-secondary btn-grow">
                        Use Configurator
                      </button>
                      <button type="submit" className="btn btn-primary btn-grow" disabled={isSubmitting}>
                        {isSubmitting ? 'Transmitting...' : <>Send Message <ArrowRight size={18} /></>}
                      </button>
                    </div>
                  </form>
                </div>
              ) : (
                <>
                  {step === 1 && (
                    <div className="config-step-mobile fade-in">
                      <h2 className="mobile-step-title">What do you need built?</h2>
                      <div className="service-list-mobile">
                        {services.map(s => (
                          <button 
                            key={s.id} 
                            className={`service-item-mobile ${selectedService?.id === s.id ? 'selected' : ''}`}
                            onClick={() => setSelectedService(s)}
                          >
                            <div className="item-icon">{s.icon}</div>
                            <div className="item-text">
                              <h3>{s.title}</h3>
                              <p>{s.desc}</p>
                            </div>
                            <div className="item-arrow">
                              <ArrowRight size={18} />
                            </div>
                          </button>
                        ))}
                      </div>
                      <div className="direct-link-container text-center">
                        <button onClick={() => setIsDirect(true)} className="direct-inquiry-btn mono">
                          <Mail size={14} /> Send a direct inquiry instead
                        </button>
                      </div>
                    </div>
                  )}

                  {step === 2 && (
                    <div className="config-step-mobile fade-in">
                      <h2 className="mobile-step-title">Select requirements</h2>
                      <p className="mobile-step-desc">Options for {selectedService.title}</p>
                      <div className="options-list-mobile">
                        {selectedService.options.map(opt => (
                          <button 
                            key={opt} 
                            className={`option-item-mobile ${selectedOptions.includes(opt) ? 'selected' : ''}`}
                            onClick={() => toggleOption(opt)}
                          >
                            <div className="radio-circle">
                              {selectedOptions.includes(opt) && <div className="inner-dot"></div>}
                            </div>
                            <span>{opt}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {step === 3 && (
                    <div className="config-step-mobile fade-in">
                      <h2 className="mobile-step-title">Final Details</h2>
                      <form onSubmit={handleSubmit} className="mobile-industrial-form">
                        <div className="mobile-form-group">
                          <label className="mono">FULL NAME</label>
                          <input 
                            type="text" 
                            required 
                            placeholder="John Doe" 
                            autoComplete="name"
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                          />
                        </div>
                        <div className="mobile-form-group">
                          <label className="mono">WORK EMAIL</label>
                          <input 
                            type="email" 
                            required 
                            placeholder="john@company.com" 
                            autoComplete="email"
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                          />
                        </div>
                        <div className="mobile-form-group">
                          <label className="mono">COMPANY</label>
                          <input 
                            type="text" 
                            placeholder="Organization" 
                            autoComplete="organization"
                            value={formData.company}
                            onChange={(e) => setFormData({...formData, company: e.target.value})}
                          />
                        </div>
                        <div className="mobile-form-group">
                          <label className="mono">TIMELINE</label>
                          <select 
                            value={formData.timeline}
                            onChange={(e) => setFormData({...formData, timeline: e.target.value})}
                          >
                            <option>Urgent (&lt; 2 weeks)</option>
                            <option>Standard (1-2 months)</option>
                            <option>Planning phase</option>
                          </select>
                        </div>
                        <div className="mobile-form-group">
                          <label className="mono">MISSION BRIEF</label>
                          <textarea 
                            rows="4" 
                            placeholder="Project vision..."
                            value={formData.message}
                            onChange={(e) => setFormData({...formData, message: e.target.value})}
                          ></textarea>
                        </div>
                        {/* Padding for sticky bottom button */}
                        <div style={{ height: '80px' }}></div>
                      </form>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </section>

        {/* Sticky Bottom Actions for Configurator */}
        {!success && !isDirect && (
          <div className="configurator-sticky-footer">
            <div className="container footer-actions-row">
              {step > 1 && (
                <button onClick={handleBack} className="btn btn-secondary btn-icon-only" disabled={isSubmitting}>
                  <ArrowLeft size={20} />
                </button>
              )}
              {step < 3 ? (
                <button onClick={handleNext} className="btn btn-primary btn-grow">
                  Continue <ArrowRight size={20} />
                </button>
              ) : (
                <button onClick={handleSubmit} className="btn btn-primary btn-grow" disabled={isSubmitting}>
                  {isSubmitting ? 'Transmitting...' : <>Transmit brief <ArrowRight size={20} /></>}
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Contact;
