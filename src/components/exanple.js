import React, { Component } from 'react';

class Example extends Component {
    state = { 
        // count:0,
        name:'abhishek'
        // imageUrl:"https://picsum.photosk/200"
     }
     style={
         fontSize :20,
         fontWeight:"bold",
         color:'red'
     }
     submit=()=>{
         this.setState({
            //  count:this.state.count+1,
             name:'kumar'
             
         })
         console.log('called');
        
     }
    // submit=()=>{
    //     this.setState({
    //         count:this.state.count+1 

    //     })   
        
           
    // }
    render() { 
        return (
             <div>

                    <h1> 
                    {this.state.name} 
                    </h1>

                    {/* adding style attribute-first */}
                    <p style={{fontSize:50}}>Example</p>

                    <p style={this.style}>style attribute2</p>


                    {/* <img src={this.state.imageUrl}/> */}
                    <button onClick ={this.submit}>submit</button>

             </div>
              );
    }

    // formatCount(){
    //     return this.state.count===0 ?"zero" :this.state.count;
    // }
}
 
export default Example;