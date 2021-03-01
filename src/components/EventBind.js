import React, { Component } from 'react';

class EventBind extends Component {
    state = {
            message:"hello binding data"
      }
    clickHandler=()=>
    {
        this.setState({
            message: 'goodbye'
        })
    }
    render() { 
        return ( 
            <div>
                <h2> {this.state.message}</h2>
                <button onClick={this.clickHandler}>click</button>
            </div>

         );
    }
}
 
export default EventBind;