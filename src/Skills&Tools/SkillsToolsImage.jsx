import { motion } from "framer-motion";

function SkillsToolsImage({ image, title }) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.04,
      }}
      transition={{
        duration: 0.3,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/[0.04]
        backdrop-blur-xl
        p-6
        flex
        flex-col
        items-center
        justify-center
        gap-5
        shadow-[0_8px_40px_rgba(0,0,0,0.25)]
        hover:border-[#F3C623]/30
        transition-all
        duration-500
      "
    >
      {/* Glow */}
      <div
        className="
          absolute
          inset-0
          opacity-0
          group-hover:opacity-100
          transition-all
          duration-500
          bg-gradient-to-br
          from-[#F3C623]/10
          via-transparent
          to-blue-500/10
        "
      />

      {/* Spotlight */}
      <div
        className="
          absolute
          -top-20
          -left-20
          w-40
          h-40
          rounded-full
          bg-white/10
          blur-3xl
          opacity-0
          group-hover:opacity-100
          transition-all
          duration-500
        "
      />

      {/* Icon Container */}
      <div
        className="
          relative
          z-10
          w-20
          h-20
          rounded-2xl
          border
          border-white/10
          bg-black/20
          flex
          items-center
          justify-center
          group-hover:scale-110
          transition-all
          duration-500
        "
      >
        <img
          src={image}
          alt={title}
          className="
            w-12
            h-12
            object-contain
          "
        />
      </div>

      {/* Name */}
      <div className="relative z-10 text-center">
        <h1
          className="
            text-white
            font-semibold
            tracking-wide
            text-sm
            md:text-base
          "
        >
          {title}
        </h1>

        <p
          className="
            text-white/40
            text-xs
            mt-1
          "
        >
          Development Tool
        </p>
      </div>

      {/* Border Glow */}
      <div
        className="
          absolute
          inset-0
          rounded-3xl
          border
          border-transparent
          group-hover:border-[#F3C623]/20
          transition-all
          duration-500
        "
      />
    </motion.div>
  );
}

export default SkillsToolsImage;