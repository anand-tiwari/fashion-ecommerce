import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getCartProducts, addProductCart } from "./cartAPI";
import { updateCart } from "./cartService";

const initialState = {
    isLoading: false,
    carts: [],
};

export const fetchCartProducts = createAsyncThunk(
    "cart/fetchCartProducts",
    async(action, { getState }) => {
        const response = await getCartProducts();
        const reduxStore = getState();
        const products =
            action.products.length > 0 ?
            action.products :
            reduxStore.product.products;
        return {
            response: response.data[0].products,
            products: products,
        };
    }
);

export const addProductToCart = createAsyncThunk(
    "cart/addProductToCart",
    async({ queryParams, product }) => {
        const response = await addProductCart(queryParams);
        return {
            response: response.data.products,
            products: [product],
        };
    }
);

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {},
    extraReducers: {
        [fetchCartProducts.pending]: (state) => {
            state.isLoading = true;
        },
        [fetchCartProducts.fulfilled]: (state, action) => {
            console.log("From fetchCartProducts extraReducers: ", action.payload);
            state.carts = updateCart(
                action.payload.response,
                state.carts,
                action.payload.products
            );
            state.isLoading = false;
        },
        [fetchCartProducts.rejected]: (state) => {
            state.isLoading = false;
        },
        [addProductToCart.pending]: (state) => {
            state.isLoading = true;
        },
        [addProductToCart.fulfilled]: (state, action) => {
            console.log("From addProductToCart extraReducers: ", action.payload);
            state.carts = updateCart(
                action.payload.response,
                state.carts,
                action.payload.products
            );
        },
        [addProductToCart.rejected]: (state) => {
            state.isLoading = false;
        },
    },
});

export default cartSlice.reducer;