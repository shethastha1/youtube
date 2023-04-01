import React from "react";
import moment from "moment";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  console.log("INFO", thumbnails.high);

  return (
    <div className="video-card-parent">
      <img
        src={thumbnails.medium.url}
        // style={{
        //   width: `${thumbnails.medium.width}px`,
        //   height: `${thumbnails.medium.heigth}px`,
        // }}
        className="thumbnail"
        alt="thumbnail"
      />
      <div>
        <p id="video-title">{title}</p>
        <p id="channel-title">{channelTitle}</p>
        <span style={{ display: "inline-flex" }}>
          <p id="video-views">
            {statistics.viewCount > 1000000
              ? (statistics.viewCount / 1000000).toFixed(1) + "M"
              : (statistics.viewCount / 100000).toFixed(2) + "K"}{" "}
            views .
          </p>
          <p id="upload-duration">
            <b> . </b>
            {moment
              .utc(info.snippet.publishedAt)
              .local()
              .startOf("seconds")
              .fromNow()}
          </p>
        </span>
      </div>
    </div>
  );
};

export default VideoCard;
