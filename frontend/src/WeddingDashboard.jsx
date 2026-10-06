import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./dashboard.css";

function Dashboard() {
  const navigate = useNavigate();

  const [guestCount, setGuestCount] = useState(0);
  const [eventCount, setEventCount] = useState(0);
  const [vendorCount, setVendorCount] = useState(0);
  const [budget, setBudget] = useState(
  Number(localStorage.getItem("wednovaBudget")) || 0
);

  useEffect(() => {
    // Guests
    fetch("http://localhost:5000/api/guests")
      .then((res) => res.json())
      .then((data) => {
        setGuestCount(Array.isArray(data) ? data.length : 0);
      })
      .catch((error) => {
        console.error("Error fetching guests:", error);
      });

    // Events
    fetch("http://localhost:5000/api/events")
      .then((res) => res.json())
      .then((data) => {
        setEventCount(Array.isArray(data) ? data.length : 0);
      })
      .catch((error) => {
        console.error("Error fetching events:", error);
      });

    // Vendors
    fetch("http://localhost:5000/api/vendors")
      .then((res) => res.json())
      .then((data) => {
        setVendorCount(Array.isArray(data) ? data.length : 0);
      })
      .catch((error) => {
        console.error("Error fetching vendors:", error);
      });
      // Fetch Budget
fetch("http://localhost:5000/api/budget")
  .then((res) => res.json())
  .then((data) => {
    const total = Array.isArray(data)
      ? data.reduce(
          (sum, item) => sum + Number(item.amount || 0),
          0
        )
      : 0;

    setBudget(total);
  })
  .catch((error) => {
    console.error("Error fetching budget:", error);
  });
  }, []);
    const handleBudget = () => {
  navigate("/budget");
};

  return (
    <div className="dashboard">

      {/* ================= NAVBAR ================= */}
      <nav className="dashboard-nav">

        <div className="dashboard-logo">
          <span className="logo-icon">💍</span>
          <span>WedNova</span>
        </div>

        <div className="dashboard-links">
          <Link to="/">Home</Link>
          <Link to="/dashboard" className="active-link">
            Dashboard
          </Link>
          <Link to="/vendors">Vendors</Link>
          <Link to="/guests">Guests</Link>
          <Link to="/login">Logout</Link>
        </div>

      </nav>

      {/* ================= HERO ================= */}
      <section className="welcome-section">

        <div className="welcome-content">

          <div className="small-heading">
            ✨ YOUR WEDDING JOURNEY
          </div>

          <h1>
            Plan your dream wedding
            <span> beautifully.</span>
          </h1>

          <p>
            Manage your events, guests and vendors all in one place
            with <strong>WedNova</strong>.
          </p>

          <div className="welcome-buttons">

            <button
              className="primary-btn"
              onClick={() => navigate("/events")}
            >
              📅 Manage Events
            </button>

            <button
              className="secondary-btn"
              onClick={() => navigate("/guests")}
            >
              👥 Manage Guests
            </button>

          </div>

        </div>

        <div className="welcome-decoration">
          💍
        </div>

      </section>

      {/* ================= STATS ================= */}
      {/* ================= STATS ================= */}
<section className="stats-container">

  {/* Events */}
  <div
    className="stat-card clickable-card"
    onClick={() => navigate("/events")}
  >
    <div className="stat-top">
      <div className="stat-icon event-icon">
        📅
      </div>

      <span className="stat-arrow">↗</span>
    </div>

    <h2>{eventCount}</h2>

    <p>Upcoming Events</p>

    <div className="stat-line"></div>

    <span className="card-action">
      View Events →
    </span>
  </div>


  {/* Guests */}
  <div
    className="stat-card clickable-card"
    onClick={() => navigate("/guests")}
  >
    <div className="stat-top">
      <div className="stat-icon guest-icon">
        👥
      </div>

      <span className="stat-arrow">↗</span>
    </div>

    <h2>{guestCount}</h2>

    <p>Total Guests</p>

    <div className="stat-line"></div>

    <span className="card-action">
      Manage Guests →
    </span>
  </div>


  {/* Vendors */}
  <div
    className="stat-card clickable-card"
    onClick={() => navigate("/vendors")}
  >
    <div className="stat-top">
      <div className="stat-icon vendor-icon">
        🏨
      </div>

      <span className="stat-arrow">↗</span>
    </div>

    <h2>{vendorCount}</h2>

    <p>Available Vendors</p>

    <div className="stat-line"></div>

    <span className="card-action">
      Explore Vendors →
    </span>
  </div>


  {/* Budget */}
<div
  className="stat-card clickable-card"
  onClick={handleBudget}
>
  <div className="stat-top">
    <div className="stat-icon budget-icon">
      💰
    </div>

    <span className="stat-arrow">↗</span>
  </div>

  <h2>{budget.toLocaleString("en-IN")}</h2>

  <p>Wedding Budget</p>

  <div className="stat-line"></div>

  <span className="card-action">
    Manage Budget →
  </span>
</div>

</section>

      {/* ================= MAIN FEATURES ================= */}
      <section className="dashboard-section">

        <div className="section-heading">
          <div>
            <p className="section-label">WEDDING PLANNER</p>
            <h2>Everything you need</h2>
          </div>

          <p className="section-description">
            Organize every important part of your special day.
          </p>
        </div>

        <div className="feature-grid">

          {/* Events */}
          <div className="feature-card">

            <div className="feature-card-top">
              <div className="feature-icon">
                📅
              </div>

              <span className="feature-number">
                01
              </span>
            </div>

            <h3>Plan Events</h3>

            <p>
              Create and manage your wedding events,
              ceremonies, dates, venues and schedules.
            </p>

            <button
              onClick={() => navigate("/events")}
            >
              Manage Events <span>→</span>
            </button>

          </div>

          {/* Guests */}
          <div className="feature-card">

            <div className="feature-card-top">
              <div className="feature-icon">
                👥
              </div>

              <span className="feature-number">
                02
              </span>
            </div>

            <h3>Manage Guests</h3>

            <p>
              Keep track of your wedding guests,
              invitations and RSVP responses easily.
            </p>

            <button
              onClick={() => navigate("/guests")}
            >
              Manage Guests <span>→</span>
            </button>

          </div>

          {/* Vendors */}
          <div className="feature-card">

            <div className="feature-card-top">
              <div className="feature-icon">
                🏨
              </div>

              <span className="feature-number">
                03
              </span>
            </div>

            <h3>Find Vendors</h3>

            <p>
              Discover photographers, decorators,
              caterers and beautiful wedding venues.
            </p>

            <button
              onClick={() => navigate("/vendors")}
            >
              Explore Vendors <span>→</span>
            </button>

          </div>

          {/* AI */}
          <div className="feature-card ai-card">

            <div className="feature-card-top">
              <div className="feature-icon">
                🤖
              </div>

              <span className="feature-number">
                AI
              </span>
            </div>

            <h3>AI Recommendations</h3>

            <p>
              Get smart wedding recommendations
              based on your preferences and budget.
            </p>

            <button
              onClick={() =>
                alert("AI Recommendations coming soon!")
              }
            >
              Get Recommendations <span>→</span>
            </button>

          </div>

        </div>

      </section>

      {/* ================= FOOTER ================= */}
      <footer className="dashboard-footer">
        <div>
          <strong>💍 WedNova</strong>
          <span> — Your dream wedding, beautifully organized.</span>
        </div>

        <p>© 2026 WedNova</p>
      </footer>

    </div>
  );
}

export default Dashboard;