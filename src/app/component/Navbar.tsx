import * as React from "react";
import { styled } from "@mui/material/styles";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import LightModeIcon from "@mui/icons-material/LightMode";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import { useDarkMode } from "../context/Darkmode";
import { theme } from "../utils/theme";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import Popover from "@mui/material/Popover";
import Image from "next/image";
const drawerWidth = 260;
interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

type props = {
  open: boolean;
  isSmallScreen: boolean;
  handleDrawerOpen: () => void;
};

const CustomAppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  border: "2px solid #94a3b8",
  borderRadius: "5px",
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing()})`,
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
  right: 0,
}));

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

const Navbar = ({ open, handleDrawerOpen, isSmallScreen }: props) => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const openPop = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <CustomAppBar
      position="fixed"
      open={open}
      sx={{
        backgroundColor: darkMode ? theme.darkmodeBg : theme.lightmodeBg,
        color: darkMode ? theme.darkmodeClr : theme.lightmodeClr,
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {(!isSmallScreen || (isSmallScreen && !open)) && (
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2 }}
            >
              <FormatAlignLeftIcon />
            </IconButton>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </div>
        )}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "22px",
            padding: "14px",
            cursor: "pointer",
          }}
        >
          {darkMode ? (
            <DarkModeIcon onClick={toggleDarkMode} />
          ) : (
            <LightModeIcon onClick={toggleDarkMode} />
          )}
          <NotificationsNoneIcon />
          <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            variant="dot"
          >
            <span onClick={handleClick}>
              <Avatar alt="Remy Sharp" src="chart.svg" />
            </span>
            <Popover
              id={id}
              open={openPop}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
            >
              <div
                className="dropdown-menu dropdown-menu-end show"
                style={{
                  backgroundColor: darkMode
                    ? theme.darkmodeBg
                    : theme.lightmodeBg,
                  color: darkMode ? theme.darkmodeClr : theme.lightmodeClr,
                }}
              >
                <div className="rounded p-4">
                  <div className="font-semibold">John E. Grainger</div>
                  <div className="text-xs pb-2 hover:text-blue-200 cursor-pointer">
                    View my profile
                  </div>
                  <hr className="pt-2" />
                  <ul
                    className="text-sm font-mono cursor-pointer"
                    style={{
                      filter: darkMode ? "brightness(0) invert(1)" : "",
                    }}
                  >
                    <li className="flex gap-3">
                      <Image
                        src="profile.svg"
                        alt="profile"
                        width={12}
                        height={12}
                      />{" "}
                      Edit Profile
                    </li>
                    <li className="flex gap-3">
                      <Image
                        src="activity.svg"
                        alt="activity"
                        width={12}
                        height={12}
                      />{" "}
                      Activity log
                    </li>
                    <li className="flex gap-3">
                      <Image
                        src="setting.svg"
                        alt="setting"
                        width={12}
                        height={12}
                      />{" "}
                      Settings
                    </li>
                    <li className="flex gap-3">
                      <Image
                        src="signout.svg"
                        alt="signout"
                        width={12}
                        height={12}
                      />{" "}
                      Sign Out
                    </li>
                  </ul>
                </div>
              </div>
            </Popover>
          </StyledBadge>
        </div>
      </Toolbar>
    </CustomAppBar>
  );
};

export default Navbar;
