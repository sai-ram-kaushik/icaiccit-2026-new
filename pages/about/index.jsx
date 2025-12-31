import React, { useEffect } from "react";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";
// import Important_dates from '../../components/Important_dates'
const About = () => {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  return (
    <section
      id="about"
      className="py-10 text-gray-600 flex gap-20 items-center justify-center"
      data-aos="fade-right">
      <div className="text-center mt-14">
        <p className="text-[#de0650] my-3 text-2xl mt-20 font-bold font-playFair">
          Manav Rachna International Institute of Research and Studies (MRIIRS)
        </p>
        <div className="flex md:flex-row flex-col-reverse item-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div>
            <div className="text-gray-600 my-3 mt-8">
              <p className="text-justify leading-8 font-sans text-lg text-gray-600">
                Manav Rachna International Institute of Research and Studies
                (MRIIRS), formerly MRIU, a Deemed-to-be-University under section
                3 of the UGC Act, 1956, and a NAAC accredited ‘A++’ Grade
                Institution, is a continuum of excellence from the Career
                Institute of Technology and Management (CITM). MRIIRS has been
                awarded a 5-Star QS rating for Teaching, Facilities & Social
                Responsibility. MRIIRS is ranked among top institutions by the
                Ministry of Education’s NIRF Ranking 2022. It strives for
                high-quality education in the fields of Engineering &
                Technology, Health & Applied Sciences, Management, Computer
                Applications, Hotel Management, Commerce, Humanities, Media,
                Architecture, Design, Liberal Arts, Economics, Applied
                Psychology and many more. MRIIRS is a Founder Member of the
                prestigious “College Board’s Indian Global Higher Education
                Alliance”.
              </p>
            </div>
          </div>
          <div className="flex-1 flex justify-center items-center">
            <div className="lg:w-96 h-full relative sm:w-10/12 w-12/12 max-w-full mt-20">
              <Image
                src="/images/about/mr.png"
                width={500}
                height={500}
                className="animate-translateAnimate"
              />
            </div>
          </div>
        </div>
        <p
          className="text-[#de0650] my-3 text-2xl mt-14 font-bold font-playFair"
          data-aos="fade-right">
          Department of Computer Science and Engineering (CSE)
        </p>
        <div
          className="flex md:flex-row flex-col-reverse item-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto"
          data-aos="fade-right">
          <div>
            <div className="text-gray-600 my-3 mt-8">
              <p className="text-justify leading-8 font-sans text-lg text-gray-600">
                The Department of Computer Science & Engineering (CSE) was
                established in 1997 with a focus on imparting the fundamental
                concepts both theoretically and practically. Keeping in view the
                growth in industry and increasing demand for computer
                professionals, the department also offers some industry
                associated courses. To meet the needs of industry and R&D
                organizations, the course curriculum has been carefully
                customised to meet the rising global outlook and focuses on
                forthcoming innovations in the field of Computer Science and
                Engineering. Computer Science and Engineering (CSE) is a highly
                sought-after course because it acts as a catalyst and allows one
                to keep up with the digital era. The platforms are incredibly
                diversified, with a huge range of job opportunities. This course
                is offered to students at the undergraduate as well as the
                postgraduate levels and students obtain the B.Tech and M.Tech
                degrees, respectively.The B.Tech (CSE) programme offered by the
                Department has been accredited thrice by the National Board of
                Accreditation (NBA) in 2003, 2007, 2018 and 2023.
              </p>
            </div>
          </div>
          <div className="flex-1 flex justify-center items-center">
            <div className="lg:w-96 h-full relative sm:w-10/12 w-12/12 max-w-full mt-20">
              <Image
                src="/images/about/department.png"
                width={500}
                height={500}
                className="animate-translateAnimate"
              />
            </div>
          </div>
        </div>
        <p
          className="text-[#de0650] my-3 text-2xl mt-14 font-bold font-playFair"
          data-aos="fade-right">
          ICAICCIT - 2026 (4<sup className="text-[#de0650]">th</sup>{" "}
          International Conference on Advances in Computing,
          <br /> Communication and Information Technology)
        </p>
        <div
          className="flex md:flex-row flex-col-reverse item-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto"
          data-aos="fade-right">
          <div>
            <div className="text-gray-600 my-3 mt-8">
              <p className="text-justify leading-8 font-sans text-lg text-gray-600">
                <b>ICAICCIT-2026</b> is to invite all the Academicians, Researchers, and industrialists worldwide to participate and discuss the latest achievements in the advanced field of computing like Advancement in the Artificial Intelligence, Blockchain, Cyber Security, Distributed Computing and Internet of Things. The main goal of the conference is to provide a forum for high-quality reports on the state-of-the-art Theory, Technology, and Applications of advanced fields of computing as used in measurement, automation, and scientific research, in industry and business. The initiative provides a focused and highly interactive forum where both researchers and technologists have the opportunity to present and discuss leading research topics, developments, and future directions in their areas of interest. The importance of the conference is its vision to establish scientific contacts between research teams and scientists from different countries for future joint research collaborations.
              </p>
            </div>
          </div>
          <div className="flex-1 flex justify-center items-center">
            <div className="lg:w-96 h-full relative sm:w-10/12 w-12/12 max-w-full mt-20">
              <Image
                src="/images/about/aiccit.png"
                width={500}
                height={500}
                className="animate-translateAnimate"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
