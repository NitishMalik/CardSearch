import React from "react";
import "./styles.css";

export const Search = props => (
  <input
    type="search"
    placeholder={props.placeholder}
    onChange={props.inputChange}
    className="search"
  />
);
