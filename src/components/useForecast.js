import React from 'react';
import Error from './error/error';
import Loading from './loading/loading';
import Form from './form';
import Weather from './weather';
import Lottie from 'lottie-react';
import winter from '../checkSeason/winter.json';
import summer from '../checkSeason/summer.json';

const style = {
    height: '400px',
    padding: '20px',
};
const Season = [
    <Lottie animationData={winter} style={style} />,
    <Lottie animationData={summer} style={style} />,
];
const R = <Lottie animationData={Error} />;


const API_key = `a97e81c96efb3e270010981f4ae910b6`;

class MyComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            city: undefined,
            main: undefined,
            celsius: undefined,
            temp_max: undefined,
            temp_min: undefined,
            description: '',
            season: '',
            error: false

        };
    }

    calculateCelsius(temp) {
        let cel = Math.floor(temp - 273.15);
        return cel;
    }

    getWeather = async (e) => {
        e.preventDefault();

        const city = e.target.elements.city.value;
        if (city ? this.getWeather : this.error) {
            const api_call = await fetch(
                `http://api.openweathermap.org/data/2.5/weather?q=${city} &appid=${API_key}`
            );

            const response = await api_call.json();

            this.setState({
                city: `${response.name},${response.sys.country}`,
                celsius: this.calculateCelsius(response.main.temp),
                temp_max: this.calculateCelsius(response.main.temp_max),
                temp_min: this.calculateCelsius(response.main.temp_min),
                description: response.weather[0].description,
                season:
                    this.calculateCelsius(response.main.temp) < '5'
                        ? Season[0]
                        : Season[1],
            });
        } else {
            this.setState({ error: this.R});
        }
    };
    render() {
        return (
            <div className="App">
                <Form loadWeather={this.getWeather} error={this.state.error} />
                <Weather
                    city={this.state.city}
                    temp_celsius={this.state.celsius}
                    temp_max={this.state.temp_max}
                    temp_min={this.state.temp_min}
                    description={this.state.description}
                    season={this.state.season}
                />
            </div>
        );
    }
}

export default MyComponent;
