import { Globe, Phone, Star, Users } from "lucide-react";

const sections = [
  ["Tại sao chọn WebTutorCenter", "Nền tảng kết nối học viên với giáo viên gia sư chuyên nghiệp, linh hoạt và hiệu quả.", Star],
  ["Đội ngũ chất lượng cao", "Gia sư được kiểm duyệt chặt chẽ và được xếp hạng bởi học viên.", Users],
  ["Phạm vi toàn quốc", "Tìm kiếm giáo viên gia sư tại hơn 30 tỉnh thành với nhiều lựa chọn.", Globe],
  ["Hỗ trợ 24/7", "Đội hỗ trợ luôn sẵn sàng giải đáp câu hỏi và đồng hành cùng bạn.", Phone],
];

export default function IntroSections() {
  return (
    <div className="intro-content">
      <p className="eyebrow">Giá trị cốt lõi</p>
      <h2>Tại Sao Chọn WebTutorCenter</h2>
      <div className="intro-grid">
        {sections.map(([title, description, Icon]) => (
          <article className="intro-card" key={title}>
            <Icon size={30} />
            <h3>{title}</h3>
            <p>{description}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
