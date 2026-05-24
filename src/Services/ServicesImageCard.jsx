import { motion } from "framer-motion";

function ServicesImageCard({
  image,
}) {
  return (
    <motion.div
      whileHover={{
        scale: 1.08,
        rotate: 6,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
      }}
      className="
        relative
        mb-10
      "
    >
      {/* Circle Glow */}
      <div
        className="
          absolute
          inset-0
          w-36
          h-36
          rounded-full
          bg-[#FFB22C]/10
          blur-2xl
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2
        "
      ></div>

      {/* Circle Border */}
      <div
        className="
          absolute
          inset-0
          w-32
          h-32
          rounded-full
          border
          border-white/10
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2
        "
      ></div>

      <img
        src={image}
        alt="services"
        className="
          relative
          z-10
          w-28
          h-28
          object-contain
        "
      />
    </motion.div>
  );
}

export default ServicesImageCard;