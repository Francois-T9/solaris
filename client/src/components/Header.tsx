import { Link } from "react-router";
function Header() {
  return (
    <div className="navbar bg-base-100 shadow-sm z-50  w-full top-0 sticky sm:pl-16 sm:pr-16">
      <div className="navbar-start">
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to="/about">¿Quiénes somos?</Link>
            </li>
            <li>
              <Link to="/cotizacion">Cotizar</Link>
            </li>

            <li>
              <Link to="/contacto">Contacto</Link>
            </li>
            <li>
              <Link to="/faq">F.A.Q</Link>
            </li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl">
          Solaris
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/about">¿Quiénes somos?</Link>
          </li>
          <li>
            <Link to="/cotizacion">Cotizar</Link>
          </li>

          <li>
            <Link to="/contacto">Contacto</Link>
          </li>
          <li>
            <Link to="/faq">F.A.Q</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link to="/cotizacion" className="btn btn-warning">
          Cotiza ya!
        </Link>
      </div>
    </div>
  );
}

export default Header;
