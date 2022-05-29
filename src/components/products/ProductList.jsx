import "./ProductList.css";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { SEARCH_TERM } from "../../config";
import { loadProducts } from "../../features/product/productSlice";
import ProductCard from "../productCard/ProductCard";
import Pagination from "../pagination/Pagination";
import Loader from "../loader/Loader";

import { useEffect } from "react";
export default function ProductList() {
  let [filteredProducts, setFilteredProducts] = useState([]);
  let [searchParams] = useSearchParams();
  const isProductListingLoading = useSelector(
    (state) => state.product.isProductListingLoading
  );

  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);

  const filterProducts = () => {
    if (!!searchParams.get(SEARCH_TERM)) {
      const searchQuery = searchParams.get(SEARCH_TERM).toLowerCase();
      setFilteredProducts(
        products.filter((product) =>
          product.title.toLowerCase().includes(searchQuery)
        )
      );
    } else {
      setFilteredProducts(products);
    }
  };

  useEffect(() => {
    dispatch(loadProducts({}));
  }, [dispatch]);

  useEffect(() => {
    filterProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams.get(SEARCH_TERM), products]);

  return (
    <>
      {isProductListingLoading && <Loader />}
      {!isProductListingLoading && (
        <div>
          <div className="products">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <Pagination />
        </div>
      )}
    </>
  );
}
