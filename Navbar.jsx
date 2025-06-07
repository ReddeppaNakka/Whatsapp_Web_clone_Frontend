import "./Navbar.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Navbar({ isDarkMode, toggleTheme }) {
  return (
    <div className="navbar">
      <div className="logo">
        <i className="fab fa-whatsapp"></i>
        <span> WhatsApp</span>
      </div>
      <div className="nav-icons">
        <i className="fas fa-bell"></i>
        <i className="fas fa-user-circle"></i>
      </div>
      <button onClick={toggleTheme} className="theme-toggle">
        {isDarkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
      </button>
    </div>
  );
}

export default Navbar;
