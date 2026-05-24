import {
  motion,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";

import ServicesImageCard from "./ServicesImageCard";
import ServicesItemCard from "./ServicesItemCard";

function ServicesItem({
  image,
  keahlian,
  text,
}) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }) {
    const { left, top } =
      currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      whileHover={{
        y: -10,
        scale: 1.02,
      }}
      transition={{
        type: "spring",
        stiffness: 250,
      }}
      className="
        group
        relative
        w-full
        max-w-[360px]
        min-h-[420px]
        overflow-hidden
        rounded-[34px]
        border
        border-white/10
        bg-white/[0.03]
        backdrop-blur-2xl
        p-10
        shadow-[0_10px_50px_rgba(0,0,0,0.6)]
      "
    >
      {/* Hover Glow */}
      <motion.div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-0
          group-hover:opacity-100
          transition
          duration-500
        "
        style={{
          background: useMotionTemplate`
            radial-gradient(
              350px circle at ${mouseX}px ${mouseY}px,
              rgba(255,178,44,0.14),
              transparent 80%
            )
          `,
        }}
      />

      {/* Animated Border */}
      <div
        className="
          absolute
          inset-0
          rounded-[34px]
          border
          border-[#FFB22C]/10
          group-hover:border-[#FFB22C]/40
          transition-all
          duration-500
        "
      ></div>

      {/* Blur Spot */}
      <div
        className="
          absolute
          -top-16
          left-1/2
          -translate-x-1/2
          w-52
          h-52
          bg-[#FFB22C]/10
          blur-[80px]
          rounded-full
          opacity-0
          group-hover:opacity-100
          transition-all
          duration-700
        "
      ></div>

      {/* Content */}
      <div
        className="
          relative
          z-10
          flex
          flex-col
          items-center
          text-center
          h-full
        "
      >
        <ServicesImageCard image={image} />

        <ServicesItemCard
          keahlian={keahlian}
          text={text}
        />

        {/* Bottom Accent */}
        <div
          className="
            mt-8
            w-16
            h-1.5
            rounded-full
            bg-[#FFB22C]
            shadow-[0_0_20px_rgba(255,178,44,0.8)]
          "
        ></div>
      </div>
    </motion.div>
  );
}

export default ServicesItem;