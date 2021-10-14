import React, { Component } from 'react';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (
            <div className="main">
                <div className="ui fluid category search">
                    <div className="ui icon input">
                        <input
                            className="prompt"
                            type="text"
                            value={this.state.value}
                            onChange={this.handleChange}
                        />
                        <i class="search icon"></i>
                    </div>
                </div>
                <div className="content">
                    <div className="location">{this.state.value}</div>
                    <div className="date">date</div>
                    <div className="weather-box">
                        <div className="temp">temp°c</div>
                        <div className="weather">weather</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Search;
