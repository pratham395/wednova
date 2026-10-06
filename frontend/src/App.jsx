import Budget from "./Budget";
import Vendors from "./Vendors";
import Guests from "./Guests";
import Events from "./Events";
import WeddingDashboard from "./WeddingDashboard";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
import "./App.css";

function Home() {
  return (
    <div className="app">

      {/* ================= NAVBAR ================= */}
      <nav className="navbar">

        <div className="brand">
          <div className="brand-icon">💍</div>

          <div>
            <h2>
              Wed<span>Nova</span>
            </h2>

            <p>Plan • Organize • Celebrate</p>
          </div>
        </div>

        <div className="nav-links">
          <a className="active" href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#vendors">Vendors</a>
          <a href="#about">About</a>

          <a className="login-btn" href="/login">
            Login
          </a>

          <a className="get-started" href="/register">
            Get Started
          </a>
        </div>

      </nav>


      {/* ================= HERO SECTION ================= */}
      <section className="hero" id="home">

        <div className="hero-overlay"></div>

        <div className="hero-content">

          <div className="hero-left">

            <div className="hero-badge">
              ✨ AI-POWERED WEDDING MANAGEMENT
            </div>

            <h1>
              Plan Your Dream
              <br />
              Wedding
              <br />
              Smarter with{" "}
              <span>WedNova</span>
            </h1>

            <p className="hero-description">
              From finding the perfect vendors to managing your guests,
              budget and events — WedNova brings everything together
              with the power of AI.
            </p>

            <div className="hero-buttons">

              <a href="/register" className="primary-btn">
                → &nbsp; Get Started
              </a>

              <a href="#vendors" className="secondary-btn">
                🏪 &nbsp; Explore Vendors
              </a>

            </div>

            <div className="hero-highlights">

              <span>🛡️ Trusted Vendors</span>

              <span>👥 Easy Guest Management</span>

              <span>⭐ AI Recommendations</span>

            </div>

          </div>


          {/* ================= HERO CARD ================= */}
          <div className="hero-card">

            <div className="card-top">

              <div className="ring-icon">
                💍
              </div>

              <div>
                <h2>10K+</h2>
                <p>Happy Couples</p>
              </div>

              <span className="heart">♥</span>

            </div>

            <div className="card-line"></div>

            <div className="card-item">
              <span>🗓️</span>
              <p>Plan Events</p>
              <b>✓</b>
            </div>

            <div className="card-item">
              <span>👥</span>
              <p>Manage Guests</p>
              <b>✓</b>
            </div>

            <div className="card-item">
              <span>🏪</span>
              <p>Book Trusted Vendors</p>
              <b>✓</b>
            </div>

            <div className="card-item">
              <span>💳</span>
              <p>Track Budget & Payments</p>
              <b>✓</b>
            </div>

            <div className="card-item">
              <span>✨</span>
              <p>Get AI Recommendations</p>
              <b>✓</b>
            </div>

            <div className="card-line"></div>

            <h3>Make it Memorable ♥</h3>

          </div>

        </div>

      </section>


      {/* ================= STATS ================= */}
      <section className="stats">

        <div className="stat">
          <span>👥</span>
          <div>
            <h2>500+</h2>
            <p>Verified Vendors</p>
          </div>
        </div>

        <div className="stat">
          <span>💍</span>
          <div>
            <h2>10K+</h2>
            <p>Weddings Planned</p>
          </div>
        </div>

        <div className="stat">
          <span>⭐</span>
          <div>
            <h2>98%</h2>
            <p>Client Satisfaction</p>
          </div>
        </div>

        <div className="stat">
          <span>📍</span>
          <div>
            <h2>50+</h2>
            <p>Cities Covered</p>
          </div>
        </div>

      </section>


      {/* ================= FEATURES ================= */}
      <section className="features-section" id="features">

        <div className="section-heading">

          <p className="small-heading">
            EVERYTHING YOU NEED
          </p>

          <h2>
            Everything You Need for Your Wedding
          </h2>

          <p>
            One intelligent platform to manage every important
            part of your wedding.
          </p>

        </div>


        <div className="features-grid">

          <div className="feature-card">
            <div className="feature-icon">🏪</div>
            <h3>Trusted Vendors</h3>
            <p>
              Discover verified photographers, decorators,
              caterers and wedding professionals.
            </p>
          </div>


          <div className="feature-card">
            <div className="feature-icon">👥</div>
            <h3>Guest Management</h3>
            <p>
              Easily manage your guest list, invitations,
              RSVPs and seating arrangements.
            </p>
          </div>


          <div className="feature-card">
            <div className="feature-icon">💰</div>
            <h3>Budget Management</h3>
            <p>
              Track your wedding expenses and keep your
              complete budget under control.
            </p>
          </div>


          <div className="feature-card">
            <div className="feature-icon">🤖</div>
            <h3>AI Recommendations</h3>
            <p>
              Get intelligent recommendations for vendors,
              venues and wedding planning.
            </p>
          </div>


          <div className="feature-card">
            <div className="feature-icon">📅</div>
            <h3>Event Planning</h3>
            <p>
              Organize every wedding event with smart
              schedules and reminders.
            </p>
          </div>


          <div className="feature-card">
            <div className="feature-icon">💳</div>
            <h3>Payments</h3>
            <p>
              Keep track of vendor payments and upcoming
              wedding expenses in one place.
            </p>
          </div>

        </div>

      </section>


      {/* ================= VENDORS ================= */}
      <section className="vendors-section" id="vendors">

        <div className="section-heading">

          <p className="small-heading">
            FIND THE PERFECT TEAM
          </p>

          <h2>
            Trusted Wedding Vendors
          </h2>

          <p>
            Connect with professionals who can make your
            special day unforgettable.
          </p>

        </div>

        <div className="vendor-grid">

          <div className="vendor-card">
            <span>📸</span>
            <h3>Photography</h3>
            <p>Capture every beautiful moment.</p>
          </div>

          <div className="vendor-card">
            <span>🌸</span>
            <h3>Decoration</h3>
            <p>Create your dream wedding atmosphere.</p>
          </div>

          <div className="vendor-card">
            <span>🍽️</span>
            <h3>Catering</h3>
            <p>Delicious food for your guests.</p>
          </div>

          <div className="vendor-card">
            <span>🎵</span>
            <h3>Music & DJ</h3>
            <p>Make your celebrations unforgettable.</p>
          </div>

        </div>

      </section>


      {/* ================= ABOUT ================= */}
      <section className="about-section" id="about">

        <div className="about-content">

          <p className="small-heading">
            ABOUT WEDNOVA
          </p>

          <h2>
            Your Wedding.
            <br />
            Your Vision.
            <br />
            Our Intelligence.
          </h2>

          <p>
            WedNova is an AI-powered wedding management platform
            designed to simplify the entire wedding planning
            experience.
          </p>

          <p>
            From vendors and guests to budgets and events,
            everything can be managed from one intelligent platform.
          </p>

          <a href="/register" className="primary-btn">
            Start Planning →
          </a>

        </div>

      </section>


      {/* ================= FOOTER ================= */}
      <footer className="footer">

        <div>
          <h2>
            Wed<span>Nova</span>
          </h2>

          <p>
            Plan • Organize • Celebrate
          </p>
        </div>

        <p>
          © 2026 WedNova. All rights reserved.
        </p>

      </footer>

    </div>
  );
}


/* ================= MAIN APP ================= */

function App() {

  return (
    <Routes>

    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/dashboard" element={<WeddingDashboard />} />
    <Route path="/events" element={<Events />} />
    <Route path="/guests" element={<Guests />} />
    <Route path="/vendors" element={<Vendors />} />
    <Route path="/budget" element={<Budget />} />

</Routes>
  );
}

export default App;