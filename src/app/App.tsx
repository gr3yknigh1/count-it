import {
  CardForm,
  CardContainer,
} from "../features/counter";

import { Provider } from "react-redux";
import store from "./store";


export default function App(): JSX.Element {
  return (
    <Provider store={ store }>
      <header>
        <h1>count-it</h1>
      </header>
      <main className="app">
        <CardForm/>
        <CardContainer/>
      </main>
    </Provider>
  );
}
