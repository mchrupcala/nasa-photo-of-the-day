import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import CreateCard from "./CreateCard";
// import DatePicker from "./DatePicker";
import { Container, Menu, Image } from "semantic-ui-react";
// import PopularGallery from "./PopularGallery";

function App() {
  const [apodData, setApodData] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY", {
        params: {}
      })
      .then(res => {
        const apod = res.data;
        console.log("NASA apod data: ", apod);
        setApodData(apod);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div className="App">
      <Container>
        {/* <DatePicker /> */}
        {/* 
      <img src={apodData.url} /> */}
        <div className="ui menu">
          <div className="navDiv">
            <img className="logo" src="nasa.png" alt="NASA Planet Logo" />
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

        <div className="archiveGallery" />

        {/* <PopularGallery /> */}

        <div className="ui comments">
          <h3 className="ui dividing header">Comments</h3>

          <div className="comment">
            <div className="avatar">
              <img src="jonas.jpg" />
            </div>
            <div className="content">
              <a className="author">Matt</a>
              <div className="metadata">
                <div>Today at 5:42PM</div>
              </div>
              <div className="text">How artistic!</div>
              <div className="actions">
                <a className="">Reply</a>
              </div>
            </div>
          </div>

          <div className="comment">
            <div className="avatar">
              <img src="daniel.jpg" />
            </div>
            <div className="content">
              <a className="author">Elliot Fu</a>
              <div className="metadata">
                <div>Yesterday at 12:30AM</div>
              </div>
              <div className="text">
                <p>
                  This has been very useful for my research. Thanks as well!
                </p>
              </div>
              <div className="actions">
                <a className="">Reply</a>
              </div>
            </div>
          </div>

          <div className="comment">
            <div className="avatar">
              <img src="dan.jpg" />
            </div>
            <div className="content">
              <a className="author">Jenny Hess</a>
              <div className="metadata">
                <div>Just now</div>
              </div>
              <div className="text">Elliot you are always so right :)</div>
              <div className="actions">
                <a className="">Reply</a>
              </div>
            </div>
          </div>

          <div className="comment">
            <div className="avatar">
              <img src="chris.jpg" />
            </div>
            <div className="content">
              <a className="author">Joe Henderson</a>
              <div className="metadata">
                <div>5 days ago</div>
              </div>
              <div className="text">Dude, this is awesome. Thanks so much</div>
              <div className="actions">
                <a className="">Reply</a>
              </div>
            </div>
          </div>

          <form className="ui reply form">
            <div className="field">
              <textarea rows="3" />
            </div>
            <button className="ui icon primary left labeled button">
              <i aria-hidden="true" className="edit icon" />
              Add Reply
            </button>
          </form>
        </div>
      </Container>
    </div>
  );
}

export default App;
