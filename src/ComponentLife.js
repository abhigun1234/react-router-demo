import React, { Component } from 'react';
import ComponentLifeNew from './ComponentLifeNew';

class ComponentLife extends Component {
    constructor(props){
        super(props)
        this.state={
            name:'abhhishek'
        }
        console.log("ComponentLife constructor called")
    }
    static getDerivedStateFromProps(props,state){
        console.log('ComponentLife getDerivedStateFromProps')
        return null
    }
    render() {
        return (
            <div>
                Life cycle render 
                <ComponentLifeNew></ComponentLifeNew>
            </div>
        );
    }
    componentDidMount(){
        console.log("ComponentLife componentDidMount")
    }
}

export default ComponentLife;