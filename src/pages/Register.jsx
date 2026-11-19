
import { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
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

    localStorage.setItem("user", JSON.stringify(form));

    alert("Contul a fost creat!");
  }

  return (
    <div className="page-container">
      <div className="form-card">
        <h1>Creare cont InternHub</h1>

        <form onSubmit={handleSubmit}>
          <label>Nume</label>
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

          <button className="primary-button">
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
