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

import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { Link } from "react-router-dom";
import { Avatar } from "@mui/material";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import { logoutUser } from "./services/api";
import { useTranslation } from 'react-i18next'
import { Trans, withTranslation } from 'react-i18next';

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),

    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const AppTopBar = ({ login }) => {
  const [anchorEl, setAnchorEl] = React.useState();
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const { t } = useTranslation();
  console.log(t('title'))
  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: "green",
      },
      children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
    };
  }

  // handle login

  const handleLogout = async () => {
    const res = await logoutUser();
    if (res.success) {
      alert(res?.message);
      localStorage.clear("user");
    }
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
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  //   const renderMobileMenu = (
  //     <Menu
  //       anchorEl={mobileMoreAnchorEl}
  //       anchorOrigin={{
  //         vertical: 'top',
  //         horizontal: 'right',
  //       }}
  //       id={mobileMenuId}
  //       keepMounted
  //       transformOrigin={{
  //         vertical: 'top',
  //         horizontal: 'right',
  //       }}
  //       open={isMobileMenuOpen}
  //       onClose={handleMobileMenuClose}
  //     >
  //       <MenuItem>
  //         <IconButton size="large" aria-label="show 4 new mails" color="inherit">
  //           <Badge badgeContent={4} color="error">
  //             <MailIcon />
  //           </Badge>
  //         </IconButton>
  //         <p>Signup</p>
  //       </MenuItem>
  //       <MenuItem>
  //         <IconButton size="large" aria-label="show 4 new mails" color="inherit">
  //           <Badge badgeContent={4} color="error">
  //             <MailIcon />
  //           </Badge>
  //         </IconButton>
  //         <p>Messages</p>
  //       </MenuItem>
  //       <MenuItem>
  //         <IconButton
  //           size="large"
  //           aria-label="show 17 new notifications"
  //           color="inherit"
  //         >
  //           <Badge badgeContent={17} color="error">
  //             <NotificationsIcon />
  //           </Badge>
  //         </IconButton>
  //         <p>Notifications</p>
  //       </MenuItem>
  //       <MenuItem onClick={handleProfileMenuOpen}>
  //         <IconButton
  //           size="large"
  //           aria-label="account of current user"
  //           aria-controls="primary-search-account-menu"
  //           aria-haspopup="true"
  //           color="inherit"
  //         >
  //           <AccountCircle />
  //         </IconButton>
  //         <p>Profile</p>
  //       </MenuItem>
  //     </Menu>
  //   );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
         <Trans>Liberin LMS</Trans>
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          {/*  registration  */}

         
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
{
  !login &&    <Link
  to="/signup"
  style={{ textDecoration: "none", color: "inherit" }}
>
  <IconButton
    size="large"
    aria-label="show 4 new mails"
    color="inherit"
  >
    <ExitToAppIcon />
  </IconButton>
</Link>
}

         
            {login &&  <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
              onClick={handleLogout}
            >
              <PowerSettingsNewIcon />
            </IconButton>}

           

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
            {/* <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            > */}
            {/* <AccountCircle /> */}
            {login &&   <Avatar
              sx={{ width: 10, height: 10 }}
              {...stringAvatar(`MR SHOAIB`)}
            /> }
          
            
          </Box>

          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* {renderMobileMenu} */}
      {/* {renderMenu} */}
    </Box>
  );
};

export default  withTranslation()(AppTopBar)
