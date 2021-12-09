import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function Homepage() {
    return (
        <div>
            <h1>REACT FEATURES PRACTICE</h1>
            <ul style={{listStyleType:"none"}}>
                <li style={{margin:"30px"}}>
                    <Link style={{ textDecoration: "none", fontSize:"20px" }} to="/props">PROPS</Link>
                </li>
                <li style={{margin:"30px"}}>
                    <Link style={{ textDecoration: "none", fontSize:"20px" }} to="/state">STATE</Link>
                </li>
                <li style={{margin:"30px"}}>
                    <Link style={{ textDecoration: "none", fontSize:"20px" }} to="/class-component">CLASS COMPONENT</Link>
                </li>
                <li style={{margin:"30px"}}>
                    <Link style={{ textDecoration: "none", fontSize:"20px" }} to="/functional-component">FUNCTIONAL COMPONENT</Link>
                </li>
                <li style={{margin:"30px"}}>
                    <Link style={{ textDecoration: "none", fontSize:"20px" }} to="/class-lifecycle">CLASS LIFECYCLE</Link>
                </li>
                <li style={{margin:"30px"}}>
                    <Link style={{ textDecoration: "none", fontSize:"20px" }} to="/functional-lifecycle">FUNCTIONAL LIFECYCLE</Link>
                </li>
                <li style={{margin:"30px"}}>
                    <Link style={{ textDecoration: "none", fontSize:"20px" }} to="/react-hooks">REACT HOOKS</Link>
                </li>
                <li style={{margin:"30px"}}>
                    <Link style={{ textDecoration: "none", fontSize:"20px" }} to="/higher-order-components">HIGHER ORDER COMPONENTS</Link>
                </li>
                <li style={{margin:"30px"}}>
                    <Link style={{ textDecoration: "none", fontSize:"20px" }} to="/profiler">PROFILER</Link>
                </li>
            </ul>
        </div>
    )
}

export default Homepage
