import React from "react";
import "../css/Boxe.css"


export default function Box(props) {
    return (<>
        <div id={props.boxId} className="Box" style={{ "background": props.color }}>
            {/* {props.boxId} */}

        </div>
    </>);
}