import React from "react";

const Dates = () => {

  return (
    <section className="py-24 text-gray" data-aos="fade-right">
      <div className="text-center mt-14">
        <h3 className="text-gray-600 text-5xl font-bold font-playFair ">
          Important <span>Dates</span>
        </h3>
      </div>

      <div className="mt-10 justify-center  flex text-gray-600">
        <table className="text-gray-600">
          <tr className="text-2xl">
            <td>Paper Submission Deadline:</td>
            <td>5<sup>th</sup> August, 2026</td>
          </tr>
          <tr className="text-2xl">
            <td>Acceptance Notification:</td>
            <td>30<sup>th</sup> August, 2026</td>
          </tr>
          <tr className="text-2xl">
            <td>Camera Ready Paper Submission Deadline:</td>
            <td>30<sup>th</sup> September, 2024</td>
          </tr>
          <tr className="text-2xl">
            <td>Last Date for Registration:</td>
            <td>10<sup>th</sup> October, 2024</td>
          </tr>
          <tr className="text-2xl">
            <td>Conference Dates:</td>
            <td>28<sup>th</sup> & 29<sup>th</sup> November, 2024</td>
          </tr>
        </table>
      </div>
    </section>
  );
};

export default Dates;

