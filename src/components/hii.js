import React, { Component } from 'react';
class Hii extends Component {
    state = {
        message:'welcome'
      }
      changeMessage=()=>{
          this.setState({
              message:'thankyou'
          })
      }
    render() { 
        return ( 
            <div>
                <p>{this.state.message}</p>
                    <button onClick={this.changeMessage}>change</button>
            </div>
         );
    }
}
 
export default Hii;