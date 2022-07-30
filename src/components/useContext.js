/* eslint-disable react/react-in-jsx-scope */
import { useState, createContext, useContext } from "react";
const UserContext = createContext();

function UseContextExample() {
    const [user, setUser] = useState("Brad Pitt");

    return (
        <>
        <h1>useContext</h1>
        <UserContext.Provider value={user}>
            <h5>Parent Component</h5>
            <h3>{`Hello ${user}!`}</h3>
            <Component2 user={user} />
        </UserContext.Provider>
        </>
    );
}

function Component2() {
    return (
        <>
            <hr />
            <h5>Child Component</h5>
            <Component3 />
        </>
    );
}

function Component3() {
    const user = useContext(UserContext);

    return (
        <>
            <hr />
            <h5>Grandchild Component</h5>
            <h3>{`Hello ${user} again!`}</h3>
        </>
    );
}

export default UseContextExample;