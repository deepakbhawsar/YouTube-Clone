import React, { useEffect, useState } from "react";
import Avatar from "react-avatar";
import { Link, useSearchParams } from "react-router-dom";
import { BiLike } from "react-icons/bi";
import { FaShare } from "react-icons/fa";
import axios from "axios";
// import { API_KEY, YOUTUBE_VIDEO_API, viewsConvertor } from "./api/Youtube";
import SuggestionVideo from "./SuggestionVideo";
import { API_KEY, YOUTUBE_VIDEO_URL } from "../../api/youtubeApi";
import { viewsCounter } from "../../utils/constents";
import { useSelector } from "react-redux";

const WatchVideo = () => {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");

  const open = useSelector((store) => store.app.open);

  const [suggVideo, setSuggVideo] = useState([]);

  const [singleVideo, setSingleVideo] = useState("");

  const getSingleVideo = async () => {
    try {
      const res = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`
      );
      // console.log(res?.data?.items[0]);
      setSingleVideo(res?.data?.items[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(
    () => {
      getSingleVideo();
      getSuggVideo();
    },
    // eslint-disable-next-line
    []
  );

  const getSuggVideo = async () => {
    try {
      const res = await axios.get(`${YOUTUBE_VIDEO_URL}`);
      // console.log(res?.data?.items);
      setSuggVideo(res?.data?.items);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex xl:flex-row   lg:flex-col md:flex-col sm:flex-col flex-col   ">
      <div
        className={` ${
          open
            ? " xl:ml-[14rem] lg:ml-[14rem] md:ml-[0] sm:ml-[0]"
            : "lg:ml-20 xl:ml-20 md:ml-0 sm:ml-1 ml-1"
        }    py-[7rem]  h-[47rem]   w-[100%] md:w-[100%] sm:w-[100%] lg:w-[100%] xl:w-[60%]`}
      >
        <div className=" ">
          <iframe
            // className={`${open ? "w-[55rem]" : "w-[58rem]"} h-[30rem]`}
            width="100%"
            height="500"
            src={`https://www.youtube.com/embed/${videoId}?si=IVzQPw1z7NES_0lF`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <h1 className="text-2xl text-white font-bold mt-3">
            {singleVideo?.snippet?.title}
          </h1>
        </div>
        <div className=" flex  mt-3">
          <div className="flex ">
            <Avatar src="" size={35} round="20px" />
            <div className="ml-3">
              <h3 className="font-medium text-[20px] text-white">
                {singleVideo?.snippet?.channelTitle}
              </h3>
            </div>
            <div className="flex ml-5  text-center ">
              <button className="hidden sm:block w-[7rem] rounded-lg py-1 text-[20px] bg-[#E0E0E0]">
                Subscribe
              </button>
            </div>
            <div className=" ml-4 flex gap-7 cursor-pointer  text-center">
              <div className="flex gap-3 text-[20px] bg-[#E0E0E0] w-28 rounded-lg justify-center text-center py-1">
                <BiLike size={27} />
                {viewsCounter(singleVideo?.statistics?.likeCount)}
              </div>
              <div>
                <FaShare size={27} className="text-white hidden sm:block" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`xl:mt-[110px] lg:mt-[20px] md:mt-[20px] sm:mt-[10px] ml-[0] mt-[80px] ${
          open
            ? "xl:ml-[5px] lg:ml-[200px] md:ml-5 sm:ml-5"
            : "lg:ml-20 xl:ml-2 md:ml-2 sm:ml-2"
        }`}
      >
        <div className="w-[100%] ">
          {suggVideo?.map((item, i) => {
            // console.log(items.id);
            return (
              <Link to={`/watch?v=${item.id}`} key={item.id}>
                <SuggestionVideo item={item} />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WatchVideo;
