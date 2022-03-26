import React, { Component } from "react";
import './Activity.css';
import { Link } from 'react-router-dom';

class Activity extends Component {
    render() {
        const { activityType, cost, id, image, rating, title, totalRaitings } = this.props.activity;
        return (
            <div className="activity">
                <Link to={`/activity/${id}`}>
                    <img src={image} alt="Activity" />
                    <div className="activity-type">
                        {activityType}
                        <span className="rating">
                            <i className="material-icons">star</i>{rating} ({totalRaitings})
                        </span>
                    </div>
                    <div className="title">{title}</div>
                    <div className="cost">From ${cost}/person</div>
                    
                </Link>
            </div>
        )
    }
}

export default Activity;