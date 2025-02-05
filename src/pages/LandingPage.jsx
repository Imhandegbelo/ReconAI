import React from "react";
// import Faq from 'react-faq-component';
import { BsPlusCircle } from "react-icons/bs";
import { CiCircleMinus } from "react-icons/ci";
// import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
// import { requirePropFactory } from '@mui/material';
import { Link } from "react-router-dom";
import uploadIcon from "../assets/images/landingPage/upload-icon-new.png";
import howItWorks from "../assets/images/landingPage/howitworks.png";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
import Button from "../components/Button";
import getInTouch from "../assets/images/landingPage/landingpage__intouch.png";
import userImage from "../assets/images/landingPage/what_our_users_are_saying.png";
import companyLogo from "../assets/images/landingPage/landingpage_company_img.png";
import headerImage from "../assets/images/landingPage/recon-header-img.png";
import cuttingImage from "../assets/images/landingPage/landingpage__cutting.png";
import mobileDashboard from "../assets/images/landingPage/recon-mobile.png";
import mobileCompany from "../assets/images/landingPage/mobile_company.png";
import iphoneScreen from "../assets/images/landingPage/landingpage__iphone.png";
import {
  trustedByFeaturesData,
  importantFeaturesData,
  whatAccountPalDoesData,
  pickPlanData,
} from "../data/LandingData";
import FaqComponent from "../components/FaqComponent";
import ButtonLink from "../components/ButtonLink";

const data = {
  rows: [
    {
      id: 1,
      title: "What is Account Pal and how does it work?",
      content: `Account Pal is a web application that compares third-party and independent financial statements and records with internal financial records and ledgers. `,
    },
    {
      id: 2,
      title:
        "Why should I make use of Account Pal to match my account statement to sales?",
      content: `Account Pal for SME'S and SMBs helps save time that would otherwise be spent manually matching accounts statements to sales. 
With this Web application, you can be sure to eliminate human errors and fraudulent risks associated with account reconciliation. 
`,
    },
    {
      id: 3,
      title: "How do I receive an overview of my report?",
      content: `Account Pal allows users to import sales and bank statements. These documents will then be processed and you'll receive a file with the analysis and reconciliation.`,
    },
    {
      id: 4,
      title: "What are account statements?",
      content: `It is a periodic summary of account activity within a defined period. `,
    },
    {
      id: 5,
      title: "Is Account Pal free for first-time users?",
      content: `Account Pal has a free 1-month trial period. When this expires, you can continue using the site for a small subscription fee.`,
    },
    {
      id: 6,
      title:
        "Is there a cap on the maximum number of transactions I can do weekly or monthly?",
      content: `There is no cap on the number of transactions one can carry out using Account Pal.`,
    },
  ],
};

const styles = {
  bgColor: "#F9FAFB",
  titleTextColor: "#101828",
  titleTextSize: "36px",
  rowTitleColor: "#101828",
  rowTitleTextSize: "18px",
  rowContentColor: "#667085",
  rowContentTextSize: "16px",
  arrowColor: "#1570EF",
};

const config = {
  animate: true,
  arrowIcon: "V",
  openOnload: 0,
  expandIcon: <BsPlusCircle />,
  collapseIcon: <CiCircleMinus />,
};

