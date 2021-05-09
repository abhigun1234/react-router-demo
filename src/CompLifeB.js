import React, { Component } from 'react';

class CompLifeB extends Component {
    constructor(props) {

        super(props)
        this.state = { name: "abhishek" }
        console.log(" constructor of CompLifeB ")
    }
    static getDerivedStateFromProps(props,state){

        console.log("getDerivedStateFromProps of  CompLifeB")
        return null
    }
    render() {
        console.log("render of  CompLifeB")
        return (
            <div>
             comppLife A
            </div>
            
        );
     
    }
    componentDidMount(){
        // ajax

        console.log("componentDidMount of  CompLifeB")
    }
}

export default CompLifeB;