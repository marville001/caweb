import React from "react";
import { Button } from "@material-ui/core";

const NewsCard = ({ content, openNews }) => {
  const { title, news, id } = content;
  return (
    <div className="news">
      <div onClick={() => openNews(id)} className="news-header">
        <div className="news-header-content">
          <h2>{title}</h2>
        </div>
      </div>
      <div className="news-content">
        <p>{news.substring(0, 150) + " ..."}</p>

        <Button
          onClick={() => openNews(id)}
          className="button"
          variant="contained"
          color="secondary"
        >
          Learn More
        </Button>
      </div>
    </div>
  );
};

export default NewsCard;
