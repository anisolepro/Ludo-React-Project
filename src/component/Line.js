import React from "react";
import "../css/Line.css"
import Boxe from '../component/Boxe.js';



export default function Line(props) {
    return (<>
        <div className="line" style={{ "--direction": props.type }}>

            <Boxe boxId={props.boxId[0]} />
            <Boxe boxId={props.boxId[1]} color={props.color} />
            <Boxe boxId={props.boxId[2]} color={props.innerColor} />
            <Boxe boxId={props.boxId[3]} color={props.innerColor} />
            <Boxe boxId={props.boxId[4]} color={props.innerColor} />
            <Boxe boxId={props.boxId[5]} color={props.innerColor} />
        </div>
    </>);
}