import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        &copy; {new Date().getFullYear()} Event Planner. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
