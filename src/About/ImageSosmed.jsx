import {
  Github,
  Instagram,
  Linkedin,
} from "lucide-react";

function ImageSosmed() {
  return (
    <div className="flex justify-center gap-5 mt-8">
      <a
        href="https://github.com/Wildanzulfikar"
        target="_blank"
        rel="noopener noreferrer"
        className="
          p-4
          rounded-2xl
          bg-white/5
          border border-white/10
          hover:bg-[#FFB22C]
          hover:text-black
          transition-all
          duration-300
          hover:scale-110
        "
      >
        <Github size={22} />
      </a>

      <a
        href="https://instagram.com/wildanzul_"
        target="_blank"
        rel="noopener noreferrer"
        className="
          p-4
          rounded-2xl
          bg-white/5
          border border-white/10
          hover:bg-[#FFB22C]
          hover:text-black
          transition-all
          duration-300
          hover:scale-110
        "
      >
        <Instagram size={22} />
      </a>

      <a
        href="https://www.linkedin.com/in/wildan-zulfikar-398531293/"
        target="_blank"
        rel="noopener noreferrer"
        className="
          p-4
          rounded-2xl
          bg-white/5
          border border-white/10
          hover:bg-[#FFB22C]
          hover:text-black
          transition-all
          duration-300
          hover:scale-110
        "
      >
        <Linkedin size={22} />
      </a>
    </div>
  );
}

export default ImageSosmed;