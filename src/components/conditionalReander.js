import React, { Component } from 'react';
class ConditionalReander extends Component {
    state = { 
        tags:["tags1","tags2","tags3", "tags4"]
     }

     renderTags()
     {
         if(this.state.tags.length===0) return "there is no tags!"
         return(
             <ul>
                 {this.state.tags.map((element,index )=>{
                     return <li key={index} >{element}</li>
                 })}
             </ul>
         )
     }
    render() { 
        return ( 
            <div>
                {this.renderTags()}
            </div>
         );
    }
}
 
export default ConditionalReander;