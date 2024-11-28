import React from "react";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Not_Found from "../assets/404_not_found.jpg";

export default function NotFound() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <NavigationBar />
      <main className="flex flex-col items-center justify-center gap-6 py-12 px-6">
        <div className="w-full max-w-[400px]">
          <img src={Not_Found} alt="404 Error not found" className="w-full" />
          <p className="text-2xl text-center">
            The resource you are trying to access could not be found.
          </p>
        </div>
        <Link
          to="/"
          className="bg-blue-500 text-2xl text-white hover:bg-blue-600 py-2 px-6 rounded-lg"
        >
          Go Home
        </Link>
      </main>
      <Footer />
    </div>
  );
}
