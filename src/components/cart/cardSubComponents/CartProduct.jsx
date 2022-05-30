import CartProductInfo from "components/cart/cardSubComponents/CartProductInfo";
import CartProductActionBtn from "components/cart/cardSubComponents/CartProductActionBtn";

export default function CartProduct({ product }) {
  return (
    <article className="card pd-1 justify-start">
      <CartProductInfo product={product} />
      <CartProductActionBtn product={product} />
    </article>
  );
}
