import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import Counter, { createCounter } from "./counter";

export interface CounterState {
    counters: Counter[]
}

const initialState: CounterState = {
    counters: [
        createCounter("wtf", 1),
        createCounter("lmao", 12),
    ]
}

const counterSlice = createSlice({
    name: "counter",
    initialState: initialState,
    reducers: {
        increment: (state, action: PayloadAction<string>) => {
            for (let index = 0; index < state.counters.length; index++) {
                const counter: Counter = state.counters[index];
                if (counter.id === action.payload) {
                    state.counters[index] = {
                        ...counter,
                        count: counter.count + 1
                    };
                    break;
                }
            }
        },
        decrement: (state, action: PayloadAction<string>) => {
            for (let index = 0; index < state.counters.length; index++) {
                const counter: Counter = state.counters[index];
                if (counter.id === action.payload) {
                    state.counters[index] = {
                        ...counter,
                        count: counter.count - 1
                    };
                    break;
                }
            }
        }
    },
});

export default counterSlice;

export const counterReducer = counterSlice.reducer;
export const { increment, decrement } = counterSlice.actions;
