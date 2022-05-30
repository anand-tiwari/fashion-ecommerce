import { useState } from "react";
import { addProductToCart } from "features/cart/cartSlice";
import { useDispatch } from "react-redux";
import "./AddToCard.css";

export default function AddToCard({ product }) {
  const [count, setCount] = useState(1);
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

  return (
    <section className="pdp-action">
      <div className="bag-retail">
        <div className="bag-retail__container">
          <div className="bag-retail__product">
            <img src={product.image} className="thumbnail" alt="" />
            <span className="name">{product.title}</span>
          </div>
          <div className="bag-retail-actions">
            <div className="bag-retail__quantity">
              <button
                disabled={count === 1}
                type="button"
                className={`blu-btn control b-outline b-icon b-secondary b-small ${
                  count === 1 ? "b-disabled" : null
                }`}
                onClick={() => setProductCount(-1)}
              >
                <div className="blu-ripple">-</div>
              </button>
              <input
                type="number"
                min="1"
                className="field"
                value={count}
                onChange={() => setProductCount(1)}
              />
              <div>
                <button
                  type="button"
                  className="blu-btn control b-outline b-icon b-secondary b-small"
                  onClick={() => setProductCount(1)}
                >
                  <div className="blu-ripple">+</div>
                </button>
              </div>
            </div>
            <div className="bag-retail__action">
              <div className="main-action">
                <button
                  type="button"
                  className="blu-btn add-to-bag b-secondary"
                  onClick={() => addToCart()}
                >
                  <div className="blu-ripple">
                    <span>Add to Cart</span>
                  </div>
                </button>
                <button type="button" className="blu-btn buy-now b-primary">
                  <div className="blu-ripple">
                    <div className="label">
                      <div className="text">Buy Now</div>
                      <div className="price"> $ {product.price} </div>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
