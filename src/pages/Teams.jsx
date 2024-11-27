import React from "react";
import Navbar from "../components/NavigationBar";
import Footer from "../components/Footer";
import ourteam from "../assets/images/teams/ourteam.png";
import one from "../assets/images/teams/1.png";
import two from "../assets/images/teams/2.png";
import three from "../assets/images/teams/3.png";
import four from "../assets/images/teams/4.png";
import five from "../assets/images/teams/5.png";
import seven from "../assets/images/teams/7.png";
import eight from "../assets/images/teams/8.png";
import nine from "../assets/images/teams/9.png";
import fb from "../assets/images/teams/fb.png";
import ln from "../assets/images/teams/ln.png";
import tw from "../assets/images/teams/tw.png";
import ScrollToTop from "../components/ScrollToTop";

function Teams() {
  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <div className="px-[44px] xl:px-[72px] mt-8">
        <div className="lg:flex lg:flex-row md:flex md:flex-row  flex-col  grid justify-items-center">
          <div className="font-lexend lg:mt-24 md:mt-24">
            <button
              type="button"
              className="rounded-lg lg:ml-2 ml-16 md:ml-2 text-white bg-blue-500 text-lg px-4 py-2"
            >
              Meet the team
            </button>
            <h2 className="lg:text-5xl text-2xl font-semibold mt-4 lg:text-left md:text-left text-center">
              Meet our leadership <br className="lg:hidden" /> team, great{" "}
              <br className="" /> personalities who work
              <br className="lg:hidden" />
              hard to
              <br className="hidden lg:block" /> empower our{" "}
              <br className="lg:hidden" />
              teams.
            </h2>
          </div>
          <div>
            <img
              alt=""
              src={ourteam}
              className="ml-24 hidden lg:block md:block md:ml-8"
            />
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center">
          <div className="flex flex-row lg:gap-36 gap-2">
            <div className=" flex flex-col items-center">
              <img alt="" src={one} className="lg:w-40 lg:h-40 w-3/4" />
              <h3 className="text-[12px] font-[500] lg:text-[16px] md:text-[16px]">
                Oluwasegun Akinshola
              </h3>
              <h4 className="text-blue-400 text-[10px] font-[400] lg:text-[14px] md:text-[14px]">
                cheif Drill-Master
              </h4>
              <div className="mt-4 flex flex-row gap-4">
                <img alt="" src={tw} className="w-2/4 h-2/4" />
                <img alt="" src={ln} className="w-2/4 h-2/4" />
                <img alt="" src={fb} className="w-2/4 h-2/4" />
              </div>
            </div>

            <div className="flex flex-col items-center">
              <img alt="" src={two} className="lg:w-40 lg:h-40 w-3/4" />
              <h3 className="text-[12px] font-[500] lg:text-[16px] md:text-[16px]">
                Dorothy Nkatha
              </h3>
              <h4 className="text-blue-400 text-[10px] font-[400] lg:text-[14px] md:text-[14px]">
                Assist Drill-Master
              </h4>
              <div className="mt-4 flex flex-row gap-4">
                <img alt="" src={tw} className="w-2/4 h-2/4" />
                <img alt="" src={ln} className="w-2/4 h-2/4" />
                <img alt="" src={fb} className="w-2/4 h-2/4" />
              </div>
            </div>
          </div>

          <div className="lg:flex lg:flex-row grid grid-cols-2 lg:gap-36 mt-12 gap-2">
            <div className="flex flex-col items-center">
              <img alt="" src={three} className="lg:w-40 lg:h-40 w-3/4" />
              <h3 className="text-[12px] font-[500] lg:text-[16px] md:text-[16px]">
                Maureen Ehiosun
              </h3>
              <h4 className="text-blue-400 text-[10px] font-[400] lg:text-[14px] md:text-[14px]">
                Design PM Lead
              </h4>
              <div className="mt-4 flex flex-row gap-4">
                <img alt="" src={tw} className="w-2/4 h-2/4" />
                <img alt="" src={ln} className="w-2/4 h-2/4" />
                <img alt="" src={fb} className="w-2/4 h-2/4" />
              </div>
            </div>

            <div className="flex flex-col items-center">
              <img alt="" src={four} className="lg:w-40 lg:h-40 w-3/4" />
              <h3 className="text-[12px] font-[500] lg:text-[16px] md:text-[16px]">
                Olatunji David
              </h3>
              <h4 className="text-blue-400 text-[10px] font-[400] lg:text-[14px] md:text-[14px]">
                Frontend PM Lead
              </h4>
              <div className="mt-4 flex flex-row gap-4">
                <img alt="" src={tw} className="w-2/4 h-2/4" />
                <img alt="" src={ln} className="w-2/4 h-2/4" />
                <img alt="" src={fb} className="w-2/4 h-2/4" />
              </div>
            </div>

            <div className="flex flex-col items-center lg:mt-0 mt-12">
              <img alt="" src={five} className="lg:w-40 lg:h-40 w-3/4" />
              <h3 className="text-[12px] font-[500] lg:text-[16px] md:text-[16px]">
                AbdulMuizz Ikumapayi
              </h3>
              <h4 className="text-blue-400 text-[10px] font-[400] lg:text-[14px] md:text-[14px]">
                Backend Track Lead
              </h4>
              <div className="mt-4 flex flex-row gap-4">
                <img alt="" src={tw} className="w-2/4 h-2/4" />
                <img alt="" src={ln} className="w-2/4 h-2/4" />
                <img alt="" src={fb} className="w-2/4 h-2/4" />
              </div>
            </div>

            <div className="flex flex-col items-center lg:mt-0 mt-12">
              <img alt="" src={two} className="lg:w-40 lg:h-40 w-3/4" />
              <h3 className="text-[12px] font-[500] lg:text-[16px] md:text-[16px]">
                Amogbe Idowu Esther
              </h3>
              <h4 className="text-blue-400 text-[10px] font-[400] lg:text-[14px] md:text-[14px]">
                Sales & Marketing PM Lead
              </h4>
              <div className="mt-4 flex flex-row gap-4">
                <img alt="" src={tw} className="w-2/4 h-2/4" />
                <img alt="" src={ln} className="w-2/4 h-2/4" />
                <img alt="" src={fb} className="w-2/4 h-2/4" />
              </div>
            </div>
          </div>
          <div className="lg:flex lg:flex-row grid grid-cols-2 lg:gap-36 mt-12 gap-2 md:gap-6">
            <div className="flex flex-col items-center">
              <img
                alt=""
                src={seven}
                className="lg:w-40 lg:h-40 w-3/4 md:w-5/6"
              />
              <h3 className="text-[12px] font-[500] lg:text-[16px] md:text-[16px]">
                Emmanuel Job
              </h3>
              <h4 className="text-blue-400 text-[10px] font-[400] lg:text-[14px] md:text-[14px]">
                Design Track Lead
              </h4>
              <div className="mt-4 flex flex-row gap-4">
                <img alt="" src={tw} className="w-2/4 h-2/4" />
                <img alt="" src={ln} className="w-2/4 h-2/4" />
                <img alt="" src={fb} className="w-2/4 h-2/4" />
              </div>
            </div>

            <div className="flex flex-col items-center">
              <img
                alt=""
                src={eight}
                className="lg:w-40 lg:h-40 w-3/4 md:w-5/6"
              />
              <h3 className="text-[12px] font-[500] lg:text-[16px] md:text-[16px]">
                Queenette oluchi
              </h3>
              <h4 className="text-blue-400 text-[10px] font-[400] lg:text-[14px] md:text-[14px]">
                Sales & Marketing Track Lead
              </h4>
              <div className="mt-4 flex flex-row gap-4">
                <img alt="" src={tw} className="w-2/4 h-2/4" />
                <img alt="" src={ln} className="w-2/4 h-2/4" />
                <img alt="" src={fb} className="w-2/4 h-2/4" />
              </div>
            </div>

            <div className="flex flex-col items-center mb-8 ">
              <img
                alt=""
                src={nine}
                className="lg:w-40 lg:h-40 w-3/4 md:w-5/6"
              />
              <h3 className="text-[12px] font-[500] lg:text-[16px] md:text-[16px]">
                hakeem Abdurahmon
              </h3>
              <h4 className="text-blue-400 text-[10px] font-[400] lg:text-[14px] md:text-[14px]">
                Frontend Track Lead
              </h4>
              <div className="mt-4 flex flex-row gap-4">
                <img alt="" src={tw} className="w-2/4 h-2/4" />
                <img alt="" src={ln} className="w-2/4 h-2/4" />
                <img alt="" src={fb} className="w-2/4 h-2/4" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Teams;
