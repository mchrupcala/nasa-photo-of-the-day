import React, { useState, useEffect } from "react";
import "./App.css";

const GalleryCard = props => {
  return (
    <div className="gallery">
      <div className="thumbnail">
        <img src={props.imageGal} />
      </div>
      <div>
        <h2>Title:</h2>
        <p>;</p>
      </div>
    </div>
  );
};

export default GalleryCard;
