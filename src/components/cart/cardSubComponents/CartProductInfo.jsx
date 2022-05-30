import { Link } from "react-router-dom";
import ProductInfo from "components/products/ProductInfo";

export default function CartProductInfo({ product }) {
  return (
    <div className="w-100">
      <Link to={`/product/${product.id}`} className="card-product-info flex">
        <div className="card-image align-self-center txt-center">
          <img className="img-responsive" src={product.image} alt="product" />
        </div>
        <div className="card-body">
          <ProductInfo product={product} />
          <div className="card-body__price">
            <span>$</span>
            <span>{product.price}</span>
          </div>
        </div>
      </Link>
    </div>
  );
}
