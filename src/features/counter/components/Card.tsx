import { useCallback, useState } from "react";
import { useAppDispatch } from "../../../app/hooks";

import { increment, decrement, removeCounter } from "../counterSlice";
import Counter from "../counter";

export interface CardProps {
  counter: Counter
}

interface CardMenuProps {
  id: string
}

function CardMenu(props: CardMenuProps): JSX.Element {

  const dispatch = useAppDispatch();
  const { id } = props;

  const onRemoveButtonClick = useCallback(() => {
    dispatch(removeCounter(id))
  }, [dispatch, id]);

  return (
    <div className="card__menu">
      <button
        className="card__remove-button"
        onClick={ onRemoveButtonClick }
      >
        Remove
      </button>
    </div>
  );
}

interface CardContentProps {
  id: string
  count: number
  showMenu: boolean
}

function CardContent(props: CardContentProps): JSX.Element {

  const { id, count, showMenu } = props;

  const dispatch = useAppDispatch();

  const incrementCount = useCallback(() => {
    dispatch(increment(id));
  }, [dispatch, id]);

  const decrementCount = useCallback(() => {
    dispatch(decrement(id));
  }, [dispatch, id]);

  if (showMenu) {
    return (
      <CardMenu id={ id }/>
    );
  }

  return (
    <div className="card__content">

      <span className="card__count">{count.toString()}</span>
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


export default function Card(props: CardProps): JSX.Element {

  const { id, label, count } = props.counter;

  const [showMenu, setShowMenu] = useState(false);

  const onMenuButtonClick = useCallback(() => {
    setShowMenu(!showMenu);
  }, [setShowMenu, showMenu])

  return (
    <div className="card">
      <div className="card__header">
        <div
          className="card__menubutton"
          onClick={ onMenuButtonClick }
        >
          =
        </div>
        <span className="card__label">{ label }</span>
      </div>
      <CardContent
        id={ id }
        count={ count }
        showMenu={ showMenu }
      />
    </div>
  );
}
