import React from 'react'
import Greetings from '../../components/greeting/Greetings';

function Props() {
    const greeting = "Good Morning";
    return (
        <div>
            <Greetings greeting={greeting} />
            <Greetings greeting="Good Afternoon" />
            <Greetings greetingObject={{ name: 'Ashika', message: 'Welcome to React Practice' }} />
        </div>
    )
}

export default Props
