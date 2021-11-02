import { IconButton, styled } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

const SidebarMenuItem = ({ title, items, icon: Icon }) => {
  return (
    <div>
      <ListTitle>{title}</ListTitle>
      <ListContainer>
        {items?.map(({ to, icon, label }, i) => (
          <ListItem key={i} activeClassName="nav-active" to={to}>
            <ListIcon>{icon}</ListIcon>
            {label}
          </ListItem>
        ))}
      </ListContainer>
    </div>
  );
};

const ListContainer = styled("div")(({ theme }) => ({
  // background:"yellow"
  margin: "0px",

  '.nav-active':{
    color: theme.palette.primary.main,
    background: theme.palette.primary.light,
    borderRight: "5px solid",
    borderRightColor: theme.palette.primary.main,
  }
}));

const ListTitle = styled("h4")(({ theme }) => ({
  fontSize: "22px",
  margin: "5px 30px",
  color: "rgba(0,0,0,0.6)",
}));

const ListItem = styled(NavLink)(({ theme }) => ({
  display: "block",
  padding: "12px",
  paddingLeft: "40px",
  fontSize: "18px",
  color: "#A8B1B9",
  margin: "0px",
  display: "flex",
  alignItems: "center",
  "&:hover": {
    color: theme.palette.primary.main,
    background: theme.palette.primary.light,
    borderRight: "5px solid",
    borderRightColor: theme.palette.primary.main,
    '.MuiIconButton-root':{
        color: theme.palette.primary.main,
    }
  },
  "&:active": {
    color: theme.palette.primary.main,
    background: theme.palette.primary.light,
    borderRight: "5px solid",
    borderRightColor: theme.palette.primary.main,
  },
}));

const ListIcon = styled(IconButton)(({ theme }) => ({
  fontSize: "16px",
  color: "#A8B1B9",
}));

export default SidebarMenuItem;
