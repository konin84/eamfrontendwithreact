import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import NavBar from "./HomePage/NavBar";
import { IMG_URL } from "../utils/config";

import * as earmService from "../services/earmService";
import Popup from "../components/Modals/Popup";
import ServiceDetails from "./Services/ServiceDetails";

export default function OurServices() {
  const [record, setRecord] = useState([]);
  const [openPopup, setOpenPopup] = useState(false);
  const [recordForEdit, setRecordForEdit] = useState(null);

  const allServices = () => {
    earmService.ListServices().then((res) => {
      console.log("ALL SERVICES", res.data);
      setRecord(res.data);
    });
  };

  useEffect(() => {
    allServices();
  }, []);

  const openInPopup = (s) => {
    setRecordForEdit(s);
    setOpenPopup(true);
  };

  return (
    <div>
      <div className="">
        {/* Navbar here */}
        <NavBar />
        {/* Main content Start here */}
        <section>
          {/* Side bar navigation */}
          <div className="grid grid-cols-12 mt-10">
            {/* Main content */}
            <div className="col-span-12  mx-auto mt-0 p-4 overflow-auto h-screen">
              {/* Mission */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mx-2 my-1">
                {record &&
                  record.map((s) => (
                    <div
                      className="bg-slate-50 p-2 rounded mr-6 text-center"
                      key={s.id}
                    >
                      <div className="max-w-lg mx-auto my-3 bg-white rounded-lg shadow-md p-1">
                        <img
                          className="w-[90%] h-80 rounded-lg mx-auto -my-8 pb-6"
                          src={IMG_URL + s.image}
                          alt={s.image}
                        />
                        <h2 className="text-center text-2xl text-green-700 uppercase font-extrabold mt-3">
                          {s.name}
                        </h2>

                        <div className="mt-5">
                          <p className="text-green-700 font-light mt-2 mr-3 p-4">
                            {s.description.substring(0, 100)} ...
                          </p>
                          <button
                            className="bg-green-700 text-white
                             active:bg-green-700 font-bold uppercase
                              text-sm px-2 py-2  hover:shadow-lg outline-none focus:outline-none mr-1 mb-1  transition-all duration-150 rounded-lg "
                            onClick={() => {
                              openInPopup(s);
                            }}
                          >
                            <span>Read More</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
          <Popup
            title="SERVICE DETAILS"
            openPopup={openPopup}
            setOpenPopup={setOpenPopup}
          >
            <ServiceDetails recordForEdit={recordForEdit} />
          </Popup>
        </section>

        {/* footer */}

        <Footer />
      </div>
    </div>
  );
}
