
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        InternHub
      </Link>

      <div className="nav-links">
        <Link to="/">Acasă</Link>
        <Link to="/internships">Internshipuri</Link>
        <Link to="/applications">Aplicațiile mele</Link>
        <Link to="/student-profile">Profil student</Link>
        <Link to="/company-dashboard">Companii</Link>
      </div>

      <div className="nav-buttons">
        <Link to="/login" className="login-link">
          Autentificare
        </Link>

        <Link to="/register" className="register-button">
          Înregistrare
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
