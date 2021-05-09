import React, { Component } from 'react';

class ComponentLifeNew extends Component {
    constructor(props){
        super(props)
        this.state={
            name:'abhhishek'
        }
        console.log(" ComponentLifeNew constructor called")
    }
    static getDerivedStateFromProps(props,state){
        console.log(' ComponentLifeNew getDerivedStateFromProps')
        return null
    }
    render() {
        console.log("ComponentLifeNew render")
        return (
            <div>
                Life cycle render 
            </div>
        );
    }
    componentDidMount(){
        console.log("ComponentLifeNew componentDidMount")
    }
}

export default ComponentLifeNew;