import React from "react";

const HeroSection = () => {
  return (
    <>
      <div className="sticky mt-24 md:mt-24">
        <div className="w-full ">
          <img
            src="./assets/Hero_Section_Background_Choice2.jpg"
            alt="hero"
            className="h-96 w-full object-cover"
          />
        </div>
        <div className="absolute top-0 left-0 right-0 w-full h-full flex bg-black bg-opacity-50 justify-center items-center">
          <div className="text-white text-center">
            <h1 className="text-lg font-bold md:font-extrabold md:text-4xl">
              Permanent Instant Solutions
            </h1>
            <p className="text-xs font-semibold md:text-lg">
              By Madhavan Poduval(Tantri)
            </p>
            <p className="text-xs mt-4 md:text-lg">
              Give us an opportunity to change your life.
            </p>
            <h1 className="text-md font-bold mt-4 md:text-2xl">Call Now!</h1>
            <p className="text-xs font-semibold mt-3 md:mt-10 md:text-lg">
              ಕೇರಳ ಕುಟ್ಟಿಚಾತನ್ ಜ್ಯೋತಿಷ್ಯಾಲಯ
            </p>
            <p className="text-xs font-semibold mt-1 md:mt-3 md:text-lg">
              ಬಂಟ್ಸ್ ಹಾಸ್ಟೆಲ್, ಮಂಗಳೂರು
            </p>
          </div>
        </div>
      </div>
      <div className="mt-5 md:mt-10 text-center">
        <h1 className="text-md font-bold md:text-2xl text-orange-500">
          No. 1 Astrologer In Dakshina Kannada
        </h1>
      </div>
      <div className="mt-5 md:mt-10 flex justify-center items-center h-full  md:mb-5">
        <div className="flex justify-center items-center h-full md:mb-5">
          <div className="rounded-md bg-blue-950 shadow-md shadow-black hover:scale-x-125 p-2 hover:scale-y-125 flex flex-row justify-center md:mr-10 mr-2 ml-2 items-center">
            <div className="flex flex-col ml-2 mr-2 items-center">
              <img
                src="./assets/Home-1.png"
                alt="home"
                className="w-10 h-10 md:w-20 md:h-16"
              />
              <br></br>
              <div className="text-xs text-center font-semibold text-white">
              <p className="text-xs  font-semibold text-white">
                Guaranteed
                <br></br>
                <span className="text-xs text-center font-semibold text-white">
                Results
                </span>
              </p>
              </div>
            </div>
          </div>
          <div className="rounded-md bg-blue-950 shadow-md shadow-black hover:scale-x-125 p-2 hover:scale-y-125 flex flex-row md:mr-10 justify-center items-center">
            <div className="flex flex-col ml-2 mr-2 items-center">
              <img
                src="./assets/Home-2.png"
                alt="home"
                className="w-10 h-10 md:w-20 md:h-16"
              />
              <br></br>
              <div className="text-xs text-center font-semibold text-white">
                <p className="text-xs  font-semibold text-white">
                  Worldwide <br></br>
                  <span className="text-xs text-center font-semibold text-white">
                    Services
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center h-full ml-2 md:mb-5 ">
          <div className="rounded-md bg-blue-950 shadow-md shadow-black hover:scale-x-125 p-2 hover:scale-y-125 flex flex-row justify-center md:mr-10 mr-2 items-center">
            <div className="flex flex-col ml-2 mr-2 items-center">
              <img
                src="./assets/Home-3.png"
                alt="home"
                className="w-10 h-10 md:w-20 md:h-16"
              />
              <br></br>
              <div className="text-xs text-center font-semibold text-white">
              <p className="text-xs  font-semibold text-white">
                Friendly
                <br></br>
                <span className="text-xs text-center font-semibold text-white">
                  Astrologer
                </span>
              </p>
              </div>
            </div>
          </div>
          <div className="rounded-md bg-blue-950 shadow-md shadow-black hover:scale-x-125 p-2 hover:scale-y-125 flex flex-row justify-center mr-2 items-center">
            <div className="flex flex-col ml-2 mr-2 items-center">
              <img
                src="./assets/Home-4.png"
                alt="home"
                className="w-10 h-10 md:w-20 md:h-16"
              />
              <br></br>
              <div className="text-xs text-center font-semibold text-white">
              <p className="text-xs  font-semibold text-white">
                Free For
                <br></br>
                <span className="text-xs text-center font-semibold text-white">
                Students
                </span>
              </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
