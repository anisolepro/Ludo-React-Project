import React from "react";
import "../css/Dice.css";

export default function Dice(props) {



    function randomNumb() {
        let num = Math.floor(Math.random() * 6) + 1
        document.querySelector(".Dice").innerText = num;

        props.func(num);
    }
    return (<>
        <button onClick={randomNumb} className="Dice">.</button>
    </>);
}