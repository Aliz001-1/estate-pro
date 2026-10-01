import { useEffect, useState } from "react";
import {
  Link,
  NavLink,
  useNavigate,
} from "react-router-dom";

import "./Navbar.css";

function Navbar() {
  const [user, setUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("estatepro-theme") === "dark"
  );

  const navigate = useNavigate();

  useEffect(() => {
    const loadUser = () => {
      const authenticated =
        localStorage.getItem("estatepro-authenticated");

      const savedUser = JSON.parse(
        localStorage.getItem("estatepro-current-user")
      );

      if (authenticated === "true" && savedUser) {
        setUser(savedUser);
      } else {
        setUser(null);
      }
    };

    loadUser();

    window.addEventListener(
      "estatepro-auth-updated",
      loadUser
    );

    return () => {
      window.removeEventListener(
        "estatepro-auth-updated",
        loadUser
      );
    };
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      darkMode ? "dark" : "light"
    );

    localStorage.setItem(
      "estatepro-theme",
      darkMode ? "dark" : "light"
    );
  }, [darkMode]);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const toggleDarkMode = () => {
    setDarkMode((previous) => !previous);
  };

  const handleLogout = () => {
    localStorage.removeItem("estatepro-authenticated");
    localStorage.removeItem("estatepro-current-user");

    setUser(null);
    setMenuOpen(false);

    window.dispatchEvent(
      new Event("estatepro-auth-updated")
    );

    navigate("/");
  };

  return (
    <header className="navbar">

      <div className="nav-container">

        {/* Logo */}
        <Link
          to="/"
          className="logo"
          onClick={closeMenu}
        >
          Estate<span>Pro</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="nav-links">

          <NavLink to="/" end>
            Home
          </NavLink>

          <NavLink to="/properties">
            Properties
          </NavLink>

          <NavLink to="/agents">
            Agents
          </NavLink>

          <NavLink to="/map">
            Map
          </NavLink>

          <NavLink to="/about">
            About
          </NavLink>

          <NavLink to="/contact">
            Contact
          </NavLink>

        </nav>

        {/* Actions */}
        <div className="nav-actions">

          {/* Dark Mode */}
          <button
            className="theme-toggle"
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
            title={
              darkMode
                ? "Switch to light mode"
                : "Switch to dark mode"
            }
          >
            {darkMode ? "☀" : "☾"}
          </button>

          {/* Favorites */}
          <Link
            to="/favorites"
            className="favorite-link"
            aria-label="Favorites"
            onClick={closeMenu}
          >
            ♡
          </Link>

          {/* User */}
          {user ? (
            <div className="user-menu">

              <Link
                to="/profile"
                className="user-info"
                onClick={closeMenu}
              >
                <div className="user-avatar">
                  {user.name
                    ? user.name
                        .charAt(0)
                        .toUpperCase()
                    : "U"}
                </div>

                <span>
                  Hi,{" "}
                  {user.name
                    ? user.name.split(" ")[0]
                    : "User"}
                </span>
              </Link>

              <button
                type="button"
                className="logout-btn"
                onClick={handleLogout}
              >
                Logout
              </button>

            </div>
          ) : (
            <Link
              to="/login"
              className="login-btn"
              onClick={closeMenu}
            >
              Login
            </Link>
          )}

          {/* Hamburger */}
          <button
            type="button"
            className={`menu-toggle ${
              menuOpen ? "menu-open" : ""
            }`}
            onClick={() =>
              setMenuOpen((previous) => !previous)
            }
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`mobile-menu ${
          menuOpen ? "mobile-menu-open" : ""
        }`}
      >

        <nav className="mobile-nav-links">

          <NavLink
            to="/"
            end
            onClick={closeMenu}
          >
            Home
          </NavLink>

          <NavLink
            to="/properties"
            onClick={closeMenu}
          >
            Properties
          </NavLink>

          <NavLink
            to="/agents"
            onClick={closeMenu}
          >
            Agents
          </NavLink>

          <NavLink
            to="/map"
            onClick={closeMenu}
          >
            🗺️ Map
          </NavLink>

          <NavLink
            to="/about"
            onClick={closeMenu}
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            onClick={closeMenu}
          >
            Contact
          </NavLink>

          <NavLink
            to="/favorites"
            onClick={closeMenu}
          >
            ♡ Favorites
          </NavLink>

          {user && (
            <NavLink
              to="/profile"
              onClick={closeMenu}
            >
              👤 My Profile
            </NavLink>
          )}

          {!user && (
            <NavLink
              to="/login"
              onClick={closeMenu}
              className="mobile-login"
            >
              Login →
            </NavLink>
          )}

          {user && (
            <button
              type="button"
              className="mobile-logout"
              onClick={handleLogout}
            >
              Logout
            </button>
          )}

        </nav>
      </div>
    </header>
  );
}

export default Navbar;