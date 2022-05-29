import { useSelector } from "react-redux";

export default function CartPriceDetails() {
  const carts = useSelector((state) => state.cart.carts);

  const sum = carts.reduce((acc, item) => acc + item.price, 0);

  return (
    <>
      {carts.length && (
        <div className="price-details bg-white pd-1 mr-top-bottom-1 sticky">
          <div className="border-bottom-dotted cart__title">
            <span>PriceDetails</span>
          </div>
          <div className="border-bottom-dotted">
            <div className="flex justify-between pd-1">
              <span>Price {carts.length} items :</span>
              <span>{sum}</span>
            </div>
            <div className="flex justify-between pd-1">
              <span>Discount:</span>
              <span>$ 0</span>
            </div>
            <div className="flex justify-between pd-1">
              <span>Delivery Charges :</span>
              <span>free</span>
            </div>
          </div>
          <div className="border-bottom-dotted">
            <div className="flex justify-between pd-1">
              <span>Total Amount :</span>
              <span>{sum}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
