import React, { useState } from "react";
import * as earmService from "../../services/earmService";
import * as authService from "../../services/authServices";
import jwt_decode from "jwt-decode";
// import Navbar from "../components/Navbar";
import { Link, useNavigate } from "react-router-dom";
import TopNav from "../TopNav";
import Navbar from "../../components/NavBar";
import PageHeader from "../../components/PageHeader";
import Checkbox from "../../components/controls/Checkbox";
import { FaUserTie } from "react-icons/fa";

export default function NewBlog() {
  const [currentUser, setCurrentUser] = useState(authService.getCurrentUser());
  const [user, setUser] = useState(jwt_decode(currentUser.access));

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [published, setPublished] = useState("");
  const onChange = () => {
    setPublished(!published);
  };

  const navigate = useNavigate();
  const data = {
    author: user.id,
    title,
    content,
    published: true,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      earmService
        .addNewBlog(data)
        .then(
          (res) => {
            console.log("CHECKING DATA", res.data);
            navigate("/blog-list");
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
              title="COMPANY BLOG"
              icon={
                <FaUserTie fontSize="small" size={10} className="text-black" />
              }
            />

            <div className="flex items-center justify-center p-4">
              <div className="mx-auto w-full max-w-[850px] bg-white">
                <form onSubmit={handleSubmit}>
                  <div className="mb-5">
                    <textarea
                      rows="1"
                      name="title"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      placeholder="Blog Title"
                      className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    ></textarea>
                  </div>
                  <div className="mb-5">
                    <textarea
                      rows="8"
                      name="content"
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                      placeholder="Blog Contents"
                      className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    ></textarea>
                  </div>
                  <div className="mb-5">
                    <Checkbox
                      id="checkbox"
                      label="Do you want to publish the blog now."
                      value={published}
                      onChange={onChange}
                    />
                  </div>

                  <Link
                    className="hover:shadow-form rounded-md bg-[#0c0b15] py-3 px-8 text-center text-base font-semibold text-white outline-none float-left"
                    to={"/blog-list"}
                  >
                    All Blogs
                  </Link>
                  <button
                    className="hover:shadow-form rounded-md bg-[#0c0b15] py-3 px-8 text-center text-base font-semibold text-white outline-none float-right"
                    onClick={handleSubmit}
                  >
                    Submit
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
