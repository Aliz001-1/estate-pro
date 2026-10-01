import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="contact-page">

      {/* HERO */}
      <section className="contact-hero">
        <div className="contact-hero-content">
          <span className="contact-label">GET IN TOUCH</span>

          <h1>
            Let's Talk About
            <span> Your Property.</span>
          </h1>

          <p>
            Have a question, need help finding a property, or want
            to list your property? Our team is ready to help.
          </p>
        </div>
      </section>


      {/* CONTACT SECTION */}
      <section className="contact-section">
        <div className="contact-container">

          <div className="contact-grid">

            {/* LEFT SIDE */}
            <div className="contact-info">

              <span className="section-label">
                CONTACT ESTATEPRO
              </span>

              <h2>
                We would love to
                <span> hear from you.</span>
              </h2>

              <p className="contact-description">
                Whether you are buying, renting, selling, or simply
                exploring your options, feel free to get in touch
                with our team.
              </p>


              <div className="contact-details">

                <div className="contact-detail">
                  <div className="contact-icon">
                    ✉
                  </div>

                  <div>
                    <span>Email</span>
                    <a href="mailto:hello@estatepro.com">
                      hello@estatepro.com
                    </a>
                  </div>
                </div>


                <div className="contact-detail">
                  <div className="contact-icon">
                    ☎
                  </div>

                  <div>
                    <span>Phone</span>
                    <a href="tel:+923001234567">
                      +92 300 1234567
                    </a>
                  </div>
                </div>


                <div className="contact-detail">
                  <div className="contact-icon">
                    ⌖
                  </div>

                  <div>
                    <span>Office</span>
                    <p>
                      Main Boulevard, Karachi,
                      Pakistan
                    </p>
                  </div>
                </div>


                <div className="contact-detail">
                  <div className="contact-icon">
                    ◷
                  </div>

                  <div>
                    <span>Working Hours</span>
                    <p>
                      Monday – Saturday
                      <br />
                      9:00 AM – 6:00 PM
                    </p>
                  </div>
                </div>

              </div>

            </div>


            {/* FORM */}
            <div className="contact-form-card">

              {submitted ? (
                <div className="contact-success">

                  <div className="success-icon">
                    ✓
                  </div>

                  <h3>
                    Message Sent!
                  </h3>

                  <p>
                    Thank you for contacting EstatePro.
                    Our team will get back to you soon.
                  </p>

                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                  >
                    Send Another Message
                  </button>

                </div>
              ) : (
                <>
                  <div className="form-heading">
                    <h3>
                      Send us a message
                    </h3>

                    <p>
                      Fill out the form and our team will
                      contact you shortly.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit}>

                    <div className="form-row">

                      <div className="form-group">
                        <label htmlFor="name">
                          Full Name
                        </label>

                        <input
                          id="name"
                          type="text"
                          placeholder="Your name"
                          required
                        />
                      </div>


                      <div className="form-group">
                        <label htmlFor="email">
                          Email Address
                        </label>

                        <input
                          id="email"
                          type="email"
                          placeholder="you@example.com"
                          required
                        />
                      </div>

                    </div>


                    <div className="form-row">

                      <div className="form-group">
                        <label htmlFor="phone">
                          Phone Number
                        </label>

                        <input
                          id="phone"
                          type="tel"
                          placeholder="+92 300 1234567"
                        />
                      </div>


                      <div className="form-group">
                        <label htmlFor="subject">
                          Subject
                        </label>

                        <select
                          id="subject"
                          defaultValue=""
                          required
                        >
                          <option value="" disabled>
                            Select a subject
                          </option>

                          <option value="buy">
                            Buying a Property
                          </option>

                          <option value="rent">
                            Renting a Property
                          </option>

                          <option value="sell">
                            Selling a Property
                          </option>

                          <option value="agent">
                            Contact an Agent
                          </option>

                          <option value="other">
                            Other
                          </option>
                        </select>
                      </div>

                    </div>


                    <div className="form-group">
                      <label htmlFor="message">
                        Message
                      </label>

                      <textarea
                        id="message"
                        rows="6"
                        placeholder="Tell us how we can help..."
                        required
                      ></textarea>
                    </div>


                    <button
                      type="submit"
                      className="contact-submit"
                    >
                      Send Message
                      <span>→</span>
                    </button>

                  </form>
                </>
              )}

            </div>

          </div>

        </div>
      </section>


      {/* CTA */}
      <section className="contact-cta">
        <div className="contact-cta-content">

          <span className="contact-label">
            FIND YOUR NEXT PROPERTY
          </span>

          <h2>
            Ready to find
            <span> your place?</span>
          </h2>

          <p>
            Explore our latest property listings and discover
            something that feels right for you.
          </p>

          <a
            href="/properties"
            className="contact-cta-btn"
          >
            Browse Properties →
          </a>

        </div>
      </section>

    </main>
  );
}

export default Contact;