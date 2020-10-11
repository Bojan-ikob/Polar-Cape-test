import React, { Fragment, useState } from "react";
import "../Filters/Filters.css";
const Filters = () => {
  const [showFilters, setShowFilters] = useState(false);
  const hideShowFilters = () => {
    setShowFilters(!showFilters);
  };
  return (
    <Fragment>
      <div className="filters">
        <div className="filters-by-color">
          <button className="butt" onClick={hideShowFilters}>
            Filter by color
          </button>
          <div className={showFilters ? "inputs" : "hide"}>
            <div>
              <input type="checkbox" className="input" value="White" />
              <label>White</label>
            </div>
            <div>
              <input type="checkbox" className="input" value="Blue" />
              <label>Blue</label>
            </div>
            <div>
              <input type="checkbox" className="input" value="Black" />
              <label>Black</label>
            </div>
            <div>
              <input type="checkbox" className="input" value="Red" />
              <label>Red</label>
            </div>
            <div>
              <input type="checkbox" className="input" value="Green" />
              <label>Green</label>
            </div>
          </div>
        </div>
        <div className="sorting-cards">
          <label>Sorting by name:</label>
          <select name="name">
            <option value="ascending">Ascending</option>
            <option value="descending">Descending</option>
          </select>
        </div>
      </div>
    </Fragment>
  );
};

export default Filters;
