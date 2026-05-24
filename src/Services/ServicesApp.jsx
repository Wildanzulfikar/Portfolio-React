import ServicesList from "./ServicesList";
import { getDataServices } from "./Services";

function ServicesApp() {
  const services = getDataServices();

  return (
    <section
      id="services"
      className="
        relative
        overflow-hidden
        py-32
      "
    >
      {/* Background Glow */}
      <div
        className="
          absolute
          top-0
          left-0
          w-[500px]
          h-[500px]
          bg-[#FFB22C]/10
          blur-[150px]
          rounded-full
        "
      />

      <div
        className="
          absolute
          bottom-0
          right-0
          w-[500px]
          h-[500px]
          bg-blue-500/10
          blur-[150px]
          rounded-full
        "
      />

      {/* Main Container */}
      <div
        className="
          relative
          z-10
          max-w-7xl
          mx-auto
          px-6
          lg:px-10
        "
      >
        {/* Header */}
        <div className="text-center">
          <p
            className="
              uppercase
              tracking-[0.35em]
              text-[#FFB22C]
              text-sm
              font-semibold
              mb-4
            "
          >
            WHAT I PROVIDE
          </p>

          <h1
            className="
              text-5xl
              md:text-6xl
              font-black
              text-white
              tracking-tight
            "
          >
            My Services
          </h1>

          <div
            className="
              w-24
              h-1
              bg-[#FFB22C]
              rounded-full
              mx-auto
              mt-5
              shadow-[0_0_20px_rgba(255,178,44,0.8)]
            "
          />
        </div>

        {/* Services */}
        <div className="mt-20">
          <ServicesList services={services} />
        </div>
      </div>
    </section>
  );
}

export default ServicesApp;