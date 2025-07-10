import React from "react";

function ProjectsItem({ Image, Title, Deskripsi, Link}) {
    return (
        <div className="w-80">
            <img src={Image}/>
            <div className="flex flex-col gap-4 bg-gray-100 drop-shadow-2xl rounded-b-md p-4">
                <h1 className="text-center font-bold text-xl">{Title}</h1>
                <p className="text-gray-800 mb-3 text-justify">{Deskripsi}</p>
                <a href={Link} className="w-full bg-black text-white rounded-[4px] text-center py-1">Repo</a>
            </div>
        </div>
    )
}

export default ProjectsItem;