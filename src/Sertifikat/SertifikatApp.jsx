import SertifikatList from "./SertifikatList";
import { getSertifikats } from "./Sertifikat";

function SertifikatApp() {

    const sertifikats = getSertifikats();

    return (
        <div id="sertifikat" className="px-2 m-auto lg:px-34 mb-32">
            <h1 className="text-center text-3xl mb-4 font-extrabold text-[#F3C623]">Sertifikat</h1>
            <hr className="m-auto w-16 opacity-30 mb-16" />
            <SertifikatList sertifikats={sertifikats}/>
        </div>
    )
}

export default SertifikatApp;