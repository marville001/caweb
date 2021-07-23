import { IconButton } from "@material-ui/core";
import { CloseOutlined } from "@material-ui/icons";
import React from "react";

const ReadNewsModal = ({ open, news, closeNews }) => {
  const newsClick = (e) => {
    //   console.log(e);
    // if (e.target.firstElementChild !== null) {
    //   closeNews();
    // }
  };

  return (
    <div
      style={{
        display: open ? "flex" : "none",
        justifyContent: "center",
        position: "fixed",
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: "rgba(0,0,0,.5)",
      }}
      className="news-modal"
      onClick={(e) => newsClick(e)}
    >
      <div onClick={() => {}} className="news-modal-content">
        <div className="news-modal-close">
          <CloseOutlined onClick={closeNews} size="large" />
        </div>
        <div className="content">
          <img src={"/images/bg.jpg"} alt={news.title} />
          <h1>{news.title}</h1>
          <p>{news.news}</p>
        </div>
      </div>
    </div>
  );
};

export default ReadNewsModal;
