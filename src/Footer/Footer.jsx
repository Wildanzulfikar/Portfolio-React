import {
  Github,
  Instagram,
  Linkedin,
  ArrowUp,
} from "lucide-react";

import { motion } from "framer-motion";

function Footer() {
  return (
    <footer
      className="
        relative
        overflow-hidden
        border-t
        border-white/10
        bg-black
        pt-24
        pb-10
        px-6
        lg:px-16
      "
    >
      {/* Aurora Background */}
      <div
        className="
          absolute
          top-[-120px]
          left-[-120px]
          w-[400px]
          h-[400px]
          rounded-full
          bg-[#FFB22C]/10
          blur-[140px]
        "
      />

      <div
        className="
          absolute
          bottom-[-120px]
          right-[-120px]
          w-[400px]
          h-[400px]
          rounded-full
          bg-blue-500/10
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
          [background-size:60px_60px]
        "
      />

      <div
        className="
          relative
          z-10
          max-w-7xl
          mx-auto
        "
      >
        {/* TOP */}
        <div
          className="
            flex
            flex-col
            lg:flex-row
            items-center
            justify-between
            gap-14
            pb-16
            border-b
            border-white/10
          "
        >
          {/* Left */}
          <div className="max-w-xl">
            <motion.h1
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
              }}
              viewport={{ once: true }}
              className="
                text-4xl
                md:text-5xl
                font-black
                text-white
                leading-tight
              "
            >
              Let’s Build
              <span className="text-[#FFB22C]">
                {" "}Something Amazing
              </span>
            </motion.h1>

            <p
              className="
                text-white/50
                leading-relaxed
                mt-6
                text-lg
              "
            >
              Passionate Fullstack Web Developer focused on
              creating modern digital experiences with
              scalable architecture and beautiful user
              interfaces.
            </p>
          </div>

          {/* Right CTA */}
          <motion.a
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.97,
            }}
            href="https://wa.me/6281188005079"
            target="_blank"
            rel="noopener noreferrer"
            className="
              group
              relative
              overflow-hidden
              flex
              items-center
              gap-3
              rounded-3xl
              bg-[#FFB22C]
              px-8
              py-5
              text-black
              font-bold
              shadow-[0_0_40px_rgba(255,178,44,0.3)]
            "
          >
            <span className="relative z-10">
              Let’s Talk
            </span>

            <ArrowUp
              className="
                relative
                z-10
                rotate-45
                transition-transform
                duration-300
                group-hover:translate-x-1
                group-hover:-translate-y-1
              "
            />

            {/* Shine */}
            <div
              className="
                absolute
                inset-0
                translate-y-full
                bg-white/20
                transition-all
                duration-300
                group-hover:translate-y-0
              "
            />
          </motion.a>
        </div>

        {/* CENTER */}
        <div
          className="
            flex
            flex-col
            lg:flex-row
            items-center
            justify-between
            gap-10
            py-12
          "
        >
          {/* Brand */}
          <div className="text-center lg:text-left">
            <h1
              className="
                text-3xl
                font-black
                tracking-tight
                text-white
              "
            >
              Wildan
              <span className="text-[#FFB22C]">
                Zulfikar
              </span>
            </h1>

            <p
              className="
                text-white/40
                mt-3
                text-sm
                tracking-wide
              "
            >
              FULLSTACK WEB DEVELOPER
            </p>
          </div>

          {/* Navigation */}
          <div
            className="
              flex
              flex-wrap
              justify-center
              gap-8
              text-white/60
              text-sm
              font-medium
            "
          >
            <a
              href="#home"
              className="
                hover:text-[#FFB22C]
                transition
              "
            >
              Home
            </a>

            <a
              href="#about"
              className="
                hover:text-[#FFB22C]
                transition
              "
            >
              About
            </a>

            <a
              href="#project"
              className="
                hover:text-[#FFB22C]
                transition
              "
            >
              Projects
            </a>

            <a
              href="#sertifikat"
              className="
                hover:text-[#FFB22C]
                transition
              "
            >
              Certificates
            </a>
          </div>

          {/* Social */}
          <div className="flex items-center gap-5">
            {[
              {
                icon: <Github size={20} />,
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
                  y: -4,
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
                  bg-white/[0.03]
                  backdrop-blur-xl
                  flex
                  items-center
                  justify-center
                  text-white/70
                  hover:text-[#FFB22C]
                  hover:border-[#FFB22C]/30
                  hover:bg-[#FFB22C]/10
                  transition-all
                  duration-300
                "
              >
                {item.icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div
          className="
            pt-8
            border-t
            border-white/10
            flex
            flex-col
            md:flex-row
            items-center
            justify-between
            gap-4
          "
        >
          <p
            className="
              text-white/35
              text-sm
            "
          >
            © {new Date().getFullYear()} Wildan
            Zulfikar. All rights reserved.
          </p>

          <p
            className="
              text-white/25
              text-sm
            "
          >
            Designed & Developed with passion.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;