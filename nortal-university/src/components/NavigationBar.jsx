import { Link } from "react-router-dom";
import "../css/NavigationBar.css";

function NavigationBar() {
  return (
    <nav>
      <div className="navbar">
        <Link to="/products">
          <span className="nav-container">
            <img width="50" height="70" src="bakery-logo.png" alt="" />
            <span className="navbar-brand">Bakery Shop</span>
          </span>
        </Link>
        <div>
          <span className="nav-item">
            <Link to="/products">
              <span>Products</span>
            </Link>
          </span>
          <span className="nav-item">
            <Link to="/employees">
              <span>Employees</span>
            </Link>
          </span>
        </div>
      </div>
    </nav>
  )
}

export default NavigationBar;