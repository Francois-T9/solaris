import { motion } from "motion/react";
import piggyBank from "../assets/piggy-bank-outline.svg";
import battery from "../assets/battery-charging.svg";
import board from "../assets/clipboard-edit-outline.svg";
import lightBulb from "../assets/lightbulb-on-outline.svg";
function Beneficios() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col lg:flex-row gap-4 "
    >
      <div className="card bg-base-100 w-80 lg:w-60 shadow-sm border-8 border-amarillo transition-transform hover:scale-105 duration-300 ">
        <div className="flex  justify-center">
          <img className="w-25" src={board} alt="Shoes" />
        </div>

        <div className="card-body">
          <h2 className="card-title">Sin tramites tardados</h2>
          <p>
            Nosotros resolvemos todos los tramites de manera rápida y eficaz
          </p>
        </div>
      </div>
      <div className="card bg-base-100 w-80 lg:w-60  shadow-sm border-8 border-amarillo transition-transform hover:scale-105 duration-300">
        <div className="flex  justify-center">
          <img className="w-25" src={lightBulb} alt="Shoes" />
        </div>

        <div className="card-body">
          <h2 className="card-title">Reduce tu Huella de Carbono</h2>
          <p>Cada kWh solar evita emisiones y cuida el planeta</p>
        </div>
      </div>
      <div className="card bg-base-100 w-80 lg:w-60  shadow-sm border-8 border-amarillo transition-transform hover:scale-105 duration-300">
        <div className="flex  justify-center">
          {" "}
          <img className="w-25" src={piggyBank} alt="Shoes" />
        </div>

        <div className="card-body">
          <h2 className="card-title">Ahorro a Largo Plazo</h2>
          <p>
            Reduce tu recibo desde el primer mes y recupera tu inversión en
            pocos años
          </p>
        </div>
      </div>
      <div className="card bg-base-100 w-80 lg:w-60  shadow-sm border-8 border-amarillo transition-transform hover:scale-105 duration-300">
        <div className="flex  justify-center">
          {" "}
          <img className="w-25" src={battery} alt="Shoes" />
        </div>

        <div className="card-body">
          <h2 className="card-title">Energía Segura y Confiable</h2>
          <p>Menos apagones, más tranquilidad</p>
        </div>
      </div>
    </motion.div>
  );
}

export default Beneficios;
