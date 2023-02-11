import React, { useState, useEffect } from "react";
import '../css/Goti.css'

export default function Goti(props) {
    const [position, setPosition] = useState(props.position)
    let startId = props.position;


    function shiftPosition(boxPos) {
        let boxId = document.getElementById(`b${boxPos}`);
        let gotiID = document.getElementById(props.gotiID);
        gotiID.setAttribute('style', `top : ${boxId.offsetTop - 20}px ; left : ${boxId.offsetLeft + 10}px`);
    }

    function gotiShift() {

        if (props.player[props.turn].color == props.color && props.diceRole == false) {
            if (props.diceValue == 6 && position == startId) {
                if (props.color == "red") {

                    setPosition("b48")
                    shiftPosition(48)
                }
                else if (props.color == "blue") {
                    setPosition("b35")
                    shiftPosition(35)
                }
                else if (props.color == "yellow") {
                    setPosition("b22")
                    shiftPosition(22)
                }
                else if (props.color == "green") {
                    setPosition("b9")
                    shiftPosition(9)
                }

                let temp = props.player[props.turn];
                temp.piece += 1;

                props.setPlayer([...props.player, temp])


            } else if (position.length < 4) {
                let boxPos = (props.diceValue + Number(position.split("b").join("")));
                if (boxPos > 52) {
                    boxPos -= 52;
                }
                setPosition(`b${boxPos}`)
                shiftPosition(boxPos)

                // if piece put on top of other
                setTimeout(() => {

                    props.player.forEach(f => {
                        [1, 2, 3, 4].forEach(e => {

                            if (f.color !== props.color) {

                                let tempPiece = document.getElementById(`${f.color}${e}`)
                                let gotiID = document.getElementById(props.gotiID);

                                if (tempPiece.offsetTop === gotiID.offsetTop && tempPiece.offsetLeft === gotiID.offsetLeft) {

                                    let boxId = document.getElementById(`gb${f.color}${e}`);

                                    tempPiece.setAttribute('style', `top : ${boxId.offsetTop - 20}px ; left : ${boxId.offsetLeft + 10}px`);
                                }
                            }
                        })
                    })

                }, 500);



                props.setDiceRole(true);

                // next turn
                if (props.diceValue !== 6) {
                    if (props.turn + 1 < 4) {

                        props.setTurn(props.turn + 1)
                    } else {
                        props.setTurn(0)
                    }
                }

            }


        }
    }

    useEffect(() => {
        setTimeout(() => {
            let boxId = document.getElementById(position);
            let gotiID = document.getElementById(props.gotiID);
            gotiID.setAttribute('style', `top : ${boxId.offsetTop - 20}px ; left : ${boxId.offsetLeft + 10}px`);
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