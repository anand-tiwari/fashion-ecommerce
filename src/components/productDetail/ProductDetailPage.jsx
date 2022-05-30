import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSingleProduct } from "features/product/productSlice";

import "./ProductDetailPage.css";
import AddToCard from "components/addToCard/AddToCard";
import ProductInfo from "components/products/ProductInfo";
import Loader from "components/loader/Loader";

export default function ProductDetailPage() {
  const dispatch = useDispatch();
  let { productId } = useParams();

  const product = useSelector((state) => state.product.product);
  const isLoading = useSelector((state) => state.product.isLoading);

  useEffect(() => {
    dispatch(
      fetchSingleProduct({
        queryParams: { productId },
      })
    );
  }, [dispatch, productId]);

  return (
    <div>
      {isLoading && <Loader />}
      {!isLoading && (
        <div>
          {product.id && (
            <div className="product bg-white">
              <div className="product__image">
                <img src={product.image} alt="product" />
              </div>
              <div className="product__description">
                <div className="product__info">
                  <ProductInfo product={product} />
                  <div className="product-price">
                    <span className="product-price-offer">
                      $ {product.price}
                    </span>
                  </div>
                </div>
                <div className="product__top-section">
                  <div className="product-category">
                    <span>Category : </span>
                    <span className="product-category-name">
                      {product.category}
                    </span>
                  </div>
                  <div className="product-desc">
                    <div>Description</div>
                    <div>{product.description}</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          <AddToCard product={product} />
        </div>
      )}
    </div>
  );
}
