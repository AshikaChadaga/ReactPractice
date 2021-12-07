import React, { Component } from 'react';
import Button from '@mui/material/Button';
import Unmount from '../../components/unmount/Unmount';

export class ClassLifecycle extends Component {
    //Mounting Phase
    constructor(props) {

        super(props);
        this.state = { favoritecolor: "red", show: true };
        console.log(`Inside constructor`);
    }
    // static getDerivedStateFromProps(props, state) {
    //     console.log(`Inside getDerivedStateFromProps`)
    //     return { favoritecolor: props.color };
    // }
    componentDidMount() {
        console.log(`Inside ComponentDidMount`)
        setTimeout(() => {
            this.setState({ favoritecolor: "purple" })
        }, 2000)
    }
    //Update Phase
    changeColor = () => {
        this.setState({ favoritecolor: "blue" });
        console.log(`Inside Change Color`);
    }
    shouldComponentUpdate() {
        console.log(`Inside shouldComponentUpdate`);
        return true;
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log(`Inside getSnapshotBeforeUpdate`);
        document.getElementById("div1").innerHTML =
            "Before the update, the favorite was " + prevState.favoritecolor;
    }
    componentDidUpdate() {
        console.log(`Inside componentDidUpdate`);
        document.getElementById("div2").innerHTML =
            "The updated favorite is " + this.state.favoritecolor;
    }
    //Unmounting
    delHeader = () => {
        this.setState({ show: false });
    }
    mountHeader = () => {
        this.setState({ show: true });
    }
    render() {
        console.log(`Inside render`);
        let unmount;
        if (this.state.show){
            unmount = <Unmount/>
        };
        return (
            <div>
                <h1>My Favorite Color is {this.state.favoritecolor}</h1>
                <Button style={{ marginBottom: "30px" }} onClick={this.changeColor} variant="contained">Change Color</Button>
                <div style={{ marginBottom: "30px" }} id="div1"></div>
                <div style={{ marginBottom: "30px" }} id="div2"></div>
                <h1 style={{ marginBottom: "30px" }}>-----------------------------------------------</h1>
                {unmount}
                <Button style={{ marginBottom: "30px", marginRight:"10px" }} onClick={this.delHeader} variant="contained">Unmount</Button>
                <Button style={{ marginBottom: "30px" }} onClick={this.mountHeader} variant="contained">Mount</Button>
            </div>
        );
    }
}

export default ClassLifecycle
