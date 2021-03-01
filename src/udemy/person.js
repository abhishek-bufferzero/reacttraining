import React, { Component } from 'react';

const Person= (props)=>{
        return(
                <>
         <p>I am {props.name} and i am {props.age}years old !</p>
         <span> these all from person component</span>
                <p> {props.children}</p>
               
                </>
         )
        }

export default Person;