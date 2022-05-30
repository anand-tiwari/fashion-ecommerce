import axios from "axios";
import { serializeQueryParams } from "utils/";

// token = eyJr389hbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
const productApi = "https://fakestoreapi.com/products";
const productDetailApi = "https://fakestoreapi.com/products";

const getProductUrl = (queryParams) => {
    return productApi + serializeQueryParams(queryParams);
};

const getProductDetailUrl = (queryParams) => {
    return productDetailApi + "/" + queryParams.productId;
};

export const fetchProducts = (queryParams = {}) => {
    return axios.get(getProductUrl(queryParams));
};

export const fetchProductDetailProduct = (queryParams = {}) => {
    return axios.get(getProductDetailUrl(queryParams));
};