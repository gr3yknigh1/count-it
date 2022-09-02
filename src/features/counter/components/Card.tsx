import { useCallback } from "react";

export default function Card(): JSX.Element {

  const openMenu = useCallback(() => {
    console.log("Open menu");
  }, []);

  const changeCountValue = useCallback((delta: Number) => {
    console.log(`change value by ${delta}`);
  }, []);

  return (
    <div className="card">
      <button className="card-menu" onClick={openMenu}>*</button>
      <span className="card-label">card name</span>
      <span className="card-count">0</span>
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
