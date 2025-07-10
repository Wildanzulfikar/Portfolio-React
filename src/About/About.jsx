import LeftAbout from "./LeftAbout";
import RightAbout from "./RightAbout";
import Particles from "../Home/Particles";

function About() {
  return (
    <div id="about" className="lg:mx-6 min-h-screen flex flex-col justify-center relative overflow-hidden">
      {/* Partikel sebagai background absolute */}
      <div className="absolute w-full inset-0 z-0">
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

      {/* Konten utama */}
      <div className="relative z-10 flex flex-col md:flex-col lg:flex-row items-center justify-center px-6 md:px-28 py-8 gap-8 md:gap-16">
        <LeftAbout />
        <RightAbout />
      </div>
    </div>
  );
}

export default About;
