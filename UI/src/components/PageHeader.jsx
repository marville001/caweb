import React from "react";

import "../styles/pageheader.scss";

const PageHeader = ({ image, subtitle, title }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
        height: "40vh",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        zIndex: 1,
        overflow: "hidden"
        
      }}
      className="page-header"
    >
      <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          backgroundColor:"rgba(0,0,0,0.5)",
          height:"100%"

      }}>
        <h3
          style={{
            fontSize: "30px",
            color: "var(--secondary-color)",
            marginBottom: "10px",
          }}
        >
          {subtitle}
        </h3>
        <h1
          style={{
            fontSize: "50px",
            color: "#fff",
            textAlign: "center",
          }}
        >
          {title}
        </h1>
      </div>
    </div>
  );
};

export default PageHeader;
