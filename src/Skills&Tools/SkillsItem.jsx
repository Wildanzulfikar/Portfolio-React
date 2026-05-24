import {
  motion,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";

import SkillsToolsImage from "./SkillsToolsImage";

function SkillsItem({
  image,
  name,
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
        y: -8,
        scale: 1.04,
      }}
      transition={{
        type: "spring",
        stiffness: 250,
      }}
      className="
        group
        relative
        w-[140px]
        h-[140px]
        rounded-[30px]
        overflow-hidden
        border
        border-white/10
        bg-white/[0.03]
        backdrop-blur-2xl
        shadow-[0_10px_40px_rgba(0,0,0,0.5)]
        flex
        items-center
        justify-center
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
              250px circle at ${mouseX}px ${mouseY}px,
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
          rounded-[30px]
          border
          border-[#FFB22C]/10
          group-hover:border-[#FFB22C]/40
          transition-all
          duration-500
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
          gap-4
        "
      >
        <SkillsToolsImage image={image} />

        {name && (
          <p
            className="
              text-white/70
              text-sm
              font-medium
            "
          >
            {name}
          </p>
        )}
      </div>
    </motion.div>
  );
}

export default SkillsItem;