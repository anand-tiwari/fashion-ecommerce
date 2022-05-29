import axios from "axios";

const productCartApi = "https://fakestoreapi.com/carts/user/1";
const addProductToCartApi = "https://fakestoreapi.com/carts";

const getCartProductUrl = () => {
    return productCartApi;
};

const addProductCartUrl = () => {
    return addProductToCartApi;
};
export const getCartProducts = () => {
    return axios.get(getCartProductUrl());
};

export const addProductCart = (queryParams = {}) => {
    return axios({
        method: "post",
        url: addProductCartUrl(),
        data: queryParams.data,
    });
};