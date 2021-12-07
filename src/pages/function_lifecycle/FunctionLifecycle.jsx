import React, {useState} from 'react';
import Counter from '../../components/counter/Counter';
import Button from '@mui/material/Button';

function FunctionLifecycle() {
    const [showCounter, setShowCounter] = useState(false);
  return (
    <div>
      <h1>Demonstrating functional Component Lifecycle</h1>
      <Button onClick={() => setShowCounter(!showCounter)} variant="contained">{showCounter ? "Hide Counter" : "Show Counter"}</Button>  
      {showCounter && <Counter />}    
    </div>
  )
}

export default FunctionLifecycle
