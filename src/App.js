import React from 'react';
import UseEffectExample from './components/useEffect';
import UseStateExample from './components/useState'
import UseContextExample from './components/useContext';
import UseRefExample from './components/useRef';

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

    </>

  );
}

export default App;
