import React from 'react';

const CounterChild = (props) => {
    const { onIncrement, onDecrement, ongetBadgeClass, onformatCount,  counters} = props

        return ( 
            <div>
                <span className={ongetBadgeClass()}>{onformatCount()}</span>
                <button onClick={() =>onIncrement (counters)}>increment</button>
                <button onClick={() => onDecrement}>Decrement</button>
                </div>
         );

}
 
export default CounterChild;