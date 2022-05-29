import "./ProductList.css";

export default function ProductInfo({ product }) {
  return (
    <>
      <p className="product_info__title ">{product.title}</p>
      <div className="product_info__category txt-secondary ">
        <span className="field-name">Category : </span>
        <span>{product.category}</span>
      </div>
      <div className="product_info__rating my-sm">
        {product.rating.rate} <i className="fas fa-star"></i>
      </div>
    </>
  );
}
