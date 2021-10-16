import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  products: [],
  manClothes: [],
  womanClothes: [],
  status: 'idle',
};

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
      return await axios.get(`https://fakestoreapi.com/products`)
      .then(
          res => res.data
      )
  }
)

export const getProductsMan = createAsyncThunk(
  "products/getProductsMan",
  async () => {
      return await axios.get(`https://fakestoreapi.com/products/category/men's clothing`)
      .then(
          res => res.data
      )
  }
)

export const getProductsWomen = createAsyncThunk(
  "products/getProductswomen",
  async () => {
      return await axios.get(`https://fakestoreapi.com/products/category/women's clothing`)
      .then(
          res => res.data
      )
  }
)


export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
   
    },
  extraReducers: {
    [getProducts.fulfilled]: (state, {payload}) => {
      state.status = 'success';
      state.products = payload
  },
  [getProductsMan.fulfilled]: (state, {payload}) => {
    state.status = 'success';
    state.manClothes = payload
},
[getProductsWomen.fulfilled]: (state, {payload}) => {
  state.status = 'success';
  state.womanClothes = payload
},
  },
});

export const selectedProducts = state => state.products

export default productsSlice.reducer;
