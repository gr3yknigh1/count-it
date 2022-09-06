import { useCallback } from "react";
import { useAppDispatch } from "../../../app/hooks";

import { increment, decrement } from "../counterSlice";
import Counter from "../counter";

export interface CardProps {
  counter: Counter
}

export default function Card(props: CardProps): JSX.Element {

  const dispatch = useAppDispatch();
  const { id, label, count } = props.counter;

  const openMenu = useCallback(() => {
    console.log("Open menu");
  }, []);

  const incrementCount = useCallback(() => {
    dispatch(increment(id));
  }, [dispatch, id]);

  const decrementCount = useCallback(() => {
    dispatch(decrement(id));
  }, [dispatch, id]);

  return (
    <div className="card">
      <div className="card__header">
        <span className="card__label">{ label }</span>
      </div>
      <span className="card__count">{ count.toString() }</span>
      <div className="card__button-holder">
        <button
          className="card__button"
          onClick={() => { incrementCount(); }}
        >
          +
        </button>
        <button
          className="card__button"
          onClick={() => { decrementCount(); }}
        >
          -
        </button>
      </div>
    </div>
  );
}
