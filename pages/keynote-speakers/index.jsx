import React from "react";

const ResourcePerson = () => {
  const resource = [
    {
      photo: "images/resource_person/anil.png",
      designation: "Chairman , AICTE , New Delhi",
      name: "Prof Anil D Sahasrabudhe (Chief Guest ICAICCIT-2025)",
    },
    {
      photo: "images/resource_person/neyara.png",
      designation: "Liwa University, Abu Dhabi, UAE",
      name: "Dr. Neyara Radwan",
    },
    {
      photo: "images/resource_person/muzammil.png",
      designation:
        "Deputy Commander of KOR-SUKSIS UniMAP, Executive Commitee IEEE APMTTEMC Malaysia Joint Chapter, Faculty of Electronic Engineering Technology,  Universiti Malaysia Perlis.",
      name: "Dr. Muzammil Bin Jusoh",
    },
    {
      photo: "images/resource_person/subarna.png",
      designation:
        "Professor & Director, IT Innovation Center Tribhuvan University, Nepal",
      name: "Dr. Subarna Shakya",
    },
    {
      photo: "images/resource_person/siri.jpeg",
      designation: "IEEE Fellow, Chairman of AtheroPoint, Roseville, CA, USA",
      name: "Dr. Jasjit S. Suri",
    },
    {
      photo: "images/resource_person/sateesh.png",
      designation:
        "Professor of Computer Engineering, Professor CSE & Head ICC @ IIT Roorkee | Treasurer IEEE Roorkee",
      name: "Dr. P. Sateesh",
    },
    {
      photo: "images/resource_person/christopher.jpeg",
      designation:
        "Director of the Computer Science Research Institute School of Computing at Ulster University.",
      name: "Prof. Christopher Nugent",
    },
    {
      photo: "images/resource_person/swapnoneel.jpeg",
      designation:
        "FIS Distinguished Professor of Computing, University of North Florida",
      name: "Dr. Swapnoneel Roy",
    },
    {
      photo: "images/resource_person/sujit.jpeg",
      designation: "Computer Scientist- AI, Huntsville, Alabama, United States",
      name: "Dr .Sujit Roy",
    },
    {
      photo: "images/resource_person/ankit.jpg",
      designation:
        "Research Professor, Department of ECE McCormick School of Engineering, Northwestern University",
      name: "Dr. Ankit Agrawal",
    },
    {
      photo: "images/resource_person/murali.jpg",
      designation:
        "Scientist-G & Head Interdisciplinary Cyber Physical Systems Division, Department of Science and Technology, New Delhi, India",
      name: "Dr. K R Murali Mohan",
    },
    {
      photo: "images/resource_person/haider_raza.jpg",
      designation:
        "Senior Lecturer School of Computer Science and Electronic Engineering (CSEE), University of Essex",
      name: "Dr Haider Raza",
    },
    {
      photo: "images/resource_person/kamlesh.jpg",
      designation: "Associate Professor, NIT, Hamripur(HP)",
      name: "Dr.(Mrs.) Kamlesh Dutta",
    },
    {
      photo: "images/resource_person/valentina.png",
      designation:
        "Head of the Intelligent Systems Research Centre, IEEE Senior Member",
      name: "Prof. Valentina Emilia Balas",
    },
    {
      photo: "images/resource_person/rajeev.jpg",
      designation:
        "Professor and Dean (Resource and Alumni Affairs) Department of Computer Science and Engineering, IIT - BHU",
      name: "Dr. Rajeev Srivastava",
    },
  ];
  return (
    <section className="py-10 text-gray-600">
      <div className="text-center mt-14" data-aos="fade-right">
        <h3 className="text-gray-600 md:text-5xl text-3xl font-bold font-playFair">
          Guest of <span>Honor</span> and Keynote <span>Speakers</span>
        </h3>
        <div
          className="flex items-center justify-center mt-12 gap-10 flex-wrap"
          data-aos="fade-right"
        >
          {/* {resource?.map((resource, i) => (
            <div
              key={i}
              className="border-2 border-cyan-600 relative w-[20rem] h-[29rem]  p-10 rounded-xl"
            >
              <div className="flex items-center justify-center">
                <div className="text-2xl group-hover:text-cyan-600">
                  <img
                    src={resource.photo}
                    width="150"
                    className="rounded-full"
                  />
                </div>
              </div>
              <p className="text-lg mt-2 text-gray-600">{resource.name}</p>
              <p className="text-lg mt-3 text-gray-600">
                {resource.designation}
              </p>
            </div>
          ))} */}
          <h2>To be Declared</h2>
        </div>
      </div>
    </section>
  );
};

export default ResourcePerson;
