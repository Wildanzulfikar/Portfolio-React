import SkillsToolsImage from "./SkillsToolsImage";

function SkillsList({ skills }) {
    return (
        <div className="flex flex-wrap z-10 justify-evenly gap-4 sm:gap-6 md:gap-7 mt-8 md:mt-12">
            {
                skills.map((skill) => (
                <SkillsToolsImage key={skill.id} {...skill}/>  
                ))
            }
        </div>
    )
}

export default SkillsList;