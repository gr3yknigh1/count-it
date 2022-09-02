import {
  useCallback,
  useState,
  FormEvent,
  ChangeEvent
} from "react";

function CardForm(): JSX.Element {

  const [label, setLabel] = useState("");

  const onCardFormSubmit = useCallback((event: FormEvent) => {
    event.preventDefault();
    console.log("Submit card");
  }, []);

  const onCardInputChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setLabel(event.target.value);
  }, [setLabel]);

  return (
    <form
      className="card-form"
      onSubmit={ onCardFormSubmit }
    >
      <input
        className="card-form-input"
        type="text"
        placeholder="Name of new count"
        onChange={ onCardInputChange }
        value={ label }
      ></input>
      <button
        className="card-form-submit"
        onSubmit={ onCardFormSubmit }
      >
        new count
      </button>
    </form>
  );
}

function Card(): JSX.Element {

  const openMenu = useCallback(() => {
    console.log("Open menu");
  }, []);

  const changeCountValue = useCallback((delta: Number) => {
    console.log(`change value by ${delta}`);
  }, []);

  return (
    <div className="card">
      <button className="card-menu" onClick={ openMenu }>*</button>
      <span className="card-label">card name</span>
      <span className="card-count">0</span>
      <button
        className="card-button card-button-plus"
        onClick={ () => { changeCountValue(+1); } }
      >
        +1
      </button>
      <button
        className="card-button card-button-minus"
        onClick={ () => { changeCountValue(-1); } }
      >
        -1
      </button>
    </div>
  );
}

export default function App(): JSX.Element {
  return (
    <>
      <header>
        <h1>count-it</h1>
      </header>
      <main className="app">
        <CardForm/>
        <div className="card-container">
          <Card />
          <Card />
          <Card />
        </div>
      </main>
    </>
  );
}
