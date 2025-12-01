import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import batteryImage from "../assets/Icône batterie 50.svg";
import solarPanelImage from "../assets/Icône solaire 24dp.svg";
import carImage from "../assets/Icône voiture électrique.svg";

function Servicios() {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col lg:flex-row gap-4   "
    >
      <div className="card bg-base-100 w-80 shadow-sm  transition-transform hover:scale-105 duration-300  border-8 border-amarillo ">
        <div className="flex  justify-center">
          <img className="w-25" src={solarPanelImage} alt="Shoes" />
        </div>

        <div className="card-body ">
          <h2 className="card-title">{t("home.servicios.card1.title")}</h2>
          <ul className="list-disc">
            <li>{t("home.servicios.card1.features.feature1")}</li>
            <li>{t("home.servicios.card1.features.feature2")}</li>
            <li>{t("home.servicios.card1.features.feature3")}</li>
            <li>{t("home.servicios.card1.features.feature4")}</li>
          </ul>
        </div>
      </div>
      <div className="card bg-base-100 w-80 shadow-sm  transition-transform hover:scale-105 duration-300  border-8 border-amarillo">
        <div className="flex  justify-center">
          <img className="w-25" src={carImage} alt="Shoes" />
        </div>

        <div className="card-body">
          <h2 className="card-title">{t("home.servicios.card2.title")}</h2>
          <ul className="list-disc">
            <li>{t("home.servicios.card2.features.feature1")}</li>
            <li>{t("home.servicios.card2.features.feature2")}</li>
            <li>{t("home.servicios.card2.features.feature3")}</li>
          </ul>
        </div>
      </div>
      <div className="card bg-base-100 w-80 shadow-sm  transition-transform hover:scale-105 duration-300  border-8 border-amarillo">
        <div className="flex  justify-center">
          {" "}
          <img className="w-25" src={batteryImage} alt="Shoes" />
        </div>

        <div className="card-body">
          <h2 className="card-title">{t("home.servicios.card3.title")}</h2>
          <ul className="list-disc">
            <li>{t("home.servicios.card3.features.feature1")}</li>
            <li>{t("home.servicios.card3.features.feature2")}</li>
            <li>{t("home.servicios.card3.features.feature3")}</li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

export default Servicios;
