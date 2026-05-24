import { getSkills } from "./Skills";
import SkillsList from "./SkillsList";

function SkillsToolsApp() {
  const skills = getSkills();

  return (
    <section
      id="skills"
      className="
        relative
        overflow-hidden
        py-32
      "
    >
      {/* Background Blur */}
      <div
        className="
          absolute
          top-[-120px]
          left-[-100px]
          w-[300px]
          h-[300px]
          rounded-full
          bg-[#F3C623]/20
          blur-[120px]
        "
      />

      <div
        className="
          absolute
          bottom-[-120px]
          right-[-100px]
          w-[300px]
          h-[300px]
          rounded-full
          bg-blue-500/20
          blur-[120px]
        "
      />

      {/* Main Container */}
      <div
        className="
          relative
          z-10
          max-w-7xl
          mx-auto
          px-6
          lg:px-10
        "
      >
        {/* Header */}
        <div className="text-center mb-20">
          <span
            className="
              px-4
              py-2
              rounded-full
              border
              border-[#F3C623]/20
              bg-[#F3C623]/10
              text-[#F3C623]
              text-sm
              font-semibold
              tracking-[0.2em]
            "
          >
            MY TECH STACK
          </span>

          <h1
            className="
              mt-6
              text-5xl
              md:text-6xl
              font-black
              text-white
              tracking-tight
            "
          >
            Skills & Tools
          </h1>

          <p
            className="
              mt-5
              max-w-2xl
              mx-auto
              text-white/50
              leading-relaxed
              text-base
              md:text-lg
            "
          >
            Technologies and tools I use to build modern,
            scalable, and high-performance web applications.
          </p>

          <div
            className="
              w-24
              h-1
              bg-[#F3C623]
              rounded-full
              mx-auto
              mt-6
              shadow-[0_0_20px_rgba(255,178,44,0.8)]
            "
          />
        </div>

        {/* Skills */}
        <div className="relative z-10">
          <SkillsList skills={skills} />
        </div>
      </div>
    </section>
  );
}

export default SkillsToolsApp;