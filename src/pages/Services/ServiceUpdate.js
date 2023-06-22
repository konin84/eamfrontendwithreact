import React, { useEffect, useState } from "react";
import * as earmService from "../../services/earmService";
import { useNavigate, useParams } from "react-router-dom";
import TopNav from "../TopNav";
import Navbar from "../../components/NavBar";
import PageHeader from "../../components/PageHeader";
import { FaUserTie } from "react-icons/fa";

export default function ServiceUpdate() {
  const navigate = useNavigate();

  const [name] = useState("");
  const [description] = useState();
  const { slug } = useParams();

  const [data, setData] = useState({
    name,
    description,
  });

  console.log("DATA", data.service);
  const loadServiceInfo = () => {
    earmService.getService(slug).then((res) => {
      console.log("SERVICE INFO", res.data.service);
      setData(res.data.service);
    });
  };

  // console.log("DATA", data);

  useEffect(() => {
    loadServiceInfo();
    // console.log("PROFILE ID", slug);
    console.log("SERVICE DETAILS", data);
  }, []);

  const onUpdate = (e) => {
    console.log("ID", slug);
    e.preventDefault();
    earmService.updateService(slug, data).then((res) => {
      console.log("DATA TO BE UPDATED", res.data);
      navigate("/services");
    });
  };

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
        <div className="col-span-10  bg-gray-200 h-screen pl-2 mt-10 overflow-y-scroll ">
          <div
            className=" mx-auto bg-white rounded-xl shadow-md
            md:max-w-7xl mt-10 "
          >
            <PageHeader
              title="UPDATE SERVICE INFO"
              icon={
                <FaUserTie fontSize="small" size={10} className="text-black" />
              }
            />

            <div className="flex items-center justify-center p-4">
              <div className="mx-auto w-full max-w-[850px] bg-white">
                <form onSubmit={onUpdate}>
                  <div className="mb-5">
                    <textarea
                      rows="1"
                      name="name"
                      value={data.name}
                      onChange={(e) =>
                        setData({ ...data, name: e.target.value })
                      }
                      placeholder="Service name"
                      className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    ></textarea>
                  </div>
                  <div className="mb-5">
                    <textarea
                      rows="7"
                      name="description"
                      value={data.description}
                      onChange={(e) =>
                        setData({ ...data, description: e.target.value })
                      }
                      placeholder="Service description"
                      className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    ></textarea>
                  </div>

                  <button className="hover:shadow-form rounded-md bg-[#0c0b15] py-3 px-8 text-center text-base font-semibold text-white outline-none float-right"> 
                    Update
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
