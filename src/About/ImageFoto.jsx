import Foto from "../../public/images/Foto.png";
import TiltedCard from "./TiltedCard";

function ImageFoto() {
    return (
    <TiltedCard
      imageSrc={Foto}
      altText="Foto Wildan"
      captionText="Wildan Zulfikar"
      containerHeight="400px"
      containerWidth="400px"
      imageHeight="400px"
      imageWidth="400px"
      rotateAmplitude={10}
      scaleOnHover={1.15}
      showMobileWarning={false}
      showTooltip={true}
      displayOverlayContent={true}
      overlayContent={
        <p className="text-white font-semibold text-sm px-4 py-2 bg-black/60 rounded-md backdrop-blur-md">
          Wildan Zulfikar
        </p>
      }
    />
  );
}

export default ImageFoto;