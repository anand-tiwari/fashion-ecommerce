import "./cart.css";

import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchCartProducts } from "features/cart/cartSlice";
import { loadProducts } from "features/product/productSlice";
import EmptyCart from "components/cart/EmptyCart";
import CartDetails from "components/cart/cardSubComponents/CartDetails";
import CartPriceDetails from "components/cart/cardSubComponents/CartPriceDetails";

export default function Cart() {
  const dispatch = useDispatch();
  const carts = useSelector((state) => state.cart.carts);

  useEffect(() => {
    dispatch(loadProducts({}));
    dispatch(fetchCartProducts());
  }, [dispatch]);

  return (
    <>
      {carts && !carts.length ? (
        <EmptyCart />
      ) : (
        <main className="cart-main">
          <div className="cart-container flex flex-column">
            <CartDetails />
            <CartPriceDetails />
          </div>
        </main>
      )}
    </>
  );
}