export default function LandingPage() {
  return (
    <div className="font-lexend bg-[#F9FAFB] max-w-[1440px] mx-auto">
      <NavigationBar />
      <div>
        <div className="bg-white flex flex-col md:flex-row justify-between w-full py-[3em] px-[1rem] lg:px-24 mx-auto">
          <div className="w-full md:w-[50%]/ md:mt-[3em] lg:mt-[2em] lg:w-[45%] space-y-[1em] leading-6">
            <h1 className="text-[#101828] text-3xl md:text-4xl lg:text-6xl font-semibold  ">
              Account
              <span className="text-[#1570EF]"> Reconciliations</span> Made Easy
            </h1>
            <p className="text-md font-light md:text-sm lg:text-lg">
              Run your business effectively with a simplified solution to
              reconcile your accounts & sales on a day-to-day basis
            </p>
            {/* <Button title="Try it NOW" path="/dashboard/home" /> */}

            {/* CTA button  */}
            <div className="md:hidden w-full">
              <Link
                to="/dashboard/home"
                className="bg-[#2E90FA] text-white rounded flex justify-center align-center w-[90%] mx-auto py-[0.5em] mt-[3em]"
              >
                Upload Account Statement
              </Link>
            </div>
          </div>

          {/* upload files here only in desktop */}
          <div className="hidden md:flex items-center justify-center w-[40%] lg:w-[35%] bg-[#F9FAFB] rounded-2xl flex-col shadow-xl">
            <img
              className="w-[60%] h-[60%] object-contain"
              src={uploadIcon}
              alt="uploadFile"
            />
            <div className="w-full lg:w-[70%] mx-auto md:mt-[1em] ">
              <Link
                to="/dashboard/home"
                className=" bg-[#2E90FA] text-white text-xs py-2 w-[70%] mx-auto rounded border-[1px] border-[#2E90FA] flex justify-center align-center "
              >
                Upload Account Statement
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* how it works  */}
      <div className="bg-[#F9FAFB] flex flex-col gap-y-[24px] md:gap-y-[30px] md:mt-[3em] md:z-50 md:relative">
        <div className="bg-[#F9FAFB]">
          <div className="pt-[30px] flex flex-col gap-y-[1px] items-center px-[44px] md:px-0 ">
            <h2 className="text-[#101828] font-semibold text-2xl md:text-3xl lg:text-[36px] text-center">
              How it works
            </h2>
          </div>

          <div className="flex justify-center items-center px-[1rem] my-[2em] md:my-[4em]">
            <img src={howItWorks} alt="how it works" />
          </div>
        </div>
      </div>

      <div className="bg-[#F9FAFB]">
        <div className="pt-10 text-center">
          <h2 className="text-[#101828] font-semibold text-2xl md:text-3xl lg:text-[36px] text-center">
            Pick Your Plan
          </h2>
          <p className="text-gray-500">
            Choose a plan that suits your Business
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-[64px] py-[60px] items-center justify-center">
          {pickPlanData.map((item) => (
            <div
              className="flex flex-col border border-[#D0D5DD] p-10 items-center text-center "
              key={item.id}
            >
              <div className="flex flex-col items-center">
                <h2 className="text-[#101828] font-semibold text-lg md:text-2xl">
                  {item.title}
                </h2>
                <div className="font-normal text-[#858585] flex flex-col items-center gap-y-4 md:pt-[30px]">
                  <div className="flex gap-2 items-center ">
                    <p>{item.icon1}</p>
                    <p>{item.content1}</p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <p>{item.icon2}</p>
                    <p>{item.content2}</p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <p>{item.icon3}</p>
                    <p>{item.content3}</p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <p>{item.icon4}</p>
                    <p>{item.content4}</p>
                  </div>
                  <button className="text-[#101828] font-semibold text-sm border border-[#858585] hover:bg-black hover:text-white px-5 py-3 rounded-md mt-2 md:mt-4">
                    {item.button_content}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#EFF8FF] flex flex-col items-center py-10 md:py-16 px-[44px] xl:px-0">
        <h2 className="text-[#101828] font-semibold text-2xl md:text-3xl lg:text-[36px] text-center">
          Cutting-edge features for advanced analytics
        </h2>

        <p className="font-normal text-[#667085] text-center text-sm md:text-lg pt-1 pb-10 w-full md:w-[500px] lg:w-[700px]">
          Powerful, self-serve product and growth analytics to help you convert,
          match sales. Trusted by over 4,000 startups.
        </p>

        <img
          src={cuttingImage}
          alt="Image showing reconcileAI Dashboard"
          // className="hidden md:flex"
        />
        {/* <img
          src={iphoneScreen}
          alt="Dashboard"
          className="hidden"
        /> */}
      </div>

      <div className=" bg-[#F9FAFB] md:mt-0  p-[1em] md:p-[3em] text-left md:text-center py-6 md:py-12 lg:py-16">
        <h2 className="text-[#101828] font-semibold text-2xl md:text-3xl lg:text-[36px] text-center">
          Why Choose reconcile.<span className="text-[#2E90FA]">AI</span>?
        </h2>

        <div className="flex flex-col w-full md:flex-row justify-evenly md:text-center md:py-4">
          {whatAccountPalDoesData.map((item) => (
            <div
              className=" w-full md:w-[30%] lg:w-[20%] mt-[2em]  "
              key={item.id}
            >
              <div className="md:text-center space-y-[1em]">
                <h3 className="font-semibold text-[#101828] text-lg lg:text-2xl ">
                  {item.title}
                </h3>
                <p className="text-[#667085] flex justify-center font-normal text-md  md:text-sm md:text-center sm:text-xs">
                  {item.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#F9FAFB] flex flex-col items-center">
        <h2 className="text-[#101828] font-semibold text-2xl md:text-3xl lg:text-[36px] text-center py-12">
          What our users are saying
        </h2>
        <div className="w-[276px] md:w-[540px] md:h-[206px] rounded-2xl border border-[#98A2B3] flex flex-col items-center gap-[6px]">
          <p className="text-[#667085] text-[16px] font-medium px-[8px] pt-[18px] text-center">
            As an account that struggles to balance account statement
            accurately, account Pal has made life better for me. Now I can sum
            all transaction easily, spot duplicate transactions reconcile
            transactions easily.
          </p>
          <p className="font-semibold text-[16px] text-[#101828] tracking-tighter pt-[15px]">
            Uche Donald
          </p>
          <span className="font-normal text-[14px] text-[#667085]">-Zuri</span>
        </div>
        <img
          src={userImage}
          alt="What our users are saying"
          className="md:pt-[15px] md:px-[54px] xl:px-0 xl:py-[84px]"
        />
      </div>

      <div className="bg-[#F9FAFB] md:py-[3em] lg:max-w-full space-y-[5em]">
        <div className="lg:px-[50px]  px-[14px] ">
          <div className="leading-[20px] my-[2em]">
            <h2 className="text-[#101828] font-semibold text-2xl md:text-3xl lg:text-[36px] text-center">
              Frequently Asked Questions
            </h2>
            <p className="text-[#667085] text-center py-4">
              Everything you need to know about the product and billing
            </p>
          </div>
          <div className="md:w-[80%] text-xs md:text-md leading-[200%] mx-auto">
            <FaqComponent />
          </div>
        </div>

        <div className="bg-[#F2F4F7] md:rounded-md flex flex-col items-center w-full md:w-[80%] lg:w-[60%] mx-auto py-[3em] md:py-[2em] ">
          <img
            src={getInTouch}
            alt="Get in touch"
            className="max-w-[130px] h-[63px] object-contain"
          />
          <p className="text-[#101828] text-[16px] md:text-[18px] font-medium">
            Still have questions?
          </p>
          <p className="font-normal text-[#667085] text-[10px] md:text-[18px] pb-[24px] text-center px-[44px] md:px-0">
            Can&apos;t find the answer you&apos;re looking for?
          </p>
          <Button path="/contact" title="Get in touch" />
        </div>
      </div>
      <div className="text-center bg-[#F2F4F7] py-[3em] md:py-[3em]  ">
        <p className="font-semibold text-xl md:text-3xl ">
          Start your free trial
        </p>
        <p className="text-slate-700">
          Join over 4,000 startups already growing with reconcileAI
        </p>
        <div className="flex space-x-12 justify-center mt-9 ">
          <ButtonLink path="" isPrimary={false} title="Learn More" />
          <ButtonLink path="" title="Get in touch" />
        </div>
      </div>
      <Footer />
    </div>
  );
}
