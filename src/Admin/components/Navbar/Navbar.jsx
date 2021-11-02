import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";

const MenuItemCustom = styled(MenuItem)((theme) => ({
  fontSize: "16px",
  padding: "5px 20px",
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
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItemCustom onClick={handleMenuClose}>Profile</MenuItemCustom>
      <MenuItemCustom onClick={handleMenuClose}>Settings</MenuItemCustom>
      <MenuItemCustom onClick={handleMenuClose}>My account</MenuItemCustom>
      <MenuItemCustom onClick={handleMenuClose}>Logout</MenuItemCustom>
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
            sx={{ mr: 2, display: { sm: "block", md: "none" } }}
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
