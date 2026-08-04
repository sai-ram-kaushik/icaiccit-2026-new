import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const CalendarIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const dates = [
  { label: "Paper Submission Last Date",        value: <>5<sup>th</sup> Sept, 2026</> },
  { label: "Acceptance Notification Date",      value: <>30<sup>th</sup> Sept, 2026</> },
  { label: "Camera Ready Manuscript Deadline",  value: <>10<sup>th</sup> Oct, 2026</> },
  { label: "Conference Registration Deadline",  value: <>20<sup>th</sup> Oct, 2026</> },
  { label: "Conference Dates",                  value: <>19<sup>th</sup> – 20<sup>th</sup> November, 2026</> },
];

const Dates = () => {
  useEffect(() => {
    Aos.init({ duration: 600, once: true });
  }, []);

  return (
    <section className="dates-section" data-aos="fade-up">
      <h2 className="dates-title">
        Important <span>Dates</span>
      </h2>

      <div className="dates-grid">
        {dates.map(({ label, value }, i) => (
          <div
            key={i}
            className="date-row"
            data-aos="fade-up"
            data-aos-delay={i * 60}
          >
            <div className="date-icon">
              <CalendarIcon />
            </div>
            <span className="date-label">{label}</span>
            <span className="date-value">{value}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Dates;
