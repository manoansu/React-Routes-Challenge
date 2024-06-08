import "./style.css";
import HomeImage from "../assets/home.svg";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="navbar-content-container container">
        <nav className="navbar-header container">
          <div className="nav-menu-item">
            <NavLink to={`/home`} className={({isActive}) => isActive ? "menu-item menu-active" : "menu-item"}>
              <div className="menu-item">HomePage</div>
            </NavLink>
            <NavLink to={`/products`} className={({isActive}) => isActive ? "menu-item menu-active" : "menu-item"}>
              <div className="menu-item">Products</div>
            </NavLink>
            <NavLink to={`/about`} className={({isActive}) => isActive ? "menu-item menu-active" : "menu-item"}>
              <div className="menu-item">About Us</div>
            </NavLink>
          </div>
          <div className="menu-item-image">
            <NavLink to={`/`}>
              <img src={HomeImage} alt="HomePage" />
            </NavLink>
          </div>
        </nav>
      </div>
    </header>
  );
}
