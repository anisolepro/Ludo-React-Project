import React from "react";
import '../css/PlayerBase.css';

export default function PlayerBase(props) {
    return (
        <>
            <div className="base" style={{ "--base-width": props.width, "--base-color": props.color }}>
                <div className="innerDiv">

                    <div id={props.gotiBaseId[0]} className="gotiPlace">
                    </div>
                    <div id={props.gotiBaseId[1]} className="gotiPlace">
                    </div>
                    <div id={props.gotiBaseId[2]} className="gotiPlace">
                    </div>
                    <div id={props.gotiBaseId[3]} className="gotiPlace">
                    </div>
                </div>
            </div>
        </>
    );
}