import Figma from "/images/figma.png";
import Gitbash from "/images/gitbash.png";
import Github from "/images/github.png";
import Vscode from "/images/vscode.png";

import Particles from "./Particles";

import { TypeAnimation } from "react-type-animation";

import {
  Github as GithubIcon,
  Linkedin,
  Instagram,
  ArrowDownRight,
} from "lucide-react";

import { motion } from "framer-motion";

function Home() {
  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        overflow-hidden
        flex
        items-center
        justify-center
        px-6
        lg:px-12
      "
    >
      {/* ================= BACKGROUND ================= */}

      {/* Particles */}
      <div className="absolute inset-0 z-0">
        <Particles
          particleColors={["#ffffff", "#F3C623"]}
          particleCount={220}
          particleSpread={12}
          speed={0.08}
          particleBaseSize={120}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* Aurora Blur */}
      <div
        className="
          absolute
          top-[-150px]
          left-[-120px]
          w-[420px]
          h-[420px]
          rounded-full
          bg-[#F3C623]/20
          blur-[140px]
        "
      />

      <div
        className="
          absolute
          bottom-[-150px]
          right-[-120px]
          w-[420px]
          h-[420px]
          rounded-full
          bg-blue-500/20
          blur-[140px]
        "
      />

      {/* Grid */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.03]
          [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)]
          [background-size:70px_70px]
        "
      />

      {/* Floating Tech Icons */}
      <FloatingIcons />

      {/* ================= CONTENT ================= */}

      <div
        className="
          relative
          z-10
          max-w-7xl
          w-full
          flex
          flex-col
          items-center
          text-center
        "
      >
        {/* Badge */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          className="
            mb-8
            px-5
            py-2
            rounded-full
            border
            border-white/10
            bg-white/[0.04]
            backdrop-blur-xl
            text-white/70
            text-sm
            tracking-wide
            shadow-[0_0_30px_rgba(255,255,255,0.05)]
          "
        >
          ✦ Available for Freelance & Collaboration
        </motion.div>

        {/* Hello */}
        <motion.p
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.1,
          }}
          className="
            text-white/60
            text-lg
            md:text-xl
            mb-5
            tracking-wide
          "
        >
          Hello, I’m
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            delay: 0.2,
          }}
          className="
            text-5xl
            sm:text-6xl
            md:text-7xl
            lg:text-8xl
            font-black
            leading-none
            tracking-tight
            text-white
          "
        >
          Wildan
          <span
            className="
              text-[#F3C623]
              drop-shadow-[0_0_25px_rgba(243,198,35,0.6)]
            "
          >
            {" "}
            Zulfikar
          </span>
        </motion.h1>

        {/* Type Animation */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.9,
            delay: 0.4,
          }}
          className="
            mt-8
            text-2xl
            md:text-4xl
            font-bold
            text-white
            h-[60px]
          "
        >
          <span className="text-white/70">
            Fullstack{" "}
          </span>

          <span className="text-[#F3C623]">
            <TypeAnimation
              sequence={[
                "Web Developer",
                2500,
                "React Developer",
                2500,
                "Backend Engineer",
                2500,
                "UI/UX Enthusiast",
                2500,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </span>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            delay: 0.5,
          }}
          className="
            max-w-3xl
            mt-8
            text-white/50
            leading-relaxed
            text-base
            md:text-lg
          "
        >
          I build modern, scalable, and visually stunning
          web applications with exceptional user experience
          using React, Node.js, MongoDB, and cutting-edge
          frontend technologies.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            delay: 0.6,
          }}
          className="
            flex
            flex-col
            sm:flex-row
            gap-5
            mt-12
          "
        >
          {/* Primary */}
          <a
            href="#project"
            className="
              group
              relative
              overflow-hidden
              px-8
              py-4
              rounded-2xl
              bg-[#F3C623]
              text-black
              font-bold
              transition-all
              duration-300
              hover:scale-105
              hover:shadow-[0_0_40px_rgba(243,198,35,0.45)]
            "
          >
            <span
              className="
                relative
                z-10
                flex
                items-center
                gap-2
              "
            >
              View Projects
              <ArrowDownRight
                size={20}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                  group-hover:translate-y-1
                "
              />
            </span>

            <div
              className="
                absolute
                inset-0
                bg-white/20
                translate-y-full
                group-hover:translate-y-0
                transition-all
                duration-300
              "
            />
          </a>

          {/* Secondary */}
          <a
            href="/files/CV_WildanZulfikar.pdf"
            target="_blank"
            className="
              px-8
              py-4
              rounded-2xl
              border
              border-white/10
              bg-white/[0.04]
              backdrop-blur-xl
              text-white
              font-semibold
              hover:bg-white/[0.08]
              hover:border-[#F3C623]/30
              transition-all
              duration-300
            "
          >
            Download CV
          </a>
        </motion.div>

        {/* Social */}
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 1,
            delay: 0.9,
          }}
          className="
            flex
            items-center
            gap-5
            mt-14
          "
        >
          {[
            {
              icon: <GithubIcon size={20} />,
              href: "https://github.com/Wildanzulfikar",
            },
            {
              icon: <Instagram size={20} />,
              href: "https://instagram.com/wildanzul_",
            },
            {
              icon: <Linkedin size={20} />,
              href: "https://linkedin.com",
            },
          ].map((item, index) => (
            <motion.a
              key={index}
              whileHover={{
                y: -5,
                scale: 1.08,
              }}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="
                w-14
                h-14
                rounded-2xl
                border
                border-white/10
                bg-white/[0.04]
                backdrop-blur-xl
                flex
                items-center
                justify-center
                text-white/70
                hover:text-[#F3C623]
                hover:border-[#F3C623]/30
                hover:bg-[#F3C623]/10
                transition-all
                duration-300
              "
            >
              {item.icon}
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="
            absolute
            bottom-10
            hidden
            md:flex
            flex-col
            items-center
            gap-3
            text-white/40
          "
        >
          <span className="text-sm tracking-widest">
            SCROLL
          </span>

          <div
            className="
              w-[1px]
              h-16
              bg-gradient-to-b
              from-[#F3C623]
              to-transparent
            "
          />
        </motion.div>
      </div>
    </section>
  );
}

/* ================= FLOATING ICONS ================= */

function FloatingIcons() {
  const icons = [
    {
      image: Figma,
      className:
        "top-[18%] left-[10%] w-16 lg:w-24",
    },
    {
      image: Gitbash,
      className:
        "top-[20%] right-[12%] w-16 lg:w-24",
    },
    {
      image: Vscode,
      className:
        "bottom-[18%] left-[12%] w-16 lg:w-24",
    },
    {
      image: Github,
      className:
        "bottom-[15%] right-[10%] w-16 lg:w-24",
    },
  ];

  return (
    <>
      {icons.map((icon, index) => (
        <motion.img
          key={index}
          src={icon.image}
          alt="tech"
          animate={{
            y: [0, -18, 0],
          }}
          transition={{
            duration: 4 + index,
            repeat: Infinity,
          }}
          className={`
            absolute
            hidden
            lg:block
            opacity-70
            hover:opacity-100
            transition
            duration-300
            ${icon.className}
          `}
        />
      ))}
    </>
  );
}

export default Home;