import React, {useState} from 'react';

const Counter = () => {
    const [plus, setPlus] = useState(0);

    function Increment () {
        setPlus ( plus + 1 )
    }

    function Decrement () {
        setPlus ( plus - 1 )
    }

    function Reset () {
        setPlus (0)
    }

    return (
        <div className="Counter">
            <h1>Counter</h1>
            <p>{plus}</p>
            <button onClick={Increment}>Increment</button>
            <button onClick={Decrement}>Decrement</button>
            <button onClick={Reset}>Reset</button>
        </div>
    );
};

export default Counter;