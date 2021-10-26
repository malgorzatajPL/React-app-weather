import React from 'react';

const content = {
    display: 'flex',
    justifyContent: 'space-around',
};

const styleDescription = {
    padding: '14px',
    fontSize: '16px',
    textAlign: 'center',
    lineHeight: '1.5',
};

const Weather = (props) => {
    return (
        <div style={content}>
            <div className="content-weather">
                <div className="description-weather" style={styleDescription}>
                    {props.city ? (
                        <span>
                            City: <br></br>
                            {props.city}{' '}
                        </span>
                    ) : null}
                </div>
                <div className="description-weather" style={styleDescription}>
                    {props.temp_celsius ? (
                        <span>
                            Current temperature: <br></br>
                            {props.temp_celsius}&deg;C
                        </span>
                    ) : null}
                </div>
                <div className="description-weather" style={styleDescription}>
                    {props.temp_min ? (
                        <span>
                            Min. temperature: <br></br>
                            {props.temp_min}&deg;C
                        </span>
                    ) : null}
                </div>
                <div className="description-weather" style={styleDescription}>
                    {props.temp_max ? (
                        <span>
                            Max. temperature: <br></br>
                            {props.temp_max}&deg;C
                        </span>
                    ) : null}
                </div>
                <div className="description-weather" style={styleDescription}>
                    {props.description ? (
                        <span>
                            Description: <br></br>
                            {props.description}
                        </span>
                    ) : null}
                </div>
            </div>
            <div className="season-animation">{props.season}</div>
        </div>
    );
};

export default Weather;
