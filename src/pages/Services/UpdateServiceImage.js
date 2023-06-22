import React, { useEffect, useState } from "react";
import * as earmService from "../../services/earmService";
import { useNavigate, useParams } from "react-router-dom";
import TopNav from "../TopNav";
import Navbar from "../../components/NavBar";
import PageHeader from "../../components/PageHeader";
import { FaUserTie } from "react-icons/fa";

export default function UpdateServiceImage() {
  const navigate = useNavigate();

  const [name] = useState("");
  const [image] = useState();
  const { slug } = useParams();

  const [data, setData] = useState({
    name,
    image,
  });

  console.log("DATA", data.service);
  const loadServiceInfo = () => {
    earmService.getService(slug).then((res) => {
      console.log("SERVICE INFO", res.data.service);
      setData(res.data.service);
    });
  };

  useEffect(() => {
    loadServiceInfo();
  }, []);

  const onUpdate = (e) => {
    e.preventDefault();
    earmService.updateServiceImage(slug, data).then((res) => {
      navigate("/services");
    });
  };

  return (
    <section>
      <div className="grid grid-cols-12">
        {/* Header */}
        <div className="fixed w-full flex items-center justify-between h-14 text-white z-10 ">
          <div className="fixed w-full flex items-center justify-between h-14 text-white z-10 ">
            <TopNav />
          </div>
        </div>
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
              title="SERVICE IMAGE UPDATE"
              icon={
                <FaUserTie fontSize="small" size={10} className="text-black" />
              }
            />

            <div className="flex items-center justify-center p-4">
              {/* Learn More: https://formbold.com */}
              <div className="mx-auto w-full max-w-[950px] bg-white">
                <form onSubmit={onUpdate}>
                  <div className="mb-5 pt-3">
                    <label className="mb-5 block text-base font-semibold text-green-700 sm:text-xl">
                      Service Name
                    </label>
                    <div className="-mx-3 flex flex-wrap">
                      <div className="w-full px-3 sm:w-1/2">
                        <div className="mb-5">
                          <input
                            disabled
                            type="text"
                            name="name"
                            value={data.name}
                            onChange={(e) =>
                              setData({ ...data, name: e.target.value })
                            }
                            // placeholder="Company Name"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                          />
                        </div>
                      </div>

                      <div className="w-full px-3 sm:w-1/2">
                        <div className="mb-5">
                          <input
                            type="file"
                            name="logo"
                            onChange={(e) =>
                              setData({ ...data, image: e.target.files[0] })
                            }
                            accept="image/*"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <button className="hover:shadow-form rounded-md bg-[#0c0b15] py-3 px-8 text-center text-base font-semibold text-white outline-none float-right">
                      Update image
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
