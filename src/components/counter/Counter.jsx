import React, { useState, useEffect } from "react";
import Button from '@mui/material/Button';

const Counter = () => {
  const [count, setCount] = useState(0);

  //componentDidMount
  useEffect(() => {
    console.log("componentDidMount : The use effect ran");
  }, []);

  // componentDidUpdate
  useEffect(() => {
    console.log("componentDidUpdate : The use effect ran");
  }, [count, count2]);

  //componentWillUnmount
  useEffect(() => {
    console.log("componentWillUnmount : The use effect ran");
    return () => {
      console.log("componentWillUnmount : the return is being ran");
    };
  }, []);

  useEffect(() => {
    console.log(`Count Use Effect : The count has updated to ${count}`);
    return () => {
      console.log(`Count Use Effect : we are in the cleanup - the count is ${count}`);
    };
  }, [count]);

  return (
    <div>
      <h3> Counter </h3>
      <p> current count: {count} </p>
      <Button onClick={() => setCount(count + 1)} variant="contained">Increment Counter</Button>
    </div>
  );
};

export default Counter;