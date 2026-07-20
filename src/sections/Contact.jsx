import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => {
      setStatus('sent');
      setForm({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    }, 800);
  };

  return (
    <section id="contact" className="contact section">
      <div className="container section-title" data-aos="fade-up">
        <span className="eyebrow">Let's Talk</span>
        <h2>Contact</h2>
        <p>It's easy to get in touch with me</p>
      </div>

      <div className="container">
        <div className="row gy-4">
          {/* Left Column - Info & Map */}
          <div className="col-lg-5">
            <div className="info-wrap">
              {/* Address */}
              <div className="info-item d-flex">
                <i className="bi bi-geo-alt flex-shrink-0"></i>
                <div>
                  <h3>Address</h3>
                  <p>Phnom Penh, Cambodia</p>
                </div>
              </div>

              {/* Phone */}
              <div className="info-item d-flex">
                <i className="bi bi-telephone flex-shrink-0"></i>
                <div>
                  <h3>Call Us</h3>
                  <p>+855 123 456 789</p>
                </div>
              </div>

              {/* Email */}
              <div className="info-item d-flex">
                <i className="bi bi-envelope flex-shrink-0"></i>
                <div>
                  <h3>Email Us</h3>
                  <p>chheangsamnang.wu@gmail.com</p>
                </div>
              </div>

              {/* ==========================================
                  PREMIUM ANIMATED MAP - Phnom Penh
                  ========================================== */}
              <div className="map-premium-wrapper">
                {/* Floating Particles */}
                <div className="map-particles">
                  <span className="particle p1">✦</span>
                  <span className="particle p2">◆</span>
                  <span className="particle p3">✦</span>
                  <span className="particle p4">◆</span>
                  <span className="particle p5">✦</span>
                </div>

                {/* Map Container */}
                <div className="map-premium-container">
                  {/* Outer Glow */}
                  <div className="map-outer-glow"></div>

                  {/* Animated Border */}
                  <div className="map-border-premium">
                    {/* Corner Decorations */}
                    <div className="corner-deco tl">
                      <svg viewBox="0 0 30 30">
                        <path d="M2 2 L28 2 L28 6 L6 6 L6 28 L2 28 Z" fill="none" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                    </div>
                    <div className="corner-deco tr">
                      <svg viewBox="0 0 30 30">
                        <path d="M2 2 L28 2 L28 6 L6 6 L6 28 L2 28 Z" fill="none" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                    </div>
                    <div className="corner-deco bl">
                      <svg viewBox="0 0 30 30">
                        <path d="M2 2 L28 2 L28 6 L6 6 L6 28 L2 28 Z" fill="none" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                    </div>
                    <div className="corner-deco br">
                      <svg viewBox="0 0 30 30">
                        <path d="M2 2 L28 2 L28 6 L6 6 L6 28 L2 28 Z" fill="none" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                    </div>

                    {/* Map Inside */}
                    <div className="map-inner-premium">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125478.456789!2d104.839!3d11.556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109513dc76c6d0b%3A0x9c0c1a1b8f0e0!2sPhnom%20Penh%2C%20Cambodia!5e0!3m2!1sen!2sus!4v1700000000000"
                        frameBorder="0"
                        className="map-iframe-premium"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Phnom Penh, Cambodia Map"
                      />

                      {/* Gradient Overlay */}
                      <div className="map-overlay-premium"></div>

                      {/* Location Card */}
                      <div className="map-location-card">
                        <div className="map-pin">
                          <i className="bi bi-geo-alt-fill"></i>
                          <span className="pin-ring"></span>
                          <span className="pin-ring pin-ring-2"></span>
                        </div>
                        <div className="map-info-text">
                          <h4>📍 Phnom Penh, Cambodia</h4>
                          <p>Capital City of Cambodia</p>
                        </div>
                        <a 
                          href="https://maps.app.goo.gl/R8EcXCibBDLiNzNe9" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="map-cta-btn"
                          aria-label="Open in Google Maps"
                        >
                          <i className="bi bi-arrow-up-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="col-lg-7">
            <form onSubmit={handleSubmit} className="php-email-form">
              <div className="row gy-4">
                <div className="col-md-6">
                  <label htmlFor="name-field" className="pb-2">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name-field"
                    className="form-control"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                  />
                </div>

                <div className="col-md-6">
                  <label htmlFor="email-field" className="pb-2">Your Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email-field"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                  />
                </div>

                <div className="col-md-12">
                  <label htmlFor="subject-field" className="pb-2">Subject</label>
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    id="subject-field"
                    value={form.subject}
                    onChange={handleChange}
                    required
                    placeholder="Project Inquiry"
                  />
                </div>

                <div className="col-md-12">
                  <label htmlFor="message-field" className="pb-2">Message</label>
                  <textarea
                    className="form-control"
                    name="message"
                    rows="8"
                    id="message-field"
                    value={form.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                <div className="col-md-12 text-center">
                  {status === 'loading' && (
                    <div className="loading">
                      <span className="spinner"></span> Sending...
                    </div>
                  )}
                  {status === 'error' && (
                    <div className="error-message">
                      <i className="bi bi-exclamation-circle"></i> Something went wrong. Please try again.
                    </div>
                  )}
                  {status === 'sent' && (
                    <div className="sent-message">
                      <i className="bi bi-check-circle"></i> Your message has been sent. Thank you!
                    </div>
                  )}

                  <button 
                    type="submit" 
                    disabled={status === 'loading'}
                    className={status === 'loading' ? 'btn-loading' : ''}
                  >
                    {status === 'loading' ? (
                      <>
                        <span className="btn-spinner"></span> Sending...
                      </>
                    ) : (
                      <>
                        <i className="bi bi-send"></i> Send Message
                      </>
                    )}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}