//import logo from './logo.svg';
import React from 'react';
import './App.css';
import './Title-Style.css'
import Title from './Title';
import Wrapper from './Wrapper';
import IpAddressInformation from './IpAddressInfo';
import PacketLatency from './PacketLatency';

function App() {
  return (
    <div className="App">
      <Title />
      <Wrapper>
        <IpAddressInformation versionOfIP="ipv6"/>
      </Wrapper>
      <Wrapper>
        <IpAddressInformation versionOfIP="ipv4"/>
      </Wrapper>
      <Wrapper>
        <PacketLatency heading="Latency of packet"/>
       </Wrapper>
    </div>
  );
}

export default App;
