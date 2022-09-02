import { useCallback } from "react";

import Counter from "../counter";

export interface CardProps {
  counter: Counter
}

export default function Card(props: CardProps): JSX.Element {

  const { label, count } = props.counter;

  const openMenu = useCallback(() => {
    console.log("Open menu");
  }, []);

  const changeCountValue = useCallback((delta: Number) => {
    console.log(`change value by ${delta}`);
  }, []);

  return (
    <div className="card">
      <button className="card-menu" onClick={openMenu}>*</button>
      <span className="card-label">{ label }</span>
      <span className="card-count">{ count.toString() }</span>
      <button
        className="card-button card-button-plus"
        onClick={() => { changeCountValue(+1); }}
      >
        +1
      </button>
      <button
        className="card-button card-button-minus"
        onClick={() => { changeCountValue(-1); }}
      >
        -1
      </button>
    </div>
  );
}
