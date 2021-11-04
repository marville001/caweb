import { Grid, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
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
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <TopCard>hrrh</TopCard>
        </Grid>
        <Grid item xs={12} md={4}>
          <TopCard>hrrh</TopCard>
        </Grid>
      </Grid>
      <div style={{ margin: "30px 0px" }} />
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <DashCard>Card</DashCard>
        </Grid>
        <Grid item xs={12} sm={4}>
          <DashCard>Card</DashCard>
        </Grid>
        <Grid item xs={12} sm={4}>
          <DashCard>Card</DashCard>
        </Grid>
      </Grid>
      <div style={{ margin: "30px 0px" }} />
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <GraphCard>Graph One</GraphCard>
        </Grid>
        <Grid item xs={12} sm={6}>
          <GraphCard>Graph Two</GraphCard>
        </Grid>
      </Grid>
    </MainContainer>
  );
};

const TopCard = styled(Paper)(({ theme }) => ({
  padding: "20px",
  marginTop: "20px",
  minHeight: "150px",
}));

const DashCard = styled(Paper)(({ theme }) => ({
  padding: "20px",
  minHeight: "120px",
}));

const GraphCard = styled(Paper)(({ theme }) => ({
  padding: "20px",
  minHeight: "200px",
}));

export default HomeDashboard;
