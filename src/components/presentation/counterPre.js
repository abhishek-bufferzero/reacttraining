import { indexOf } from 'lodash';
import React, { Component } from 'react';
import CounterChild from './counterchild';

class CountersPre extends Component {
    state = { 
        counters:[
                    {id:1,value:2},
                    {id:2,value:0},
                    {id:3,value:0},
                    {id:4,value:0},
        ]
    }

    handleIncrement=(counter)=>{
        console.log(counter);
        console.log(indexOf(counter));
    }
        // if (this.state.counter
    //     this.setState({
    //        //  count:this.state.count[2].value++
    //     })
    


    handleDecrement=(count)=>{
        // counters=[...this.state.counters]
        // console.log(count);
        // this.state.counters[2].value--
                // this.setState({
                // //   counters
                // })
                // console.log(this.state.counters);
    }

    getBadgeClass(){
        // let classes='badge m-3 badge-'
        // classes+=this.state.count===0?'primary':'warning';
        // return classes;
    }
    formatCount(){
    // return this.state.count===0?'zero':this.state.count;
    }
    render() { 
        return (
            <div>

              {this.state.counters.map(counter =>{
                 return <CounterChild key={counter.id}
                  counters={counter}
                  onIncrement = {this.handleIncrement}
                  onDecrement={this.handleDecrement}
                  ongetBadgeClass={this.getBadgeClass}
                  onformatCount = {this.formatCount}/>}
              )}
            </div>
          );
    }
}
 
export default CountersPre;