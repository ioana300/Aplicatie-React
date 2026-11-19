
import { useState } from "react";

function StudentProfile() {
  const [student, setStudent] = useState({
    name: "",
    email: "",
    university: "",
    specialization: "",
    studyYear: "",
    skills: ""
  });

  function handleChange(event) {
    setStudent({
      ...student,
      [event.target.name]: event.target.value
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    localStorage.setItem(
      "studentProfile",
      JSON.stringify(student)
    );

    alert("Profilul studentului a fost salvat!");
  }

  return (
    <div className="page-container">
      <div className="form-card">
        <h1>Profilul meu de student</h1>

        <form onSubmit={handleSubmit}>
          <label>Nume complet</label>
          <input
            name="name"
            value={student.name}
            onChange={handleChange}
            required
          />

          <label>Email</label>
          <input
            type="email"
            name="email"
            value={student.email}
            onChange={handleChange}
            required
          />

          <label>Universitate</label>
          <input
            name="university"
            value={student.university}
            onChange={handleChange}
          />

          <label>Specializare</label>
          <input
            name="specialization"
            value={student.specialization}
            onChange={handleChange}
          />

          <label>An de studiu</label>
          <select
            name="studyYear"
            value={student.studyYear}
            onChange={handleChange}
          >
            <option value="">Alege anul</option>
            <option value="1">Anul I</option>
            <option value="2">Anul II</option>
            <option value="3">Anul III</option>
            <option value="4">Anul IV</option>
            <option value="Master">Master</option>
          </select>

          <label>Competențe</label>
          <textarea
            name="skills"
            value={student.skills}
            onChange={handleChange}
            placeholder="Ex: Java, Python, HTML, CSS..."
          />

          <button className="primary-button">
            Salvează profilul
          </button>
        </form>
      </div>
    </div>
  );
}

export default StudentProfile;
