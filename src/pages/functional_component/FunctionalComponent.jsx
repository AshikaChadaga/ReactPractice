import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

function FunctionalComponent() {
    const [count, setCount] = useState(0);
    const handleIncrement = () => {
        setCount(count + 1);
    }
    const handleDecrement = () => {
        setCount(count - 1);
    }
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

export default FunctionalComponent
