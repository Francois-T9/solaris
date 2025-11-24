import logo from "../assets/logo_full.png";

function Footer() {
  return (
    <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10  bottom-0">
      <img
        src={logo}
        className="h-14 w-auto object-contain sm:h-18"
        alt="Company Logo"
      />
      <nav>
        <h6 className="footer-title">Servicios</h6>
        <a className="link link-hover">Optimizacion energetica</a>
        <a className="link link-hover">Instalacion de paneles</a>
      </nav>
      <nav>
        <h6 className="footer-title">Compañia</h6>
        <a className="link link-hover">¿Quienes somos?</a>
        <a className="link link-hover">Contacto</a>
        <a className="link link-hover">Vacantes</a>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Terminos de uso</a>
        <a className="link link-hover">Politica de privacidad</a>
        <a className="link link-hover">Cookies</a>
      </nav>
      <form>
        <h6 className="footer-title">Newsletter</h6>
        <fieldset className="w-80">
          <div className="join">
            <input
              type="text"
              placeholder="username@site.com"
              className="input input-bordered join-item"
            />
            <button className="btn btn-primary join-item">Subscribete</button>
          </div>
        </fieldset>
      </form>
    </footer>
  );
}

export default Footer;
