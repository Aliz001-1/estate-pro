import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">

      {/* Main Footer */}
      <div className="footer-container">

        {/* Brand */}
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            Estate<span>Pro</span>
          </Link>

          <p>
            Discover exceptional properties and find a place
            that truly feels like home.
          </p>

          <div className="footer-socials">
            <a href="#facebook" aria-label="Facebook">
              f
            </a>

            <a href="#instagram" aria-label="Instagram">
              ◎
            </a>

            <a href="#linkedin" aria-label="LinkedIn">
              in
            </a>

            <a href="#twitter" aria-label="Twitter">
              𝕏
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-column">
          <h3>Quick Links</h3>

          <Link to="/">Home</Link>
          <Link to="/properties">Properties</Link>
          <Link to="/agents">Our Agents</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* Property Links */}
        <div className="footer-column">
          <h3>Properties</h3>

          <Link to="/properties">For Sale</Link>
          <Link to="/properties">For Rent</Link>
          <Link to="/properties">Apartments</Link>
          <Link to="/properties">Houses</Link>
          <Link to="/properties">Villas</Link>
        </div>

        {/* Contact */}
        <div className="footer-column footer-contact">
          <h3>Get In Touch</h3>

          <div className="footer-contact-item">
            <span>📍</span>
            <p>
              123 Main Street,
              <br />
              Karachi, Pakistan
            </p>
          </div>

          <div className="footer-contact-item">
            <span>☎</span>
            <a href="tel:+923001234567">
              +92 300 1234567
            </a>
          </div>

          <div className="footer-contact-item">
            <span>✉</span>
            <a href="mailto:hello@estatepro.com">
              hello@estatepro.com
            </a>
          </div>
        </div>

      </div>

      {/* Newsletter */}
      <div className="footer-newsletter">
        <div className="footer-newsletter-container">

          <div>
            <span>STAY UPDATED</span>

            <h3>
              Get the latest property listings.
            </h3>
          </div>

          <form
            className="newsletter-form"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you for subscribing!");
            }}
          >
            <input
              type="email"
              placeholder="Enter your email address"
              required
            />

            <button type="submit">
              Subscribe →
            </button>
          </form>

        </div>
      </div>

      {/* Bottom Footer */}
      <div className="footer-bottom">

        <div className="footer-bottom-container">

          <p>
            © {currentYear} EstatePro. All rights reserved.
          </p>

          <div className="footer-legal">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;