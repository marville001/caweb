import React from "react";

const Title = ({ title, variant }) => {
  return (
    <div className="title">
      <div className="container">
        <h3>{title}</h3>
      </div>
    </div>
  );
};

export default Title;
