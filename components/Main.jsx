import React, { useEffect } from "react";
import Image from "next/image";
import Typed from "react-typed";
import Aos from "aos";
import "aos/dist/aos.css";
import mr_image from "../public/images/main/mr.png";
const Main = () => {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  return (
    <>
      <div className="w-full h-[70vh] py-4">
        <div className="flex items-start justify-between px-5">
          {/* <a
            href="https://cmt3.research.microsoft.com/ICAICCIT-2024"
            target="_blank"
          >
            <button className="p-3 bg-[#3FBA96] rounded-full text-white font-bold border border-[#3FBA96] hover:text-black hover:bg-white duration-300">
              Submission Open
            </button>
          </a> */}
        </div>
        <div className="flex flex-col-reverse md:flex-row items-center gap-14 justify-center w-full h-full">
          <div className="flex flex-col items-center justify-center gap-3">
            <h3 className="text-4xl sm:text-4xl md:text-4xl lg:text-8xl text-gray-600 font-playFair font-bold">
              ICAICCIT - <span>2026</span>
            </h3>

            <p className="text-3xl font-poppons text-center">
              4<sup>th</sup> International Conference on Advances in{" "}
            </p>
            <div className="text-2xl sm:text-2xl md:text-4xl lg:text-4xl font-bold mt-2">
              <Typed
                strings={[
                  "Computing",
                  "Communication",
                  "Information Technology",
                ]}
                typeSpeed={40}
                backSpeed={50}
                loop
              />
            </div>
            <p className="text-3xl font-bold mt-10 text-gray-600 text-center">
              19<sup>th</sup> November, 2026 - 20<sup>th</sup> November, 2026
            </p>
            <p className="text-2xl text-[#3FBA96] md:w-[800px] text-center font-bold mt-5">
              Two-days, 19<sup>th</sup> Nov (Thursday) - 20<sup>th</sup> Nov.
              2026 (Friday)
            </p>
            <p className="text-xl text-[#3FBA96] md:w-[800px] text-center font-bold mt-3">
              IEEE Delhi Section approval is under process
            </p>
            <h3>
              Conference Theme: The future of innovation: Digital Technologies
              for Smart world
            </h3>
          </div>
          <div className="animate-translateAnimate hidden lg:block">
            <Image src={mr_image} width={600} height={600} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
