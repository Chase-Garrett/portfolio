import { Box } from "@mui/system";
import { Typography } from "@mui/material";

export default function AboutDetails() {
  const styles = {
    box: {
      backgroundColor: "#22162B",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      overflow: "hidden",
    },
    typography: {
      color: "#ffffff",
      textAlign: "center",
      textShadow: "1px 1px 10px #668a64",
      fontFamily: "Oswald, sans-serif",
      margin: "1rem",
    },
  };

  return (
    <Box disableGutters sx={styles.box}>
      <Typography variant="h3" component="h3" sx={styles.typography}>
        About Me
      </Typography>
      <Typography
        variant="h5"
        component="h5"
        gutterBottom="true"
        sx={styles.typography}
      >
        My name is Chase Garrett, being college educated in Business Management
        and Computer Science, I bridge the gap between technical skill and
        business acumen. My education has given me understanding from digital
        design to informative and persausive speaking. As a developer, I am
        currently focused on backend development.
      </Typography>
    </Box>
  );
}
