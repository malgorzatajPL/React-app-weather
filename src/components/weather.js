import React from 'react';


const Weather = (props) => {
const css = `
.content{
    display: flex;
    justify-content: space-evenly;
}
.description-weather{
    padding: 14px;
    font-size: 16px;
    text-align: center;
    line-height: 1.5;
}
`;
    return (
        <div>
        <style>{css}</style>
        <div className="content">
            <div className="content-weather">
                <div className="description-weather">
                    {props.city ? (
                        <span>
                            City: <br></br>
                            {props.city}{' '}
                        </span>
                    ) : null}
                </div>
                <div className="description-weather">
                    {props.temp_celsius ? (
                        <span>
                            Current temperature: <br></br>
                            {props.temp_celsius}&deg;C
                        </span>
                    ) : null}
                </div>
                <div className="description-weather">
                    {props.temp_min ? (
                        <span>
                            Min. temperature: <br></br>
                            {props.temp_min}&deg;C
                        </span>
                    ) : null}
                </div>
                <div className="description-weather">
                    {props.temp_max ? (
                        <span>
                            Max. temperature: <br></br>
                            {props.temp_max}&deg;C
                        </span>
                    ) : null}
                </div>
                <div className="description-weather">
                    {props.description ? (
                        <span>
                            Description: <br></br>
                            {props.description}
                        </span>
                    ) : null}
                </div>
            </div>

            <div className="description-weather"><h3 className="ui header">{props.currentTime}</h3></div>
            <div className="season-animation">{props.season}</div>
        </div>
        </div>
    );
};

export default Weather;
