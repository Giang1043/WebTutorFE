import { Link } from "react-router-dom";

export default function HomeCTA() {
  return (
    <section className="home-cta">
      <h2>Sẵn sàng bắt đầu hành trình học tập?</h2>
      <p>Đăng tin tìm gia sư hoặc bắt đầu hành trình trở thành gia sư ngay hôm nay.</p>
      <div>
        <Link to="/find-tutor">Đăng tin tìm gia sư</Link>
        <Link to="/register-tutor">Trở thành gia sư</Link>
      </div>
    </section>
  );
}
