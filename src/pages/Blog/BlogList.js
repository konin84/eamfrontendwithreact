import React, { useEffect, useState } from "react";
import * as earmService from "../../services/earmService";

import { MdDelete, MdEdit } from "react-icons/md";

import SearchInput from "../SearchInput";
import Notification from "../../components/Modals/Notification";
import ConfirmDialog from "../../components/Modals/ConfirmDialog";
import Pagination from "../../components/pagination/Pagination";
import { FaUserTie } from "react-icons/fa";
import PageHeader from "../../components/PageHeader";
import Navbar from "../../components/NavBar";
import TopNav from "../TopNav";
import { Link } from "react-router-dom";

export default function BlogList() {
  const [record, setRecord] = useState([]);

  const allBlogs = () => {
    earmService.viewBlogs().then((res) => {
      console.log("Blogs", res.data);
      setRecord(res.data);
    });
  };

  useEffect(() => {
    allBlogs();
  }, []);

  const handleDelete = (blog) => {
    console.log("Info Delete", blog);
    setConfirmDialog({
      ...confirmDialog,
      isOpen: false,
    });
    earmService
      .deleteBlog(blog.slug)
      .then((res) => {
        console.log("Delete", res.data);
        setNotify({
          isOpen: true,
          message: "Blog deleted Successfully",
          type: "error",
        });
        // setRecordForEdit(null);
        // setOpenPopup(false);
        allBlogs();
      })
      .catch((e) => console.log("error delete", e));
  };

  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });

  const [confirmDialog, setConfirmDialog] = useState({
    isOpen: false,
    title: "",
    subTitle: "",
  });

  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 15;
  const lastItem = currentPage * recordsPerPage;
  const firstItem = lastItem - recordsPerPage;
  const currentItem = record.slice(firstItem, lastItem);

  const [query, setQuery] = useState("");
  const search = (blog) =>
    blog.title?.toLocaleLowerCase().includes(query) ||
    blog.title?.toUpperCase().includes(query) ||
    blog.title.includes(query);

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
              title="CLIENTS MANAGEMENT"
              icon={
                <FaUserTie fontSize="large" size={10} className="text-black" />
              }
            />
            <SearchInput setQuery={setQuery} />
            <table className="min-w-full border-collapse block md:table">
              <thead className="block md:table-header-group">
                <tr className="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
                  <th className="bg-green-500 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                    Edit
                  </th>
                  <th className="bg-black p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                    Title
                  </th>
                  <th className="bg-black p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                    Content
                  </th>
                  <th className="bg-black p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                    Published
                  </th>

                  <th className="bg-red-700 p-2 text-white font-bold md:border md:border-grey-500 text-center block md:table-cell">
                    Delete
                  </th>
                </tr>
              </thead>
              <tbody className="block md:table-row-group">
                {currentItem.filter(search).map((blog) => (
                  // const {first_name, last_name} = realtor;
                  <tr
                    className="bg-slate-50 border border-grey-500 md:border-none block md:table-row"
                    key={blog.id}
                  >
                    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                      <span className="inline-block w-1/3 md:hidden font-bold">
                        Edit
                      </span>
                      <Link
                        className=" flex flex-row text-green-500 font-bold py-0 px-0 rounded-full mr-1"
                        to={`/blog/update/${blog.slug}`}
                      >
                        <MdEdit size={25} />
                      </Link>
                    </td>
                    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                      <span className="inline-block w-1/3 md:hidden font-bold">
                        Title
                      </span>
                      {blog.title}
                    </td>
                    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                      <span className="inline-block w-1/3 md:hidden font-bold">
                        Content
                      </span>
                      {blog.content.substring(0, 100)}
                    </td>
                    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                      <span className="inline-block w-1/3 md:hidden font-bold">
                        Published
                      </span>
                      {blog ? (
                        blog.published === true ? (
                          <>
                            <span className="bg-green-700 text-gray-50 rounded-full px-2">
                              {blog.published.toString()}
                            </span>
                          </>
                        ) : (
                          <>
                            <span className="bg-red-500 text-gray-50 rounded-md px-2 ">
                              {blog.published.toString()}
                            </span>
                          </>
                        )
                      ) : (
                        ""
                      )}
                    </td>

                    <td className="p-2 md:border md:border-grey-500 block md:table-cell text-center justify-between">
                      <span className="inline-block w-1/3 md:hidden font-bold">
                        Delete
                      </span>

                      <button
                        className="flex flex-col text-red-500 font-bold py-0 px-0 rounded-full"
                        onClick={() => {
                          // handleDelete(house);
                          setConfirmDialog({
                            isOpen: true,
                            title:
                              "Do you really want to delete " +
                              blog.title +
                              "?",

                            subTitle: "You can't undo this operation",
                            onConfirm: () => {
                              handleDelete(blog);
                            },
                          });
                        }}
                      >
                        <MdDelete size={20} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {/*  pagination here*/}
            <Pagination
              totalHouses={record.length}
              housesPerPage={recordsPerPage}
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
            />
            {/*  */}
            <br />
            <hr />

            <Notification notify={notify} setNotify={setNotify} />

            <ConfirmDialog
              confirmDialog={confirmDialog}
              setConfirmDialog={setConfirmDialog}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
