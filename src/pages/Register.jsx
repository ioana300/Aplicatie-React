
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "student"
  });

  function handleChange(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const users = JSON.parse(
      localStorage.getItem("users") || "[]"
    );

    const existingUser = users.find(
      user => user.email.toLowerCase() === form.email.toLowerCase()
    );

    if (existingUser) {
      alert("Există deja un cont cu acest email!");
      return;
    }

    const newUser = {
      ...form,
      id: Date.now()
    };

    users.push(newUser);

    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("currentUser", JSON.stringify(newUser));
    window.dispatchEvent(new Event("authChanged"));

    alert("Contul a fost creat cu succes!");

    navigate(
      form.role === "student"
        ? "/student-profile"
        : "/company-profile"
    );
  }

  return (
    <div className="page-container">
      <div className="form-card">
        <h1>Creare cont InternHub</h1>
        <p>Înregistrează-te pentru a descoperi oportunități.</p>

        <form onSubmit={handleSubmit}>
          <label>Nume complet</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <label>Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <label>Parolă</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            minLength="6"
            required
          />

          <label>Tip cont</label>
          <select
            name="role"
            value={form.role}
            onChange={handleChange}
          >
            <option value="student">Student</option>
            <option value="company">Companie</option>
          </select>

          <button type="submit" className="primary-button">
            Creează cont
          </button>
        </form>

        <p>
          Ai deja cont? <Link to="/login">Autentificare</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
