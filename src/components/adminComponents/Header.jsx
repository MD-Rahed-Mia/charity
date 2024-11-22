import React, { useState } from "react";
import { FaUserLarge } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

function Header({title = "Manage website"}) {
  const [menu, setMenu] = useState(false);
  const naviagate = useNavigate();

  return (
    <div className="flex  items-center justify-between px-20 py-8 bg-[#2e86c1]">
      <h1 className="text-2xl font-extrabold">Logo</h1>

      <h1 className="text-lg md:text-3xl lg:text-4xl text-white font-bold capitalize">{title}</h1>

      <div className="relative">
        <div
          className="w-12 h-12 bg-slate-300 cursor-pointer rounded-full flex items-center justify-center"
          onClick={() => setMenu(!menu)}
        >
          <FaUserLarge className="text-2xl" />
        </div>

        {menu ? (
          <div className="absolute top-full right-2 bg-white rounded-sm border-2 shadow-md p-4 z-50">
            <ul>
              <li className="mt-3 cursor-pointer">Profile</li>
              <li
                className="mt-3 cursor-pointer"
                onClick={() => {
                  localStorage.removeItem("token");
                  naviagate("/sign-in");
                }}
              >
                Logout
              </li>
            </ul>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Header;
