import React from "react";
import { ToggleButtonGroup, ToggleButton } from "react-bootstrap";

const Filter = ({ setFilter, filter }) => {
  return (
    <ToggleButtonGroup
      type="radio"
      name="filters"
      value={filter}
      onChange={(val) => setFilter(val)}
    >
      <ToggleButton id="filter-all" value="all" variant="outline-secondary">
        All
      </ToggleButton>
      <ToggleButton
        id="filter-completed"
        value="completed"
        variant="outline-success"
      >
        Completed
      </ToggleButton>
      <ToggleButton
        id="filter-incomplete"
        value="incomplete"
        variant="outline-danger"
      >
        Incomplete
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default Filter;
