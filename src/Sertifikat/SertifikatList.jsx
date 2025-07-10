import { useState, useRef } from "react";
import SertifikatItem from "./SertifikatItem";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Optional icon (atau pakai unicode ❮❯)

function SertifikatList({ sertifikats }) {
  const [zoomImage, setZoomImage] = useState(null);
  const scrollRef = useRef(null);

  const scroll = (offset) => {
    scrollRef.current.scrollBy({
      left: offset,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative">
      {/* Tombol kiri */}
      <button
        className="absolute z-10 left-2 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/60 backdrop-blur text-blue-900 rounded-full p-2 shadow-md"
        onClick={() => scroll(-300)}
      >
        ❮
      </button>

      {/* Scrollable Area */}
      <div
        ref={scrollRef}
        className="overflow-x-auto overflow-y-hidden pb-6 scroll-smooth snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] px-10"
      >
        <div className="flex gap-12 w-max pr-8">
          {sertifikats.map((sertifikat) => (
            <div
              key={sertifikat.id}
              className="group snap-start relative p-2 rounded-xl bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 shadow-lg hover:shadow-2xl hover:scale-[1.03] transition-transform duration-500 ease-in-out cursor-zoom-in min-w-[220px] backdrop-blur-sm bg-opacity-80"
              onClick={() => setZoomImage(sertifikat.image)}
            >
              <div className="overflow-hidden">
                <SertifikatItem {...sertifikat} />
              </div>
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-white text-sm font-semibold bg-black/50 px-4 py-2 rounded-lg">
                  Klik untuk Zoom 🔍
                </span>
              </div>
            </div>
          ))}
          <div className="min-w-[16px]" />
        </div>
      </div>

      {/* Tombol kanan */}
      <button
        className="absolute z-10 right-2 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/60 backdrop-blur text-blue-900 rounded-full p-2 shadow-md"
        onClick={() => scroll(300)}
      >
        ❯
      </button>

      {/* Modal Zoom */}
      {zoomImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setZoomImage(null)}
        >
          <img
            src={zoomImage}
            alt="Zoom Sertifikat"
            className="max-w-[90%] max-h-[90%] object-contain rounded-lg shadow-lg"
          />
        </div>
      )}
    </div>
  );
}

export default SertifikatList;
