import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import Counter, { createCounter } from "./counter";

export interface CounterState {
    counters: Counter[]
}

export type CounterAction = (counter: Counter) => Counter;

const initialState: CounterState = {
  counters: [
    createCounter("wtf", 1),
    createCounter("lmao", 12),
  ]
}

function applyAction2Counters(
  counters: Counter[],
  targetCounterIds: string[],
  action: CounterAction
): Counter[] {

  return counters.map((counter) => {
    const isTarget = targetCounterIds.find(
      id => id === counter.id
    );
    return isTarget ? action(counter) : counter;
  });
}

function applyDelta2Counters(
  counters: Counter[],
  targetCounterIds: string[],
  delta: number
): Counter[] {

  return applyAction2Counters(
    counters,
    targetCounterIds,
    (counter) => {
      return {
        ...counter,
        count: counter.count + delta
      };
    }
  );
}

const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment: (state, action: PayloadAction<string>) => {
      state.counters = applyDelta2Counters(
        state.counters,
        [action.payload],
        1
      );
    },
    decrement: (state, action: PayloadAction<string>) => {
      state.counters = applyDelta2Counters(
        state.counters,
        [action.payload],
        -1
      )
    }
  },
});

export default counterSlice;

export const counterReducer = counterSlice.reducer;
export const { increment, decrement } = counterSlice.actions;
