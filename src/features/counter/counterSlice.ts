import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import Counter, { createCounter } from "./counter";

export interface CounterState {
  counters: Counter[]
}

export type CounterAction = (counter: Counter) => Counter;

const initialState: CounterState = {
  counters: []
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


function saveToLocalStorage(key: string, obj: object): void {
  localStorage.setItem(
    key, JSON.stringify(obj)
  );
}


function loadFromLoadStorage<T>(key: string): T {
  return JSON.parse(localStorage.getItem(key) as string);
}


function loadFromDatabase(): CounterState {
  //NOTE(gr3yknigh1): mocking loading from db
  const state = loadFromLoadStorage<CounterState>("counter");
  return state ? state : initialState ;
}

const counterSlice = createSlice({
  name: "counter",
  initialState: loadFromDatabase(),
  reducers: {
    increment: (state, action: PayloadAction<string>) => {
      state.counters = applyDelta2Counters(
        state.counters,
        [action.payload],
        1
      );
      saveToLocalStorage("counter", state);
    },
    decrement: (state, action: PayloadAction<string>) => {
      state.counters = applyDelta2Counters(
        state.counters,
        [action.payload],
        -1
      )
      saveToLocalStorage("counter", state);
    },
    pushCounter: (state, action: PayloadAction<Counter>) => {
      state.counters = [...state.counters, action.payload];
      saveToLocalStorage("counter", state);
    },
    removeCounter: (state, action: PayloadAction<string>) => {
      state.counters = state.counters.filter(
        counter => counter.id !== action.payload
      );
      saveToLocalStorage("counter", state);
    }
  },
});

export default counterSlice;

export const counterReducer = counterSlice.reducer;
export const {
  increment,
  decrement,
  pushCounter,
  removeCounter
} = counterSlice.actions;
