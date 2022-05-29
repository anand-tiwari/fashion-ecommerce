import { Link } from "react-router-dom";
import "./ProductCard.css";
import ProductInfo from "../products/ProductInfo";

export default function ProductCard({ product }) {
  const pdpUrl = `/product/${product.id}`;

  return (
    <Link to={pdpUrl}>
      <div className="product__card">
        <div className="card__container">
          <div className="card__imagecontainer">
            <img alt="cardimage" src={product.image} />
          </div>
          <div className="card__content">
            <ProductInfo product={product} />
            <div className="card__description--author">
              <span>$ </span>
              <span>{product.price}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
