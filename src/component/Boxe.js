import React from "react";
import "../css/Boxe.css"


export default function Box(props) {
    return (<>
        <div className="Box" style={{ "background": props.color }}></div>
    </>);
}