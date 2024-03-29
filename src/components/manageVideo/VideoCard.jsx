import Avatar from "react-avatar";
import { viewsCounter } from "../../utils/constents";
import moment from "moment";
const profileImg =
  "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D";

const VideoCard = ({ items }) => {
  return (
    <div className="mb-5">
      <img
        className="w-full rounded-md"
        src={items?.snippet?.thumbnails?.medium?.url}
        alt="Thumbnail"
      />
      <div className=" mt-2">
        <div className="flex">
          <Avatar size={35} round="20px" src={profileImg} />
          <h1 className="text-[15px] ml-3 font-normal whitespace-break-spaces  w-full text-white flex ">
            {items?.snippet?.title.slice(0, 70)}
          </h1>
        </div>
        <div className="lg:ml-0 sm:ml-2 md:ml-2 ml-2 xl:ml-12 sm:flex md:flex-col flex  xl:flex-col 2xl:flex-col lg:flex-none">
          <div className="text-gray-500 font-medium mt-1 ">
            <p>{items?.snippet?.channelTitle}</p>
          </div>
          <div className=" text-gray-500 lg:w-[90%] sm:w[50px] ml-4 md:ml-0 sm:ml-4 lg:ml-0 flex ">
            <div className=" flex ">
              <p>
                {viewsCounter(items?.statistics?.viewCount)} views &bull;
                {moment(items.snippet.publishedAt).fromNow()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
