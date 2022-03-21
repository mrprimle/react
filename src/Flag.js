import React, { useState } from "react";

const Flag = (props) => {
  const { first, second } = props;
  const [count, setCount] = useState(0);

  const showPhrase = () => {
    setCount((prevState) => prevState + 1);
    if (count + 1 === 10 && second === "And count to 10") {
      alert("New achevement unlocked: G boi");
    }
  };

  return (
    <React.Fragment>
      <section onClick={showPhrase}>
        <p className="blue">{first}</p>
        <p className="yellow">{second}</p>
        <p className="clickp">clicked {count} times</p>
      </section>
    </React.Fragment>
  );
};

export default Flag;
