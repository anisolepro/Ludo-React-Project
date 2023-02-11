import React, { useState, useEffect } from "react";
import '../css/Goti.css'

export default function Goti(props) {
    const [position, setPosition] = useState(props.position)
    let startId = props.position;

    function gotiShift() {


        if (props.diceValue == 6 && position == props.position) {
            if (props.color == "red") {

                setPosition("b48")
            }
            else if (props.color == "blue") {
                setPosition("b35")
            }
            else if (props.color == "yellow") {
                setPosition("b22")
            }
            else if (props.color == "green") {
                setPosition("b9")
            }
        } else if (position.length < 4) {
            let boxPos = (props.diceValue + Number(position.split("b").join("")));
            if (boxPos > 52) {
                boxPos -= 52;
            }
            // console.log(`b${boxPos}`)
            setPosition(`b${boxPos}`)

        }
        let boxId = document.getElementById(position);
        let gotiID = document.getElementById(props.gotiID);
        gotiID.setAttribute('style', `top : ${boxId.offsetTop - 20}px ; left : ${boxId.offsetLeft + 10}px`);


    }

    useEffect(() => {
        setTimeout(() => {
            gotiShift()
        }, 1000);
    }, []);


    return (
        <>
            <a onClick={gotiShift} id={props.gotiID} className="Goti" style={{ 'top': props.top, 'left': props.left }}>
                <div className="gotiColor" style={{ 'backgroundColor': props.color }}>
                </div>
            </a>
        </>
    );
}