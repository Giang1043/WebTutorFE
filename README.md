# WebTutorCenter Home Page

Đây là vertical slice của tính năng **Trang chủ** được tách từ
`WebTutorCentrer_FE` theo `feature-catalog.md`.

## Phạm vi

- Hero và tìm kiếm gia sư theo môn học.
- Top gia sư, gia sư mới và top gia sư trong tháng.
- Các section giới thiệu và CTA cuối trang.
- Không kéo theo auth, admin, Redux store hoặc `node_modules`.

## Chạy

```bash
npm install
npm run dev
```

Mặc định frontend gọi backend tại `http://localhost:5002/api`. Có thể đổi bằng
`VITE_API_BASE_URL`.

## API phụ thuộc

- `GET /tutors/top?limit=10`
- `GET /tutors/new?days=30&limit=10`
- `GET /tutors/top/month/current?limit=10`
