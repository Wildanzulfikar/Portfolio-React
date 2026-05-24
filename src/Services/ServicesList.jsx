import ServicesItem from "./ServicesItem";
import { motion } from "framer-motion";

function ServicesList({ services }) {
  return (
    <div
      className="
        max-w-7xl
        mx-auto
        grid
        grid-cols-1
        md:grid-cols-2
        xl:grid-cols-3
        gap-8
        lg:gap-10
        place-items-center
      "
    >
      {services.map((service, index) => (
        <motion.div
          key={service.id}
          initial={{
            opacity: 0,
            y: 60,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
            delay: index * 0.15,
          }}
          viewport={{ once: true }}
          className="w-full flex justify-center"
        >
          <ServicesItem {...service} />
        </motion.div>
      ))}
    </div>
  );
}

export default ServicesList;