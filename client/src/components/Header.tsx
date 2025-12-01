import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import logo from "../assets/logo_full.png";
import { LanguagePicker } from "./language-picker";
function Header() {
  const { t } = useTranslation();
  return (
    <div className="navbar bg-base-100 shadow-sm z-50  w-full top-0 sticky sm:pl-16 sm:pr-16">
      <div className="navbar-start gap-4">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={-1}
            className="menu menu-md sm:menu-lg dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to="/paquetes">{t("header.packages")}</Link>
            </li>
            <li>
              <Link to="/about">{t("header.about")}</Link>
            </li>
            <li>
              <Link to="/cotizacion">{t("header.quote")}</Link>
            </li>
            <li>
              <Link to="/contacto">{t("header.contact")}</Link>
            </li>
            <li>
              <Link to="/faq">{t("header.faq")}</Link>
            </li>
          </ul>
        </div>
        <Link to="/" className="p-0 flex items-center ">
          <img
            src={logo}
            className="h-14 w-auto object-contain sm:h-18"
            alt="Company Logo"
          />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/paquetes">{t("header.packages")}</Link>
          </li>
          <li>
            <Link to="/about">{t("header.about")}</Link>
          </li>
          <li>
            <Link to="/cotizacion">{t("header.quote")}</Link>
          </li>
          <li>
            <Link to="/contacto">{t("header.contact")}</Link>
          </li>
          <li>
            <Link to="/faq">{t("header.faq")}</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end flex gap-4">
        <div className="flex flex-col sm:flex-row gap-2">
          <LanguagePicker />
          <Link to="/cotizacion" className="btn btn-warning sm:btn-lg">
            {t("header.quoteNow")}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
