import { Link } from "react-router-dom";
import "./Agents.css";

const agents = [
  {
    id: 1,
    name: "Sarah Ahmed",
    role: "Senior Property Consultant",
    location: "Karachi, Pakistan",
    experience: "8+ Years",
    properties: 42,
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    name: "James Wilson",
    role: "Luxury Property Specialist",
    location: "Dubai, UAE",
    experience: "10+ Years",
    properties: 58,
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    name: "Ayesha Khan",
    role: "Residential Property Advisor",
    location: "Lahore, Pakistan",
    experience: "6+ Years",
    properties: 35,
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    name: "Daniel Morgan",
    role: "Commercial Property Expert",
    location: "Islamabad, Pakistan",
    experience: "9+ Years",
    properties: 47,
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 5,
    name: "Maya Rodriguez",
    role: "Real Estate Consultant",
    location: "Abu Dhabi, UAE",
    experience: "7+ Years",
    properties: 39,
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 6,
    name: "Omar Hassan",
    role: "Investment Property Advisor",
    location: "Karachi, Pakistan",
    experience: "11+ Years",
    properties: 64,
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
  },
];

function Agents() {
  return (
    <main className="agents-page">
      <section className="agents-hero">
        <div className="agents-hero-content">
          <span className="agents-label">OUR EXPERTS</span>

          <h1>
            Meet Our
            <span> Property Experts</span>
          </h1>

          <p>
            Connect with experienced real estate professionals who
            understand the market and can help you find the right
            property.
          </p>
        </div>
      </section>

      <section className="agents-section">
        <div className="agents-container">

          <div className="agents-heading">
            <div>
              <span className="section-label">
                PROFESSIONAL AGENTS
              </span>

              <h2>Find the right agent for you</h2>
            </div>

            <p>
              Our team is here to guide you through every step of
              your property journey.
            </p>
          </div>

          <div className="agents-grid">
            {agents.map((agent) => (
              <article className="agent-card" key={agent.id}>

                <div className="agent-image">
                  <img
                    src={agent.image}
                    alt={agent.name}
                  />

                  <span className="agent-status">
                    Available
                  </span>
                </div>

                <div className="agent-content">

                  <span className="agent-role">
                    {agent.role}
                  </span>

                  <h3>{agent.name}</h3>

                  <p className="agent-location">
                    📍 {agent.location}
                  </p>

                  <div className="agent-stats">
                    <div>
                      <strong>{agent.experience}</strong>
                      <span>Experience</span>
                    </div>

                    <div>
                      <strong>{agent.properties}</strong>
                      <span>Properties</span>
                    </div>
                  </div>

                  <div className="agent-actions">
                    <a
                      href="mailto:agent@estatepro.com"
                      className="agent-email"
                    >
                      Email
                    </a>

                    <Link
                      to="/properties"
                      className="agent-properties"
                    >
                      View Properties →
                    </Link>
                  </div>

                </div>
              </article>
            ))}
          </div>

        </div>
      </section>
    </main>
  );
}

export default Agents;