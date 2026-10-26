import React from "react";

const index = () => {
  const ieee_oversight_committee = [
    {
      name: "Prof. Vivek Shrivastava",
      designation:
        "(Lead Member Coordinator for ICAICCIT-2026 and Section Exec Com Member Co-opted & Member-IEEE Delhi Section STDCOM on T & P Act)",
    },
    {
      name: "Prof. Rajnish Sharma",
      designation:
        "(Section Vice Chair & Member-IEEE Delhi Section STDCOM on T & P Act)",
    },
    {
      name: "Dr. Ekta Gandotra",
      designation: "(Member-IEEE Delhi Section STDCOM on T & P Act)",
    },
    {
      name: "Prof. Sneha Kabra",
      designation:
        "Section Secretary, Interim Section Treasurer & Member-IEEE Delhi Section STDCOM on T & P Act)",
    },
  ];

  return (
    <section className="py-10 text-gray-600" data-aos="fade-right">
      <div className="text-center mt-14 flex flex-col items-center">
        <h3 className="text-gray-600 text-5xl font-bold font-playFair">
          IEEE Oversight <span className="text-[#3FBA96]">Committee</span>
        </h3>
      </div>

      <div className="flex flex-col items-center text-center py-10 text-xl gap-10">
        {ieee_oversight_committee?.map((item, i) => (
          <p key={i}>
            {item.name},{" "}
            <span className="text-gray-600">{item.designation}</span>
          </p>
        ))}
      </div>
    </section>
  );
};

export default index;
