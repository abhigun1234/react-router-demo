import React, { Component } from 'react';
import CompLifeB from './CompLifeB';
import axios from 'axios'

class CompLifeA extends Component {
    constructor(props) {

        super(props)
        this.state = { posts: [] }
        console.log(" constructor of CompLifeA ")
    }
    static getDerivedStateFromProps(props,state){

        console.log("getDerivedStateFromProps of  CompLifeA")
        return null
    }
    render() {
        console.log("render of  CompLifeA")
        return (
            <div>
             comppLife A
             <CompLifeB></CompLifeB>
            </div>
            
        );
     
    }
    componentDidMount(){
        // ajax
        axios.get('https://jsonplaceholder.typicode.com/posts').then(res=>{

        console.log("data",res)
            this.setState({posts:res.data})
        }).catch(error=>{
            console.log("error",error)
        })
        console.log("componentDidMount of  CompLifeA")
    }
}

export default CompLifeA;