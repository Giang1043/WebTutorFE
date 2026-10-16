import { useEffect, useState } from "react";
import HomeCTA from "../components/home/HomeCTA";
import IntroSections from "../components/home/IntroSections";
import HeroSearchBar from "../components/home/HeroSearchBar";
import TopThisMonthTutors from "../components/home/TopThisMonthTutors";
import TopTutorCard from "../components/home/TopTutorCard";
import { getHomeTutors } from "../services/homeService";

export default function HomePage() {
  const [state, setState] = useState({
    topTutors: [],
    newTutors: [],
    monthlyTutors: [],
    loading: true,
    error: null,
  });

  useEffect(() => {
    let active = true;

    getHomeTutors()
      .then((data) => {
        if (active) setState({ ...data, loading: false, error: null });
      })
      .catch((error) => {
        if (active) {
          setState((current) => ({
            ...current,
            loading: false,
            error: error.message || "Không tải được dữ liệu trang chủ.",
          }));
        }
      });

    return () => {
      active = false;
    };
  }, []);

  return (
    <main>
      <section className="hero">
        <HeroSearchBar />
      </section>

      <section className="tutors-section" id="tutors">
        <div className="tutors-content">
          <section>
            <div className="section-heading">
              <span aria-hidden="true">✦</span>
              <h2>Top Gia Sư</h2>
            </div>
            <TutorGrid
              tutors={state.topTutors.slice(0, 6)}
              loading={state.loading}
              error={state.error}
            />

            <div className="section-heading new-heading">
              <span aria-hidden="true">◷</span>
              <h2>Gia Sư Mới</h2>
            </div>
            <TutorGrid
              tutors={state.newTutors.slice(0, 6)}
              loading={state.loading}
              error={state.error}
            />
          </section>

          <TopThisMonthTutors tutors={state.monthlyTutors.slice(0, 10)} />
        </div>
      </section>

      <section className="intro-section" id="about">
        <IntroSections />
      </section>
      <HomeCTA />
    </main>
  );
}

function TutorGrid({ tutors, loading, error }) {
  if (loading) return <p className="state-message">Đang tải...</p>;
  if (error) return <p className="state-message error-message">{error}</p>;
  if (tutors.length === 0) return <p className="state-message">Không có dữ liệu.</p>;

  return (
    <div className="tutor-grid">
      {tutors.map((tutor) => (
        <TopTutorCard key={tutor.id} tutor={tutor} />
      ))}
    </div>
  );
}
