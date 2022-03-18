import React from "react";
import City from "./City";

function Cities(props){
    return (
        props.cities.map((city, i)=>{
            return (
                <div className="col s3" key={i}>
                    <City city={city} />
                </div>
            )
        })
    )
}

export default Cities;