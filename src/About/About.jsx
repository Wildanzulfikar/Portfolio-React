import LeftAbout from "./LeftAbout";
import RightAbout from "./RightAbout";
import Particles from "../Home/Particles";

function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen overflow-hidden flex items-center justify-center px-6 py-24"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* Glow */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#FFB22C]/20 blur-[120px] rounded-full z-0"></div>

      <div className="
                      relative
                      z-10
                      max-w-7xl
                      mx-auto
                      px-6
                      lg:px-10
                      py-24
                      flex
                      flex-col
                      lg:flex-row
                      items-center
                      gap-16
                    ">
        <div className="backdrop-blur-xl bg-gradient-to-b from-black via-[#111827] to-black rounded-[40px] shadow-2xl p-8 md:p-16">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <LeftAbout />
            <RightAbout />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;