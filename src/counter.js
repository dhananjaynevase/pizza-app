import react from "react";

 const Counter = (props) => {
    console.log("Counter component rendered");
    return (
        <div>
            <h2>{props.count}</h2>
            <button onClick={props.increaseCounter}>Increment</button> &nbsp; &nbsp;
            <button onClick={props.checkBtn}>Check</button>
        </div>
    )
 }
export default Counter;