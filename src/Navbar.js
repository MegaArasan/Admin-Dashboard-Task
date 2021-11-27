import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Badge from "@mui/material/Badge";
import EmailIcon from "@mui/icons-material/Email";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";
import undraw_profile from "./undraw_profile.svg";
import undraw_profile_1 from "./undraw_profile_1.svg";
import undraw_profile_2 from "./undraw_profile_2.svg";
import undraw_profile_3 from "./undraw_profile_3.svg";
import { drawerWidth } from "./App";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import SavingsIcon from "@mui/icons-material/Savings";
import WarningIcon from "@mui/icons-material/Warning";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import ListIcon from "@mui/icons-material/List";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import EmojiEmotionsRoundedIcon from "@mui/icons-material/EmojiEmotionsRounded";
import DashboardIcon from "@mui/icons-material/Dashboard";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import BuildIcon from "@mui/icons-material/Build";
import FolderIcon from "@mui/icons-material/Folder";
import StackedBarChartIcon from "@mui/icons-material/StackedBarChart";
import TableViewIcon from "@mui/icons-material/TableView";
import CloseIcon from "@mui/icons-material/Close";

export function Navbar() {
  const [show, setshow] = useState();
  const [showme, setshowme] = useState();
  const [showing, setshowing] = useState();
  const [anchor, setAnchor] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorE2, setAnchorE2] = useState(null);
  // for mobile Drawer
  const [opened, setopened] = useState(false);
  const handleDrawerOpen = () => {
    setopened(true);
  };
  const handleDrawerClose = () => {
    setopened(false);
  };
  // for search icon
  const click = (event) => {
    setAnchor(event.currentTarget);
  };
  const close = () => {
    setAnchor(null);
  };
  const sow = Boolean(anchor);
  // for alert mesage box
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  // for message alert box
  const handleClick1 = (event) => {
    setAnchorE2(event.currentTarget);
  };
  const handleClose1 = () => {
    setAnchorE2(null);
  };
  const open1 = Boolean(anchorE2);

  const [anchorE3, setAnchorE3] = useState(null);
  const open2 = Boolean(anchorE3);
  const handleClick2 = (event) => {
    setAnchorE3(event.currentTarget);
  };
  const handleClose2 = () => {
    setAnchorE3(null);
  };

  return (
    // app bar for the website
    <AppBar
      position="static"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)`, xs: `100%` },
        ml: { sm: `${drawerWidth}px`, xs: 0 },
        backgroundColor: "white",
      }}
    >
      <Toolbar variant="regular">
        <div className="menu-btn">
          <Button
            onClick={handleDrawerOpen}
            color="primary"
            aria-label="menuicon"
          >
            <MenuIcon />
          </Button>
          {/* making Mobile Drawer */}
          <Drawer
            sx={{
              width: "200px",
              height: "100%",
              flexShrink: 0,
              "& .MuiDrawer-paper": {
                width: "200px",
                height: "100%",
                boxSizing: "border-box",
                backgroundColor: "rgb(78,115,223)",
                color: "white",
              },
            }}
            anchor="left"
            open={opened}
          >
            {/* for closing swipable drawer  */}
            <IconButton
              color="inherit"
              aria-label="close"
              component="span"
              onClick={handleDrawerClose}
            >
              <CloseIcon />
            </IconButton>
            <Button
              variant="text"
              size="large"
              sx={{ color: "white", margin: "10px", fontSize: "1.5rem" }}
              startIcon={<EmojiEmotionsRoundedIcon />}
            >
              SB ADMIN <sup>2</sup>
            </Button>
            <Divider />
            <Button
              variant="text"
              sx={{
                color: "white",
                margin: 0,
                padding: "16px",
                fontSize: "12px",
                justifyContent: "flex-start",
              }}
              startIcon={<DashboardIcon />}
            >
              Dashboard
            </Button>
            <Divider />
            <Typography
              variant="heading"
              sx={{ textAlign: "left", padding: "6px", fontSize: "12px" }}
            >
              INTERFACE
            </Typography>
            <Button
              onClick={() => setshow(!show)}
              variant="text"
              sx={{
                color: "white",
                margin: 0,
                padding: "16px",
                fontSize: "12px",
                justifyContent: "flex-start",
              }}
              startIcon={<SettingsIcon />}
            >
              Components
              {!show ? (
                <KeyboardArrowRightIcon sx={{ marginLeft: "auto" }} />
              ) : (
                <KeyboardArrowDownIcon sx={{ marginLeft: "auto" }} />
              )}
            </Button>
            {show ? (
              <div style={{ backgroundColor: "white" }}>
                <Typography
                  variant="heading"
                  sx={{
                    textAlign: "left",
                    padding: "6px",
                    fontSize: "12px",
                    display: "block",
                    color: "black",
                  }}
                >
                  CUSTOM COMPONENTS:
                </Typography>
                <Button
                  variant="text"
                  sx={{
                    padding: ".5rem 1rem",
                    margin: "0 .5rem",
                    display: "block",
                    color: "black",
                  }}
                >
                  Buttons
                </Button>

                <Button
                  variant="text"
                  sx={{
                    padding: ".5rem 1rem",
                    margin: "0 .5rem",
                    display: "block",
                    color: "black",
                  }}
                >
                  Cards
                </Button>
              </div>
            ) : (
              ""
            )}

            <Button
              onClick={() => setshowme(!showme)}
              variant="text"
              sx={{
                color: "white",
                margin: 0,
                padding: "16px",
                fontSize: "12px",
                justifyContent: "flex-start",
              }}
              startIcon={<BuildIcon />}
            >
              Utilities
              {!showme ? (
                <KeyboardArrowRightIcon sx={{ marginLeft: "auto" }} />
              ) : (
                <KeyboardArrowDownIcon sx={{ marginLeft: "auto" }} />
              )}
            </Button>
            {showme ? (
              <div style={{ backgroundColor: "white" }}>
                <Typography
                  variant="heading"
                  sx={{
                    textAlign: "left",
                    padding: "6px",
                    fontSize: "12px",
                    display: "block",
                    color: "black",
                  }}
                >
                  CUSTOM UTILITIES:
                </Typography>
                <Button
                  variant="text"
                  sx={{
                    padding: ".5rem 1rem",
                    margin: "0 .5rem",
                    display: "block",
                    color: "black",
                  }}
                >
                  Colors
                </Button>

                <Button
                  variant="text"
                  sx={{
                    padding: ".5rem 1rem",
                    margin: "0 .5rem",
                    display: "block",
                    color: "black",
                  }}
                >
                  Borders
                </Button>
                <Button
                  variant="text"
                  sx={{
                    padding: ".5rem 1rem",
                    margin: "0 .5rem",
                    display: "block",
                    color: "black",
                  }}
                >
                  Animations
                </Button>
                <Button
                  variant="text"
                  sx={{
                    padding: ".5rem 1rem",
                    margin: "0 .5rem",
                    display: "block",
                    color: "black",
                  }}
                >
                  Other
                </Button>
              </div>
            ) : (
              ""
            )}
            <Divider />
            <Typography
              variant="heading"
              sx={{ textAlign: "left", padding: "6px", fontSize: "12px" }}
            >
              ADDONS
            </Typography>
            <Button
              onClick={() => setshowing(!showing)}
              variant="text"
              sx={{
                color: "white",
                margin: 0,
                padding: "16px",
                fontSize: "12px",
                justifyContent: "flex-start",
              }}
              startIcon={<FolderIcon />}
            >
              Pages
              {!showing ? (
                <KeyboardArrowRightIcon sx={{ marginLeft: "auto" }} />
              ) : (
                <KeyboardArrowDownIcon sx={{ marginLeft: "auto" }} />
              )}
            </Button>
            {showing ? (
              <div style={{ backgroundColor: "white" }}>
                <Typography
                  variant="heading"
                  sx={{
                    textAlign: "left",
                    padding: "6px",
                    fontSize: "12px",
                    display: "block",
                    color: "black",
                  }}
                >
                  LOGIN SCREEN:
                </Typography>
                <Button
                  variant="text"
                  sx={{
                    padding: ".5rem 1rem",
                    margin: "0 .5rem",
                    display: "block",
                    color: "black",
                  }}
                >
                  Login
                </Button>

                <Button
                  variant="text"
                  sx={{
                    padding: ".5rem 1rem",
                    margin: "0 .5rem",
                    display: "block",
                    color: "black",
                  }}
                >
                  Register
                </Button>
                <Button
                  variant="text"
                  sx={{
                    padding: ".5rem 1rem",
                    margin: "0 .5rem",
                    display: "block",
                    color: "black",
                  }}
                >
                  Forget Password
                </Button>
                <Typography
                  variant="heading"
                  sx={{
                    textAlign: "left",
                    padding: "6px",
                    fontSize: "12px",
                    display: "block",
                    color: "black",
                  }}
                >
                  OTHER PAGES:
                </Typography>
                <Button
                  variant="text"
                  sx={{
                    padding: ".5rem 1rem",
                    margin: "0 .5rem",
                    display: "block",
                    color: "black",
                  }}
                >
                  404 page
                </Button>
                <Button
                  variant="text"
                  sx={{
                    padding: ".5rem 1rem",
                    margin: "0 .5rem",
                    display: "block",
                    color: "black",
                  }}
                >
                  Blank page
                </Button>
              </div>
            ) : (
              ""
            )}
            <Button
              variant="text"
              sx={{
                color: "white",
                margin: 0,
                padding: "16px",
                fontSize: "12px",
                justifyContent: "flex-start",
              }}
              startIcon={<StackedBarChartIcon />}
            >
              Charts
            </Button>
            <Button
              variant="text"
              sx={{
                color: "white",
                margin: 0,
                padding: "16px",
                fontSize: "12px",
                justifyContent: "flex-start",
              }}
              startIcon={<TableViewIcon />}
            >
              Tables
            </Button>
            <Divider />
            <IconButton
              sx={{
                color: "white",
                padding: "20px",
                backgroundColor: "rgba(255,255,255,.10)",
                width: "3rem",
                height: "3rem",
                marginLeft: "5rem",
                marginTop: "1rem",
                marginBottom: "1rem",
              }}
              aria-label="keyboard arrow"
              component="span"
            >
              <KeyboardArrowRightIcon />
            </IconButton>
          </Drawer>
        </div>
        <InputBase
          sx={{
            display: { xs: "none", sm: "block" },
            backgroundColor: "rgb(248 249 252)",
            flex: 0.3,
            borderRadius: "5px",
          }}
          placeholder="Search for ..."
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          aria-label="search"
          sx={{ display: { xs: "none", sm: "block" } }}
        >
          <SearchIcon />
        </Button>
        <div
          style={{
            marginLeft: "auto",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <IconButton
            onClick={click}
            sx={{ display: { xs: "block", sm: "none" } }}
          >
            <SearchIcon />
          </IconButton>
          {/* popover for the search bar responsive */}
          <Popover
            open={sow}
            anchorEl={anchor}
            onClose={close}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
          >
            <Box
              component="Form"
              sx={{ backgroundColor: "white", width: `calc(100%-1.3rem)` }}
            >
              <InputBase
                sx={{
                  backgroundColor: "rgb(248 249 252)",
                  borderRadius: "5px",
                }}
                placeholder="Search for ..."
              />
              <Button
                variant="contained"
                color="primary"
                type="submit"
                aria-label="search"
              >
                <SearchIcon />
              </Button>
            </Box>
          </Popover>
          {/* message box */}
          <IconButton onClick={handleClick}>
            <Badge
              sx={{
                "& .MuiBadge-badge": {
                  color: "white",
                  backgroundColor: "rgb(231 74 59)",
                },
              }}
              badgeContent={5}
              max={3}
            >
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <Popover
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
          >
            <div
              style={{
                backgroundColor: "rgb(78 115 223)",
                color: "white",
                height: "40px",
                display: " flex",
                alignItems: "center",
                padding: "5px",
              }}
            >
              <Typography variant="heading">ALERT CENTER</Typography>
            </div>
            <Button color="inherit" sx={{ width: "320px" }}>
              <div
                style={{
                  height: "2.5rem",
                  width: " 2.5rem",
                  borderRadius: " 100%",
                  backgroundColor: "rgb(78 115 223)",
                  display: " flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <InsertDriveFileIcon sx={{ color: "white" }} />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "270px",
                  alignItems: "flex-start",
                }}
              >
                <Typography
                  variant="header"
                  sx={{ color: "gray", textTransform: "none" }}
                >
                  December7,2019
                </Typography>
                <Typography
                  variant="p"
                  sx={{ fontWeight: "700", textTransform: "none" }}
                >
                  A new monthly report is reay to download.
                </Typography>
              </div>
            </Button>
            <br />
            <Button color="inherit" sx={{ width: "320px" }}>
              <div
                style={{
                  height: "2.5rem",
                  width: " 2.5rem",
                  borderRadius: " 100%",
                  backgroundColor: "rgb(28 200 138)",
                  display: " flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <SavingsIcon sx={{ color: "white" }} />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "270px",
                  alignItems: "flex-start",
                }}
              >
                <Typography
                  variant="header"
                  sx={{ color: "gray", textTransform: "none" }}
                >
                  December12,2019
                </Typography>
                <Typography
                  variant="p"
                  sx={{ fontWeight: "700", textTransform: "none" }}
                >
                  $290.29 has been deposited into your account!
                </Typography>
              </div>
            </Button>
            <br />
            <Button color="inherit" sx={{ width: "320px" }}>
              <div
                style={{
                  height: "2.5rem",
                  width: " 2.5rem",
                  borderRadius: " 100%",
                  backgroundColor: "rgb(246 194 62)",
                  display: " flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <WarningIcon sx={{ color: "white" }} />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "270px",
                  alignItems: "flex-start",
                  borderBottom: "1 px rgb(227 230 240)",
                }}
              >
                <Typography
                  variant="header"
                  sx={{ color: "gray", textTransform: "none" }}
                >
                  December12,2019
                </Typography>
                <Typography
                  variant="p"
                  sx={{ fontWeight: "700", textTransform: "none" }}
                >
                  Spending Alert: We've noticed unusually high spending for your
                  account.
                </Typography>
              </div>
            </Button>
            <br />
            <Button sx={{ width: "320px" }}>Show All Alerts</Button>
          </Popover>
          <IconButton onClick={handleClick1} sx={{ margin: "10px" }}>
            <Badge
              sx={{
                "& .MuiBadge-badge": {
                  color: "white",
                  backgroundColor: "rgb(231 74 59)",
                },
              }}
              badgeContent={7}
            >
              <EmailIcon />
            </Badge>
          </IconButton>
          <Popover
            open={open1}
            anchorEl={anchorE2}
            onClose={handleClose1}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
          >
            <div
              style={{
                backgroundColor: "rgb(78 115 223)",
                color: "white",
                height: "40px",
                display: " flex",
                alignItems: "center",
                padding: "5px",
              }}
            >
              <Typography variant="heading">MESSAGE CENTER</Typography>
            </div>
            <Button color="inherit" sx={{ width: "320px", padding: "0" }}>
              <div className="avatar">
                <Badge
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                  variant="dot"
                  color="success"
                >
                  <Avatar alt="Remy Sharp" src={undraw_profile_1} />
                </Badge>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "270px",
                  alignItems: "flex-start",
                }}
              >
                <Typography
                  variant="p"
                  sx={{ fontWeight: "500", textTransform: "none" }}
                  noWrap="true"
                >
                  Hi there! I am wondering if you can help me with a problem
                  I've been having.
                </Typography>
                <Typography variant="p" color="gray" sx={{ fontSize: "10px" }}>
                  Emily Fowler · 58m
                </Typography>
              </div>
            </Button>
            <br />
            <Button color="inherit" sx={{ width: "320px", padding: "0" }}>
              <div className="avatar">
                <Badge
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                  color="secondary"
                  variant="dot"
                >
                  <Avatar alt="Remy Sharp" src={undraw_profile_2} />
                </Badge>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "270px",
                  alignItems: "flex-start",
                }}
              >
                <Typography
                  variant="p"
                  sx={{ textTransform: "none" }}
                  noWrap="true"
                >
                  I have the photos that you ordered last month, how would you
                  like them sent to you?
                </Typography>
                <Typography variant="p" color="gray" sx={{ fontSize: "10px" }}>
                  Jae Chun · 1d
                </Typography>
              </div>
            </Button>
            <br />
            <Button color="inherit" sx={{ width: "320px", padding: "0" }}>
              <div className="avatar">
                <Badge
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                  color="secondary"
                  variant="dot"
                >
                  <Avatar alt="Remy Sharp" src={undraw_profile_3} />
                </Badge>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "270px",
                  alignItems: "flex-start",
                }}
              >
                <Typography
                  variant="p"
                  sx={{ textTransform: "none" }}
                  noWrap="true"
                >
                  Last month's report looks great, I am very happy with the
                  progress so far, keep up the good work!
                </Typography>
                <Typography variant="p" color="gray" sx={{ fontSize: "10px" }}>
                  Morgan Alvarez · 2d
                </Typography>
              </div>
            </Button>
            <br />
            <Button color="inherit" sx={{ width: "320px", padding: "0" }}>
              <div className="avatar">
                <Badge
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                  variant="dot"
                  color="success"
                >
                  <Avatar alt="Remy Sharp" src={undraw_profile} />
                </Badge>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "270px",
                  alignItems: "flex-start",
                }}
              >
                <Typography
                  variant="p"
                  sx={{ textTransform: "none" }}
                  noWrap="true"
                >
                  Am I a good boy? The reason I ask is because someone told me
                  that people say this to all dogs, even if they aren't good...
                </Typography>
                <Typography variant="p" color="gray" sx={{ fontSize: "10px" }}>
                  Chicken the Dog · 2w
                </Typography>
              </div>
            </Button>
            <br />
            <Button sx={{ width: "320px" }}>Read more Messages</Button>
          </Popover>
          <Divider orientation="vertical" flexItem />
          <Button onClick={handleClick2} variant="text" sx={{ margin: "10px" }}>
            <Typography className="name" variant="p">
              {" "}
              Mega Arasan
            </Typography>
            <Avatar alt="Mega Arasan" src={undraw_profile} />
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorE3}
            open={open2}
            onClose={handleClose2}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose2}>
              <PersonIcon sx={{ color: "gray" }} />
              Profile
            </MenuItem>
            <MenuItem onClick={handleClose2}>
              <SettingsIcon sx={{ color: "gray" }} />
              Settings
            </MenuItem>
            <MenuItem onClick={handleClose2}>
              <ListIcon sx={{ color: "gray" }} />
              Activity Log
            </MenuItem>
            <Divider />
            <MenuItem onClick={handleClose2}>
              <LogoutIcon sx={{ color: "gray" }} />
              Logout
            </MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
}
