import { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  const [listingType, setListingType] = useState("Buy");

  return (
    <main className="home">

      {/* Hero Section */}
      <section className="hero">

        <div className="hero-overlay"></div>

        <div className="hero-content">

          <span className="hero-tag">FIND YOUR PERFECT PLACE</span>

          <h1>
            Find a Place You'll
            <br />
            <span>Love to Live.</span>
          </h1>

          <p>
            Discover beautiful homes, apartments and properties
            in the locations you love.
          </p>

          {/* Search Box */}
          <div className="search-box">

            <div className="listing-toggle">
              <button
                className={listingType === "Buy" ? "active" : ""}
                onClick={() => setListingType("Buy")}
              >
                Buy
              </button>

              <button
                className={listingType === "Rent" ? "active" : ""}
                onClick={() => setListingType("Rent")}
              >
                Rent
              </button>
            </div>

            <div className="search-fields">

              <div className="search-field">
                <label>Location</label>
                <input
                  type="text"
                  placeholder="City or area"
                />
              </div>

              <div className="search-field">
                <label>Property Type</label>

                <select>
                  <option>All Types</option>
                  <option>House</option>
                  <option>Apartment</option>
                  <option>Villa</option>
                  <option>Commercial</option>
                </select>
              </div>

              <div className="search-field">
                <label>Price</label>

                <select>
                  <option>Any Price</option>
                  <option>Under $100k</option>
                  <option>$100k - $300k</option>
                  <option>$300k - $500k</option>
                  <option>$500k+</option>
                </select>
              </div>

              <Link to="/properties" className="search-btn">
                Search
              </Link>

            </div>
          </div>

        </div>
      </section>

      {/* Stats */}
      <section className="stats">

        <div className="stat">
          <h2>2,500+</h2>
          <p>Properties Listed</p>
        </div>

        <div className="stat">
          <h2>1,200+</h2>
          <p>Happy Clients</p>
        </div>

        <div className="stat">
          <h2>150+</h2>
          <p>Trusted Agents</p>
        </div>

        <div className="stat">
          <h2>25+</h2>
          <p>Locations</p>
        </div>

      </section>

      {/* Featured Section */}
      <section className="featured">

        <div className="section-heading">
          <div>
            <span>EXPLORE PROPERTIES</span>
            <h2>Featured Properties</h2>
          </div>

          <Link to="/properties">
            View All Properties →
          </Link>
        </div>

        <div className="featured-placeholder">

          <div>
            <h3>Beautiful Properties Await</h3>

            <p>
              Explore our collection of premium homes,
              apartments and villas.
            </p>

            <Link to="/properties">
              Explore Properties
            </Link>
          </div>

        </div>

      </section>

    </main>
  );
}

export default Home;