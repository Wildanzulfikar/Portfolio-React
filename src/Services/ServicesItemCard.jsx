import React from "react";

function ServicesItemCard({keahlian, text}) {
    return (
        <div className="flex flex-col items-center text-center gap-6">
            <h1 className="font-bold">{keahlian}</h1>
            <p>{text}</p>
        </div>
    )
}

export default ServicesItemCard;