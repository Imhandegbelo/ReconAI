// import React from 'react';
import Footer from "../components/Footer";
import heroImg from "../assets/images/about-us/heroImg.png";
import vision from "../assets/images/about-us/vision.png";
import blueSquare from "../assets/images/about-us/blue-square.png";
import blueSquaremob from "../assets/images/about-us/bluesquaremob.png";
import mission from "../assets/images/about-us/mission.png";
import valueImg from "../assets/images/about-us/values.png";
import NavigationBar from "../components/NavigationBar";
import ScrollToTop from "../components/ScrollToTop";

const AboutUs = () => (
  <div className="mx-auto max-w-[1440px]">
    <ScrollToTop />
    <NavigationBar />
    <section className="lg:py-24 lg:px-24 p-8 pb-16 bg-[#F2F4F7] z-0">
      <div className="flex items-center flex-col justify-between md:flex-row gap-[5%]">
        <div className="w-full">
          <h1 className="lg:mt-8 font-semibold text-center lg:text-left md:font-medium text-2xl md:text-4xl md:text-center md:mb-5">
            Who we are?
          </h1>
          <p className="text-sm font-normal text-left lg:text-left lg:mb-[38px] mb-4 mt-4 md:text-left md:mb-0 md:h-[180px] md:w-[53/5px] md:text-xl">
            We are a team of professionals whose aim is to give you and amazing
            user experience. We are not only professionals but a family where
            everybody works together with each other&apos;s interest of growth
            and succeeding at heart.
          </p>
        </div>

        <div className="w-full">
          <img
            src={heroImg}
            alt="Hands typing on a laptop"
            className="w-full w-auto"
          />
        </div>
      </div>
    </section>

    <section className="lg:py-24 lg:px-24 p-8 pb-16 bg-white z-0">
      <div className="flex md:flex-row gap-[5%] items-center flex-col justify-between">
        <div className="w-full relative z-10 lg:mb-8">
          <h3 className="lg:mt-8 font-semibold text-center lg:text-left md:font-medium text-2xl md:text-4xl md:text-center md:mb-5">
            Our Vision
          </h3>

          <p className="bg-[#F9FAFB] mb-4 md:mt-1/4 text-center text-xs h-[82px] px-[31px] py-[18px] lg:text-left md:text-center md:text-xl md:h-[180px] md:px-[52px] md:py-[58px]">
            To make easy sales and accounting reconciliation across all business
            types.
          </p>
        </div>

        <div className="w-full m-4 lg:m-0">
          <img
            className="w-full"
            src={vision}
            alt="People holding hands in agreement"
          />
        </div>
      </div>
    </section>

    <section className="lg:px-24 lg:pb-20 bg-[#EFF8FF] px-11 pt-12 pb-8 ">
      <div className="flex flex-col gap-[5%] md:justify-between items-center md:flex-row-reverse">
        <div className="w-full lg:mb-8">
          <h3 className="lg:mt-8 font-semibold text-center lg:text-left md:font-medium text-2xl md:text-4xl md:text-center md:mb-5">
            Our Mission
          </h3>

          <p className="bg-[#F9FAFB] mb-4 text-center text-xs py-6 px-[31px] lg:text-left md:text-xl">
            To continually create ease in business accounting processes through
            the use of technology enabled solutions and making them easily
            accessible for businesses.
          </p>
        </div>

        <div className="w-full m-4 lg:m-0">
          <img
            className="w-full"
            src={mission}
            alt="Person working and writing on a notebook"
          />
        </div>
      </div>
    </section>

    <section className=" lg:px-24 lg:pb-20 lg:pt-10 px-11 pb-28 pt-12">
      <div className="flex md:flex-row md:gap-[5%] items-center flex-col justify-between">
        <div className="w-full">
          <h3 className="lg:mt-8 font-semibold text-center lg:text-left md:font-medium text-2xl md:text-4xl md:text-center md:mb-5">
            Our Core Values
          </h3>

          <div className="bg-[#F9FAFB] px-6 space-y-10 flex flex-col py-6 md:px-9">
            <ul className="list-disc text-xs md:text-xl flex justify-between">
              <li className="font-medium md:font-normal lg:mb-4">
                Accountability
              </li>
              <li className="font-medium md:font-normal lg:mb-4">Integrity</li>
            </ul>

            <ul className="list-disc text-xs md:text-xl flex justify-between">
              <li className="font-medium md:font-normal lg:mb-4">Innovation</li>
              <li className="font-medium md:font-normal lg:mb-4">
                Reliability
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full m-4 lg:m-0">
          <img
            className=""
            src={valueImg}
            alt="A hand building up small bricks"
          />
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default AboutUs;
