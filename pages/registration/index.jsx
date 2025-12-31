import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
const Register = () => {
  return (
    <section className="py-10 text-gray-600" data-aos="fade-right">
      <div className="text-center flex flex-col items-center w-full">
        <h3 className="text-gray-600 md:text-5xl text-4xl md:mt-20 mt-28 font-bold font-playFair">
          Registration <span>Details</span>
        </h3>

        <div className="flex items-center justify-center mt-10">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSe50R0W5Th7D-XO-PRyhP2vVEgJ6ef1azQHLFDJLXinz1pNsQ/viewform?usp=sharing"
            target="_blank"
          >
            <h3 className="text-[#de0650] text-2xl flex items-center gap-3 border-2 rounded-xl p-4 m-5 font-poppins text-center">
              Click Here to Register Yourself{" "}
              <AiOutlineArrowRight size={25} className="hidden md:flex" />
            </h3>
          </a>
        </div>

        <div className="flex items-center justify-center mt-5">
          <a
            href="https://www.eptc-ieee.net/uploads/exhibitors-pdf/59c22cf8b853e_Copyright%20form.pdf"
            target="_blank"
          >
            <h3 className="text-[#de0650] text-2xl flex items-center gap-3 border-2 rounded-xl p-4 m-5 font-poppins text-center">
              IEEE Copyright Link
            </h3>
          </a>
        </div>

        <p className="text-[#de0650] my-3 text-3xl mt-10 font-bold font-playFair">
          Conference Registration Fee and Policy
        </p>
        <p className="my-3 text-lg  mt-4 font-bold max-w-[700px] text-gray-600">
          At least one of the author of the paper has to register for the
          conference. It is mandatory to present the paper in the conference for
          the inclusion of the paper in the conference proceedings.
        </p>
        {/* <p className="text-lg font-bold text-center max-w-[700px]">All accepted, registered & presented paper will be considered for publishing in Conference Proceedings by IEEE Explore, Scopus Index (IEEE Record Number #59806)</p> */}
        <div className="mt-14 justify-center flex text-gray-600 ">
          <table>
            <thead>
              <tr>
                <th></th>
                <th colSpan="2" className="text-lg">
                  For Indian Authors and Deligates (in INR)
                </th>
                <th colSpan="2" className="text-lg">
                  For Foreign Authors and Deligates (in USD)
                </th>
              </tr>

              <tr className="text-lg">
                <th></th>
                <th>IEEE Member</th>
                <th>General</th>
                <th>IEEE Member</th>
                <th>General</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-lg font-bold">Full-Time Students</td>
                <td>7,000</td>
                <td>8,000</td>
                <td>150</td>
                <td>190</td>
              </tr>

              <tr>
                <td className="text-lg font-bold">
                  Faculty & Research Scholars
                </td>
                <td>8,000</td>
                <td>9,600</td>
                <td>180</td>
                <td>230</td>
              </tr>

              <tr>
                <td className="text-lg font-bold">Industry</td>
                <td>10,000</td>
                <td>12,000</td>
                <td>200</td>
                <td>250</td>
              </tr>

              <tr>
                <td className="text-lg font-bold">Attendee only</td>
                <td>3,000</td>
                <td>4,000</td>
                <td>50</td>
                <td>90</td>
              </tr>
            </tbody>
          </table>
        </div>


        <div className="flex flex-col items-center justify-center">
          <h3 className="text-[#de0650] my-3 text-4xl mt-10 font-bold font-playFair">
            Payment Details
          </h3>
          <p className="font-bold mt-2">
            Note: Payment to be made through NEFT / RTGS in favour of “Manav
            Rachna International Institute of Research & Studies” payable at
            Faridabad
          </p>
          <p className="font-bold">
            Please keep the printed details of the fee receipt which will be
            submitted at the time of physical registration at the conference
            venue.
          </p>
          <div className="border-2 rounded-xl p-3 flex flex-col mt-5 text-lg font-bold">
            <p className="flex">
              Payment Details - <p>RTGS/NEFT Transfer</p>
            </p>
            <p className="flex">
              Account No - <p>924020046485383</p>
            </p>
            <p className="flex">
              Account Name -{" "}
              <p>
                {" "}
                MANAV RACHNA INTERNATIONAL INSTITUTE OF RESEARCH AND STUDIES GST
              </p>
            </p>
            <p className="flex">
              IFSC Code - <p> UTIB0002693</p>
            </p>
            <p className="flex">
              Bank Name - <p> AXIS BANK LTD</p>
            </p>
            <p className="flex">
              Address - <p> GREEN FIELD COLONY, FARIDABAD</p>
            </p>
          </div>
        </div>

        {/* <div className="flex flex-col items-center justify-center">
          <h3 className="text-[#de0650] my-3 text-4xl mt-10 font-bold font-playFair">
            For International Payment
          </h3>

          <p className="text-2xl font-bold">SWIFT CODE - INDBINBBNDH</p>
          <p className="text-2xl font-bold">MICR CODE - 110234066</p>
        </div> */}
      </div>
    </section>
  );
};

export default Register;
