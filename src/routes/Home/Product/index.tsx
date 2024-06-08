import { NavLink, Outlet } from "react-router-dom";
import "./style.css";

export default function Product() {
  return (
    <main>
      <section id="product-section" className="container">
        <nav className="navbar">
          <div className="nav-product-item">
            <NavLink to={`computers`} className={({isActive}) => isActive ? "product-item menu-active" : "product-item"}>
              <div className="product-item">Computers</div>
            </NavLink>
            <NavLink to={`electronics`} className={({isActive}) => isActive ? "product-item menu-active" : "product-item"}>
              <div className="product-item">Electronics</div>
            </NavLink>
            <NavLink to={`books`} className={({isActive}) => isActive ? "product-item menu-active" : "product-item"}>
              <div className="product-item">Books</div>
            </NavLink>
          </div>
        </nav>
        <Outlet />
      </section>
    </main>
  );
}
