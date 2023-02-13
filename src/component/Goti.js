import React, { useState, useEffect } from "react";
import '../css/Goti.css'

export default function Goti(props) {
    const [position, setPosition] = useState(props.position)
    let startId = props.position;


    function shiftPosition(boxPos) {
        let boxId = document.getElementById(boxPos);
        let gotiID = document.getElementById(props.gotiID);
        gotiID.setAttribute('style', `top : ${boxId.offsetTop - 20}px ; left : ${boxId.offsetLeft + 10}px`);
    }

    function gotiShift() {


        if (props.player[props.turn].color == props.color && props.diceRole == false) {
            if (props.diceValue == 6 && position == startId) {
                if (props.color == "red") {

                    setPosition("b48")
                    shiftPosition("b48")
                }
                else if (props.color == "blue") {
                    setPosition("b35")
                    shiftPosition("b35")
                }
                else if (props.color == "yellow") {
                    setPosition("b22")
                    shiftPosition("b22")
                }
                else if (props.color == "green") {
                    setPosition("b9")
                    shiftPosition("b9")
                }

                let temp = props.player;
                temp[props.turn]['piece'] += 1;


                props.setDiceRole(true);
                props.setPlayer(temp)
                // console.log(props.player)



            } else if (position.length < 4) {


                let extraMove = false;


                let boxPos = (props.diceValue + Number(position.split("b").join("")));
                if (boxPos > 52) {
                    boxPos -= 52;
                }


                function shiftToWinning(winPosition) {  // func to shift goti to winning line

                    setPosition(winPosition)
                    shiftPosition(winPosition)



                    let temp = props.player;
                    temp[props.turn]['piece'] -= 1;
                    temp[props.turn]['winning'] += 1;

                    props.setPlayer(temp)

                }
                // winning condition for red
                if (props.color == "red" && Number(position.split("b").join("")) <= 46 && boxPos > 46) {

                    shiftToWinning(`redM${boxPos - 46}`)
                }
                // winning condition for blue

                else if (props.color == "blue" && Number(position.split("b").join("")) <= 33 && boxPos > 33) {
                    shiftToWinning(`blueM${boxPos - 33}`)

                }

                // winning condition for yellow

                else if (props.color == "yellow" && Number(position.split("b").join("")) <= 20 && boxPos > 20) {
                    shiftToWinning(`yellowM${boxPos - 20}`)

                }
                // winning condition for green
                else if (props.color == "green" && Number(position.split("b").join("")) <= 7 && boxPos > 7) {
                    shiftToWinning(`greenM${boxPos - 7}`)
                }


                else {



                    setPosition(`b${boxPos}`)
                    shiftPosition(`b${boxPos}`)
                }

                if (![9, 22, 35, 48, 4, 17, 30, 43].includes(boxPos)) {


                    // if piece put on top of other
                    setTimeout(() => {      // timeout to wait to get goti at place due to transition duration


                        // check the place where the goti goes 

                        // if there any other goties then it cut them off 
                        props.player.forEach(f => {
                            [1, 2, 3, 4].forEach(e => {

                                if (f.color !== props.color) {

                                    let tempPiece = document.getElementById(`${f.color}${e}`)
                                    let gotiID = document.getElementById(props.gotiID);

                                    if (tempPiece.offsetTop === gotiID.offsetTop && tempPiece.offsetLeft === gotiID.offsetLeft) {

                                        let boxId = document.getElementById(`gb${f.color}${e}`);

                                        tempPiece.setAttribute('style', `top : ${boxId.offsetTop - 20}px ; left : ${boxId.offsetLeft + 10}px`);

                                        let temp = props.player;
                                        temp[props.turn]['piece'] -= 1;



                                        props.setPlayer(temp)


                                        // extra move for cutting goti

                                        extraMove = true;
                                    }
                                }
                            })
                        })

                    }, 500);
                }




                // next turn
                setTimeout(() => {

                    props.setDiceRole(true);

                    if (props.diceValue !== 6 && !extraMove) {
                        if (props.turn + 1 < 4) {

                            props.setTurn(props.turn + 1)
                        } else {
                            props.setTurn(0)
                        }
                    }
                }, 500);



            } else if (position.includes("M")) {        // if goti is inside the winning line


                if (Number(position.split("M")[1]) + props.diceValue < 6) {

                    let tempPosition = `${position.split("M")[0]}M${Number(position.split("M")[1]) + props.diceValue}`;
                    setPosition(tempPosition)
                    shiftPosition(tempPosition)
                } else if (Number(position.split("M")[1]) + props.diceValue == 6) {
                    setPosition('winningBox')
                    shiftPosition('winningBox')

                }


                // next turn
                setTimeout(() => {

                    props.setDiceRole(true);

                    if (props.diceValue !== 6) {
                        if (props.turn + 1 < 4) {

                            props.setTurn(props.turn + 1)
                        } else {
                            props.setTurn(0)
                        }
                    }
                }, 500);
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
            <a startposition={startId} onClick={gotiShift} id={props.gotiID} className="Goti" style={{ 'top': props.top, 'left': props.left }}>
                <div className="gotiColor" style={{ 'backgroundColor': props.color }}>
                </div>
            </a>
        </>
    );
}