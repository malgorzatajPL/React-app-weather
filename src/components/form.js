import React from 'react';

const Form = (props) => {
    const css = `
    .form{
       display: flex;
         justify-content: center;
    }

    .ui.message h1 {
        padding: 15px;
    }

    .ui icon input{
        padding: 10px;
    }

    .ui.button:not(.icon)>.icon:not(.button):not(.dropdown){
        margin:0;
    }
    `;
    
    return (
        <div className="container">
            {' '}
            <style>{css}</style>
            <h1 className="ui center aligned header">Weather app</h1>
            <form onSubmit={props.loadWeather} className="form">
                <div className="ui fluid category search">
                    <div className="ui icon input">
                        <input
                            className="form-control"
                            type="text"
                            name="city"
                            placeholder="City"
                            autoComplete="off"
                        />
                        <button className="ui inverted violet button">
                            {' '}
                            <i class="search icon"></i>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Form;
