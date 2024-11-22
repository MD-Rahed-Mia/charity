import React, { useState } from "react";
import { Card } from "antd";
import { BsThreeDots } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";
import UpdateMission from "./UpdateMission";
import DeleteMission from "./DeleteMission";
// import UpdateHero from "./UpdateHero";
// import DeleteHero from "./DeleteHero";

export default function MissionVisionCard({ item }) {
  const [subMenu, setSubMenu] = useState(false);

  return (
    <Card>
      {/* menu */}
      <div className=" cursor-pointer absolute top-4 right-3">
        {subMenu ? (
          <RxCross1 className="text-2xl" onClick={() => setSubMenu(!subMenu)} />
        ) : (
          <BsThreeDots
            className="text-2xl"
            onClick={() => setSubMenu(!subMenu)}
          />
        )}

        <div>{subMenu ? <HeroCardMenu item={item} /> : null}</div>
      </div>

      <img src={item?.image} alt="image" className="mt-4" />
      <p>
        status:
        {item?.isActive ? (
          <span className="min-w-8 inline-block px-4 py-1 text-[12px] text-white bg-blue-500">
            active
          </span>
        ) : (
          <span className="min-w-8 inline-block px-4 py-1 text-[12px] text-white bg-orange-500">
            disabled
          </span>
        )}
      </p>
      <p className="text-sm">{item?.mission}</p>
      <p className="text-sm">{item?.vision}</p>
    </Card>
  );
}

function HeroCardMenu({ item }) {
  return (
    <div className="border bg-white p-3 relative top-4 right-4">
      <ul>
        <li>
          {" "}
          <UpdateMission item={item} /> {/* <UpdateHero item={item} /> */}
        </li>
        <li>
          {" "}
          <DeleteMission item={item} /> {/* <DeleteHero item={item} /> */}
        </li>
      </ul>
    </div>
  );
}
