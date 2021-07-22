import React from "react";
import Carousel from "react-material-ui-carousel";
import { Button, Paper } from "@material-ui/core";


const Item = ({item}) => {
  const {title,subtitle,btntext,btnlink, image} = item
  return (
    <Paper
      className="hero-content"
      style={{
        background: `url(${image})`,
        backgroundPosition: "center",
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover"
      }}
    >
      <div className="container hc">
        <h1>{title}</h1>
        <p>
          <i>{subtitle}</i>
        </p>
        <Button href={btnlink} className="find-out-btn button">
          {btntext}
        </Button>
      </div>
    </Paper>
  );
};

const HomeCarousel = (props) => {
  var items = [
    {
        title: "Join Us For Worship",
        subtitle: "Celebrating Jesus' Presence Among Us",
        image:"/images/worship.jfif",
        btntext:"Find Your Mass Time",
        btnlink:"/mass"
      },
      {
        title: "A Faith That Unites Us",
        subtitle: "Church Is God's Family",
        image:"/images/faith.jfif",
        btntext:"Learn More",
        btnlink:"/about"
      },{
        title: "Live Streaming Mass For You",
        subtitle: "Don't Tune Out, Tune In!",
        image:"/images/live.jfif",
        btntext:"Watch Mass On Live Stream",
        btnlink:"/masses"
      },
  ];

  return (
    <Carousel 
    animation="fade"
    indicators={false}
    >
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
};

export default HomeCarousel;
