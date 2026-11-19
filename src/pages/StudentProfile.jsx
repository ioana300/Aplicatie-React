
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function StudentProfile() {
  const navigate = useNavigate();

  const currentUser = JSON.parse(
    localStorage.getItem("currentUser") || "null"
  );

  const profileKey = currentUser
    ? `studentProfile_${currentUser.id}`
    : null;

  const savedProfile = profileKey
    ? JSON.parse(localStorage.getItem(profileKey) || "null")
    : null;

  const initialProfile = {
    name: savedProfile?.name || currentUser?.name || "",
    email: currentUser?.email || "",
    university: savedProfile?.university || "",
    specialization: savedProfile?.specialization || "",
    studyYear: savedProfile?.studyYear || "",
    skills: savedProfile?.skills || "",
    phone: savedProfile?.phone || "",
    city: savedProfile?.city || "",
    description: savedProfile?.description || ""
  };

  const [student, setStudent] = useState(initialProfile);
  const [editing, setEditing] = useState(!savedProfile);

  if (!currentUser) {
    return (
      <div className="page-container">
        <h2>Trebuie să te autentifici pentru a vedea profilul.</h2>
        <button
          className="primary-button"
          onClick={() => navigate("/login")}
        >
          Autentificare
        </button>
      </div>
    );
  }

  if (currentUser.role !== "student") {
    return <div className="page-container">
      <h2>Acest profil este destinat studenților.</h2>
    </div>;
  }

  function handleChange(event) {
    setStudent({
      ...student,
      [event.target.name]: event.target.value
    });
  }

  function handleSave(event) {
    event.preventDefault();

    localStorage.setItem(
      profileKey,
      JSON.stringify(student)
    );

    setEditing(false);
    alert("Profilul a fost actualizat cu succes!");
  }

  return (
    <div className="page-container">
      <div className="profile-header">
        <div>
          <h1>Profilul meu</h1>
          <p>Informațiile contului tău InternHub</p>
        </div>

        {!editing && (
          <button
            className="primary-button"
            onClick={() => setEditing(true)}
          >
            ✏️ Editează profilul
          </button>
        )}
      </div>

      {editing ? (
        <div className="form-card profile-card">
          <h2>Editează informațiile personale</h2>

          <form onSubmit={handleSave}>
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
              value={student.email}
              disabled
            />

            <label>Număr de telefon</label>
            <input
              name="phone"
              value={student.phone}
              onChange={handleChange}
              placeholder="Număr de telefon"
            />

            <label>Oraș</label>
            <input
              name="city"
              value={student.city}
              onChange={handleChange}
              placeholder="Orașul tău"
            />

            <label>Universitate</label>
            <input
              name="university"
              value={student.university}
              onChange={handleChange}
              placeholder="Universitatea"
            />

            <label>Specializare</label>
            <input
              name="specialization"
              value={student.specialization}
              onChange={handleChange}
              placeholder="Specializarea"
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

            <label>Despre mine</label>
            <textarea
              name="description"
              value={student.description}
              onChange={handleChange}
              placeholder="Scrie câteva informații despre tine..."
            />

            <div className="profile-actions">
              <button type="submit" className="primary-button">
                Salvează modificările
              </button>

              {savedProfile && (
                <button
                  type="button"
                  className="cancel-button"
                  onClick={() => {
                    setStudent(savedProfile);
                    setEditing(false);
                  }}
                >
                  Anulează
                </button>
              )}
            </div>
          </form>
        </div>
      ) : (
        <div className="profile-card">
          <div className="profile-avatar">
            {student.name.charAt(0).toUpperCase()}
          </div>

          <h2>{student.name}</h2>
          <p className="profile-subtitle">Student InternHub</p>

          <div className="profile-information">
            <h3>Informații personale</h3>
            <p><strong>Email:</strong> {student.email || "Necompletat"}</p>
            <p><strong>Telefon:</strong> {student.phone || "Necompletat"}</p>
            <p><strong>Oraș:</strong> {student.city || "Necompletat"}</p>

            <h3>Informații academice</h3>
            <p><strong>Universitate:</strong> {student.university || "Necompletat"}</p>
            <p><strong>Specializare:</strong> {student.specialization || "Necompletat"}</p>
            <p><strong>An de studiu:</strong> {student.studyYear || "Necompletat"}</p>

            <h3>Competențe</h3>
            <p>{student.skills || "Nu ai adăugat competențe."}</p>

            <h3>Despre mine</h3>
            <p>{student.description || "Nu ai adăugat o descriere."}</p>
          </div>

          <button
            className="primary-button"
            onClick={() => setEditing(true)}
          >
            ✏️ Editează profilul
          </button>
        </div>
      )}
    </div>
  );
}

export default StudentProfile;
