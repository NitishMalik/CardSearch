import React from "react";
import { Card } from "../card";
import "./styles.css";

export const CardList = props => (
  <div className="card-list">
    {props.monsters.map(m => (
      <Card key={m.id} monster={m} />
    ))}
  </div>
);
