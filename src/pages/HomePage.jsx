import { Typography } from "@mui/material";
import { Box } from "@mui/system";

export default function HomePage() {
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
    },
    typography: {
      color: "#ffffff",
      textAlign: "center",
      textShadow: "1px 1px 10px #668a64",
      fontFamily: "Oswald, sans-serif",
    },
  };

  return (
    <Box disableGutters sx={styles.box}>
      <Typography variant="h2" component="h2" sx={styles.typography}>
        Chase Garrett
      </Typography>
      <Typography
        variant="h1"
        component="h1"
        gutterBottom="true"
        sx={styles.typography}
      >
        Full-Stack Solutions
      </Typography>
    </Box>
  );
}
