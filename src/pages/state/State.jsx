import React, { useState } from 'react'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

function State() {
    const [greeting, setGreeting] = useState("Hello");
    const [name, setName] = useState("Anonymous");

    const handleGreeting = (message) => {
        setGreeting(message);
    }
    const handleName = (name) => {
        setName(name);
    }

    return (
        <div>
            <h1>{greeting}, {name}</h1>
            <Stack style={{ display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "30px" }} spacing={2} direction="row">
                <Button onClick={() => handleGreeting("Good Morning")} variant="contained">Good Morning</Button>
                <Button onClick={() => handleGreeting("Good Evening")} variant="contained">Good Evening</Button>
                <Button onClick={() => handleGreeting("Good Night")} variant="contained">Good Night</Button>
            </Stack>

            <Stack style={{ display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "30px" }} spacing={2} direction="row">
                <Button onClick={() => handleName("User 1")} variant="outlined">User 1</Button>
                <Button onClick={() => handleName("User 2")} variant="outlined">User 2</Button>
                <Button onClick={() => handleName("User 3")} variant="outlined">USer 3</Button>
            </Stack>
        </div>
    )
}

export default State
