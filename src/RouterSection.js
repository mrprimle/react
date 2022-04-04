import React from "react";
import { Routes, Route } from "react-router-dom";

// pages
import TodoList from "./todoList/TodoList";
import Products from "./Products";
import HomeRoute from "./HomeRoute";
import Purchase from "./Purchase";
import Error from "./Error";

// nav
import Nav from "./Nav";

const RouterSection = () => {
  return (
    <section className="compMargin">
      <Nav />
      <Routes>
        <Route path="/" element={<HomeRoute />} />
        <Route path="/todo" element={<TodoList />} />
        <Route path="/products" element={<Products />} />
        <Route path="/purchase/:name" element={<Purchase />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </section>
  );
};

export default RouterSection;
