import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
// import List from "@mui/material/List";
// import Divider from "@mui/material/Divider";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
// import InboxIcon from "@mui/icons-material/MoveToInbox";
// import MailIcon from "@mui/icons-material/Mail";

import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import Switcher from "./Darkmode/Switcher";

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: "250px", height: "100vh" }}
      onClick={toggleDrawer(anchor, false)}
      className="bg-[white] dark:bg-[#22343D] dark:text-[#FFFFFF]  "
    >
      <ul className="text-start pt-10 ml-10">
        <Link to="/">
          <li>Product </li>
        </Link>{" "}
        <br />
        <Link to="/Customers ">
          <li>Customers </li>
        </Link>
        <br />
        <Link to="/Pricing ">
          <li>Pricing </li>
        </Link>
        <br />
        <Link to="/Resources">
          <li>Resources</li>
        </Link>
      </ul>
      <div className="ml-10 pt-10 ">
        <Switcher />
      </div>
    </Box>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            {" "}
            <AiOutlineMenu className="text-[40px] text-[#FFF]"></AiOutlineMenu>{" "}
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
