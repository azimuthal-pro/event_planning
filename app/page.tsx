export default function HomePage() {
  return (
    <>
      <header className="site-header">
        <div className="header-container">
          <div className="brand">
            <span className="brand-mark">C</span>
            <span className="brand-text">
              <strong>Cynthia Wilson</strong>
              <span className="brand-subtitle">Signature Events</span>
            </span>
          </div>
          <nav className="site-nav" aria-label="Primary">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#resources">Resources</a>
            <a href="#faq">FAQ</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-content">
            <div className="hero-copy">
              <span className="eyebrow">Luxury Event Planning</span>
              <h1>Memorable celebrations, flawlessly designed.</h1>
              <p>
                From intimate gatherings to elaborate galas, we create bespoke events that reflect your vision and exceed expectations.
              </p>
              <div className="hero-actions">
                <a href="#services" className="button primary">
                  Explore Services
                </a>
                <a href="#contact" className="button secondary">
                  Start Planning
                </a>
              </div>
            </div>
            <div className="hero-media">
              <img
                className="hero-image"
                src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80"
                alt="Elegant wedding event decor"
              />
              <div className="hero-stats">
                <div className="stat-box">
                  <div className="stat-number">500+</div>
                  <div className="stat-label">Events Planned</div>
                </div>
                <div className="stat-box">
                  <div className="stat-number">98%</div>
                  <div className="stat-label">Client Satisfaction</div>
                </div>
                <div className="stat-box">
                  <div className="stat-number">15+</div>
                  <div className="stat-label">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section about-section">
          <div className="about-wrapper">
            <div className="about-content">
              <span className="eyebrow">Who We Are</span>
              <h2>Cynthia's Vision</h2>
              <p>
                With 15 years of experience in luxury event production, Cynthia Wilson Signature Events has become synonymous with sophisticated celebrations that are both memorable and flawlessly executed.
              </p>
              <p>
                We specialize in understanding your vision and transforming it into an unforgettable experience. From initial concept through final execution, our team manages every detail with precision and creativity.
              </p>
              <div className="about-features">
                <div className="feature">
                  <strong>Personalized Planning</strong>
                  <span>Tailored strategies for each unique celebration</span>
                </div>
                <div className="feature">
                  <strong>Vendor Excellence</strong>
                  <span>Curated partnerships with top-tier professionals</span>
                </div>
                <div className="feature">
                  <strong>Flawless Execution</strong>
                  <span>Day-of coordination that ensures perfection</span>
                </div>
              </div>
            </div>
            <div className="about-image">
              <img
                className="about-photo"
                src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1000&q=80"
                alt="Elegant event planning and floral styling"
              />
            </div>
          </div>
        </section>

      <section id="services" className="section services-section">
        <div className="section-header">
          <p className="eyebrow">What we do</p>
          <h2>Signature event planning for every occasion</h2>
        </div>

        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">💍</div>
            <h3>Weddings</h3>
            <p>From intimate ceremonies to grand celebrations, we craft unforgettable wedding experiences tailored to your love story.</p>
            <ul>
              <li>Venue selection & styling</li>
              <li>Full vendor coordination</li>
              <li>Day-of management</li>
            </ul>
          </div>
          <div className="service-card">
            <div className="service-icon">🎯</div>
            <h3>Corporate Events</h3>
            <p>Brand-aligned experiences that leave lasting impressions on clients, employees, and stakeholders.</p>
            <ul>
              <li>Conference planning</li>
              <li>Product launches</li>
              <li>Executive galas</li>
            </ul>
          </div>
          <div className="service-card">
            <div className="service-icon">🥂</div>
            <h3>Private Celebrations</h3>
            <p>Milestone moments deserve exceptional attention. We create bespoke celebrations that honor your special occasion.</p>
            <ul>
              <li>Birthday galas</li>
              <li>Anniversary parties</li>
              <li>Milestone events</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="portfolio" className="section portfolio-section">
        <div className="section-header">
          <p className="eyebrow">Portfolio</p>
          <h2>Elegant events crafted for modern celebrations.</h2>
        </div>

        <div className="portfolio-grid">
          <div className="portfolio-card">
            <img
              src="https://images.unsplash.com/photo-1526045612212-70caf35c14df?auto=format&fit=crop&w=900&q=80"
              alt="Romantic wedding ceremony setup"
            />
            <span>Wedding Ceremony</span>
          </div>
          <div className="portfolio-card">
            <img
              src="https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=900&q=80"
              alt="Corporate event celebration"
            />
            <span>Corporate Gala</span>
          </div>
          <div className="portfolio-card">
            <img
              src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=900&q=80"
              alt="Dinner party table setup"
            />
            <span>Private Celebration</span>
          </div>
          <div className="portfolio-card">
            <img
              src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=900&q=80"
              alt="Luxury floral event styling"
            />
            <span>Floral Styling</span>
          </div>
        </div>
      </section>

      <section id="resources" className="section resources-section">
        <div className="section-header">
          <p className="eyebrow">Resources</p>
          <h2>Planning tips, trends, and inspiration for your special event.</h2>
        </div>

        <div className="resources-grid">
          <article className="resource-card">
            <img
              src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=800&q=80"
              alt="Wedding planning checklist"
            />
            <div className="resource-content">
              <span className="resource-category">Planning Guide</span>
              <h3>12-Month Wedding Planning Timeline</h3>
              <p>A comprehensive guide to planning your dream wedding from engagement to the big day.</p>
              <a href="#" className="resource-link">Read More →</a>
            </div>
          </article>

          <article className="resource-card">
            <img
              src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=800&q=80"
              alt="Event trends"
            />
            <div className="resource-content">
              <span className="resource-category">Trends</span>
              <h3>2026 Event Design Trends</h3>
              <p>Discover the latest colors, themes, and decor ideas shaping modern celebrations.</p>
              <a href="#" className="resource-link">Read More →</a>
            </div>
          </article>

          <article className="resource-card">
            <img
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80"
              alt="Corporate event planning"
            />
            <div className="resource-content">
              <span className="resource-category">Corporate</span>
              <h3>Corporate Event Success Stories</h3>
              <p>Case studies from successful corporate launches, galas, and team-building events.</p>
              <a href="#" className="resource-link">Read More →</a>
            </div>
          </article>
        </div>

        <div className="newsletter-signup">
          <div className="newsletter-content">
            <h3>Stay Inspired</h3>
            <p>Get monthly planning tips, trend updates, and exclusive event inspiration delivered to your inbox.</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Enter your email" required />
              <button type="submit" className="button primary">Subscribe</button>
            </form>
          </div>
        </div>
      </section>

      <section id="faq" className="section faq-section">
        <div className="section-header">
          <p className="eyebrow">FAQ</p>
          <h2>Answers to common planning questions.</h2>
        </div>

        <div className="faq-grid">
          <div className="faq-item">
            <h3>How far in advance should I book?</h3>
            <p>We recommend booking at least 6-12 months before your event to secure top venues and vendors, especially for peak season dates.</p>
          </div>
          <div className="faq-item">
            <h3>Can you work with our existing vendors?</h3>
            <p>Absolutely. We welcome your preferred vendors and can collaborate closely with them to ensure a seamless event experience.</p>
          </div>
          <div className="faq-item">
            <h3>What types of events do you plan?</h3>
            <p>We plan weddings, corporate gatherings, milestone celebrations, launch events, and intimate private parties with full-service care.</p>
          </div>
        </div>
      </section>

      <section id="process" className="section process">
        <div className="section-header">
          <p className="eyebrow">How we work</p>
          <h2>A thoughtful process from first call to final celebration.</h2>
        </div>

        <div className="process-grid">
          <div className="card">
            <h3>Discover</h3>
            <p>We listen to your goals, style, and budget so we can tailor an event that feels uniquely yours.</p>
          </div>
          <div className="card">
            <h3>Create</h3>
            <p>Design, sourcing, and logistics are handled with precision so your event is elegant and effortless.</p>
          </div>
          <div className="card">
            <h3>Deliver</h3>
            <p>On-site coordination ensures everything runs smoothly and your guests enjoy every moment.</p>
          </div>
        </div>
      </section>

      <section id="testimonials" className="section testimonials">
        <div className="section-header">
          <p className="eyebrow">Testimonials</p>
          <h2>Client stories that reflect our care and creativity.</h2>
        </div>

        <div className="testimonial-grid">
          <div className="testimonial-card">
            <p>
              “Cynthia took our wedding vision and made it feel more beautiful than we imagined. The day ran flawlessly,
              and every detail was stunning.”
            </p>
            <strong>— Maya &amp; Jordan</strong>
          </div>
          <div className="testimonial-card">
            <p>
              “The corporate launch felt polished and engaging. Cynthia’s team managed vendors and timing so we could
              focus on our guests.”
            </p>
            <strong>— Elena R., Brand Director</strong>
          </div>
        </div>
      </section>

      <section className="section testimonials-carousel">
        <div className="section-header">
          <p className="eyebrow">Client Love</p>
          <h2>What our clients say about their signature events.</h2>
        </div>

        <div className="testimonials-container">
          <div className="testimonial-slide active">
            <div className="testimonial-content">
              <blockquote>
                "Cynthia transformed our corporate gala into an unforgettable experience. Her attention to detail and creative vision exceeded our expectations. Our clients are still talking about it!"
              </blockquote>
              <cite>
                <strong>Sarah Chen</strong>
                <span>CEO, Tech Innovations Inc.</span>
              </cite>
            </div>
            <div className="testimonial-image">
              <img
                src="https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=300&q=80"
                alt="Sarah Chen"
              />
            </div>
          </div>

          <div className="testimonial-slide">
            <div className="testimonial-content">
              <blockquote>
                "Our wedding day was absolutely perfect. Cynthia handled every detail with such grace and professionalism. We couldn't have asked for a better planner."
              </blockquote>
              <cite>
                <strong>Michael & Jennifer Rodriguez</strong>
                <span>Happy Couple</span>
              </cite>
            </div>
            <div className="testimonial-image">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80"
                alt="Michael Rodriguez"
              />
            </div>
          </div>

          <div className="testimonial-slide">
            <div className="testimonial-content">
              <blockquote>
                "The milestone birthday party Cynthia planned for my mother was beyond our wildest dreams. Every guest left with memories they'll cherish forever."
              </blockquote>
              <cite>
                <strong>David Thompson</strong>
                <span>Grateful Son</span>
              </cite>
            </div>
            <div className="testimonial-image">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80"
                alt="David Thompson"
              />
            </div>
          </div>
        </div>

        <div className="testimonial-controls">
          <button className="testimonial-prev" aria-label="Previous testimonial">‹</button>
          <div className="testimonial-dots">
            <span className="dot active" data-slide="0"></span>
            <span className="dot" data-slide="1"></span>
            <span className="dot" data-slide="2"></span>
          </div>
          <button className="testimonial-next" aria-label="Next testimonial">›</button>
        </div>
      </section>

      <section className="section partners-section">
        <div className="section-header">
          <p className="eyebrow">Trusted Partners</p>
          <h2>Working with the best in the industry.</h2>
        </div>

        <div className="partners-grid">
          <div className="partner-category">
            <h3>Venues</h3>
            <div className="partner-logos">
              <div className="partner-logo">
                <span>Grand Ballroom</span>
              </div>
              <div className="partner-logo">
                <span>Riverside Gardens</span>
              </div>
              <div className="partner-logo">
                <span>Urban Loft</span>
              </div>
              <div className="partner-logo">
                <span>Seaside Resort</span>
              </div>
            </div>
          </div>

          <div className="partner-category">
            <h3>Catering</h3>
            <div className="partner-logos">
              <div className="partner-logo">
                <span>Gourmet Cuisine</span>
              </div>
              <div className="partner-logo">
                <span>Fine Dining Co.</span>
              </div>
              <div className="partner-logo">
                <span>Artisan Foods</span>
              </div>
              <div className="partner-logo">
                <span>Elite Catering</span>
              </div>
            </div>
          </div>

          <div className="partner-category">
            <h3>Services</h3>
            <div className="partner-logos">
              <div className="partner-logo">
                <span>Premier Photography</span>
              </div>
              <div className="partner-logo">
                <span>Luxe Florals</span>
              </div>
              <div className="partner-logo">
                <span>Sound & Light Pro</span>
              </div>
              <div className="partner-logo">
                <span>Event Transport</span>
              </div>
            </div>
          </div>
        </div>

        <div className="partners-cta">
          <p>Need recommendations for vendors? We have curated partnerships with the finest professionals in the industry.</p>
          <a href="#contact" className="button primary">Get Recommendations</a>
        </div>
      </section>

      <section className="section contact-section" id="contact">
        <div className="contact-copy">
          <p className="eyebrow">Contact</p>
          <h2>Let's create your next signature event.</h2>
          <p>
            Share a few details and we’ll be in touch with a tailored plan for your celebration.
          </p>
        </div>

        <div className="contact-card contact-grid">
          <form className="contact-form" action="mailto:hello@cynthiawsignatureevents.com" method="POST" encType="text/plain">
            <label>
              Name
              <input type="text" name="name" placeholder="Your name" required />
            </label>
            <label>
              Email
              <input type="email" name="email" placeholder="you@example.com" required />
            </label>
            <label>
              Phone
              <input type="tel" name="phone" placeholder="(123) 456-7890" />
            </label>
            <div className="form-row">
              <label>
                Event Date
                <input type="date" name="eventDate" required />
              </label>
              <label>
                Guest Count
                <input type="number" name="guestCount" placeholder="150" min="1" />
              </label>
            </div>
            <label>
              Budget
              <input type="text" name="budget" placeholder="e.g. $25,000" />
            </label>
            <label>
              Event details
              <textarea name="message" rows={5} placeholder="Tell us about your event" required />
            </label>
            <button type="submit" className="button primary">
              Send Message
            </button>
          </form>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-content">
          <p>© 2026 Cynthia Wilson Signature Events</p>
          <div className="social-links">
            <a href="https://instagram.com/cynthiawsignatureevents" className="social-link" aria-label="Follow us on Instagram">
              <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="https://facebook.com/cynthiawsignatureevents" className="social-link" aria-label="Follow us on Facebook">
              <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="https://linkedin.com/company/cynthia-wilson-signature-events" className="social-link" aria-label="Connect with us on LinkedIn">
              <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="https://twitter.com/cynthiawsevents" className="social-link" aria-label="Follow us on Twitter">
              <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
          </div>
        </div>
      </footer>
      </main>
    </>
  );
}
