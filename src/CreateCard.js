import React, {useState, useEffect} from "react";
import "./App.css";

 const CreateCard = props => {
    return (
    <div className="infoCard">

        <div className="thumbnail">
            <h2>Title: {props.title}</h2>
            <img src={props.image}/>
        </div>

        <p>{props.description};</p>

    </div>
    );
};

export default CreateCard;