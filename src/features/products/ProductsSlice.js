import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  user: [],
  products: [],
  manClothes: [],
  womanClothes: [],
  productDetails: [],
  productCounter: 1,
  cart: [
    {
      id: 8,
      title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
      price: 10.99,
      description:
        "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
      category: "jewelery",
      image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
      quantity: 3,
    },
    {
      id: 7,
      title: "White Gold Plated Princess",
      price: 9.99,
      description:
        "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
      category: "jewelery",
      image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
      quantity: 5,
    },
  ],
  likeIt: [],

  status: "idle",
};

export const getUser = createAsyncThunk("products/getUser", async () => {
  return await axios
    .get(`https://fakestoreapi.com/users/3`)
    .then((res) => res.data);
});

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



export const upDateProductCart = createAsyncThunk(
  "products/upDateProductCart",
  async ({ productId, userId, quantity }) => {
    return await axios
      .patch(`https://fakestoreapi.com/carts/${productId}`, {
        userId: userId,
        date: Date().toLocaleString(),
        products: [{ productId: productId, quantity: quantity }],
      })
      .then((res) => res.data);
  }
);

export const getCartTotal = (cart) => cart?.reduce((amount, item) => item.price * item.quantity + amount, 0)

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    cleanUpproductDetails: (state) => {
      state.productDetails = [];
    },
    cleanUpCartDetails: (state) => {
      state.productCartDetails = [];
    },
    increment: (state) => {
      state.productCounter += 1;
    },
    decrement: (state) => {
      if ( state.productCounter > 1) {
        state.productCounter -= 1
      }else{
        return
      }
    },
    CleanUpProductCounter: (state) => {
      state.productCounter = 1;
    },
    likeItFunc: (state, { payload }) => {
      state.likeIt = [...state.likeIt, payload];
    },
    addToCart: (state, {payload}) => {
      const product = state.cart.find(ele => ele.id === payload.id);
      if (!product) {
        state.cart = [...state.cart, payload];
      }else{
          return
      }
    },
    deleteCartProduct: (state, { payload }) => {
      const newinfo = state.cart.filter(
        (info) => info.id !== payload
      );
      state.cart = newinfo;
    },
    incrementProductCartQuantity: (state, {payload}) => {
       state.cart.find(item => item.id === payload.id ? {...item ,quantity:item.quantity +=1} : null)
    },
    decrementProductCartQuantity: (state, {payload}) => {
      state.cart.find(item => item.id === payload.id && item.quantity > 1 ? {...item ,quantity:item.quantity -=1} : null)
    }
  },
  extraReducers: {
    [getUser.fulfilled]: (state, { payload }) => {
      state.status = "success";
      state.user = payload;
    },
    [getProducts.fulfilled]: (state, { payload }) => {
      state.status = "success";
      state.products = payload;
    },
    [getProducts.pending]: (state) => {
      state.status = 'pending';
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
      state.status = 'pending';
    },

    [getProductsDetail.fulfilled]: (state, { payload }) => {
      state.productDetails = payload;
    },
    [getProductsDetail.rejected]: (state) => {
      state.status = "failed";
    },
  },
});

export const selectedProducts = (state) => state.products;
export const {
  deleteCartProduct,
  increment,
  decrement,
  cleanUpproductDetails,
  CleanUpProductCounter,
  likeItFunc,
  cleanUpCartDetails,
  addToCart,
  incrementProductCartQuantity,
  decrementProductCartQuantity
  
} = productsSlice.actions;

export default productsSlice.reducer;
