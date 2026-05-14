import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const CallForPapers = () => {
  const [activeTab, setActiveTab] = useState("submission");

  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  const tabs = [
    { id: "submission", label: "Paper Submission" },
    { id: "guidelines", label: "Guidelines" },
    { id: "plagiarism", label: "Plagiarism Limits" },
    { id: "conflict", label: "Conflict of Interest" },
  ];

  return (
    <>
      <section
        id="about"
        className=" flex gap-20 items-center justify-center"
        data-aos="fade-right"
      >
        <div className="flex flex-col items-center justify-center w-full">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mt-10 mb-6">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2 rounded-full text-sm font-semibold border-2 transition-all duration-200 ${
                  activeTab === tab.id
                    ? "bg-[#3FBA96] text-white border-[#3FBA96]"
                    : "bg-white text-gray-600 border-gray-300 hover:border-[#3FBA96] hover:text-[#3FBA96]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab: Paper Submission */}
          {activeTab === "submission" && (
            <div className="text-center flex flex-col items-center" data-aos="fade-right">
              <div className="text-center mt-2 flex flex-col items-center" data-aos="fade-right">
                <div
                  className="text-gray-600 my-3 text-4xl mt-10 font-bold font-playFair"
                  data-aos="fade-right"
                >
                  Paper <span>Submission Link</span>
                </div>
                <p className="text-[18px]">
                  Authors are requested to submit full-length papers online using
                  the following web link
                </p>
                <div className="text-gray-600 text-2xl mt-4 hover:text-cyan-600">
                  <a
                    href="https://cmt3.research.microsoft.com/ICAICCIT2026"
                    target="_blank"
                    data-aos="fade-right"
                    className="text-[18px]"
                  >
                    https://cmt3.research.microsoft.com/ICAICCIT2026
                  </a>
                </div>

                <div className=" text-gray" data-aos="fade-right">
                  <div className="text-center">
                    <h3 className="text-gray-600 text-4xl font-bold font-playFair ">
                      Important <span>Dates</span>
                    </h3>
                  </div>

                  <div className="mt-10 justify-center  flex text-gray-600">
                    <table className="text-gray-600">
                      <tr className="text-xl">
                        <td>Paper Submission Last Date:</td>
                        <td>
                          15<sup>th</sup> July, 2026
                        </td>
                      </tr>
                      <tr className="text-xl">
                        <td>Acceptance Notification Date:</td>
                        <td>
                          10<sup>th</sup> August, 2026
                        </td>
                      </tr>
                      <tr className="text-xl">
                        <td>Camera Ready Manuscript Deadline:</td>
                        <td>
                          10<sup>th</sup> September, 2026
                        </td>
                      </tr>
                      <tr className="text-xl">
                        <td>Conference Registration Deadline:</td>
                        <td>
                          5<sup>th</sup> Oct, 2026
                        </td>
                      </tr>
                      <tr className="text-xl">
                        <td>Conference Dates:</td>
                        <td>
                          19<sup>th</sup> November, 2026 - 20<sup>th</sup>{" "}
                          November, 2026
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>

                <div
                  className="text-gray-600 my-3 text-4xl mt-10 font-bold font-playFair"
                  data-aos="fade-right"
                >
                  Paper Submission <span>Template &amp; Instructions</span>
                </div>
                <div className="text-gray-600 text-xl font-bold mt-8">
                  A Sample template is attached here with:
                </div>
                <div className="text-gray-600 text-2xl mt-4 hover:text-cyan-600">
                  <a
                    href="https://www.ieee.org/conferences/publishing/templates.html"
                    target="_blank"
                    data-aos="fade-right"
                    className="text-[18px]"
                  >
                    https://www.ieee.org/conferences/publishing/templates.html
                  </a>
                </div>
              </div>

              <p className="text-justify text-lg m-4 text-gray-600">
                Authors must ensure that their works are produced in a way that
                conceals their identities. Please ensure the following while
                submitting to assist with this preparation:
              </p>
              <p className="text-justify text-lg m-4 max-w-[700px] text-gray-600">
                The Following are the main factors to keep in mind to help with
                this process:
              </p>
              <ul
                role="list"
                className=" marker:text-sky-400 list-disc text-lg text-gray-600 text-justify max-w-[700px]"
              >
                <li>
                  {" "}
                  Make sure there are no affiliation-related identifiers in the
                  figures.
                </li>
                <li>
                  {" "}
                  Make sure there are no affiliation-related identifiers in the
                  figures.
                </li>
                <li>Remove references to funding sources.</li>
                <li>Do not include acknowledgments.</li>
                <li>Remove any identifying information.</li>
              </ul>

              {/* Reporting Conflict of Interest */}
              <div className="max-w-[700px] mt-10 text-left" data-aos="fade-right">
                <p className="text-gray-600 my-3 text-2xl font-bold font-playFair">
                  Reporting Conflict of Interest
                </p>
                <p className="text-justify text-lg text-gray-600">
                  Author conflict of interest and source of support for the work, including sponsor names along with explanation of the role of those sources if any.
                </p>
              </div>

              <p className="text-gray-600 my-3 text-4xl mt-20 font-bold font-playFair">
                IEEE Paper Format | <span>Template &amp; Guidelines</span>
              </p>
              <p className="text-justify text-lg m-10 max-w-[700px] text-gray-600">
                IEEE provides guidelines for formatting the paper. These
                guidelines must be followed by the author before submitting a
                manuscript for publication. Some of the key guidelines are as
                follows:
              </p>
              <ul
                role="list"
                className=" marker:text-sky-400 list-disc text-lg text-gray-600 text-justify max-w-[700px]"
              >
                <li>
                  Formatting the text as two columns, in Times New Roman, 10 pt.
                </li>
                <li>
                  Including a byline, an abstract, and a set of keywords at the
                  start of the research paper.
                </li>
                <li>
                  Placing any figures, tables, and equations at the top or bottom
                  of a column, not in the middle.
                </li>
                <li>
                  Following the appropriate heading styles for any headings you
                  use.
                </li>
                <li>Including a full list of IEEE references at the end.</li>
                <li>Not including page numbers.</li>
              </ul>

              <div className="text-center mt-2 flex flex-col items-center" dat-aos="fade-right">
                <p className="text-gray-600 my-3 text-4xl mt-10 font-bold font-playFair">
                  IEEE <span>Heading Styles</span>
                </p>
                <p
                  className="text-justify text-lg m-10 max-w-[700px] text-gray-600"
                  data-aos="fade-right"
                >
                  IEEE recommends specific heading styles to distinguish the title
                  and different levels of heading in your paper from each other.
                  Styles for each of these are built into the template.
                </p>
                <p
                  className="text-justify text-lg m-10 max-w-[700px] text-gray-600 mt-1"
                  data-aos="fade-right"
                >
                  The paper title is written in 24 pt. Times New Roman, centered at
                  the top of the first page. Other headings are all written in 10
                  pt. Times New Roman:
                </p>
                <ul
                  role="list"
                  className=" marker:text-sky-400 list-disc text-lg text-gray-600 text-justify max-w-[700px]"
                  data-aos="fade-right"
                >
                  <li>
                    <b>Level 1 text headings</b> begin with a roman numeral followed
                    by a period. They are written in small caps, in title case, and
                    centered.
                  </li>
                  <li>
                    <b>Level 2 text headings</b> begin with a capital letter
                    followed by a period. They are italicized, left-aligned, and
                    written in title case.
                  </li>
                  <li>
                    <b>Level 3 text headings</b> begin with a number followed by a
                    closing parenthesis. They are italicized, written in sentence
                    case, and indented like a regular paragraph. The text of the
                    section follows the heading immediately, after a colon.
                  </li>
                  <li>
                    <b>Level 4 text headings</b> begin with a lowercase letter
                    followed by a closing parenthesis. They are italicized, written
                    in sentence case, and indented slightly further than a normal
                    paragraph. The text of the section follows the heading
                    immediately, after a colon.
                  </li>
                  <li>
                    <b>Component headings</b> are used for the different components
                    of your paper outside of the main text, such as
                    the acknowledgments and references. They are written in small
                    caps, in title case, centered, and without any numbering.
                  </li>
                </ul>
              </div>

              <div className="text-center mt-2 flex flex-col items-center" data-aos="fade-right">
                <p
                  className="text-gray-600 my-3 text-4xl mt-14 font-bold font-playFair"
                  data-aos="fade-right"
                >
                  Review and <span>Publication of Manuscripts:</span>
                </p>
                <p className="text-gray-600 text-lg mt-8 text-justify max-w-[700px]">
                  All submitted manuscripts to ICAICCIT – 2026 shall be go through a
                  Double-blind reviewed by the ICAICCIT – 2026 TPC members on
                  originality, technical correctness, relevance, and quality of
                  presentation. An accepted paper must be presented at the
                  conference venue by the author who registered/paid full author
                  registration fee (or refer to the registration transfer
                  information in the Author Reg. Form). The authors acknowledge that
                  accepted papers must be presented in person at the conference by
                  the registered/paid authors of the accepted paper.
                </p>
                <p className="text-gray-600 text-lg mt-4 text-justify max-w-[700px]">
                  The Microsoft CMT service was used for managing the
                  peer-reviewing process for this conference. This service was
                  provided for free by Microsoft and they bore all expenses,
                  including costs for Azure cloud services as well as for software
                  development and support.
                </p>
              </div>
            </div>
          )}

          {/* Tab: Guidelines */}
          {activeTab === "guidelines" && (
            <div className="text-center flex flex-col items-center max-w-[800px] w-full px-4" data-aos="fade-right">
              <div className="text-gray-600 my-3 text-4xl mt-10 font-bold font-playFair">
                Paper Submission <span>Guidelines</span>
              </div>
              <ul
                role="list"
                className="marker:text-sky-400 list-disc text-lg text-gray-600 text-justify max-w-[700px] mt-6 space-y-3"
              >
                <li>Submit an informative abstract (complete abstract) summarizing your paper.</li>
                <li>Manuscripts must be unpublished and original works.</li>
                <li>Abstracts should not exceed 250 words.</li>
                <li>Figures must be in image format with a minimum of 300 dpi (TIFF or EPS format).</li>
                <li>Line art figures must be in image format with a minimum of 600 dpi (TIFF or EPS format).</li>
                <li>
                  Submit the paper using the provided template (
                  <a
                    href="https://www.ieee.org/conferences/publishing/templates.html"
                    target="_blank"
                    className="text-cyan-600 underline"
                  >
                    Click to download
                  </a>
                  ).
                </li>
                <li>The paper should not contain page numbers or any special headers or footers.</li>
                <li>
                  Maximum allowed pages for camera-ready papers are 6 in double-column format for IEEE publication; authors can extend up to 8 pages with additional charges.
                </li>
                <li>Maximum allowed pages for extended versions of the manuscript are 8-10 for SCOPUS journal publications.</li>
                <li>Keep plagiarism below 10% for acceptance.</li>
                <li>
                  The submission must include Background, Motivation and Objective, Statement of Contribution/Methods, Results, Discussions, and Conclusions.
                </li>
                <li>Registered members should notify about their payments immediately.</li>
                <li>Modifications to the paper will not be accepted after the final submission date.</li>
                <li>Registration after the deadline is not permitted.</li>
                <li>Only presented papers will be submitted to IEEE Xplore for publication.</li>
                <li>
                  Refer to the IEEE Similarity / Plagiarism Policy:{" "}
                  <a
                    href="https://www.ieee.org/publications/rights/plagiarism/plagiarism.html"
                    target="_blank"
                    className="text-cyan-600 underline"
                  >
                    IEEE Plagiarism Policy
                  </a>
                </li>
              </ul>
            </div>
          )}

          {/* Tab: Plagiarism Limits */}
          {activeTab === "plagiarism" && (
            <div className="text-center flex flex-col items-center max-w-[800px] w-full px-4" data-aos="fade-right">
              <div className="text-gray-600 my-3 text-4xl mt-10 font-bold font-playFair">
                Plagiarism <span>Limits</span>
              </div>
              <div className="mt-6 max-w-[700px] bg-gray-50 border border-gray-200 rounded-xl p-6 text-left">
                <p className="text-lg text-gray-600 text-justify leading-relaxed">
                  Submitted conference papers must be original, with a recommended total similarity rate under <strong>30%</strong> and less than <strong>10%</strong> from a single source. Violations may cause rejection.
                </p>
              </div>
            </div>
          )}

          {/* Tab: Conflict of Interest */}
          {activeTab === "conflict" && (
            <div className="text-center flex flex-col items-center max-w-[800px] w-full px-4" data-aos="fade-right">
              <div className="text-gray-600 my-3 text-4xl mt-10 font-bold font-playFair">
                Conflict of Interest <span>Statement for Authors</span>
              </div>
              <div className="mt-6 max-w-[700px] text-left text-gray-600 space-y-5">
                <p className="text-lg text-justify">
                  All authors submitting manuscripts to this IEEE-sponsored conference are required to disclose any potential conflicts of interest that could influence the research, authorship, or publication of their work.
                </p>
                <p className="text-lg text-justify">
                  A conflict of interest exists when professional judgment concerning a primary interest (such as research integrity) may be influenced by a secondary interest (such as financial gain, personal relationships, or institutional affiliations).
                </p>
                <div>
                  <p className="text-lg font-bold mb-2">Authors must declare:</p>
                  <ul role="list" className="marker:text-sky-400 list-disc text-lg pl-5 space-y-2">
                    <li>Any financial support, sponsorship, or funding received for the research.</li>
                    <li>Any employment, consultancy, stock ownership, honoraria, patents, or paid expert testimony related to the subject matter.</li>
                    <li>Any personal or professional relationships that could be perceived to influence the work.</li>
                    <li>Any institutional affiliations that may present a perceived bias.</li>
                  </ul>
                </div>
                <div>
                  <p className="text-lg font-bold mb-2">Declaration Requirement:</p>
                  <ul role="list" className="marker:text-sky-400 list-disc text-lg pl-5 space-y-2">
                    <li>
                      Authors must include a Conflict of Interest statement in their submitted manuscript under a separate section titled <em>"Conflict of Interest."</em>
                    </li>
                    <li>
                      If no conflicts exist, authors must explicitly state: <em>"The authors declare that there is no conflict of interest regarding the publication of this paper."</em>
                    </li>
                    <li>If a conflict exists, authors must provide full disclosure in the manuscript.</li>
                  </ul>
                </div>
                <div>
                  <p className="text-lg font-bold mb-2">Compliance:</p>
                  <p className="text-lg text-justify">
                    Failure to disclose relevant conflicts of interest may result in rejection of the paper or withdrawal of the publication in accordance with IEEE ethical policies.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default CallForPapers;
