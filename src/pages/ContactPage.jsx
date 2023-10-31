import { Typography } from "@mui/material";
import { Grid } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function ContactPage() {
  const styles = {
    box: {
      backgroundColor: "#22162B",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      width: "100vw",
      overflowX: "hidden",
      paddingBottom: "50vh",
    },
    typography: {
      color: "#918b95",
      textAlign: "center",
      fontFamily: "Oswald, sans-serif",
    },
    link: {
      textDecoration: "none",
      color: "inherit",
    },
    icon: {
      color: "#918b95",
      fontSize: "1.5rem",
      marginRight: "0.5rem",
    },
  };

  const handleHover = (event) => {
    event.target.style.color = "#ffffff";
    event.target.style.textShadow = "1px 1px 10px #668a64";
  };

  const handleUnhover = (event) => {
    event.target.style.color = "#918b95";
    event.target.style.textShadow = "none";
  };

  return (
    <Grid container sx={styles.box}>
      <Grid item>
        <Typography
          variant="h4"
          component="h4"
          sx={{
            ...styles.typography,
            color: "#ffffff",
            textShadow: "1px 1px 10px #668a64",
          }}
        >
          Contact Me
        </Typography>
      </Grid>
      <Grid item xs="1" sm="1" md="1" lg="1" />
      <Grid item xs="1" sm="1" md="1" lg="1" />
      <Grid item xs="1" sm="1" md="1" lg="1" />
      <Grid item>
        <Typography variant="h5" component="h5" sx={styles.typography}>
          <a href="mailto:chasegarrett@tutanota.com" style={styles.link}>
            <EmailIcon sx={styles.icon} />{" "}
            <span onMouseEnter={handleHover} onMouseLeave={handleUnhover}>
              Email&nbsp;&nbsp;
            </span>
            <EmailIcon sx={styles.icon} />
          </a>
        </Typography>
      </Grid>
      <Grid itemxs="1" sm="1" md="1" lg="1" />
      <Grid item>
        <Typography variant="h5" component="h5" sx={styles.typography}>
          <a href="https://github.com/Chase-Garrett" style={styles.link}>
            <GitHubIcon sx={styles.icon} />{" "}
            <span onMouseEnter={handleHover} onMouseLeave={handleUnhover}>
              GitHub&nbsp;&nbsp;
            </span>
            <GitHubIcon sx={styles.icon} />
          </a>
        </Typography>
      </Grid>
      <Grid itemxs="1" sm="1" md="1" lg="1" />
      <Grid item>
        <Typography variant="h5" component="h5" sx={styles.typography}>
          <a
            href="https://www.linkedin.com/in/chase-garrett/"
            style={styles.link}
          >
            <LinkedInIcon sx={styles.icon} />{" "}
            <span onMouseEnter={handleHover} onMouseLeave={handleUnhover}>
              LinkedIn&nbsp;&nbsp;
            </span>
            <LinkedInIcon sx={styles.icon} />
          </a>
        </Typography>
      </Grid>
    </Grid>
  );
}
