import React, { Component } from 'react';

class FunctionClick extends Component {
    state = {  }

    clickHandler=()=>
    {
        console.log('clicked the button');
    }
    render() { 
        return ( 
            <div>
                <button onClick={this.clickHandler}>Click me </button>
            </div>
         );
    }
}
 
export default FunctionClick;