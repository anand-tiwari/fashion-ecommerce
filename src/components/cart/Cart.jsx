import EmptyCart from "./EmptyCart";
import CartDetails from "./cardSubComponents/CartDetails";
import CartPriceDetails from "./cardSubComponents/CartPriceDetails";

import "./cart.css";

import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCartProducts } from "../../features/cart/cartSlice";
import { loadProducts } from "../../features/product/productSlice";

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
