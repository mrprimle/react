import React, { useState } from "react";
import Flag from "./Flag";
import { data } from "./phrases";

const FlagsSection = () => {
  const [phrases, setPhrases] = useState(data);
  const [dataLen, setDataLen] = useState(data.length);

  const removeItem = (index) => {
    let newPhrases = phrases.filter((phrase) => phrase.id !== index);
    setPhrases(newPhrases);
    setDataLen((oldLen) => oldLen - 1);
  };
  const clearAll = () => {
    setPhrases([]);
    setDataLen(0);
  };

  return (
    <section className="compMargin">
      <h1>{dataLen} flags</h1>
      <div className="itemlist">
        {phrases.map((phrase) => {
          return (
            <section key={phrase.id}>
              <Flag {...phrase}></Flag>
              <button
                className="btn btn-sec"
                onClick={() => removeItem(phrase.id)}
              >
                remove
              </button>
            </section>
          );
        })}
      </div>
      <button className="btn" onClick={clearAll}>
        Clear all
      </button>
    </section>
  );
};

export default FlagsSection;
