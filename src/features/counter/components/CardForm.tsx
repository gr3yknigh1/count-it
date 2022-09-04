import {
  useCallback,
  useState,
  FormEvent,
  ChangeEvent
} from "react";
import { useAppDispatch } from "../../../app/hooks";
import { createCounter } from "../counter";
import { pushCounter } from "../counterSlice";

export default function CardForm(): JSX.Element {
  const dispatch = useAppDispatch();
  const [label, setLabel] = useState("");

  const onCardFormSubmit = useCallback((event: FormEvent) => {
    event.preventDefault();
    if (label === "") {
      return;
    }
    dispatch(pushCounter(
      createCounter(label, 0)
    ));
    setLabel("");
  }, [dispatch, label]);

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
        Add
      </button>
    </form>
  );
}
