import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import logoFull from "../assets/logoUpdate.svg";
// import ButtonLink from "../ButtonLink";
import ButtonLink from "./ButtonLink";
import uuid from "react-uuid";
import { Dialog, DialogPanel } from "@headlessui/react";
// import logo from "../../assets/logo.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "AboutUs", path: "/aboutus" },
  { name: "Resources", path: "/resources" },
  { name: "Documentation", path: "/documentation" },
];

export default function NavigationBar() {
  const activeStyle = {
    textDecoration: "underline",
    color: "#2E90FA",
    textUnderlineOffset: "0.5em",
  };
  const [navOpen, setNavOpen] = useState(false);
  const toggle = () => {
    setNavOpen(!navOpen);
  };

  return (
    <nav className="flex justify-between items-center bg-gray-50 border-b h-16 md:h-20 px-[1rem] md:px-10 lg:px-24">
      <Link to="/">
        <div className="flex items-center">
          <img
            src={logoFull}
            alt="logo"
            className="h-8 md:h-11 object-contain"
          />
        </div>
      </Link>

      <div className="hidden md:flex lg:gap-10 text-md">
        {navLinks.map((item) => (
          <NavLink
            to={item.path}
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            className="px-[10px] self-center font-medium text-[#101828] "
            key={uuid()}
          >
            {item.name}
          </NavLink>
        ))}
      </div>

      {/* Hamburger */}
      <div className=" block md:hidden" onClick={toggle} aria-hidden="true">
        {navOpen ? <AiOutlineClose size={28} /> : <FiMenu size={28} />}
      </div>

      <Dialog as="div" open={navOpen} onClose={() => setNavOpen(false)}>
        <div className="fixed inset-0 z-50 bg-black/80" />
        <DialogPanel className="fixed bg-gray-50 top-0 z-50 left-0 w-full">
          <div className="flex justify-between py-3 px-[1rem] bg-gray-50">
            <Link to="/">
              <div className="flex items-center">
                <img
                  src={logoFull}
                  alt="logo"
                  className="h-8 md:h-11 object-contain"
                />
              </div>
            </Link>
            <div
              className=" block md:hidden"
              onClick={toggle}
              aria-hidden="true"
            >
              {navOpen ? <AiOutlineClose size={28} /> : <FiMenu size={28} />}
            </div>
          </div>
          <div className="flex flex-col items-center border-b p-2 space-y-10 h-screen bg-[#F9FAFB]">
            {navLinks.map((item) => (
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                to={item.path}
                className="px-[30px] font-medium text-[#101828] text-xl"
                key={uuid()}
              >
                {item.name}
              </NavLink>
            ))}
            <div>
              <ButtonLink title="Try it NOW" path="/dashboard/home" />
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </nav>
  );
}
