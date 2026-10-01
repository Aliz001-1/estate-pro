import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import properties from "../data/properties";
import "./PropertyDetails.css";

function PropertyDetails() {
  const { id } = useParams();

  const property = properties.find(
    (item) => item.id === Number(id)
  );

  const [activeImage, setActiveImage] = useState(0);

  if (!property) {
    return (
      <main className="property-not-found">
        <div>
          <span>404</span>
          <h1>Property Not Found</h1>
          <p>
            The property you're looking for doesn't exist
            or may have been removed.
          </p>

          <Link to="/properties">
            ← Back to Properties
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="property-details-page">

      {/* Breadcrumb */}

      <div className="details-container">

        <div className="breadcrumb">
          <Link to="/">Home</Link>
          <span>/</span>
          <Link to="/properties">Properties</Link>
          <span>/</span>
          <strong>{property.title}</strong>
        </div>

        {/* Gallery */}

        <section className="property-gallery">

          <div className="main-image">

            <img
              src={property.images[activeImage]}
              alt={property.title}
            />

            <div className="gallery-badge">
              {property.purpose === "Sale"
                ? "For Sale"
                : "For Rent"}
            </div>

            <button
              className="gallery-arrow prev"
              onClick={() =>
                setActiveImage(
                  activeImage === 0
                    ? property.images.length - 1
                    : activeImage - 1
                )
              }
            >
              ‹
            </button>

            <button
              className="gallery-arrow next"
              onClick={() =>
                setActiveImage(
                  activeImage === property.images.length - 1
                    ? 0
                    : activeImage + 1
                )
              }
            >
              ›
            </button>

          </div>

          <div className="thumbnail-row">

            {property.images.map((image, index) => (
              <button
                key={image}
                className={
                  activeImage === index
                    ? "thumbnail active"
                    : "thumbnail"
                }
                onClick={() => setActiveImage(index)}
              >
                <img
                  src={image}
                  alt={`${property.title} ${index + 1}`}
                />
              </button>
            ))}

          </div>

        </section>

        {/* Main Information */}

        <section className="property-main">

          <div className="property-info">

            <div className="property-title-row">

              <div>

                <span className="details-type">
                  {property.type}
                </span>

                <h1>{property.title}</h1>

                <p className="details-location">
                  📍 {property.location}
                </p>

              </div>

              <div className="details-price">
                {property.priceLabel}
              </div>

            </div>

            {/* Property Stats */}

            <div className="details-stats">

              <div>
                <span>🛏</span>
                <strong>{property.bedrooms}</strong>
                <small>Bedrooms</small>
              </div>

              <div>
                <span>🚿</span>
                <strong>{property.bathrooms}</strong>
                <small>Bathrooms</small>
              </div>

              <div>
                <span>📐</span>
                <strong>{property.area}</strong>
                <small>Sq Ft</small>
              </div>

              <div>
                <span>🏠</span>
                <strong>{property.type}</strong>
                <small>Property Type</small>
              </div>

            </div>

            {/* Description */}

            <div className="details-section">

              <h2>About This Property</h2>

              <p>{property.description}</p>

            </div>

            {/* Amenities */}

            <div className="details-section">

              <h2>Property Amenities</h2>

              <div className="amenities-grid">

                {property.amenities.map((amenity) => (
                  <div
                    className="amenity"
                    key={amenity}
                  >
                    <span>✓</span>
                    {amenity}
                  </div>
                ))}

              </div>

            </div>

          </div>

          {/* Agent */}

          <aside className="agent-card">

            <div className="agent-header">
              <span>LISTED BY</span>
              <h3>Property Agent</h3>
            </div>

            <img
              src={property.agent.image}
              alt={property.agent.name}
              className="agent-image"
            />

            <h3>{property.agent.name}</h3>

            <p className="agent-role">
              {property.agent.role}
            </p>

            <div className="agent-contact">

              <a href={`tel:${property.agent.phone}`}>
                📞 {property.agent.phone}
              </a>

              <a href={`mailto:${property.agent.email}`}>
                ✉ {property.agent.email}
              </a>

            </div>

            <div className="agent-buttons">

              <a
                href={`tel:${property.agent.phone}`}
                className="call-agent"
              >
                Call Agent
              </a>

              <a
                href={`https://wa.me/${property.agent.phone.replace(
                  /\D/g,
                  ""
                )}`}
                target="_blank"
                rel="noreferrer"
                className="whatsapp-agent"
              >
                WhatsApp
              </a>

            </div>

          </aside>

        </section>

      </div>

    </main>
  );
}

export default PropertyDetails;