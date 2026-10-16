import { MapPin, Users } from "lucide-react";
import { Link } from "react-router-dom";

export default function TopTutorCard({ tutor }) {
  const location = [tutor.currentArea?.districtName, tutor.currentArea?.provinceName]
    .filter(Boolean)
    .join(", ");

  return (
    <Link className="tutor-card" to={`/tutors/${tutor.id}`}>
      <div className="avatar">
        {tutor.avatar ? <img src={tutor.avatar} alt={tutor.fullName} /> : tutor.fullName?.charAt(0) || "G"}
      </div>
      <h3>{tutor.fullName}</h3>
      {tutor.reviewCount > 0 && (
        <p className="rating">★ {Number(tutor.averageRating || 0).toFixed(1)}</p>
      )}
      {location && (
        <p className="meta">
          <MapPin size={14} /> {location}
        </p>
      )}
      <p className="classes">
        <Users size={14} /> {tutor.totalClassesAccepted || 0} lớp
      </p>
      {tutor.subjects?.length > 0 && <p className="subjects">{tutor.subjects.slice(0, 2).join(" · ")}</p>}
    </Link>
  );
}
