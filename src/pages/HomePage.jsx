import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";

export default function HomePage() {
  const styles = {
    box: {
      backgroundColor: "#22162B",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      overflow: "hidden",
    },
    typography: {
      color: "#ffffff",
      textAlign: "center",
      textShadow: "1px 1px 10px #668a64",
      fontFamily: "Oswald, sans-serif",
    },
  };

  return (
    <Grid container disableGutters sx={styles.box}>
      <Grid item>
        <Typography variant="h2" component="h2" sx={styles.typography}>
          Chase Garrett
        </Typography>
      </Grid>
      <Grid item xs="1" sm="1" md="1" lg="1" />
      <Grid item xs="1" sm="1" md="1" lg="1" />
      <Grid item>
        <Typography
          variant="h1"
          component="h1"
          gutterBottom="true"
          sx={styles.typography}
        >
          Full-Stack Solutions
        </Typography>
      </Grid>
    </Grid>
  );
}
