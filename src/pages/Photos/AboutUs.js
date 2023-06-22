import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../HomePage/NavBar";

import About from "../HomePage/About";
import Why from "../HomePage/Why";

export default function AboutUs() {
  return (
    <div>
      <div className="">
        {/* Navbar here */}
        <Navbar />
        {/* Main content Start here */}
        <section>
          <div className="grid grid-cols-12">
            {/* Side bar navigation hidden lg:block md:text-xs mt-0 */}

            {/* Main content */}
            <div className="col-span-12  bg-white h-screen  mt-0">
              {/* Mission */}
              <section className=" container mx-auto h-80 max-h-full flex items-center justify-center m-0 pt-4 pb-0">
                <Why />
              </section>

              <section className=" container mx-auto h-70 max-h-full flex items-center justify-center -m-10 p-4">
                <About />
              </section>
            </div>
          </div>
        </section>

        {/* Main content Ends here */}

        {/* footer */}

        <Footer />
      </div>
    </div>
  );
}
