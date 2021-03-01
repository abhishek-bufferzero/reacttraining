import { render } from '@testing-library/react';
import React, { Component } from 'react';
// import AddIcon from '@material-ui/icons/Add';
// import DeleteIcon from '@material-ui/icons/Delete';

// class CounterChild extends Component {
   
//     render() { 
//         return ( 
//             <div className='container'>
//                 <span className={getBadgeClass()}>{formatCount()}</span>
//                 <button className='btn btn-secondry btn-5m my-3' onClick={()=>props.onIncrement(props.counter)}>increment</button>
//                 <button  className='btn btn-danger btn-5m m-3' onClick={()=>props.onDelete(props.counter.id)}>Delete</button>
//             </div>
//          );
//     }
//     getBadgeClass(){
//         let classes='badge m3 badge-'
//         classes+=props.counter.value===0?'primary':'warning'
//         return classes
//     }
//     formatCount(){
//                 const{value}=props.counter
//         return value===0 ? 'zero' : value;
//     }
// }
 
// export default CounterChild; 


const CounterChild = ({counter,onIncrement,onDelete}) => {

  const  getBadgeClass=() =>{
        let classes='text-light badge badge-'
        classes+=counter.value===0?'primary':'warning text-dark'
        return classes
    }
   const formatCount= () =>{
                const{value}=counter
        return value===0 ? 'zero' : value;
    }
    // render(){
    return ( 
        <div className='container'>
                <span className={getBadgeClass()}>{formatCount() }</span>
                <button className='btn btn-secondary btn-5m my-3' onClick={()=>onIncrement(counter)}>increment</button>
                <button  className='btn btn-danger btn-5m m-3' onClick={()=>onDelete(counter.id)}>Delete</button>
            </div>
     );
    // }
}
 
export default CounterChild;