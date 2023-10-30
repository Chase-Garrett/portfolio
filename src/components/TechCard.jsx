import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";

const styles = {
  chip: {
    border: "1px solid",
    borderColor: "#668a64",
    backgroundColor: "#22162B",
    color: "#ffffff",
    fontFamily: "Oswald, sans-serif",
    textAlign: "center",
    textShadow: "1px 1px 10px #668a64",
    margin: ".2rem",
  },
};

const card = (
  <React.Fragment>
    <CardContent>
      <Typography
        variant="h6"
        component="h6"
        sx={{
          color: "#ffffff",
          fontFamily: "Oswald, sans-serif",
          textAlign: "center",
          textShadow: "1px 1px 10px #668a64",
        }}
      >
        Technical Skills
      </Typography>
      <Chip label="HTML" sx={styles.chip} />
      <Chip label="CSS" sx={styles.chip} />
      <Chip label="JavaScript" sx={styles.chip} />
      <Chip label="MERN" sx={styles.chip} />
      <Chip label="Material UI" sx={styles.chip} />
      <Chip label="Bootstrap" sx={styles.chip} />
      <Chip label="C/C++" sx={styles.chip} />
      <Chip label="Java" sx={styles.chip} />
      <Chip label="Python" sx={styles.chip} />
      <Chip label="SQL" sx={styles.chip} />
      <Chip label="NoSQL" sx={styles.chip} />
      <Chip label="APIs" sx={styles.chip} />
    </CardContent>
  </React.Fragment>
);

export default function TechCard() {
  return (
    <Box sx={{ maxWidth: 400 }}>
      <Card
        sx={{
          width: "15rem",
          height: "16rem",
          border: "1px solid",
          borderColor: "#668a64",
          backgroundColor: "#22162B",
          boxShadow: "1px 1px 10px #668a64",
        }}
      >
        {card}
      </Card>
    </Box>
  );
}
