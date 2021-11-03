import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";

import { useHistory } from "react-router-dom";

const PageHeaderWithBreadCamp = ({ title }) => {
  const history = useHistory();

  const generateCrumb = () => {
    const paths = history.location.pathname.split("/");
    if(paths[paths.length - 1] === ""){
      paths.pop();
    }
    paths.shift();

    console.log({paths});

    if (paths.length === 1) {
      return [
        <Typography key="3" color="text.primary">
          Dashboard
        </Typography>,
      ];
    }else {
      return [
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
      ]
    }
  };
  generateCrumb();
  
  return (
    <CompContainer>
      <div>
        <CompTitle>{title}</CompTitle>
        <Breadcrumbs separator="-" aria-label="breadcrumb">
          {generateCrumb()}
        </Breadcrumbs>
      </div>
      <div>
        <Button
          style={{
            marginRight: "20px",
            fontSize: "14px",
            padding: "5px 25px",
          }}
          variant="contained"
        >
          Add User
        </Button>
      </div>
    </CompContainer>
  );
};

const CompContainer = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

const CompTitle = styled("h3")(({ theme }) => ({
  marginBottom: "5px",
  fontSize: "20px",
  [theme.breakpoints.up("md")]: {
    fontSize: "24px",
    marginBottom: "10px",
  },
}));
export default PageHeaderWithBreadCamp;
