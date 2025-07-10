import React from "react";
import ProjectsItem from "./ProjectsItem";

function ProjectsList({ projects }) {
    return (
        <div className="flex gap-10 justify-around flex-wrap">
            {
                projects.map((project) => (
                    <ProjectsItem key={project.Id} {...project}/>
                ))
            }
        </div>
    )
}

export default ProjectsList;