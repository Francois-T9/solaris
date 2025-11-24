import { motion } from "motion/react";

function Stats() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col lg:flex-row gap-4"
    >
      {/* Energía Solar */}
      <div className="card bg-base-100 w-80 shadow-sm transition-transform hover:scale-105 duration-300">
        <div className="flex justify-center pt-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="h-10 w-10 stroke-yellow-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 2v2m6.364 2.636l-1.414 1.414M20 12h-2M16.364 16.364l-1.414-1.414M12 20v-2M7.05 16.364l1.414-1.414M4 12h2M7.05 7.636l1.414 1.414M12 6a6 6 0 100 12 6 6 0 000-12z"
            />
          </svg>
        </div>

        <div className="card-body text-center flex items-center">
          <h2 className="card-title text-yellow-500">Energía Solar</h2>
          <p className="font-bold text-xl">100%</p>
          <p>Fuente limpia e inagotable de electricidad</p>
        </div>
      </div>

      {/* Energía Eólica */}
      <div className="card bg-base-100 w-80 shadow-sm transition-transform hover:scale-105 duration-300">
        <div className="flex justify-center pt-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="h-10 w-10 stroke-blue-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 12h16M12 4v16M4 4l16 16"
            />
          </svg>
        </div>

        <div className="card-body text-center flex items-center">
          <h2 className="card-title text-blue-500">Energía Eólica</h2>
          <p className="font-bold text-xl">0 Emisiones</p>
          <p>Genera electricidad sin contaminar el aire</p>
        </div>
      </div>

      {/* Energía Renovable General */}
      <div className="card bg-base-100 w-80 shadow-sm transition-transform hover:scale-105 duration-300">
        <div className="flex justify-center pt-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="h-10 w-10 stroke-green-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>

        <div className="card-body text-center flex items-center">
          <h2 className="card-title text-green-500">Beneficios Generales</h2>
          <p className="font-bold text-xl">Sostenible</p>
          <p>Reduce la dependencia de combustibles fósiles</p>
        </div>
      </div>
    </motion.div>
  );
}

export default Stats;
