import React, { Component } from 'react'

export class Unmount extends Component {
    componentWillUnmount() {
        alert("The Unmount component is about to be unmounted.");
    }
    render() {
        return (
            <h1>Component To Be Unmounted</h1>
        );
    }
}

export default Unmount
