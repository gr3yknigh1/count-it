import { useAppSelector } from "../../../app/hooks"
import Card from "./Card";

export default function CardContainer() {

  const counters = useAppSelector(state => state.counter.counters);
  const counterElements = counters.map(
    (counter) => <Card key={ counter.id } counter={ counter }></Card>
  );

  return (
    <div
      className="card-container"
    >
      { counterElements }
    </div>
  )
}
