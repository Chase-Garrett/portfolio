import TechCard from "../components/TechCard";
import BizCard from "../components/BizCard";
import { Divider, Grid } from "@mui/material";
import AboutDetails from "../components/AboutDetails";
import { Box } from "@mui/system";

export default function AboutPage() {
  const styles = {
    box: {
      backgroundColor: "#22162B",
      overflow: "hidden",
    },
  };

  return (
    <Box sx={{ height: "100vh", backgroundColor: "#22162B" }}>
      <Grid
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="center"
        sx={styles.box}
      >
        <Grid item xs={1} sm={1} md={1} lg={1} />
        <Grid item>
          <Grid
            container
            direction="row"
            spacing={5}
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={3} sm={3} md={3} lg={3} sx={{ marginTop: "5em" }}>
              <TechCard />
            </Grid>
            <Grid item xs={1} sm={1} md={1} lg={1} />
            <Grid item xs={1} sm={1} md={1} lg={1} />
            <Grid item xs={1} sm={1} md={1} lg={1} />
            <Grid item xs={1} sm={1} md={1} lg={1} />
            <Grid item xs={1} sm={1} md={1} lg={1} />
            <Grid item xs={1} sm={1} md={1} lg={1} />
            <Grid item xs={3} sm={3} md={3} lg={3} sx={{ marginTop: "5em" }}>
              <BizCard />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={1} sm={1} md={1} lg={1} />
        <Grid item xs={1} sm={1} md={1} lg={1} />
        <Grid item xs={1} sm={1} md={1} lg={1} />
        <Grid item xs={1} sm={1} md={1} lg={1} />
        <Divider
          flexItem
          orientation="horizontal"
          variant="middle"
          sx={{
            backgroundColor: "#668a64",
            boxShadow: "1px 1px 10px #668a64",
            marginTop: "10em",
          }}
        />
        <Grid item xs="1" sm="1" md="1" lg="1" />
        <Grid item>
          <AboutDetails />
        </Grid>
      </Grid>
    </Box>
  );
}
