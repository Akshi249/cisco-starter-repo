import React, { useEffect, useState } from 'react';
import WebSocketClient from 'websocket';

function PacketLatency() {
  const [latency, setLatency] = useState(null);

  useEffect(() => {
    
    const client = new WebSocketClient.w3cwebsocket('ws://localhost:55455');

    client.onerror = (error) => {
      console.error('WebSocket Error:', error);
    };

    client.onopen = () => {
      console.log('WebSocket Connected');
    };

    client.onmessage = (message) => {
      const packetTimestamp = parseInt(message.data);
      const currentTimestamp = Date.now();
      const packetLatency = currentTimestamp - packetTimestamp;
      setLatency(packetLatency);
    };

    return () => {
      client.close();
    };
  }, []);

  return (
    <div className="packet-latency">
      <h3>Latency of Packet is </h3>
      {latency !== null ? <p>{latency} ms</p> : <p>Calculating latency...</p>}
    </div>
  );
}
export default PacketLatency;