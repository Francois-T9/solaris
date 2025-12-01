import Ahorros from "@/components/ahorros";
import CellEfficiencyChart from "@/components/cell-efficiency-chart";
import SunChart from "@/components/sun-chart";
import { FloatingWhatsApp } from "@carlos8a/react-whatsapp-floating-button";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import logo from "../../public/logo.png";
import Beneficios from "../components/beneficios";
import Servicios from "../components/servicios";
import Hero from "../components/ui/hero";

function Home() {
  const { t } = useTranslation();

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
          {t("home.whyInvest")}
        </h1>
        <div className="flex flex-col lg:flex-row gap-4 items-center">
          <SunChart />
          <CellEfficiencyChart />
          {/* <Stats /> */}
        </div>
        <h1 className="font-bold text-2xl underline w-80 sm:w-240 text-center">
          {t("home.howMuchSave")}
        </h1>
        <Ahorros />
      </div>
      <div className="border-b-2 w-80 lg:w-240"></div>
      <div className="flex flex-col gap-8 items-center">
        <h1 className="font-bold text-2xl underline">
          {t("home.ourServices")}
        </h1>
        <Servicios />
      </div>
      <div className="border-b-2 w-80 lg:w-240"></div>

      <div className="flex flex-col gap-8 items-center">
        <h1 className="font-bold text-2xl text-center underline">
          {t("home.benefits")}
        </h1>
        {/* <Stats /> */}

        <Beneficios />
        <FloatingWhatsApp
          phoneNumber="+52 1 777 831 1043" // Required
          accountName={t("home.whatsapp.accountName")} // Optional
          avatar={logo} // Optional
          initialMessageByServer={t("home.whatsapp.initialMessageByServer")} // Optional
          initialMessageByClient={t("home.whatsapp.initialMessageByClient")} // Optional
          statusMessage={t("home.whatsapp.statusMessage")} // Optional
          startChatText={t("home.whatsapp.startChatText")} // Optional
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
