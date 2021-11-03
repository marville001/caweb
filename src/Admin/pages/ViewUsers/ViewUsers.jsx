import { Typography } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import PageHeaderWithBreadCamp from "../../components/custom/PageHeaderWithBreadCamp";
import { MainContainer } from "../../components/custom/StyledComponents";

const ViewUsers = () => {
  const crumbs = [
    <NavLink underline="hover" style={{ color: "gray" }} to="/admin">
      Home
    </NavLink>,
    <Typography key="3" color="text.primary">
      Users
    </Typography>
  ]
  return (
    <MainContainer>
      <PageHeaderWithBreadCamp title="All Users" crumbs={crumbs} />
    </MainContainer>
  );
};

export default ViewUsers;
