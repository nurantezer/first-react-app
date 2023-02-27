import { useState } from "react";
import { data } from "./data";
import List from "./List";

function App() {
const [people, setPeople] = useState(data)

  return (
    <main className="container">
      <h3>{data.length} birthdays today</h3>
      <List people={people} />
      <button onClick={() => setPeople([])}>clear all</button>
      <button onClick={() => setPeople(data)}>get data</button>
    </main>
  );
}

export default App;

