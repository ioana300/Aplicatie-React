
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function Navbar() {
  const navigate = useNavigate();

  const [user, setUser] = useState(() =>
    JSON.parse(localStorage.getItem("currentUser") || "null")
  );

  useEffect(() => {
  function updateUser() {
    setUser(
      JSON.parse(localStorage.getItem("currentUser") || "null")
    );
  }

  // Detectează autentificarea în aplicație
  window.addEventListener("authChanged", updateUser);

  // Detectează modificările din alte tab-uri
  window.addEventListener("storage", updateUser);

  // Elimină evenimentele când componenta este demontată
  return () => {
    window.removeEventListener("authChanged", updateUser);
    window.removeEventListener("storage", updateUser);
  };
}, []);

  function logout() {
    localStorage.removeItem("currentUser");
    setUser(null);
    navigate("/login");
  }

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        InternHub
      </Link>

      <div className="nav-links">
        <Link to="/">Acasă</Link>
        <Link to="/internships">Internshipuri</Link>

        {user && user.role === "student" && (
          <>
            <Link to="/applications">Aplicațiile mele</Link>
            <Link to="/student-profile">Profilul meu</Link>
          </>
        )}

        {user && user.role === "company" && (
          <>
            <Link to="/company-dashboard">Panou companie</Link>
            <Link to="/company-profile">Profil companie</Link>
          </>
        )}
      </div>

      <div className="nav-buttons">
        {user ? (
          <>
            <span className="welcome-user">
              Salut, {user.name}
            </span>

            <button
              className="logout-button"
              onClick={logout}
            >
              Deconectare
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="login-link">
              Autentificare
            </Link>

            <Link to="/register" className="register-button">
              Înregistrare
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
