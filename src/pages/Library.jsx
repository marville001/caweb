import React from "react";
import PageHeader from "../components/PageHeader";

import galleryBg from "../images/gallery-header-bg.jfif";

const Library = () => {
  return (
    <div>
      <PageHeader image={galleryBg} title="LIBRARY" subtitle="our" />
    </div>
  );
};

export default Library;
