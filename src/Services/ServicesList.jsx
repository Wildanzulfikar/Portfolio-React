import React from "react";
import ServicesItem from "./ServicesItem"

function ServicesList({ services }) {
    return (
        <div className="flex justify-evenly flex-wrap z-10">
            {
                services.map((service) => (
                    <ServicesItem key={service.id} {...service} />
                ))
            }
        </div>
    );
}

export default ServicesList;