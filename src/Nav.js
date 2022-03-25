import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <section className="navBar compMargin">
      <h1>React Router</h1>
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/todo">Todo</Link>
        <Link to="/products">Products</Link>
      </nav>
    </section>
  );
};

export default Nav;
