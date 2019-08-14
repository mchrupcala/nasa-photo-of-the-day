import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios';

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
  });

  //   .catch(err => {
  //   console.log(err);
  // });
  }, []);


  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
      <img src={apodData.url} />
      <p>{apodData.explanation}</p>
    </div>
  );
}

export default App;