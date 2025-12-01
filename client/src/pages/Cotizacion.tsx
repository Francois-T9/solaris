import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import CotizacionAutos from "../components/cotizacion-autos";
import CotizacionPaneles from "../components/cotizacion-paneles";
import Steps from "../components/ui/steps";

function Cotizacion() {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col items-center gap-4 "
    >
      <h1 className="text-2xl font-bold underline">{t("quote.title")}</h1>
      <Steps />
      {/* name of each tab group should be unique */}
      <div className="tabs tabs-lift ">
        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label={t("quote.tabs.panels")}
          defaultChecked
        />
        <div className="tab-content bg-base-100 border-base-300 p-4   ">
          <CotizacionPaneles />
        </div>

        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label={t("quote.tabs.chargers")}
        />
        <div className="tab-content bg-base-100 border-base-300 p-4  ">
          <CotizacionAutos />
        </div>
      </div>
    </motion.div>
  );
}

export default Cotizacion;
