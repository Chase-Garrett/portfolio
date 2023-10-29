import { Link, useLocation } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";

// AppBar Styling
const styles = {
  appBar: {
    backgroundColor: "#22162B",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};

export default function Nav() {
  // Get current location
  const location = useLocation();

  // Function to check if the current path is active
  const isLinkActive = (path) => location.pathname === path;

  return (
    <AppBar sx={styles.appBar}>
      <Container maxWidth="sm">
        <Toolbar disableGutters>
          <Link
            variant="h6"
            component="a"
            to="/"
            style={{
              fontSize: "30px",
              color: isLinkActive("/") ? "#255821" : "#918b95",
              textDecoration: "none",
              textShadow: isLinkActive("/") ? "1px 1px 10px #668a64" : "none",
            }}
          >
            Home
          </Link>
          <Link
            variant="h6"
            component="a"
            to="/About"
            style={{
              fontSize: "30px",
              color: isLinkActive("/About") ? "#255821" : "#918b95",
              textDecoration: "none",
              textShadow: isLinkActive("/About")
                ? "1px 1px 10px #668a64"
                : "none",
            }}
          >
            &nbsp;About
          </Link>
          <Link
            variant="h6"
            component="a"
            to="/Projects"
            style={{
              fontSize: "30px",
              color: isLinkActive("/Projects") ? "#255821" : "#918b95",
              textDecoration: "none",
              textShadow: isLinkActive("/Projects")
                ? "1px 1px 10px #668a64"
                : "none",
            }}
          >
            &nbsp;Projects
          </Link>
          <Link
            variant="h6"
            component="a"
            to="/Contact"
            style={{
              fontSize: "30px",
              color: isLinkActive("/Contact") ? "#255821" : "#918b95",
              textDecoration: "none",
              textShadow: isLinkActive("/Contact")
                ? "1px 1px 10px #668a64"
                : "none",
            }}
          >
            &nbsp;Contact
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
