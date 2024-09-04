import { useState, useEffect } from "react";
import days from "./data";
const colors = [
  "papayawhip",
  "blanchedalmond",
  "peachpuff",
  "bisque",
  "cornsilk",
  "lightyellow",
];

function App() {
  const [color, setColor] = useState("lemonchiffon");
  const [dog, setDog] = useState({});
  const [index, setIndex] = useState(0);
  const [number, setNumber] = useState(0);
  const [today, setToday] = useState({});
  const [vibe, setVibe] = useState("");

  useEffect(()=>{
    console.log("vibe: ", vibe)
  }, [vibe])
  // function getData(){
  //   console.log("I am getting data");
  // }


  // Because we are updating state in this useEffect if we we do not pass a dependency the webpage will re-render infinitely
  // Since we only want to update number ONCE, we will pass an empty dependency array 
  useEffect(()=>{
    setNumber(Math.random())
  }, [])

  // we need this useEffect to run every time the index changes, therefore we passed the state variable index as a dependency
  useEffect(()=>{
    console.log(index)
    setToday(days[index])
  }, [index])

  // because this useEffect does not have a dependency, it will run every time the page rerenders
  // this useEffect isn't handling any state changes and is not dependent on any other variables, therefore does not have dependencies 
//   useEffect(()=>{
//     getData()
// })

  function handleOnChange(event) {
    setVibe(event.target.value);
    // console.log(vibe)
  }

  function updateIndex() {
    setIndex((index + 1) % days.length);
    // 1 % 4 === 1
    // 2 % 4 === 2
    // 3 % 4 === 3
    // 4 % 4 === 0
  }

  return (
    <div className="App">
      <header style={{ backgroundColor: color }}>
        <h1>Daily Home Page </h1>
        <button onClick={updateIndex}>Update Day</button>
      </header>
      <main>
        <div className="date">
          <h2>Todays date:</h2>
          <h3>{today.weekday}</h3>
          <h4>{today.month}</h4>
          <h5>{today.day}</h5>
        </div>
        <div className="lucky">
          <h2>Today's lucky number is: {number}</h2>
        </div>
        <div className="vibe">
          <input type="text" onChange={handleOnChange} />
          <h4>Today's vibe is: </h4>
          <h5>{vibe}</h5>
        </div>
        <div className="dog">
          <button>Change dog</button>
          <h2>Featured dog:</h2>
          <img src={dog.message} alt="Featured Dog" />
        </div>
      </main>
    </div>
  );
}

export default App;