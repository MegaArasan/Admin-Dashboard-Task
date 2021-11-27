import React from "react";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import Card from "@mui/material/Card";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import LinearProgress from "@mui/material/LinearProgress";
import AssignmentIcon from "@mui/icons-material/Assignment";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Divider from "@mui/material/Divider";
import { Earningchart } from "./Earningchart";
import { Revenuechart } from "./Revenuechart";
import undraw_posting_photo from "./undraw_posting_photo.svg";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { drawerWidth } from "./App";
import Box from "@mui/material/Box";

export function Bodycontent() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)`, xs: `100%` },
        ml: { sm: `${drawerWidth}px`, xs: 0 },
        backgroundColor: "#f2f2f6",
      }}
    >
      {/* top head */}
      <div className="bodyhead">
        <Typography variant="h5">Dashboard</Typography>
        <Button
          variant="contained"
          startIcon={<FileDownloadIcon />}
          sx={{
            display: { xs: "none" },
            textTransform: "none",
            marginLeft: "auto",
          }}
        >
          Generate Report
        </Button>
      </div>
      {/* making 4 types of cards */}
      <div className="topcard">
        <Card
          sx={{
            maxWidth: "auto",
            borderLeft: "5px solid #4e73df",
            margin: "12px",
          }}
        >
          <div className="cardcontent">
            <div style={{ padding: "10px" }}>
              <Typography color="#4e73df" variant="caption">
                EARNINGS(MONTHLY)
              </Typography>
              <Typography variant="h6">$40,000</Typography>
            </div>
            <CalendarTodayIcon
              fontSize="large"
              sx={{ color: "rgb(221 223 235)", marginLeft: "auto" }}
            />
          </div>
        </Card>
        <Card
          sx={{
            maxWidth: "auto",
            borderLeft: "5px solid #1cc88a",
            margin: "12px",
          }}
        >
          <div className="cardcontent">
            <div style={{ padding: "10px" }}>
              <Typography color="#1cc88a" variant="caption">
                EARNINGS(ANNUAL)
              </Typography>
              <Typography variant="h6">$215,000</Typography>
            </div>
            <AttachMoneyIcon
              fontSize="large"
              sx={{ color: "rgb(221 223 235)" }}
            />
          </div>
        </Card>
        <Card
          sx={{
            maxWidth: "auto",
            borderLeft: "5px solid #36b9cc",
            margin: "12px",
          }}
        >
          <div className="cardcontent">
            <div style={{ padding: "10px" }}>
              <Typography color="#36b9cc" variant="caption">
                TASKS
              </Typography>
              <div style={{ width: "120px" }}>
                <Typography variant="h6">50%</Typography>
                <LinearProgress
                  color="inherit"
                  variant="determinate"
                  value={50}
                />
              </div>
            </div>
            <AssignmentIcon
              fontSize="large"
              sx={{ color: "rgb(221 223 235)" }}
            />
          </div>
        </Card>
        <Card
          sx={{
            maxWidth: "auto",
            borderLeft: "5px solid #f6c23e",
            margin: "12px",
          }}
        >
          <div className="cardcontent">
            <div style={{ padding: "10px" }}>
              <Typography color="#f6c23e" variant="caption">
                PENDING REQUEST
              </Typography>
              <Typography variant="h6">18</Typography>
            </div>
            <ContactSupportIcon
              fontSize="large"
              sx={{ color: "rgb(221 223 235)" }}
            />
          </div>
        </Card>
      </div>
      {/* making charts */}
      <div className="charts">
        <div className="card">
          <div className="cardhead">
            <Typography color="primary">Earnings overview</Typography>
            <IconButton
              aria-expanded={open ? "true" : undefined}
              aria-haspopup="true"
              onClick={handleClick}
            >
              <MoreVertIcon />
            </IconButton>
            <Menu
              id="long-menu"
              MenuListProps={{
                "aria-labelledby": "long-button",
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
            >
              <Typography variant="p" sx={{ fontSize: "10px", color: "gray" }}>
                DROPDOWN HEADER
              </Typography>
              <MenuItem onClick={handleClose}>Action</MenuItem>
              <MenuItem onClick={handleClose}>Another Action</MenuItem>
              <Divider />
              <MenuItem onClick={handleClose}>something else here</MenuItem>
            </Menu>
          </div>
          {/* line chart */}
          <Earningchart />
        </div>
        <div className="card1">
          <div className="cardhead">
            <Typography color="primary">Revenue Sources</Typography>
            <IconButton
              aria-expanded={open ? "true" : undefined}
              aria-haspopup="true"
              onClick={handleClick}
            >
              <MoreVertIcon />
            </IconButton>
            <Menu
              id="long-menu"
              MenuListProps={{
                "aria-labelledby": "long-button",
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
            >
              <Typography variant="p" sx={{ fontSize: "10px", color: "gray" }}>
                DROPDOWN HEADER
              </Typography>
              <MenuItem onClick={handleClose}>Action</MenuItem>
              <MenuItem onClick={handleClose}>Another Action</MenuItem>
              <Divider />
              <MenuItem onClick={handleClose}>something else here</MenuItem>
            </Menu>
          </div>
          {/* pie chart */}
          <Revenuechart />
        </div>
      </div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          p: 1,
          m: 1,
        }}
      >
        {/* making colorbox and progress bar */}
        <div
          className="procolor"
          style={{
            display: "flex",
            flexDirection: "column",
            width: "500Px",
          }}
        >
          <div className="progressbar">
            <div className="cardhead1">
              <Typography color="primary">Projects</Typography>
            </div>
            <div className="progressbody">
              <div className="progress">
                <Typography>Server Migration</Typography>
                <Typography>20%</Typography>
              </div>
              <LinearProgress
                variant="determinate"
                value={20}
                style={{ height: "15px", borderRadius: "5px" }}
                color="inherit"
              />
              <div className="progress1">
                <Typography>Sales Tracking</Typography>
                <Typography>40%</Typography>
              </div>
              <LinearProgress
                variant="determinate"
                value={40}
                color="warning"
                style={{ height: "15px", borderRadius: "5px" }}
              />
              <div className="progress2">
                <Typography>Customer Database</Typography>
                <Typography>60%</Typography>
              </div>
              <LinearProgress
                variant="determinate"
                value={60}
                style={{ height: "15px", borderRadius: "5px" }}
                color="secondary"
              />
              <div className="progress3">
                <Typography>Payout Details</Typography>
                <Typography>80%</Typography>
              </div>
              <LinearProgress
                variant="determinate"
                value={80}
                color="primary"
                style={{ height: "15px", borderRadius: "5px" }}
              />
              <div className="progress4">
                <Typography>Account Setup</Typography>
                <Typography>completed!</Typography>
              </div>
              <LinearProgress
                variant="determinate"
                value={100}
                color="success"
                style={{ height: "15px", borderRadius: "5px" }}
              />
            </div>
          </div>
          {/* colorbox making */}
          <div className="colorboxes">
            <div className="colorbox">
              <Typography variant="h6" sx={{ fontSize: "15px" }}>
                Primary
              </Typography>
              <Typography variant="p">#4e73df</Typography>
            </div>
            <div className="colorbox1">
              <Typography variant="h6" sx={{ fontSize: "15px" }}>
                Success
              </Typography>
              <Typography variant="p">#1cc88a</Typography>
            </div>
            <div className="colorbox2">
              <Typography variant="h6" sx={{ fontSize: "15px" }}>
                Info
              </Typography>
              <Typography variant="p">#36b9cc</Typography>
            </div>
            <div className="colorbox3">
              <Typography variant="h6" sx={{ fontSize: "15px" }}>
                Warning
              </Typography>
              <Typography variant="p">#f6c23e</Typography>
            </div>
            <div className="colorbox4">
              <Typography variant="h6" sx={{ fontSize: "15px" }}>
                Danger
              </Typography>
              <Typography variant="p">#e74a3b</Typography>
            </div>
            <div className="colorbox5">
              <Typography variant="h6" sx={{ fontSize: "15px" }}>
                Secondary
              </Typography>
              <Typography variant="p">#858796</Typography>
            </div>
            <div className="colorbox6">
              <Typography variant="h6" sx={{ fontSize: "15px" }}>
                Light
              </Typography>
              <Typography variant="p">#f8f9fc</Typography>
            </div>
            <div className="colorbox7">
              <Typography variant="h6" sx={{ fontSize: "15px" }}>
                Dark
              </Typography>
              <Typography variant="p">#5a5c69</Typography>
            </div>
          </div>
        </div>
        <div
          className="msgbox"
          style={{
            display: "flex",
            flexDirection: "column",
            width: "500px",
          }}
        >
          <div className="illustration">
            <div className="cardhead1">
              <Typography color="primary">Illustrations</Typography>
            </div>
            <div>
              <div className="image">
                <img
                  src={undraw_posting_photo}
                  alt="undraw_posting_photo"
                  width="400px"
                />
              </div>
              <br />
              <Typography
                variant="p"
                sx={{ lineSpacing: "10px", color: "#858796" }}
              >
                Add some quality, svg illustrations to your project courtesy of
                unDraw, a constantly updated collection of beautiful svg images
                that you can use completely free and without attribution!
              </Typography>
              <Button variant="text" endIcon={<ArrowRightAltIcon />}>
                Browse Illustrations on unDraw{" "}
              </Button>
            </div>
          </div>
          <div className="devapp">
            <div className="cardhead1">
              <Typography color="primary">Development Approach</Typography>
            </div>
            <div>
              <Typography
                variant="p"
                sx={{ lineSpacing: "10px", color: "#858796" }}
              >
                SB Admin 2 makes extensive use of Bootstrap 4 utility classes in
                order to reduce CSS bloat and poor page performance. Custom CSS
                classes are used to create custom components and custom utility
                classes.
              </Typography>
              <br />
              <br />
              <Typography
                variant="p"
                sx={{ lineSpacing: "10px", color: "#858796" }}
              >
                Before working with this theme, you should become familiar with
                the Bootstrap framework, especially the utility classes.
              </Typography>
            </div>
          </div>
        </div>
      </Box>
      <footer>Copyright © Your Website 2021</footer>
    </Box>
  );
}
