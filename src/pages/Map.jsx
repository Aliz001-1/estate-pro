import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./Map.css";

const propertyLocations = [
  {
    id: 1,
    title: "Modern Luxury Villa",
    location: "DHA Phase 6, Karachi",
    price: "PKR 8.5 Crore",
    position: [24.8138, 67.0611],
  },
  {
    id: 2,
    title: "Elegant Family House",
    location: "Gulshan-e-Iqbal, Karachi",
    price: "PKR 3.2 Crore",
    position: [24.9215, 67.0822],
  },
  {
    id: 3,
    title: "Premium City Apartment",
    location: "Clifton, Karachi",
    price: "PKR 2.8 Crore",
    position: [24.8138, 67.0305],
  },
  {
    id: 4,
    title: "Executive Apartment",
    location: "PECHS, Karachi",
    price: "PKR 1.9 Crore",
    position: [24.8647, 67.0637],
  },
  {
    id: 5,
    title: "Spacious Family Villa",
    location: "Bahria Town, Karachi",
    price: "PKR 4.5 Crore",
    position: [25.0041, 67.2888],
  },
];

const propertyIcon = new L.Icon({
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",

  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

function Map() {
  return (
    <main className="map-page">

      {/* Header */}
      <section className="map-header">
        <div className="map-header-content">
          <span>EXPLORE LOCATIONS</span>

          <h1>
            Find Properties
            <strong> Near You</strong>
          </h1>

          <p>
            Explore EstatePro properties across Karachi
            and discover your next perfect location.
          </p>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">

        <div className="map-topbar">
          <div>
            <span>PROPERTY MAP</span>
            <h2>Explore Our Locations</h2>
          </div>

          <div className="property-count">
            {propertyLocations.length} Properties
          </div>
        </div>

        <div className="map-wrapper">

          <MapContainer
            center={[24.8607, 67.0011]}
            zoom={11}
            scrollWheelZoom={true}
            className="estate-map"
          >

            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {propertyLocations.map((property) => (
              <Marker
                key={property.id}
                position={property.position}
                icon={propertyIcon}
              >
                <Popup>
                  <div className="map-popup">

                    <h3>{property.title}</h3>

                    <p className="popup-location">
                      📍 {property.location}
                    </p>

                    <strong>{property.price}</strong>

                    <Link
                      to={`/properties/${property.id}`}
                      className="popup-button"
                    >
                      View Property →
                    </Link>

                  </div>
                </Popup>
              </Marker>
            ))}

          </MapContainer>

        </div>

      </section>

      {/* Location Cards */}
      <section className="location-section">

        <div className="location-heading">
          <span>POPULAR AREAS</span>
          <h2>Explore Karachi Locations</h2>
          <p>
            Browse properties in some of Karachi's
            most popular residential areas.
          </p>
        </div>

        <div className="location-grid">

          {[
            {
              name: "DHA Karachi",
              properties: "24 Properties",
              icon: "🏡",
            },
            {
              name: "Clifton",
              properties: "18 Properties",
              icon: "🌆",
            },
            {
              name: "Gulshan-e-Iqbal",
              properties: "16 Properties",
              icon: "🏠",
            },
            {
              name: "PECHS",
              properties: "12 Properties",
              icon: "🏢",
            },
            {
              name: "Bahria Town",
              properties: "21 Properties",
              icon: "🌳",
            },
            {
              name: "Gulistan-e-Johar",
              properties: "14 Properties",
              icon: "🏘️",
            },
          ].map((location) => (
            <Link
              to="/properties"
              className="location-card"
              key={location.name}
            >
              <div className="location-icon">
                {location.icon}
              </div>

              <div>
                <h3>{location.name}</h3>
                <p>{location.properties}</p>
              </div>

              <span className="location-arrow">
                →
              </span>
            </Link>
          ))}

        </div>

      </section>

    </main>
  );
}

export default Map;