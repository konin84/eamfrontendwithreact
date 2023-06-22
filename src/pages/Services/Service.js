import React, { useEffect, useState } from "react";
import * as earmService from "../../services/earmService";

import { Link, useParams } from "react-router-dom";
import TopNav from "../TopNav";
import Navbar from "../../components/NavBar";
import PageHeader from "../../components/PageHeader";
import { FaUserTie } from "react-icons/fa";
import { IMG_URL } from "../../utils/config";

export default function Service() {
  const [name] = useState("");
  const [description] = useState("");
  const [image] = useState();
  
  const { slug } = useParams();

  const loadService = () => {
    earmService.getService(slug).then((res) => {
      console.log("SERVICE INFO", res.data.Service);
      setData(res.data.service);
    });
  };

  const [data, setData] = useState({
    name,
    description,
    image,
  });


  useEffect(() => {
    loadService();
  }, []);

  // const onUpdate = (e) => {
  //   // console.log('ID', id)
  //   e.preventDefault();
  //   earmService.updateService(slug, data).then((res) => {
  //     console.log("DATA TO BE UPDATED", res.data);
  //     navigate("/services");
  //   });
  // };

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
              title="UPDATING A SERVICE"
              icon={
                <FaUserTie fontSize="small" size={10} className="text-black" />
              }
            />

            <div className="flex items-center justify-center p-4">
              <div className="mx-auto w-full max-w-[850px] bg-white">  
                  <p className="text-4xl text-yellow-500 uppercase p-6 ">
                  {data.name}
                  </p>   
                  <p className="text-xl justify-between p-6 ">
                  {data.description}
                  </p> 
                  <img  className="items-center p-6"
                  src= {IMG_URL + data.image}
                  alt={IMG_URL + data.image}
                  width={500}
                  />
                
                  <Link
                    className="hover:shadow-form rounded-md bg-[#0c0b15] py-3 px-8 text-center text-base font-semibold text-white outline-none float-left ml-6"
                    to={`/service/update/image/${data.slug}`}  >
                    Update image
                  </Link>

                  
                  <Link
                    className="hover:shadow-form rounded-md bg-[#0c0b15] py-3 px-8 text-center text-base font-semibold text-white outline-none float-left ml-6"
                    to={`/service/update/${data.slug}`}
                    // to={`service/update/info/${d.slug}`}  
                    >
                 
                    Update info
                  </Link>
         
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
