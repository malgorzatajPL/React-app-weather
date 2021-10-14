import React, { Component } from 'react'; 
class A extends Component {
    constructor(props) {
        super(props);
        const today = new Date(),
            time =
                today.getHours() +
                ':' +
                today.getMinutes() +
                ':' +
                today.getSeconds()+
                ':'+
                today.getDate() +
                ':' +
                today.getMonth() +
             ':'+ today.getFullYear();
        this.state = {
            currentTime: time
        };  
    }

    render() {
        return (
            <div>
                <p>{this.state.currentTime}</p>
            </div>
        );
    }
}

export default A;
