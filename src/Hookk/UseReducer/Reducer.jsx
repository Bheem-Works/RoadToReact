import React, { useState, useReducer, useCallback } from 'react';

function Reducer() {
    // Reducer function
    const reducer = (state, action) => {
        switch (action.type) {
            case 'INCREMENT':
                return { count: state.count + 1 };
            default:
                return state;
        }
    };

    // Using useReducer in the component
    const [state, dispatch] = useReducer(reducer, { count: 0 });

    // Memoized callback function
    const newFn = useCallback(() => {
        console.log('callback function');
    }, []);

    return (
        <div>
            <h1>{state.count}</h1>
            <button onClick={() => dispatch({ type: 'INCREMENT' })}>
                Click here
            </button>
        </div>
    );
}

export default Reducer;
