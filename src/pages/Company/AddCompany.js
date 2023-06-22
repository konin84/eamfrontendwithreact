import React, { useState } from "react";
import * as earmService from "../../services/earmService";

// import Navbar from "../components/Navbar";
import { Link, useNavigate } from "react-router-dom";
import TopNav from "../TopNav";
import Navbar from "../../components/NavBar";
import PageHeader from "../../components/PageHeader";
import { FaUserTie } from "react-icons/fa";

export default function AddCompany() {
  const [errorMsg, SetErrorMsg] = useState("");

  const navigate = useNavigate();


  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState(null);
  const [mission, setMission] = useState("");
  const [vision, setVision] = useState("");
  const [corevalue, setCorevalue] = useState("");
  const [logo, setLogo] = useState();
  const [facebook_url, setFacebook_url] = useState("");
  const [twitter_url, setTwitter_url] = useState("");
  const [linkedin_url, setLinkedin_url] = useState("");
  const [instagram_url, setInstagram_url] = useState("");
  // const [employees, setEmployees] = useState([]);


  const data = {
    name,
    email,
    mission,
    vision,
    facebook_url,
    twitter_url,
    linkedin_url,
    instagram_url,
    telephone,
    corevalue,
    address,
    logo,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      earmService
        .addCompany(data)
        .then(
          (res) => {
            console.log("CHECKING DATA", res.data);
            navigate("/company-info");
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
              title="COMPANY REGISTRATION "
              icon={
                <FaUserTie fontSize="small" size={10} className="text-black" />
              }
            />

            <div className="flex items-center justify-center p-4">
              <div className="mx-auto w-full max-w-[850px] bg-white">
                <form onSubmit={handleSubmit} >
                  <div className="mb-5 pt-3">
                    <label className="mb-5 block text-base font-semibold text-[#07074D] sm:text-xl">
                      Key Information
                    </label>
                    <div className="-mx-3 flex flex-wrap">
                      <div className="w-full px-3 sm:w-1/2">
                        <div className="mb-5">
                          <input
                            type="text"
                            name="name"
                            value={name}
                             onChange={(e) => setName(e.target.value)}
                            placeholder="Company Name"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                          />
                        </div>
                      </div>
                      <div class="w-full px-3 sm:w-1/2">
                        <div class="mb-5">
                          <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Company email address"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                          />
                        </div>
                      </div>
                      <div className="w-full px-3 sm:w-1/2">
                        <div className="mb-5">
                          <input
                            type="text"
                            name="telephone"
                            value={telephone}
                            onChange={(e) => setTelephone(e.target.value)}
                            placeholder="Telephone Number"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                          />
                        </div>
                      </div>
                      <div className="w-full px-3 sm:w-1/2">
                        <div className="mb-5">
                          <input
                            type="file"
                            name="logo"
                            onChange={(e) => setLogo(e.target.files[0])}
                            accept="image/*"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-5">
                    <textarea
                      rows="1"
                      name="address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="Company Address"
                      className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    ></textarea>
                  </div>

                  <div className="mb-5 pt-3">
                    <label className="mb-5 block text-base font-semibold text-[#07074D] sm:text-xl">
                      Social media Details
                    </label>
                    <div className="-mx-3 flex flex-wrap">
                      <div className="w-full px-3 sm:w-1/2">
                        <div className="mb-5">
                          <input
                            type="url"
                            name="facebook_url"
                            value={facebook_url}
                            onChange={(e) => setFacebook_url(e.target.value)}
                            placeholder="Facebook link"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                          />
                        </div>
                      </div>
                      <div className="w-full px-3 sm:w-1/2">
                        <div className="mb-5">
                          <input
                            type="url"
                            name="twitter_url"
                            value={twitter_url}
                            onChange={(e) => setTwitter_url(e.target.value)}
                            placeholder="Twitter Link"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                          />
                        </div>
                      </div>
                      <div className="w-full px-3 sm:w-1/2">
                        <div className="mb-5">
                          <input
                            type="url"
                            name="linkedin_url"
                            value={linkedin_url}
                            onChange={(e) => setLinkedin_url(e.target.value)}
                            placeholder="LinkedIn link"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                          />
                        </div>
                      </div>
                      <div className="w-full px-3 sm:w-1/2">
                        <div className="mb-5">
                          <input
                            type="url"
                            name="instagram_url"
                            value={instagram_url}
                            onChange={(e) => setInstagram_url(e.target.value)}
                            placeholder="Instagram link"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <label class="mb-5 block text-base font-semibold text-[#07074D] sm:text-xl">
                      Key Statements
                    </label>
                  <div class="mb-5">
                    <label
                      className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Vision Statement
                    </label>
                    <textarea
                      rows="1"
                      name="vision"
                      value={vision}
                      onChange={(e) => setVision(e.target.value)}
                      placeholder="Mission Statement"
                      className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    ></textarea>
                  </div>
                  <div className="mb-5">
                    <label
                      className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Mission Statement
                    </label>
                    <textarea
                      rows="1"
                      name="mission"
                      value={mission}
                      onChange={(e) => setMission(e.target.value)}
                      placeholder="Mission Statement"
                      className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    ></textarea>
                  </div>
                  <div className="mb-5">
                    <label
                      className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Core Values
                    </label>
                    <textarea
                      rows="1"
                      name="corevalue"
                      value={corevalue}
                      onChange={(e) => setCorevalue(e.target.value)}
                      placeholder="Core Values"
                      className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    ></textarea>
                  </div>


                  <div>
                    <Link className="hover:shadow-form rounded-md bg-[#0c0b15] py-3 px-8 text-center text-base font-semibold text-white outline-none float-left"
                    to ='/company-info'
                    > 
                      View info
                    </Link>
                    </div>
                  <div>
                    <button className="hover:shadow-form rounded-md bg-[#0c0b15] py-3 px-8 text-center text-base font-semibold text-white outline-none float-right"
                     onClick={handleSubmit}
                    >
                      
                      Submit
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
