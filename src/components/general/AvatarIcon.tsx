import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { useHistory } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { settings } from "./NavigationBar";

export const AvatarIcon = () => {
  const { logout, user } = useAuth0();
  const history = useHistory();

  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = (type: { text: string; to: string }) => {
    setAnchorElUser(null);
    if (type.text !== "Logout") {
      history.push(type.to);
    }
  };
  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title='Open settings'>
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar alt={user?.nickname} src={user?.picture} />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: "45px" }}
        id='menu-appbar'
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {settings.map(({ text, to }) => (
          <MenuItem
            key={text}
            onClick={() => {
              handleCloseUserMenu({ text, to });
              if (text === "Logout") {
                logout({ logoutParams: { returnTo: window.location.origin } });
              }
            }}
          >
            <Typography textAlign='center'>{text}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};
