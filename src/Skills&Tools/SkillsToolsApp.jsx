import { getSkills } from "./Skills";
import SkillsList from "./SkillsList";
import Particles from "../Home/Particles";

function SkillsToolsApp() {

    const skills = getSkills();

    return (
        <div className="mx-2 lg:mx-36">
            <h1 className="font-extrabold text-center z-40 text-3xl mb-3 text-amber-300">Skills & Tools</h1>
            <hr className="m-auto w-24 opacity-50" z-10/>
            <SkillsList skills={skills}/>
        </div>
    )
}

export default SkillsToolsApp;