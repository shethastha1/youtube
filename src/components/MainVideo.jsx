import moment from "moment";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/appSlice";
import { YOUTUBE_VIDEO_DETAILS } from "../utils/constants";
import CommentsContainer from "./CommentsContainer";

const MainVideo = () => {
  const [params] = useSearchParams();
  const [videoDetails, setVideoDetails] = useState();
  const [showDescription, setShowDescription] = useState(false);
  console.log(params.get("v"));
  const dispatch = useDispatch();

  const getVideoPlayer = async () => {
    const URL = YOUTUBE_VIDEO_DETAILS(params.get("v"));
    console.log("URL", URL);
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data.items);
    setVideoDetails(data.items);
  };
  useEffect(() => {
    dispatch(closeMenu());
    getVideoPlayer();
  }, []);
  return (
    <div className="main-video-div">
      <div className="video-details-div">
        <iframe
          width="700"
          height="360"
          src={`https://www.youtube.com/embed/${params.get("v")}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <br />
        {videoDetails && (
          <div>
            <p id="video-tile-title">{videoDetails[0]?.snippet.title}</p>
            <p id="video-tile-channelName">
              {videoDetails[0]?.snippet.channelTitle}
            </p>
            <span style={{ display: "inline-flex" }}>
              <p id="video-views">
                {videoDetails[0]?.statistics.viewCount > 1000000
                  ? (videoDetails[0]?.statistics.viewCount / 1000000).toFixed(
                      1
                    ) + "M"
                  : (videoDetails[0]?.statistics.viewCount / 100000).toFixed(
                      2
                    ) + "K"}{" "}
                views
              </p>
              <p id="video-tile-publishat">
                {moment
                  .utc(videoDetails[0]?.snippet.publishedAt)
                  .local()
                  .startOf("seconds")
                  .fromNow()}
              </p>
            </span>
            <div
              className="video-description"
              onClick={() => setShowDescription(!showDescription)}
            >
              <p>
                {showDescription
                  ? videoDetails[0]?.snippet.description
                  : (videoDetails[0]?.snippet.description).substring(0, 350)}
                <b>{!showDescription && "Read more..."}</b>
              </p>
            </div>
          </div>
        )}
        <div>
          <CommentsContainer />
        </div>
      </div>
    </div>
  );
};

export default MainVideo;
