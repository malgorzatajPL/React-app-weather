import React, { Component } from 'react';

class CurrentDate extends Component {
    constructor(props) {
        super(props);
        const months = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
        ];
        const days = [
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
        ];
        const dat = new Date(),
            calendar =
                days[dat.getDay()] + ' ' +
                dat.getDate() + ' ' +
                months[dat.getMonth()] + ' ' +
                dat.getFullYear();

        this.state = {
            showDate: calendar,
        };
    }

    render() {
        return (
            <div>
                <p>{this.state.showDate}</p>
            </div>
        );
    }
}
export default CurrentDate;
