import React from "react";

import PageHeader from "../components/PageHeader";
import readingsBg from "../images/readings-header-bg.jfif";


const Readings = () => {
  return (
    <div>
      <PageHeader image={readingsBg} title="READINGS" />{" "}
    </div>
  );
};

export default Readings;
