import React from "react";

const Book = (props) => {
  const { img, title, author } = props;
  const clickHandler = () => {
    alert("hello mike");
  };
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h1 onClick={() => alert(title)}>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        btm
      </button>
    </article>
  );
};

export default Book;
