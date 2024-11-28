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
import { Link } from "react-router-dom";

function Teams() {
  const teams = [
    {
      name: "Oluwasegun Akinshola",
      avatar: one,
      position: "Chief Drill Master",
    },
    {
      name: "Dorathy Nkatha",
      avatar: two,
      position: "Assist. Drill Master",
    },
    {
      name: "Maureen Ehiosun",
      avatar: three,
      position: "Design PM Lead",
    },
    {
      name: "Olatunji David",
      avatar: four,
      position: "Frontend PM Lead",
    },
    {
      name: "Abdul Ikumapayi",
      avatar: five,
      position: "Backend Track Lead",
    },
    {
      name: "Esther Idowu",
      avatar: two,
      position: "Sales & Marketing Lead",
    },
    {
      name: "Emmanuel Job",
      avatar: seven,
      position: "Design Track Lead",
    },
    {
      name: "Qeenethe Oluchi",
      avatar: eight,
      position: "Sales & Marketing Lead",
    },
    {
      name: "Hakeem Abdulrahmon",
      avatar: nine,
      position: "Frontend Lead",
    },
  ];

  return (
    <div className="font-lexend max-w-[1440px] mx-auto">
      <ScrollToTop />
      <Navbar />
      <div className="px-9 md:px-14 lg:px-20 py-8">
        <div className="flex flex-col gap-4 md:flex-row justify-between">
          <div className="flex flex-col gap-4 justify-center">
            <button
              type="button"
              className="hidden rounded-lg w-1/2 lg:w-1/3 text-white bg-blue-500 text-lg px-4 py-2"
            >
              Meet the team
            </button>
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold max-w-[640px] text-center md:text-left">
              Meet our leadership team, great personalities who work hard to
              empower our teams.
            </h1>
          </div>
          <div>
            <img
              src={ourteam}
              alt="teamwork"
              className="hidden md:block"
            />
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-10 items-center">
          <div className="flex flex-row gap-2 lg:gap-36">
            {teams.splice(0,2).map((team) => (
              <div className=" flex flex-col gap-1 items-center">
                <img alt="" src={team.avatar} className="lg:w-40 lg:h-40 w-3/4" />
                <h3 className="text-xs font-medium md:text-base">
                  {team.name}
                </h3>
                <h4 className="text-blue-400 text-[10px] md:text-sm">
                  {team.position}
                </h4>
                <div className="mt-4 flex flex-row gap-4">
                  <Link to="#" className="hover:scale-125">
                    <img alt="twitter logo" src={tw} className="w-6" />
                  </Link>
                  <Link to="#" className="hover:scale-125">
                    <img alt="linkedin logo" src={ln} className="w-6" />
                  </Link>
                  <Link to="#" className="hover:scale-125">
                    <img alt="facebook logo" src={fb} className="w-6" />
                  </Link>
                </div>
              </div>
            ))}

          </div>

          <div className="grid grid-cols-2 lg:grid-flow-col gap-4 lg:gap-20">
            {teams.splice(0,4).map((person)=>(
              <div className="flex flex-col gap-1 items-center">
              <img alt="" src={person.avatar} className="lg:w-40 lg:h-40 w-3/4" />
              <h3 className="text-xs font-medium md:text-base">
                {person.name}
              </h3>
              <h4 className="text-blue-400 text-[10px] md:text-sm">
                {person.position}
              </h4>
              <div className="mt-4 flex flex-row gap-4">
                <Link to="#" className="hover:scale-125">
                  <img alt="twitter logo" src={tw} className="w-6" />
                </Link>
                <Link to="#" className="hover:scale-125">
                  <img alt="linkedin logo" src={ln} className="w-6" />
                </Link>
                <Link to="#" className="hover:scale-125">
                  <img alt="facebook logo" src={fb} className="w-6" />
                </Link>
              </div>
            </div>
            ))}
          </div>

          <div className="grid grid-cols-2 lg:grid-flow-col items-center gap-4 lg:gap-20">
            {teams.map((person)=>(
              <div className="flex flex-col gap-1 items-center">
              <img alt="" src={person.avatar} className="lg:w-40 lg:h-40 w-3/4" />
              <h3 className="text-xs font-medium md:text-base">
                {person.name}
              </h3>
              <h4 className="text-blue-400 text-[10px] md:text-sm">
                {person.position}
              </h4>
              <div className="mt-4 flex flex-row gap-4">
                <Link to="#" className="hover:scale-125">
                  <img alt="twitter logo" src={tw} className="w-6" />
                </Link>
                <Link to="#" className="hover:scale-125">
                  <img alt="linkedin logo" src={ln} className="w-6" />
                </Link>
                <Link to="#" className="hover:scale-125">
                  <img alt="facebook logo" src={fb} className="w-6" />
                </Link>
              </div>
            </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Teams;
