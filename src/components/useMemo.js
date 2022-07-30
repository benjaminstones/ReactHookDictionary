import React, { useState, useMemo } from 'react';

function UseMemoExample() {
    const [count, setCount] = useState(60);

    const expensiveCount = useMemo(() => {
        return count ** 2;
    }, [count])

    return (
        <>
            <h1>useMemo</h1>
            <input
                type="text"
                value={count}
                onChange={(e) => setCount(e.target.value)}
            />
                    <h2>Expensive Calculation : {expensiveCount} </h2>

        </>
    )
}

export default UseMemoExample;