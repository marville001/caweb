import { Button, Grid, Paper, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";
import { NavLink } from "react-router-dom";
import { MainContainer } from "../../components/custom/StyledComponents";
import { BarChart, Group } from "@mui/icons-material";

import { Users, Activity } from "react-feather";
import UsersDoughnut from "../../components/homedashboard/UsersDoughnut";

const HomeDashboard = () => {
  return (
    <MainContainer>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <LeftTopCard>
            <h1>Welcome Back</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed et
              saepe dignissimos!
            </p>
            <Button variant="contained">View Logs</Button>
          </LeftTopCard>
        </Grid>
        <Grid item xs={12} md={4}>
          <RightTopCard>
            <h1>Quick Action</h1>
            <ul>
              {[1,2,3,4].map(n=>(
                <li key={n}>
                <NavLink
                  style={{ 
                    display: "flex", 
                    alignItems: "center" 
                  }}
                  to="/admin"
                >
                  {n===2?<> <Activity size={16} style={{marginRight:"5px"}} /> View Events </> :
                  <><Users size={16} style={{marginRight:"5px"}} /> View Users </>}
                </NavLink>
              </li>
              ))}
            </ul>
          </RightTopCard>
        </Grid>
      </Grid>
      <div style={{ margin: "30px 0px" }} />
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={4}>
          <DashCard>
            <h3>Total Users</h3>
            <div className="count-card">
              <div className="left-part">
                <Group />
                <h2>24,556</h2>
              </div>
              <div className="right-part">
                <BarChart style={{ fontSize: "60px", color:"#50ac56" }} />
              </div>
            </div>
          </DashCard>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <DashCard>
            <h3>Total Events</h3>
            <div className="count-card">
              <div className="left-part">
                <Group />
                <h2>24,556</h2>
              </div>
              <div className="right-part">
                <BarChart style={{ fontSize: "60px", color:"#50ac56" }} />
              </div>
            </div>
          </DashCard>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <DashCard>
            <h3>Total XYZ</h3>
            <div className="count-card">
              <div className="left-part">
                <Group />
                <h2>24,556</h2>
              </div>
              <div className="right-part">
                <BarChart style={{ fontSize: "60px", color:"#50ac56" }} />
              </div>
            </div>
          </DashCard>
        </Grid>
      </Grid>
      <div style={{ margin: "30px 0px" }} />
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <GraphCard>
            <UsersDoughnut />
          </GraphCard>
        </Grid>
        <Grid item xs={12} md={6}>
          <GraphCard>Graph Two</GraphCard>
        </Grid>
      </Grid>
    </MainContainer>
  );
};

const LeftTopCard = styled(Paper)(({ theme }) => ({
  padding: "20px 40px",
  marginTop: "20px",
  minHeight: "150px",
  background: theme.palette.primary.light,
  p: {
    fontSize: "14px",
    margin: "15px 0px",
    color: "rgba(0,0,0,0.8)",
  },
}));

const RightTopCard = styled(Paper)(({ theme }) => ({
  padding: "20px",
  marginTop: "20px",
  minHeight: "150px",
  [theme.breakpoints.down("md")]: {
    padding: "20px 40px",
  },
  h1: {
    marginBottom: "10px",
  },

  ul: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    li: {
      marginBottom: "10px",
      a: {
        fontSize: "14px",
        marginTop: "10px 0px",
        // textDecoration: "underline",
        letterSpacing: "2px",
        color: theme.palette.primary.dark,
      },
    },
  },
}));

const DashCard = styled(Paper)(({ theme }) => ({
  padding: "20px",
  minHeight: "120px",
  ".count-card": {
    marginTop:"15px",
    display: "flex",
    justifyContent: "space-between",
    paddingRight: "30px",
  },
}));

const GraphCard = styled(Box)(({ theme }) => ({
  // padding: "20px",
  minHeight: "200px",
}));

export default HomeDashboard;
