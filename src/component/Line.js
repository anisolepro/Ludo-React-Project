import React from "react";
import "../css/Line.css"
import Boxe from '../component/Boxe.js';



export default function Line(props) {
    return (<>
        <div className="line" style={{ "--direction": props.type }}>
            <Boxe />
            <Boxe color={props.color} />
            <Boxe color={props.innerColor} />
            <Boxe color={props.innerColor} />
            <Boxe color={props.innerColor} />
            <Boxe color={props.innerColor} />
        </div>
    </>);
}