import React, { useState, useEffect } from "react";
import Head from "next/head";
import Aos from "aos";
import "aos/dist/aos.css";

const KeynoteSpeakers = () => {
  const [showPastSpeakers, setShowPastSpeakers] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 600, once: true });
  }, []);

  const keynoteSpeakers2026 = [
    {
      name: "Dr. Vivek Shrivastava",
      role: "Guest of Honour",
      badge: "Guest of Honour ",
      designation: "Vice Chair",
      affiliation: "IEEE Delhi Section, Professor and Dean (Planning & Development), NIT Uttarakhand",
      photo: "/images/keynote_speakers/vivek.jpeg",
    },
    {
      name: "Prof. M. N. Hoda",
      role: "Guest of Honour",
      badge: "Guest of Honour",
      designation: "Director",
      affiliation: "Bharati Vidyapeeth’s Institute of Computer Applications & Management (BVICAM), (GGSIP University, New Delhi) & Chairperson IEEE Delhi Section",
      photo: "/images/keynote_speakers/hoda.jpeg",
    },
    {
      name: "Dr. Mohammed Ishaq",
      role: "Keynote Speaker",
      badge: "Keynote Speaker",
      designation:
        "Professor, Department of Computer Science and Information Technology",
      affiliation: "Jeddah International College, Saudi Arabia",
      talkTitle:
        "Brains, Watts, and Smart Grids: A Neuromorphic Path to Ultra-Efficient, Edge-Ready AI",
      photo: "/images/keynote_speakers/mohammed_ishaq.png",
    },
    {
      name: "Dr. Muhammad Mokhzaini Bin Azizan",
      role: "Keynote Speaker",
      badge: "Keynote Speaker",
      designation: "Deputy Director (Research Grant Management Division)",
      affiliation:
        "Research and Innovation Management Centre (RIMC), Universiti Sains Islam Malaysia (USIM), Malaysia",
      photo: "/images/keynote_speakers/muhammad_mokhzaini.jpeg",
    },
    {
      name: "Dr. Ankit Agrawal",
      role: "Keynote Speaker",
      badge: "Keynote Speaker",
      designation:
        "Research Professor, Department of Electrical and Computer Engineering",
      affiliation:
        "McCormick School of Engineering and Applied Science, Northwestern University, USA",
      photo: "/images/keynote_speakers/ankit_agrawal.png",
    },
    {
      name: "Ong Ling Chuen (Michael)",
      role: "Keynote Speaker",
      badge: "Keynote Speaker",
      designation: "Chair, IEEE Singapore Section",
      affiliation:
        "Senior Scientist, Institute for Infocomm Research, A*STAR, Singapore",
      photo: "/images/keynote_speakers/michael_ong.jpeg",
    },
    {
      name: "Dr. Vasileios Paliktzoglou",
      role: "Keynote Speaker",
      badge: "Keynote Speaker",
      designation: "Bahrain Polytechnic",
      affiliation: "Isa Town, Bahrain",
      photo: "/images/keynote_speakers/vasileios_paliktzoglou.jpg",
    },
    {
      name: "Dr. Nabila Husna Shabrina",
      role: "Keynote Speaker",
      badge: "Keynote Speaker",
      designation: "Head of Research and Innovation",
      affiliation: "Associate Professor in Computer Engineering, Universitas Multimedia Nusantara, Indonesia",
      photo: "/images/keynote_speakers/nabila.jpeg",
    },
    {
      name: "Prof. (Dr.)  Maheshi Dissanayake",
      role: "Keynote Speaker",
      badge: "Keynote Speaker",
      designation: "Faculty of Engineering,",
      affiliation: "University of Peradeniya, Sri Lanka",
      photo: "/images/keynote_speakers/maheshi.jpeg",
    },
  ];

  const pastSpeakers2025 = [
    {
      photo: "/images/resource_person/anil.png",
      designation: "Chairman , AICTE , New Delhi",
      name: "Prof Anil D Sahasrabudhe (Chief Guest ICAICCIT-2025)",
    },
    {
      photo: "/images/resource_person/neyara.png",
      designation: "Liwa University, Abu Dhabi, UAE",
      name: "Dr. Neyara Radwan",
    },
    {
      photo: "/images/resource_person/muzammil.png",
      designation:
        "Deputy Commander of KOR-SUKSIS UniMAP, Executive Commitee IEEE APMTTEMC Malaysia Joint Chapter, Faculty of Electronic Engineering Technology, Universiti Malaysia Perlis.",
      name: "Dr. Muzammil Bin Jusoh",
    },
    {
      photo: "/images/resource_person/subarna.png",
      designation:
        "Professor & Director, IT Innovation Center Tribhuvan University, Nepal",
      name: "Dr. Subarna Shakya",
    },
    {
      photo: "/images/resource_person/siri.jpeg",
      designation: "IEEE Fellow, Chairman of AtheroPoint, Roseville, CA, USA",
      name: "Dr. Jasjit S. Suri",
    },
    {
      photo: "/images/resource_person/sateesh.png",
      designation:
        "Professor of Computer Engineering, Professor CSE & Head ICC @ IIT Roorkee | Treasurer IEEE Roorkee",
      name: "Dr. P. Sateesh",
    },
    {
      photo: "/images/resource_person/christopher.jpeg",
      designation:
        "Director of the Computer Science Research Institute School of Computing at Ulster University.",
      name: "Prof. Christopher Nugent",
    },
    {
      photo: "/images/resource_person/swapnoneel.jpeg",
      designation:
        "FIS Distinguished Professor of Computing, University of North Florida",
      name: "Dr. Swapnoneel Roy",
    },
    {
      photo: "/images/resource_person/sujit.jpeg",
      designation:
        "Computer Scientist- AI, Huntsville, Alabama, United States",
      name: "Dr .Sujit Roy",
    },
    {
      photo: "/images/resource_person/ankit.jpg",
      designation:
        "Research Professor, Department of ECE McCormick School of Engineering, Northwestern University",
      name: "Dr. Ankit Agrawal",
    },
    {
      photo: "/images/resource_person/murali.jpg",
      designation:
        "Scientist-G & Head Interdisciplinary Cyber Physical Systems Division, Department of Science and Technology, New Delhi, India",
      name: "Dr. K R Murali Mohan",
    },
    {
      photo: "/images/resource_person/haider_raza.jpg",
      designation:
        "Senior Lecturer School of Computer Science and Electronic Engineering (CSEE), University of Essex",
      name: "Dr Haider Raza",
    },
    {
      photo: "/images/resource_person/kamlesh.jpg",
      designation: "Associate Professor, NIT, Hamripur(HP)",
      name: "Dr.(Mrs.) Kamlesh Dutta",
    },
    {
      photo: "/images/resource_person/valentina.png",
      designation:
        "Head of the Intelligent Systems Research Centre, IEEE Senior Member",
      name: "Prof. Valentina Emilia Balas",
    },
    {
      photo: "/images/resource_person/rajeev.jpg",
      designation:
        "Professor and Dean (Resource and Alumni Affairs) Department of Computer Science and Engineering, IIT - BHU",
      name: "Dr. Rajeev Srivastava",
    },
  ];

  return (
    <>
      <Head>
        <title>Keynote Speakers & Guests of Honor | ICAICCIT-2026</title>
        <meta
          name="description"
          content="Keynote Speakers and Guests of Honor for the 4th International Conference on Advances in Computing, Communication and Information Technology (ICAICCIT-2026)."
        />
      </Head>

      <section className="py-12 md:py-16 bg-gradient-to-b from-slate-50 via-white to-slate-50 text-gray-700 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto" data-aos="fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs sm:text-sm font-semibold mb-4 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#3FBA96] animate-pulse"></span>
              ICAICCIT-2026 Keynote Addresses
            </div>
            <h1 className="text-gray-800 md:text-5xl text-3xl font-bold font-playFair tracking-tight">
              Guest of <span className="text-[#3FBA96]">Honor</span> & Keynote{" "}
              <span className="text-[#3FBA96]">Speakers</span>
            </h1>
            <p className="mt-4 text-gray-600 text-sm sm:text-base leading-relaxed">
              4<sup>th</sup> International Conference on Advances in Computing,
              Communication and Information Technology (ICAICCIT-2026)
            </p>
            <p className="mt-1 text-xs sm:text-sm text-gray-500 font-medium">
              19–20 November 2026 · Technically Co-Sponsored by IEEE Delhi Section
              (IEEE Record #72855)
            </p>
          </div>

          {/* 2026 Keynote Speakers Cards */}
          <div className="flex flex-wrap justify-center gap-8 mt-12">
            {keynoteSpeakers2026.map((speaker, i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 80}
                className="w-full sm:w-[350px] lg:w-[360px] bg-white rounded-2xl p-6 sm:p-7 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#3FBA96]/60 flex flex-col justify-between items-center text-center group relative overflow-hidden"
              >
                {/* Gradient Accent Bar */}
                <div className="h-1.5 w-full bg-gradient-to-r from-[#3FBA96] via-[#0ea5c0] to-[#3FBA96] absolute top-0 left-0" />

                <div className="w-full flex flex-col items-center">
                  {/* Avatar Container */}
                  <div className="relative mb-4 mt-2">
                    <div className="w-36 h-36 sm:w-40 sm:h-40 rounded-full p-1 ring-4 ring-[#3FBA96]/20 group-hover:ring-[#3FBA96] transition-all duration-300 bg-gradient-to-br from-[#3FBA96]/10 to-[#0ea5c0]/10 flex items-center justify-center overflow-hidden shadow-sm">
                      <img
                        src={speaker.photo}
                        alt={speaker.name}
                        className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                    {speaker.badge && (
                      <span
                        className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 text-white text-xs font-semibold px-3 py-0.5 rounded-full shadow-md whitespace-nowrap ${speaker.badge === "Guest of Honour"
                            ? "bg-gradient-to-r from-amber-500 to-rose-500"
                            : speaker.badge === "Online"
                              ? "bg-gradient-to-r from-blue-600 to-indigo-600"
                              : "bg-gradient-to-r from-[#3FBA96] to-[#0ea5c0]"
                          }`}
                      >
                        {speaker.badge}
                      </span>
                    )}
                  </div>

                  {/* Speaker Name */}
                  <h3 className="text-xl font-bold text-gray-800 font-playFair mt-3 group-hover:text-[#0ea5c0] transition-colors">
                    {speaker.name}
                  </h3>

                  {/* Speaker Role */}
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#de0650] mt-1">
                    {speaker.role}
                  </p>

                  {/* Designation & Affiliation */}
                  <p className="text-sm font-medium text-gray-700 mt-3 leading-snug">
                    {speaker.designation}
                  </p>
                  {speaker.affiliation && (
                    <p className="text-xs text-gray-500 mt-1.5 leading-relaxed">
                      {speaker.affiliation}
                    </p>
                  )}
                </div>

                {/* Optional Keynote Talk Title */}
                {speaker.talkTitle && (
                  <div className="mt-5 pt-3.5 border-t border-gray-100 w-full text-left bg-gradient-to-br from-emerald-50/70 to-teal-50/40 p-3.5 rounded-xl border border-emerald-100/80">
                    <div className="flex items-center gap-1.5 text-[#0f766e] text-xs font-bold uppercase tracking-wider">
                      <svg
                        className="w-4 h-4 text-[#3FBA96] flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                        />
                      </svg>
                      Keynote Talk Title
                    </div>
                    <p className="text-xs sm:text-sm font-semibold text-gray-800 mt-1.5 italic leading-snug">
                      &ldquo;{speaker.talkTitle}&rdquo;
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Past Speakers Accordion / Toggle */}
          <div className="mt-20 pt-10 border-t border-gray-200 text-center">
            <button
              onClick={() => setShowPastSpeakers(!showPastSpeakers)}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border-2 border-gray-300 hover:border-[#3FBA96] text-gray-700 hover:text-[#3FBA96] font-semibold text-sm transition-all duration-200 shadow-sm hover:shadow"
            >
              <span>
                {showPastSpeakers ? "Hide" : "View"} Past Speakers & Resource
                Persons (ICAICCIT-2025)
              </span>
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${showPastSpeakers ? "rotate-180" : ""
                  }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {showPastSpeakers && (
              <div className="mt-10" data-aos="fade-up">
                <h2 className="text-2xl font-bold font-playFair text-gray-700 mb-8">
                  Distinguished Speakers & Resource Persons — ICAICCIT-2025
                </h2>
                <div className="flex items-center justify-center gap-8 flex-wrap">
                  {pastSpeakers2025.map((resource, i) => (
                    <div
                      key={i}
                      className="border border-cyan-600/30 hover:border-cyan-600 bg-white shadow-sm hover:shadow-md transition-shadow relative w-[18rem] min-h-[22rem] p-6 rounded-xl flex flex-col items-center justify-center text-center"
                    >
                      <div className="w-28 h-28 rounded-full overflow-hidden shadow mb-3">
                        <img
                          src={resource.photo}
                          alt={resource.name}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <p className="text-base font-bold text-gray-800">
                        {resource.name}
                      </p>
                      <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                        {resource.designation}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default KeynoteSpeakers;
