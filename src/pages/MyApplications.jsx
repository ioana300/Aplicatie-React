
function MyApplications() {
  const applications = JSON.parse(
    localStorage.getItem("applications") || "[]"
  );

  return (
    <div className="page-container">
      <h1>Aplicațiile mele</h1>

      {applications.length === 0 ? (
        <p>Nu ai aplicat încă la niciun internship.</p>
      ) : (
        <div className="card-container">
          {applications.map((application) => (
            <div className="internship-card" key={application.id}>
              <h2>{application.title}</h2>
              <h3>{application.company}</h3>

              <p>Locație: {application.location}</p>

              <p>
                Status: <strong>{application.status}</strong>
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MyApplications;
