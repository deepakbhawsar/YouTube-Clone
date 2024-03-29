import React from "react";
import { viewsCounter } from "../../utils/constents";

const SuggestionVideo = ({ item }) => {
  return (
    <div className="  h-[0rem] flex rounded-md mb-[100px] ">
      <img
        className=" w-[150px] h-[6rem] rounded-xl  "
        src={item?.snippet?.thumbnails?.medium?.url}
        // src={profileImg}
        alt="Thumbnail"
      />
      <div className=" mt-0 w-[200px]  ">
        <div className="flex">
          <h1 className="text-[16px]  font-normal w-[280px] ml-2 flex leading-none text-white">
            {item.snippet.title.slice(0, 40) + ".."}
            {/* {shortTitle(title)} */}
          </h1>
        </div>
        <div className="lg:ml-0 sm:ml-2 md:ml-2 ml-2 xl:ml-2 sm:flex md:flex-col flex  xl:flex-col 2xl:flex-col lg:flex-none">
          <div className="text-gray-500 font-medium ">
            <p>
              {item.snippet.channelTitle}
              {/* channelTitle */}
            </p>
          </div>
          <div className=" text-gray-500 lg:w-[90%] sm:w[50px] ml-4 md:ml-0 sm:ml-4 lg:ml-0 flex ">
            <div className=" flex ">
              <p>
                {/* views */}
                {viewsCounter(item.statistics.viewCount)} views &bull;
                {/* {moment(item.snippet.publishedAt).fromNow()} */}
              </p>
              {/* <p className="ml-4  ">10 Days ago</p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuggestionVideo;
