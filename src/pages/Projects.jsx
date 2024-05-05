// Import images for project cards
import dash from "../assets/images/weatherdash.png";
import orm from "../assets/images/ormecomm.png";
// import xpress from "../assets/images/notetaker.png";
import sculpt from "../assets/images/sculptor.png";
import track from "../assets/images/employeetracker.png";
import mood from "../assets/images/mood.png";
import ProjectCard from "./ProjectCard";

// Define an array of project objects
const projects = [
  {
    // project 1: weather dashboard
    title: "5-day Weather Dashboard",
    image: dash,
    githubLink: "https://github.com/F3N215/Weather-Dashboard-Challenge",
  },
  {
    // project 2: orm ecommerce
    title: "ORM Ecommerce Backend",
    image: orm,
    githubLink: "https://github.com/F3N215/ORM-Ecomm-Challenge?tab=readme-ov-file",
  },
//   {
//     // project 3: note taker
//     title: "Express Note Taker",
//     image: xpress,
//     githubLink: "https://github.com/F3N215/Express-Note-Taking-App",
//   },
  {
    // project 4: password sculptor
    title: "Password Sculptor",
    image: sculpt,
    githubLink: "https://github.com/F3N215/sculpt-a-password",
  },
  {
    // project 5: employee tracker
    title: "MySQL Employee Tracker",
    image: track,
    githubLink: "https://github.com/F3N215/MySQL-Employee-Tracker",
  },
  {
    // project 6: movie mood
    title: "Movie Mood",
    image: mood,
    githubLink: "https://github.com/MohnishBhujun/Movie-mood-v1",
  },
];

// Define Projects functional component
const Projects = () => {
  return (
    <div className="p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5">
      {/* Map over the projects array and render project cards */}
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
};

// Export Projects component as default
export default Projects;