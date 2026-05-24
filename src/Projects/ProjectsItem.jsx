import {
  motion,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";

import {
  Github,
  ArrowUpRight,
} from "lucide-react";

function ProjectsItem({
  Image,
  Title,
 Deskripsi,
  Link,
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
    <motion.article
      onMouseMove={handleMouseMove}
      whileHover={{
        y: -12,
      }}
      transition={{
        type: "spring",
        stiffness: 220,
      }}
      className="
        group
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
      {/* Cursor Glow */}
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
              320px circle at ${mouseX}px ${mouseY}px,
              rgba(255,178,44,0.12),
              transparent 80%
            )
          `,
        }}
      />

      {/* IMAGE */}
      <div className="relative overflow-hidden">
        <motion.img
          src={Image}
          alt={Title}
          whileHover={{
            scale: 1.08,
          }}
          transition={{
            duration: 0.5,
          }}
          className="
            h-[240px]
            w-full
            object-cover
          "
        />

        {/* Overlay */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black
            via-black/20
            to-transparent
          "
        />

        {/* Floating Tag */}
        <div
          className="
            absolute
            top-5
            left-5
            px-4
            py-2
            rounded-full
            bg-black/40
            backdrop-blur-xl
            border
            border-white/10
            text-white
            text-xs
            tracking-wide
            font-medium
          "
        >
          Featured Project
        </div>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 p-7">
        <div className="flex items-start justify-between gap-4">
          <h1
            className="
              text-2xl
              font-bold
              text-white
              leading-tight
            "
          >
            {Title}
          </h1>

          <div
            className="
              w-11
              h-11
              rounded-2xl
              bg-[#FFB22C]/10
              border
              border-[#FFB22C]/20
              flex
              items-center
              justify-center
              text-[#FFB22C]
            "
          >
            <ArrowUpRight size={18} />
          </div>
        </div>

        <p
          className="
            text-white/55
            leading-relaxed
            mt-5
            text-[15px]
          "
        >
          {Deskripsi}
        </p>

        {/* Bottom */}
        <div
          className="
            flex
            items-center
            justify-between
            mt-8
          "
        >
          {/* Mini line */}
          <div
            className="
              w-16
              h-[3px]
              rounded-full
              bg-[#FFB22C]
              shadow-[0_0_15px_rgba(255,178,44,0.7)]
            "
          />

          {/* Button */}
          <a
            href={Link}
            target="_blank"
            rel="noopener noreferrer"
            className="
              group/button
              flex
              items-center
              gap-2
              rounded-2xl
              px-5
              py-3
              bg-[#FFB22C]
              text-black
              font-semibold
              transition-all
              duration-300
              hover:scale-105
              hover:shadow-[0_0_30px_rgba(255,178,44,0.45)]
            "
          >
            <Github size={18} />

            Repository

            <ArrowUpRight
              size={17}
              className="
                transition-transform
                duration-300
                group-hover/button:-translate-y-1
                group-hover/button:translate-x-1
              "
            />
          </a>
        </div>
      </div>

      {/* Border Glow */}
      <div
        className="
          absolute
          inset-0
          rounded-[34px]
          border
          border-[#FFB22C]/0
          group-hover:border-[#FFB22C]/20
          transition-all
          duration-500
        "
      />
    </motion.article>
  );
}

export default ProjectsItem;