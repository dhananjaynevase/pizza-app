import React from "react";
import { useState } from "react";

const Togglebutton = () => {
    console.log("Togglebutton component rendered");
    const [isOn, setOn] = useState(false);
    const [buttonText, setButtonText] = useState("Toggle On");

    const togglebtn = () => {
    //  alert("Button Clicked");
     setOn(!isOn);
     setButtonText(!isOn ? "Toggle Off" : "Toggle On");

    }

return (
    <div>
        <h1>{isOn ? "ON" : "OFF"}</h1>
        <button onClick={togglebtn}>{buttonText}</button>
    </div>
)

}
export default Togglebutton;