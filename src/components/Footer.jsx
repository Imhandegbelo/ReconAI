import React from "react";
import { BsTwitter, BsFacebook, BsInstagram } from "react-icons/bs";
import { Link } from "react-router-dom";
import uuid from "react-uuid";
import logoUpdate from "../assets/logoUpdate.svg";

const aboutUsData = [
  {
    name: "Our Mission",
    path: "",
  },
  {
    name: "Our Team",
    path: "/teams",
  },
  {
    name: "Get in touch ",
    path: "/contact",
  },
];
const resourcesData = [
  {
    name: "Support",
    path: "/help",
  },
  {
    name: "Privacy",
    path: "/privacy",
  },
  {
    name: "Blog",
    path: "/blogs",
  },
];

const Footer = () => (
  <footer className="bg-[#D1E9FF] py-9 md:py-16">
    <div className="flex flex-col-reverse justify-center items-start lg:items-start md:flex-row md:justify-between w-10/12 mx-auto gap-6">
      <div className="mx-auto flex flex-col justify-center lg:max-w-[20%] align-center lg:justify-start gap-[0.5rem] lg:gap-6">
        <figure className="flex justify-start items-center flex-col lg:items-start">
          <img className="" src={logoUpdate} alt="Company logo" />
        </figure>

        <div className="hidden text-[#98A2B3] lg:flex justify-center lg:justify-start items-center gap-6 mt-6">
          <Link to="" className="hover:scale-125">
            <BsTwitter size={24} />
          </Link>
          <Link to="" className="hover:scale-125">
            <BsFacebook size={24} />
          </Link>
          <Link to="" className="hover:scale-125">
            <BsInstagram size={24} />
          </Link>
        </div>

        <div className="text-[#98A2B3] flex justify-center lg:justify-start items-center gap-6 mt-6 lg:hidden">
          <Link to="" className="hover:scale-125">
            <BsTwitter size={20} />
          </Link>
          <Link to="" className="hover:scale-125">
            <BsFacebook size={20} />
          </Link>
          <Link to="" className="hover:scale-125">
            <BsInstagram size={20} />
          </Link>
        </div>
      </div>

      {/* About us Tab */}
      <div className="w-full md:w-3/12 space-y-5">
        <h3 className="font-medium text-[#344054] text-xl text-center md:text-left">
          About Us
        </h3>

        <div className="grid gap-4 md:gap-6 text-center md:text-left">
          {aboutUsData.map((item) => (
            <Link
              key={uuid()}
              to={item.path}
              className="text-[#344054] text-lg md:text-xl text-center md:text-left"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Resources Tab */}
      <div className="w-full md:w-3/12 space-y-6">
        <h3 className="font-medium text-[#344054] text-xl text-center md:text-left">
          Resources
        </h3>

        <div className="grid gap-4 md:gap-6 text-center md:text-left">
          {resourcesData.map((item) => (
            <Link
              key={uuid()}
              to={item.path}
              className="text-[#344054] text-lg md:text-xl text-center md:text-left"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
