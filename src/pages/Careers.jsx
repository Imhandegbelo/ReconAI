import React from "react";
import Button from "../components/Button";
import userCheck from "../assets/images/careers-page/user-check.png";
import code from "../assets/images/careers-page/code.png";
import headsetMic from "../assets/images/careers-page/headset-mic.png";
import dollarCoin from "../assets/images/careers-page/dollarCoin.png";
import clock from "../assets/images/careers-page/alarm.png";
import earth from "../assets/images/careers-page/earth.png";
import suitcase from "../assets/images/careers-page/suitcase.png";
import gift from "../assets/images/careers-page/Gift.png";
import send from "../assets/images/careers-page/send.png";
import briefCase from "../assets/images/careers-page/Suitcase 1.png";
import location from "../assets/images/careers-page/location.png";
import Hero from "../assets/images/careers-page/hero.png";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import { Link } from "react-router-dom";

const Careers = () => {
  const teams = [
    {
      name: "Product",
      logo: userCheck,
    },
    {
      name: "Engineering",
      logo: code,
    },
    {
      name: "Marketing",
      logo: headsetMic,
    },
    {
      name: "Finance",
      logo: dollarCoin,
    },
  ];

  const openings = [
    {
      short: "AM",
      title: "ACCOUNT MANAGER",
      type: "Full-time",
      location: "Remote",
    },
    {
      short: "A",
      title: "ACCOUNT",
      type: "Part-Time",
      location: "Remote",
    },
    {
      short: "PD",
      title: "PRODUCT DESIGNER",
      type: "Full-time",
      location: "Remote",
    },
    {
      short: "DO",
      title: "DEVOPS",
      type: "Full-time",
      location: "Remote",
    },
    {
      short: "FD",
      title: "FRONT-END DEVELOPER",
      type: "Full-time",
      location: "Lagos",
    },
    {
      short: "FM",
      title: "FINANCE MANAGER",
      type: "Full-time",
      location: "Remote",
    },
    {
      short: "MS",
      title: "MARKETING SPECIALIST",
      type: "Full-time",
      location: "Remote",
    },
    {
      short: "HA",
      title: "HEAD ACCOUNTANT ",
      type: "Full-time",
      location: "Lagos",
    },
    {
      short: "AM",
      title: "ACCOUNT MANAGER",
      type: "Full-time",
      location: "Lagos",
    },
    {
      short: "DA",
      title: "DATA ANALIST",
      type: "Part-time",
      location: "Remote",
    },
    {
      short: "PD",
      title: "PRODUCT DESIGNER",
      type: "Internship",
      location: "Remote",
    },
    {
      short: "SE",
      title: "SALES EXECUTIVE",
      type: "Full-time",
      location: "Remote",
    },
  ];

  return (
    <>
      <ScrollToTop />
      <NavigationBar />
      <div>
        <div
          style={{ backgroundImage: `url(${Hero})` }}
          className="text-center bg-cover bg-no-repeat bg-center h-[460px] md:h-[600px]"
        >
          <div className="flex items-center justify-center bg-black/50 h-full w-full">
            <h1 className="text-6xl text-white">CAREERS</h1>
          </div>
        </div>
        <div>
          <div className="mx-16 py-12 md:mx-auto md:px-10">
            <h2 className="text-center text-4xl md:text-4xl lg:text-5xl font-bold text-[#1849A9] font-normal">
              JOIN US
            </h2>
            <p className="text-center text-xl sm:text-2xl leading-[25px] md:text-2xl w-50">
              Want to join an exciting work environment operating at the
              forefront of AI technology development for accounting software?
            </p>
          </div>
        </div>

        <div className="w-full px-1 sm:px-12 pt-10 bg-gray-100">
          <h2 className="text-center text-4xl bg-gray-100 pt-2 pb-7 mx-auto lg:text-5xl md:text-5xl font-normal lg:pt-12 md:pt-8 sm:pt-6 text-[#1849A9] leading-6">
            OUR TEAMS
          </h2>
          <div className="bg-gray-100 pt-2 grid grid-cols-2 lg:grid lg:grid-cols-4 sm:grid sm:grid-cols-2">
            {teams.map((team) => (
              <div className="flex flex-col my-4 md:max-w-7xl sm:w-full">
                <h3 className="text-center text-2xl text-[#101828] md:text-3xl leading-[60px]">
                  {team.name}
                </h3>

                <img
                  src={team.logo}
                  aria-hidden="true"
                  alt="team logo"
                  className="text-center w-20 md:w-[100px] self-center"
                />
              </div>
            ))}
          </div>
          <div className="px-5 bg-gray-100 text-center py-4 mb-4">
            <p className="text-center mx-auto text-xl sm:text-2xl md:text-3xl font-normal pb-6 max-w-7xl">
              We are a global company with root spread worldwide, and our team
              reflects that. The Account Pal team is building the future of AI
              technology to help improve efficiency and boost productivity.
            </p>
          </div>
        </div>

        <div className="py-6 pt-2">
          <h2 className="text-4xl font-normal md:text-5xl lg:text-5xl text-center text-[#1849A9] mx-auto">
            BENEFITS
          </h2>
          <ul className="md:flex md:flex-col lg:pl-60 pt-2 md:pl-30 pl-10">
            <li className="inline-flex items-center mt-1">
              <img
                src={clock}
                alt="clock icon"
                className="self-center m-2 w-12"
              />{" "}
              <span className="text-base sm:text-xl md:text-3xl text-[#101828] leading-4">
                Flexi-time and remote working
              </span>
            </li>
            <li className="inline-flex items-center mt-1">
              <img
                src={earth}
                alt="earth icon"
                className="self-center m-2 w-12"
              />{" "}
              <span className="text-base sm:text-xl md:text-3xl text-[#101828] leading-4">
                Opportunity to be part of a world-class team
              </span>
            </li>
            <li className="inline-flex items-center mt-1">
              <img
                src={suitcase}
                alt="suitcase icon"
                className="self-center m-2 w-12"
              />{" "}
              <span className="text-base sm:text-xl md:text-3xl text-[#101828] leading-4">
                Fantastic work culture
              </span>
            </li>
            <li className="inline-flex items-center mt-1">
              <img
                src={gift}
                alt="gift icon"
                className="self-center m-2 w-12"
              />{" "}
              <span className="text-base sm:text-xl md:text-3xl text-[#101828] leading-4">
                Competitive compensation package and benefits
              </span>
            </li>
          </ul>
        </div>

        <div className="bg-gray-100 px-4 py-4 sm:px-14 md:px-14 lg:px-20">
          <h2 className="lg:text-5xl mx-2 md:text-5xl text-4xl text-[#1849A9] text-center">
            CURRENT OPENINGS
          </h2>
          <div className="grid md:grid-cols-2 gap-y-10 gap-x-20 pb-6 sm:px-6 pt-14 mx-auto">
            {openings.map((opening) => (
              <div className="flex justify-between md:p-/1 md:mx-/0">
                <div className="flex gap-2 w-10/12">
                  <div
                    aria-hidden="true"
                    className="w-[13%] px-/2 flex items-center justify-center border-2 border-blue-500 rounded-full text-base sm:text-lg md:m-/1 md:text-xl"
                  >
                    {opening.short}
                  </div>
                  <div className="basis-3/4">
                    <h3 className="items-start text-base sm:text-xl md:text-base md:ml-1 sm:mb-2 lg:text-xl lg:mb-0 xl:text-2xl 2xl:text-3xl font-normal">
                      {opening.title}
                    </h3>
                    <div className="flex justify-between">
                      <div className="flex">
                        <img
                          aria-hidden="true"
                          src={briefCase}
                          alt="briefcase illustration"
                          className="mt-1 w-5 h-5 sm:h-6 sm:w-6 md:h-6 md:w-6"
                        />
                        <span className="text-sm sm:text-base md:text-sm lg:text-base xl:text-lg pt-1 pl-2">
                          {opening.type}
                        </span>
                      </div>
                      <div className="flex align-center">
                        <img
                          aria-hidden="true"
                          src={location}
                          alt="location icon"
                          className="ml-2 mt-1 h-5 w-5 sm:w-6 sm:h-6 md:h-6 md:w-6"
                        />
                        <span className="text-sm sm:text-base md:text-sm lg:text-base xl:text-lg pt-1 pl-2">
                          {opening.location}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <Link to="" className="lg:pt-3 xl:pt-4">
                  <img src={send} alt="apply for this post" className="w-10" />
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mx-2 mt-6 my-4 py-2 sm:py-2 md:my-3 border border-solid border-slate-900">
            <h2 className="font-semibold text-base sm:text-2xl md:text-4xl">
              Join Our Newsletter
            </h2>
          </div>
          <div className="flex flex-row mx-auto md:mb-7 max-w-[300px] sm:max-w-[70%] items-center self-center">
            <input
              type="email"
              className="text-center text-base md:text-xl w-full mx-1 sm:mx-2 px-8 md:px-10 py-1 sm:py-2 border border-solid border-slate-900"
              placeholder="Enter email"
            />
            <Button path="#" title="Subscribe" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Careers;
