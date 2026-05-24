import { useRef, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  X,
  ZoomIn,
} from "lucide-react";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

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
    <>
      <div className="relative">
        {/* Left Button */}
        <button
          onClick={() => scroll(-450)}
          className="
            absolute
            left-0
            top-1/2
            -translate-y-1/2
            z-20
            w-14
            h-14
            rounded-full
            border
            border-white/10
            bg-black/40
            backdrop-blur-xl
            text-white
            flex
            items-center
            justify-center
            hover:scale-110
            hover:bg-[#FFB22C]
            hover:text-black
            transition-all
            duration-300
          "
        >
          <ChevronLeft />
        </button>

        {/* Right Button */}
        <button
          onClick={() => scroll(450)}
          className="
            absolute
            right-0
            top-1/2
            -translate-y-1/2
            z-20
            w-14
            h-14
            rounded-full
            border
            border-white/10
            bg-black/40
            backdrop-blur-xl
            text-white
            flex
            items-center
            justify-center
            hover:scale-110
            hover:bg-[#FFB22C]
            hover:text-black
            transition-all
            duration-300
          "
        >
          <ChevronRight />
        </button>

        {/* Scroll Area */}
        <div
          ref={scrollRef}
          className="
            flex
            gap-10
            overflow-x-auto
            scroll-smooth
            snap-x
            snap-mandatory
            pb-6
            px-16

            [-ms-overflow-style:none]
            [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden
          "
        >
          {sertifikats.map((sertifikat, index) => (
            <motion.div
              key={sertifikat.id}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              className="
                group
                relative
                min-w-[320px]
                md:min-w-[420px]
                snap-center
                cursor-pointer
              "
              onClick={() =>
                setZoomImage(sertifikat.image)
              }
            >
              {/* Glow */}
              <div
                className="
                  absolute
                  inset-0
                  rounded-[34px]
                  bg-[#FFB22C]/0
                  blur-3xl
                  group-hover:bg-[#FFB22C]/10
                  transition-all
                  duration-500
                "
              />

              {/* Card */}
              <div
                className="
                  relative
                  overflow-hidden
                  rounded-[34px]
                  border
                  border-white/10
                  bg-white/[0.03]
                  backdrop-blur-2xl
                  shadow-[0_10px_60px_rgba(0,0,0,0.5)]
                "
              >
                {/* Image */}
                <div className="overflow-hidden">
                  <motion.img
                    whileHover={{
                      scale: 1.06,
                    }}
                    transition={{
                      duration: 0.5,
                    }}
                    src={sertifikat.image}
                    alt="sertifikat"
                    className="
                      w-full
                      h-[240px]
                      md:h-[300px]
                      object-cover
                    "
                  />
                </div>

                {/* Overlay */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/80
                    via-black/10
                    to-transparent
                  "
                />

                {/* Floating Content */}
                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    right-0
                    p-7
                    flex
                    items-center
                    justify-between
                  "
                >
                  <div>
                    <h1
                      className="
                        text-white
                        font-bold
                        text-xl
                      "
                    >
                      Certificate
                    </h1>

                    <p className="text-white/60 text-sm mt-1">
                      Click to preview
                    </p>
                  </div>

                  <div
                    className="
                      w-14
                      h-14
                      rounded-2xl
                      bg-white/10
                      backdrop-blur-xl
                      border
                      border-white/10
                      flex
                      items-center
                      justify-center
                      text-white
                    "
                  >
                    <ZoomIn />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {zoomImage && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            className="
              fixed
              inset-0
              z-[999]
              bg-black/80
              backdrop-blur-xl
              flex
              items-center
              justify-center
              p-6
            "
            onClick={() => setZoomImage(null)}
          >
            {/* Close */}
            <button
              className="
                absolute
                top-8
                right-8
                w-14
                h-14
                rounded-full
                bg-white/10
                backdrop-blur-xl
                border
                border-white/10
                text-white
                flex
                items-center
                justify-center
                hover:bg-[#FFB22C]
                hover:text-black
                transition-all
              "
            >
              <X />
            </button>

            {/* Image */}
            <motion.img
              initial={{
                scale: 0.8,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              exit={{
                scale: 0.8,
                opacity: 0,
              }}
              transition={{
                duration: 0.4,
              }}
              src={zoomImage}
              alt="Zoom Sertifikat"
              className="
                max-w-[95%]
                max-h-[90vh]
                rounded-[30px]
                shadow-[0_20px_100px_rgba(0,0,0,0.8)]
              "
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default SertifikatList;