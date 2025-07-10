import Figma from '/images/figma.png';
import Gitbash from '/images/gitbash.png';
import Github from '/images/github.png';
import Vscode from '/images/vscode.png';
import Particles from './Particles';
import { TypeAnimation } from 'react-type-animation';

function Home() {
  return (
    <div id='home' className="h-screen flex flex-col justify-center relative overflow-hidden">
      {/* Partikel sebagai background absolute */}
      <div className="absolute w-full inset-0 z-0">
        <Particles
          particleColors={['#ffffff', '#ffffff']}
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
      <div className="relative z-10 px-4">
        <SvgTop />
        <Paragrap />
        <Header />
        <SvgBottom />
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="text-center">
      <h1 className="font-extrabold text-4xl md:text-6xl mb-6 md:mb-10">
        Fullstack{' '}
        <span className="text-[#F3C623]">
          <TypeAnimation
            sequence={['Web Developer', 4000, '', 500]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </span>
      </h1>
      <a className="text-[12px] hover:text-blue-700" href="#">Pelajari Selengkapnya</a>
    </div>
  )
}

function Paragrap() {
  return (
    <p className="text-center mb-4 md:mb-8 font-semibold text-base md:text-lg">Hello i am, Wildan Zulfikar</p>
  )
}

function SvgTop() {
  return (
    <div className="flex flex-row sm:flex-row justify-around items-center gap-4 mb-4 md:mb-8">
      <img className="w-16 md:w-24 relative sm:bottom-4 hidden sm:block sm:left-4" src={Figma} alt="figma" />
      <img className="w-16 md:w-24 relative sm:bottom-20 hidden sm:block" src={Gitbash} alt="gitbash" />
    </div>
  )
}

function SvgBottom() {
  return (
    <div className="flex flex-row sm:flex-row justify-around items-center gap-4 mt-6 md:mt-16">
      <img className="w-16 md:w-24 relative sm:top-14 hidden sm:block sm:right-11" src={Vscode} alt="vscode" />
      <img className="w-16 md:w-24 relative sm:top-24 hidden sm:block" src={Github} alt="github" />
    </div>
  )
}

export default Home;
