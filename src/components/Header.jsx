import { FaEnvelope, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

export const Header = () => {
  return (
    <header>
      <div className="bg-slate-100 shadow-md ">
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center bg-orange-500 rounded-b-lg p-1 text-sm">
            <div className="flex md:flex-row md:items-center md:mr-80 md:justify-start text-sm">
              <div className="flex items-center md:mb-0">
                <FaLocationDot className="text-sm text-white md:text-sm" />
                <p className="text-white text-sm font-semibold md:text-sm hover:underline">
                  BuntsHostel, Mangalore
                </p>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="text-sm text-white ml-6 md:ml-6 mr-1 md:text-sm" />
                <p className="text-white text-sm font-semibold  md:text-sm hover:underline">
                  info@gmail.com
                </p>
              </div>
            </div>
            <div className="justify-end hidden md:flex">
              <FaInstagram className="text-sm text-white p-1 md:text-2xl hover:text-black " />
              <FaYoutube className="text-sm text-white p-1 md:text-2xl hover:text-black" />
              <FaFacebook className="text-sm text-white p-1 md:text-2xl hover:text-black" />
            </div>
          </div>
        </div>
        <br></br>
        <div className="flex flex-row">
          <div className="flex items-center">
            <img
              src="./assets/Mahakali_Maa.png"
              alt="logo"
              className="h-10 w-10 ml-6 md:h-16 md:w-16 md:ml-10"
            />
          </div>
          <div>
            <p className="text-xs font-bold text-blue-600 md:text-lg">
              KERALA KUTTICHATTAN JYOTHISHYALAYA
            </p>
            <p className="text-xs font-semibold text-black md:text-md">
              Madhavan Poduval(Tantri)
            </p>
          </div>
          <div className="hidden md:justify-items-end md:ml-auto md:mr-12 md:mt-5 md:flex">
            <a
              className="text-sm md:text-sm md:font-semibold md:mr-6 hover:underline"
              href="#Home"
            >
              Home
            </a>
            <a
              className="text-sm md:text-sm md:font-semibold md:mr-6 hover:underline"
              href="#Home"
            >
              About
            </a>
            <a
              className="text-sm md:text-sm md:font-semibold md:mr-6 hover:underline"
              href="#Home"
            >
              Services
            </a>
            <a className="text-sm md:text-sm md:font-semibold hover:underline" 
            href="#Home">
              Contact
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
