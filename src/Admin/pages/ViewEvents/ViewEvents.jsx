import { Button, Typography, Box, Grid, Pagination } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import PageHeaderWithBreadCamp from "../../components/custom/PageHeaderWithBreadCamp";
import { MainContainer } from "../../components/custom/StyledComponents";
import EventListingToolBar from "../../components/events/EventListingToolbar";
import products from '../../__mocks__/products';
import EventCard from '../../components/events/EventCard'
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
      <Box sx={{ pt: 3 }}>
          <Grid
            container
            spacing={3}
          >
            {products.map((product) => (
              <Grid
                item
                key={product.id}
                lg={4}
                md={6}
                xs={12}
              >
                <EventCard product={product} />
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            pt: 3
          }}
        >
          <Pagination
            color="primary"
            count={3}
            size="small"
          />
        </Box>
    </MainContainer>
  );
};

export default ViewEvents;
