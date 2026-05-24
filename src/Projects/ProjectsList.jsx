import ProjectsItem from "./ProjectsItem";
import { motion } from "framer-motion";

function ProjectsList({ projects }) {
  return (
    <div
      className="
        max-w-7xl
        mx-auto
        grid
        grid-cols-1
        md:grid-cols-2
        xl:grid-cols-3
        gap-10
      "
    >
      {projects.map((project, index) => (
        <motion.div
          key={project.Id}
          initial={{
            opacity: 0,
            y: 60,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
            delay: index * 0.08,
          }}
          viewport={{ once: true }}
        >
          <ProjectsItem {...project} />
        </motion.div>
      ))}
    </div>
  );
}

export default ProjectsList;