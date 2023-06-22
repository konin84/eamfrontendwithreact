import React, { useState } from "react";
import { admin, client } from "./Data/NavbarData";
import * as authService from "../services/authServices";
import { NavLink } from "react-router-dom";
import jwt_decode from "jwt-decode";

// With Spring boot we don't use jwtDecode
const Navbar = () => {
  const [open, setOpen] = useState(true);
  const toggleSidebar = () => {
    setOpen(!open);
  };
  const [currentUser, setCurrentUser] = useState(authService.getCurrentUser());
  // With Spring boot we don't use the following userstate
  const [user, setUser] = useState(jwt_decode(currentUser.access));

  const activeLink =
    "text-white text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 rounded-md";
  const normalLink =
    "text-white text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 rounded-md";

  return (
    <div className="">
      <div></div>
      <div className="flex ">
        <div
          className={`${
            open ? "w-72" : "w-20"
          } p-5 pt-8 duration-300 h-screen bg-black relative`}
        >
          <img
            src="../../../assets/control.png"
            className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
              border-2 rounded-full  ${!open && "rotate-180"}`}
            onClick={toggleSidebar}
            alt=""
            // onClick={() => setOpen(!open)} alt=''
          />

          {currentUser ? (
            // Here we user currentUser and not user like this: currentUser.roles.toString()
            user.role === "ADMIN" ? (
              <>
                <ul className="pt-6">
                  {admin.map((menu, index) => (
                    <li key={index}>
                      <NavLink
                        to={menu.path}
                        className={({ isActive }) =>
                          isActive ? activeLink : normalLink
                        }
                      >
                        <img src={`../../../assets/${menu.src}.png`} alt="" />
                        <span
                          className={`${
                            !open && "hidden"
                          } origin-left duration-200`}
                        >
                          {menu.title}
                        </span>
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </>
            ) : // Here we user currentUser and not user like this: currentUser.roles.toString()

            user.role === "CLIENT" ? (
              <>
                <ul className="pt-6">
                  {client.map((menu, index) => (
                    <li key={index}>
                      <NavLink
                        to={menu.path}
                        className={({ isActive }) =>
                          isActive ? activeLink : normalLink
                        }
                      >
                        <img src={`../../assets/${menu.src}.png`} alt="" />
                        <span
                          className={`${
                            !open && "hidden"
                          } origin-left duration-200`}
                        >
                          {menu.title}
                        </span>
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              ""
            )
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
