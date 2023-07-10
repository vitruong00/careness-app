import React, { useState, useRef } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Logout, Settings, Login } from "@mui/icons-material";
import ListItemIcon from "@mui/material/ListItemIcon";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../store";
import { setUserInfo } from "../../../store/reducers/users";

const NavBar = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.users.userInfo);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isContextualMenuOpen = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onLogoutHandler = () => {
    handleClose();
    dispatch(setUserInfo({}));
  };

  return (
    console.log(user),
    (
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component={Link}
            to="/"
            align="left"
            sx={{ flexGrow: 1, textDecoration: "none" }}
            color="inherit"
          >
            Careness
          </Typography>
          {user.userId ? (
            <>
              <Avatar sx={{ width: 32, height: 32 }} onClick={handleClick}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls={
                    isContextualMenuOpen ? "account-menu" : undefined
                  }
                  aria-expanded={isContextualMenuOpen ? "true" : undefined}
                  aria-haspopup="true"
                  color="inherit"
                >
                  V
                </IconButton>
              </Avatar>
              <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={isContextualMenuOpen}
                onClose={handleClose}
                onClick={handleClose}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1.5,
                    "& .MuiAvatar-root": {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    "&:before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: "background.paper",
                      transform: "translateY(-50%) rotate(45deg)",
                      zIndex: 0,
                    },
                  },
                }}
              >
                <MenuItem onClick={handleClose}>
                  <Avatar /> Profile
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Avatar /> My account
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <Settings fontSize="small" />
                  </ListItemIcon>
                  Settings
                </MenuItem>
                <MenuItem onClick={onLogoutHandler}>
                  <ListItemIcon>
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  Logout
                </MenuItem>
              </Menu>
            </>
          ) : (
            <IconButton
              size="large"
              aria-label="account of current user"
              color="inherit"
              component={Link}
              to="/auth"
            >
              <Login fontSize="medium" />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
    )
  );
};

export default NavBar;
