import React from "react";

const Shimmer = () => {
  var ele = document.querySelectorAll("#shimmer-thumbnail");
  console.log("Element", ele);

  [...ele].forEach((item) => {
    item.addEventListener("mouseover", function () {
      item.style.borderRadius = "0px";
    });
    item.addEventListener("mouseleave", function () {
      item.style.borderRadius = "10px";
    });
  });

  return (
    <div
      className="video-container-parent"
      id="shimmer-container"
      style={{ display: "flex", flexDirection: "column", position: "relative" }}
    >
      <div
        className="video-card-parent"
        style={{ minWidth: "325px", background: "#d3d3d3" }}
      >
        <div
          className="thumbnail"
          id="shimmer-thumbnail"
          style={{
            backgroundColor: "#c6c4c4",
            borderRadius: "10px",
            height: "170px",
          }}
        >
          <p style={{ color: "black", fontWeight: "bold" }}>Loading...</p>
        </div>
        <div>
          <p id="shimmer-video-title"></p>
          <p id="shimmer-channel-title"> </p>
        </div>
      </div>
    </div>
  );
};

export default Shimmer;
