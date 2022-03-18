import React, { Component } from "react";
import './SearchBox.css';

class SearchBox extends Component {
    state = {
        where: "",
        checkIn: "",
        checkOut: "",
        guests: ""
    }

    changeWhere = (e) => {
        this.setState({where: e.target.value});
    }

    changeCheckIn = (e) => {
        this.setState({checkIn: e.target.value});
    }

    changeCheckOut = (e) => {
        this.setState({checkOut: e.target.value});
    }

    changeGuests = (e) => {
        this.setState({guests: e.target.value});
    }

    render() {
        return (
            <div className="home-search-box col m4">

                <h1>Book unique places to stay and things to do.</h1>

                <form className="search-box-form" id="search-form">
                    <div className="col m12 pl-0 pr-0">
                        <div className="input-field" id="where">
                            <label className="form-label">Where</label>
                            <input onChange={this.changeWhere} value={this.state.where} type="text" />
                        </div>
                    </div>

                    <div className="col m6 left pl-0">
                        <label className="form-label" htmlFor="check-in">Check-In</label>
                        <div className="input-field" id="check-in">
                            <input onChange={this.changeCheckIn} value={this.state.checkIn} type="date" />
                        </div>
                    </div>

                    <div className="col m6 right pr-0">
                        <label className="form-label" htmlFor="check-out">Check-Out</label>
                        <div className="input-field" id="check-out">
                            <input onChange={this.changeCheckOut} value={this.state.checkOut} type="date" />
                        </div>
                    </div>

                    <div className="col m12 pl-0 pr-0">
                        <div className="input-field" id="where">
                            <label className="form-label">Guests</label>
                            <input onChange={this.changeGuests} value={this.state.guests} type="number" />
                        </div>
                    </div>

                    <div className="col m12 submit-btn">
                        <div className="input-field" id="submit-btn">
                            <input className="btn waves-effect waves-light red accent-2" type="submit" />
                        </div>
                    </div>

                </form>

            </div>
        )
    }
}

export default SearchBox;