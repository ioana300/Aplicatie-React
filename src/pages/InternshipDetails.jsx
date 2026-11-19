
import { useParams } from "react-router-dom";
import { useState } from "react";
import internships from "../data/internships";

function InternshipDetails() {
  const { id } = useParams();

  const internship = internships.find(
    (item) => item.id === Number(id)
  );

  const [applied, setApplied] = useState(false);

  function applyForInternship() {
    const applications = JSON.parse(
      localStorage.getItem("applications") || "[]"
    );

    const alreadyApplied = applications.some(
      (item) => item.id === internship.id
    );

    if (alreadyApplied) {
      alert("Ai aplicat deja la acest internship!");
      return;
    }

    applications.push({
      ...internship,
      status: "În așteptare"
    });

    localStorage.setItem(
      "applications",
      JSON.stringify(applications)
    );

    setApplied(true);
    alert("Aplicația ta a fost înregistrată!");
  }

  if (!internship) {
    return <h2>Internshipul nu a fost găsit.</h2>;
  }

  return (
    <div className="page-container">
      <div className="details-card">
        <h1>{internship.title}</h1>

        <h2>{internship.company}</h2>

        <p><strong>Locație:</strong> {internship.location}</p>
        <p><strong>Program:</strong> {internship.type}</p>
        <p><strong>Domeniu:</strong> {internship.domain}</p>
        <p><strong>Durată:</strong> {internship.duration}</p>

        <h3>Descriere</h3>
        <p>{internship.description}</p>

        <h3>Cerințe</h3>
        <p>{internship.requirements}</p>

        <p>
          <strong>Plătit:</strong>{" "}
          {internship.paid ? "Da" : "Nu"}
        </p>

        <button
          className="primary-button"
          onClick={applyForInternship}
          disabled={applied}
        >
          {applied ? "Ai aplicat" : "Aplică acum"}
        </button>
      </div>
    </div>
  );
}

export default InternshipDetails;
