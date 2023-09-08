//import logo from './logo.svg';
import React from 'react';
import './App.css';
import './Title-Style.css'
import Title from './Title';
import Wrapper from './Wrapper';
import IpAddressInformation from './IpAddressInfo';

function App() {
  return (
    <div className="App">
      <Title />
      <Wrapper heading="IPV6 Address">
        <IpAddressInformation versionOfIP="ipv6"/>
      </Wrapper>
      <Wrapper heading="IPV4 Address">
        <IpAddressInformation versionOfIP="ipv4"/>
      </Wrapper>
    </div>
  );
}

export default App;
