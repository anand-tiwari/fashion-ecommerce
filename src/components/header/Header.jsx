import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import SearchBox from "./SearchBox";
import "./Header.css";

export default function Header() {
  const carts = useSelector((state) => state.cart.carts);
  return (
    <div className="header bg-white">
      <div className="header__navigation">
        <div className="header__title">
          <Link to={"/"}>zooplus</Link>
        </div>
        <div className="header__title">
          <Link to="/cart">
            <div className="shopping-icon">
              <i className="fas fa-shopping-cart" title="Shopping Cart"></i>
              {carts.length ? (
                <span className="badge badge-top-right">{carts.length}</span>
              ) : null}
            </div>
            <span className="visually-hidden">Cart </span>
          </Link>
        </div>
      </div>
      <div className="header__search">
        <SearchBox />
      </div>
    </div>
  );
}
