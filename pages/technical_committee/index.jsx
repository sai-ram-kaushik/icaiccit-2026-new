import React from "react";

const TechnicalCommittee = () => {
  const Section = ({ title, children }) => (
    <div className="mt-14 w-full max-w-[900px] mx-auto px-4" data-aos="fade-right">
      <h3 className="text-[#de0650] text-2xl font-bold font-playFair mb-4 border-b-2 border-[#de0650] pb-2">
        {title}
      </h3>
      <div className="text-gray-600 text-lg">{children}</div>
    </div>
  );

  const MemberList = ({ members }) => (
    <ul className="list-disc pl-5 space-y-1 marker:text-sky-400">
      {members.map((m, i) => (
        <li key={i}>{m}</li>
      ))}
    </ul>
  );

  return (
    <section className="py-10" data-aos="fade-right">
      <div className="text-center mt-14">
        <h3 className="text-gray-600 font-bold font-playFair text-4xl">
          Technical <span>Committee</span>
        </h3>
      </div>

      <Section title="Finance Chair / Treasurer">
        <MemberList
          members={[
            "Dr. Ramesh Chandra Sahoo, Associate Professor, SET, MRIIRS",
            "Dr. Abiruchi Passi, Professor, EC, MRIIRS",
          ]}
        />
      </Section>

      <Section title="Technical Publication & Proceeding Committee">
        <p className="font-bold mb-2">Chair</p>
        <p className="mb-4">Prof. Prabha Sharma, IIT Kanpur, NCU, NPTEL</p>
        <p className="font-bold mb-2">Members</p>
        <MemberList
          members={[
            "Dr. Ela Kumar, IGDTU, New Delhi",
            "Dr. Geeta Sikka, NIT, Jalandhar",
            "Dr. Yudhvir Singh, UIET, MDU Rohtak",
            "Dr. Priyanka, NIT, Kurukshetra",
            "Dr. Kamlesh Dutta, NIT Hamirpur",
            "Dr. Suresh Poonia, NSUT, Delhi",
            "Dr. Deepa Bura, Prof, MRIIRS",
            "Dr. Gonni, Associate Prof., MRIIRS",
            "Dr. Sidhanshu Agnihotri, Associate Prof., MRIIRS",
          ]}
        />
      </Section>

      <Section title="Website Design & Updation">
        <MemberList
          members={[
            "Dr. Shweta Sharma, Associate Prof., MRIIRS",
            "Dr. Shefali Singhal, Associate Prof., MRIIRS",
          ]}
        />
      </Section>

      <Section title="Hospitality (Accommodation, Transport, and Sightseeing Planning)">
        <MemberList
          members={[
            "Dr. Priyanka Rastogi, Associate Prof., MRIIRS",
            "Dr. Ginni Sehgal, Associate Prof, MRIIRS",
          ]}
        />
      </Section>

      <Section title="Food Management (Tea/Coffee, Breakfast, Lunch and Dinner)">
        <MemberList
          members={[
            "Dr. Bhanu, Associate Prof., MRIIRS",
            "Dr. Shefali Sehghal, Associate Prof., MRIIRS",
          ]}
        />
      </Section>

      <Section title="Purchase (Stationary, Registration Kit, etc.)">
        <MemberList
          members={[
            "Dr. Tanvi Gupta, Associate Prof., MRIIRS",
            "Dr. Neha Garg, Associate Prof., MRIIRS",
          ]}
        />
      </Section>

      <Section title="Industry Collaboration Committee">
        <MemberList
          members={[
            "Mr. Rajit Sokka, Regional Head Academic Alliances India North at Tata Consultancy Services Ltd",
            "Dr. Shweta Sharma, Associate Prof., MRIIRS",
          ]}
        />
      </Section>

      <Section title="Sponsorship Committee">
        <MemberList
          members={[
            "Ms. Meghna, Associate Prof., MRIIRS",
            "Mr. Arko Bagchi, Associate Prof., MRIIRS",
          ]}
        />
      </Section>

      <Section title="Publicity Committee">
        <MemberList
          members={[
            "Dr. Kamlesh Sharma, Professor, EEE, MRIIRS",
            "Dr. Rohit Batla, Associate Professor, CSE",
            "Dr. Praveen Kumar, Astana IT University, Astana Kazakhstan",
          ]}
        />
      </Section>

      <Section title="International Advisory Committee">
        <MemberList
          members={[
            "Prof. Anand Nayyar, Graduate School Duy Tan University Vietnam",
            "Prof. Anil Kumar, London Metropolitan University, United Kingdom (UK)",
            "Prof. Sujit Roy, Ulster University, UK",
            "Prof. Haider Raza, University of Essex, UK",
            "Prof. Ankur Mani, University of Minnesota, USA",
            "Prof. Suryakanthi Tangirala, University of Botswana, USA",
            "Mr. Hemant Kumar Srivastava, SSE, Bayer Health Care, Pittsburg, USA",
            "Mr. Mahesh Chaudhari, Neustar Inc., San Francisco CA, USA",
            "Prof. Sunil Khatri, Amity University, Tashkent, Uzbekistan",
            "Prof. Aditya Ghose, University of Wollongong, Australia",
            "Prof. K.C. Santosh, University of South Dakota, USA",
            "Prof. Marcin Paprzycki, Polish Academy of Sciences, Poland",
            "Prof. Rama Chellappa, Provost University of Maryland, USA",
            "Prof. Burhanuddin Mohd Aboobaider, University Teknikal, Malaysia Melka",
            "Prof. Sattar B. Sadkhan, University of Babylon, Iraq",
            "Prof. Surbhi Bhatia, King Faisal University, Saudi Arabia",
            "Prof. Venki Balasubramanian, Federation University, Australia",
            "Mr. Nikhil, Data Scientist, CHECK24 Comparison Portal, Germany",
            "Ms. Nitika Lochab, Corporate Treasury, TechnipFMC, Paris, France",
            "Prof. Ujjwal Aggarwal, Chairman Research and Consultancy (IT), Salalah College of Technology, Salalah, Sultanate of Oman",
          ]}
        />
      </Section>

      <Section title="National Advisory Committee">
        <MemberList
          members={[
            "Prof. K. K. Biswas, Prof emeritus IIT Delhi, India",
            "Prof. R. K. Aggarwal, JNU, Delhi, India",
            "Prof. Kusum Deep, IIT Roorkee",
            "Prof. Manav Bhatnagar, IIT Delhi",
            "Prof. Gadadhar Sahoo, IIT (ISM) Dhanbad",
            "Prof. M.N.Hoda, BVPIM, Delhi, India",
            "Mr. S. Balamurugan, Intelligent Research Consultancy, India Services (iRCS), Coimbatore, Tamilnadu, India",
            "Prof. Parimala N., JNU, New Delhi",
            "Prof. Meenu Khurana, Chitkara University, Punjab",
            "Prof. S. Saravan Kumar, School of Engg. & Technology, CMR University, Karnataka",
            "Prof. G. R. Bamnote, PRMIT&R, Badnera",
            "Prof. C. K. Jha, Vanasthali University, Rajasthan, India",
            "Prof. V. S. Dhaka, Manipal University, Jaipur, India",
            "Prof. Dheerendra Singh, SUSCET, Chandigarh, India",
            "Prof. Manu Pratap Singh, Dr. B. R. Ambedkar University, Agra, India",
            "Prof. C.P. Gupta, Rajsthan Technical University, Kota, India",
            "Dr. P. C. Gupta, University of Kota, Kota, India",
            "Prof. Bharat Mishra, MGCGU, Satna, MP, India",
            "Mr. Mayank Singh, Consilio Intelligence Research Lab, Noida, India",
            "Prof. Nisheeth Joshi, Banasthali Vidyapith, Rajasthan",
            "Ms. Ajantha Devi V, Research Head, AP3 Solutions, India",
            "Prof. Usha Batra, G. D Goenka University",
            "Prof. Ritesh Srivastav, Galgotias College of Engineering and Technology",
            "Prof. Vasudha Arora, ITS Engineering College, Greater Noida",
            "Prof. Ochin Sharma, Chandigarh University",
            "Prof. Madhulika Bhatia, Amity University, Noida",
            "Prof. N.N. Das, Manipal University, Jaipur",
            "Prof. Latika Duhan, Ansal University, Gurgoan",
            "Prof. Meghna Sharma, North Cap University, Gurgoan",
            "Prof. Suman Bhatia, Ajay Kumar Garg College of Engineering, Ghaziabad",
          ]}
        />
      </Section>

      <Section title="Local Advisory Committee">
        <MemberList
          members={[
            "Prof. (Dr.) G.L Kahana, PVC, MRIIRS",
            "Prof. (Dr.) Sarita Sachdeva, Dean Research, Head Biotech, MRIIRS",
            "Dr. Brijesh Kumar, Dean SCA, MRIIRS",
            "Prof. (Dr.) Leena G., Head EEE, MRIIRS",
            "Prof. (Dr.) Devender Vashisht, Head Aero & Automobile, MRIIRS",
            "Prof. (Dr.) Manoj Nayak, Head Mechanical, MRIIRS",
            "Prof. (Dr.) Jyoti Chawla, Associate Dean Academics, MRIIRS",
            "Prof. (Dr.) Arunangshu Mukherjee, Head Earth Science & Environment, MRIIRS",
            "Prof. (Dr.) Anita Khosla, Professor, EEE, MRIIRS",
            "Prof. (Dr.) Shaveta Bhatia, Head FCA, MRIIRS",
            "Prof. (Dr.) Rashmi Aggarwal, Professor, SCA, MRIIRS",
            "Prof. (Dr.) Abhiruchi Passi, Head ECE, MRIIRS",
          ]}
        />
      </Section>

      <Section title="Technical Program Committee">
        <p className="font-bold mb-2">Chair</p>
        <p className="mb-4">
          Dr. Swapnoneel Roy, FIS Distinguished Professor of Computing, University of North Florida, US
        </p>
        <p className="font-bold mb-2">Members</p>
        <MemberList
          members={[
            "Prof. Animesh Mukherjee, IIT Kharagpur, India",
            "Prof. Angshul Mazumdar, IIIT, Delhi, India",
            "Prof. Harimohan Pandey, Middlesex University, London, UK",
            "Prof. Dhram Singh, JAAT, Namibia University of Science & Technology, Namibia",
            "Prof. Bhupesh Kumar, Arba Minch University, Ethiopia",
            "Prof. Guy-alain Zodi, Namibia University of Science & Technology, Namibia",
            "Prof. Basant Tiwari, HAWASSA University, Ethiopia",
            "Prof. Nalina Suresh, University of Namibia",
            "Prof. M.K S Sastry, Namibia University of Science & Technology, Namibia",
            "Prof. Kailash Kumar, Saudi Electronic University, Riyadh, KSA",
            "Prof. Vikram Goyal, IIIT Delhi, India",
            "Prof. Sandeep Kumar, IIT Delhi, India",
            "Mr. N. K. Garg, Vice President, R Systems, Noida",
            "Prof. Anuja Arora, Jaypee University, NOIDA, U.P., India",
            "Prof. Balamurgan, Galgotia, Noida, India",
            "Prof. Ayesha Chaudhary, SCSS, JNU, Delhi, India",
            "Prof. Pratik Chattopadhyay, IIT(BHU), Varanasi, India",
            "Prof. Pratik Narang, CSIS, BITS Pilani, India",
            "Prof. Priti Bansal, NSUT, Delhi, India",
            "Prof. P. S. Rana, Thapar University, India",
            "Prof. Partha Pritam Roy, IIT, Roorkee, India",
            "Prof. Dharmender Kumar, GJU, Hisar, HR, India",
            "Prof. Parmender Singh, DCRUST, Murthal, HR, India",
            "Prof. G. Shobha, CSE, R V College of Engineering, Bengaluru",
            "Prof. Jagdish Bansal, SAU, India",
            "Prof. Komal Bhatia, J.C. Bose University of Science and Technology, India",
            "Prof. Ashutosh Dixit, J.C. Bose University of Science and Technology, India",
            "Prof. Sapna Gambhir, J.C. Bose University of Science and Technology, India",
            "Prof. Balaprakas Rao Killi, NIT Warangal, India",
            "Prof. Bidyut Patra, NIT, Raurkela, India",
            "Prof. Chiranjoy Chattopadhyay, IIT Jodhpur, India",
            "Prof. Dipti Theng, G. H. Raisoni College of Engineering, Nagpur, India",
            "Prof. Dwaipayan Roy, Indian Institute of Science Education and Research, Kolkata, India",
            "Prof. Geeta Chhikara, Manipal University, Jaipur, India",
            "Prof. J. N. Singh, Galgotia University, Gr. NOIDA, U.P, India",
            "Prof. Jagan Mohan Reddy, Lakireddy Bali Reddy College of Engineering, AP, India",
            "Prof. Kuldeep Singh, MNIT, Jaipur, India",
            "Prof. M. Sandhya, NIT, Warangal, India",
            "Prof. M. Srinivas, NIT Warangal, India",
            "Prof. Madhurima, Amity University, NOIDA, U.P, India",
            "Prof. Manju Choudhary, Jaypee University, NOIDA, India",
            "Prof. Manjubala Bisi, NIT Warangal, India",
            "Mr. Mayank Saini, Sapient Global Markets, New Delhi, India",
            "Prof. Mukta, Jaypee University, NOIDA, U.P., India",
            "Prof. Pradip Jawandhiya, Pankaj Laddhad Institute of Tech & Management Studies, Buldana, India",
            "Prof. Pallavi Goel, Galgotia University, Noida, India",
            "Prof. Pooja Sapra, NCU, Gurugram, India",
            "Prof. Poonam Agrawal, School of Computer & Systems Sciences, JNU, India",
            "Prof. Rajesh R. Central University of Kerala, India",
            "Prof. Rajiv Ratn Shah, Director at MIDAS Lab, IIIT Delhi, India",
            "Prof. Rajni Jain, Principal Scientist, ICAR-NIAP, India",
            "Prof. Sampat Kumar, Galgotias university, Noida, India",
            "Prof. Sanatan Sukhija, Ecole Centrale School of Engineering, Mahindra University, India",
            "Prof. Sarika Jain, NIT, Kurukshetra, India",
            "Prof. Seema Rawat, Amity University, Noida, India",
            "Prof. Shailendra Kumar, DTU, Delhi, India",
            "Prof. Sherin Zafar, SEST, Jamia Hamdard, India",
            "Prof. Swati Agrawal, Netaji Subhash Institute of Technology, Delhi, India",
            "Prof. Tanupriya, UPSC, Dehradun, India",
            "Prof. R. ThiruMurugan, Gnanam School of Business, Ahmadabad, India",
            "Prof. Vanishri Arun, JSS Science and Technology University, Karnataka, India",
            "Prof. Venkateswara Rao Kagita, NIT Warangal, India",
            "Prof. Yayati Gupta, Ecole Centrale School of Engineering, Mahindra University, India",
            "Mr. Shubham K. Gupta, Gojek Tech, India",
            "Mr. Sourabh Modi, Highlighter, India",
            "Mr. Vivek Mittal, Synopsys India Pvt. Ltd, India",
            "Ms. Kanishka Garg, E&Y, India",
            "Prof. M. Sunil Kumar, Sree Vidyaniketan Engg. College, Tirupati, India",
            "Prof. Meenakshi S. Arya, SRM Institute of Science and Technology, Chennai, Tamil Nadu, India",
            "Prof. R. Sugumar, Velammal Institute of Technology, Chennai, India",
            "Prof. Rohit Beniwal, DTU, New Delhi, India",
            "Prof. Sanjeev Pippal, G L Bajaj Institute of Manage and Technology, Noida, India",
            "Prof. Varun Gupta, Chandigarh College of Engineering & Technology, India",
            "Dr. Nihar Ranjan Roy, Sharda University, India",
            "Dr. Subrata Sahana, Sharda University, India",
            "Dr. Amit Kant Pandit, Shri Mata Vaishno Devi University, India",
            "Dr. Sonal Sharma, Uttaranchal University, India",
          ]}
        />
      </Section>
    </section>
  );
};

export default TechnicalCommittee;
