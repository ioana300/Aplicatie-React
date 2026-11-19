
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">InternHub</Link>
      <Link to="/internships">Internship-uri</Link>
      <Link to="/login">Autentificare</Link>
      <Link to="/register">Înregistrare</Link>
      <Link to="/company/dashboard">Companii</Link>
    </nav>
  );
}

export default Navbar;
