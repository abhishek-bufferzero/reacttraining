import React, { Component } from 'react';
class BindingHandler extends Component {
    state = { 
        count:0,
        tags:["tags1","tags2","tags3","tags4","tags5"]
     }
     bindHandler=()=>{
         this.setState({
            
             count:this.state.count+1
         })
     }
     listHandler=(obj)=>{
         console.log(obj.id);
     }
     renderTags()
     {
         if(this.state.tags.length===0) return 'there is no tags'
         return (
             <ul>
                 {this.state.tags.map((element,index)=>{
                     return <li key={index} onClick={()=>this.listHandler({id:index})}>{element}</li>
                 })}
             </ul>
         )
     }
    render() { 
        return ( 
            <div>
                    <p>{this.formatCount()}</p>
                    <button onClick ={this.bindHandler}> Increase</button>
                    {this.renderTags()}
            </div>
         )
    }
    formatCount()
    {
        return this.state.count===0 ?"Zero":this.state.count;
    }
}
 
export default BindingHandler;