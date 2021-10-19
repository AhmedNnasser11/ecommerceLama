import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  user: [
    {
      username: "mor_2314",
      password: "83r5^_",
    },
  ],
  products: [],
  manClothes: [],
  womanClothes: [],
  productDetails: [],
  productCounter: 1,
  cart: [{ userId: 0, date: 0, products: [{ productId: 0, quantity: 0 }] }],
  status: "idle",
};

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    return await axios
      .get(`https://fakestoreapi.com/products`)
      .then((res) => res.data);
  }
);

export const getProductsMan = createAsyncThunk(
  "products/getProductsMan",
  async () => {
    return await axios
      .get(`https://fakestoreapi.com/products/category/men's clothing`)
      .then((res) => res.data);
  }
);

export const getProductsWomen = createAsyncThunk(
  "products/getProductswomen",
  async () => {
    return await axios
      .get(`https://fakestoreapi.com/products/category/women's clothing`)
      .then((res) => res.data);
  }
);

export const getProductsDetail = createAsyncThunk(
  "products/getProductsDetail",
  async (paramData) => {
    return await axios
      .get(`https://fakestoreapi.com/${paramData}`)
      .then((res) => res.data);
  }
);
export const getCart = createAsyncThunk("products/getCart", async () => {
  return await axios
    .get(`https://fakestoreapi.com/carts/user/3`)
    .then((res) => res.data);
});

export const addToCart = createAsyncThunk(
  "products/addToCart",
  async (productId, userId, quantity) => {
    return await axios("https://fakestoreapi.com/carts", {
      method: "POST",
      body: JSON.stringify({
        userId,
        date: Date().toLocaleString(),
        products: [{ productId, quantity }],
      }),
    }).then((res) => res.data);
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    cleanUpproductDetails: (state) => {
      state.productDetails = [];
    },
    increment: (state) => {
      state.productCounter += 1;
    },
    decrement: (state) => {
      state.productCounter -= 1;
    },
  },
  extraReducers: {
    [getCart.fulfilled]: (state, { payload }) => {
      state.status = "success";
      state.cart = payload;
    },
    [getProducts.fulfilled]: (state, { payload }) => {
      state.status = "success";
      state.products = payload;
    },
    [getProductsMan.fulfilled]: (state, { payload }) => {
      state.status = "success";
      state.manClothes = payload;
    },
    [getProductsWomen.fulfilled]: (state, { payload }) => {
      state.status = "success";
      state.womanClothes = payload;
    },
    [getProductsDetail.pending]: (state) => {
      state.status = false;
    },

    [getProductsDetail.fulfilled]: (state, { payload }) => {
      state.productDetails = payload;
    },
    [getProductsDetail.rejected]: (state) => {
      state.status = "failed";
    },
    [addToCart.pending]: (state) => {
      state.status = "pending";
    },

    [addToCart.fulfilled]: (state, { payload }) => {
      state.status = "success";
      // state.cart.push(payload);
      state.cart = [...state.cart, payload];
    },
    [addToCart.rejected]: (state) => {
      state.status = "failed";
    },
  },
});

export const selectedProducts = (state) => state.products;
export const { increment, decrement, cleanUpproductDetails } =
  productsSlice.actions;

export default productsSlice.reducer;
