import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants.js";
import VideoCard from "./VideoCard.jsx";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    setVideos(json.items);
  };
  useEffect(() => {
    getVideos();
  }, []);
  console.log("Videos", videos);
  return (
    <div className="video-container-parent">
      {videos.length > 0 &&
        videos.map((video, index) => (
          // <Link to={"watch?v=" + video.id} key={video.id}>
          <VideoCard info={video} />
          // </Link>
        ))}
    </div>
  );
};

export default VideoContainer;
