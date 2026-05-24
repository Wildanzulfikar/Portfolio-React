function ServicesItemCard({
  keahlian,
  text,
}) {
  return (
    <div
      className="
        flex
        flex-col
        items-center
        text-center
      "
    >
      <h1
        className="
          text-[20px]
          font-black
          text-white
          mb-5
          uppercase
          leading-tight
        "
      >
        {keahlian}
      </h1>

      <p
        className="
          text-white/65
          text-[16px]
          leading-9
          max-w-[260px]
        "
      >
        {text}
      </p>
    </div>
  );
}

export default ServicesItemCard;