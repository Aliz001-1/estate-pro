import { useMemo, useState } from "react";
import properties from "../data/properties";
import PropertyCard from "../components/PropertyCard";
import "./Properties.css";

function Properties() {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("All");
  const [purpose, setPurpose] = useState("All");
  const [bedrooms, setBedrooms] = useState("All");
  const [sortBy, setSortBy] = useState("");

  const filteredProperties = useMemo(() => {
    const results = properties.filter((property) => {
      const searchValue = search.toLowerCase().trim();

      const matchesSearch =
        property.title.toLowerCase().includes(searchValue) ||
        property.location.toLowerCase().includes(searchValue) ||
        property.city?.toLowerCase().includes(searchValue);

      const matchesType =
        type === "All" || property.type === type;

      const matchesPurpose =
        purpose === "All" || property.purpose === purpose;

      const matchesBedrooms =
        bedrooms === "All" ||
        property.bedrooms >= Number(bedrooms);

      return (
        matchesSearch &&
        matchesType &&
        matchesPurpose &&
        matchesBedrooms
      );
    });

    // Sort results
    if (sortBy === "low") {
      results.sort((a, b) => a.price - b.price);
    }

    if (sortBy === "high") {
      results.sort((a, b) => b.price - a.price);
    }

    if (sortBy === "large") {
      results.sort((a, b) => b.area - a.area);
    }

    return results;
  }, [search, type, purpose, bedrooms, sortBy]);

  const clearFilters = () => {
    setSearch("");
    setType("All");
    setPurpose("All");
    setBedrooms("All");
    setSortBy("");
  };

  return (
    <main className="properties-page">

      {/* Header */}
      <section className="properties-header">
        <div>
          <span>EXPLORE OUR COLLECTION</span>

          <h1>
            Find Your Perfect Property
          </h1>

          <p>
            Browse premium homes, apartments and villas.
          </p>
        </div>
      </section>

      <section className="properties-container">

        {/* Filters */}
        <div className="filters">

          <div className="search-filter">
            <label>Search</label>

            <input
              type="text"
              placeholder="Search property or location..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="filter-group">
            <label>Property Type</label>

            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option value="All">All Types</option>
              <option value="House">House</option>
              <option value="Apartment">Apartment</option>
              <option value="Villa">Villa</option>
              <option value="Commercial">Commercial</option>
            </select>
          </div>

          <div className="filter-group">
            <label>Purpose</label>

            <select
              value={purpose}
              onChange={(e) => setPurpose(e.target.value)}
            >
              <option value="All">Buy & Rent</option>
              <option value="Sale">For Sale</option>
              <option value="Rent">For Rent</option>
            </select>
          </div>

          <div className="filter-group">
            <label>Bedrooms</label>

            <select
              value={bedrooms}
              onChange={(e) => setBedrooms(e.target.value)}
            >
              <option value="All">Any</option>
              <option value="1">1+</option>
              <option value="2">2+</option>
              <option value="3">3+</option>
              <option value="4">4+</option>
              <option value="5">5+</option>
            </select>
          </div>

          <button
            className="clear-btn"
            onClick={clearFilters}
          >
            Reset
          </button>

        </div>

        {/* Results Header */}
        <div className="properties-results-header">
          <div>
            <h2>Available Properties</h2>

            <p>
              {filteredProperties.length}{" "}
              {filteredProperties.length === 1
                ? "property"
                : "properties"}{" "}
              found
            </p>
          </div>

          <select
            className="sort-select"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="">Sort By</option>
            <option value="low">
              Price: Low to High
            </option>
            <option value="high">
              Price: High to Low
            </option>
            <option value="large">
              Largest Area
            </option>
          </select>
        </div>

        {/* Property Results */}
        {filteredProperties.length > 0 ? (
          <div className="properties-grid">

            {filteredProperties.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
              />
            ))}

          </div>
        ) : (
          <div className="no-results">

            <div>🏠</div>

            <h2>No Properties Found</h2>

            <p>
              Try changing your search or filters.
            </p>

            <button onClick={clearFilters}>
              Clear Filters
            </button>

          </div>
        )}

      </section>

    </main>
  );
}

export default Properties;