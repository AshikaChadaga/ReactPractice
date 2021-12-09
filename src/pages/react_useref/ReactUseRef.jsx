import React, { useRef } from 'react';
import Button from '@mui/material/Button';

function ReactUseRef() {
    const focusPoint = useRef(null);
    const onClickHandler = () => {
        focusPoint.current.value = "The quick brown fox jumps over the lazy dog";
        focusPoint.current.focus();
    };
    return (
        <div>
            <div>
                <Button style={{margin:"50px"}} onClick={onClickHandler} variant="contained">Click Me</Button>
            </div>
            <label>
                Click on the action button to focus and populate the text.
            </label><br /><br />
            <textarea rows={5} cols={50} ref={focusPoint} />
        </div>

    );
}

export default ReactUseRef
