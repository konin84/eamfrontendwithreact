import React, { useEffect, useState } from "react";
import * as earmService from "../../../services/earmService";
import { MdDelete, MdEdit } from "react-icons/md";
import SearchInput from "../../SearchInput";
import ConfirmDialog from "../../../components/Modals/ConfirmDialog";
import Pagination from "../../../components/pagination/Pagination";


import { Link } from "react-router-dom";

export default function ImageList() {
  const [record, setRecord] = useState([]);

  const allImages = () => {
    earmService.allImages().then((res) => {
      console.log("ims", res.data);
      setRecord(res.data);
    });
  };

  useEffect(() => {
    allImages();
  }, []);

  const handleDelete = (im) => {
    console.log("Info Delete", im);
    setConfirmDialog({
      ...confirmDialog,
      isOpen: false,
    });
    earmService
      .deleteImage(im.id)
      .then((res) => {
        console.log("Delete", res.data);
        allImages();
      })
      .catch((e) => console.log("error delete", e));
  };

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
  const search = (im) =>
    im.occasion?.toLocaleLowerCase().includes(query) ||
    im.occasion?.toUpperCase().includes(query) ||
    im.occasion.includes(query);

  return (
    <section>
      <div className=" mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-7xl mt-10">
        <Link
          className="bg-black text-white active:bg-green-400 font-bold uppercase text-sm px-2 py-2  shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 rounded-lg float-right"
          Link
          to={"/images/add-image"}>
          New Image
        </Link>

        <SearchInput setQuery={setQuery} />
        <table className="min-w-full border-collapse block md:table">
          <thead className="block md:table-header-group">
            <tr className="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
              <th className="bg-green-500 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                Edit
              </th>
              <th className="bg-black p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                Event
              </th>
              <th className="bg-black p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                Description
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
            {currentItem.filter(search).map((im) => (
              // const {first_name, last_name} = realtor;
              <tr
                className="bg-slate-50 border border-grey-500 md:border-none block md:table-row"
                key={im.id}
              >
                <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                  <span className="inline-block w-1/3 md:hidden font-bold">
                    Edit
                  </span>
                  <Link
                    className=" flex flex-row text-green-500 font-bold py-0 px-0 rounded-full mr-1"
                    to={`/company/photo/update/${im.id}`}
                  >
                    <MdEdit size={25} />
                  </Link>
                </td>
                <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                  <span className="inline-block w-1/3 md:hidden font-bold">
                    Event
                  </span>
                  {im.occasion}
                </td>
                <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                  <span className="inline-block w-1/3 md:hidden font-bold">
                    Description
                  </span>
                  {im.description.substring(0, 100)}
                </td>
                <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                  <span className="inline-block w-1/3 md:hidden font-bold">
                    Published
                  </span>
                  {im ? (
                    im.published === true ? (
                      <>
                        <span className="bg-green-700 text-gray-50 rounded-full px-2">
                          {im.published.toString()}
                        </span>
                      </>
                    ) : (
                      <>
                        <span className="bg-red-500 text-gray-50 rounded-md px-2 ">
                          {im.published.toString()}
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
                          "Do you really want to delete " + im.occasion + "?",

                        subTitle: "You can't undo this operation",
                        onConfirm: () => {
                          handleDelete(im);
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

        <ConfirmDialog
          confirmDialog={confirmDialog}
          setConfirmDialog={setConfirmDialog}
        />
      </div>
    </section>
  );
}
