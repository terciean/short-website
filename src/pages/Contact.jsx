import React, { useState } from "react";
import CostCalculator from "../components/CostCalculator";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    eventDate: "",
    eventType: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would typically handle sending the form data to your backend or email service
  };

  return (
    <section className="contact-page">
      <div className="page-header">
        <div className="page-header-content">
          <h1>Contact Us</h1>
          <p>Ready to book your event or have questions about our spit braai catering? Get in touch with us!</p>
        </div>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <h2 className="section-title">Get in Touch</h2>
          <p>We'd love to hear from you. Fill out the form or contact us directly using the information below.</p>
          
          <div className="contact-details">
            <div className="contact-detail">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.1 1 .33 2.1.7 3.1a2 2 0 01-.45 2.1l-1.27 1.27a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c1 .38 2.03.6 3.09.7a2 2 0 011.72 2z"></path>
              </svg>
              <div>
                <strong>Phone</strong>
                <p>+27 72 123 4567</p>
              </div>
            </div>
            <div className="contact-detail">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <div>
                <strong>Email</strong>
                <p>info@splitbraai.co.za</p>
              </div>
            </div>
            <div className="contact-detail">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <div>
                <strong>Location</strong>
                <p>Cape Town & Helderberg, South Africa</p>
              </div>
            </div>
            <div className="contact-detail">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              <div>
                <strong>Operating Hours</strong>
                <p>Monday - Sunday: 9:00 AM - 7:00 PM</p>
              </div>
            </div>
          </div>
          
          <div className="social-icons">
            <a href="https://facebook.com/yourbusiness" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3V2z"></path>
              </svg>
            </a>
            <a href="https://instagram.com/yourbusiness" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="https://wa.me/27721234567" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.4 14.24c-.32-.16-1.9-.94-2.2-1.04-.3-.1-.52-.16-.73.16-.22.3-.84.94-1.03 1.14-.2.2-.39.22-.72.08-.32-.16-1.37-.5-2.6-1.6-.96-.86-1.6-1.92-1.8-2.24-.18-.32-.02-.5.14-.66.14-.14.32-.36.48-.54.16-.18.2-.3.3-.52.1-.2.06-.4-.02-.54-.08-.16-.74-1.78-1-2.44-.28-.64-.54-.54-.74-.54-.2 0-.42-.02-.64-.02s-.6.08-.9.4c-.32.3-1.2 1.18-1.2 2.88 0 1.7 1.24 3.34 1.4 3.56.18.22 2.48 3.78 6 5.3.84.36 1.5.58 2 .74.86.26 1.64.22 2.26.14.68-.1 2.1-.86 2.4-1.7.3-.84.3-1.54.2-1.7-.08-.16-.3-.24-.62-.4z"></path>
              </svg>
            </a>
          </div>

          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423283.43554989767!2d18.35869399921253!3d-33.9248685050692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc500f8826eed7%3A0x687fe1fc2828aa87!2sCape%20Town%2C%20South%20Africa!5e0!3m2!1sen!2sus!4v1652347653095!5m2!1sen!2sus"
              width="100%"
              height="250"
              style={{ border: 0, borderRadius: "8px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Split Braai location map"
            ></iframe>
          </div>
        </div>

        <div className="contact-form-container">
          {submitted ? (
            <div className="thank-you-message">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="#00b4d8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <polyline points="22 4 12 14.01 9 11.01" stroke="#00b4d8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <h3>Thank You!</h3>
              <p>Your message has been sent successfully. We'll get back to you shortly.</p>
              <button onClick={() => setSubmitted(false)} className="back-btn">Send Another Message</button>
            </div>
          ) : (
            <>
              <h2 className="section-title">Send Us a Message</h2>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your Name" 
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="Your Email" 
                      required 
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="Phone Number" 
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="eventDate">Event Date</label>
                    <input 
                      type="date" 
                      id="eventDate" 
                      name="eventDate"
                      value={form.eventDate}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="eventType">Event Type</label>
                  <select 
                    id="eventType" 
                    name="eventType"
                    value={form.eventType}
                    onChange={handleChange}
                  >
                    <option value="">Select Event Type</option>
                    <option value="wedding">Wedding</option>
                    <option value="corporate">Corporate Event</option>
                    <option value="birthday">Birthday Party</option>
                    <option value="family">Family Gathering</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea 
                    id="message" 
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your event or any questions you have" 
                    rows="4" 
                    required
                  ></textarea>
                </div>
                <button type="submit" className="submit-btn">Send Message</button>
              </form>
            </>
          )}
        </div>
      </div>

      <div className="calculator-section">
        <div className="calculator-container">
          <h2 className="section-title">Cost Calculator</h2>
          <p className="section-subtitle">Get a quick estimate for your event catering</p>
          <CostCalculator />
        </div>
      </div>
    </section>
  );
}

export default Contact;