import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import battery from "../assets/battery-charging.svg";
import board from "../assets/clipboard-edit-outline.svg";
import lightBulb from "../assets/Icône Light Mode.svg";
import piggyBank from "../assets/savings_24dp_02224A_FILL0_wght400_GRAD0_opsz24.svg";

function Beneficios() {
  const { t } = useTranslation();

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
          <h2 className="card-title">{t("home.beneficios.card1.title")}</h2>
          <p>{t("home.beneficios.card1.description")}</p>
        </div>
      </div>
      <div className="card bg-base-100 w-80 lg:w-60  shadow-sm border-8 border-amarillo transition-transform hover:scale-105 duration-300">
        <div className="flex  justify-center">
          <img className="w-25" src={lightBulb} alt="Shoes" />
        </div>

        <div className="card-body">
          <h2 className="card-title">{t("home.beneficios.card2.title")}</h2>
          <p>{t("home.beneficios.card2.description")}</p>
        </div>
      </div>
      <div className="card bg-base-100 w-80 lg:w-60  shadow-sm border-8 border-amarillo transition-transform hover:scale-105 duration-300">
        <div className="flex  justify-center">
          {" "}
          <img className="w-25" src={piggyBank} alt="Shoes" />
        </div>

        <div className="card-body">
          <h2 className="card-title">{t("home.beneficios.card3.title")}</h2>
          <p>{t("home.beneficios.card3.description")}</p>
        </div>
      </div>
      <div className="card bg-base-100 w-80 lg:w-60  shadow-sm border-8 border-amarillo transition-transform hover:scale-105 duration-300">
        <div className="flex  justify-center">
          {" "}
          <img className="w-25" src={battery} alt="Shoes" />
        </div>

        <div className="card-body">
          <h2 className="card-title">{t("home.beneficios.card4.title")}</h2>
          <p>{t("home.beneficios.card4.description")}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default Beneficios;
