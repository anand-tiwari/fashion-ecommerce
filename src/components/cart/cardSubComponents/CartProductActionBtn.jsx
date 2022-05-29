import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProductToCart } from "../../../features/cart/cartSlice";

export default function CartProductActionBtn({ product }) {
  const [count, setCount] = useState(product.quantity);
  const dispatch = useDispatch();

  function setProductCount(val) {
    setCount((cur) => cur + val);
  }

  function addToCart() {
    dispatch(
      addProductToCart({
        queryParams: {
          data: {
            userId: 9,
            date: "2022-06-06",
            products: [{ productId: product.id, quantity: count }],
          },
        },
      })
    );
  }

  function removeFromCart() {}

  return (
    <section className="cart-product-actions">
      <div className="product-count margin-left-right-1 flex align-center">
        <button
          className={`btn ${count === 1 ? "b-disabled" : null}`}
          disabled={count === 1}
          onClick={() => {
            setProductCount(-1);
          }}
        >
          -
        </button>

        <input
          type="text"
          className="product-quantity-count txt-center margin-left-right-1"
          value={count}
          tabIndex="-1"
          readOnly
          onChange={() => {}}
        />

        <button
          className="btn"
          disabled={count >= 10}
          onClick={() => {
            setProductCount(1);
          }}
        >
          +
        </button>
      </div>

      <div className="flex justify-between">
        <button
          className="btn btn-transparent"
          onClick={() => {
            addToCart();
          }}
        >
          {/*  <FaHeart color="gray" />{" "} */}
          <span className="margin-left-right-1">wishlist</span>
        </button>

        <button
          className="btn btn-transparent"
          onClick={() => {
            removeFromCart();
          }}
        >
          {/*   <FaTrash color="gray" /> <span className="ml-sm">Remove</span> */}
          <span className="margin-left-right-1">remove</span>
        </button>
      </div>
    </section>
  );
}
