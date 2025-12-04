import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col   items-center gap-4 "
    >
      <h1 className="text-2xl font-bold underline">{t("about.title")}</h1>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="card bg-base-100 w-80 shadow-sm ">
          <div className="flex items-center w-full justify-center">
            <div className="avatar">
              <div className="w-24 rounded-full">
                <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
              </div>
            </div>
          </div>
          <div className="card-body">
            <h2 className="card-title">Nombre Apellido</h2>
            <p>Descripcion</p>
          </div>
        </div>
        <div className="card bg-base-100 w-80 shadow-sm ">
          <div className="flex items-center w-full justify-center">
            <div className="avatar">
              <div className="w-24 rounded-full">
                <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
              </div>
            </div>
          </div>
          <div className="card-body">
            <h2 className="card-title">Nombre Apellido</h2>
            <p>Descripcion</p>
          </div>
        </div>
      </div>
      <div className="card w-80 lg:w-240 bg-base-100 card-sm shadow-sm border-8 border-azul">
        <div className="card-body">
          <p className="text-xl">{t("about.mission")}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
