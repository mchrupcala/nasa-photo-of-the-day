import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios';
import useSignUpForm from './customHooks/CustomHooks';

const DatePicker = props => {

    const [apodData, setApodData] = useState([]);

    const apiRequest = () => {

    }

    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2019-08-${inputs.dateSelect}`, {
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


    const {inputs, handleInputChange, handleSubmit} = useSignUpForm(apiRequest);

    
    return (
      <form onSubmit={handleSubmit} className="dateForm">
        <select onChange={handleInputChange} value={inputs.dateSelect} name="dateSelect">
          <option value="01">Monday</option>
          <option value="02">Tuesday</option>
          <option value="03">Wednesday</option>
        </select>
        <br/><br/>
        <input type="submit" value="Submit"></input>
      </form>

    )}

export default DatePicker;