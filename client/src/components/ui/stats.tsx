import { motion } from "motion/react";
import React from "react";

function Stats() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="stats shadow  flex flex-col md:flex-row "
    >
      {/* Energía Solar */}
      <div className="stat transition-transform hover:scale-105 duration-300">
        <div className="stat-figure text-yellow-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-8 w-8 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 2v2m6.364 2.636l-1.414 1.414M20 12h-2M16.364 16.364l-1.414-1.414M12 20v-2M7.05 16.364l1.414-1.414M4 12h2M7.05 7.636l1.414 1.414M12 6a6 6 0 100 12 6 6 0 000-12z"
            ></path>
          </svg>
        </div>
        <div className="stat-title">Energía Solar</div>
        <div className="stat-value text-yellow-500">100%</div>
        <div className="stat-desc">
          Fuente limpia e inagotable de electricidad
        </div>
      </div>

      {/* Energía Eólica */}
      <div className="stat transition-transform hover:scale-105 duration-300">
        <div className="stat-figure text-blue-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-8 w-8 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 12h16M12 4v16M4 4l16 16"
            ></path>
          </svg>
        </div>
        <div className="stat-title">Energía Eólica</div>
        <div className="stat-value text-blue-500">0 Emisiones</div>
        <div className="stat-desc">
          Genera electricidad sin contaminar el aire
        </div>
      </div>

      {/* Energía Renovable General */}
      <div className="stat transition-transform hover:scale-105 duration-300">
        <div className="stat-figure text-green-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-8 w-8 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
        </div>
        <div className="stat-title">Beneficios Generales</div>
        <div className="stat-value text-green-500">Sostenible</div>
        <div className="stat-desc">
          Reduce la dependencia de combustibles fósiles
        </div>
      </div>
    </motion.div>
  );
}

export default Stats;
