import { Trophy, Users } from "lucide-react";
import { Link } from "react-router-dom";

export default function TopThisMonthTutors({ tutors }) {
  return (
    <aside className="monthly-card">
      <h2><Trophy size={20} /> Top tháng này</h2>
      {tutors.length === 0 ? (
        <p className="state-message">Không có dữ liệu.</p>
      ) : (
        <ol>
          {tutors.map((tutor) => (
            <li key={tutor.id}>
              <Link to={`/tutors/${tutor.id}`}>
                <strong>{tutor.fullName}</strong>
                <span><Users size={13} /> {tutor.classesAcceptedThisMonth || 0} lớp</span>
              </Link>
            </li>
          ))}
        </ol>
      )}
      <Link className="all-tutors-link" to="/tutors">Xem tất cả</Link>
    </aside>
  );
}
