import TechCard from "../components/TechCard";
import { Grid } from "@mui/material";

export default function AboutPage() {
  const styles = {
    box: {
      backgroundColor: "#22162B",
      height: "100vh",
      width: "100vw",
      overflowX: "hidden",
    },
  };

  return (
    <Grid
      container
      direction="column"
      justifyContent="flex-start"
      alignItems="center"
      sx={styles.box}
    >
      <Grid item xs="1" sm="1" md="1" lg="1" />
      <Grid item>
        <Grid
          container
          direction="row"
          spacing={5}
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={3} sm={3} md={3} lg={3}>
            <TechCard />
          </Grid>
          <Grid item xs={1} sm={1} md={1} lg={1} />
          <Grid item xs={1} sm={1} md={1} lg={1} />
          <Grid item xs={1} sm={1} md={1} lg={1} />
          <Grid item xs={1} sm={1} md={1} lg={1} />
          <Grid item xs={3} sm={3} md={3} lg={3}>
            <TechCard />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
