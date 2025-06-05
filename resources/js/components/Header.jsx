import "./Header.css";
import { Button } from "@/components/ui/button";

const Header = () => {
  

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-content">
          <div className="header-logo">
            <h1 className="header-title">FINNISH EVENT PLANNER</h1>
          </div>

          <nav className="header-nav">
            <a href="#" className="header-nav-link">Home</a>
            <a href="#" className="header-nav-link">Events</a>
          </nav>

          <div className="header-buttons">
            <Button variant="outline" className="hidden sm:inline-flex">
              Log in
            </Button>
            <Button className="bg-gray-900 hover:bg-gray-800">
              Sign up
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
