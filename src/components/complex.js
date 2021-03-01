import React, { Component } from 'react';
class Complex extends Component {
    state = {
        count:0
      }
      submit=()=>{
          this.setState({
            count:this.state.count+1
          })
         
      }
    render() { 
        return ( 
            <div>
                {/* <span>Primary</span> */}
                <p >{this.formatCount()}</p>
                <button onClick={this.submit}>Submit</button>
            </div>
         );
    }
    formatCount()
    {
       return  this.state.count===0 ?"Zero":this.state.count;
    }
}
 
export default Complex;