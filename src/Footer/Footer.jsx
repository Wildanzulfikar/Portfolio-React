import React from "react";

function Footer() {
    return (
        <div className="flex justify-center items-center w-full h-12 bg-blue-900">
            <span className="text-white font-extrabold">
                &copy; {new Date().getFullYear()} Wildan Zulfikar. All rights reserved.
            </span>
        </div>
    )
}

export default Footer;