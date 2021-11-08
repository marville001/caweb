import { Button, Typography } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import PageHeaderWithBreadCamp from "../../components/custom/PageHeaderWithBreadCamp";
import { MainContainer } from "../../components/custom/StyledComponents";
import EventListingToolBar from "../../components/events/EventListingToolbar";

const ViewEvents = () => {
  const crumbs = [
    <NavLink underline="hover" style={{ color: "gray" }} to="/admin">
      Home
    </NavLink>,
    <Typography key="3" color="text.primary">
      Events
    </Typography>,
  ];

  const action = ()=>(
    <Button
    style={{
      marginRight: "20px",
      fontSize: "14px",
      padding: "5px 25px",
    }}
    variant="contained"
  >
    Add Event
  </Button>
  )
  return (
    <MainContainer>
      <PageHeaderWithBreadCamp action={action} title="All Events" crumbs={crumbs} />
      <EventListingToolBar />
    </MainContainer>
  );
};

export default ViewEvents;
