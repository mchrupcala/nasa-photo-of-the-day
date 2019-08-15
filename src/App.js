import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import CreateCard from "./CreateCard";
// import DatePicker from "./DatePicker";
import { Container, Menu, Image } from "semantic-ui-react";

function App() {
  const [apodData, setApodData] = useState([]);

  // useEffect(() => {
  //   // axios
  //     // .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY", {
  //     //   params: {}
  //     // })
  //     .then(res => {
  //       const apod = res.data;
  //       console.log("NASA apod data: ", apod);
  //       setApodData(apod);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // }, []);

  return (
    <div className="App">
      <Container>
        {/* <DatePicker /> */}
        {/* 
      <img src={apodData.url} /> */}
        <Image
          src="./nasa.png"
          className="logo heroImg"
          size="small"
          bordered
        />
        <div className="ui menu">
          <div>
            {/* <img className="logo" src="nasa_logo.png" alt="NASA Planet Logo" /> */}
          </div>
          <a className="item">Home</a>
          <a className="item">Upcoming Missions</a>
          <a className="item">NASA Live</a>
          <a className="item">NASA TV</a>
          <a className="item">Galleries</a>
        </div>

        <br />
        <hr />
        <Image src={apodData.url} size="large" className="heroImg" bordered />
        <CreateCard
          title={apodData.title}
          image={apodData.url}
          description={apodData.explanation}
        />
      </Container>
    </div>
  );
}

export default App;
