import SertifikatList from "./SertifikatList";
import { getSertifikats } from "./Sertifikat";

function SertifikatApp() {
  const sertifikats = getSertifikats();

  return (
    <section
      id="sertifikat"
      className="
        relative
        py-32
        overflow-hidden
      "
    >
      {/* Background Glow */}
      <div
        className="
          absolute
          top-[-200px]
          left-[-200px]
          w-[500px]
          h-[500px]
          rounded-full
          bg-[#FFB22C]/10
          blur-[160px]
        "
      />

      <div
        className="
          absolute
          bottom-[-200px]
          right-[-200px]
          w-[500px]
          h-[500px]
          rounded-full
          bg-blue-500/10
          blur-[180px]
        "
      />

      {/* Main Container */}
      <div
        className="
          relative
          z-10
          w-[92%]
          max-w-7xl
          mx-auto
        "
      >
        {/* Wrapper */}
        <div
          className="
            relative
            rounded-[40px]
            border
            border-white/10
            bg-black/40
            backdrop-blur-2xl
            overflow-hidden
            px-6
            md:px-10
            lg:px-14
            py-20
            shadow-[0_20px_80px_rgba(0,0,0,0.6)]
          "
        >
          {/* Inner Glow */}
          <div
            className="
              absolute
              inset-0
              bg-[radial-gradient(circle_at_top_left,rgba(255,178,44,0.10),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.10),transparent_35%)]
              pointer-events-none
            "
          />

          {/* Header */}
          <div className="relative z-10 text-center">
            {/* Badge */}
            <div
              className="
                inline-flex
                items-center
                gap-3
                px-5
                py-2
                rounded-full
                border
                border-[#FFB22C]/20
                bg-[#FFB22C]/10
                backdrop-blur-md
                mb-6
              "
            >
              <div className="w-2 h-2 rounded-full bg-[#FFB22C] animate-pulse" />

              <span
                className="
                  text-[#FFB22C]
                  uppercase
                  tracking-[0.3em]
                  text-xs
                  font-semibold
                "
              >
                ACHIEVEMENTS
              </span>
            </div>

            {/* Title */}
            <h1
              className="
                text-white
                font-black
                leading-tight
                text-4xl
                sm:text-5xl
                md:text-6xl
              "
            >
              Certificates &
              <span
                className="
                  text-[#FFB22C]
                  drop-shadow-[0_0_25px_rgba(255,178,44,0.5)]
                "
              >
                {" "}Achievements
              </span>
            </h1>

            {/* Description */}
            <p
              className="
                text-white/55
                max-w-3xl
                mx-auto
                mt-6
                text-sm
                md:text-lg
                leading-relaxed
              "
            >
              Certifications, training programs, and achievements
              that reflect my dedication to continuous learning,
              modern technology, and professional development.
            </p>

            {/* Stats */}
            <div
              className="
                flex
                flex-wrap
                justify-center
                gap-4
                mt-10
              "
            >
              <div
                className="
                  px-6
                  py-3
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  backdrop-blur-md
                "
              >
                <h2 className="text-[#FFB22C] font-black text-2xl">
                  {sertifikats.length}+
                </h2>

                <p className="text-white/50 text-sm mt-1">
                  Certificates
                </p>
              </div>

              <div
                className="
                  px-6
                  py-3
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  backdrop-blur-md
                "
              >
                <h2 className="text-[#FFB22C] font-black text-2xl">
                  Learning
                </h2>

                <p className="text-white/50 text-sm mt-1">
                  Continuous Growth
                </p>
              </div>

              <div
                className="
                  px-6
                  py-3
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  backdrop-blur-md
                "
              >
                <h2 className="text-[#FFB22C] font-black text-2xl">
                  Verified
                </h2>

                <p className="text-white/50 text-sm mt-1">
                  Professional Skills
                </p>
              </div>
            </div>

            {/* Divider */}
            <div
              className="
                flex
                justify-center
                items-center
                gap-4
                mt-12
              "
            >
              <div className="w-20 h-[1px] bg-white/10" />

              <div
                className="
                  w-28
                  h-[4px]
                  rounded-full
                  bg-[#FFB22C]
                  shadow-[0_0_30px_rgba(255,178,44,0.8)]
                "
              />

              <div className="w-20 h-[1px] bg-white/10" />
            </div>
          </div>

          {/* Certificate List */}
          <div className="relative z-10 mt-24">
            <SertifikatList sertifikats={sertifikats} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SertifikatApp;