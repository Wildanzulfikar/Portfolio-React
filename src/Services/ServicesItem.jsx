import ServicesImageCard from "./ServicesImageCard";
import ServicesItemCard from "./ServicesItemCard";

function ServicesItem({image, keahlian, text}) {
    return (
        <div className="bg-blue-900 z-40 hover:bg-blue-800 shadow-2xl w-80 shadow-black mb-20 rounded-md flex items-center gap-6 mt-10 text-white flex-col p-8">
            <ServicesImageCard image={image}/>
            <ServicesItemCard keahlian={keahlian} text={text}/>
        </div>
    )
}

export default ServicesItem;