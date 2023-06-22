import React from "react";
import Navbar from "./NavBar";

import Footer from "../../components/Footer";
import ImageSlider from "../../components/ImageSlider";

export default function Home() {
  return (
    <div className="">
      {/* Navbar here */}
      <Navbar />

      {/* Main content Start here */}
      <section>
        <div className="grid grid-cols-12">
          {/* Main content */}
          <div className="col-span-12  mx-auto mt-0 p-4 overflow-auto items-center h-screen ">
            {/* Mission */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
              <div className="w-full h-screen">
                <img
                  className="object-contain md:object-scale-down w-full p-6"
                  // hidden lg:block
                  src="../assets/EARM_LogoMark.svg"
                  width={500}
                  alt=""
                />
                <p className="text-2xl text-green-700 uppercase font-extralight  text-center">
                  Eagle assets & Resource Management
                </p>
                <p
                  className="text-6xl m-4 pr-10 
                justify-center text-green-700 text-center font-extrabold"
                >
                  We Manage Your Assets & Grow Your Investments
                </p>
                <p
                  className="text-2xl text-center justify-items-center
                 text-green-700 pt-0 font-light md:text-xl m-4"
                >
                  Instead of trying to track your investments across various
                  institutions, each with their own dealing processes, paperwork
                  and charging structures, you and your adviser can manage them
                  all efficiently, securely and cost-effectively with us.{" "}
                </p>
              </div>
              <div className="  w-full bg-white my-10 rounded-sm">
                <ImageSlider />
              </div>
            </div>
          </div>
        </div>
      </section>
     

      <Footer />
    </div>
  );
}
