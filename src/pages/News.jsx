import React from "react";

import PageHeader from "../components/PageHeader";
import newsBg from "../images/news-header-bg.jfif";

const News = () => {
  return (
    <div className="news">
      <PageHeader image={newsBg} title="NEWS" />
    </div>
  );
};

export default News;
