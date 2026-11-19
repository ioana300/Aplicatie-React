
import { Link } from "react-router-dom";
import internships from "../data/internships";

function InternshipList() {
  return (
    <div className="page-container">
      <h1>Oferte de internship</h1>
      <p>Descoperă oportunitățile disponibile.</p>

      <div className="card-container">
        {internships.map((internship) => (
          <div className="internship-card" key={internship.id}>
            <h2>{internship.title}</h2>

            <h3>{internship.company}</h3>

            <p>Locație: {internship.location}</p>
            <p>Tip: {internship.type}</p>
            <p>Domeniu: {internship.domain}</p>
            <p>Durată: {internship.duration}</p>

            <Link
              to={`/internships/${internship.id}`}
              className="primary-button"
            >
              Vezi detalii
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default InternshipList;
