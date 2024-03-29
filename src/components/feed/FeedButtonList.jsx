import React, { useState } from "react";
import { FeedButtonListItem } from "../../utils/constents";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../../utils/store/appSlice";

const FeedButtonList = () => {
  const open = useSelector((store) => store.app.open);
  const [active, setActive] = useState("All");
  const dispatch = useDispatch();

  const videoByTag = (tag) => {
    if (active !== tag) {
      dispatch(setCategory(tag));
      setActive(tag);
    }
  };
  console.log(active);

  return (
    <>
      <div className="hidden sm:block  w-full overflow-x-scroll bg-[#04152d]  ">
        <div
          className={`flex  cursor-pointer  ${
            open ? "lg:ml-[12rem] md:ml-5" : "lg:ml-[6rem] md:ml-5"
          }`}
        >
          {FeedButtonListItem.map((feedItemList, i) => (
            <div
              key={i}
              onClick={() => videoByTag(feedItemList)}
              className={`${
                active === feedItemList ? "bg-[#f89e00]" : "bg-[#E0E0E0]"
              } mt-[4rem]  flex ml-2 text-[15px]  items-center px-5 h-7 justify-center   md:rounded-lg 
              `}
            >
              <p className="gap-5">{feedItemList}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FeedButtonList;
