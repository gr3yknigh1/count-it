import {
  Card,
  CardForm,
} from "../features/counter";

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
