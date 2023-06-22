import React from "react";
import Footer from "../components/Footer";
import NavBar from "./HomePage/NavBar";

export default function OurContact() {
  // import { ChevronDownIcon } from '@heroicons/react/20/solid'
  // import { Switch } from '@headlessui/react'

  return (
    <div>
      <div className="">
        {/* Navbar here */}
        <NavBar />
        {/* Main content Start here */}
        <section>
          <div className="grid grid-cols-12">
            {/* Side bar navigation */}

            {/* Main content */}
            <div className="col-span-12  bg-white h-screen  -mt-10 ">
              {/* Mission */}

              <div className="py-2 bg-white text-black">
                <div className="container  mx-auto flex flex-col md:flex-row my-0 md:my-0">
                  <div className="flex flex-col lg:w-2/5 justify-center w-full mt-4 text-green-700">
                    <div className="container md:mt-8">
                      {/*               
                      <img
                        className="object-contain md:object-scale-down w-full p-6"
                        // hidden lg:block
                        src="../assets/EARM_LogoMark.svg"
                        width={400}
                        alt=""
                      /> */}
                      <p className="font-sans text-sm md:text-lg my-2 md:my-4 ">
                        <p className="text-3xl font-bold">Ghana</p>
                        <svg
                          class="inline-block fill-current mr-2"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" />
                        </svg>        
                        Office location: Behind
                        Nima post office- Accra, Opposite Wayooko Buss. Center.
                        Kusuntu lane strt. Hse.no- 4567/145 Nima - Accra.<br/>
                        P.o box AN.12367 Accra-North.
                      </p>
                      <p className="font-sans text-sm md:text-lg my-2 md:my-2">
                        <svg
                          class="inline-block fill-current mr-2"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20 22.621l-3.521-6.795c-.008.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.083-1.026-3.493-6.817-2.106 1.039c-7.202 3.755 4.233 25.982 11.6 22.615.121-.055 2.102-1.029 2.11-1.033z" />
                        </svg>
                        +233257969974
                      </p>{" "}
                      <p className="font-sans  text-sm md:text-lg my-2 md:my-2 text-green-700">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="inline-block fill-current mr-2"
                          height="24"
                          width="24"
                          viewBox="0 0 448 512"
                        >
                          <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                        </svg>
                        +41779934824
                      </p>{" "}
                    </div>
                  </div>

                  <div className="flex flex-col w-full lg:w-2/5 p-8 mt-4 text-green-700 ">
                    <p className="font-sans text-sm md:text-lg my-2 md:my-2 ">
                      <p className="text-3xl font-bold mt-8">Spain</p>
                      <svg
                        class="inline-block fill-current mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" />
                      </svg>
                      Calle Rio sella 43 Bajo Izquierda 33010 Oviedo
                      Asturias Spain.
                    </p>
                    <p className="font-sans text-sm md:text-lg my-2 md:my-4">
                      <svg
                        class="inline-block fill-current mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 22.621l-3.521-6.795c-.008.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.083-1.026-3.493-6.817-2.106 1.039c-7.202 3.755 4.233 25.982 11.6 22.615.121-.055 2.102-1.029 2.11-1.033z" />
                      </svg>
                      +34624490895
                    </p>{" "}
                    <br />
                    <p className=" md:text-md my-2 md:my-4">
                      <a href="mailto:info@earmonline.com">
                        <svg
                          class="inline-block fill-current mr-2"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 12.713l-11.985-9.713h23.971l-11.986 9.713zm-5.425-1.822l-6.575-5.329v12.501l6.575-7.172zm10.85 0l6.575 7.172v-12.501l-6.575 5.329zm-1.557 1.261l-3.868 3.135-3.868-3.135-8.11 8.848h23.956l-8.11-8.848z" />
                        </svg>{" "}
                        info@earmonline.com{" "}
                      </a>
                      {/* info@earmonline.com */}
                    </p>
                    <p className="font-sans text-sm md:text-lg my-2 md:my-4">
                      We are here to serve you and grow your business.
                    </p>
                  </div>
                </div>
              </div>
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
