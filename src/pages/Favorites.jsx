import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import properties from "../data/properties";
import PropertyCard from "../components/PropertyCard";
import "./Favorites.css";

function Favorites() {
  const [favoriteIds, setFavoriteIds] = useState([]);

  const loadFavorites = () => {
    const saved =
      JSON.parse(localStorage.getItem("estatepro-favorites")) || [];

    setFavoriteIds(saved);
  };

  useEffect(() => {
    loadFavorites();

    window.addEventListener("favoritesUpdated", loadFavorites);

    return () => {
      window.removeEventListener(
        "favoritesUpdated",
        loadFavorites
      );
    };
  }, []);

  const favoriteProperties = properties.filter((property) =>
    favoriteIds.includes(property.id)
  );

  return (
    <main className="favorites-page">
      <div className="favorites-container">

        <div className="favorites-header">
          <div>
            <span className="favorites-label">
              YOUR COLLECTION
            </span>

            <h1>Favorite Properties</h1>

            <p>
              {favoriteProperties.length === 0
                ? "You haven't saved any properties yet."
                : `${favoriteProperties.length} ${
                    favoriteProperties.length === 1
                      ? "property"
                      : "properties"
                  } saved`}
            </p>
          </div>

          <Link to="/properties" className="browse-properties-btn">
            Browse Properties →
          </Link>
        </div>

        {favoriteProperties.length > 0 ? (
          <div className="favorites-grid">
            {favoriteProperties.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
              />
            ))}
          </div>
        ) : (
          <div className="empty-favorites">
            <div className="empty-heart">♡</div>

            <h2>No Favorites Yet</h2>

            <p>
              Save properties you love by clicking the heart
              icon on any property card.
            </p>

            <Link
              to="/properties"
              className="browse-empty-btn"
            >
              Explore Properties
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}

export default Favorites;