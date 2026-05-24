import Foto from "../../public/images/Foto.png";
import TiltedCard from "./TiltedCard";

function ImageFoto() {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-[#FFB22C]/30 blur-[80px] rounded-full"></div>

      <div className="relative animate-float">
        <TiltedCard
          imageSrc={Foto}
          altText="Foto Wildan"
          captionText="Wildan Zulfikar"
          containerHeight="420px"
          containerWidth="420px"
          imageHeight="420px"
          imageWidth="420px"
          rotateAmplitude={12}
          scaleOnHover={1.08}
          showMobileWarning={false}
          showTooltip={true}
          displayOverlayContent={false}
        />
      </div>
    </div>
  );
}

export default ImageFoto;