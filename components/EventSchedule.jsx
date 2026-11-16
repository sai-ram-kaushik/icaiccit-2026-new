import React, { useState, useMemo, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import {
  FaWhatsapp,
  FaFileAlt,
  FaUserTie,
  FaMapMarkerAlt,
  FaClock,
  FaSearch,
  FaTimes,
  FaChevronDown,
  FaChevronUp,
  FaPhoneAlt,
  FaEnvelope,
  FaLaptop,
  FaUsers,
  FaFilter,
  FaTable,
  FaThLarge,
} from "react-icons/fa";
import { scheduleData, trackCoordinators } from "../data/scheduleData";

const EventSchedule = () => {
  const [activeDay, setActiveDay] = useState("Day 1");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTrack, setSelectedTrack] = useState("All");
  const [expandedSessions, setExpandedSessions] = useState({});
  const [showCoordinators, setShowCoordinators] = useState(false);
  const [viewMode, setViewMode] = useState("cards"); // 'cards' | 'table'

  useEffect(() => {
    Aos.init({ duration: 600, once: true });
    // Expand first session of active day by default
    const firstSessionKey = `${activeDay}-1`;
    setExpandedSessions({ [firstSessionKey]: true });
  }, []);

  // Normalization for track categories
  const trackCategories = [
    { id: "All", label: "All Tracks" },
    { id: "AI", label: "AI & Machine Learning" },
    { id: "Communication", label: "Communication & Networks" },
    { id: "IT", label: "Information Technology" },
    { id: "BigData", label: "Big Data & Analytics" },
  ];

  const matchesTrack = (trackName, categoryId) => {
    if (categoryId === "All") return true;
    const t = trackName.toLowerCase();
    if (categoryId === "AI") {
      return (
        t.includes("artificial intelligence") ||
        t.includes("machine learning") ||
        t.includes("data science")
      );
    }
    if (categoryId === "Communication") {
      return t.includes("communication");
    }
    if (categoryId === "IT") {
      return t.includes("information technology");
    }
    if (categoryId === "BigData") {
      return t.includes("big data") || t.includes("analytics");
    }
    return true;
  };

  // Filter sessions
  const filteredSessions = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();

    return scheduleData.filter((session) => {
      // Day filter (only when not searching or when searching within active day)
      const dayMatches = session.day === activeDay;

      // Track filter
      const trackMatches = matchesTrack(session.track, selectedTrack);

      if (!q) {
        return dayMatches && trackMatches;
      }

      // Search matches
      const matchesSearch =
        session.sessionName.toLowerCase().includes(q) ||
        session.track.toLowerCase().includes(q) ||
        (session.venue && session.venue.toLowerCase().includes(q)) ||
        (session.chair && session.chair.toLowerCase().includes(q)) ||
        (session.chairAffiliation &&
          session.chairAffiliation.toLowerCase().includes(q)) ||
        (session.coChair && session.coChair.toLowerCase().includes(q)) ||
        session.papers.some(
          (p) =>
            p.paperId.toLowerCase().includes(q) ||
            p.title.toLowerCase().includes(q) ||
            p.presenter.toLowerCase().includes(q)
        );

      return dayMatches && trackMatches && matchesSearch;
    });
  }, [activeDay, searchQuery, selectedTrack]);

  // Count search matches on each day
  const searchCounts = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) {
      return {
        "Day 1": scheduleData.filter((s) => s.day === "Day 1").length,
        "Day 2": scheduleData.filter((s) => s.day === "Day 2").length,
      };
    }
    const day1Matches = scheduleData
      .filter((s) => s.day === "Day 1")
      .filter(
        (s) =>
          s.sessionName.toLowerCase().includes(q) ||
          s.track.toLowerCase().includes(q) ||
          (s.venue && s.venue.toLowerCase().includes(q)) ||
          (s.chair && s.chair.toLowerCase().includes(q)) ||
          s.papers.some(
            (p) =>
              p.paperId.toLowerCase().includes(q) ||
              p.title.toLowerCase().includes(q) ||
              p.presenter.toLowerCase().includes(q)
          )
      ).length;

    const day2Matches = scheduleData
      .filter((s) => s.day === "Day 2")
      .filter(
        (s) =>
          s.sessionName.toLowerCase().includes(q) ||
          s.track.toLowerCase().includes(q) ||
          (s.venue && s.venue.toLowerCase().includes(q)) ||
          (s.chair && s.chair.toLowerCase().includes(q)) ||
          s.papers.some(
            (p) =>
              p.paperId.toLowerCase().includes(q) ||
              p.title.toLowerCase().includes(q) ||
              p.presenter.toLowerCase().includes(q)
          )
      ).length;

    return { "Day 1": day1Matches, "Day 2": day2Matches };
  }, [searchQuery]);

  const toggleSession = (key) => {
    setExpandedSessions((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const expandAll = () => {
    const newExpanded = {};
    filteredSessions.forEach((s) => {
      newExpanded[`${s.day}-${s.sessionNum}`] = true;
    });
    setExpandedSessions(newExpanded);
  };

  const collapseAll = () => {
    setExpandedSessions({});
  };

  const totalFilteredPapers = useMemo(() => {
    return filteredSessions.reduce((acc, s) => acc + s.papers.length, 0);
  }, [filteredSessions]);

  return (
    <section
      id="schedule"
      className="py-16 md:py-24 bg-gradient-to-b from-white via-slate-50 to-white text-gray-800 relative scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header */}
        <div className="text-center max-w-3xl mx-auto" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs sm:text-sm font-semibold mb-4 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#3FBA96] animate-pulse"></span>
            IEEE ICAICCIT-2026 Programme Schedule
          </div>
          <h2 className="text-gray-900 md:text-5xl text-3xl font-bold font-playFair tracking-tight">
            Event & Presentation <span className="text-[#3FBA96]">Schedule</span>
          </h2>
          <p className="mt-4 text-gray-600 text-sm sm:text-base leading-relaxed">
            Paper presentation sessions, session chairs, tracks, venues & paper
            presentation lists for 19<sup>th</sup> and 20<sup>th</sup> November
            2026.
          </p>
          <p className="mt-1 text-xs text-gray-500 font-medium">
            Technically Co-Sponsored by IEEE Delhi Section (Conference Record
            #68829 / #72855)
          </p>
        </div>

        {/* Quick Highlights Strip */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 max-w-5xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="bg-white p-5 rounded-2xl border border-gray-200/80 shadow-sm hover:shadow-md transition-shadow flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#3FBA96]/20 to-[#0ea5c0]/20 text-[#0f766e] flex items-center justify-center flex-shrink-0">
              <FaMapMarkerAlt className="text-xl text-[#3FBA96]" />
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#de0650]">
                Day 1 · 19 Nov 2026
              </span>
              <h4 className="text-base font-bold text-gray-900 mt-0.5">
                In-Person / Offline Sessions
              </h4>
              <p className="text-xs text-gray-500 mt-1">
                2:00 PM Onwards · Venues: TF02, TF03, TF11, TF16, TF25, TF10 (6
                Sessions)
              </p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-gray-200/80 shadow-sm hover:shadow-md transition-shadow flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-100 text-blue-600 flex items-center justify-center flex-shrink-0">
              <FaLaptop className="text-xl text-blue-600" />
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                Day 2 · 20 Nov 2026
              </span>
              <h4 className="text-base font-bold text-gray-900 mt-0.5">
                Online Presentation Tracks
              </h4>
              <p className="text-xs text-gray-500 mt-1">
                12:00 PM – 2:00 PM Onwards · 18 Virtual Technical Sessions across AI, IT &
                Comm.
              </p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-gray-200/80 shadow-sm hover:shadow-md transition-shadow flex items-start gap-4 sm:col-span-2 lg:col-span-1">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-50 to-teal-100 text-[#3FBA96] flex items-center justify-center flex-shrink-0">
              <FaFileAlt className="text-xl text-[#3FBA96]" />
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#3FBA96]">
                Author Assistance
              </span>
              <h4 className="text-base font-bold text-gray-900 mt-0.5">
                250+ Research Papers
              </h4>
              <p className="text-xs text-gray-500 mt-1">
                WhatsApp session groups & track coordinators available for real-time
                support
              </p>
            </div>
          </div>
        </div>

        {/* Track Coordinators Accordion */}
        <div className="max-w-5xl mx-auto mt-6" data-aos="fade-up">
          <div className="bg-gradient-to-r from-emerald-50/80 via-teal-50/50 to-cyan-50/80 border border-emerald-200/70 rounded-2xl p-4 sm:p-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-[#3FBA96] flex-shrink-0">
                  <FaUsers className="text-lg" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900">
                    Track Coordinators Contact Helpdesk
                  </h4>
                  <p className="text-xs text-gray-600">
                    Department of CSE, SET, Manav Rachna (MRIIRS)
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowCoordinators(!showCoordinators)}
                className="inline-flex items-center gap-2 self-start sm:self-auto text-xs font-semibold text-[#0f766e] hover:text-[#3FBA96] bg-white px-3.5 py-1.5 rounded-full border border-emerald-200 shadow-sm transition-all"
              >
                <span>{showCoordinators ? "Hide Contacts" : "View Contacts"}</span>
                {showCoordinators ? <FaChevronUp /> : <FaChevronDown />}
              </button>
            </div>

            {showCoordinators && (
              <div className="mt-4 pt-4 border-t border-emerald-200/60 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 animate-fadeIn">
                {trackCoordinators.map((c, i) => (
                  <div
                    key={i}
                    className="bg-white p-3 rounded-xl border border-emerald-100 shadow-2xs text-xs"
                  >
                    <p className="font-bold text-gray-800">{c.name}</p>
                    <p className="text-[11px] text-gray-500">{c.designation}</p>
                    <div className="mt-2 flex flex-col gap-1 text-[11px]">
                      <a
                        href={`tel:${c.phone}`}
                        className="flex items-center gap-1.5 text-emerald-700 hover:text-emerald-900 font-medium"
                      >
                        <FaPhoneAlt className="text-[10px]" /> +91 {c.phone}
                      </a>
                      <a
                        href={`mailto:${c.email}`}
                        className="flex items-center gap-1.5 text-cyan-700 hover:text-cyan-900 truncate"
                        title={c.email}
                      >
                        <FaEnvelope className="text-[10px] flex-shrink-0" />
                        <span className="truncate">{c.email}</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Schedule Controls (Day Tabs, Search, Track Filter) */}
        <div className="mt-10 max-w-5xl mx-auto" data-aos="fade-up">
          {/* Day Navigation Tabs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 border-b border-gray-200 pb-4">
            <div className="flex items-center gap-2 bg-gray-100/80 p-1.5 rounded-2xl">
              <button
                onClick={() => {
                  setActiveDay("Day 1");
                  setSelectedTrack("All");
                }}
                className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm transition-all duration-200 ${
                  activeDay === "Day 1"
                    ? "bg-white text-gray-900 shadow-md border border-gray-200/60"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                <span>Day 1 (19 Nov, Thu)</span>
                <span
                  className={`text-xs px-2 py-0.5 rounded-full ${
                    activeDay === "Day 1"
                      ? "bg-emerald-100 text-emerald-800 font-semibold"
                      : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {searchCounts["Day 1"]} Sessions · Offline
                </span>
              </button>

              <button
                onClick={() => {
                  setActiveDay("Day 2");
                  setSelectedTrack("All");
                }}
                className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm transition-all duration-200 ${
                  activeDay === "Day 2"
                    ? "bg-white text-gray-900 shadow-md border border-gray-200/60"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                <span>Day 2 (20 Nov, Fri)</span>
                <span
                  className={`text-xs px-2 py-0.5 rounded-full ${
                    activeDay === "Day 2"
                      ? "bg-blue-100 text-blue-800 font-semibold"
                      : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {searchCounts["Day 2"]} Sessions · Online
                </span>
              </button>
            </div>

            {/* View Mode Toggle & Expand/Collapse */}
            <div className="flex items-center justify-between sm:justify-end gap-2">
              <div className="flex items-center bg-gray-100 p-1 rounded-xl">
                <button
                  onClick={() => setViewMode("cards")}
                  className={`p-2 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                    viewMode === "cards"
                      ? "bg-white text-[#0f766e] shadow-xs"
                      : "text-gray-500 hover:text-gray-800"
                  }`}
                  title="Detailed Cards View"
                >
                  <FaThLarge /> <span className="hidden md:inline">Cards</span>
                </button>
                <button
                  onClick={() => setViewMode("table")}
                  className={`p-2 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                    viewMode === "table"
                      ? "bg-white text-[#0f766e] shadow-xs"
                      : "text-gray-500 hover:text-gray-800"
                  }`}
                  title="Summary Table View"
                >
                  <FaTable /> <span className="hidden md:inline">Table</span>
                </button>
              </div>

              {viewMode === "cards" && (
                <div className="flex items-center gap-1 text-xs">
                  <button
                    onClick={expandAll}
                    className="px-3 py-1.5 rounded-lg border border-gray-200 text-gray-600 hover:text-gray-900 hover:bg-gray-50 font-medium transition-colors"
                  >
                    Expand All
                  </button>
                  <button
                    onClick={collapseAll}
                    className="px-3 py-1.5 rounded-lg border border-gray-200 text-gray-600 hover:text-gray-900 hover:bg-gray-50 font-medium transition-colors"
                  >
                    Collapse
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Search Box & Track Filters */}
          <div className="mt-4 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
            {/* Live Search Input */}
            <div className="relative flex-1">
              <FaSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by Paper ID (e.g. 0627), Paper Title, Author, Chair, Venue..."
                className="w-full pl-10 pr-9 py-2.5 rounded-xl border border-gray-200 focus:border-[#3FBA96] focus:ring-2 focus:ring-[#3FBA96]/20 text-sm outline-none bg-white shadow-2xs transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 p-1"
                >
                  <FaTimes />
                </button>
              )}
            </div>

            {/* Track Filter Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
              <span className="text-xs font-semibold text-gray-500 flex items-center gap-1 pl-1 flex-shrink-0">
                <FaFilter className="text-[10px]" /> Track:
              </span>
              {trackCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedTrack(cat.id)}
                  className={`text-xs font-medium px-3 py-1.5 rounded-lg whitespace-nowrap transition-all ${
                    selectedTrack === cat.id
                      ? "bg-[#3FBA96] text-white shadow-xs font-semibold"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200/80"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Search Result Feedback */}
          {searchQuery && (
            <div className="mt-3 flex items-center justify-between text-xs text-gray-600 bg-gray-50 px-3.5 py-2 rounded-lg border border-gray-200/60">
              <span>
                Found <strong>{filteredSessions.length}</strong> matching sessions (
                <strong>{totalFilteredPapers}</strong> papers) for query &ldquo;
                {searchQuery}&rdquo; in {activeDay}.
              </span>
              <button
                onClick={() => setSearchQuery("")}
                className="text-[#de0650] hover:underline font-semibold"
              >
                Clear Search
              </button>
            </div>
          )}
        </div>

        {/* ── Content: Cards View or Table View ── */}
        <div className="mt-8 max-w-5xl mx-auto">
          {filteredSessions.length === 0 ? (
            <div className="bg-white rounded-2xl p-12 text-center border border-gray-200 shadow-sm">
              <div className="w-16 h-16 rounded-full bg-gray-100 text-gray-400 flex items-center justify-center mx-auto mb-4 text-2xl">
                <FaSearch />
              </div>
              <h3 className="text-lg font-bold text-gray-800">No sessions match your search</h3>
              <p className="text-sm text-gray-500 mt-1 max-w-md mx-auto">
                We couldn&apos;t find any sessions or papers matching &ldquo;{searchQuery}&rdquo; in{" "}
                {activeDay}. Try switching to the other day or clearing the search.
              </p>
              <div className="mt-4 flex items-center justify-center gap-3">
                <button
                  onClick={() => setActiveDay(activeDay === "Day 1" ? "Day 2" : "Day 1")}
                  className="px-4 py-2 rounded-xl bg-[#3FBA96] text-white text-xs font-bold shadow-xs hover:bg-[#349e80] transition-colors"
                >
                  Switch to {activeDay === "Day 1" ? "Day 2 (Online)" : "Day 1 (Offline)"}
                </button>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedTrack("All");
                  }}
                  className="px-4 py-2 rounded-xl border border-gray-300 text-gray-700 text-xs font-semibold hover:bg-gray-50 transition-colors"
                >
                  Reset All Filters
                </button>
              </div>
            </div>
          ) : viewMode === "cards" ? (
            /* Cards View */
            <div className="space-y-6">
              {filteredSessions.map((session, sIdx) => {
                const sessionKey = `${session.day}-${session.sessionNum}`;
                const isExpanded = expandedSessions[sessionKey] !== false;

                return (
                  <div
                    key={sessionKey}
                    data-aos="fade-up"
                    data-aos-delay={(sIdx % 4) * 60}
                    className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 border border-gray-200/90 overflow-hidden"
                  >
                    {/* Top Accent Gradient Bar */}
                    <div className="h-1.5 w-full bg-gradient-to-r from-[#3FBA96] via-[#0ea5c0] to-[#3FBA96]" />

                    {/* Session Header Card */}
                    <div className="p-5 sm:p-6">
                      <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                        {/* Left: Badges + Title */}
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-2 mb-2">
                            <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-900 text-white shadow-2xs">
                              {session.day} · {session.sessionName}
                            </span>

                            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-200 flex items-center gap-1">
                              <FaClock className="text-[11px]" />
                              {session.time}
                            </span>

                            {session.mode === "Offline" ? (
                              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 flex items-center gap-1">
                                <FaMapMarkerAlt className="text-[11px] text-[#3FBA96]" />
                                {session.venue || "Offline Session"}
                              </span>
                            ) : (
                              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-50 text-blue-800 border border-blue-200 flex items-center gap-1">
                                <FaLaptop className="text-[11px] text-blue-600" />
                                Online Presentation
                              </span>
                            )}

                            <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-purple-50 text-purple-700 border border-purple-200">
                              {session.papers.length} Papers
                            </span>
                          </div>

                          <h3 className="text-lg sm:text-xl font-bold font-playFair text-gray-900 mt-1">
                            {session.track}
                          </h3>

                          {/* Session Leadership (Chair & Co-Chair) */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4 pt-3 border-t border-gray-100 text-xs text-gray-600">
                            {/* Session Chair */}
                            <div className="flex items-start gap-2">
                              <div className="w-6 h-6 rounded-md bg-emerald-50 text-[#3FBA96] flex items-center justify-center flex-shrink-0 mt-0.5">
                                <FaUserTie className="text-xs" />
                              </div>
                              <div>
                                <span className="font-semibold text-gray-500 uppercase text-[10px] tracking-wider block">
                                  Session Chair
                                </span>
                                <span className="font-bold text-gray-800">
                                  {session.chair || "To be Announced"}
                                </span>
                                {session.chairAffiliation && (
                                  <span className="text-gray-500 block mt-0.5 text-[11px] leading-tight">
                                    {session.chairAffiliation}
                                  </span>
                                )}
                              </div>
                            </div>

                            {/* Session Co-Chair */}
                            <div className="flex items-start gap-2">
                              <div className="w-6 h-6 rounded-md bg-cyan-50 text-cyan-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <FaUserTie className="text-xs" />
                              </div>
                              <div>
                                <span className="font-semibold text-gray-500 uppercase text-[10px] tracking-wider block">
                                  Session Co-Chair
                                </span>
                                <span className="font-bold text-gray-800">
                                  {session.coChair || "Internal Co-Chair"}
                                </span>
                                {session.coChairEmail && (
                                  <a
                                    href={`mailto:${session.coChairEmail}`}
                                    className="text-cyan-600 hover:underline block mt-0.5 text-[11px]"
                                  >
                                    {session.coChairEmail}
                                  </a>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Right: Actions (WhatsApp Button + Expand Toggle) */}
                        <div className="flex sm:flex-row lg:flex-col items-stretch sm:items-center lg:items-end justify-between gap-2.5 pt-2 lg:pt-0 flex-shrink-0">
                          {session.whatsapp && (
                            <a
                              href={session.whatsapp}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs shadow-sm hover:shadow transition-all group"
                              title="Join WhatsApp group for live presentation updates"
                            >
                              <FaWhatsapp className="text-base text-white group-hover:scale-110 transition-transform" />
                              <span>Join WhatsApp Group</span>
                            </a>
                          )}

                          <button
                            onClick={() => toggleSession(sessionKey)}
                            className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl border border-gray-200 hover:border-gray-300 text-gray-700 hover:text-gray-900 bg-gray-50 text-xs font-semibold transition-all"
                          >
                            <span>
                              {isExpanded ? "Hide Papers" : `View Papers (${session.papers.length})`}
                            </span>
                            {isExpanded ? <FaChevronUp className="text-[10px]" /> : <FaChevronDown className="text-[10px]" />}
                          </button>
                        </div>
                      </div>

                      {/* Expandable Papers List */}
                      {isExpanded && (
                        <div className="mt-5 pt-4 border-t border-gray-200/80">
                          <div className="flex items-center justify-between mb-3">
                            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500">
                              Presentations in this Session ({session.papers.length})
                            </h4>
                            <span className="text-[11px] text-gray-400">
                              Presented in order of paper schedule
                            </span>
                          </div>

                          <div className="overflow-x-auto rounded-xl border border-gray-200/70">
                            <table className="min-w-full divide-y divide-gray-200 text-left text-xs">
                              <thead className="bg-slate-50/80 text-gray-600 uppercase text-[11px] font-semibold tracking-wider">
                                <tr>
                                  <th scope="col" className="px-3.5 py-2.5 w-12 text-center">
                                    #
                                  </th>
                                  <th scope="col" className="px-3.5 py-2.5 w-36 whitespace-nowrap">
                                    Paper ID
                                  </th>
                                  <th scope="col" className="px-4 py-2.5">
                                    Paper Title
                                  </th>
                                  <th scope="col" className="px-4 py-2.5 w-48 whitespace-nowrap">
                                    Presenter / Authors
                                  </th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-gray-100 bg-white">
                                {session.papers.map((paper, pIdx) => {
                                  // Highlight match if query exists
                                  const q = searchQuery.toLowerCase().trim();
                                  const isMatched =
                                    q &&
                                    (paper.paperId.toLowerCase().includes(q) ||
                                      paper.title.toLowerCase().includes(q) ||
                                      paper.presenter.toLowerCase().includes(q));

                                  return (
                                    <tr
                                      key={pIdx}
                                      className={`transition-colors ${
                                        isMatched
                                          ? "bg-amber-50/70 font-medium"
                                          : pIdx % 2 === 0
                                          ? "bg-white"
                                          : "bg-slate-50/40"
                                      } hover:bg-emerald-50/40`}
                                    >
                                      <td className="px-3.5 py-3 text-center text-gray-400 font-mono text-[11px]">
                                        {pIdx + 1}
                                      </td>
                                      <td className="px-3.5 py-3 whitespace-nowrap">
                                        <span className="inline-block font-mono font-bold text-[11px] px-2 py-0.5 rounded-md bg-slate-100 text-slate-800 border border-slate-200">
                                          {paper.paperId}
                                        </span>
                                      </td>
                                      <td className="px-4 py-3 text-gray-900 leading-snug">
                                        <p className="font-medium text-xs text-gray-900">
                                          {paper.title}
                                        </p>
                                      </td>
                                      <td className="px-4 py-3 text-gray-600">
                                        <span className="font-semibold text-gray-800 block text-xs">
                                          {paper.presenter || "—"}
                                        </span>
                                      </td>
                                    </tr>
                                  );
                                })}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            /* Summary Matrix Table View */
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200/90 overflow-hidden">
              <div className="p-4 border-b border-gray-200 bg-slate-50 flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold text-gray-900">
                    {activeDay} Sessions Overview Matrix
                  </h3>
                  <p className="text-xs text-gray-500">
                    Overview of all {filteredSessions.length} technical sessions, chairs, venues & paper counts
                  </p>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 text-left text-xs">
                  <thead className="bg-slate-100 text-gray-600 font-bold uppercase text-[11px] tracking-wider">
                    <tr>
                      <th className="px-3 py-3 w-24">Session</th>
                      <th className="px-3 py-3 w-32">Time / Mode</th>
                      <th className="px-4 py-3">Track Name</th>
                      <th className="px-4 py-3">Session Chair</th>
                      <th className="px-4 py-3">Venue / WhatsApp</th>
                      <th className="px-3 py-3 text-center w-20">Papers</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 bg-white">
                    {filteredSessions.map((session, idx) => (
                      <tr
                        key={idx}
                        className={`hover:bg-emerald-50/30 transition-colors ${
                          idx % 2 === 0 ? "bg-white" : "bg-slate-50/40"
                        }`}
                      >
                        <td className="px-3 py-3 font-bold text-gray-900">
                          {session.sessionName}
                        </td>
                        <td className="px-3 py-3">
                          <span className="block font-medium text-gray-800">
                            {session.time}
                          </span>
                          <span className="inline-block mt-0.5 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700">
                            {session.mode}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-gray-900 font-medium">
                          {session.track}
                        </td>
                        <td className="px-4 py-3">
                          <p className="font-bold text-gray-900">{session.chair || "TBD"}</p>
                          {session.chairAffiliation && (
                            <p className="text-[11px] text-gray-500 leading-tight">
                              {session.chairAffiliation}
                            </p>
                          )}
                        </td>
                        <td className="px-4 py-3">
                          {session.venue && (
                            <span className="font-semibold text-emerald-700 block text-xs">
                              {session.venue}
                            </span>
                          )}
                          {session.whatsapp && (
                            <a
                              href={session.whatsapp}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-[11px] text-emerald-600 hover:text-emerald-800 font-semibold mt-1"
                            >
                              <FaWhatsapp className="text-xs" /> Group Link
                            </a>
                          )}
                        </td>
                        <td className="px-3 py-3 text-center">
                          <span className="inline-block font-mono font-bold text-xs px-2.5 py-1 rounded-full bg-slate-100 text-slate-800">
                            {session.papers.length}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default EventSchedule;

