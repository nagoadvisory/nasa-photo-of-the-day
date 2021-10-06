import React, {useState, userEffect, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import Image from './components/Image'; //this doesnt currently exist as a file
import Title from './components/Title'; //this don't currently exist as a file

function App() {

  const [data, setData] = useState ([]);

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=oua1HGMt5E2UlZpzNAYRobNg73EJngwvGtEeDvc2')
      .then(res => {
        console.log(res);
        const data = res.data;
        setData(data); //setData = data
      })
      .catch(err => {
        console.error(err);
      })
  }, [])

  return (
    <div className="App">
      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p> */}
      <h1>Nasa Photo of the Dday</h1>
      <Title title={data.title} />
      <Image image = {data.url} />
    </div>
  );
}

export default App;
