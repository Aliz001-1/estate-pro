import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    setError("");

    const savedUser = JSON.parse(
      localStorage.getItem("estatepro-user")
    );

    if (!savedUser) {
      setError(
        "No account found. Please create an account first."
      );
      return;
    }

    /*
      Demo authentication:
      Signup currently stores the user's name, email and phone.
      Password is not stored for security reasons, so for this
      frontend-only version we validate the email and allow the
      entered password to proceed.
    */

    if (
      email.trim().toLowerCase() !==
      savedUser.email.trim().toLowerCase()
    ) {
      setError("Email address does not match your account.");
      return;
    }

    if (password.length < 6) {
      setError("Please enter a valid password.");
      return;
    }

    localStorage.setItem(
      "estatepro-authenticated",
      "true"
    );

    localStorage.setItem(
      "estatepro-current-user",
      JSON.stringify(savedUser)
    );
    
    window.dispatchEvent(
  new Event("estatepro-auth-updated")
);
    navigate("/");
  };

  return (
    <main className="login-page">
      <div className="login-wrapper">

        {/* BRAND */}

        <div className="login-brand">
          <Link to="/" className="login-logo">
            Estate<span>Pro</span>
          </Link>

          <p>
            Find a place you can call home.
          </p>
        </div>

        {/* LOGIN CARD */}

        <div className="login-card">

          <div className="login-header">
            <span>WELCOME BACK</span>

            <h1>
              Sign in to your
              <strong> account.</strong>
            </h1>

            <p>
              Access your saved properties and manage your
              EstatePro account.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="login-form"
          >

            {/* EMAIL */}

            <div className="login-form-group">
              <label htmlFor="email">
                Email Address
              </label>

              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                  setError("");
                }}
                required
              />
            </div>

            {/* PASSWORD */}

            <div className="login-form-group">

              <div className="password-label">
                <label htmlFor="password">
                  Password
                </label>

                <a href="#forgot-password">
                  Forgot password?
                </a>
              </div>

              <div className="password-input">

                <input
                  id="password"
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  placeholder="Enter your password"
                  value={password}
                  onChange={(event) => {
                    setPassword(event.target.value);
                    setError("");
                  }}
                  required
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                  aria-label={
                    showPassword
                      ? "Hide password"
                      : "Show password"
                  }
                >
                  {showPassword ? "◉" : "◌"}
                </button>

              </div>
            </div>

            {/* ERROR */}

            {error && (
              <div className="login-error">
                {error}
              </div>
            )}

            {/* REMEMBER */}

            <label className="remember-me">
              <input type="checkbox" />
              <span>Remember me</span>
            </label>

            {/* LOGIN */}

            <button
              type="submit"
              className="login-submit"
            >
              Sign In
              <span>→</span>
            </button>

          </form>

          {/* DIVIDER */}

          <div className="login-divider">
            <span>OR</span>
          </div>

          {/* GOOGLE */}

          <button
            type="button"
            className="google-login"
            onClick={() =>
              alert("Google login coming soon")
            }
          >
            <span className="google-icon">
              G
            </span>

            Continue with Google
          </button>

          {/* SIGNUP */}

          <div className="login-signup">
            <p>
              Don't have an account?{" "}
              <Link to="/signup">
                Create an account
              </Link>
            </p>
          </div>

        </div>

        {/* BACK */}

        <Link to="/" className="back-home">
          ← Back to EstatePro
        </Link>

      </div>
    </main>
  );
}

export default Login;