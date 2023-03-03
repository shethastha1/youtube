import React from "react";

const Button = (props) => {
  const { name } = props;
  return (
    <div>
      <button id="buttonStyles">{name}</button>
    </div>
  );
};

export default Button;
