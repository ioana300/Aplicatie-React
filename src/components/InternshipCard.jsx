
import { Link } from "react-router-dom";

function InternshipCard({ internship }) {
  return (
    <article>
      <h3>{internship.title}</h3>
      <p>{internship.company}</p>
      <p>{internship.city}</p>
      <Link to={`/internships/${internship.id}`}>
        Vezi detalii
      </Link>
    </article>
  );
}

export default InternshipCard;
