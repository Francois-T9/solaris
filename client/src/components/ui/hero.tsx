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
          <h1 className="mb-1 text-5xl font-bold">Solaris</h1>
          <h2 className="mb-5 text-2xl ">Energy solutions</h2>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <Link to="/cotizacion" className="btn btn-warning">
            Obtén una cotización
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default Hero;
