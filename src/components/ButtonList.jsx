import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const list = [
    "All",
    "One-D",
    "News",
    "Cricket",
    "Football",
    "T-series",
    "Gaming",
    "Songs",
    "Live",
    "Cooking",
    "Humans",
    "Comedy",
    "folk music",
    "Bollywood",
    "Chill-out",
    "Gym",
    "Party",
    "art",
  ];
  return (
    <div className="buttonListDiv">
      {list.map((item, index) => (
        <Button key={item + index} name={item} />
      ))}
    </div>
  );
};

export default ButtonList;
