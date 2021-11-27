import Drawer from "@mui/material/Drawer";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import EmojiEmotionsRoundedIcon from "@mui/icons-material/EmojiEmotionsRounded";
import DashboardIcon from "@mui/icons-material/Dashboard";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SettingsIcon from "@mui/icons-material/Settings";
import BuildIcon from "@mui/icons-material/Build";
import FolderIcon from "@mui/icons-material/Folder";
import StackedBarChartIcon from "@mui/icons-material/StackedBarChart";
import TableViewIcon from "@mui/icons-material/TableView";
import IconButton from "@mui/material/IconButton";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { CardMedia } from "@mui/material";
import { drawerWidth } from "./App";
import undraw_rocket from "./undraw_rocket.svg";
import Box from "@mui/material/Box";

export function Sidebar() {
  const [show, setshow] = useState();
  const [showme, setshowme] = useState();
  const [showing, setshowing] = useState();

  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth, xs: 0 }, flexShrink: { sm: 0 } }}
      aria-label="mailbox folders"
    >
      {/* drawer for laptop view */}
      <Drawer
        sx={{
          width: { sm: drawerWidth },
          height: "100%",
          overflow: "auto",
          flexShrink: 0,
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            height: "100%",
            boxSizing: "border-box",
            backgroundColor: "rgb(78,115,223)",
            color: "white",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Button
          variant="text"
          size="large"
          sx={{ color: "white", margin: "10px", fontSize: "1.5rem" }}
          startIcon={<EmojiEmotionsRoundedIcon />}
        >
          SB ADMIN <sup>2</sup>
        </Button>
        <Divider />
        {/* dashboard button */}
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
        {/* making popover for the button */}
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
        {/* making for popover */}
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
        {/* subscripe card for subscribing */}
        <Card
          sx={{
            maxWidth: 220,
            backgroundColor: "rgba(0,0,0,.1)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <CardMedia
            component="img"
            sx={{ width: "4rem", padding: "10px", height: "4rem" }}
            image={undraw_rocket}
            alt="undraw_rocket"
          />
          <CardContent>
            <Typography gutterBottom variant="p" component="div">
              SB Admin Pro is packed with premium features, components, and
              more!
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant="contained" color="success">
              Upgrade to PRO
            </Button>
          </CardActions>
        </Card>
      </Drawer>
    </Box>
  );
}
