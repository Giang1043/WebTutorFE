import { useState } from "react";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function HeroSearchBar() {
  const [subject, setSubject] = useState("");
  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();
    const value = subject.trim();
    if (value) navigate(`/tutors?subject=${encodeURIComponent(value)}`);
  };

  return (
    <div className="hero-content">
      <p className="eyebrow">WebTutorCenter</p>
      <h1>
        Tìm <span>Gia Sư Phù Hợp</span>
      </h1>
      <p className="hero-description">
        Kết nối với giáo viên gia sư chuyên nghiệp trên toàn quốc. Học tập linh hoạt,
        hiệu quả và đúng nhu cầu của bạn.
      </p>
      <form className="search-form" onSubmit={handleSearch}>
        <Search aria-hidden="true" size={20} />
        <input
          aria-label="Môn học cần tìm"
          placeholder="Nhập môn học (Toán, Tiếng Anh, ...)"
          value={subject}
          onChange={(event) => setSubject(event.target.value)}
        />
        <button type="submit">Tìm kiếm</button>
      </form>
      <div className="hero-links">
        <a href="#tutors">Xem gia sư nổi bật</a>
        <a href="#about">Tìm hiểu về chúng tôi</a>
      </div>
    </div>
  );
}
