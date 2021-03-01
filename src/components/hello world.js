import React, { Component } from 'react';

class Hello extends Component {
    state = {  }
    render() { 
        return (
            <div className='hello'>
               <marquee direction = "up"  > <h1 >Hello</h1></marquee>
           
            </div>
          );
    }
}
 
export default Hello;