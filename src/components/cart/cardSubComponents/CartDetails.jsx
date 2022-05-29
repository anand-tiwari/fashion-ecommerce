import { useSelector } from "react-redux";
import CartProduct from "./CartProduct";

export default function CartDetails() {
  const carts = useSelector((state) => state.cart.carts);
  return (
    <>
      <div className="cart-details pd-1 bg-white">
        <div className="cart__title border-bottom-dotted">
          Cart (<span>{carts && carts.length}</span>)
        </div>
        {carts.length > 0 &&
          carts.map((product) => (
            <CartProduct key={product.id} product={product} />
          ))}
      </div>
    </>
  );
}
