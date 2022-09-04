import {
  CardForm,
  CardContainer,
} from "../features/counter";

import { Provider } from "react-redux";
import store from "./store";


export default function App(): JSX.Element {
  return (
    <Provider store={ store }>
      <div className="app">
        <header className="app__header">
          <h1 className="app__title">
            {"count "}
            <span className="text--highlighted">it</span>
          </h1>
        </header>
        <main className="app__content">
          <CardForm/>
          <CardContainer/>
        </main>
      </div>
    </Provider>
  );
}
