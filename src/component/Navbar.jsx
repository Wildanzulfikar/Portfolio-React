import { useState } from "react";
import GooeyNav from "./GoeyNav";
import { Menu, X } from "lucide-react"; // Install dengan: npm install lucide-react

const items = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Project", href: "#project" },
  { label: "Sertifikat", href: "#sertifikat" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 bg-blue-900 shadow-md">
      {/* Navbar Atas */}
      <div className="h-20 flex items-center justify-between lg:justify-around px-4 md:px-8">
        <Brand />

        {/* Desktop Navigasi */}
        <div className="hidden lg:block">
          <Navigasi />
        </div>

        {/* Mobile Hamburger Button */}
        <div className="lg:hidden flex items-center gap-3">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white focus:outline-none"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Contact button desktop only */}
        <div className="hidden lg:block">
          <ButtonContactMe />
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden px-4 pb-4 flex flex-col gap-3 bg-blue-800">
          {items.map((item, i) => (
            <a
              key={i}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="text-white font-semibold hover:text-[#FFB22C] transition"
            >
              {item.label}
            </a>
          ))}
          <ButtonContactMe />
        </div>
      )}
    </div>
  );
}

function Navigasi() {
  return (
    <div className="hidden lg:block">
      <GooeyNav
        items={items}
        particleCount={15}
        particleDistances={[90, 10]}
        particleR={100}
        initialActiveIndex={0}
        animationTime={600}
        timeVariance={300}
        colors={[1, 2, 3, 1, 2, 3, 1, 4]}
      />
    </div>
  );
}

function Brand() {
  return (
    <h1 className="font-extrabold text-2xl text-white">
      Wildan<span className="text-[#FFB22C]">Zulfikar</span>
    </h1>
  );
}

function ButtonContactMe() {
  return (
    <a
      className="px-4 py-1 font-semibold text-white rounded-[3px] bg-[#FFB22C] text-sm"
      href="https://wa.me/6281188005079" target="_blank"
    >
      Contact Me
    </a>
  );
}

export default Navbar;
