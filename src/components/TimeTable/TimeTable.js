import React, { Component } from 'react';
import axios from 'axios';

class TimeTable extends Component {

    state = {
        timetable: {}
    }

    componentDidMount() {
        axios({
            method: 'GET',
            url: `http://airlabs.co/api/v7/timetable`,
            params: {
                api_key: process.env.api_key,
                iata_code: this.props.match.params.airport,
                type: this.props.match.params.type
            }
        }).then(
            response => {
                this.setState({
                    timetable: response.data.response
                })
            }
        )
    }



    render() {
        return (
            <div>
                <pre>
                    {JSON.stringify(this.params, null, 2)}
                </pre>
                <table>
                    <thead>
                        <th>Airline</th>
                        <th>Flight #</th>
                        <th>Departure Airport</th>
                        <th>Departure Time</th>
                        <th>Arrival Airport</th>
                        <th>Arrival Time</th>
                    </thead>
                    <tbody>
                        {this.state.timetable.length && this.state.timetable.map(flight => <tr>
                            <td>{flight.airline.name}</td>
                            <td>{flight.flight.number}</td>
                            <td>{flight.departure.iata_code}</td>
                            <td>{flight.departure.scheduled_time}</td>
                            <td>{flight.arrival.iata_code}</td>
                            <td>{flight.arrival.scheduled_time}</td>

                        </tr>)}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default TimeTable;