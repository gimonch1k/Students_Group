import { NavLink } from "react-router";

import "./header.scss";

function Header() {
  return (
    <header>
      <nav>
        <div className="burger">
          <span></span>
          <span></span>
          <span></span>

          <NavLink to="/">Головна</NavLink>
          <NavLink to="/items">Список</NavLink>
          <NavLink to="/add">Додати</NavLink>
          <NavLink to="/about">Про додаток</NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Header;
