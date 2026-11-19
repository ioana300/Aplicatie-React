
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-page">
      <section className="hero">
        <h1>Descoperă oportunitățile tale de carieră!</h1>

        <p>
          InternHub conectează studenții cu firmele care oferă
          oportunități de internship și dezvoltare profesională.
        </p>

        <Link to="/internships" className="primary-button">
          Explorează internshipurile
        </Link>
      </section>

      <section className="features">
        <h2>De ce InternHub?</h2>

        <div className="card-container">
          <div className="feature-card">
            <h3>Oportunități diverse</h3>
            <p>Descoperă internshipuri din diferite domenii.</p>
          </div>

          <div className="feature-card">
            <h3>Aplicare simplă</h3>
            <p>Aplică rapid la oportunitățile care te interesează.</p>
          </div>

          <div className="feature-card">
            <h3>Dezvoltare profesională</h3>
            <p>Obține experiență și începe-ți cariera.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
