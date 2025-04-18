import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="home">
      <div className="hero-section">
        <img 
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1500&q=80" 
          alt="Spit braai cooking with flames" 
          className="hero-bg" 
        />
        <div className="hero-overlay">
          <h1 className="hero-title">Cape Town's Authentic Spit Braai Experience</h1>
          <p className="hero-subtitle">Unforgettable events, mouthwatering spit-roasted lamb, and a true taste of South Africa. Serving Cape Town & Helderberg.</p>
          <div className="hero-cta">
            <Link to="/services" className="cta-btn">See Packages</Link>
            <Link to="/contact" className="cta-btn cta-primary">Book Now</Link>
          </div>
        </div>
      </div>
      
      <div className="features-row">
        <div className="feature">
          <div className="feature-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="currentColor"/>
            </svg>
          </div>
          <h3>Locally Owned</h3>
          <p>Family-run catering business with deep South African roots</p>
        </div>
        <div className="feature">
          <div className="feature-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.1 13.34l2.83-2.83L3.91 3.5c-1.56 1.56-1.56 4.09 0 5.66l4.19 4.18zm6.78-1.81c1.53.71 3.68.21 5.27-1.38 1.91-1.91 2.28-4.65.81-6.12-1.46-1.46-4.2-1.1-6.12.81-1.59 1.59-2.09 3.74-1.38 5.27L3.7 19.87l1.41 1.41L12 14.41l6.88 6.88 1.41-1.41L13.41 13l1.47-1.47z" fill="currentColor"/>
            </svg>
          </div>
          <h3>Fully Catered</h3>
          <p>Complete service from setup to cleanup for a stress-free event</p>
        </div>
        <div className="feature">
          <div className="feature-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" fill="currentColor"/>
            </svg>
          </div>
          <h3>On-site Cooking</h3>
          <p>Fresh preparation at your venue for maximum flavor and visual appeal</p>
        </div>
      </div>

      <section className="about-section" id="about">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">About Us</h2>
            <p className="about-desc">
              Bringing the authentic South African spit braai experience to Cape Town and Helderberg. Specializing in spit-roasted lamb, delicious sides, and on-site cooking for events of all sizes.
            </p>
            <p className="about-desc">
              Our passion for traditional South African cuisine and dedication to exceptional service has made us a preferred choice for weddings, corporate events, and private parties across the region.
            </p>
            <Link to="/about" className="about-link">Learn more about us</Link>
          </div>
          <div className="about-image">
            <img src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=668&q=80" alt="Chef preparing food" />
          </div>
        </div>
      </section>

      <section className="menu-highlights" id="menu">
        <h2 className="section-title">Menu Highlights</h2>
        <p className="section-subtitle">Explore our signature dishes that have made us famous throughout Cape Town</p>
        <div className="menu-grid">
          <div className="menu-item">
            <div className="menu-item-image">
              <img src="https://images.unsplash.com/photo-1529694157872-4e0c0f3b238b?auto=format&fit=crop&w=600&q=80" alt="Spit-roasted Lamb" />
            </div>
            <div className="menu-item-content">
              <h3>Spit-roasted Lamb</h3>
              <p>Our signature dish - slowly roasted over open flames for that perfect taste</p>
            </div>
          </div>
          <div className="menu-item">
            <div className="menu-item-image">
              <img src="https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=600&q=80" alt="Grilled Chicken" />
            </div>
            <div className="menu-item-content">
              <h3>Grilled Chicken</h3>
              <p>Marinated in our secret blend of herbs and spices for maximum flavor</p>
            </div>
          </div>
          <div className="menu-item">
            <div className="menu-item-image">
              <img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80" alt="Fresh Salads" />
            </div>
            <div className="menu-item-content">
              <h3>Fresh Salads</h3>
              <p>Vibrant, locally-sourced produce prepared with our signature dressings</p>
            </div>
          </div>
          <div className="menu-item">
            <div className="menu-item-image">
              <img src="https://images.unsplash.com/photo-1485963631004-f2f00b1d6606?auto=format&fit=crop&w=600&q=80" alt="Traditional Sides" />
            </div>
            <div className="menu-item-content">
              <h3>Traditional Sides</h3>
              <p>Authentic South African sides to complement your main course</p>
            </div>
          </div>
        </div>
        <div className="menu-cta">
          <Link to="/services" className="cta-btn">View Full Menu</Link>
        </div>
      </section>

      <section className="gallery-section" id="gallery">
        <h2 className="section-title">Events Gallery</h2>
        <p className="section-subtitle">Take a look at some of our recent events and creations</p>
        <div className="gallery-grid">
          <div className="gallery-item large">
            <img src="https://images.unsplash.com/photo-1529565214304-a882ebc5a8e7?auto=format&fit=crop&w=800&q=80" alt="Wedding catering setup" />
            <div className="gallery-overlay">
              <span>Wedding Reception</span>
            </div>
          </div>
          <div className="gallery-item">
            <img src="https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?auto=format&fit=crop&w=600&q=80" alt="Corporate event" />
            <div className="gallery-overlay">
              <span>Corporate Event</span>
            </div>
          </div>
          <div className="gallery-item">
            <img src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80" alt="Food preparation" />
            <div className="gallery-overlay">
              <span>Chef in Action</span>
            </div>
          </div>
          <div className="gallery-item">
            <img src="https://images.unsplash.com/photo-1529694157872-4e0c0f3b238b?auto=format&fit=crop&w=600&q=80" alt="Spit roast" />
            <div className="gallery-overlay">
              <span>Spit Braai Setup</span>
            </div>
          </div>
          <div className="gallery-item">
            <img src="https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=600&q=80" alt="Family gathering" />
            <div className="gallery-overlay">
              <span>Family Gathering</span>
            </div>
          </div>
        </div>
        <div className="gallery-cta">
          <Link to="/gallery" className="cta-btn">View Full Gallery</Link>
        </div>
      </section>

      <section className="testimonials-section">
        <h2 className="section-title">What Our Clients Say</h2>
        <div className="testimonials-container">
          <div className="testimonial">
            <div className="testimonial-content">
              <p>"The spit-roasted lamb was absolutely incredible. Our wedding guests couldn't stop talking about how amazing the food was!"</p>
            </div>
            <div className="testimonial-author">
              <img src="https://randomuser.me/api/portraits/women/65.jpg" alt="Sarah M." />
              <div>
                <h4>Sarah M.</h4>
                <p>Wedding Client</p>
              </div>
            </div>
          </div>
          <div className="testimonial">
            <div className="testimonial-content">
              <p>"Professional service from start to finish. The team handled everything perfectly for our corporate event of 150 people."</p>
            </div>
            <div className="testimonial-author">
              <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="David L." />
              <div>
                <h4>David L.</h4>
                <p>Corporate Client</p>
              </div>
            </div>
          </div>
          <div className="testimonial">
            <div className="testimonial-content">
              <p>"Authentic South African flavors that transported me back home. Will definitely be using Split Braai for all our future events!"</p>
            </div>
            <div className="testimonial-author">
              <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Michelle K." />
              <div>
                <h4>Michelle K.</h4>
                <p>Birthday Party</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-container">
          <div className="contact-info">
            <h2 className="section-title">Contact / Booking</h2>
            <p>Ready to create an unforgettable event with authentic South African cuisine? Get in touch with us today!</p>
            <div className="contact-details">
              <div className="contact-detail">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.1 1 .33 2.1.7 3.1a2 2 0 01-.45 2.1l-1.27 1.27a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c1 .38 2.03.6 3.09.7a2 2 0 011.72 2z"></path>
                </svg>
                <span>+27 72 123 4567</span>
              </div>
              <div className="contact-detail">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <span>info@splitbraai.co.za</span>
              </div>
              <div className="contact-detail">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span>Cape Town & Helderberg, South Africa</span>
              </div>
            </div>
            <div className="contact-cta">
              <a href="https://wa.me/27721234567" target="_blank" rel="noopener noreferrer" className="whatsapp-btn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.4 14.24c-.32-.16-1.9-.94-2.2-1.04-.3-.1-.52-.16-.73.16-.22.3-.84.94-1.03 1.14-.2.2-.39.22-.72.08-.32-.16-1.37-.5-2.6-1.6-.96-.86-1.6-1.92-1.8-2.24-.18-.32-.02-.5.14-.66.14-.14.32-.36.48-.54.16-.18.2-.3.3-.52.1-.2.06-.4-.02-.54-.08-.16-.74-1.78-1-2.44-.28-.64-.54-.54-.74-.54-.2 0-.42-.02-.64-.02s-.6.08-.9.4c-.32.3-1.2 1.18-1.2 2.88 0 1.7 1.24 3.34 1.4 3.56.18.22 2.48 3.78 6 5.3.84.36 1.5.58 2 .74.86.26 1.64.22 2.26.14.68-.1 2.1-.86 2.4-1.7.3-.84.3-1.54.2-1.7-.08-.16-.3-.24-.62-.4z"></path>
                </svg>
                WhatsApp Us
              </a>
              <a href="tel:+27721234567" className="call-btn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.1 1 .33 2.1.7 3.1a2 2 0 01-.45 2.1l-1.27 1.27a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c1 .38 2.03.6 3.09.7a2 2 0 011.72 2z"></path>
                </svg>
                Call Now
              </a>
            </div>
          </div>
          <form className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Your Email" required />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input type="tel" id="phone" placeholder="Phone Number" />
              </div>
              <div className="form-group">
                <label htmlFor="event-date">Event Date</label>
                <input type="date" id="event-date" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="event-type">Event Type</label>
              <select id="event-type">
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
              <textarea id="message" placeholder="Event details or message" rows="4" required></textarea>
            </div>
            <button type="submit" className="submit-btn">Send Inquiry</button>
          </form>
        </div>
      </section>
    </section>
  );
}

export default Home;