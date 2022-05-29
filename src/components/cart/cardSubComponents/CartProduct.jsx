import CartProductInfo from "./CartProductInfo";
import CartProductActionBtn from "./CartProductActionBtn";

export default function CartProduct({ product }) {
  return (
    <article className="card pd-1 justify-start">
      <CartProductInfo product={product} />
      <CartProductActionBtn product={product} />
    </article>
  );
}
