import React from "react";
import './Venue.css';
import Venue from "./Venue";

function Venues(props) {
    const venues = props.venues.map((venue, i)=> {
        return (
            <div className="col s3" key={i}>
                <Venue venue={venue} />
            </div>
        )
    })
    return (
        <div className="venues">
            <h1 className="main-header-text">{props.header}</h1>
            {venues}
        </div>
    )
}

export default Venues;