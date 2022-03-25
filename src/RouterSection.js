import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages
import TodoList from "./todoList/TodoList";
import Products from "./Products";
import HomeRoute from "./HomeRoute";
import Nav from "./Nav";

const RouterSection = () => {
  return (
    <BrowserRouter>
      <Nav className="compMargin" />
      <Routes>
        <Route path="/" element={<HomeRoute />} />
        <Route path="todo" element={<TodoList />} />
        <Route path="products" element={<Products />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterSection;
