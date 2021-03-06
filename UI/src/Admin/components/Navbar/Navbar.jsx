import * as React from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";

const MenuItemCustom = styled(MenuItem)((theme) => ({
  fontSize: "16px",
  padding: "5px 20px",
  paddingRight: "40px",
}));

export default function Navbar({ sidebarOpen, setSidebarOpen }) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      style={{
        // width: "200px",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItemCustom onClick={handleMenuClose}>
        <NavLink to="/admin/account">
          <IconButton>
            <PersonIcon />
          </IconButton>
          Profile
        </NavLink>
      </MenuItemCustom>
      <MenuItemCustom onClick={handleMenuClose}>
        <IconButton>
          <SettingsIcon />
        </IconButton>
        Settings
      </MenuItemCustom>
      <div
        style={{ display: "flex", justifyContent: "center", padding: "10px" }}
      >
        <Button style={{ flex: 1 }} variant="contained">
          Logout
        </Button>
      </div>
    </Menu>
  );
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppbarContainer position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ 
              mr: 2,
              transition: "all .3s ease",
              display: { sm: "block", md: "none" },
              transform: {sm: sidebarOpen?"translateX(280px)":""}
            }}
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <MenuIcon sx={{ fontSize: "30px" }} />
          </IconButton>
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            Dekut CC
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle sx={{ fontSize: "40px" }} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppbarContainer>
      {renderMenu}
    </Box>
  );
}

const AppbarContainer = styled(AppBar)(({ theme }) => ({
  backgroundColor: "#fff",
  boxShadow: "0px 2px 8px #eee",
  padding: "10px 0px",
  paddingRight: "40px",
  [theme.breakpoints.down("md")]: {
    paddingRight: "10px",
  },
}));
