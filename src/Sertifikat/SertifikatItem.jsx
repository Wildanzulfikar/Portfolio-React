import React from "react";

function SertifikatItem({ image }) {
    return (
        <div>
            <img src={image} className="w-full h-60 lg:h-[358px] object-cover rounded-lg"/>
        </div>
    )
}

export default SertifikatItem;