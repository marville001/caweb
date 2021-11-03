import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";

import { NavLink, useHistory } from "react-router-dom";

const PageHeaderWithBreadCamp = ({ title }) => {
  const history = useHistory();

  const generateCrumb = () => {
    const paths = history.location.pathname.split("/");
    if (paths[paths.length - 1] === "") {
      paths.pop();
    }

    paths.shift();

    console.log({ paths });

    if (paths.length === 1) {
      return [
        <Typography key="3" color="text.primary">
          Dashboard
        </Typography>,
      ];
    } else {
      const crumbs = [
        <NavLink underline="hover" style={{ color: "gray" }} to="/admin">
          Dashboard
        </NavLink>,
      ];

      const last = paths[paths.length - 1]

      if (paths.length > 2) {
        paths.pop();
        paths.unshift();

        for (let p of paths) {
          crumbs.push(
            <NavLink underline="hover" style={{ color: "gray" }} to="/admin/">
              {p}
            </NavLink>
          );
        }
      }

      crumbs.push(
        <Typography key="3" color="text.primary">
          {last}
        </Typography>
      );
      return crumbs;
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
