import React from 'react';
import logo from './logo.svg';
import './App.css';
import SuperSecret from './components/SuperSecret'
import OnOffButton from './components/OnOffButton'
import AccordianMenu from './components/AccordianMenu'

function App() {
  return (
    <div className="App">
      <SuperSecret isAuthenticated={true} />
      <AccordianMenu title='Hi'>
        <p>this is props.children</p>
      </AccordianMenu>
      <OnOffButton />
    </div>
  );
}

export default App;
