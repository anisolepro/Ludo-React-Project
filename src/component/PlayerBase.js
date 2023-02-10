import React from "react";
import '../css/PlayerBase.css';

export default function PlayerBase(props) {
    return (
        <>
            <div className="base" style={{ "--base-width": props.width, "--base-color": props.color }}>
                <div className="innerDiv">

                    <div className="gotiPlace"></div>
                    <div className="gotiPlace"></div>
                    <div className="gotiPlace"></div>
                    <div className="gotiPlace"></div>
                </div>
            </div>
        </>
    );
}