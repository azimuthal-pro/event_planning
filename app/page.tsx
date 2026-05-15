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

      <section className="section contact-section" id="contact">
        <div className="contact-copy">
          <p className="eyebrow">Contact</p>
          <h2>Let's create your next signature event.</h2>
          <p>
            Share a few details and we’ll be in touch with a tailored plan for your celebration.
          </p>
        </div>

        <div className="contact-card contact-grid">
          <form
            className="contact-form"
            action="mailto:hello@cynthiawsignatureevents.com"
            method="POST"
            encType="text/plain"
          >
            <label>
              Name
              <input type="text" name="name" placeholder="Your name" required />
            </label>
            <label>
              Email
              <input type="email" name="email" placeholder="you@example.com" required />
            </label>
            <label>
              Event details
              <textarea name="message" rows={6} placeholder="Tell us about your event" required />
            </label>
            <button type="submit" className="button primary">
              Send Message
            </button>
          </form>
        </div>
      </section>

      <footer className="site-footer">
        <p>© 2026 Cynthia Wilson Signature Events</p>
      </footer>
      </main>
    </>
  );
}
