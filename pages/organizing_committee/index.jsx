import React, { useEffect } from "react";
import Head from "next/head";
import Aos from "aos";
import "aos/dist/aos.css";

const CommitteeCard = ({ member, index }) => (
  <div
    data-aos="fade-up"
    data-aos-delay={(index % 4) * 80}
    className="w-full sm:w-[350px] lg:w-[360px] bg-white rounded-2xl p-6 sm:p-7 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#3FBA96]/60 flex flex-col justify-between items-center text-center group relative overflow-hidden"
  >
    {/* Gradient Accent Bar */}
    <div className="h-1.5 w-full bg-gradient-to-r from-[#3FBA96] via-[#0ea5c0] to-[#3FBA96] absolute top-0 left-0" />

    <div className="w-full flex flex-col items-center">
      {/* Avatar Container */}
      <div className="relative mb-4 mt-2">
        <div className="w-36 h-36 sm:w-40 sm:h-40 rounded-full p-1 ring-4 ring-[#3FBA96]/20 group-hover:ring-[#3FBA96] transition-all duration-300 bg-gradient-to-br from-[#3FBA96]/10 to-[#0ea5c0]/10 flex items-center justify-center overflow-hidden shadow-sm">
          {member.photo ? (
            <img
              src={member.photo}
              alt={member.name}
              className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full rounded-full bg-gradient-to-br from-emerald-50 to-teal-100 flex items-center justify-center text-[#3FBA96]">
              <svg
                className="w-16 h-16 opacity-75"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            </div>
          )}
        </div>
        {member.badge && (
          <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 text-white text-xs font-semibold px-3 py-0.5 rounded-full shadow-md whitespace-nowrap bg-gradient-to-r from-[#3FBA96] to-[#0ea5c0]">
            {member.badge}
          </span>
        )}
      </div>

      {/* Member Name */}
      <h3 className="text-xl font-bold text-gray-800 font-playFair mt-3 group-hover:text-[#0ea5c0] transition-colors">
        {member.name}
      </h3>

      {/* Member Role */}
      {member.role && (
        <p className="text-xs font-semibold uppercase tracking-wider text-[#de0650] mt-1">
          {member.role}
        </p>
      )}

      {/* Designation */}
      <p className="text-sm font-medium text-gray-700 mt-3 leading-snug">
        {member.designation}
      </p>
      {member.affiliation && (
        <p className="text-xs text-gray-500 mt-1.5 leading-relaxed">
          {member.affiliation}
        </p>
      )}
    </div>
  </div>
);

const SectionHeading = ({ title }) => (
  <div className="mt-20 text-center" data-aos="fade-up">
    <div className="inline-block">
      <h2 className="text-[#de0650] text-2xl sm:text-3xl font-bold font-playFair tracking-wide">
        {title}
      </h2>
      <div className="h-1 w-12 bg-[#3FBA96] mx-auto mt-2 rounded-full" />
    </div>
  </div>
);

const OrganizingCommittee = () => {
  useEffect(() => {
    Aos.init({ duration: 600, once: true });
  }, []);

  const chief_patron = [
    {
      photo: "/images/chief_patrons/prashant.webp",
      designation: "President, MREI",
      name: "Dr. Prashant Bhalla",
      role: "Chief Patron",
      badge: "Chief Patron",
    },
    {
      photo: "/images/chief_patrons/Amit.jpg",
      designation: "Vice President, MREI",
      name: "Dr. Amit Bhalla",
      role: "Chief Patron",
      badge: "Chief Patron",
    },
    {
      photo: "/images/chief_patrons/aggarwal.jpeg",
      designation:
        "Vice-Chancellor, South Asian University, Former VC, Delhi, GGS Indraprastha University & Chairperson National Board of Accreditation, India.",
      name: "Prof. (Dr.) K.K. Aggarwal",
      role: "Chief Patron",
      badge: "Chief Patron",
    },
  ];

  const patrons = [
    {
      photo: "/images/patrons/sanjay.jpg",
      designation: "Vice Chancellor, MRIIRS",
      name: "Dr. Sanjay Shrivastava",
      role: "Patron",
      badge: "Patron",
    },
    {
      photo: "/images/patrons/prerna.jpeg",
      designation:
        "Director, West Campus, Netaji Subhas University of Technology, Professor, Department of Electrical Engineering, NSUT Director and Member Secretary, NSUT-IIF (Technical Business Incubator Chair Elect IEEE India Council 2023, Chair IEEE PES-IAS Delhi Chapter 2023, Past Chair, IEEE Delhi Section Fellow-IEI, Fellow- IETE, LMISTE, Senior member IEEE, USA,",
      name: "Prof. (Dr.) Prerna Gaur",
      role: "Patron",
      badge: "Patron",
    },
  ];

  const generalChair = [
    {
      photo: "/images/general_chair/Tapas.jpeg",
      designation:
        "Dean, Institute of Engineering & Technology, JK Lakshmipat University",
      name: "Dr. Tapas Kumar",
      role: "General Chair",
      badge: "General Chair",
    },
    {
      photo: "/images/patrons/pardeep.jpg",
      designation: "PVC & Dean, School of Engineering, MRIIRS",
      name: "Dr. Pardeep Kumar",
      role: "General Chair",
      badge: "General Chair",
    },
  ];

  const chair = [
    {
      photo: "/images/chair/suresh.jpg",
      designation: "Professor, CSE, SET, MRIIRS",
      name: "Dr. Suresh Kumar",
      role: "Conference Chair",
      badge: "Chair",
    },
    {
      photo: "/images/chair/taha.jpeg",
      designation: "Principal Lecturer, Nottingham Trent University, UK",
      name: "Dr. Taha Osman",
      role: "Conference Chair",
      badge: "Chair",
    },
    {
      photo: "/images/patrons/brij.jpeg",
      designation:
        "Senior Member, IEEE, ACM, Member-in-Large, Board of Governors, IEEE Consumer Technology Society (2022-2024)",
      name: "Prof. (Dr.) Brij B. Gupta",
      role: "Conference Chair",
      badge: "Chair",
    },
  ];

  const co_chair = [
    {
      photo: "/images/co-chair/rashima.jpeg",
      designation: "Director IQAC & Professor, MRIIRS",
      name: "Dr. Rashima Mahajan",
      role: "Co-Chair",
      badge: "Co-Chair",
    },
    {
      name: "Dr. Satyajeet Srivastava",
      designation: "Professor, CSE Department, SET, MRIIRS",
      role: "Co-Chair",
      badge: "Co-Chair",
    },
    {
      name: "Dr. Sudhanshu Morya",
      designation: "Professor, CSE Department, SET, MRIIRS",
      role: "Co-Chair",
      badge: "Co-Chair",
    },
    {
      photo: "/images/co-chair/supriya.jpg",
      designation: "Professor, CSE Department, SET, MRIIRS",
      name: "Dr. Supriya Panda",
      role: "Co-Chair",
      badge: "Co-Chair",
    },
    {
      name: "Dr. Ashu Verma",
      designation: "Section Treasurer & Member-IEEE Delhi",
      role: "Co-Chair",
      badge: "Co-Chair",
    },
  ];

  const convener = [
    {
      photo: "/images/convener/poonam.jpeg",
      designation: "Professor, CSE, SET, MRIIRS",
      name: "Prof. (Dr.) Poonam Tanwar",
      role: "Convener",
      badge: "Convener",
    },
  ];

  const organizing = [
    {
      photo: "/images/organizing/indu.jpg",
      name: "Dr. Indu Kashyap",
      designation: "Professor, CSE Department, SET, MRIIRS",
      role: "Organizing Secretary",
      badge: "Organizing Secretary",
    },
    {
      photo: "/images/organizing/sahoo.jpg",
      name: "Dr. Ramesh Sahoo",
      designation: "Associate Professor, CSE Department, SET, MRIIRS",
      role: "Organizing Secretary",
      badge: "Organizing Secretary",
    },
    {
      photo: "/images/organizing/deepa_bura.jpg",
      name: "Dr. Deepa Bura",
      designation: "Professor, CSE Department, SET, MRIIRS",
      role: "Organizing Secretary",
      badge: "Organizing Secretary",
    },
    {
      photo: "/images/organizing/poonam_nandal.jpg",
      name: "Dr. Poonam Nandal",
      designation: "Professor, CSE Department, SET, MRIIRS",
      role: "Organizing Secretary",
      badge: "Organizing Secretary",
    },
    {
      name: "Dr. Meeta Singh",
      designation: "Professor, CSE Department, SET, MRIIRS",
      role: "Organizing Secretary",
      badge: "Organizing Secretary",
    },
    {
      name: "Dr. Shefali",
      designation: "Associate Professor, CSE Department, SET, MRIIRS",
      role: "Organizing Secretary",
      badge: "Organizing Secretary",
    },
    {
      name: "Dr. Priyanka Rastogi",
      designation: "Associate Professor, CSE Department, SET, MRIIRS",
      role: "Organizing Secretary",
      badge: "Organizing Secretary",
    },
    {
      name: "Dr. Kushagra",
      designation: "Associate Professor, CSE Department, SET, MRIIRS",
      role: "Organizing Secretary",
      badge: "Organizing Secretary",
    },
    {
      photo: "/images/organizing/munish.jpeg",
      name: "Dr. Munesh Chandra Trivedi",
      designation:
        "Associate Professor (CSE), NIT Agartala (On Lien), Professor (CSE), PSSCIVE Bhopal",
      role: "Organizing Secretary",
      badge: "Organizing Secretary",
    },
  ];

  return (
    <>
      <Head>
        <title>Organizing Committee | ICAICCIT-2026</title>
        <meta
          name="description"
          content="Organizing Committee members for the 4th International Conference on Advances in Computing, Communication and Information Technology (ICAICCIT-2026)."
        />
      </Head>

      <section className="py-12 md:py-16 bg-gradient-to-b from-slate-50 via-white to-slate-50 text-gray-700 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto" data-aos="fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs sm:text-sm font-semibold mb-4 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#3FBA96] animate-pulse"></span>
              ICAICCIT-2026 Leadership & Organization
            </div>
            <h1 className="text-gray-800 md:text-5xl text-3xl font-bold font-playFair tracking-tight">
              Conference <span className="text-[#3FBA96]">Committee</span>
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

          {/* Chief Patrons */}
          <SectionHeading title="Chief Patrons" />
          <div className="flex flex-wrap justify-center gap-8 mt-10">
            {chief_patron.map((member, i) => (
              <CommitteeCard key={i} member={member} index={i} />
            ))}
          </div>

          {/* Patrons */}
          <SectionHeading title="Patrons" />
          <div className="flex flex-wrap justify-center gap-8 mt-10">
            {patrons.map((member, i) => (
              <CommitteeCard key={i} member={member} index={i} />
            ))}
          </div>

          {/* General Chair */}
          <SectionHeading title="General Chair" />
          <div className="flex flex-wrap justify-center gap-8 mt-10">
            {generalChair.map((member, i) => (
              <CommitteeCard key={i} member={member} index={i} />
            ))}
          </div>

          {/* Chair */}
          <SectionHeading title="Chair" />
          <div className="flex flex-wrap justify-center gap-8 mt-10">
            {chair.map((member, i) => (
              <CommitteeCard key={i} member={member} index={i} />
            ))}
          </div>

          {/* Co-Chair */}
          <SectionHeading title="Co-Chair" />
          <div className="flex flex-wrap justify-center gap-8 mt-10">
            {co_chair.map((member, i) => (
              <CommitteeCard key={i} member={member} index={i} />
            ))}
          </div>

          {/* Convener */}
          <SectionHeading title="Convener" />
          <div className="flex flex-wrap justify-center gap-8 mt-10">
            {convener.map((member, i) => (
              <CommitteeCard key={i} member={member} index={i} />
            ))}
          </div>

          {/* Organizing Secretaries */}
          <SectionHeading title="Organizing Secretaries" />
          <div className="flex flex-wrap justify-center gap-8 mt-10">
            {organizing.map((member, i) => (
              <CommitteeCard key={i} member={member} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default OrganizingCommittee;
