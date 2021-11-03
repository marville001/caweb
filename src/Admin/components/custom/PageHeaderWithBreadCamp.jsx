import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";

const PageHeaderWithBreadCamp = () => {
  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/">
      MUI
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href="/getting-started/installation/"
    >
      Core
    </Link>,
    <Typography key="3" color="text.primary">
      Breadcrumb
    </Typography>,
  ];
  return (
    <CompContainer>
      <HeaderLeft>
        <CompTitle>User List</CompTitle>
        <Breadcrumbs separator="-" aria-label="breadcrumb">
          {breadcrumbs}
        </Breadcrumbs>
      </HeaderLeft>
      {/* <HeaderRight>
        <Button>Add User</Button>
      </HeaderRight> */}
    </CompContainer>
  );
};

const CompContainer = styled("div")(({ theme }) => ({
  display:"flex",
  justifyContent:"space-between",
  alignItems:"center"
}));

const CompTitle = styled("h3")(({ theme }) => ({
  marginBottom:"5px"
}));

const HeaderLeft = styled("h3")(({ theme }) => ({}));

const HeaderRight = styled("h3")(({ theme }) => ({}));

export default PageHeaderWithBreadCamp;
