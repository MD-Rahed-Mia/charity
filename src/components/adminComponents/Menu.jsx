import React from "react";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <div className="w-[200px] bg-[#2e86c1] p-4 min-h-[100vh] fixed top-[100px] left-0">
      <ul>
        <Link
          to={"/admin"}
          className="py-3 block  text-white cursor-pointer text-center border-b-2"
        >
          Dashboard
        </Link>
        <Link
          to={"/admin/manage-hero-section"}
          className="py-3 block  text-white cursor-pointer text-center border-b-2"
        >
          Manage Hero section
        </Link>

        <Link
          to={"/admin/manage-about-section"}
          className="py-3 block text-white  cursor-pointer text-center border-b-2"
        >
          Manage about section
        </Link>
        <Link
          to={"/admin/manage-mission-section"}
          className="py-3 block text-white  cursor-pointer text-center border-b-2"
        >
          Manage Mission section
        </Link>
        <Link
          to={"/admin/manage-achivement-section"}
          className="py-3 block text-white  cursor-pointer text-center border-b-2"
        >
          Manage achivement section
        </Link>
        <Link
          to={"/admin/manage-sponsor-section"}
          className="py-3 block text-white  cursor-pointer text-center border-b-2"
        >
          Manage sponsor section
        </Link>
        <Link
          to={"/admin/manage-gallery-section"}
          className="py-3 block text-white  cursor-pointer text-center border-b-2"
        >
          Manage gallery section
        </Link>
        <Link
          to={"/admin/manage-contact-section"}
          className="py-3 block text-white  cursor-pointer text-center border-b-2"
        >
          Manage contact section
        </Link>
      </ul>
    </div>
  );
}
