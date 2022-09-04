import {
  useCallback,
  useState,
  FormEvent,
  ChangeEvent
} from "react";

export default function CardForm(): JSX.Element {

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
      className="form"
      onSubmit={onCardFormSubmit}
    >
      <input
        className="form__input"
        type="text"
        placeholder="Name of new count"
        onChange={onCardInputChange}
        value={label}
      ></input>
      <button
        className="form__button"
        onSubmit={onCardFormSubmit}
      >
        new count
      </button>
    </form>
  );
}
