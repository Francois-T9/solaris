import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import background from "../../assets/pexels-kindelmedia-9799766.jpg";

function Hero() {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="hero w-screen h-96 md:h-[500px] rounded-box"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-1 text-6xl font-bold">{t("home.hero.title")}</h1>
          <h2 className="mb-5 text-4xl ">{t("home.hero.subtitle")}</h2>
          <h3 className="mb-5 text-xl ">{t("home.hero.tagline")}</h3>
          <p className="mb-5">{t("home.hero.description")}</p>

          <Link to="/paquetes" className="btn btn-warning btn-lg">
            {t("home.hero.button")}
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default Hero;
