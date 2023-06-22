import React from "react";
// import { useNavigate } from 'react-router-dom';
import Navbar from "../../../components/NavBar";
import TopNav from "../../TopNav";
import PageHeader from "../../../components/PageHeader";
import { FaUserTie } from "react-icons/fa";
import ImageList from "./ImageList";

export default function Images() {
  return (

       <section>
        <div className="grid grid-cols-12">
          {/* Header */}
          <div className="fixed w-full flex items-center justify-between h-14 text-white z-10 ">
            <div className="fixed w-full flex items-center justify-between h-14 text-white z-10 ">
              <TopNav />
            </div>
          </div>
          {/* ./Header */}

          {/* Side bar navigation */}
          <div className="col-span-2 bg-black h-screen pl-2 mt-10">
            <Navbar />
          </div>

          {/* Main content */}
          <div className="col-span-10  bg-gray-200 h-screen pl-2 mt-10">
            <div className=" mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-7xl mt-10">
              <PageHeader
                title="IMAGES MANAGEMENT"
                icon={
                  <FaUserTie
                    fontSize="large"
                    size={10}
                    className="text-black"
                  />
                }
              />
              <ImageList/>
            </div>
          </div>
        </div>
      </section>

  )
}
