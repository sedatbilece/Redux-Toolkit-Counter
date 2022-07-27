import {createSlice} from '@reduxjs/toolkit';


const initialState = {
       value:0,

}

const counterSlice = createSlice({
    name: 'counter', 
    initialState:initialState,
    reducers:{
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementMore: (state) => {
            state.value += 5;
        },
        decrementMore: (state) => {
            state.value -= 5;
        },
        reset: (state) => {
            state.value = 0;
        }
        
    }
});

export const { increment,decrement,incrementMore,decrementMore,reset} = counterSlice.actions;

export default counterSlice.reducer;