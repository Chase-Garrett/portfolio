import { Card } from "@mui/material";
import { CardContent } from "@mui/material";
import { CardMedia } from "@mui/material";
import { CardActionArea } from "@mui/material";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";

export default function ProjectCard(props) {
  const styles = {
    typography: {
      color: "#ffffff",
      textShadow: "1px 1px 10px #668a64",
      fontFamily: "Oswald, sans-serif",
    },
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
  return (
    <Card
      sx={{
        border: "1px solid",
        borderColor: "#668a64",
        backgroundColor: "#22162B",
        boxShadow: "1px 1px 10px #668a64",
        borderRadius: "10px",
        maxWidth: 345,
        minWidth: 345,
      }}
    >
      <CardActionArea href={`${props.url}`} target="_blank" rel="noreferrer">
        <CardMedia
          component="img"
          height="80"
          image={props.image}
          alt="project image"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={styles.typography}
          >
            {props.title}
          </Typography>
          <Typography variant="body1" sx={styles.typography}>
            {props.description}
          </Typography>
          {props.tech.map((tech, index) => (
            <Chip key={index} label={tech} sx={styles.chip}></Chip>
          ))}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
