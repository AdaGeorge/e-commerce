import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const productSlice = createSlice({
    name: 'products',
    initialState: [],
    reducers: {
        setProductsGlobal: (state, action) => action.payload
    }
})

export const { setProductsGlobal } = productSlice.actions;

export const getAllProducts = () => (dispatch) =>{
    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/products'
    return axios.get(URL)
       .then(res=> dispatch(setProductsGlobal(res.data.data.products)))
       .catch(err=> console.log(err))
}

export default productSlice.reducer;
