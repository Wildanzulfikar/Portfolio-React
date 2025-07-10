import React from "react";

function SkillsToolsImage({ image }) {
    return (
        <div className="border-1 z-10 hover:bg-blue-900 hover:border-white rounded-[6px] p-4">
            <img src={ image } />
        </div>
    )
}

export default SkillsToolsImage;