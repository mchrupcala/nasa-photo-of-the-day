import React, { useState, useEffect } from "react";
import "./App.css";

const CreateCard = props => {
  return (
    <div className="infoCard">
      <div className="thumbnail">
        <img src={props.image} />
      </div>
      <div>
        <h2>Title: {props.title}</h2>
        <p>{props.description};</p>
      </div>
    </div>
  );
};

export default CreateCard;
