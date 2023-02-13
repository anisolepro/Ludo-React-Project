import React from "react";
import "../css/Dice.css";

export default function Dice(props) {



    function randomNumb() {
        if (props.diceRole) {


            document.querySelector(".Dice").classList.toggle("rotate");
            let num = Math.floor(Math.random() * 6) + 1     // guess random number
            document.querySelector(".Dice").innerText = num;


            props.func(num);

            [1, 2, 3, 4].forEach(e => { // remove active class 
                [0, 1, 2, 3].forEach(f => {
                    document.getElementById(`${props.player[f].color}${e}`).classList.remove("active")
                })
            })



            if (props.player[props.turn].piece == 0 && num != 6) {
                // props.setDiceRole(true);

                // // next turn
                if (props.turn + 1 < 4) {

                    props.setTurn(props.turn + 1)
                } else {
                    props.setTurn(0)
                }

            }

            else {

                [1, 2, 3, 4].forEach(e => {     // add active class 
                    document.getElementById(`${props.player[props.turn].color}${e}`).classList.add("active")
                })





                props.setDiceRole(false)
            }


        }
    }
    return (<>
        <button onClick={randomNumb} style={{
            'background': props.player[props.turn].color
        }} className="Dice">Start</button>
    </>);
}