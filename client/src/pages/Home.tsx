import Hero from "../components/ui/hero";
import Servicios from "../components/servicios";
import Stats from "../components/ui/stats";
import { motion } from "motion/react";
function Home() {
  return (
    <div className="flex flex-col  gap-8 items-center ">
      <Hero />
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="font-bold text-2xl"
      >
        Nuestros servicios
      </motion.h1>
      <Servicios />
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="font-bold text-2xl text-center"
      >
        ¿Por qué creer en las energías renovables?
      </motion.h1>
      <Stats />
    </div>
  );
}

export default Home;
