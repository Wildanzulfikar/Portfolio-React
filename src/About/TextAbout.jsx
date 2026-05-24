function TextAbout() {
  return (
    <>
        <div className="space-y-6 text-gray-300 leading-relaxed">
      <p className="text-lg md:text-xl">
        Saya adalah mahasiswa Teknik Informatika PNJ yang fokus pada
        pengembangan <span className="text-white font-semibold">Fullstack Web Application</span>.
      </p>

      <p className="text-base md:text-lg">
        Berpengalaman membangun aplikasi modern menggunakan
        <span className="text-[#FFB22C]"> React.js</span>,
        <span className="text-[#FFB22C]"> Node.js</span>,
        dan
        <span className="text-[#FFB22C]"> MongoDB</span>.
      </p>

      <p className="text-base md:text-lg">
        Saya memiliki ketertarikan tinggi pada UI modern,
        backend architecture, dan membangun solusi digital
        yang cepat, scalable, serta responsif.
      </p>
    </div>
<div className="flex flex-wrap gap-3 mt-8">
  {[
    "React JS",
    "Node JS",
    "Express",
    "MongoDB",
    "Tailwind CSS",
    "Laravel",
  ].map((skill) => (
    <div
      key={skill}
      className="
        px-4
        py-2
        rounded-full
        bg-white/5
        border border-white/10
        text-sm
        hover:border-[#FFB22C]
        transition-all
      "
    >
      {skill}
    </div>
  ))}
</div>
    </>
    
    
  );
}

export default TextAbout;