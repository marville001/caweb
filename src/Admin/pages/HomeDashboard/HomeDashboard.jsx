import { Typography } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import PageHeaderWithBreadCamp from "../../components/custom/PageHeaderWithBreadCamp";
import { MainContainer } from "../../components/custom/StyledComponents";

const HomeDashboard = () => {
  const crumbs = [
    <NavLink underline="hover" style={{ color: "gray" }} to="/admin">
      Home
    </NavLink>,
  ];
  return (
    <MainContainer>
      <PageHeaderWithBreadCamp noaction title="Dashboard" crumbs={crumbs} />
    </MainContainer>
  );
};

export default HomeDashboard;
