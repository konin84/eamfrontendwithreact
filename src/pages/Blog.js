import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import NavBar from "./HomePage/NavBar";
import * as earmService from "../services/earmService";
import { Link } from "react-router-dom";
import Popup from "../components/Modals/Popup";
import BlogDetails from "./Blog/BlogDetails";

export default function Blog() {
  const [record, setRecord] = useState([]);
  const [recordForEdit, setRecordForEdit] = useState(null);
  const [openPopup, setOpenPopup] = useState(false);

  const allServices = () => {
    earmService.publishedBlogs().then((res) => {
      console.log("ALL BLOGS", res.data);
      setRecord(res.data);
    });
  };

  useEffect(() => {
    allServices();
  }, []);

  const openInPopup = (b) => {
    setRecordForEdit(b);
    setOpenPopup(true);
  };

  return (
    <div>
      <div className="">
        {/* Navbar here */}
        <NavBar />
        {/* Main content Start here */}
        <section>
          <div className="grid grid-cols-12">
            {/* Main content */}
            <div className="col-span-12  mx-auto mt-0 p-4 overflow-auto items-center h-screen">
              {/* Mission */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mx-2 my-1">
                {record &&
                  record.map((b) => (
                    <div
                      className="bg-slate-50 p-2 rounded mr-6 text-center"
                      key={b.id}
                    >
                      <div className="max-w-lg mx-auto my-1 bg-white rounded-lg shadow-md p-5">
                        <h2 className="text-center text-2xl font-semibold mt-3">
                          {b.title}
                        </h2>

                        <div className="mt-5">
                          <p className="text-gray-600 m-4 mr-3">
                            {b.content.substring(0, 180)}...
                          </p>
                          <button
                            className="bg-green-700 text-white
                             active:bg-green-700 font-bold uppercase
                              text-sm px-2 py-2  hover:shadow-lg outline-none focus:outline-none mr-1 mb-1  transition-all duration-150 rounded-lg "
                            onClick={() => {
                              openInPopup(b);
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
            title="BLOG DETAILS"
            openPopup={openPopup}
            setOpenPopup={setOpenPopup}
          >
            <BlogDetails recordForEdit={recordForEdit} />
          </Popup>
        </section>

        {/* Main content Ends here */}

        {/* footer */}

        <Footer />
      </div>
    </div>
  );
}
