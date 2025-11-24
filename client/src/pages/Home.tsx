import Hero from "../components/ui/hero";
import Servicios from "../components/servicios";
// import Stats from "../components/ui/stats";
import { motion } from "motion/react";
import { FloatingWhatsApp } from "@carlos8a/react-whatsapp-floating-button";
import logo from "../../public/logo.png";
import Beneficios from "../components/beneficios";
function Home() {
  return (
    <div className="flex flex-col  gap-16 items-center  ">
      <Hero />
      <div className="flex flex-col gap-8 items-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-bold text-2xl underline"
        >
          Nuestros servicios
        </motion.h1>
        <Servicios />
      </div>
      <div className="border-b-2 w-240"></div>

      <div className="flex flex-col gap-8 items-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-bold text-2xl text-center underline"
        >
          Beneficios
        </motion.h1>
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
    </div>
  );
}

export default Home;
