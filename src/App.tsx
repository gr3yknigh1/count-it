
export default function App(): JSX.Element {
  return (
    <>
      <header>
        <h1>count-it</h1>
      </header>
      <main className="app">
        <form>
          <input className="card-form-input" type="text" placeholder="Name of new count"></input>
          <button className="card-form-submit">new count</button>
        </form>
        <div className="card-container">
          <table className="card">
            <tbody>
              <tr>
                <button className="card-menu">*</button>
                <span className="card-label">card name</span>
              </tr>
              <tr>
                <span className="card-count">0</span>
              </tr>
              <tr>
                <td>
                  <button className="card-button card-button-plus">+</button>
                </td>
                <td>
                  <button className="card-button card-button-minus">-</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
}
