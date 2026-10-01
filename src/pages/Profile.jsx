import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Profile.css";

function Profile() {
  const [user, setUser] = useState(null);
  const [favoriteCount, setFavoriteCount] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    const savedUser = JSON.parse(
      localStorage.getItem("estatepro-current-user")
    );

    setUser(savedUser);

    const savedFavorites =
      JSON.parse(
        localStorage.getItem("estatepro-favorites")
      ) || [];

    setFavoriteCount(savedFavorites.length);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("estatepro-authenticated");
    localStorage.removeItem("estatepro-current-user");

    window.dispatchEvent(
      new Event("estatepro-auth-updated")
    );

    navigate("/");
  };

  if (!user) {
    return (
      <main className="profile-page">
        <div className="profile-empty">
          <div className="profile-empty-icon">
            👤
          </div>

          <h1>You're not signed in</h1>

          <p>
            Sign in to view your EstatePro profile and
            saved properties.
          </p>

          <Link
            to="/login"
            className="profile-primary-btn"
          >
            Sign In →
          </Link>
        </div>
      </main>
    );
  }

  const userInitial = user.name
    ? user.name.charAt(0).toUpperCase()
    : "U";

  return (
    <main className="profile-page">

      <section className="profile-hero">
        <div className="profile-container">

          <span className="profile-label">
            MY ACCOUNT
          </span>

          <h1>
            Welcome back,{" "}
            <span>
              {user.name?.split(" ")[0] || "User"}.
            </span>
          </h1>

          <p>
            Manage your EstatePro account and saved
            properties.
          </p>

        </div>
      </section>

      <section className="profile-section">
        <div className="profile-container">

          <div className="profile-grid">

            <div className="profile-card profile-main-card">

              <div className="profile-card-header">

                <div className="profile-avatar">
                  {userInitial}
                </div>

                <div>
                  <span className="profile-small-label">
                    ACCOUNT
                  </span>

                  <h2>
                    {user.name || "EstatePro User"}
                  </h2>

                  <p>
                    EstatePro Member
                  </p>
                </div>

              </div>

              <div className="profile-divider"></div>

              <div className="profile-details">

                <div className="profile-detail">
                  <span className="detail-icon">
                    ✉
                  </span>

                  <div>
                    <span>Email Address</span>
                    <strong>
                      {user.email}
                    </strong>
                  </div>
                </div>

                <div className="profile-detail">
                  <span className="detail-icon">
                    ☎
                  </span>

                  <div>
                    <span>Phone Number</span>

                    <strong>
                      {user.phone ||
                        "Not provided"}
                    </strong>
                  </div>
                </div>

                <div className="profile-detail">
                  <span className="detail-icon">
                    ✓
                  </span>

                  <div>
                    <span>Account Status</span>

                    <strong className="status-active">
                      Active
                    </strong>
                  </div>
                </div>

              </div>
            </div>

            <div className="profile-side">

              <div className="profile-card profile-stat-card">

                <div className="stat-icon">
                  ♥
                </div>

                <div>
                  <span>
                    SAVED PROPERTIES
                  </span>

                  <strong>
                    {favoriteCount}
                  </strong>

                  <p>
                    Properties in your favorites
                  </p>
                </div>

              </div>

              <div className="profile-card profile-actions-card">

                <h3>
                  Quick Actions
                </h3>

                <Link
                  to="/favorites"
                  className="profile-action"
                >
                  <span>♥</span>

                  <div>
                    <strong>
                      My Favorites
                    </strong>

                    <small>
                      View your saved properties
                    </small>
                  </div>

                  <b>→</b>
                </Link>

                <Link
                  to="/properties"
                  className="profile-action"
                >
                  <span>⌂</span>

                  <div>
                    <strong>
                      Browse Properties
                    </strong>

                    <small>
                      Find your next property
                    </small>
                  </div>

                  <b>→</b>
                </Link>

                <Link
                  to="/contact"
                  className="profile-action"
                >
                  <span>✉</span>

                  <div>
                    <strong>
                      Contact EstatePro
                    </strong>

                    <small>
                      Get help from our team
                    </small>
                  </div>

                  <b>→</b>
                </Link>

              </div>

            </div>
          </div>

          <div className="profile-logout-section">

            <div>
              <h3>
                Ready to leave?
              </h3>

              <p>
                You can sign out of your EstatePro
                account at any time.
              </p>
            </div>

            <button
              type="button"
              className="profile-logout-btn"
              onClick={handleLogout}
            >
              Logout
            </button>

          </div>

        </div>
      </section>

    </main>
  );
}

export default Profile;