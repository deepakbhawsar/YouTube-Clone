import React, { useState } from "react";
import { categories } from "../../utils/constents";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../../utils/store/appSlice";

const Sidebar = () => {
  const open = useSelector((store) => store.app.open);
  const [active, setActive] = useState("All");
  const dispatch = useDispatch();

  const videoByTag = (tag) => {
    if (active !== tag) {
      dispatch(setCategory(tag));
      setActive(tag);
    }
  };
  // console.log(active);l

  return (
    <div className="">
      <div className="mt-24 flex-col bg-[#04152d]  text-white fixed cursor-pointer h-[calc(100vh-4.625rem)]  hidden lg:block overflow-y-scroll overflow-x-hidden ">
        {categories.map((item, i) => (
          <div
            key={i}
            onClick={() => videoByTag(item)}
            className={`${
              active === item ? "bg-[#f89e00] text-black" : ""
            }   flex items-center gap-4 ml-4 mr-6  rounded-md  `}
          >
            <div className="text-[25px] ml-3 mr-1 py-2 ">{item.icon}</div>
            <div
              className={`text-[15px] font-semibold ml-1 ${open ? "" : "hidden"}
              `}
            >
              <p>{item.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
