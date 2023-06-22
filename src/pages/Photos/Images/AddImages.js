import React, { useEffect, useState } from "react";
import * as earmService from "../../../services/earmService";
import Checkbox from "../../../components/controls/Checkbox";
// import Navbar from "../components/Navbar";
import { Link, useNavigate } from "react-router-dom";
import TopNav from "../../TopNav";
import Navbar from "../../../components/NavBar";
import PageHeader from "../../../components/PageHeader";
import { FaUserTie } from "react-icons/fa";

export default function AddImages() {
  const [published, setPublished] = useState("");
  const [occasion, setOccasion] = useState("");
  const [description, Setdescription] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();
  // console.log('USER', user.id)

  const onChange = () => {
    setPublished(!published);
  };

  useEffect(() => {}, []);

  // let getImageCategory = category.map((c) => <option key={c.id}>{c.name}</option>)
  // const aquaticCreatures = [
  //   { label: "Shark", value: "Shark" },
  //   { label: "Dolphin", value: "Dolphin" },
  //   { label: "Whale", value: "Whale" },
  //   { label: "Octopus", value: "Octopus" },
  //   { label: "Crab", value: "Crab" },
  //   { label: "Lobster", value: "Lobster" },
  // ];

  function handleImage(e) {
    setImage(e.target.files[0]);
  }
  const data = {
    description,
    image,
    occasion,
    published,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      earmService
        .addImage(data)
        .then(
          (res) => {
            console.log("IMAGE DATA", res.data);
            navigate("/services");
          },
          (error) => {
            console.log(error);
          }
        )
        .catch((error) => {
          console.log("ERROR", error.res);
        });
    } catch (err) {
      console.log(err);
    }
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
              title="ADDING IMAGES"
              icon={
                <FaUserTie fontSize="small" size={10} className="text-black" />
              }
            />
            <div className="col-span-2"></div>
            <div className="col-span-8">
              <div className="flex items-center justify-center p-4">
                <div className="mx-auto w-full max-w-[850px] bg-white">
                  <form onSubmit={handleSubmit}>
                    <div className="mb-5">
                      <textarea
                        rows="1"
                        name="occasion"
                        value={occasion}
                        onChange={(e) => setOccasion(e.target.value)}
                        placeholder="Event Name"
                        className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      ></textarea>
                    </div>
                    <div className="mb-5">
                      <input
                        className="mt-5"
                        type="file"
                        accept="image/*"
                        onChange={handleImage}
                        name="image"
                      />
                    </div>

                    <div className="mb-5">
                      <textarea
                        rows="4"
                        name="description"
                        value={description}
                        onChange={(e) => Setdescription(e.target.value)}
                        placeholder="Service description"
                        className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      ></textarea>
                    </div>

                    <div className="mb-5">
                      <Checkbox
                        id="checkbox"
                        label="Publishing the Image now?"
                        value={published}
                        onChange={onChange}
                      />
                    </div>

                    <Link
                      className="hover:shadow-form rounded-md bg-[#0c0b15] py-3 px-8 text-center text-base font-semibold text-white outline-none float-left"
                      to={"/images"}
                    >
                      All Images
                    </Link>
                    <button
                      className="hover:shadow-form rounded-md bg-[#0c0b15] py-3 px-8 text-center text-base font-semibold text-white outline-none float-right"
                      onClick={handleSubmit}
                    >
                      Submit
                    </button>
                  </form>

                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
