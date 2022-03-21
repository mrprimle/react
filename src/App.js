import React from "react";
import FlagsSection from "./FlagsSection";
import Users from "./Users";
import Form from "./Form";
import TodoList from "./todoList/TodoList";
import Products from "./Products";

const App = () => {
  return (
    <React.Fragment>
      <section className="bgGrey">
        <h1 className="compMargin">UseState React hook practice</h1>
        <FlagsSection />
      </section>
      <hr />
      <section className="bgGray section-pad">
        <h1 className="compMargin">UseEffect React hook practice</h1>
        <Users />
      </section>
      <section className="bgGrey section-pad">
        <h1 className="compMargin">Form practice</h1>
        <Form />
      </section>
      <section className="bgGray section-pad">
        <h1 className="compMargin">UseReducer form practice</h1>
        <TodoList />
      </section>
      <section className="bgGrey section-pad">
        <h1 className="compMargin">Custom hooks & prop validation</h1>
        <Products />
      </section>
    </React.Fragment>
  );
};

export default App;
