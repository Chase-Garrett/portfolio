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
        Soft Skills
      </Typography>
      <Chip label="Effective Communicator" sx={styles.chip} />
      <Chip label="Teamwork" sx={styles.chip} />
      <Chip label="Leadership" sx={styles.chip} />
      <Chip label="Critical Thinking" sx={styles.chip} />
      <Chip label="Sales" sx={styles.chip} />
      <Chip label="Customer Service" sx={styles.chip} />
    </CardContent>
  </React.Fragment>
);

export default function BizCard() {
  return (
    <Box sx={{ maxWidth: 400 }}>
      <Card
        sx={{
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
