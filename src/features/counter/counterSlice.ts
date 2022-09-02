import { createSlice } from "@reduxjs/toolkit";

import Counter from "./counter";

export interface CounterState {
    counters: Counter[]
}

const initialState: CounterState = {
    counters: []
}

const counterSlice = createSlice({
    name: "counter",
    initialState: initialState,
    reducers: {},
});

export default counterSlice;

export const counterReducer = counterSlice.reducer;
