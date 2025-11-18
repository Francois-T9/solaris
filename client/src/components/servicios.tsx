import { motion } from "motion/react";
import carImage from "../assets/car-electric.svg";
import batteryImage from "../assets/battery-charging-50.svg";
import solarPanelImage from "../assets/solar-panel-large.svg";
function Servicios() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col lg:flex-row gap-4 "
    >
      <div className="card bg-base-100 w-80 shadow-sm  transition-transform hover:scale-105 duration-300 ">
        <div className="flex  justify-center">
          <img className="w-25" src={solarPanelImage} alt="Shoes" />
        </div>

        <div className="card-body">
          <h2 className="card-title">Instalación de paneles solares</h2>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
        </div>
      </div>
      <div className="card bg-base-100 w-80 shadow-sm  transition-transform hover:scale-105 duration-300">
        <div className="flex  justify-center">
          <img className="w-25" src={carImage} alt="Shoes" />
        </div>

        <div className="card-body">
          <h2 className="card-title">Cargadores eléctricos</h2>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
        </div>
      </div>
      <div className="card bg-base-100 w-80 shadow-sm  transition-transform hover:scale-105 duration-300">
        <div className="flex  justify-center">
          {" "}
          <img className="w-25" src={batteryImage} alt="Shoes" />
        </div>

        <div className="card-body">
          <h2 className="card-title">Baterías</h2>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default Servicios;
