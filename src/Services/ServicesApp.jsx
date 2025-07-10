import React from "react";
import ServicesList from "./ServicesList";
import { getDataServices } from "./Services";

function ServicesApp() {
    const services = getDataServices();

    return (
        <div className="pt-24 lg:mx-12 flex flex-col justify-center flex-wrap">
            <h1 className="text-center font-extrabold text-3xl text-[#F3C623]">My Services</h1>
            <hr className="m-auto w-16 mt-4 opacity-35" />
            <ServicesList className="z-10" services={services}/>
        </div>
    )
}

export default ServicesApp;