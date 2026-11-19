
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const users = JSON.parse(
      localStorage.getItem("users") || "[]"
    );

    const user = users.find(
      item =>
        item.email.toLowerCase() === email.toLowerCase() &&
        item.password === password
    );

    if (!user) {
      alert("Email sau parolă incorectă!");
      return;
    }

    localStorage.setItem("currentUser", JSON.stringify(user));
    window.dispatchEvent(new Event("authChanged"));

    alert("Te-ai autentificat cu succes!");

    navigate(
      user.role === "student"
        ? "/student-profile"
        : "/company-profile"
    );
  }

  return (
    <div className="page-container">
      <div className="form-card">
        <h1>Autentificare</h1>
        <p>Bine ai revenit pe InternHub!</p>

        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />

          <label>Parolă</label>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />

          <button type="submit" className="primary-button">
            Intră în cont
          </button>
        </form>

        <p>
          Nu ai cont?
          <Link to="/register"> Înregistrează-te</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
