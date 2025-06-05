import "./Footer.css";
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <Heart className="h-6 w-6 text-red-500" />
              <span className="footer-logo-text">FINNISH EVENT PLANNER</span>
            </div>
          </div>
          
          <div>
            <h3 className="footer-section-title">Community Events</h3>
          </div>
          
          <div>
            <h3 className="footer-section-title">Get Involved</h3>
          </div>
          
          <div>
            <h3 className="footer-section-title">Event Calendar</h3>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="footer-links">
              <a href="#" className="footer-link">Privacy Policy</a>
              <a href="#" className="footer-link">Terms of Service</a>
              <a href="#" className="footer-link">Cookies Settings</a>
            </div>
            <p className="footer-copyright">
              © 2024 React 25K Group S. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
