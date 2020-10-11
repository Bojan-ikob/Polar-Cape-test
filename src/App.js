import React, { useState } from "react";
import Home from "./components/Home/Home";
import Cards from "./components/Cards/Cards";

const App = () => {
  const [name, setName] = useState("");
  const [show, setShow] = useState(true);

  const handleName = (event) => {
    event.preventDefault();
    if (
      event.target.value.length >= 3 &&
      event.target.value[0] === event.target.value[0].toUpperCase()
    ) {
      setName(event.target.value);
    }
  };

  const handleSubmit = (event) => {
    if (name) {
      setShow(false);
      event.preventDefault();
    } else {
      alert(
        "Name must start with a capital letter and contain more than 3 letters!"
      );
    }
  };

  return (
    <div className="App">
      {show ? (
        <Home handleName={handleName} handleSubmit={handleSubmit} />
      ) : (
        <Cards name={name} />
      )}
    </div>
  );
};

export default App;
