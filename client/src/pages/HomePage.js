import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import MarketplaceTrustSection from '../components/MarketplaceTrustSection';
import './HomePage.css';

// Arrow icon for links
const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

function HomePage() {
  const { isAuthenticated } = useAuth();
  
  return (
    <div className="home-container">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Space for <span className="gradient-text">Side Hustle</span></h1>
          <p className="subtitle">Less hassle, more hustle.</p>
          <p className="tagline">Empower. Innovate. Monetize.</p>
          {!isAuthenticated ? (
            <Link to="/register" className="cta-button">
              <span className="button-text">Get Started</span> <ArrowIcon />
            </Link>
          ) :(
            <Link to="/dashboard" className="cta-button">
              <span className="button-text">View Projects</span> <ArrowIcon />
            </Link>
          )}
        </div>
      </section>

      <section className="about-section">
        <h2 className="section-title">About SideBuilds</h2>
        <div className="about-grid">
          <div className="about-card">
            <h3>Organize</h3>
            <p>Manage all your side projects in one place with progress tracking and milestones.</p>
          </div>
          <div className="about-card">
            <h3>Collaborate</h3>
            <p>Share projects with the community to get feedback and find collaborators.</p>
          </div>
          <div className="about-card">
            <h3>Monetize</h3>
            <p>Turn your unfinished projects into income through our marketplace.</p>
          </div>
        </div>
      </section>

      <section className="features-section">
        <h2 className="section-title">Key Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Project Dashboard</h3>
            <p>Track progress and set milestones for all your projects.</p>
            <Link to={isAuthenticated ? "/public-projects" : "/login"} className="arrow-link">
              <span className="button-text">Browse Projects</span> <ArrowIcon />
            </Link>
          </div>
          
          <div className="feature-card">
            <h3>Public Sharing</h3>
            <p>Share your projects with the community to get feedback or collaborators.</p>
            <Link to={isAuthenticated ? "/public-projects" : "/login"} className="arrow-link">
              <span className="button-text">Public projects</span> <ArrowIcon />
            </Link>
          </div>
          
          <div className="feature-card">
            <h3>Project Marketplace</h3>
            <p>Turn your side projects into income by selling them to interested buyers.</p>
            <Link to={isAuthenticated ? "/marketplace" : "/login"} className="arrow-link">
              <span className="button-text">Visit marketplace</span> <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>

      <section className="trust-section">
        <MarketplaceTrustSection />
      </section>
    </div>
  );
}

export default HomePage; 