import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants.js";
import VideoCard from "./VideoCard.jsx";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { openMenu } from "../utils/appSlice.js";
import Shimmer from "./Shimmer.jsx";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    setVideos(json.items);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    getVideos();
    dispatch(openMenu());
  }, []);
  console.log("Videos", videos);
  return (
    <div className="video-container-parent">
      {videos.length > 0
        ? videos.map((video, index) => (
            <Link
              style={{ textDecoration: "none" }}
              to={"watch?v=" + video.id}
              key={video.id}
            >
              <VideoCard info={video} />
            </Link>
          ))
        : Array(16).fill(<Shimmer />)}
    </div>
  );
};

export default VideoContainer;
