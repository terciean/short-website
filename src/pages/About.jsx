import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <section className="about-page">
      <div className="page-header">
        <div className="page-header-content">
          <h1>About Us</h1>
          <p>The story behind Cape Town's authentic South African spit braai catering service</p>
        </div>
      </div>

      <div className="about-container">
        <div className="about-story">
          <div className="about-story-content">
            <h2 className="section-title">Our Story</h2>
            <p>
              Split Braai began with a passion for authentic South African cuisine and a desire to share 
              the unique flavors of a traditional spit braai with food enthusiasts across Cape Town and the Helderberg region.
            </p>
            <p>
              Founded in 2015 by the Venter family, our business has grown from small family gatherings to 
              becoming one of the most sought-after catering services in the region. What started as a 
              weekend hobby quickly transformed into a full-time venture as word spread about our exceptional 
              spit-roasted lamb and genuine South African hospitality.
            </p>
            <p>
              Today, we cater to a wide variety of events – from intimate family celebrations to large corporate 
              functions and weddings. Through it all, we've maintained our commitment to authenticity, quality, 
              and the true spirit of a South African braai.
            </p>
          </div>
          <div className="about-story-image">
            <img 
              src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=1500&q=80" 
              alt="Split Braai founder with spit roast" 
            />
          </div>
        </div>

        <div className="about-values">
          <h2 className="section-title">Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" fill="#00b4d8"/>
                </svg>
              </div>
              <h3>Passion</h3>
              <p>We're passionate about food and creating memorable experiences for our clients</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="#00b4d8" strokeWidth="2" fill="none"/>
                  <polyline points="22 4 12 14.01 9 11.01" stroke="#00b4d8" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              <h3>Quality</h3>
              <p>We source only the finest ingredients and maintain the highest standards in preparation</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke="#00b4d8" strokeWidth="2" fill="none"/>
                  <path d="M12 8v4l3 3" stroke="#00b4d8" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              <h3>Reliability</h3>
              <p>We deliver on our promises, arriving on time and executing flawlessly</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="#00b4d8" strokeWidth="2" fill="none"/>
                  <circle cx="9" cy="7" r="4" stroke="#00b4d8" strokeWidth="2" fill="none"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="#00b4d8" strokeWidth="2" fill="none"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="#00b4d8" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              <h3>Community</h3>
              <p>We believe in bringing people together through the shared experience of good food</p>
            </div>
          </div>
        </div>

        <div className="team-section">
          <h2 className="section-title">Meet Our Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <div className="team-member-image">
                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Johan Venter" />
              </div>
              <h3>Johan Venter</h3>
              <p className="team-role">Founder & Head Chef</p>
              <p className="team-bio">With over 20 years of experience in traditional South African cooking, Johan brings authentic flavor and expertise to every event.</p>
            </div>
            <div className="team-member">
              <div className="team-member-image">
                <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Maria Venter" />
              </div>
              <h3>Maria Venter</h3>
              <p className="team-role">Operations Manager</p>
              <p className="team-bio">Maria ensures every event runs smoothly from planning to execution, with impeccable attention to detail.</p>
            </div>
            <div className="team-member">
              <div className="team-member-image">
                <img src="https://randomuser.me/api/portraits/men/36.jpg" alt="David Nkosi" />
              </div>
              <h3>David Nkosi</h3>
              <p className="team-role">Executive Chef</p>
              <p className="team-bio">David specializes in creating innovative sides and accompaniments that perfectly complement our spit-roasted meats.</p>
            </div>
          </div>
        </div>

        <div className="experience-section">
          <div className="experience-image">
            <img 
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1500&q=80" 
              alt="Large event catered by Split Braai" 
            />
          </div>
          <div className="experience-content">
            <h2 className="section-title">Our Experience</h2>
            <div className="experience-stats">
              <div className="stat">
                <span className="stat-number">500+</span>
                <span className="stat-label">Events Catered</span>
              </div>
              <div className="stat">
                <span className="stat-number">50,000+</span>
                <span className="stat-label">Happy Guests</span>
              </div>
              <div className="stat">
                <span className="stat-number">7+</span>
                <span className="stat-label">Years Experience</span>
              </div>
            </div>
            <p>
              Over the years, we've had the privilege of catering for a wide variety of clients and events, 
              from intimate family gatherings to large corporate functions for multinational companies.
            </p>
            <p>
              Our experience spans weddings, milestone birthdays, corporate team-building events, product 
              launches, and community celebrations throughout Cape Town and the Helderberg region.
            </p>
            <div className="cta-center">
              <Link to="/contact" className="cta-btn cta-primary">Work With Us</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About; 