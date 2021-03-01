import React, { Component } from 'react';
import Person from'./person'

class Parentclass extends Component {
    state = { 
        persons:[
            {name:'abhishek',age:25},
            {name:'bharath',age:26},
            {name:'subendu',age:25},
            {name:'rashmi',age:26}
        ]
     }
     switchName=()=>
     {
         this.setState({
             persons:[
                 
                    {name:'abhishek kumar',age:25},
                    {name:'bharath gowda',age:26},
                    {name:'subendu senapati',age:25},
                    {name:'rashmi ranjan',age:26}
                 
             ]
             
         })
     }
    render() { 
        return (
            <div>
                <button onClick={this.switchName}>Switch name </button>
                <Person/>
                <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
                <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
                <Person name={this.state.persons[3].name} age={this.state.persons[3].age}/>
                
            </div>
          );
    }
}
 
export default Parentclass;