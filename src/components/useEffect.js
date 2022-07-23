import React, { useState, useEffect } from 'react';

const UseEffectExample = () => {
    const [message, setMessage] = useState('This is the first message');

    useEffect(() => {
      setTimeout(() => {
        setMessage("This is the second message, 1 second later");
      }, 1000)
    })
  
    return (
    <div>
        <h1>useEffect</h1>
        <h4>{message}</h4>
    </div>
    )
    
}

export default UseEffectExample;