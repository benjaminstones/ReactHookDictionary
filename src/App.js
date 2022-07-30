import React from 'react';
import UseEffectExample from './components/useEffect';
import UseStateExample from './components/useState'
import UseContextExample from './components/useContext';
import UseRefExample from './components/useRef';
import UseReducerExample from './components/useReducer';
import UseMemoExample from './components/useMemo'


function App() {
  return (
    <>
      <UseStateExample />
      <br/>
      <hr/>
      <br/>
      <UseEffectExample />
      <br/>
      <hr/>
      <br/>
      <UseContextExample />
      <br/>
      <hr/>
      <br/>
      <UseRefExample />
      <br/>
      <hr/>
      <br/>
      <UseReducerExample />
      <br/>
      <hr/>
      <br/>
      <UseMemoExample />
    </>

  );
}

export default App;
