# React Hook Dictionary

Walkthrough of basic react hooks intended as reference for future projects.


## Table of Contents
1. [useState](#useState)
2. [useEffect](#useEffect)
3. [useContext](#useContext)
4. [useRef](#useRef)
5. [useReducer](#useReducer)
6. [useMemo](#useMemo)
7. [useCallback](#useCallback)

## useState

`useState()` is used to handle reactive data. Reactive data is called state. When state changes, the UI needs to be re-rendered. 

It takes 1 argument, the default state and returns a value you can use and a function to set the value. 

## useEffect

### Component Lifecycle

`componentDidMount()` -> When the component is added to the UI, or "mounted". This can only happen once. 

`componentDidUpdate()` -> When reactive data on the component changes. 

`componentDidUnmount()` -> When the component is removed from the UI, or "unmounted".

### The Hook

`useEffect()` is a function, which takes a function as its first argument. This function is known as a side effect. This function will be run whenever react updates the DOM. This happens when the component mounts and when stateful data changes.

The second argument is an array of dependencies. An empty array means no dependencies so will only run once initialised. You can add a state to this dependency array. Any time this value changes, the function will run. 

Returning a function from a useEffect

## useContext

`useContext()` allows you to work with react's context API which allows you to share data without passing it as props:

- A context can be created with `createContext()`.
- A context provider can be used to create a scope in which components can access the context. 
- The hook allows you to access the current value within a component inside the context provider. 

This can be used instead of drilling props through multiple layers of components. 

## useRef
`useRef()` allows you to create an object which keeps the same values between renders. 

It can be used when a value changes, like `useState()`, but it doesn't cause the component to be re-rendered when it changes. 

A common usecase is to grab JSX (or HTML) elements from the DOM. 

## useReducer
Similar to `useState()`, but manages state using the Redux pattern. 

Instead of updating the state directly, actions are dispatched which go to a reducer function. This function determines the next state. 

`useReducer()` returns 2 values; a state and a dispatch. A dispatch can have a type (of type string), and an optional payload. Dispatching an item will trigger a reducer function, which you can define. This function can take the state and action as arguments, and use them to compute the next value within a switch statement. 

This is used to manage state as the complexity of an application grows. 

## useMemo
`useMemo()` can improve performance by allowing the result of function calls to be cached. 

A useMemo function takes a function as a first parameter and an array of dependencies which, when changed, will cause a recompute. 

Note: only use as needed, for expensive computations. 

## useCallback
`useCallback` allows you to memoize an entire function. 

When a function is defined in an object, a new function instance is created every time that component is rerendered. 

Wrapping a function with useCallback() allows the same function to be passed down to multiple child components (useful when a component has a big list of child components). This prevents unecessary rerenders of the children as they will all be using the same function object. 

