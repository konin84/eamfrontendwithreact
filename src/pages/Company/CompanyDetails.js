import React, { useState, useEffect } from "react";
import * as earmService from "../../services/earmService";

import { Link } from "react-router-dom";
import TopNav from "../TopNav";
import Navbar from "../../components/NavBar";
import PageHeader from "../../components/PageHeader";
import { FaUserTie } from "react-icons/fa";

const IMG_URL = "http://localhost:8000/";

export default function CompanyDetails() {
  const [record, setRecord] = useState([]);

  const CompanyInfo = () => {
    earmService.companyInfo().then((res) => {
      console.log("COMPANY DETAIL", res.data);
      setRecord(res.data);
    });
  };

  useEffect(() => {
    CompanyInfo();
  }, []);

  return (
    <section>
      <div className="grid grid-cols-12">
        {/* Table start below */}
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

        <div className="col-span-10  bg-gray-200 h-screen pl-10 mt-10 overflow-y-scroll ">
          <div
            className="mx-auto bg-white rounded-xl shadow-md
            md:max-w-7xl mt-10"
          >
            <PageHeader
              title="COMPANY PROFILE "
              icon={
                <FaUserTie fontSize="small" size={10} className="text-black" />
              }
            />
            <div>
              <div className="containter mx-auto">
                <div className="p-1">
                  {record &&
                    record.map((c) => (
                      <div className="p-8 bg-white shadow mt-24">
                        {" "}
                        <div className="grid grid-cols-1 md:grid-cols-3">
                          {" "}
                          <div className="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">
                            {" "}
                            <div>
                              {" "}
                              <p className="font-bold text-gray-700 text-xl"></p>{" "}
                              <p className="text-gray-400"></p>{" "}
                            </div>{" "}
                          </div>{" "}
                          <div className="relative">
                            {" "}
                            <div className="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center">
                              <img
                                className="w-44 h-44 mb-3 rounded-full shadow-lg"
                                src={IMG_URL + c.logo}
                                alt={""}
                              />
                            </div>{" "}
                          </div>{" "}
                          <div className="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center mb-12"></div>
                        </div>{" "}
                        <div className="mt-20 text-center border-b pb-12">
                          {" "}
                          <h1 className="text-4xl font-medium text-gray-700">
                            {c.name}
                            <span className="font-light text-gray-500"></span>
                          </h1>{" "}
                          <p className="font-light text-gray-600 mt-3">
                            {c.address}
                          </p>{" "}
                          <p className="mt-8 text-gray-500">{c.email}</p>{" "}
                          <p className="mt-2 text-gray-500">{c.telephone}</p>
                        </div>{" "}
                        <div className="mt-12 flex flex-col justify-center">
                          {" "}
                          <p className="text-gray-600 text-center font-light lg:px-16">
                            {c.vision}
                          </p>{" "}
                          <hr></hr>
                          <p className="text-gray-600 text-center font-light lg:px-16">
                            {c.mission}
                          </p>{" "}
                          <hr></hr>
                          <p className="text-gray-600 text-center font-light lg:px-16">
                            {c.corevalue}
                          </p>{" "}
                          <hr></hr>
                        </div>
                        <div className="p-4"> 
                          <Link
                            to={`/company/update/${c.id}`}
                            // onClick={onUpdate(profileID)}
                            className="inline-flex justify-center  py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-black hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 float-right p-2"
                          >
                            Update other Information
                          </Link>
                          <Link
                            to={`/company/logo/update/${c.id}`}
                            // onClick={onUpdate(profileID)}
                            className="inline-flex justify-center  py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-black hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 float-left p-2"
                          >
                            Update Logo
                          </Link>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>

          <br />

          <hr />
        </div>
      </div>
    </section>
  );
}
