
import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    alert("Autentificarea va fi conectată la sistemul de utilizatori.");
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
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Parolă</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button className="primary-button">
            Intră în cont
          </button>
        </form>

        <p>
          Nu ai cont? <Link to="/register">Înregistrează-te</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
