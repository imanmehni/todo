import React from "react";
import TodoEntry from "./components/TodoEntry";
import TodoItems from "./components/TodoItems";
import TodoConroller from "./components/TodoController";
import { observer } from "mobx-react";

import "./App.css";
const App = observer(function App() {
  return (
    <div className="App">
      <div className="container">
        <TodoEntry />
        <TodoItems />
        <TodoConroller/>
      </div>
    </div>
  );
});

export default App;
