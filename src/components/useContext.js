/* eslint-disable react/react-in-jsx-scope */
import { useState, createContext, useContext } from "react";
const UserContext = createContext();

function UseContextExample() {
    const [user, setUser] = useState("Jesse Hall");

    return (
        <UserContext.Provider value={user}>
            <h1>{`Hello ${user}!`}</h1>
            <Component2 user={user} />
        </UserContext.Provider>
    );
}

function Component2() {
    return (
        <>
            <h5>Component 2</h5>
            <Component3 />
        </>
    );
}

function Component3() {
    return (
        <>
            <h5>Component 3</h5>
            <Component4 />
        </>
    );
}

function Component4() {
    return (
        <>
            <h5>Component 4</h5>
            <Component5 />
        </>
    );
}

function Component5() {
    const user = useContext(UserContext);

    return (
        <>  
            <hr />
            <h5>Component 5</h5>
            <h3>{`Hello ${user} again!`}</h3>
        </>
    );
}

export default UseContextExample;