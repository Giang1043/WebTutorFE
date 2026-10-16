import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:5002/api",
});

const readTutors = (response) => response.data?.data?.tutors || [];

export async function getHomeTutors() {
  const [top, newest, monthly] = await Promise.all([
    api.get("/tutors/top", { params: { limit: 10 } }),
    api.get("/tutors/new", { params: { days: 30, limit: 10 } }),
    api.get("/tutors/top/month/current", { params: { limit: 10 } }),
  ]);

  return {
    topTutors: readTutors(top),
    newTutors: readTutors(newest),
    monthlyTutors: readTutors(monthly),
  };
}
