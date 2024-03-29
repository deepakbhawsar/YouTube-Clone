import React, { useEffect } from "react";
import VideoCard from "./VideoCard";
import axios from "axios";
import { API_KEY, YOUTUBE_VIDEO_URL } from "../../api/youtubeApi";
import { useDispatch, useSelector } from "react-redux";
import { setHomeVideo } from "../../utils/store/appSlice";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const open = useSelector((store) => store.app.open);
  const { video, category } = useSelector((store) => store.app);
  // const [video, setVideo] = useState([]);
  const dispatch = useDispatch();

  const fetchVideoByCategory = async () => {
    try {
      const res = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=100&q=${category}&type=video&key=${API_KEY}`
      );
      // console.log(res.data.items);
      dispatch(setHomeVideo(res?.data?.items));
    } catch (error) {
      console.log(error);
    }
  };

  const fetchYoutubeVideo = async () => {
    try {
      const res = await axios.get(YOUTUBE_VIDEO_URL);
      // console.log(res?.data?.items);
      // setVideo(res?.data?.items);
      dispatch(setHomeVideo(res?.data?.items));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(
    () => {
      if (category === "All") {
        fetchYoutubeVideo();
      } else {
        fetchVideoByCategory();
      }
    },
    // eslint-disable-next-line
    [category]
  );

  return (
    <div
      className={`lg:mt-10 xl:mt-10 md:mt-10 sm:mt-10 mt-10 flex-col gap-3 grid grid-cols-1    md:grid-cols-2  lg:grid-cols-3  xl:grid-cols-4 ${
        open
          ? "lg:ml-[200px]  md:ml-5 sm:ml-5 ml-0 lg:mr-4 md:mr-4 sm:mr-4 mr-0"
          : "lg:ml-[6rem] md:ml-5 sm:ml-5 ml-0 lg:mr-4 md:mr-4 sm:mr-4 mr-0"
      }`}
    >
      {video.map((items) => {
        return (
          <Link
            to={`/watch?v=${
              typeof items.id === "object" ? items.id.videoId : items.id
            }`}
            key={typeof items.id === "object" ? items.id.videoId : items.id}
          >
            <VideoCard items={items} />
          </Link>
        );
      })}
    </div>
  );
};

export default VideoContainer;
