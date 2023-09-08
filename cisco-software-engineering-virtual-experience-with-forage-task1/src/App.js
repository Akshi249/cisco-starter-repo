//import logo from './logo.svg';
import React from 'react';
import './App.css';
import './Title.css';
import Title from './Title';
import Wrapper from './Wrapper';

function App() {
  return (
    <div className="App">
      <Title />
      <Wrapper heading="sample wrapper component header">
        <p>sample wrapper component content</p>
        <p>this is another child of wrapper componnet</p>
      </Wrapper>
    </div>
  );
}

export default App;
