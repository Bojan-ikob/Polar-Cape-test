import React, { Fragment } from "react";
import "../Home/Home.css";
const Home = ({ handleName, handleSubmit }) => {
  return (
    <Fragment>
      <div className="home-page">
        <form>
          <div className="input-div">
            <input
              name="name"
              type="text"
              placeholder="Enter your name"
              onChange={handleName}
            />
          </div>
          <div className="button-div">
            <button type="submit" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default Home;
