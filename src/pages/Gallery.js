import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import NavBar from "./HomePage/NavBar";
import * as earmService from "../services/earmService";
import { IMG_URL } from "../utils/config";

export default function Gallery() {

  const [record, setRecord] = useState([]);

  const publishedImages = () => {
    earmService.publishedImages().then((res) => {
      console.log("ALL PUBLISHED IMAGES", res.data);
      setRecord(res.data);
    });
  };

  useEffect(() => {
    publishedImages();
  }, []);

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
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 mx-2 my-1">
             {record &&
               record.map((im) => (
                 <div
                   className="bg-slate-50 p-2 rounded mr-6 text-center"
                   key={im.id}
                 >
                   <div className="max-w-2xl mx-auto my-1 bg-white rounded-lg shadow-md p-5">
                   <div className="max-w-2xl mx-auto my-3 bg-white rounded-lg shadow-md p-1">
                        <img
                          className="w-[90%] h-80 rounded-lg mx-auto -my-8 pb-6"
                          src={IMG_URL+im.image}
                          alt={im.image}
                        />
                     <h2 className="text-center text-2xl font-semibold mt-3">
                       {im.occasion}
                     </h2>
                    </div>
                     
                   </div>
                 </div>
               ))}
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
