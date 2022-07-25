# React Hook Dictionary

Walkthrough of basic react hooks intended as reference for future projects.


## Table of Contents
1. [useState](#useState)
2. [useEffect](#useEffect)
3. [useContext](#useContext)

## useState

useState() is used to handle reactive data. Reactive data is called state. When state changes, the UI needs to be re-rendered. 

It takes 1 argument, the default state and returns a value you can use and a function to set the value. 

## useEffect

### Component Lifecycle

componentDidMount() -> When the component is added to the UI, or "mounted". This can only happen once. 

componentDidUpdate() -> When reactive data on the component changes. 

componentDidUnmount() -> When the component is removed from the UI, or "unmounted".

### The Hook

useEffect() is a function, which takes a function as its first argument. This function is known as a side effect. This function will be run whenever react updates the DOM. This happens when the component mounts and when stateful data changes.

The second argument is an array of dependencies. An empty array means no dependencies so will only run once initialised. You can add a state to this dependency array. Any time this value changes, the function will run. 

Returning a function from a useEffect

## useContext

useContext() allows you to work with react's context API which allows you to share data without passing it as props:

- A context can be created with createContext().
- A context provider can be used to create a scope in which components can access the context. 
- The hook allows you to access the current value within a component inside the context provider. 
