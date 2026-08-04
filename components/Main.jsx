import React, { useEffect, useState } from "react";
import Image from "next/image";
import Typed from "react-typed";
import Aos from "aos";
import "aos/dist/aos.css";
import mr_image from "../public/images/main/mr.png";

const CountdownTimer = () => {
  const targetDate = new Date("2026-11-19T09:00:00");

  const calculateTimeLeft = () => {
    const diff = targetDate - new Date();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };

  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    setMounted(true);
    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  const units = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <div className="countdown-wrapper">
      {units.map(({ label, value }) => (
        <div key={label} className="countdown-card">
          <span className="countdown-number">{String(value).padStart(2, "0")}</span>
          <span className="countdown-label">{label}</span>
        </div>
      ))}
    </div>
  );
};

const Main = () => {
  useEffect(() => {
    Aos.init({ duration: 700, once: true });
  }, []);

  return (
    <>
      {/* ── Hero Section ── */}
      <section className="hero-section">
        {/* Decorative blobs */}
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />

        <div className="hero-inner">
          {/* Left column */}
          <div className="hero-content" data-aos="fade-right">
            {/* Badge */}
            <div className="ieee-badge">
              <span className="badge-dot" />
              IEEE Technical Co-Sponsor · Record #72855
            </div>

            {/* Title */}
            <h1 className="hero-title">
              ICAICCIT
              <span className="hero-year"> 2026</span>
            </h1>

            {/* Subtitle */}
            <p className="hero-subtitle">
              4<sup>th</sup> International Conference on Advances in Computing,
              Communication and Information Technology
            </p>

            {/* Typed animation */}
            <div className="hero-typed-wrapper">
              <span className="typed-prefix">Focus: </span>
              <Typed
                strings={["Computing", "Communication", "Information Technology"]}
                typeSpeed={45}
                backSpeed={35}
                loop
                className="hero-typed"
              />
            </div>

            {/* Theme pill */}
            <div className="theme-pill">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ flexShrink: 0 }}>
                <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
              Theme: The Future of Innovation — Digital Technologies for Smart World
            </div>

            {/* Date banner */}
            <div className="date-banner">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ flexShrink: 0 }}>
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              19<sup>th</sup>&nbsp;–&nbsp;20<sup>th</sup>&nbsp;November, 2026
              &nbsp;·&nbsp;
              <span className="date-venue">Manav Rachna International Institute of Research and Studies</span>
            </div>

            {/* CTA buttons */}
            <div className="hero-cta-group">
              <a
                href="https://cmt3.research.microsoft.com/ICAICCIT-2024"
                target="_blank"
                rel="noreferrer"
                className="cta-primary"
              >
                Submit Paper
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
              <a href="/registration" className="cta-secondary">
                Register Now
              </a>
            </div>

            {/* Countdown */}
            <div data-aos="fade-up" data-aos-delay="300">
              <p className="countdown-heading">Conference starts in</p>
              <CountdownTimer />
            </div>
          </div>

          {/* Right column – image collage */}
          <div className="hero-image-side" data-aos="fade-left" data-aos-delay="150">
            <div className="collage-grid">
              <div className="collage-main">
                <Image
                  src={mr_image}
                  alt="Manav Rachna Campus"
                  width={700}
                  height={700}
                  className="collage-img"
                  priority
                />
              </div>
              {/* Floating stats cards */}
              <div className="stat-card stat-card-tl">
                <span className="stat-num">400+</span>
                <span className="stat-desc">Expected Papers</span>
              </div>
              <div className="stat-card stat-card-br">
                <span className="stat-num">3<sup>rd</sup> Ed.</span>
                <span className="stat-desc">Previous Editions</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="hero-wave">
          <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="white" />
          </svg>
        </div>
      </section>

    </>
  );
};

export default Main;
