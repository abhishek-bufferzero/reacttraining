import React, { useState } from 'react';
import Person from './person'

const UseStateparent=()=>{
    
    const[personsState,setPersonsState]=useState({
        persons:[
            {name:'abhishek',age:25},
            {name:'bharath',age:26},
            {name:'subendu',age:25},
            {name:'rashmi',age:26}
        ],
           
    });
    const switchHandler=()=>
    {
        setPersonsState({
                    persons:[
                        {name:'abhishek kumar',age:25},
                        {name:'bharath gowda',age:26},
                        {name:'subendu senapati',age:25},
                        {name:'rashmi ranjan',age:26}
                    ]
        })
    }
    return(
        <div>
                <button onClick={switchHandler}>Switch Name</button>
                <Person name={personsState.persons[0].name}
                         age={personsState.persons[0].age}/>

                <Person name={personsState.persons[1].name}
                         age={personsState.persons[1].age}>
                             My Hobbies:Racing</Person>    
                
                <Person name={personsState.persons[2].name}
                         age={personsState.persons[2].age}/> 

                <Person name={personsState.persons[3].name}
                         age={personsState.persons[3].age}/>   
        </div>
    )
}
export default  UseStateparent;