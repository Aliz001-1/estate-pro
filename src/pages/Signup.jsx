import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";

function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    if (!formData.terms) {
      alert("Please accept the Terms & Conditions.");
      return;
    }

    const user = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
    };

    localStorage.setItem(
      "estatepro-user",
      JSON.stringify(user)
    );

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <main className="signup-page">
        <div className="signup-wrapper">
          <div className="signup-brand">
            <Link to="/" className="signup-logo">
              Estate<span>Pro</span>
            </Link>

            <p>Find a place you can call home.</p>
          </div>

          <div className="signup-card">
            <div className="signup-success">
              <div className="signup-success-icon">
                ✓
              </div>

              <h2>Account Created!</h2>

              <p>
                Welcome to EstatePro,{" "}
                <strong>{formData.name}</strong>.
                Your account has been created successfully.
              </p>
                window.dispatchEvent(
  new Event("estatepro-auth-updated")
);
              <button
                type="button"
                className="signup-submit"
                onClick={() => navigate("/")}
                style={{ marginTop: "24px" }}
              >
                Continue to EstatePro
                <span>→</span>
              </button>
            </div>
          </div>

          <Link to="/" className="signup-back">
            ← Back to EstatePro
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="signup-page">
      <div className="signup-wrapper">

        <div className="signup-brand">
          <Link to="/" className="signup-logo">
            Estate<span>Pro</span>
          </Link>

          <p>Find a place you can call home.</p>
        </div>

        <div className="signup-card">

          <div className="signup-header">
            <span>JOIN ESTATEPRO</span>

            <h1>
              Create your
              <strong> account.</strong>
            </h1>

            <p>
              Create an account to save properties and
              manage your real estate preferences.
            </p>
          </div>

          <form
            className="signup-form"
            onSubmit={handleSubmit}
          >

            {/* NAME + PHONE */}

            <div className="signup-form-row">

              <div className="signup-form-group">
                <label htmlFor="name">
                  Full Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="signup-form-group">
                <label htmlFor="phone">
                  Phone Number
                </label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+92 300 1234567"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

            </div>

            {/* EMAIL */}

            <div className="signup-form-group">
              <label htmlFor="email">
                Email Address
              </label>

              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            {/* PASSWORD */}

            <div className="signup-form-group">
              <label htmlFor="password">
                Password
              </label>

              <div className="signup-password">
                <input
                  id="password"
                  name="password"
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  placeholder="Create a password"
                  value={formData.password}
                  onChange={handleChange}
                  minLength="6"
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

            {/* CONFIRM PASSWORD */}

            <div className="signup-form-group">
              <label htmlFor="confirmPassword">
                Confirm Password
              </label>

              <div className="signup-password">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={
                    showConfirmPassword
                      ? "text"
                      : "password"
                  }
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  minLength="6"
                  required
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowConfirmPassword(
                      !showConfirmPassword
                    )
                  }
                  aria-label={
                    showConfirmPassword
                      ? "Hide password"
                      : "Show password"
                  }
                >
                  {showConfirmPassword ? "◉" : "◌"}
                </button>
              </div>
            </div>

            {/* TERMS */}

            <label className="signup-terms">
              <input
                type="checkbox"
                name="terms"
                checked={formData.terms}
                onChange={handleChange}
              />

              <span>
                I agree to the{" "}
                <a href="#terms">
                  Terms & Conditions
                </a>{" "}
                and Privacy Policy.
              </span>
            </label>

            {/* SUBMIT */}

            <button
              type="submit"
              className="signup-submit"
            >
              Create Account
              <span>→</span>
            </button>

          </form>

          {/* LOGIN */}

          <div className="signup-login">
            <p>
              Already have an account?{" "}
              <Link to="/login">
                Sign in
              </Link>
            </p>
          </div>

        </div>

        <Link to="/" className="signup-back">
          ← Back to EstatePro
        </Link>

      </div>
    </main>
  );
}

export default Signup;
