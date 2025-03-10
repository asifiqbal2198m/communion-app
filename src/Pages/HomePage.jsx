import { Link } from "react-router-dom";
import heroImage from "../assets/hero-image.jpg";
import "../styles/HomePage.css";

const HomePage = () => {
  return (
    <div className="home-container">
      <div className="hero-section">
        <img src={heroImage} alt="Community Gathering" className="hero-image" />
        <div className="hero-text">
          <h1>Connecting People Across Faiths & Interests</h1>
          <p>Join us in building a strong and supportive community.</p>
          <Link to="/events">
            <button className="cta-button">Explore Events</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
