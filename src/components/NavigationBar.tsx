import { NavLink, useLocation } from "react-router";
import "./NavigationBar.css";
const NavigationBar = () => {
  const location = useLocation();
  const currentPath = location.pathname
  return (
    <ul className="navigation-bar-links">
      <li>
        <NavLink
          to="/product"
          className={
            currentPath === "/product" ? "navigation-selected-link" : ""
          }
        >
          Product
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/developers"
          className={
            currentPath === "/developers" ? "navigation-selected-link" : ""
          }
        >
          Developer
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/enterprice"
          className={
            currentPath === "/enterprice" ? "navigation-selected-link" : ""
          }
        >
          Enterprise
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/pricing"
          className={
            currentPath === "/pricing" ? "navigation-selected-link" : ""
          }
        >
          Pricing
        </NavLink>
      </li>
    </ul>
  );
};

export default NavigationBar;
