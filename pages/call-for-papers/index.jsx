import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import ImportantDates from "../../components/ImportantDates";
const index = () => {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  return (
    <>
      <section
        id="about"
        className=" flex gap-20 items-center justify-center"
        data-aos="fade-right"
      >
        <div className="flex flex-col items-center justify-center">
          <div className="text-center  flex flex-col items-center">
            <div
              className="text-center mt-2 flex flex-col items-center"
              data-aos="fade-right"
            >
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
                        15<sup>th</sup> April, 2026
                      </td>
                    </tr>
                    <tr className="text-xl">
                      <td>Acceptance Notification Date:</td>
                      <td>
                        15<sup>th</sup> July, 2026
                      </td>
                    </tr>
                    <tr className="text-xl">
                      <td>Camera Ready Manuscript Deadline:</td>
                      <td>
                        30<sup>th</sup> August, 2026
                      </td>
                    </tr>
                    <tr className="text-xl">
                      <td>Conference Registration Deadline:</td>
                      <td>
                        20<sup>th</sup> September, 2026
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
                Paper Submission <span>Template & Instructions</span>
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
            <p className="text-gray-600 my-3 text-4xl mt-20 font-bold font-playFair">
              IEEE Paper Format | <span>Template & Guidelines</span>
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
                Including a byline, an abstract, and a set of keywords at the
                start of the research paper.
              </li>
              <li>
                Placing any figures, tables, and equations at the top or bottom
                of a column, not in the middle.
              </li>
              <li>
                Following the appropriate heading styles for any headings you
                use.
              </li>
              <li>Including a full list of IEEE references at the end.</li>
              <li>Not including page numbers.</li>
            </ul>
          </div>

          <div
            className="text-center mt-2 flex flex-col items-center"
            dat-aos="fade-right"
          >
            <p className="text-gray-600 my-3 text-4xl mt-10 font-bold font-playFair">
              IEEE <span>Heading Styles</span>
            </p>
            <p
              className="text-justify text-lg m-10 max-w-[700px] text-gray-600"
              data-aos="fade-right"
            >
              IEEE recommends specific heading styles to distinguish the title
              and different levels of heading in your paper from each other.
              Styles for each of these are built into the template.
            </p>
            <p
              className="text-justify text-lg m-10 max-w-[700px] text-gray-600 mt-1"
              data-aos="fade-right"
            >
              The paper title is written in 24 pt. Times New Roman, centered at
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
                <b>Level 2 text headings</b> begin with a capital letter
                followed by a period. They are italicized, left-aligned, and
                written in title case.
              </li>
              <li>
                <b>Level 3 text headings</b> begin with a number followed by a
                closing parenthesis. They are italicized, written in sentence
                case, and indented like a regular paragraph. The text of the
                section follows the heading immediately, after a colon.
              </li>
              <li>
                <b>Level 4 text headings</b> begin with a lowercase letter
                followed by a closing parenthesis. They are italicized, written
                in sentence case, and indented slightly further than a normal
                paragraph. The text of the section follows the heading
                immediately, after a colon.
              </li>
              <li>
                <b>Component headings</b> are used for the different components
                of your paper outside of the main text, such as
                the acknowledgments and references. They are written in small
                caps, in title case, centered, and without any numbering.
              </li>
            </ul>
          </div>

          <div
            className="text-center mt-2 flex flex-col items-center"
            data-aos="fade-right"
          >
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
              <p>
                The Microsoft CMT service will be used for managing the
                peer-reviewing process for this conference.
              </p>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default index;
