import React from "react";

const ConferenceTrack = () => {
  return (
    <section className="py-10 text-gray" data-aos="fade-right">
      <div className="text-center mt-14">
        <h3 className="text-gray-600 font-bold font-playFair text-4xl">
          Conference <span>Theme and Technical Tracks</span>
        </h3>
      </div>

      <div className="flex flex-col  items-center justify-center w-full mt-10">
        <h3 className="text-[2rem] font-playFair font-bold">
          Conference Theme:
        </h3>
        <p className="text-xl">
          The future of innovation: Digital Technologies for Smart world
        </p>
      </div>

      {/* TRACK - 1 */}
      <div
        className="mt-14 justify-center mx-6 flex text-gray-600"
        data-aos="fade-right"
      >
        <table className="md:mx-6 mx-[-8px]" width="700px">
          <thead>
            <tr>
              <th className="text-3xl text-[#de0650] font-playFair">Track 1</th>
            </tr>
            <tr>
              <th className="text-2xl text-gray-600 font-playFair">
                Theme : Artificial Intelligence, Machine Learning & Data Science
              </th>
            </tr>
            <tr>
              <th className="text-2xl text-gray-600 font-playFair px-5">
                Track Chair : Prof. A. Murli Rao, IGNOU, New Delhi & Dr. Ekta
                Gandotra, Associate Professor Department of Computer Science &
                Engineering at Jaypee University of Information Technology,
                Waknaghat, Solan
              </th>
            </tr>
            <tr className="text-2xl">
              <th className="text-gray-600 font-playFair">Topics</th>
            </tr>
          </thead>
          <tbody>
            <tr className="justify-start text-lg">
              <td>
                <ul
                  role="list"
                  className="list-disc pl-5 text-gray-600 marker:text-sky-400"
                >
                  <li>Case-Based Reasoning and Learning</li>
                  <li>Classification and Clustering</li>
                  <li>Deep Learning</li>
                  <li>Inductive Learning</li>
                  <li>Inference Rule Learning</li>
                  <li>Learning and Adaptive control</li>
                  <li>Real Time Event Learning and Detection</li>
                  <li>Natural Language Processing</li>
                  <li>Similarity Measures and Learning of Similarity</li>
                  <li>Statistical and Evolutionary Learning Soft Computing</li>
                  <li>Image Processing and Computer Vision</li>
                  <li>Internet of Things</li>
                  <li>Virtual Reality and Augmented Reality</li>
                  <li>Robotics</li>
                  <li>Annotation of Media content</li>
                  <li>Data Handling and Pre-processing</li>
                  <li>Pattern Recognitions</li>
                  <li>Feature Engineering and Feature Selection</li>
                  <li>Computational Biology &amp; Bioinformatics</li>
                  <li>Data Modeling &amp; Semantic Engineering</li>
                  <li>
                    High Performance Scientific/Engineering/ Commercial
                    Applications
                  </li>
                  <li>Infoscience &amp; Computational Informatics</li>
                  <li>Information Network Analytics</li>
                  <li>Data Science Techniques for Handling</li>
                  <li>Epidemic and Pandemic Situations</li>
                  <li>Time Series and Sequential Pattern Mining</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>

        {/* Track- 2 */}

        <table className="md:mx-6 mx-[5px]" width="700px">
          <thead>
            <tr>
              <th className="text-3xl text-[#de0650] font-playFair">Track 2</th>
            </tr>
            <tr>
              <th className="text-2xl text-gray-600 font-playFair">
                Theme : Information Technology
              </th>
            </tr>
            <tr>
              <th className="text-2xl text-gray-600 font-playFair px-5">
                Track Chair : Prof. M N Hoda, Director Bharati Vidyapeeth’s
                Institute of Computer Applications & Management (BVICAM), (GGSIP
                University, New Delhi) & Dr. Shyam Sunder Tyagi, Dean , Science
                and Technology, Gurugram University
              </th>
            </tr>
            <tr className="text-2xl">
              <th className="text-gray-600 font-playFair">Topics</th>
            </tr>
          </thead>
          <tbody>
            <tr className="justify-start text-lg">
              <td>
                <ul
                  role="list"
                  className="list-disc marker:text-sky-400 pl-5 text-gray-600"
                >
                  <li>Cloud Management and Operations</li>
                  <li>Cloud Security</li>
                  <li>Cloud Computing in Business Intelligence</li>
                  <li>Cloud Performance</li>
                  <li>Scalability and Reliability</li>
                  <li>Data Analytics in Cloud</li>
                  <li>Cloud Development and its Applications</li>
                  <li>Bit coin and Cryptocurrency</li>
                  <li>
                    Transaction and Security Awareness Ethereum and <br /> Smart
                    contract development
                  </li>
                  <li>Public vs Private Blockchain</li>
                  <li>Current Blockchain Application and Platforms</li>
                  <li>
                    Identity and Authorization Systems Building Decentralized
                    Autonomous Solutions
                  </li>
                  <li>Building Communication Network on Blockchain</li>
                  <li>Bit Coin and Cryptocurrency</li>
                  <li>Access and Identity Management</li>
                  <li>Integrity Issues and Ethical Hacking</li>
                  <li>Emerging Threats.</li>
                  <li>Cyber Crime and its Solutions</li>
                  <li>Data Privacy</li>
                  <li>IOT</li>
                  <li>Smart cloud and IoT</li>
                  <li>ISmart homes and cities</li>
                  <li>Adaptive user interfaces for smart applications</li>
                  <li>Interconnection of smart devices (things)</li>
                  <li>Dynamic urban communications</li>
                  <li>SMART healthcare and assisted living</li>
                  <li>SMART transportation and vehicles</li>
                  <li>SMART phones applications and services</li>
                  <li>3D Printing</li>
                  <li>New Energy Solutions</li>
                  <li>Robotic Process Automation (RPA)</li>
                  <li>Edge Computing</li>
                  <li>Quantum Computing</li>
                </ul>
              </td>
              {/* <td className="text-center"><b>-</b></td>
              <td className="text-center"><b>-</b></td> */}
            </tr>
          </tbody>
        </table>
      </div>

      {/* TRACK - 3 */}
      <div
        className="mt-14 justify-center mx-6 flex text-gray-600"
        data-aos="fade-right"
      >
        <table className="md:mx-6 mx-10" width="700px">
          <thead>
            <tr>
              <th className="text-3xl justify-start text-[#de0650] font-playFair">
                Track 3
              </th>
            </tr>
            <tr>
              <th className="text-2xl text-gray-600 font-playFair">
                Theme : Big Data Analytics &amp; Visualization
              </th>
            </tr>
            <tr>
              <th className="text-2xl text-gray-600 font-playFair px-5">
                Track Chair : Dr. Rajveer Singh Shekhawat, MIT, Jaipur & Prof.
                Sneha Kabra Shaheed Rajguru College of Applied Sciences for
                Women, University of Delhi
              </th>
            </tr>
            <tr className="text-2xl">
              <th className="text-gray-600 font-playFair">Topics</th>
              {/* <th>Related IEEE Society(ies)</th>
              <th>Chair</th> */}
            </tr>
          </thead>
          <tbody>
            <tr className="justify-start text-lg">
              <td>
                <ul
                  role="list"
                  className="list-disc pl-5 text-gray-600 marker:text-sky-400"
                >
                  <li>Big Data Analytics, and Applications</li>
                  <li>Big Data Search and Mining</li>
                  <li>Visualization Analytics for Big Data</li>
                  <li>Data Acquisition, Integration,</li>
                  <li>Cleaning, and Best Practices</li>
                  <li>Scalability and Efficiency</li>
                  <li>Critical Infrastructure Security</li>
                </ul>
              </td>
              {/* <td><b>-</b></td>
              <td><b>-</b></td> */}
            </tr>
          </tbody>
        </table>

        {/* Track- 4 */}

        <table className="md:mx-6 mx-10" width="700px">
          <thead>
            <tr>
              <th className="text-3xl text-[#de0650] font-playFair">
                Track 4{" "}
              </th>
            </tr>
            <tr>
              <th className="text-2xl text-gray-600 font-playFair">
                Theme : Communication
              </th>
            </tr>
            <tr>
              <th className="text-2xl text-gray-600 font-playFair px-5">
                Track Chair : Dr. Mayank Singh , Dean (Research) at GL Bajaj
                Institute of Technology and Management, Greater Noida
              </th>
            </tr>
            <tr className="text-2xl">
              <th className="text-gray-600 font-playFair">Topics</th>
              {/* <th>Related IEEE Society(ies)</th>
              <th>Chair</th> */}
            </tr>
          </thead>
          <tbody>
            <tr className="justify-start text-lg">
              <td>
                <ul
                  role="list"
                  className="list-disc pl-5 text-gray-600 marker:text-sky-400"
                >
                  <li>Traffic management in Networks & QoS</li>
                  <li>Wireless and mobility</li>
                  <li>Overlay networks and virtualization</li>
                  <li>Recent Network security trends</li>
                  <li>Switching and routing advances</li>
                  <li>Proposals for future Internet structure</li>
                  <li>Software-defined networking</li>
                  <li>
                    Information-centric networking, Sensor networks, Online
                    social networks Blockchain 5G systems
                  </li>
                  <li>Vehicular networks,</li>
                  <li>Disruption- and delay-tolerant networks,</li>
                  <li>Mobile ad hoc networking</li>
                </ul>
              </td>
              {/* <td className="text-center"><b>-</b></td>
              <td className="text-center"><b>-</b></td> */}
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ConferenceTrack;
