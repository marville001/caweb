import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";

const PageHeaderWithBreadCamp = ({ action, title, crumbs, noaction }) => {
  return (
    <CompContainer>
      <div>
        <CompTitle>{title}</CompTitle>
        <Breadcrumbs separator="-" aria-label="breadcrumb">
          {crumbs}
        </Breadcrumbs>
      </div>
      {!noaction && (
        <div>
          {action ? (
            action()
          ) : (
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
          )}
        </div>
      )}
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
