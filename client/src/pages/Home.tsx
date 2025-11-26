import Hero from "../components/ui/hero";
import Servicios from "../components/servicios";
import Ahorros from "@/components/ahorros";
import { motion } from "motion/react";
import { FloatingWhatsApp } from "@carlos8a/react-whatsapp-floating-button";
import logo from "../../public/logo.png";
import Beneficios from "../components/beneficios";
import SunChart from "@/components/sun-chart";
import CellEfficiencyChart from "@/components/cell-efficiency-chart";
function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col  gap-16 items-center  "
    >
      <Hero />

      <div className="flex flex-col gap-4 items-center  ">
        <h1 className="font-bold text-2xl underline w-80 sm:w-240 text-center">
          ¿Porqué invertir en paneles solares ?
        </h1>
        <div className="flex flex-col lg:flex-row gap-4 items-center">
          <SunChart />
          <CellEfficiencyChart />
          {/* <Stats /> */}
        </div>
        <h1 className="font-bold text-2xl underline w-80 sm:w-240 text-center">
          ¿Que tanto puedes ahorrar ?
        </h1>
        <Ahorros />
      </div>
      <div className="border-b-2 w-80 lg:w-240"></div>
      <div className="flex flex-col gap-8 items-center">
        <h1 className="font-bold text-2xl underline">Nuestros servicios</h1>
        <Servicios />
      </div>
      <div className="border-b-2 w-80 lg:w-240"></div>

      <div className="flex flex-col gap-8 items-center">
        <h1 className="font-bold text-2xl text-center underline">Beneficios</h1>
        {/* <Stats /> */}

        <Beneficios />
        <FloatingWhatsApp
          phoneNumber="+52 1 777 831 1043" // Required
          accountName="Solaris | Energy Solutions" // Optional
          avatar={logo} // Optional
          initialMessageByServer="Hola! ¿Cómo te podemos ayudar?" // Optional
          initialMessageByClient="¡Hola! He encontrado tu número en tu página web. Te escribo acerca de..." // Optional
          statusMessage="Disponible" // Optional
          startChatText="Empieza a hablar con nosotros!" // Optional
          // tooltipText="Need help? Click to chat!" // Optional
          allowEsc={true} // Optional
          // Explore all available props below
          allowClickAway={true}
        />
      </div>
    </motion.div>
  );
}

export default Home;
