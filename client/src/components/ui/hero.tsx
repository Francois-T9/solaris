import { motion } from "motion/react";
import background from "../../assets/pexels-kindelmedia-9799766.jpg";
import { Link } from "react-router";
function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="hero w-screen h-96 md:h-[500px] rounded-box"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-1 text-6xl font-bold">Solaris</h1>
          <h2 className="mb-5 text-4xl ">Energy solutions</h2>
          <h3 className="mb-5 text-xl "> Nosotros los hacemos por ti.</h3>
          <p className="mb-5">
            Ahorra energía,cuida el planeta y reduce tus costos.
          </p>
          <Link to="/cotizacion" className="btn btn-warning btn-lg">
            Obtén una cotización
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default Hero;
