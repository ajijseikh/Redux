import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from 'axios'

const initialState={
    amount:10,
}

 export const accountSlice= createSlice({
    name:'account',
    initialState,
    reducers:{
        increment:(state) => {
            state.amount +=1; /// inside 'immer libery working here'
        },
        decrement:(state)=> {
            state.amount -=1;
        },
        incrementByAmount:(state,action) =>{
            state.amount +=action.payload;
        },
    },
    extraReducers: (builder)=> {
        builder
         .addCase(getUserAccount.fulfilled, (state, action)=>{
            state.amount = action.payload;
            state.pending = false;
         })
    }

 });


  export const getUserAccount= createAsyncThunk(
    'account/getUser',
    async (userId, thunkAPI)=>{
        const {data} = await axios.get(
            `http://localhost:3001/getuser/${userId}`
        );
        return data.data.amount;
    }
  )

 export const {increment,decrement,incrementByAmount} = accountSlice.actions

 export default accountSlice.reducer;