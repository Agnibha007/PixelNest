import React from "react";
import "./Testimonials.css";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Dr. Priya Sharma",
      role: "Clinic Owner",
      text: "PixelNest transformed our outdated website into a modern platform that significantly increased patient enquiries. The professionalism and attention to detail were outstanding.",
      rating: 5,
    },
    {
      name: "Rajesh Kumar",
      role: "Startup Founder",
      text: "The design quality and performance optimisation exceeded expectations. Highly professional team that delivers on promises.",
      rating: 5,
    },
    {
      name: "Anjali Desai",
      role: "Local Business Owner",
      text: "Our website finally represents our brand properly. The results were immediate - online orders increased by 40% in the first month.",
      rating: 5,
    },
    {
      name: "Vikram Patel",
      role: "Marketing Director",
      text: "Working with PixelNest was seamless. They understood our vision and delivered a website that perfectly captures our brand identity.",
      rating: 5,
    },
  ];

  return (
    <div className="testimonials-page">
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title fade-in-up">Client Testimonials</h1>
          <p className="page-subtitle fade-in-up">
            Success stories from businesses we've helped transform
          </p>
        </div>
      </section>

      <section className="section testimonials-section">
        <div className="container">
          <div className="testimonials-grid-full">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="glass-card testimonial-card-full">
                <div className="stars">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i}>⭐</span>
                  ))}
                </div>
                <p className="testimonial-text-full">"{testimonial.text}"</p>
                <div className="testimonial-author-full">
                  <div className="author-avatar">
                    {testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div className="author-info">
                    <strong>{testimonial.name}</strong>
                    <span>{testimonial.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
