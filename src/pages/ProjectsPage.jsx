import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import ProjectCard from "../components/ProjectCard";
import Flock from "../assets/flock.png";
import ReadMe from "../assets/readme.png";

export default function ProjectsPage() {
  const styles = {
    box: {
      backgroundColor: "#22162B",
    },
  };

  const projects = [
    {
      image:
        "https://raw.githubusercontent.com/Chase-Garrett/js-box/main/jsbox.png",
      title: "JS Box",
      description:
        "Web based text editor with built in JavaScript syntax highlighting.",
      url: "https://github.com/Chase-Garrett/js-box",
      tech: ["Express", "Webpack", "Node"],
    },

    {
      image:
        "https://raw.githubusercontent.com/Chase-Garrett/note-taker/main/assets/main_page.png",
      title: "Note Taker",
      description: "Web based note taking application.",
      url: "https://github.com/Chase-Garrett/note-taker",
      tech: ["Express", "Node"],
    },

    {
      image: Flock,
      title: "Flock",
      description: "Social media backend API.",
      url: "https://github.com/Chase-Garrett/flock",
      tech: ["Express", "Node", "MongoDB", "Mongoose"],
    },

    {
      image:
        "https://raw.githubusercontent.com/Chase-Garrett/dungeonkit/main/screenshots/charsheet.png",
      title: "Dungeonkit",
      description: "Dungeons and Dragons character sheet creator.",
      url: "https://github.com/Chase-Garrett/dungeonkit",
      tech: [
        "Express",
        "Node",
        "MySQL",
        "Sequelize",
        "Bootstrap",
        "Handlebars",
        "Bcrypt",
        "Puppeteer",
      ],
    },

    {
      image:
        "https://raw.githubusercontent.com/Chase-Garrett/earful/main/assets/images/genresearch.png",
      title: "Earful",
      description: "Music recommendation engine.",
      url: "https://github.com/Chase-Garrett/earful",
      tech: ["Bulma", "APIs", "JQuery"],
    },

    {
      image: ReadMe,
      title: "README Generator",
      description: "CLI README generator for GitHub projects.",
      url: "https://github.com/Chase-Garrett/readme-gen",
      tech: ["Node", "Inquirer"],
    },
  ];

  return (
    <Box sx={styles.box}>
      <Grid
        container
        spacing={2}
        alignItems="center"
        flexDirection={"column"}
        paddingBottom={15}
      >
        {projects.map((project, index) => (
          <Grid item key={index}>
            <ProjectCard
              image={project.image}
              title={project.title}
              description={project.description}
              url={project.url}
              tech={project.tech}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
