import { Link, useLocation } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

// AppBar Styling
const styles = {
  appBar: {
    backgroundColor: "#22162B",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "none",
    position: "static",
    maxWidth: "100vw",
  },
  toolbar: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
};

export default function Nav() {
  // Get current location
  const location = useLocation();

  // Function to check if the current path is active
  const isLinkActive = (path) => location.pathname === path;

  return (
    <AppBar sx={styles.appBar}>
      <Toolbar disableGutters sx={styles.toolbar}>
        <Link
          variant="h6"
          component="a"
          to="/"
          style={{
            fontSize: isLinkActive("/") ? "40px" : "30px",
            color: isLinkActive("/") ? "#668a64" : "#918b95",
            textDecoration: "none",
            textShadow: isLinkActive("/") ? "1px 1px 10px #668a64" : "none",
            fontFamily: "Oswald, sans-serif",
          }}
        >
          Home
        </Link>
        <Link
          variant="h6"
          component="a"
          to="/About"
          style={{
            fontSize: isLinkActive("/About") ? "40px" : "30px",
            color: isLinkActive("/About") ? "#668a64" : "#918b95",
            textDecoration: "none",
            textShadow: isLinkActive("/About")
              ? "1px 1px 10px #668a64"
              : "none",
            fontFamily: "Oswald, sans-serif",
          }}
        >
          &nbsp;About
        </Link>
        <Link
          variant="h6"
          component="a"
          to="/Projects"
          style={{
            fontSize: isLinkActive("/Projects") ? "40px" : "30px",
            color: isLinkActive("/Projects") ? "#668a64" : "#918b95",
            textDecoration: "none",
            textShadow: isLinkActive("/Projects")
              ? "1px 1px 10px #668a64"
              : "none",
            fontFamily: "Oswald, sans-serif",
          }}
        >
          &nbsp;Projects
        </Link>
        <Link
          variant="h6"
          component="a"
          to="/Contact"
          style={{
            fontSize: isLinkActive("/Contact") ? "40px" : "30px",
            color: isLinkActive("/Contact") ? "#668a64" : "#918b95",
            textDecoration: "none",
            textShadow: isLinkActive("/Contact")
              ? "1px 1px 10px #668a64"
              : "none",
            fontFamily: "Oswald, sans-serif",
          }}
        >
          &nbsp;Contact
        </Link>
      </Toolbar>
    </AppBar>
  );
}
