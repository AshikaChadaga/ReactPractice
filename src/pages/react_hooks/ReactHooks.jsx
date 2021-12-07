import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

function ReactHooks() {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
    }
    const handleDecrement = () => {
        setCount(count - 1);
    }
    useEffect(() => {
        console.log("Inside UseEffect : count has been updated!");
    }, [count]);

    return (
        <div>
            <h1> Count : {count}</h1>
            <Stack style={{ display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "30px" }} spacing={2} direction="row">
                <Button onClick={() => handleIncrement()} variant="contained">Increment</Button>
                <Button onClick={() => handleDecrement()} variant="contained">Decrement</Button>
            </Stack>
        </div>
    )
}

export default ReactHooks
