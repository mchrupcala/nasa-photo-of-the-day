import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import GalleryCard from "./GalleryCard";

const PopularGallery = props => {
  const [archiveData, setarchiveData] = useState([]);

  useEffect(() => {
    axios
      .all([
        axios.get("https://images-api.nasa.gov/asset/0302063"),
        axios.get("https://images-api.nasa.gov/asset/PIA04921"),
        axios.get("https://images-api.nasa.gov/asset/S65-34635"),
        axios.get("https://images-api.nasa.gov/asset/as11-44-6551")
      ])
      .then(res => {
        const archive = res;
        console.log("NASA archive data: ", archive);
        setarchiveData(archive);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div className="gallery">
      {archiveData.map(item => {
        <GalleryCard imageGal={item.data.collection.items[1]} />;
      })}

      {/* <div className="thumbnail">
        <img src={props.image} />
      </div>
      <div>
        <h2>Title: {props.title}</h2>
        <p>{props.description};</p>
      </div> */}
    </div>
  );
};

export default PopularGallery;
