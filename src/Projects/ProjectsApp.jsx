import React from "react"
import { getDataProjects  } from "./Projects"
import ProjectsList from "./ProjectsList";

function ProjectsApp () {

    const projects = getDataProjects();

    return (
        <div id="project" className="pt-24 lg:mx-28 mb-32">
            <h1 className="text-center mb-4 text-3xl font-extrabold text-[#F3C623]">My Projects</h1>
            <hr className="m-auto w-28 opacity-35 mb-16" />
            <ProjectsList projects = {projects}/>
        </div>
    )
}

export default ProjectsApp;