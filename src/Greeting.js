import React, { Component } from 'react';

class Greeting extends Component {
    constructor(){
     super()
     this.state={isEnabled:true}

    }
    render() {

        // if(this.state.isEnabled){
        //     return (
        //         <div>
        //             Hello
        //         </div>
        //     );

        // }
        // else{

        //     return (
        //         <div>
        //             bye
        //         </div>
        //     );
        // }
        let message
        if(this.state.isEnabled){

            message=<div>Hello</div>
                    }
        else{

            message=<div>bye</div>
        }
        return message
        
    }
    //  return(this.state.isLoggedIn ?<div>Welcome</div>:<div>Bye</div>)
}

export default Greeting;