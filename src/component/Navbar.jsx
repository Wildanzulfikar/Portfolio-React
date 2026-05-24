import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ArrowUpRight,
} from "lucide-react";

const items = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Project", href: "#project" },
  { label: "Sertifikat", href: "#sertifikat" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("Home");
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let lastScroll = 0;

    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (
        currentScroll > lastScroll &&
        currentScroll > 100
      ) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      lastScroll = currentScroll;
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{
            y: -100,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          exit={{
            y: -100,
            opacity: 0,
          }}
          transition={{
            duration: 0.4,
          }}
          className="
            fixed
            top-5
            left-1/2
            -translate-x-1/2
            z-50
            w-[95%]
            max-w-7xl
          "
        >
          {/* Glow Background */}
          <div
            className="
              absolute
              inset-0
              rounded-[30px]
              bg-gradient-to-r
              from-[#FFB22C]/10
              via-transparent
              to-[#FFB22C]/10
              blur-2xl
            "
          ></div>

          {/* Navbar */}
          <div
            className="
              relative
              h-20
              px-6
              md:px-10
              flex
              items-center
              justify-between
              rounded-[30px]
              border
              border-white/10
              bg-black/50
              backdrop-blur-2xl
              shadow-[0_8px_40px_rgba(0,0,0,0.6)]
              overflow-hidden
            "
          >
            {/* Light Effect */}
            <div
              className="
                absolute
                top-0
                right-32
                w-40
                h-full
                bg-white/10
                blur-2xl
                rotate-12
              "
            ></div>

            {/* Brand */}
            <Brand />

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-3 relative z-10">
              {items.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() =>
                    setActive(item.label)
                  }
                  className={`
                    relative
                    px-6
                    py-3
                    rounded-full
                    text-sm
                    font-semibold
                    transition-all
                    duration-300
                    overflow-hidden
                    ${
                      active === item.label
                        ? `
                          text-black
                          bg-[#FFB22C]
                          shadow-[0_0_25px_rgba(255,178,44,0.7)]
                        `
                        : `
                          text-white/70
                          hover:text-white
                          hover:bg-white/5
                        `
                    }
                  `}
                >
                  {/* Shine */}
                  {active === item.label && (
                    <div
                      className="
                        absolute
                        inset-0
                        bg-gradient-to-r
                        from-transparent
                        via-white/40
                        to-transparent
                        -translate-x-full
                        animate-[shine_2s_linear_infinite]
                      "
                    ></div>
                  )}

                  <span className="relative z-10">
                    {item.label}
                  </span>
                </a>
              ))}
            </div>

            {/* Right */}
            <div className="hidden lg:flex relative z-10">
              <ButtonContactMe />
            </div>

            {/* Mobile Button */}
            <button
              onClick={() =>
                setMenuOpen(!menuOpen)
              }
              className="
                lg:hidden
                text-white
                relative
                z-10
              "
            >
              {menuOpen ? (
                <X size={30} />
              ) : (
                <Menu size={30} />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{
                  opacity: 0,
                  y: -20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -20,
                }}
                className="
                  lg:hidden
                  mt-4
                  p-6
                  rounded-[30px]
                  border
                  border-white/10
                  bg-black/60
                  backdrop-blur-2xl
                  flex
                  flex-col
                  gap-4
                "
              >
                {items.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => {
                      setActive(item.label);
                      setMenuOpen(false);
                    }}
                    className="
                      text-white/80
                      hover:text-[#FFB22C]
                      transition-all
                      duration-300
                      font-medium
                    "
                  >
                    {item.label}
                  </a>
                ))}

                <ButtonContactMe />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Brand() {
  return (
    <h1
      className="
        relative
        z-10
        font-black
        text-3xl
        tracking-tight
        text-white
      "
    >
      Wildan
      <span className="text-[#FFB22C]">
        Zulfikar
      </span>
    </h1>
  );
}

function ButtonContactMe() {
  return (
    <a
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
        px-7
        py-3.5
        rounded-full
        bg-[#FFB22C]
        text-black
        font-bold
        text-sm
        transition-all
        duration-500
        hover:scale-105
        hover:shadow-[0_0_30px_rgba(255,178,44,0.7)]
      "
    >
      {/* Shine */}
      <div
        className="
          absolute
          top-0
          left-[-120%]
          w-full
          h-full
          bg-gradient-to-r
          from-transparent
          via-white/40
          to-transparent
          skew-x-12
          group-hover:left-[150%]
          transition-all
          duration-1000
        "
      ></div>

      <span className="relative z-10">
        Contact Me
      </span>

      <div
        className="
          relative
          z-10
          w-7
          h-7
          rounded-full
          bg-black/10
          flex
          items-center
          justify-center
        "
      >
        <ArrowUpRight size={16} />
      </div>
    </a>
  );
}

export default Navbar;