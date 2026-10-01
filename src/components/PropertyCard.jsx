import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./PropertyCard.css";

function PropertyCard({ property }) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const savedFavorites =
      JSON.parse(localStorage.getItem("estatepro-favorites")) || [];

    setIsFavorite(savedFavorites.includes(property.id));
  }, [property.id]);

  const toggleFavorite = () => {
    const savedFavorites =
      JSON.parse(localStorage.getItem("estatepro-favorites")) || [];

    let updatedFavorites;

    if (savedFavorites.includes(property.id)) {
      updatedFavorites = savedFavorites.filter(
        (id) => id !== property.id
      );
      setIsFavorite(false);
    } else {
      updatedFavorites = [...savedFavorites, property.id];
      setIsFavorite(true);
    }

    localStorage.setItem(
      "estatepro-favorites",
      JSON.stringify(updatedFavorites)
    );

    window.dispatchEvent(new Event("favoritesUpdated"));
    
  };

  return (
    <article className="property-card">
      <div className="property-image">
        <img
          src={property.images[0]}
          alt={property.title}
        />

        <div className="property-badges">
          {property.featured && (
            <span className="featured-badge">Featured</span>
          )}

          <span className="purpose-badge">
            For {property.purpose}
          </span>
        </div>

        <button
          className={`favorite-button ${
            isFavorite ? "favorite-active" : ""
          }`}
          onClick={toggleFavorite}
          aria-label={
            isFavorite
              ? "Remove from favorites"
              : "Add to favorites"
          }
        >
          {isFavorite ? "♥" : "♡"}
        </button>
      </div>

      <div className="property-content">
        <span className="property-type">
          {property.type}
        </span>

        <h3>{property.title}</h3>

        <p className="property-location">
          📍 {property.location}
        </p>

        <div className="property-features">
          <span>🛏 {property.bedrooms} Beds</span>
          <span>🚿 {property.bathrooms} Baths</span>
          <span>📐 {property.area} sq ft</span>
        </div>

        <div className="property-bottom">
          <strong>{property.priceLabel}</strong>

          <Link to={`/properties/${property.id}`}>
            View Details →
          </Link>
        </div>
      </div>
    </article>
  );
}

export default PropertyCard;