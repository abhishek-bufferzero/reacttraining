import React, { Component } from 'react';
import CounterChild from './CounterChild';

class CountersParent extends Component {
    state = { 
        counters:[
            {id:1, value:0},
            {id:2, value:0},
            {id:3, value:0},
            {id:4, value:0},
            {id:5, value:0}
        ]
     }
     handleReset=()=>{
            const counters=this.state.counters.map((c)=>{
                    c.value=0;
                    return c;
                })
                this.setState({
                    counters
                })
     }
     handleIncrement=(counter)=>{
         const counters=[...this.state.counters];
         const index=counters.indexOf (counter);

         counters[index]={...counter}

         counters[index].value++;
         this.setState({
             counters
         })
        //  console.log(counter)
     }
     handleDelete=(counterId)=>{
         console.log(counterId);
         const counters=this.state.counters.filter((c)=>c.id!==counterId)
         console.log(counters);
         this.setState({
             counters
            //  counters:countno
            })
        }
     
    render() { 
        return ( 
            <div>
                <button className='btn btn-primary btn-5m my-3' onClick={this.handleReset}>Reset</button>
                { this.state.counters.map((counter)=>{
                    // console.log(counter)
                    return<CounterChild key={counter.id}
                    onDelete={this.handleDelete}
                    onIncrement={this.handleIncrement}
                        counter={counter}/>
                })
                }
            </div>
           
            
         );
    }
}
 
export default CountersParent;