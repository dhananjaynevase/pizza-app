import logo from './logo.svg';
import { useEffect, useState } from 'react';
import Togglebutton from './Togglebutton';
import './App.css';
import Counter from './counter';

function App() {
  const [name, setName] = useState("");
  const [data, setData] = useState("");
  const [count, setCount] = useState(0);
  const [num, setNum] = useState("");
  const [isEven, setEven] = useState(null);
  const [darkMode, setDarkmode] = useState(false);
  const handleClick = () => {
    setData(name);
  };



  const handleClearClick = () => {
    // setName("");
    setData("");
  }



  const increaseCounter = () => {
    setCount(count + 1);
    console.log(count);
  }



  const clearCounter = () => {
    setCount(0);
  }



  const checkEven = () => {
    const number = Number(num);

    if (number % 2 === 0) {
      setEven(true);
    } else {
      setEven(false);
    }
  };



  const checkBtn = () => {
    alert("Check Button Clicked");
  }



  // const darkMode = () => {
  //   // alert("Dark Mode Button Clicked");
  //   console.log(darkmode, "Dark Mode Button Clicked");
  //   setDarkmode(darkmode ? false : true);
  // }


  useEffect(() => {
    // console.log("Component mounted or updated");
    // clearCounter()
  }, [])

useEffect(() => {
    window.document.body.style.backgroundColor =
      darkMode ? "lightgrey" : "whitesmoke";

    window.document.body.style.color =
      darkMode ? "whitesmoke" : "lightgrey";
  }, [darkMode]);

  return (
    <div style={{ padding: "20px" }}>
      {/* <h1>React Basic Example</h1> */}

      <input type="text" placeholder="Enter something" value={name} onChange={(e) => setName(e.target.value)}/> &nbsp; &nbsp;
      <button onClick={handleClick}> Print </button> &nbsp; &nbsp;
      <button onClick={handleClearClick}> Clear Text</button>
      <h2>{data}</h2>
      {/* <h2>{name}</h2> */}      {/*This will print the value as you type, without needing to click the button */}
      {/* <br /> */}




      <input type="number" value={num} placeholder='Enter a number' onChange={(e) => setNum(e.target.value)} />&nbsp; &nbsp;
      <button onClick={checkEven}>Even Number</button>
      <h2 style={{ }}>  {isEven === null
        ? ""
        : isEven
          ? "Even Number"
          : "Odd Number"}</h2> 



      <Counter count={count} checkBtn={checkBtn} increaseCounter={increaseCounter} />
      <br />
      <br />



      <Togglebutton />



      <br /><br />
      {/* <div style={{ backgroundColor: darkmode ? "whitesmoke" : "lightgrey", padding: "10px", width: "100%", height: "250px"}}></div> */}

      <br /><br />
      <button onClick={() => setDarkmode(prev => !prev)}>Dark Mode</button>

      
    </div>
  );
}

export default App;
