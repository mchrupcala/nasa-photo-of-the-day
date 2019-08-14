import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios';
import CreateCard from './CreateCard';
import DatePicker from './DatePicker';
import { tsPropertySignature } from "@babel/types";

function App() {

  const [apodData, setApodData] = useState([]);

  useEffect(() => {
      axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', {
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

      <DatePicker />

      <img src={apodData.url} />
      <CreateCard title={apodData.title} image={apodData.url} description={apodData.explanation}/>
    </div>
  );
}

export default App;