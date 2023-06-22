import React, { useEffect, useState } from "react";
import * as earmService from "../../services/earmService";

import { MdDelete, MdRemoveRedEye } from "react-icons/md";

import SearchInput from "../SearchInput";
import Notification from "../../components/Modals/Notification";
import ConfirmDialog from "../../components/Modals/ConfirmDialog";
import Pagination from "../../components/pagination/Pagination";
import { Link } from "react-router-dom";

export default function ServicesList() {
  const [record, setRecord] = useState([]);

  const allServices = () => {
    earmService.ListServices().then((res) => {
      console.log("Services", res.data);
      setRecord(res.data);
    });
  };

  useEffect(() => {
    allServices();
  }, []);

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
  const search = (service) =>
    service.name?.toLocaleLowerCase().includes(query) ||
    service.name?.toUpperCase().includes(query) ||
    service.name?.includes(query);

  const handleDelete = (service) => {
    setConfirmDialog({
      ...confirmDialog,
      isOpen: false,
    });
    earmService
      .deleteService(service.slug)
      .then((res) => {
        console.log("Delete", res.data);
        setNotify({
          isOpen: true,
          message: "Service deleted Successfully",
          type: "error",
        });
        allServices();
      })
      .catch((e) => console.log("error delete", e));
  };

  return (
    <div className=" mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-7xl mt-10">
      <Link
        className="bg-black text-white active:bg-green-400 font-bold uppercase text-sm px-2 py-2  shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 rounded-lg float-right"
        Link
        to={"/services/add-service"}
      >
        New Service
      </Link>

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

            <th className="bg-red-700 p-2 text-white font-bold md:border md:border-grey-500 text-center block md:table-cell">
              Delete
            </th>
          </tr>
        </thead>
        <tbody className="block md:table-row-group">
          {currentItem.filter(search).map((service) => (
            // const {first_name, last_name} = realtor;
            <tr
              className="bg-slate-50 border border-grey-500 md:border-none block md:table-row"
              key={service.id}
            >
              <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                <span className="inline-block w-1/3 md:hidden font-bold">
                  Edit
                </span>
                <Link
                  className=" flex flex-row text-green-500 font-bold py-0 px-0 rounded-full mr-1"
                  to={`/service/${service.slug}`}
                >
                  <MdRemoveRedEye size={25} />
                </Link>
              </td>
              <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                <span className="inline-block w-1/3 md:hidden font-bold">
                  Title
                </span>
                {service.name}
              </td>
              <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                <span className="inline-block w-1/3 md:hidden font-bold">
                  Content
                </span>
                {service.description.substring(0, 90)}
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
                        "Do you really want to delete " + service.name + "?",

                      subTitle: "You can't undo this operation",
                      onConfirm: () => {
                        handleDelete(service);
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
  );
}
