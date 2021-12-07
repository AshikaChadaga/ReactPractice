import React, { Component } from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export class ClassComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Ashika',
            message: "Demo of Class Components"
        }
    }
    handleGreeting(message) {
        this.setState({ message: message })
    }
    handleName(name) {
        this.setState({ name: name })
    }
    render() {
        return (
            <div>
                <h1> {this.state.message} : {this.state.name} </h1>
                <Stack style={{ display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "30px" }} spacing={2} direction="row">
                    <Button onClick={() => this.handleGreeting("Good Morning")} variant="contained">Good Morning</Button>
                    <Button onClick={() => this.handleName("User 1")} variant="outlined">User 1</Button>
                </Stack>
            </div>
        )
    }
}

export default ClassComponent
