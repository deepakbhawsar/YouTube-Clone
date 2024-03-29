import React, { useState } from "react";
import Avatar from "react-avatar";

import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { MdOutlineVideoCall } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { setCategory, toggleSidebar } from "../../utils/store/appSlice";

const profileImg =
  "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D";

const Header = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const searchVideo = (event) => {
    if (event?.key === "Enter") {
      console.log(setCategory(event.input));
    }
    dispatch(setCategory(input));
  };

  const hamburgerToggle = () => {
    dispatch(toggleSidebar());
  };

  return (
    <div className=" sm:mt-0 md:mt-0 lg:mt-0 mt-[-40px] flex items-center justify-center w-[100%] fixed h-[55px] bg-[#04152d] ">
      <div className="flex justify-between w-[1650px] ">
        <div className="flex gap-5 items-center  sm:ml-6 ml-2 lg:ml-8 xl:ml-8 ">
          <GiHamburgerMenu
            onClick={hamburgerToggle}
            size={"20"}
            className="cursor-pointer text-white  hidden sm:block"
          />
          <div className="flex  items-center cursor-pointer">
            <img
              className="h-5"
              src={"/images/yt-logo-mobile.png"}
              alt="yt-logo"
            />
            <p className=" ml-1 font-bold hidden sm:block text-white ">
              YouTube
            </p>
          </div>
        </div>
        <div className="hidden sm:block ">
          <div className="flex items-center  sm:visible lg:visible md:visible">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              className="  bg-transparent text-white  border outline-none border-[#f89e00] w-[100px] sm:w-[200px] md:w-[400px] lg:w-[500px] py-1 px-4 rounded-l-full md:py-1 sm:py-1 lg:py-[9px]"
              placeholder="Search"
            />
            <button
              className="bg-[#f89e00] border border-[#f89e00] text-black  w-20 rounded-r-full md:py-1 sm:py-1 lg:py-2.5 py-1"
              onClick={searchVideo}
            >
              Search
            </button>
          </div>
        </div>
        <div className="flex gap-4 items-center lg:mr-5 md:mr-5 sm:mr-5 mr-1">
          <div className="flex sm:hidden">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              className="  bg-transparent text-white  border outline-none border-[#f89e00] w-[100px] sm:w-[200px] md:w-[400px] lg:w-[500px] py-1 px-4 rounded-l-full md:py-1 sm:py-1 lg:py-[9px]"
              placeholder="Search"
            />
            <button
              className="bg-[#f89e00] border border-[#f89e00] text-black  w-7 rounded-r-full md:py-1 sm:py-1 lg:py-2.5 py-1"
              onClick={searchVideo}
            >
              <FaSearch
                size={"15"}
                className="cursor-pointer ml-1 sm:hidden text-white"
              />
            </button>
          </div>
          <MdOutlineVideoCall
            size={"25"}
            className="cursor-pointer text-white"
          />
          <MdOutlineNotificationsNone
            size={"25"}
            className="cursor-pointer text-white"
          />

          <Avatar src={profileImg} size={35} round="20px" />
        </div>
      </div>
    </div>
  );
};

export default Header;
