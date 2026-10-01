import { Link } from "react-router-dom";
import "./About.css";

function About() {
  return (
    <main className="about-page">

      {/* HERO */}
      <section className="about-hero">
        <div className="about-hero-content">
          <span className="about-label">ABOUT ESTATEPRO</span>

          <h1>
            Making Property
            <span> Search Simpler.</span>
          </h1>

          <p>
            EstatePro is a modern real estate platform designed to
            make discovering, comparing, and connecting with
            properties easier.
          </p>
        </div>
      </section>


      {/* WHO WE ARE */}
      <section className="about-intro">
        <div className="about-container">

          <div className="about-intro-grid">

            <div className="about-image">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1000&q=80"
                alt="Modern property"
              />

              <div className="about-image-card">
                <strong>10+</strong>
                <span>Years of Experience</span>
              </div>
            </div>

            <div className="about-intro-content">
              <span className="section-label">
                WHO WE ARE
              </span>

              <h2>
                A smarter way to
                <span> find your place.</span>
              </h2>

              <p>
                EstatePro brings buyers, renters, property owners,
                and real estate professionals together in one
                convenient platform.
              </p>

              <p>
                Whether you are looking for a family home, a modern
                apartment, a luxury property, or an investment
                opportunity, our platform helps you explore
                properties with confidence.
              </p>

              <Link
                to="/properties"
                className="about-primary-btn"
              >
                Explore Properties →
              </Link>
            </div>

          </div>

        </div>
      </section>


      {/* STATS */}
      <section className="about-stats">
        <div className="about-container">

          <div className="stats-grid">

            <div className="about-stat">
              <strong>500+</strong>
              <span>Properties Listed</span>
            </div>

            <div className="about-stat">
              <strong>50+</strong>
              <span>Professional Agents</span>
            </div>

            <div className="about-stat">
              <strong>15+</strong>
              <span>Cities Covered</span>
            </div>

            <div className="about-stat">
              <strong>2K+</strong>
              <span>Happy Clients</span>
            </div>

          </div>

        </div>
      </section>


      {/* WHY CHOOSE US */}
      <section className="about-features">
        <div className="about-container">

          <div className="features-heading">
            <span className="section-label">
              WHY ESTATEPRO
            </span>

            <h2>
              Everything you need to
              <span> move forward.</span>
            </h2>

            <p>
              We focus on making the property journey simple,
              transparent, and convenient.
            </p>
          </div>


          <div className="features-grid">

            <article className="feature-card">
              <div className="feature-icon">⌕</div>

              <h3>Easy Property Search</h3>

              <p>
                Find properties quickly using location, type,
                price, bedrooms, and other useful filters.
              </p>
            </article>


            <article className="feature-card">
              <div className="feature-icon">✓</div>

              <h3>Verified Information</h3>

              <p>
                Explore detailed property information so you can
                make informed decisions.
              </p>
            </article>


            <article className="feature-card">
              <div className="feature-icon">♧</div>

              <h3>Expert Agents</h3>

              <p>
                Connect with experienced property professionals
                who understand the local market.
              </p>
            </article>


            <article className="feature-card">
              <div className="feature-icon">♡</div>

              <h3>Save Your Favorites</h3>

              <p>
                Save properties you like and easily come back to
                them whenever you want.
              </p>
            </article>

          </div>

        </div>
      </section>


      {/* CTA */}
      <section className="about-cta">
        <div className="about-cta-content">

          <span className="about-label">
            START YOUR SEARCH
          </span>

          <h2>
            Your next property
            <span> could be here.</span>
          </h2>

          <p>
            Explore our property collection and discover a place
            that feels right for you.
          </p>

          <Link
            to="/properties"
            className="about-cta-btn"
          >
            Browse Properties →
          </Link>

        </div>
      </section>

    </main>
  );
}

export default About;