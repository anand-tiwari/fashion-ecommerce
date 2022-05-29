import { Link } from "react-router-dom";

import "./cart.css";

export default function EmptyCart() {
  return (
    <main className="empty-cart-main bg-white">
      <header>
        <h1 className="pd-1">My Cart</h1>
      </header>

      <section className="txt-center">
        <figure>
          <img
            src="https://res.cloudinary.com/junaidshaikh/image/upload/v1648621954/d438a32e-765a-4d8b-b4a6-520b560971e8_ylxh6r.webp"
            width={200}
            height={300}
            alt="EMPTY CART"
          />
        </figure>

        <p>Your cart is empty!</p>
        <p className="txt-sm">Add items to it now.</p>

        <Link to="/home">
          <button className="btn btn-primary">Shop Now</button>
        </Link>
      </section>
    </main>
  );
}
