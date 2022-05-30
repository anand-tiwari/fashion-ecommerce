import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCartProducts } from "features/cart/cartSlice";
import { fetchProducts, fetchProductDetailProduct } from "./productAPI";

const initialState = {
    product: {},
    products: [],
    isLoading: false,
    isProductListingLoading: false,
    pagination: {
        page: 1,
        total: 10,
        pageSize: 10,
    },
};

export const loadProducts = createAsyncThunk(
    "candidate/loadProducts",
    async(action, { dispatch }) => {
        const response = await fetchProducts(action.queryParams);
        dispatch(fetchCartProducts({ products: response.data }));
        return { apiResponse: response.data, request: action };
    }
);

export const fetchSingleProduct = createAsyncThunk(
    "candidate/fetchSingleProduct",
    async(action) => {
        const response = await fetchProductDetailProduct(action.queryParams);
        return { response: response.data };
    }
);
export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {},
    extraReducers: {
        [loadProducts.pending]: (state) => {
            state.isProductListingLoading = true;
        },
        [loadProducts.fulfilled]: (state, action) => {
            console.log("From loadProducts extraReducers: ", action.payload);
            state.products = action.payload.apiResponse;
            state.isProductListingLoading = false;
        },
        [loadProducts.rejected]: (state) => {
            state.isProductListingLoading = false;
        },

        [fetchSingleProduct.pending]: (state) => {
            state.isLoading = true;
        },
        [fetchSingleProduct.fulfilled]: (state, action) => {
            console.log("From fetchSingleProduct extraReducers: ", action.payload);
            state.product = action.payload.response;
            state.isLoading = false;
        },
        [fetchSingleProduct.rejected]: (state) => {
            state.isLoading = false;
        },
    },
});

export default productSlice.reducer;