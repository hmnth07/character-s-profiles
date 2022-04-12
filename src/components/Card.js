import React from "react";

export default function Card(props) {
    return (
        <a className="card" href={props.item.url}>
            <img src={props.item.image} alt={props.item.name}/>
            <div className="card--text">
                <p>Name: {props.item.name}</p>
                <p>Species: {props.item.species}</p>
                <p>Gender: {props.item.gender}</p>
                <p>Origin: {props.item.origin.name}</p>
                <p>Current Location: {props.item.location.name}</p>
            </div>
        </a>
    )
}