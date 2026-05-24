import { Download } from "lucide-react";

function ButtonDownloadCV() {
  return (
    <div className="mt-10">
      <a
        href="/files/CV_WildanZulfikar.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="
          group
          inline-flex
          items-center
          gap-3
          bg-[#FFB22C]
          hover:bg-amber-400
          text-black
          font-semibold
          px-8
          py-4
          rounded-2xl
          transition-all
          duration-300
          hover:scale-105
          shadow-[0_0_30px_rgba(255,178,44,0.4)]
        "
      >
        <Download
          size={20}
          className="group-hover:translate-y-[2px] transition-all"
        />

        Download CV
      </a>
    </div>
  );
}

export default ButtonDownloadCV;