import { useState } from "react";

function SertifikatGallery({ sertifikats }) {
  const [zoomImage, setZoomImage] = useState(null);

  return (
    <>
      {/* Scrollable Container */}
      <div className="overflow-x-auto">
        <div className="flex gap-4 w-max">
          {sertifikats.map((sertifikat) => (
            <div
              key={sertifikat.id}
              className="cursor-zoom-in transition-transform hover:scale-105 duration-300"
              onClick={() => setZoomImage(sertifikat.imgSrc)}
            >
              <img
                src={sertifikat.imgSrc}
                alt={sertifikat.title}
                className="max-w-[200px] h-auto rounded shadow"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Modal Zoom */}
      {zoomImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setZoomImage(null)}
        >
          <img
            src={zoomImage}
            alt="Zoom Sertifikat"
            className="max-w-[90%] max-h-[90%] object-contain rounded"
          />
        </div>
      )}
    </>
  );
}

export default SertifikatGallery;
