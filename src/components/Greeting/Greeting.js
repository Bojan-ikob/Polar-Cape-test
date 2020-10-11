import React, { Fragment } from "react";
import "../Greeting/Greeting.css";

const Greeting = ({ name }) => {
  return (
    <Fragment>
      <div className="greeting">
        <h3>Hello {name}!</h3>
      </div>
    </Fragment>
  );
};

export default Greeting;
