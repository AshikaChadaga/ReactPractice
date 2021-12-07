import React from 'react'

function Greetings(props) {
  return (
    <div>
      <div>
        {props.greeting ? <h1>{props.greeting}, Ashika!</h1> : <h1>{props.greetingObject.name}, {props.greetingObject.message}</h1>}
      </div>
    </div>
  )
}

export default Greetings
