import React from 'react'
import Greetings from '../../components/greeting/Greetings';

function Props() {
    const greeting = "Good Morning";
    const displayGreeting = () => {
        return <h1>This is a function prop!</h1>
    }
    return (
        <div>
            <Greetings greeting={greeting} />
            <Greetings greeting="Good Afternoon" />
            <Greetings displayGreeting={displayGreeting()} greetingObject={{ name: 'Ashika', message: 'Welcome to React Practice' }} />
        </div>
    )
}

export default Props
