import React from "react";
import {
  FaFacebookF,
  FaInstagramSquare,
  FaLinkedinIn,
  FaTwitterSquare,
} from "react-icons/fa";

export default function Footer() {
  return (
    <div>
      <section
        id="cta"
        className="bg-green-700 text-white  font-bold px-4 py-2 transition"
      >
        {/* <!-- Flex Container --> */}
        <div className="container flex flex-col items-center justify-between px-6 py-2 mx-auto  md:flex-row md:space-y-0">
          {/* <!-- Heading --> */}
          <p className="text-xl font-bold text-center text-white md:text-xl md:max-w-xl md:text-left">
            ©{" "}
            <span id="currentYear">
              {new Date().getUTCFullYear()}, Eagle Assets & Resource Management.
            </span>
          </p>
          {/* <!-- Button --> */}
          <div className="flex justify-between items-center ">
            <a href="!#" className="m-6">
              <FaFacebookF size={30} />
            </a>
            <a href="!#" className="m-6">
              {" "}
              <FaTwitterSquare size={30} />{" "}
            </a>
            <a href="!#" className="m-6">
              <FaLinkedinIn size={30} />{" "}
            </a>
            <a href="!#" className="m-6">
              <FaInstagramSquare size={30} />
            </a>
          </div>
          {/* <div></div> */}
          <div>Design by @Pakatron co Ltd</div>
        </div>
      </section>
    </div>
  );
}
