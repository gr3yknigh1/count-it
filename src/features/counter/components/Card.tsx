import { useCallback } from "react";
import { useAppDispatch } from "../../../app/hooks";

import { increment, decrement } from "../counterSlice";
import Counter from "../counter";

export interface CardProps {
  counter: Counter
}

export default function Card(props: CardProps): JSX.Element {

  const dispatch = useAppDispatch();
  const { label, count } = props.counter;

  const openMenu = useCallback(() => {
    console.log("Open menu");
  }, []);

  const incrementCount = useCallback(() => {
    dispatch(increment(props.counter));
  }, [dispatch, props]);

  return (
    <div className="card">
      <button className="card-menu" onClick={openMenu}>*</button>
      <span className="card-label">{ label }</span>
      <span className="card-count">{ count.toString() }</span>
      <button
        className="card-button card-button-plus"
        onClick={() => { incrementCount(); }}
      >
        +1
      </button>
      <button
        className="card-button card-button-minus"
        onClick={() => { incrementCount(); }}
      >
        -1
      </button>
    </div>
  );
}
