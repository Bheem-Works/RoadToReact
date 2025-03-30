import React, { useState, useEffect, createContext, useContext } from 'react';

const misoContext = createContext();

function OneComponent() {
    const [miso, setMiso] = useState('miso Is not here');

    return (
        <misoContext.Provider value={miso}>
            <h1>{`Hello ${miso}`}</h1>
            <Component2 />
        </misoContext.Provider>
    );
}

function Component2() {
    return (
        <>
            <h1>Component 2</h1>
            <Component3 />
        </>
    );
}

function Component3() {
    const run = useContext(misoContext);
    return (
        <>
                        
            <h1>Component 3</h1>
            <p>{`hello ${run}`}</p>

            <Component4 />
        </>
    );
}

function Component4() {
    const miso = useContext(misoContext);

    return (
        <>
            <h1>Component 4</h1>
            <h2>{`Hello ${miso} Again`}</h2>
        </>
    );
}

export default OneComponent;
