import React, {useState,useEffect} from 'react';

function IpAddressInformation({versionOfIP}){
    const [IPAddress,setIPAddress]=useState('');
    const ipifyURL=`https://api.ipify.org?format=json&${versionOfIP === 'ipv6' ? 'ipv6' : ''}`;
    useEffect(()=>{
        fetch(ipifyURL)
        .then((response)=>response.json())
        .then((data)=>{
            setIPAddress(data.ip);
        })
        .catch((error)=>{
            console.error("Error in fetching IP address: ",error);
        });
    },[ipifyURL]);
    return(
      <div className="ipInformation">
        <h2>{versionOfIP ==='ipv6'?'IPV6 Address':'IPV4 Address'}</h2>
        <p>{IPAddress}</p>
      </div>
    );
}

export default IpAddressInformation;