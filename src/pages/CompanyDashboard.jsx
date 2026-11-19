
import { Link } from "react-router-dom";
import internships from "../data/internships";

function CompanyDashboard() {
  const companyName = "Compania mea";

  const companyInternships = internships.filter(
    (item) => item.company === companyName
  );

  return (
    <div className="page-container">
      <h1>Panoul companiei</h1>

      <p>Bine ai venit, {companyName}!</p>

      <div className="card-container">
        <div className="stat-card">
          <h3>Oferte publicate</h3>
          <h1>{companyInternships.length}</h1>
        </div>

        <div className="stat-card">
          <h3>Candidați</h3>
          <h1>0</h1>
        </div>

        <div className="stat-card">
          <h3>Oferte active</h3>
          <h1>{companyInternships.length}</h1>
        </div>
      </div>

      <div className="section-header">
        <h2>Ofertele companiei</h2>
        <Link to="/company-profile" className="primary-button">
          Profil companie
        </Link>
      </div>

      {companyInternships.length === 0 ? (
        <p>
          Nu ai publicat încă nicio ofertă.
          În această versiune, ofertele sunt demonstrative.
        </p>
      ) : (
        <div className="card-container">
          {companyInternships.map((item) => (
            <div className="internship-card" key={item.id}>
              <h3>{item.title}</h3>
              <p>{item.location}</p>
              <p>{item.domain}</p>
              <Link to={`/internships/${item.id}`}>
                Vezi oferta
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CompanyDashboard;
