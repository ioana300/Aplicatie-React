
import { useState } from "react";

function CompanyProfile() {
  const [company, setCompany] = useState({
    name: "",
    email: "",
    website: "",
    description: "",
    location: ""
  });

  function handleChange(event) {
    setCompany({
      ...company,
      [event.target.name]: event.target.value
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    localStorage.setItem(
      "companyProfile",
      JSON.stringify(company)
    );

    alert("Profilul companiei a fost salvat!");
  }

  return (
    <div className="page-container">
      <div className="form-card">
        <h1>Profil companie</h1>

        <form onSubmit={handleSubmit}>
          <label>Numele companiei</label>
          <input
            name="name"
            value={company.name}
            onChange={handleChange}
            required
          />

          <label>Email</label>
          <input
            type="email"
            name="email"
            value={company.email}
            onChange={handleChange}
            required
          />

          <label>Website</label>
          <input
            name="website"
            value={company.website}
            onChange={handleChange}
          />

          <label>Locație</label>
          <input
            name="location"
            value={company.location}
            onChange={handleChange}
          />

          <label>Descriere</label>
          <textarea
            name="description"
            value={company.description}
            onChange={handleChange}
          />

          <button className="primary-button">
            Salvează profilul
          </button>
        </form>
      </div>
    </div>
  );
}

export default CompanyProfile;
