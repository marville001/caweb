import React from "react";

const SccCard = ({ image, title, description }) => {
  return (
    <div className="scc-group">
      <h3>{title}</h3>
      <img src={image} alt={"Saint Joseph Scc"} />
      <p>
        {description}
      </p>
    </div>
  );
};

export default SccCard;
