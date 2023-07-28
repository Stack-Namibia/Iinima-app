import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import logo from "../../assets/logo.svg";
import { Button as DaisyButton } from "./Button";
import { AvatarIcon } from "./AvatarIcon";

const pages = [
  { text: "How it works", to: "/howitworks" },
  { text: "List an item", to: "/item/list" },
  {
    text: "Browse Items",
    to: "/item/browse",
  },
];

const mobileMenu = [
  { text: "How it works", to: "/howitworks", useAuth: false },
  { text: "List an item", to: "/item/list", useAuth: false },

  {
    text: "Browse Items",
    to: "/item/browse",
    useAuth: false,
  },
  { text: "Login", to: "", useAuth: true, alternateText: "Logout" },
];
export const settings = [
  {
    text: "Profile",
    to: "/profile",
  },
  {
    text: "Logout",
    to: "/",
  },
];

function ResponsiveAppBar() {
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position='sticky'
      color='inherit'
      elevation={0}
      sx={{ borderBottom: 0.5, borderColor: "divider" }}
    >
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Box sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}>
            <Link to={"/"}>
              <img src={logo} alt='logo' className='logo w-[50%]' />
            </Link>
          </Box>
          <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size='large'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleOpenNavMenu}
              color='inherit'
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {mobileMenu.map(({ text, to, useAuth, alternateText }, i) => {
                if (useAuth && !isAuthenticated) {
                  return (
                    <MenuItem
                      onClick={() => {
                        handleCloseNavMenu();
                        loginWithRedirect();
                      }}
                      key={i}
                    >
                      {text}
                    </MenuItem>
                  );
                } else if (useAuth && isAuthenticated) {
                  return (
                    <MenuItem
                      onClick={() => {
                        handleCloseNavMenu();
                        logout();
                      }}
                      key={i}
                    >
                      {alternateText}
                    </MenuItem>
                  );
                }
                return (
                  <Link to={to} key={i}>
                    <MenuItem onClick={handleCloseNavMenu}>{text}</MenuItem>
                  </Link>
                );
              })}
            </Menu>
          </Box>
          {/* small screen logo */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              mr: 1,
              justifyContent: { xs: "center" },
            }}
          >
            <Link to='/'>
              <img src={logo} alt='logo' className='logo w-[115px]' />
            </Link>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              justifyContent: "right",
              display: { xs: "none", md: "flex" },
              marginRight: 5,
            }}
          >
            {pages.map(({ text, to }, i) => (
              <Link to={to} key={i}>
                <Button
                  key={text}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "black", display: "block" }}
                  className='hover:text-primary'
                >
                  {text}
                </Button>
              </Link>
            ))}
          </Box>
          {isAuthenticated ? (
            <AvatarIcon />
          ) : (
            <Box
              sx={{
                flexGrow: 1,
                justifyContent: "right",
                display: { xs: "none", md: "flex" },
                marginRight: 5,
              }}
            >
              <div>
                <DaisyButton
                  text='Login or Signup'
                  width='50%'
                  clickEvent={() => loginWithRedirect()}
                />
              </div>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
