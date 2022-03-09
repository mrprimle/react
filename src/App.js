import React from "react";
import FlagsSection from "./FlagsSection";
import Users from "./Users";

const App = () => {
  return (
    <React.Fragment>
      <section className="bgGrey">
        <h1 className="compMargin">UseState React hook practice</h1>
        <FlagsSection />
      </section>
      <hr />
      <section className="bgGray">
        <h1 className="compMargin">UseEffect React hook practice</h1>
        <Users />
      </section>
    </React.Fragment>
  );
};

export default App;
